# Tutorial Completo: Criando o Projeto Aura Design do Zero com IA

Olá! Vou te guiar por todo o processo de criação desse projeto incrível, partindo do zero absoluto. Imagina que você nunca instalou nada no seu computador e nunca programou na vida. Sem problemas, vamos juntos passo a passo, e eu vou te explicar o porquê de cada coisa para que você não apenas siga instruções, mas entenda o que está acontecendo. Vamos lá?

### Antes de Começarmos: Entendendo o Que Vamos Fazer

Pense no projeto como construir uma casa. Você precisa de ferramentas (martelo, serra, trena), uma planta (o desenho da casa), materiais (tijolos, cimento) e um terreno onde construir. Em programação é a mesma lógica. As ferramentas são os programas que vamos instalar, a planta é o design e o documento de requisitos, os materiais são as imagens e vídeos, e o terreno é a pasta do projeto no seu computador.

A grande mágica aqui é que vamos usar Inteligência Artificial para fazer praticamente todo o trabalho pesado. Há cinco anos isso seria impossível. Hoje, em um final de semana, você consegue entregar um site profissional que custaria 10 mil reais.

### Etapa 1: Preparando Seu Computador (Instalações Iniciais)

### 1.1 Instalando o Node.js

O Node.js é como uma fundação que muitos programas modernos precisam para funcionar. Mesmo que você não vá usar Node diretamente, várias ferramentas que vamos usar dependem dele. Pense nele como o motor de um carro: você não interage com ele diretamente, mas sem ele nada funciona.

Primeiro verifique se você já não tem o node instalado.

Para verificar, abra o terminal do seu computador. No Windows, pressione a tecla Windows e digite "cmd" ou "PowerShell". No Mac, pressione Command+Espaço e digite "Terminal". Com o terminal aberto, digite o seguinte comando e pressione Enter:

```jsx
node --version
```

Se aparecer algo como `v20.11.0` (o número pode variar), parabéns, está instalado

Se não aparecer nada ou der um erro é por que não está instalado, então precisa fazer o próximo passo.

