import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagemService } from 'src/app/dstv/service/mensagem.service';
import { MensagemTemplateI } from 'src/app/dstv/api/dstvInterfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
  providers: [MessageService],
  standalone: false
})
export class MensagemComponent implements OnInit {
  form: FormGroup = this.fb.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    corpo: ['', [Validators.required, Validators.minLength(10)]],
    ativo: [true]
  });
  previewText: string = '';


  tokens = [
    { label: 'Saudação', value: '{{saudacao}}' },
    { label: 'Nome', value: '{{nome}}' },
    { label: 'Telefone', value: '{{telefone}}' },
    { label: 'Usuário', value: '{{usuario}}' },
    { label: 'Data Vencimento', value: '{{dataVencimento}}' },
    { label: 'Plano Nome', value: '{{plano.nome}}' },
    { label: 'Plano Valor', value: '{{plano.valor}}' }
  ];

  constructor(private fb: FormBuilder, private mensagemService: MensagemService, private messageService: MessageService) {}

  async ngOnInit() {
    const ativa = await this.mensagemService.getAtiva();
    if (ativa) {
      this.form.patchValue(ativa);
    } else {
      this.form.patchValue({
        nome: 'WhatsApp Padrão',
        ativo: true,
        corpo: this.defaultCorpo()
      });
    }
    this.computePreview();
    this.form.get('corpo')?.valueChanges.subscribe(() => this.computePreview());
  }

  novo() {
    this.form.reset({ ativo: false });
  }

  editar(t: MensagemTemplateI) {
    this.form.patchValue(t);
  }

  async salvar() {
    const ativa = await this.mensagemService.getAtiva();
    const val = { ...(this.form.value as MensagemTemplateI), ativo: true, nome: 'WhatsApp Padrão' };
    if (ativa && ativa.id) {
      val.id = ativa.id;
      await this.mensagemService.update(val);
    } else if (val.id) {
      await this.mensagemService.update(val);
    } else {
      await this.mensagemService.create(val);
    }
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Template salvo' });
  }

  async excluir(t: MensagemTemplateI) {}

  inserirToken(token: string) {
    const corpo = this.form.get('corpo')?.value || '';
    this.form.patchValue({ corpo: corpo + token });
  }

  async marcarAtivo(t: MensagemTemplateI) {}

  defaultCorpo(): string {
    return (
      `Olá, {{saudacao}}\n` +
      `*Segue seu vencimento IPTV* \n` +
      `*Vencimento:* _{{dataVencimento}}_\n\n` +
      `*PLANO CONTRATADO* \n` +
      `⭕ _Plano:_ *{{plano.nome}}* \n` +
      `⭕ _Valor:_ *R$ {{plano.valor}}* \n` +
      `⭕ _Conta:_ *{{usuario}}*\n\n` +
      `*FORMAS DE PAGAMENTOS* \n` +
      `✅ Pic Pay : @canutobr\n` +
      `✅ Banco do Brasil: ag 3020-1 cc 45746-9\n` +
      `✅ Pix: canutopixbb@gmail.com \n\n` +
      `- Duração da lista 30 dias, acesso de um ponto, não permite conexões simultâneas. \n\n` +
      `- Assim que efetuar o pagamento, enviar o comprovante e vou efetuar a contratação/renovação o mais rápido possível.\n\n` +
      `-*Aguardamos seu contato para renovação!*`
    );
  }
  computePreview() {
    const text: string = this.form.get('corpo')?.value || '';
    const hora = new Date().getHours();
    const saudacao = (hora > 6 && hora < 12) ? 'bom dia!' : (hora >= 12 && hora < 18) ? 'boa tarde!' : 'boa noite!';
    const exemplo = {
      nome: 'João da Silva',
      telefone: '55999999999',
      usuario: 'usuario123',
      dataVencimento: new Date().toLocaleDateString('pt-BR'),
      plano: { nome: 'Plano Premium', valor: '49,90' }
    };
    this.previewText = (text || '')
      .replace(/\{\{saudacao\}\}/g, saudacao)
      .replace(/\{\{nome\}\}/g, exemplo.nome)
      .replace(/\{\{telefone\}\}/g, exemplo.telefone)
      .replace(/\{\{usuario\}\}/g, exemplo.usuario)
      .replace(/\{\{dataVencimento\}\}/g, exemplo.dataVencimento)
      .replace(/\{\{plano\.nome\}\}/g, exemplo.plano.nome)
      .replace(/\{\{plano\.valor\}\}/g, exemplo.plano.valor);
  }

  limpar() {
    this.form.patchValue({ corpo: '' });
    this.computePreview();
  }
}
