#!/bin/bash

# Nome da imagem Docker
IMAGE_NAME="dstv-angular"
IMAGE_TAG="latest"

echo "🚀 Construindo a imagem Docker para Podman..."

# Construir a imagem usando o Dockerfile.podman
podman build -f Dockerfile.podman -t $IMAGE_NAME:$IMAGE_TAG .

if [ $? -eq 0 ]; then
    echo "✅ Imagem Docker construída com sucesso!"
    echo "📦 Nome da imagem: $IMAGE_NAME:$IMAGE_TAG"
    echo ""
    echo "Para executar o contêiner:"
    echo "podman run -d -p 8080:80 --name dstv-app $IMAGE_NAME:$IMAGE_TAG"
    echo ""
    echo "Para parar o contêiner:"
    echo "podman stop dstv-app"
    echo ""
    echo "Para remover o contêiner:"
    echo "podman rm dstv-app"
    echo ""
    echo "Para remover a imagem:"
    echo "podman rmi $IMAGE_NAME:$IMAGE_TAG"
else
    echo "❌ Falha ao construir a imagem Docker"
    exit 1
fi
