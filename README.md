# Dia Um — MS CREATIVE KEYS

A porta de entrada express do MS CREATIVE KEYS: um dia, duas sentadas (~6h) que coloca a v1 do seu sistema no ar — voz → skill → repo → o Sincronizador.

Site estático publicado via GitHub Pages: **[1marcelserrano.github.io/dia-um](https://1marcelserrano.github.io/dia-um)**

## Como funciona

Conteúdo em `content/*.md` (markdown). O build (`build.mjs`) converte pra HTML estático em `docs/` — callouts, diagrama mermaid e botão de copiar nos prompts. O GitHub Pages serve a pasta `docs/`.

```bash
npm install
npm run build   # gera docs/ (público) + private/ (referência)
```

Para atualizar o site: edite os markdowns em `content/`, rode `npm run build`, commit + push.

## Onde vive a entrega paga

A entrega gated do Dia Um vive no **Skool** (classroom + comunidade) — decisão do Stage 1. A fonte de verdade do conteúdo continua em `content/` (espelho de `mscs-beta-turma-zero/DIA_UM/`). Montagem do classroom em `DIA_UM/SKOOL_CLASSROOM.md`.

- **`docs/`** — landing pública (GitHub Pages). É o que vende.
- **`private/`** — espelho HTML buildado dos blocos, no Design System. **Não é a superfície de entrega** (o Skool é). Serve de **referência/back-up** renderizado: revisar o conteúdo no visual da marca, ou repescar pro Skool. Não é hospedado nem gated.
- **`private/cracha.html`** — a peça de `private/` usada de verdade: o **crachá DIA-UM**, artefato de conclusão (gerado de `src/cracha.html`). O aluno chega nele ao fechar o Pulso 3/3, põe o nome e baixa o PNG. **Hospedar essa página** (qualquer host estático) e linkar na Aula 6 / post de conclusão do Skool.

---

*— Marcel Serrano · MS CREATIVE KEYS*
