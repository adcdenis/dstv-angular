export interface ServidorI {
    id?: string;
    nome?: string;
    valorCredito?: number;
}

export interface PlanoI {
    id?: string;
    nome?: string;
    valor?: number;
}

export interface ClienteI {
    id?: string;
    nome?: string;
    usuario?: string;
    email?: string;
    telefone?: number;
    observacao?: string;
    dataVencimento: Date;
    //combos
    servidor?: ServidorI;
    plano?: PlanoI;
}

export interface MensagemTemplateI {
    id?: string;
    nome?: string;
    corpo?: string;
    ativo?: boolean;
    criadoEm?: number;
}

