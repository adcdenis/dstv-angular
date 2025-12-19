# Docker com Podman - Aplicação DSTV Angular

Este guia fornece instruções para construir e executar a aplicação Angular usando Podman.

## Pré-requisitos

- [Podman](https://podman.io/getting-started/installation) instalado
- Sistema operacional compatível (Linux, macOS, Windows)

## Construir a imagem

### Opção 1: Usando o script de build (recomendado)

```bash
chmod +x build-docker.sh
./build-docker.sh
```

### Opção 2: Comando manual

```bash
podman build -f Dockerfile.podman -t dstv-angular:latest .
```

### Nota sobre dependências

Se encontrar erros de dependência durante o build, o Dockerfile já está configurado com `--legacy-peer-deps` para lidar com conflitos de versão entre pacotes Angular. Caso persistam erros, pode ser necessário atualizar as versões dos pacotes no `package.json`.

## Executar o contêiner

```bash
podman run -d -p 8080:80 --name dstv-app dstv-angular:latest
```

A aplicação estará disponível em: http://localhost:8080

## Comandos úteis do Podman

### Ver contêineres em execução
```bash
podman ps
```

### Ver todas as imagens
```bash
podman images
```

### Parar o contêiner
```bash
podman stop dstv-app
```

### Iniciar o contêiner novamente
```bash
podman start dstv-app
```

### Remover o contêiner
```bash
podman rm dstv-app
```

### Remover a imagem
```bash
podman rmi dstv-angular:latest
```

### Ver logs do contêiner
```bash
podman logs dstv-app
```

### Executar comandos dentro do contêiner
```bash
podman exec -it dstv-app sh
```

## Estrutura dos arquivos

- `Dockerfile.podman` - Arquivo Dockerfile otimizado para produção
- `nginx.conf` - Configuração do servidor Nginx para servir a aplicação Angular
- `.dockerignore` - Arquivos e diretórios ignorados durante o build
- `build-docker.sh` - Script de build automatizado

## Otimizações incluídas

- **Multi-stage build**: Separa o ambiente de build do ambiente de produção
- **Alpine Linux**: Imagem base menor e mais segura
- **Cache eficiente**: Aproveita o cache do Docker para acelerar builds subsequentes
- **Health check**: Verifica se a aplicação está respondendo
- **Configuração Nginx**: Otimizada para Angular com SPA, gzip e cache
- **Segurança**: Cabeçalhos de segurança configurados

## Dicas

- A porta padrão é 80 dentro do contêiner, mapeada para 8080 na máquina host
- A aplicação é servida como uma SPA (Single Page Application)
- Arquivos estáticos são cacheados automaticamente pelo Nginx
- O health check verifica se a aplicação está respondendo corretamente
