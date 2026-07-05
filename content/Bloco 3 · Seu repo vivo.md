---
title: "Bloco 3 · Seu repo vivo · Prompts"
type: content
format: material
status: draft
date: 2026-06-16
semana: "Dia Um"
licao_origem: "Dia Um · Bloco 3"
origem: "DIA_UM/PROMPTS/BLOCO_3_REPO.md"
voz: Marcel Serrano / MSCS (Tradutor)
publish: true
cssclasses: [workbook]
tags: [material, prompt, keys, turma-zero, dia-um, publish]
---

> **MS CREATIVE KEYS** · Dia Um · Bloco 3

# Bloco 3 — Seu repo vivo

Assista o vídeo do Bloco 3. Este é o bloco com mais ferramenta nova de uma vez — então ele começa pelo setup. Quatro peças: deixar o GitHub pronto, organizar o repo (sem apagar nada), instalar a regra do pulo do gato, e o prompt de handoff que move um output pro repo com segurança.

---

## 0. Antes de começar — GitHub pronto (pré-passo)

O bloco assume três coisas no lugar. Cinco minutos agora poupam o pico de fricção do dia. Confira na ordem:

1. **Conta GitHub.** [github.com](https://github.com) → Sign up. E-mail, senha, confirma. Plano free basta.
2. **GitHub Desktop instalado.** [desktop.github.com](https://desktop.github.com) → baixa, instala, abre. É o app com botão pra tudo — você não toca no terminal.
3. **Desktop conectado à conta.** No GitHub Desktop: **File → Options → Accounts → Sign in**. Faz o login no navegador, autoriza, volta. É isso que deixa o `push` e o `clone` funcionarem sem pedir senha toda hora.

> [!info] Checkpoint do setup
> Você consegue, no GitHub Desktop, ver seu nome de usuário em Options → Accounts? Se sim, está autenticado — siga. Se não, o `push` vai falhar lá na frente; resolva o login agora, não depois.

---

## 1. Organizar o repo (não executa nada ainda)

Cole no Claude apontado pra pasta do repo:

```
Analisa a estrutura atual desta pasta. Me entrega um relatório com:
- estado atual (o que tem, como está organizado)
- problemas (o que está solto, duplicado ou no lugar errado)
- plano de organização: o que MOVER, o que CRIAR, o que ARQUIVAR
- o que NÃO tocar
Não execute nada ainda. Só me mostra o plano pra eu aprovar.
```

Depois de revisar:

```
O plano está aprovado. Execute todas as movimentações.
Regra dura: não apaga nenhum arquivo — só move.
Cria categoria nova só quando houver 3+ arquivos pra ela.
No fim, me mostra a árvore final.
```

Estrutura canônica de referência (raiz enxuta, profundidade nas subpastas):

```
md-files/
├── README.md          porta de entrada (você + qualquer LLM)
├── .gitignore
├── about-me.md        camada pessoal
├── writing-style.md   camada pessoal
├── CLAUDE.md          camada pessoal (regras)
├── PROJECTS.md        camada pessoal (atualizado toda sexta)
├── examples/          textos seus que comprovam o que funciona
├── KNOWLEDGE/         1 subpasta por projeto/cliente
├── skills/            1 pasta por skill
├── evals/             A/B testing documentado
└── _archive/          versões antigas + projetos encerrados
```

Essa árvore já vem pronta no template — com `prompts/` pro seu Pack de Bancada. Você não monta pasta: você preenche.

---

## 2. Regra do pulo do gato — cole no seu CLAUDE.md

Esta é a regra permanente que torna o handoff de outputs pro repo automático e seguro. Cole como seção própria no `CLAUDE.md` do `md-files`:

```markdown
## Claude Outputs → repo

`Claude Outputs` é staging efêmero, não armário.
Ao fechar um output, entregar junto um prompt de handoff que:
1. copia o pacote pro repo certo (por tipo de conteúdo),
2. commita e pusha,
3. só após push verificado (SHA local = SHA remote), apaga o pacote da Claude Outputs.
Repo = fonte de verdade + backup. Deleção nunca antes da verificação.
Varre só o pacote, nunca a pasta inteira.
Atualiza _MANIFEST (bump + changelog) e este CLAUDE.md na mesma operação.
```

---

## 3. Prompt de handoff (mover um output pro repo) — versão Dia Um

Hoje você só precisa de uma coisa: tirar um output da bancada e colocar no repo **sem perder nada no meio**. A trava que garante isso é o gate de SHA — só apaga a cópia local depois de provar que o repo recebeu. Esta é a versão curta. Cole no Claude apontado pra pasta do output.

Substitua: `PACOTE` (o arquivo/pasta do output) · `REPO` (a pasta local do `md-files`) · `DESTINO` (subpasta dentro do repo, ex.: `KNOWLEDGE/`).

```
Move o PACOTE pra dentro do meu repo, com segurança, nesta ordem:

1. Copia PACOTE pra REPO/DESTINO/ (não move ainda, só copia).
2. No REPO: git add só do que entrou, commita "Add PACOTE", e dá push.
3. GATE: compara o SHA local (git rev-parse HEAD) com o remote
   (git rev-parse origin/<branch default — resolve, não assuma main>).
   - Iguais → o push chegou. Pode apagar a cópia original do PACOTE.
   - Diferentes → PARA. Não apaga nada. Me mostra os dois SHAs.
4. No fim, me mostra: SHA local, SHA remote, e se bateram antes de apagar.
```

> [!warning] Por que o gate de SHA existe
> Apagar antes de verificar é o erro mais caro do método. Se o push falhou e você já apagou, perdeu o arquivo. SHA local = SHA remote é a única prova de que o repo recebeu antes de você apagar a única cópia. É a trava que separa "movi" de "achei que movi" — e é a mesma trava que o Sincronizador usa no Bloco 4.

> [!tip] Versão completa (pra depois)
> A de 7 passos — com `git pull` antes de copiar, mensagem de commit que rastreia a origem, e atualização do `_MANIFEST` + `CLAUDE.md` na mesma passada — está na Semana 04 (Exercício 3b, o pulo do gato). Use quando o handoff virar rotina sua. Hoje, a versão curta acima já te protege.

---

## Exercício — feito quando

**Faça:** crie seu repo a partir do template: [github.com/1marcelserrano/md-files-template](https://github.com/1marcelserrano/md-files-template) → **Use this template** → **Create a new repository** → nome `md-files`, visibilidade **Private**. Clone no GitHub Desktop, copie o conteúdo da sua `MD-FILES/` por cima dos esqueletos (seu `about-me.md` e `writing-style.md` preenchidos substituem os vazios; sua skill entra em `skills/`), commit "Dia Um — setup inicial" e push.

**Feito quando:** você **abre github.com no navegador e vê seu sistema lá** — o `about-me.md`, o `writing-style.md` e a pasta da sua skill, dentro do repo, na web. Não no seu computador: na nuvem. Se aparece lá, o push funcionou e você tem backup e histórico.

---

> [!tip] Quando tiver tempo
> A Semana 04 destrincha o handoff de ponta a ponta: Exercício 3b da Semana 04.
