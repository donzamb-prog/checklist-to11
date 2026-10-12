🚗 Checklist TO 11
Sistema PWA offline para registro e checklist de acidentes com choque em objetos na faixa de rolamento em rodovias.

O Checklist TO 11 foi desenvolvido em HTML5, CSS3 e JavaScript puro (vanilla), com suporte completo a Progressive Web App (PWA), permitindo instalação como aplicativo nativo em dispositivos móveis e desktops, funcionando 100% offline.

📋 Objetivo
O sistema simplifica, padroniza e acelera o registro de ocorrências operacionais por equipes de campo em rodovias.

Permite a coleta rápida de dados da localização, traçado da via, condições do tempo, objetos encontrados na pista, dados completos dos veículos, condutores, passageiros e registros fotográficos otimizados, mesmo em locais sem conectividade.

✨ Principais Recursos
📶 Funcionamento 100% Offline: Cache nativo e armazenamento local resiliente via Service Worker.

📱 Instalável como PWA: Suporte a Android, iOS (Safari) e Desktop (Chrome/Edge).

🖼️ Compressão Automática de Imagens: Redimensiona e comprime fotos tiradas pelas câmeras dos celulares no próprio navegador, evitando travamentos e otimizando o uso de memória.

🚘 Múltiplos Veículos e Fotos Individuais: Registro completo de envolvidos com opção de anexar fotos para cada veículo ou para o local.

📑 Geração e Compartilhamento de PDF/HTML: Relatório limpo, formatado para impressão e pronto para compartilhamento via WhatsApp ou e-mail.

🔤 Máscara Automática de Placas: Ajuste em tempo real para padrões Mercosul e antigo (caixa alta automática).

⏱️ Preenchimento Automático: Data e hora ajustadas no momento da abertura da ocorrência.

🎨 Modos de Visualização Operacional:

Modo Rodovia: Botões e campos ampliados para uso em telas sensíveis ao toque em campo.

Alto Contraste: Melhor leitura sob sol forte.

Modo Noturno: Redução de fadiga visual em ocorrências noturnas.

📱 Instalação
Computador (Chrome / Edge / Brave)
Acesse: [https://donzamb-prog.github.io/checklist-to11/](https://donzamb-prog.github.io/checklist-to11/)

Clique no ícone de Instalar aplicativo na barra de endereço do navegador.

Android (Chrome)
Abra o link do projeto no Google Chrome.

Toque no menu de três pontos (⋮) no canto superior direito.

Selecione Adicionar à tela inicial ou Instalar aplicativo.

iOS (iPhone / iPad)
Abra o link no Safari.

Toque no botão de Compartilhar (ícone do quadrado com a seta para cima).

Selecione Adicionar à Tela de Início.

💻 Tecnologias Utilizadas
HTML5 & CSS3 (Design responsivo e variáveis CSS)

JavaScript ES6+ (Vanilla JS sem dependências externas)

Service Worker (Estratégia Network-First com Fallback para Cache)

Web App Manifest (Suporte PWA e ícones otimizados)

Canvas API (Processamento e compressão de imagens em tempo real)

GitHub Pages (Hospedagem estática e distribuição)

📂 Estrutura do Projeto
index.html: Interface principal, formulário e scripts

manifest.json: Configurações do PWA e ícones

service-worker.js: Controle de cache e funcionamento offline

LICENSE: Termos de licença de uso

README.md: Documentação do projeto

icons/icon-192.png: Ícone do aplicativo (192x192)

icons/icon-512.png: Ícone do aplicativo (512x512)

🔒 Licença
Este projeto é distribuído gratuitamente conforme os termos definidos no arquivo LICENSE.

É concedida permissão para utilização interna por concessionárias, empresas privadas e órgãos públicos de trânsito. É expressamente proibida a comercialização deste software ou de versões derivadas sem autorização do autor.

👨‍💻 Autor
Donizete Zambeli

Repositório oficial: [https://github.com/donzamb-prog/checklist-to11](https://github.com/donzamb-prog/checklist-to11)

Projeto desenvolvido para apoio e otimização das atividades das equipes operacionais viárias.
