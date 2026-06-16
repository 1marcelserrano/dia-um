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

Três peças: organizar o repo (sem apagar nada), instalar a regra do pulo do gato, e o prompt de handoff que move um output pro repo com segurança.

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

## 3. Prompt de handoff (mover um output pro repo)

Substitua os placeholders: `PACOTE` (pasta/arquivo do output) · `CAMINHO_OUTPUTS` (ex.: `~/Desktop/Claude Outputs`) · `REPO_DESTINO` (ex.: `~/Documents/repos/md-files`) · `SUBPASTA_DESTINO` (ex.: `KNOWLEDGE/conteudo/`).

```
Execute um handoff de output pro repo, nesta ordem, sem pular nenhum passo.

PASSO 1 — Resolve o branch default.
Resolve o branch default do repo em REPO_DESTINO com
`git remote show origin` ou `gh repo view`. NÃO assuma que é main.
Guarda o nome do branch pra usar no gate.

PASSO 2 — Garante o repo local atualizado.
Se REPO_DESTINO não existir localmente, clona. Se existir, faz
`git pull` do branch default antes de qualquer cópia.

PASSO 3 — Copia preservando a estrutura.
Copia o pacote de CAMINHO_OUTPUTS/PACOTE pra
REPO_DESTINO/SUBPASTA_DESTINO/, mantendo a organização interna de
pastas intacta, pra os links e referências relativas continuarem válidos.

PASSO 4 — Commita e pusha.
git add SÓ do que entrou (não um add -A cego). Commita com mensagem que
diz o que entrou e de onde veio:
"Add PACOTE (handoff da Claude Outputs → SUBPASTA_DESTINO)".
Push pro branch default.

PASSO 5 — GATE DE VERIFICAÇÃO (não pule).
Compara o SHA do commit local com o do remote:
  LOCAL=$(git rev-parse HEAD)
  REMOTE=$(git rev-parse origin/<branch_default>)
Se LOCAL == REMOTE: o push chegou, pode seguir pro Passo 6.
Se LOCAL != REMOTE: PARA AQUI. Não apaga nada. Me avisa que o push
não confirmou e mostra os dois SHAs.

PASSO 6 — Apaga da bancada, só se o gate passou.
Remove CAMINHO_OUTPUTS/PACOTE. Apaga SÓ o pacote, nada além dele.
A pasta Claude Outputs continua intacta no resto.

PASSO 7 — Atualiza os registros na mesma passada.
No REPO_DESTINO:
- _MANIFEST (ou _MANIFEST.md): bumpa versão, põe data de hoje, e adiciona
  linha de changelog dizendo que PACOTE migrou da Claude Outputs pra
  SUBPASTA_DESTINO.
- CLAUDE.md: garante que a seção "Claude Outputs → repo" com a regra
  permanente existe. Se não existir, cria.
Commita e pusha os dois registros.

No fim, me mostra: o SHA local, o SHA remote, a confirmação de que bateram
ANTES de qualquer deleção, e o diff do _MANIFEST e do CLAUDE.md.
```

> [!warning] Por que o gate de SHA existe
> Apagar antes de verificar é o erro mais caro do método. Se o push falhou e você já apagou, perdeu o arquivo. SHA local = SHA remote é a única prova de que o repo recebeu antes de você apagar a única cópia. É a trava que separa "movi" de "achei que movi".

---

> [!tip] Quando tiver tempo
> A Semana 04 destrincha o handoff de ponta a ponta: Exercício 3b da Semana 04.
