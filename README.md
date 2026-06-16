# Dia Um — MS CREATIVE KEYS

A porta de entrada express do MS CREATIVE KEYS: um dia, duas sentadas (~6h) que coloca a v1 do seu sistema no ar — voz → skill → repo → o Sincronizador.

Site estático publicado via GitHub Pages: **[1marcelserrano.github.io/dia-um](https://1marcelserrano.github.io/dia-um)**

## Como funciona

Conteúdo em `content/*.md` (markdown). O build (`build.mjs`) converte pra HTML estático em `docs/` — callouts, diagrama mermaid e botão de copiar nos prompts. O GitHub Pages serve a pasta `docs/`.

```bash
npm install
npm run build   # gera docs/
```

Para atualizar o site: edite os markdowns em `content/`, rode `npm run build`, commit + push.

---

*— Marcel Serrano · MS CREATIVE KEYS*