Acesse o site oficial em [https://nodejs.org](https://nodejs.org/) e baixe a versão LTS (Long Term Support, que significa "suporte de longa duração", ou seja, a versão mais estável). Execute o instalador e vá clicando em "Próximo" mantendo todas as opções padrão. No final da instalação, é importante verificar se deu tudo certo.

Para verificar, abra o terminal de novo do seu computador. No Windows, pressione a tecla Windows e digite "cmd" ou "PowerShell". No Mac, pressione Command+Espaço e digite "Terminal". Com o terminal aberto, digite o seguinte comando e pressione Enter:

```jsx
node --version
```

Se aparecer algo como `v20.11.0` (o número pode variar), parabéns, está instalado. Se aparecer "comando não reconhecido", reinicie o computador e tente novamente, pois às vezes o sistema precisa atualizar as referências.

Caso ainda continue com erro, jogue o erro na IA e tente resolver, agora você tem a IA como uma ferramenta poderosa de ajuda, use-a.

### 1.2 Instalando o Cursor (Nossa IDE com IA)

O Cursor é onde vamos escrever o código. Ele é parecido com o Visual Studio Code, mas com uma diferença fundamental: já vem com Inteligência Artificial integrada gratuitamente. É como a diferença entre uma bicicleta comum e uma bicicleta elétrica. Ambas te levam ao mesmo lugar, mas uma faz muito do esforço por você.

Acesse [https://cursor.com](https://cursor.com/) e baixe a versão para o seu sistema operacional. Instale normalmente, abra o programa e crie uma conta gratuita (pode usar seu Google ou GitHub, fica mais rápido). Quando abrir pela primeira vez, ele vai te perguntar sobre algumas configurações iniciais. Pode aceitar as opções padrão tranquilamente.

Uma observação importante sobre limitações: a versão gratuita tem um limite de mensagens por mês para a IA. Se você esgotar, tem duas opções. Primeiro, criar outra conta com outro email para continuar usando gratuitamente. Segundo, alternar com outras ferramentas como o GitHub Copilot ou o ChatGPT enquanto sua conta do Cursor recarrega. Isso é algo que muitos desenvolvedores fazem no começo, então não tenha vergonha.

### 1.3 Por Que Cursor e Não VS Code?

Talvez você esteja pensando: "Mas nas aulas de nivelamento usamos VS Code, por que mudar?". Ótima pergunta. O VS Code é um editor de código maravilhoso, porém para usar IA nele você precisa instalar extensões, configurar API keys, e fazer um setup mais complexo. O Cursor já vem com tudo pronto. Para iniciantes, é como a diferença entre montar um móvel da IKEA peça por peça ou comprar um móvel já montado. O resultado final é parecido, mas o caminho é muito mais tranquilo.

### Etapa 2: Criando a Estrutura do Projeto

Agora vamos preparar o "terreno" onde nosso site vai ser construído. Toda casa precisa de um endereço, e todo projeto precisa de uma pasta organizada.

Crie uma pasta no seu computador (pode ser na Área de Trabalho ou em Documentos) chamada `aura`. Dentro dela, vamos criar uma estrutura organizada. Isso é importante porque um projeto bagunçado é como uma cozinha bagunçada: até dá para cozinhar, mas você perde muito mais tempo procurando as coisas do que cozinhando.

Abra o Cursor, vá em "File" no menu superior e clique em "Open Folder". Selecione a pasta `aura` que você acabou de criar. Agora, dentro do Cursor, vamos criar a seguinte estrutura. Você pode criar pastas clicando com o botão direito no painel esquerdo do Cursor:

`aura/
├── src/
│   ├── assets/
│   ├── css/
│   └── js/`

A pasta `src` significa "source" (fonte em inglês), onde fica o código-fonte do nosso projeto. Dentro dela, `assets` guarda imagens e vídeos, `css` guarda os arquivos de estilo (que cuidam das cores, fontes e layout), e `js` guarda os arquivos JavaScript (que cuidam das interações e animações). Essa separação ajuda você e a IA a saberem onde cada coisa está.

### 2.1 Adicionando os Assets do Projeto

Baixe o arquivo `assets.zip`.

[images.zip](attachment:f0269217-6a87-42f0-a8a9-5120a6faadb1:images.zip)

Descompacte ele e arraste todos os vídeos e imagens para dentro da pasta `src/assets/` do seu projeto. Esses são os "materiais de construção" que mencionei no começo. Em um projeto real, geralmente o cliente te envia esses arquivos, mas como esse é um projeto de exemplo, já preparamos tudo para você.

### Etapa 3: Criando o Design no Google Stitch

Aqui começa a parte realmente mágica. O Google Stitch é uma ferramenta que transforma qualquer pessoa em um designer profissional. Você descreve o que quer e ele cria a interface visualmente.

### 3.1 O Email da Cliente

Imagine que você recebeu este email de uma cliente real. Vamos usar ele como base de tudo:

`De: Marina Vasconcelos <contato@studioaura.com.br>
Assunto: Landing Page para o Studio Aura

Olá! Meu nome é Marina Vasconcelos, sou arquiteta e fundadora
do Studio Aura, um escritório de design de interiores de alto
padrão aqui em São Paulo.

Preciso de uma landing page elegante e sofisticada para o studio.
A página precisa passar a sensação de luxo discreto, com tons
escuros, detalhes em dourado e muita atenção aos detalhes visuais.
Quero que pareça uma experiência, não apenas um site.

O que preciso na página:

- Uma abertura bonita com vídeo de fundo
- Uma seção mostrando nosso processo de trabalho em 3 etapas
- Portfólio com nossos projetos (tenho uns 6 projetos bons)
- Sobre nós com minha foto e um pouco da minha história
- Depoimentos de clientes
- Formulário de contato e link pro WhatsApp
- Rodapé com redes sociais

Quero algo que passe sofisticação e elegância. Gosto muito de
tons escuros, detalhes dourados, algo que remeta a hotéis
boutique ou galerias de arte. Nada colorido demais — menos é mais.

Marina Vasconcelos
Studio Aura — Design de Interiores & Arquitetura`

### 3.2 Gerando o Design

Acesse [https://stitch.withgoogle.com](https://stitch.withgoogle.com/) e faça login com sua conta Google.

<aside>
💡

Atenção: Se você tentou logar e deu um erro, você precisa de uma conta do google com verificação de idade. Não sabe como fazer? pergunta pra IA.

</aside>

Selecione a opção "Web" (já que estamos criando um site, não um app de celular).

![image.png](attachment:23a57696-9a5a-488e-beb5-c62c61a31b5a:image.png)

e no modelo selecione “3.1 pro”.

Agora cole o seguinte prompt, que combina o email da cliente com instruções claras para a IA:

`Recebi esse e-mail de uma cliente que quer uma landing page
para o escritório de design de interiores dela:

[De: Marina Vasconcelos <contato@studioaura.com.br>
Assunto: Landing Page para o Studio Aura

Olá! Meu nome é Marina Vasconcelos, sou arquiteta e fundadora
do Studio Aura, um escritório de design de interiores de alto
padrão aqui em São Paulo.

Preciso de uma landing page elegante e sofisticada para o studio.
A página precisa passar a sensação de luxo discreto, com tons
escuros, detalhes em dourado e muita atenção aos detalhes visuais.
Quero que pareça uma experiência, não apenas um site.

O que preciso na página:

- Uma abertura bonita com vídeo de fundo
- Uma seção mostrando nosso processo de trabalho em 3 etapas
- Portfólio com nossos projetos (tenho uns 6 projetos bons)
- Sobre nós com minha foto e um pouco da minha história
- Depoimentos de clientes
- Formulário de contato e link pro WhatsApp
- Rodapé com redes sociais

Quero algo que passe sofisticação e elegância. Gosto muito de
tons escuros, detalhes dourados, algo que remeta a hotéis
boutique ou galerias de arte. Nada colorido demais — menos é mais.

Marina Vasconcelos
Studio Aura — Design de Interiores & Arquitetura]

---

Já tenho os seguintes assets prontos na pasta do projeto:

- interior-dark-video.mp4 (vídeo de ambiente escuro, para hero de fundo)
- video-camadas.mp4 (vídeo de montagem de projeto, para seção de processo)
- 7 imagens de interiores para portfólio (diferentes aspect ratios)

Crie uma landing page profissional completa.
Comece criando o design system (variáveis CSS, paleta, fontes)
baseado no que a cliente descreveu — interprete o estilo dela e
escolha cores e fontes que combinem.
Depois crie todas as seções que ela pediu.`

Clique em gerar e aguarde alguns minutos. O Stitch vai criar o design completo, incluindo o que chamamos de design system, que é um conjunto organizado de regras visuais. Pense nisso como o "manual da marca" do site: define todas as cores, fontes, tamanhos e padrões que serão usados, garantindo que tudo fique visualmente consistente. Sem um design system, é como cozinhar sem receita: pode até dar certo, mas geralmente sai inconsistente.

Se você não gostou de como ficou, pode pedir variações ali mesmo, ou abrir uma nova conversa e fazer o processo de novo do zero.

### Etapa 4: Exportando os Arquivos do Stitch

Quando o design estiver pronto, precisamos exportar dois arquivos importantes que vão guiar a criação do código.

Primeiro, clique em cima do design que foi gerado com o botão direito e procure a opção de exportar. Seleciona zip e exporte, Dentro desse ZIP virá o arquivo `design.md`, que contém toda a especificação visual do projeto e a imagem do projeto. Extraia esses arquivos e coloque na raiz da sua pasta `aura` (ou seja, fora das subpastas, no nível principal).

`aura/
├── src/
│   ├── assets/ (com seus vídeos e imagens)
│   ├── css/
│   └── js/
├── design.md
└── layout.png (ou similar)`

Depois, volte ao Stitch, clique novamente no design, clique com o botão direito de novo, procure a opção de exportar, e selecione Resumo do Projeto, Isso vai gerar o PRD (Product Requirements Document), que é o documento de requisitos do produto (leva 1 ou 2 minutos pra gerar). Em projetos profissionais, esse documento leva semanas para ser feito em reuniões. A IA faz em segundos. Coloque esse arquivo também na raiz da pasta `aura`.

Quando gerar, clique em cima dele de novo com botão esquerdo, selecione baixar e coloque ele tbm na raiz.

Sua estrutura de pastas agora deve estar assim:

`aura/
├── src/
│   ├── assets/ (com seus vídeos e imagens)
│   ├── css/
│   └── js/
├── design.md
├── prd.md
└── layout.png (ou similar)`

### Etapa 5: Instalando a Taste Skill

Aqui é o que chamo de "pulo do gato". A diferença entre um site que parece feito por IA genérica e um site que parece feito por um designer premium está nas instruções que você dá para a IA. As "skills" são pacotes de instruções especializadas que melhoram dramaticamente a qualidade do que a IA produz.

A Taste Skill é uma skill criada especificamente para gerar interfaces bonitas, com animações refinadas e espaçamento profissional. Sem ela, a IA tende a criar designs corretos mas genéricos. Com ela, os designs ganham aquele toque profissional.

Para instalar, abra o terminal dentro do próprio Cursor (atalho: pressione Ctrl + crase no Windows, ou CTRL + aspas, ou Cmd + crase no Mac, ou vá no menu Terminal > New Terminal). Certifique-se de que está dentro da pasta do seu projeto e execute:

```jsx
npx skills add https://github.com/Leonxlnx/taste-skill
```

O `npx` é um comando que vem junto com o Node.js (por isso instalamos ele logo no começo). Esse comando vai baixar e instalar a skill no seu projeto, criando um arquivo `SKILL.md` que o Cursor detecta automaticamente. Se aparecer algum aviso pedindo permissão para instalar, digite `y` (de yes) e pressione Enter.

### Etapa 6: Gerando o Site com IA

Agora vem o momento culminante. Vamos pedir para a IA criar o site usando todas as informações que já preparamos. Abra o chat do Cursor (atalho Ctrl+L no Windows ou Cmd+L no Mac) e digite o seguinte prompt:

`/design-taste-frontend

Crie uma landing page profissional completa utilizando
apenas HTML, CSS e JS.

Para os estilos se baseie no design.md (arrastar o arquivo aqui)
Para a estrutura se baseie no PRD (arrastar o arquivo aqui)
Aqui está a imagem do layout para referência (arrastar aqui)

Já tenho os seguintes assets prontos na pasta src/assets/:

- 7 imagens de interiores para portfólio (diferentes aspect ratios)
- interior-dark-video.mp4 para o hero
- video-camadas.mp4 para uma seção nova abaixo do hero`

Antes de enviar, arraste os arquivos `design.md`, `prd.md` e a imagem do layout direto do painel esquerdo do Cursor para dentro da caixa de chat. Isso anexa eles ao prompt e a IA consegue lê-los.

O comando `/design-taste-frontend` no início ativa a Taste Skill que instalamos. Sem ele, a IA não usa as instruções premium. É como ligar o "modo profissional" da IA.

Envie o prompt e aguarde. A IA vai começar a criar arquivos automaticamente: `index.html`, arquivos CSS, arquivos JavaScript, tudo organizadinho. Esse processo pode levar de 5 a 15 minutos dependendo da complexidade. Enquanto isso, vamos aprender sobre a criação de imagens.

### Etapa 7: Visualizando o Site no Navegador

Quando a IA terminar de criar o código, você vai querer ver o resultado. Para isso, vamos instalar uma extensão simples no Cursor chamada Live Server. Clique no ícone de extensões no painel esquerdo (parece um quadradinho com peças se encaixando)

![image.png](attachment:f81a6a10-7598-4179-bc74-434cc5643e3f:image.png)

busque por "Live Server" e instale a versão do Ritwick Dey.

Depois de instalado, clique com o botão direito no arquivo `index.html` e selecione "Open with Five Server". Seu navegador vai abrir automaticamente mostrando o site funcionando. A grande vantagem do Live Server é que toda vez que você ou a IA fizer alguma alteração no código, a página atualiza automaticamente. É como ter um assistente que recarrega o navegador para você.

### Etapa 8: Criando Imagens e Vídeos com IA (Opcional)

Embora os assets já estejam prontos no nosso caso, é importante você entender como criá-los, porque em projetos futuros você pode precisar. Imagine impressionar um cliente que te enviou só fotos estáticas, mostrando a casa dele em um vídeo cinematográfico gerado por IA.

Para criar imagens, você tem várias opções. O ChatGPT (versão gratuita em [https://chat.openai.com](https://chat.openai.com/)) consegue gerar imagens de boa qualidade. O Freepik AI (https://www.freepik.com/ai) (que agora trocou de nome para Magnific) é paga, com qualidade premium. Para imagens dos interiores do nosso projeto, usaríamos prompts como

```jsx
"elegant home library with American oak bookshelves, brass ladder, deep brown leather armchair, warm task lamp, Persian rug";
```

(biblioteca elegante com estantes de carvalho americano, escada de latão, poltrona de couro marrom escuro, luminária de tarefa quente e tapete persa).

Para vídeos, o processo é mais complexo. A Meta AI ([https://www.meta.ai](https://www.meta.ai/)) consegue gerar vídeos curtos a partir de imagens de referência e prompts descritivos. Para o vídeo do hero do nosso projeto, usamos um prompt como

```jsx
Generate me a high-quality 3D render style video of a slow, gentle camera rotation around a 3D interior design scene — no zoom, no panning. The camera orbits subtly around the space, revealing the environment with a smooth, cinematic turn. Make the background white. Make the assets super high quality. This should read like something you'd see on a website or a landing page
```

e usamos uma imagem de referência criada no freepik

![reference-startimage.png](attachment:eed4eec9-3870-48f2-a1f8-65be271f7552:reference-startimage.png)

e para o video dos frames usamos o prompt e a imagem

```jsx
Use this exploded layer image as the FINAL frame.
Animate backwards — start with all layers fully merged
into a single unified luxury living room, same furniture,
same angle, same lighting. Then slowly separate into
the layers shown. Camera stays completely fixed.
Slow, smooth, cinematic. 4-6 seconds.
```

![reference-Image 1.jpeg](attachment:39bea97f-61f7-4a66-bdbc-2739ccf628e5:reference-Image_1.jpeg)

### Etapa 9: Fazendo Ajustes e Correções

Provavelmente o site não vai sair perfeito de primeira. Isso é completamente normal e faz parte do processo. Veja o resultado no navegador, identifique o que precisa melhorar, e peça ajustes para a IA no chat do Cursor de forma específica. Por exemplo: "A seção de portfólio está com as imagens muito pequenas no celular. Pode aumentar o tamanho delas e adicionar mais espaçamento entre elas?"

Quanto mais específico você for, melhor o resultado. "Tá feio" não ajuda a IA. "Os botões estão com cor muito clara, deixa eles mais escuros como o resto do site" ajuda muito. Pense nisso como dirigir a IA igual você dirigiria um designer humano júnior: instruções claras geram bons resultados.

<aside>
💡

Aqui podem acontecer erros que a IA não sabe ou não consegue resolver, e aí que entra a necessidade de conhecimento de programação.

</aside>

## Etapa 10: Publicando Seu Site no GitHub Pages (Sem Comandos, Pelo Navegador)

Vou te mostrar o jeito mais simples de colocar seu site no ar, fazendo tudo direto pelo site do GitHub, arrastando os arquivos como se fosse o Google Drive. Você não vai precisar usar terminal nem aprender comandos agora. Esse método é perfeito para quem está começando e quer ver o resultado rápido sem se complicar.

<aside>
💡

mas o método correto é usando o git pra versionar, esses conceitos a gente ensina dentro do DevQuest.

</aside>

Pense nesse processo como mandar um arquivo por email. Você escolhe os arquivos, anexa, e envia. É exatamente isso que vamos fazer, só que ao invés de enviar por email, vamos enviar para um espaço na internet onde seu site vai ficar hospedado de graça para sempre.

### 10.1 Entendendo Rapidamente o Que é o GitHub

Antes de começar, deixa eu te explicar de forma bem simples o que é o GitHub. Imagina o Google Drive, onde você guarda seus documentos, planilhas e fotos online. O GitHub funciona quase igual, mas é especializado em guardar projetos de programação. Cada projeto vira o que eles chamam de "repositório", que é só um nome bonito para "pasta do projeto".

O GitHub tem um superpoder extra chamado GitHub Pages. Ele pega sua pasta com arquivos HTML, CSS e JavaScript e transforma automaticamente em um site real, acessível por qualquer pessoa do mundo, com um endereço próprio. E o melhor de tudo: é completamente gratuito.

### 10.2 Criando Sua Conta no GitHub

Acesse [https://github.com](https://github.com/) e clique no botão "Sign up" no canto superior direito. O processo é parecido com criar qualquer outra conta na internet. Você vai precisar fornecer um email, criar uma senha e escolher um nome de usuário.

O nome de usuário merece atenção especial porque ele vai aparecer no endereço do seu site no final do processo. Por exemplo, se você escolher o nome de usuário `joaosilva`, o seu site vai ficar em um endereço como `joaosilva.github.io/lp-aura-design`. Então escolha algo profissional que você não tenha vergonha de mostrar para um cliente futuro. Evite nomes como `gatinho123` ou `joaodoido2024`. Prefira algo como seu próprio nome, ou seu nome seguido de "dev" ou "code", tipo `joaosilvadev`.

Depois de criar a conta, o GitHub vai mandar um email de confirmação. Abra seu email, clique no link de confirmação, e volte ao GitHub. Esse passo é obrigatório, sem ele você não consegue criar repositórios.

<aside>
💡

Nunca traduza o GitHub para o português no seu navegador, isso pode gerar erros. Mantenha ele em inglês sempre.

</aside>

### 10.3 Criando o Repositório (Pasta do Projeto Online)

Com a conta criada e confirmada, faça login no GitHub. Você vai ver uma tela inicial. No canto superior direito, procure por um símbolo de "+" e clique nele. Um menu vai aparecer e você deve selecionar "New repository". Alternativamente, se você estiver na página inicial, vai ver um botão verde escrito "Create repository" ou "New", pode clicar nele também.

![image.png](attachment:e8224911-3a4f-4596-9db2-431a5d515382:image.png)

Na tela que abrir, você vai preencher algumas informações sobre o seu projeto. No campo "Repository name", escreva `lp-aura-design`. Esse vai ser o nome do seu projeto no GitHub e também vai aparecer no endereço final do site. Evite usar espaços, acentos ou caracteres especiais no nome, use apenas letras, números e hífens para separar palavras.

O campo "Description" é opcional, mas é uma boa prática preencher. Pode escrever algo como "Landing page profissional para o Studio Aura, escritório de design de interiores". Isso ajuda você a se lembrar do que é o projeto quando tiver vários repositórios no futuro.

Logo abaixo você vai ver duas opções: "Public" e "Private". Marque "Public" obrigatoriamente, porque o GitHub Pages gratuito só funciona com repositórios públicos. Não se preocupe, ser público significa apenas que outras pessoas podem ver o código se quiserem, mas isso é totalmente normal e não compromete nada.

Mais abaixo tem três opções de inicialização: "Add a README file", "Add .gitignore" e "Choose a license". Para manter as coisas simples, não precisa marcar nada.

Por fim, clique no botão verde "Create repository" no final da página. Pronto, você acabou de criar sua "pasta online" para o projeto.

### 10.4 Fazendo Upload dos Arquivos do Projeto

Agora vem a parte legal, onde você vai mandar os arquivos do seu computador para o GitHub. Depois de criar o repositório, você vai cair numa página com várias informações. Procure por um link ou botão que diz "uploading an existing file".

![image.png](attachment:e374f6fc-f1fe-4f9e-be19-c53b8bdbe366:image.png)

Você vai cair em uma tela que parece bastante com o Google Drive ou OneDrive, com uma área grande no meio dizendo algo como "Drag files here to add them to your repository". Agora vem o passo crítico: você precisa enviar tudo que está dentro da sua pasta `aura`, mas não a pasta em si. Quero dizer, você precisa abrir a pasta `aura` no seu computador, selecionar todo o conteúdo de dentro dela, e arrastar para essa área do GitHub.

Para fazer isso, abra a pasta `aura` no seu Windows Explorer ou Finder do Mac. Pressione Ctrl+A no Windows (ou Cmd+A no Mac) para selecionar todos os arquivos e pastas. Depois clique e arraste todos eles juntos para a área de upload no navegador. Solte e o GitHub vai começar a processar tudo.

É importante notar que o GitHub aceita arrastar pastas inteiras, então sua pasta `src` com todos os arquivos dentro dela vai junto. Aguarde alguns segundos, especialmente se você tem vídeos pesados na pasta de assets, porque o upload pode demorar dependendo da sua internet.

Quando todos os arquivos terminarem de subir, você vai ver eles listados na tela. Role a página um pouco para baixo e você vai encontrar uma seção chamada "Commit changes". Aqui é onde você descreve o que está enviando, como se fosse uma mensagem de "diário de bordo" do projeto. No primeiro campo, escreva algo curto como "Versão inicial do site Aura Design". O segundo campo é opcional, pode deixar em branco.

E finalmente, clique no botão verde "Commit changes". Pronto, todos os seus arquivos agora estão no GitHub.

### 10.5 Ativando o GitHub Pages

Os arquivos estão lá, mas seu site ainda não está acessível pela internet. Precisamos ativar o GitHub Pages para transformar essa pasta em um site público. Esse é o momento mágico do processo.

Na página principal do seu repositório, procure pela aba "Settings" no menu superior. Ela geralmente fica à direita, depois das abas "Code", "Issues", "Pull requests" e algumas outras. Clique em "Settings" e você vai entrar nas configurações do repositório.

![image.png](attachment:8079e268-31f5-4a4b-938d-89023e982ba4:image.png)

No painel esquerdo dentro de Settings, role para baixo até encontrar uma seção chamada "Pages". Pode estar próximo do meio ou final da lista. Clique nela.

Você vai ver a página de configuração do GitHub Pages. Existe uma seção chamada "Build and deployment" e dentro dela um campo "Source". Por padrão ele provavelmente está como "Deploy from a branch". Mantenha essa opção selecionada.

Logo abaixo, você vai ver uma seção "Branch" com dois selects lado a lado. No primeiro, selecione "main" (que é o nome da linha do tempo principal do seu projeto, criada automaticamente pelo GitHub). No segundo menu, mantenha "/(root)", que significa que o GitHub vai procurar o site na raiz do projeto, ou seja, na pasta principal.

Clique no botão "Save" ao lado dessa configuração. O GitHub vai começar a "construir" seu site nos bastidores. Esse processo geralmente leva entre um e cinco minutos.

### 10.6 Acessando Seu Site no Ar

Depois de salvar, a página vai recarregar e mostrar uma mensagem dizendo que seu site está sendo construído “GitHub Pages source saved.” Aguarde alguns minutos.

Atualize a página de tempos em tempos (pode levar de 2 a 10 minutos). Eventualmente no topo da página vai aparecer uma msg e o link do repositorio.

"Your site is live at" seguida de um endereço do tipo `https://seu-usuario.github.io/lp-aura-design/`.

Esse é o endereço público do seu site. Você pode copiar esse link e abrir em qualquer navegador, em qualquer computador ou celular do mundo, e o site vai aparecer. Pode mandar para sua mãe, seus amigos, e claro, para clientes potenciais.

Vale mencionar que na primeira visita o site pode demorar alguns segundos extras para carregar enquanto o GitHub coloca tudo em cache. Visitas seguintes serão muito mais rápidas. Se na primeira tentativa der algum erro ou aparecer página em branco, espere mais cinco minutinhos e tente de novo, porque às vezes o GitHub demora um pouco mais para processar tudo.

### 10.7 Resolvendo Problemas Comuns

Se ao acessar o link você ver uma página com erro 404 ou a mensagem "There isn't a GitHub Pages site here", o problema mais comum é que o arquivo principal do site não está na localização correta. Para o GitHub Pages funcionar, o arquivo `index.html` precisa estar na raiz do repositório, não dentro de uma subpasta.

Se isso aconteceu com você, abra a página principal do seu repositório no GitHub e veja onde está o arquivo `index.html`. Se ele estiver dentro de uma pasta como `src` ou similar, você tem duas opções. A primeira é mover o arquivo para a raiz, mas isso pode bagunçar os caminhos das imagens e estilos. A segunda, mais simples, é pedir para a IA do Cursor reorganizar a estrutura do projeto para que o `index.html` fique na raiz, e fazer um novo upload no GitHub.

Ou também deletar esse repositório e criar um novo do zero com os arquivos certos.

Outro problema comum é o site carregar mas as imagens, vídeos ou estilos não aparecerem. Geralmente isso acontece porque os caminhos no código estão escritos de uma forma que funciona no seu computador mas não no GitHub Pages. Se isso acontecer, peça ajuda à IA no Cursor com um prompt do tipo "Os caminhos das imagens e CSS estão quebrados no GitHub Pages. Pode revisar e corrigir os caminhos para que funcionem em produção?". A IA vai ajustar e você faz um novo upload.

### 10.8 Atualizando Seu Site Depois

Conforme você for fazendo melhorias no site, você vai querer atualizá-lo no ar. Pelo método sem comandos, o processo é parecido com o que fizemos. Vá até a página do seu repositório no GitHub, navegue até o arquivo que você quer atualizar, clique nele para abri-lo, e clique no ícone de lápis no canto superior direito para editá-lo diretamente no navegador.

Para atualizações maiores, ou substituir vários arquivos de uma vez, use novamente a opção "Add file" e depois "Upload files", e arraste os arquivos atualizados.

![image.png](attachment:267b76cd-0b9d-4b53-97b3-be546cb8e5d0:image.png)

O GitHub vai sobrescrever os arquivos antigos pelos novos automaticamente. Lembre-se sempre de preencher a mensagem de commit descrevendo o que mudou, isso é seu histórico de melhorias.

Em poucos minutos depois de fazer a atualização, seu site no ar vai refletir as mudanças automaticamente. Não precisa reativar nada, o GitHub Pages cuida disso sozinho.

### 10.9 Compartilhando Seu Trabalho

Agora você tem um site profissional no ar, com endereço próprio, totalmente gratuito. Esse link vira parte do seu portfólio. Quando for falar com clientes futuros, ao invés de mandar prints ou explicar verbalmente o que você sabe fazer, manda esse link. Ver o trabalho funcionando vale mais que mil palavras.

Você pode também adicionar esse link no seu LinkedIn, no Instagram, em propostas comerciais. Cada projeto que você publicar dessa forma vai fortalecendo seu portfólio. Em pouco tempo você terá vários sites no ar, todos hospedados de graça, todos servindo como prova viva da sua capacidade.

Parabéns por chegar até aqui. Você completou todo o ciclo de um projeto profissional moderno: do briefing do cliente até o site publicado na internet. Esse é o tipo de habilidade que muitos profissionais com anos de carreira ainda estão aprendendo. Você acabou de adquirir em um dia algo que vai te abrir muitas portas.

### Considerações Finais

Você acabou de aprender a montar um projeto profissional usando IA. Há uma década, esse mesmo trabalho levaria semanas, envolveria designers, desenvolvedores e gerentes de projeto, e custaria muito caro para o cliente. Hoje, você sozinho consegue entregar isso em um final de semana e cobrar 5 mil reais.

Se em algum momento você se perdeu durante o tutorial ao vivo, não se preocupe. Reassista esse passo a passo com calma, pause sempre que precisar, e teste cada etapa. O importante não é decorar comandos, mas entender o fluxo.

<aside>
💡

E lembre-se, só saber IA não vai te levar a lugar nenhum, mas saber programação e IA vai te tornar um dev desejado pelas empresas, e te possibilitar

</aside>
