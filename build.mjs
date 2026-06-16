import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, 'docs');
mkdirSync(OUT, { recursive: true });

marked.setOptions({ mangle: false, headerIds: false });

// content file -> output slug
const PAGES = [
  { file: 'Dia Um.md', out: 'index.html', home: true },
  { file: 'Bloco 1 · Claude na sua voz.md', out: 'bloco-1.html' },
  { file: 'Bloco 2 · Sua primeira skill.md', out: 'bloco-2.html' },
  { file: 'Bloco 3 · Seu repo vivo.md', out: 'bloco-3.html' },
  { file: 'Bloco 4 · o Sincronizador.md', out: 'bloco-4.html' },
];

function stripFrontmatter(md) {
  if (md.startsWith('---')) {
    const end = md.indexOf('\n---', 3);
    if (end !== -1) return md.slice(md.indexOf('\n', end + 1) + 1);
  }
  return md;
}

function unescapeHtml(s) {
  return s.replace(/&gt;/g, '>').replace(/&lt;/g, '<')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}

function renderMarkdown(md) {
  const lines = md.split('\n');
  const out = [];
  let buf = [];
  const flush = () => { if (buf.length) { out.push(marked.parse(buf.join('\n'))); buf = []; } };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kicker = line.match(/^>\s*\*\*MS CREATIVE KEYS\*\*\s*·?\s*(.*)$/);
    const callout = line.match(/^>\s*\[!(\w+)\]\s*(.*)$/);

    if (kicker) {
      flush();
      const tail = kicker[1].replace(/^·\s*/, '');
      out.push(`<p class="kicker"><span class="brand">MS CREATIVE KEYS</span>${tail ? ` <span class="dot">·</span> ${marked.parseInline(tail)}` : ''}</p>`);
      i++; continue;
    }
    if (callout) {
      flush();
      const type = callout[1].toLowerCase();
      const title = callout[2].trim();
      i++;
      const body = [];
      while (i < lines.length && /^>/.test(lines[i])) { body.push(lines[i].replace(/^>\s?/, '')); i++; }
      const bodyHtml = marked.parse(body.join('\n'));
      out.push(
        `<div class="callout callout-${type}">` +
        (title ? `<div class="callout-title">${marked.parseInline(title)}</div>` : '') +
        `<div class="callout-body">${bodyHtml}</div></div>`
      );
      continue;
    }
    buf.push(line); i++;
  }
  flush();

  let html = out.join('\n');

  // wikilinks -> internal page links (home only references prompts)
  html = html.replace(/\[\[Prompts\/Bloco\s*(\d)[^\]|]*\|([^\]]+)\]\]/g,
    (_m, n, label) => `<a class="bloco-link" href="bloco-${n}.html">${label}</a>`);

  // mermaid code blocks -> <pre class="mermaid">
  html = html.replace(/<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g,
    (_m, code) => `<pre class="mermaid">${unescapeHtml(code)}</pre>`);

  // remaining code blocks -> wrap with copy button
  html = html.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g,
    (_m, attrs, code) =>
      `<div class="code-wrap"><button class="copy" type="button" aria-label="Copiar">Copiar</button><pre><code${attrs}>${code}</code></pre></div>`);

  return html;
}

function pageTemplate({ title, body, home }) {
  const nav = home ? '' : `<a class="back" href="index.html">← voltar pro mapa do dia</a>`;
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${title}</title>
<meta name="description" content="Dia Um — a porta de entrada express do MS CREATIVE KEYS. Sua v1 do sistema no ar em um dia.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <a class="wordmark" href="index.html">MS&nbsp;CREATIVE&nbsp;KEYS</a>
  <span class="site-tag">Dia Um</span>
</header>
<main class="content">
${nav}
${body}
</main>
<footer class="site-footer">— Marcel Serrano · MS CREATIVE KEYS · <strong>Dia Um</strong></footer>
<script type="module" src="app.js"></script>
</body>
</html>`;
}

for (const p of PAGES) {
  const raw = readFileSync(join(__dir, 'content', p.file), 'utf8');
  const md = stripFrontmatter(raw);
  // title: first frontmatter title or first H1
  const fmTitle = raw.match(/title:\s*"([^"]+)"/);
  const h1 = md.match(/^#\s+(.+)$/m);
  const title = (fmTitle ? fmTitle[1] : (h1 ? h1[1] : 'Dia Um')) + ' · MS CREATIVE KEYS';
  const body = renderMarkdown(md);
  writeFileSync(join(OUT, p.out), pageTemplate({ title, body, home: !!p.home }));
  console.log('built', p.out);
}

// static assets
copyFileSync(join(__dir, 'src', 'styles.css'), join(OUT, 'styles.css'));
copyFileSync(join(__dir, 'src', 'app.js'), join(OUT, 'app.js'));
writeFileSync(join(OUT, '.nojekyll'), '');
console.log('done');
