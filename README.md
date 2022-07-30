### Termos de uso

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do Hackathon t19!

Nós já estamos habituados e habituadas a utilizar o GItHub quase que diariamente, então não esperamos muitas novidades por aqui!

---

# Sumário

- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Protótipo do projeto](#protótipo-do-projeto)
  - [Data de entrega](#data-de-entrega)

- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)

- [Como desenvolver](#como-desenvolver)
  - [APIs](#apis)

# Entregáveis

Para desenvolver este projeto, esperamos que vocês criem uma branch principal para o grupo, e abram um Pull Request neste repositório a partir dela.

Sugerimos que inclua o número ou nome do grupo no nome da branch, para facilitar identificação. Exemplo: "grupo-1-branch-main".


## O que deverá ser desenvolvido

A proposta do case é criar uma landing page para a Wine, seguindo os seguintes critérios:

A landing page não pode ser idêntica a da Wine, podendo utilizar elementos de estilo como inspiração.
Consumir alguma das APIs disponibilizada pela Wine.

### Protótipo do projeto

Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/nR5KNXQfO7z312s4Y9zh6D/07%2F12---Wine-Test---WEB?node-id=136%3A1483


### Data de entrega

- Data para entrega será no domingo (31/07) até as 12horas.

---

# Instruções para entregar seu projeto

### Antes de começar a desenvolver:

1. Faça um clone do projeto: `git clone git@github.com:tryber/hackathon-t19-wine.git`

2. Crie uma branch principal para o grupo, a partir da main: `git checkout -b "nome-da-branch"`.

 * Sugerimos a utilização do nome ou número do grupo na branch principal para facilitar a identificação.

3. Faça alterações separadas por novas branchs criadas a partir da branch `branch-main-do-grupo`, criando uma nova branch para cada demanda
  * Verifique que você está na branch `branch-main-do-grupo`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `branch-main-do-grupo`
    * Exemplo: `git checkout branch-main-do-grupo && git pull`
  * Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    * Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    * Exemplo: `git checkout -b branch-main-do-grupo-cria-campo-de-input`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listadas as novas alterações em verde)
  * Faça seus `commit`
      * Exemplo:
        * `git commit -m 'cria componente de input`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin branch-main-do-grupo-cria-campo-de-input`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/hackathon-t19-wine/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `branch-main-do-grupo`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"[GRUPO XX] Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/hackathon-t19-wine/pulls) e confira que o seu _Pull Request_ está criado

7. Assim que aprovado por pelo menos duas pessoas do seu grupo e o _Linter_ estiver adereçado, acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_

### Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_

2. `git add` _(para adicionar arquivos ao stage do Git)_

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_

4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

        * `git commit -m 'cria componente de input`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin branch-main-do-grupo-cria-campo-de-input`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/hackathon-t19-wine/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `branch-main-do-grupo`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"[branch-main-do-grupo] Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/hackathon-t19-wine/pulls) e confira que o seu _Pull Request_ está criado

### Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_

2. `git add` _(para adicionar arquivos ao stage do Git)_

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_

4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_

5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

Este repositório não conta com branches para cada grupo, então cada um será responsável por criar a branch principal do grupo e abrir o Pull Request a partir dela.

Recomendamos que utilize o nome ou número do grupo na branch, para facilitar a identificação dos responsáveis. Exemplo: "grupo-1-hackathon".


## APIs

Neste link você encontra a documentação da API de produtos, junto com sugestões de sua utilização!

Para adequar ao JavaScript, basta selecionar a linguagem JavaScript-Fetch no canto superior.
https://documenter.getpostman.com/view/10015622/UVJiiuHi#fe849253-c47a-492f-a860-08350296c570

Link direto para a API: https://wine-back-test.herokuapp.com/products?page=1&limit=10

Para a API de modalidades, o link direto: https://wine-club-proxy.herokuapp.com/modalities
