# DSTV Angular - Sistema de Gerenciamento IPTV

**DSTV Angular** é uma plataforma de gerenciamento de serviços de IPTV (Internet Protocol Television) construída com Angular 19. Esta aplicação serve como um sistema completo de negócios para provedores de serviços IPTV.

## 🎯 Objetivo Principal
Gerenciar clientes, planos de assinatura, servidores e comunicação automatizada via WhatsApp para empresas de IPTV.

## 💻 Tecnologias Utilizadas
- **Angular 19** - Framework principal
- **TypeScript 5.5** - Tipagem forte
- **Firebase** - Banco de dados e autenticação
- **PrimeNG** - Biblioteca de componentes UI
- **Chart.js** - Visualização de dados
- **SCSS** - Pré-processamento CSS

## 🌟 Funcionalidades Principais

### 1. Gestão de Clientes
- CRUD completo para clientes
- Campos: nome, usuário, email, telefone, data de expiração
- Filtros por status (expirados, a expirar, ativos)
- Exportação para Excel

### 2. Sistema de Assinaturas
- Gerenciamento de planos de serviço
- Renovação automática
- Controle de datas de validade

### 3. Comunicação WhatsApp
- Templates personalizáveis de mensagens
- Variáveis dinâmicas (nome, data expiração, plano)
- Integração direta com WhatsApp Web

### 4. Dashboard Analítico
- Estatísticas em tempo real
- Gráficos interativos
- Visualização de status de clientes

### 5. Gestão de Servidores
- Controle de servidores IPTV
- Associação servidor-cliente
- Monitoramento de disponibilidade

## 🏗️ Estrutura da Aplicação
```
src/app/dstv/
├── components/
│   ├── auth/          # Autenticação
│   ├── dashboard/     # Painel principal
│   ├── pages/         # Módulos de negócio
│   └── uikit/         # Componentes UI
└── service/           # Serviços de negócio
```

## 🔐 Segurança
- Autenticação Firebase
- Proteção de rotas
- Validação de entrada
- Configuração CORS

## 📱 Multiplataforma
- Design responsivo para todos dispositivos
- Suporte mobile-first
- Interface adaptativa

## 🚀 Implantação
- Firebase Hosting (produção)
- Docker (contêineres)
- Heroku
- GitHub Pages

## 📊 Módulos Principais

### AuthModule
Componentes de autenticação e controle de acesso.

### DashboardModule
Painel principal com estatísticas e visualizações.

### PagesModule
Módulos de negócio:
- **Cliente** - Gestão de clientes
- **Plano** - Administração de planos
- **Servidor** - Gerenciamento de servidores
- **Mensagem** - Templates WhatsApp
- **Export** - Exportação de dados
- **Relatorios** - Relatórios e analytics

### UI Kit Module
Componentes reutilizáveis da interface.

### LayoutModule
Componentes estruturais do layout.

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+
- Angular CLI
- Conta Firebase

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
ng serve
```

### Build
```bash
ng build
```

### Testes
```bash
ng test
```

## 🔧 Serviços Principais

### Serviços de Negócio
- **ClienteService** - Operações CRUD de clientes
- **PlanoService** - Gestão de planos
- **ServidorFireService** - Gerenciamento de servidores
- **MensagemService** - Templates de mensagem
- **AuthServiceService** - Autenticação

### Serviços de Apoio
- **CountryService** - Dados geográficos
- **CustomerService** - Operações adicionais de clientes
- **EventService** - Gestão de eventos
- **IconService** - Gestão de ícones

## 📋 Recursos Adicionais

### Importação/Exportação de Dados
- Exportação completa em formato JSON
- Importação com validação
- Relatórios de importação

### Sistema de Renovação
- Processo automatizado de renovação
- Atualização automática de datas de expiração
- Mensagens de confirmação

### Validação e Relatórios
- Validação de entrada de dados
- Sanitização de dados
- Relatórios detalhados de operações

## 🚀 Deploy

### GitHub Pages
Para gerar build para o GitHub Pages:
```bash
ng build --configuration production --aot --base-href="./"
ngh --dir=dist/dstv-angular/browser
```

Acesse: https://adcdenis.github.io/dstv-angular/

### Firebase
Para deploy no Firebase:
```bash
ng build --configuration production --aot
firebase deploy
```

Para limpar cache e forçar atualização:
```bash
ng build --configuration production --aot --output-hashing=all
```

Instalar Firebase Tools (se necessário):
```bash
npm install -g firebase-tools
```

---

Este projeto representa uma solução completa e pronta para produção para gerenciamento de negócios IPTV, com arquitetura Angular moderna, recursos abrangentes e múltiplas opções de implantação.
