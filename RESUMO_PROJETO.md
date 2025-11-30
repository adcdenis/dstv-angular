# Resumo do Projeto DSTV Angular

## Visão Geral
O DSTV Angular é um sistema de gestão para serviços de IPTV (Internet Protocol Television) desenvolvido em Angular 19. O sistema permite gerenciar clientes, planos, servidores e enviar mensagens personalizadas via WhatsApp para cobranças e renovações.

## Tecnologias Utilizadas

### Frontend
- **Angular 19.0.3** - Framework principal
- **TypeScript 5.5.4** - Linguagem de programação
- **PrimeNG 17.11.0** - Biblioteca de componentes UI
- **PrimeFlex 3.3.1** - Sistema de grid CSS
- **PrimeIcons 6.0.1** - Conjunto de ícones
- **SCSS** - Pré-processador CSS

### Backend & Banco de Dados
- **Firebase 10.9.0** - Banco de dados NoSQL (Firestore)
- **Angular Fire 17.0.1** - Integração Angular com Firebase
- **Firebase Authentication** - Autenticação de usuários

### Utilitários
- **Chart.js 4.4.2** - Biblioteca para gráficos
- **File-saver 2.0.5** - Download de arquivos
- **XLSX 0.18.5** - Manipulação de arquivos Excel
- **PrismJS 1.29.0** - Destaque de sintaxe de código

### Desenvolvimento & Testes
- **Angular CLI 19.0.4** - Interface de linha de comando
- **Karma 6.4.3** - Executor de testes unitários
- **Jasmine 5.1.2** - Framework de testes
- **Protractor 7.0.0** - Testes end-to-end

### Deploy & Infraestrutura
- **Docker** - Contêineres para deploy
- **Docker Compose** - Orquestração de contêineres
- **Nginx** - Servidor web para produção
- **Firebase Hosting** - Hospedagem estática
- **Heroku** - Plataforma de deploy (via Procfile)

## Funcionalidades Principais

### 1. Autenticação
- Login com email e senha via Firebase Authentication
- Sistema de guards para proteção de rotas
- Persistência de sessão configurada

### 2. Gestão de Clientes
- CRUD completo para clientes
- Campos: nome, usuário, email, telefone, observação, data de vencimento
- Relacionamento com planos e servidores
- Filtros por status: vencidos, a vencer em 3 dias, não vencidos
- Exportação para Excel
- Clonagem de registros

### 3. Gestão de Planos
- CRUD para planos de serviço
- Campos: nome e valor
- Associação com clientes

### 4. Gestão de Servidores
- CRUD para servidores
- Campo principal: nome
- Associação com clientes

### 5. Dashboard
- Estatísticas em tempo real: clientes ativos, vencidos, a vencer
- Visualização de dados com gráficos
- Interface responsiva

### 6. Sistema de Mensagens
- Template personalizado para WhatsApp
- Variáveis dinâmicas: saudação, nome, telefone, usuário, data vencimento, plano
- Preview em tempo real do template
- Envio direto via WhatsApp Web

### 7. Funcionalidades de Comunicação
- Envio de mensagens personalizadas via WhatsApp
- Sistema de renovação com atualização automática de vencimento
- Envio de confirmação de renovação

### 8. Importação/Exportação
- Exportação completa dos dados em formato JSON
- Importação de dados com validação
- Relatório de importação: totais, novos, editados, inválidos

### 9. Interface Responsiva
- Design adaptável para dispositivos móveis
- Layout otimizado com PrimeNG e PrimeFlex
- Navegação por menu lateral

## Estrutura do Projeto

### Organização de Módulos
- **Auth Module** - Componentes de autenticação
- **Dashboard Module** - Painel principal
- **Pages Module** - Módulos de CRUD (clientes, planos, servidores, mensagens)
- **UI Kit Module** - Componentes de demonstração
- **Layout Module** - Componentes estruturais

### Serviços Principais
- **ClienteService** - Operações CRUD de clientes
- **PlanoService** - Gestão de planos
- **ServidorFireService** - Gestão de servidores
- **MensagemService** - Templates de mensagem
- **AuthServiceService** - Autenticação

### Configurações
- **Firebase** - Banco de dados e autenticação
- **Docker** - Contêineres para desenvolvimento
- **Nginx** - Servidor web para produção
- **Environment** - Configurações de ambiente

## Deploy
O projeto suporta múltiplas opções de deploy:
- **Firebase Hosting** - Para ambiente de produção
- **Docker** - Para contêineres
- **Heroku** - Via Procfile
- **GitHub Pages** - Para documentação/demonstração

## Segurança
- Autenticação via Firebase
- Guards de rota para proteção
- Validação de formulários
- Sanitização de dados

## Internacionalização
- Configuração para idioma português (pt-BR)
- Formatação de datas e números localizada

O sistema é uma solução completa para gestão de serviços de IPTV, com foco em usabilidade, responsividade e automação de processos de cobrança e comunicação com clientes.
