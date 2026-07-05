import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const BUILD = Date.now();   // cache-bust dos assets linkados
const PUB = join(__dir, 'docs');       // GitHub Pages (PÚBLICO) — só a landing
const PRIV = join(__dir, 'private');   // entrega paga (NÃO publicado) — mover pra plataforma de checkout

// recria as saídas limpas (evita deixar página antiga pública)
rmSync(PUB, { recursive: true, force: true });
rmSync(PRIV, { recursive: true, force: true });
mkdirSync(PUB, { recursive: true });
mkdirSync(PRIV, { recursive: true });

marked.setOptions({ mangle: false, headerIds: false });

const PUBLIC_PAGES = [
  { file: 'landing.md', out: 'index.html', kind: 'landing' },
];
const PRIVATE_PAGES = [
  { file: 'Dia Um.md', out: 'index.html', kind: 'hub' },
  { file: 'Bloco 0 · Primeiro disparo.md', out: 'bloco-0.html', kind: 'prompt' },
  { file: 'Bloco 1 · Claude na sua voz.md', out: 'bloco-1.html', kind: 'prompt' },
  { file: 'Bloco 2 · Sua primeira skill.md', out: 'bloco-2.html', kind: 'prompt' },
  { file: 'Bloco 3 · Seu repo vivo.md', out: 'bloco-3.html', kind: 'prompt' },
  { file: 'Bloco 4 · o Sincronizador.md', out: 'bloco-4.html', kind: 'prompt' },
  { file: 'o Pulso.md', out: 'pulso.html', kind: 'prompt' },
  { file: 'Pack · Prompts de Bancada.md', out: 'pack-prompts.html', kind: 'prompt' },
  { file: 'Dia Dois.md', out: 'dia-dois.html', kind: 'prompt' },
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
  html = html.replace(/\[\[Prompts\/Bloco\s*(\d)[^\]|]*\|([^\]]+)\]\]/g,
    (_m, n, label) => `<a class="bloco-link" href="bloco-${n}.html">${label}</a>`);
  html = html.replace(/<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g,
    (_m, code) => `<pre class="mermaid">${unescapeHtml(code)}</pre>`);
  html = html.replace(/<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g,
    (_m, attrs, code) =>
      `<div class="code-wrap"><button class="copy" type="button" aria-label="Copiar">Copiar</button><pre><code${attrs}>${code}</code></pre></div>`);
  return html;
}

function pageTemplate({ title, body, kind }) {
  const back = kind === 'prompt' ? `<a class="back" href="index.html">← voltar pro mapa do dia</a>` : '';
  const tag = kind === 'landing' ? '' : '<span class="site-tag">Dia Um</span>';
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${title}</title>
<meta name="description" content="Dia Um — sua v1 de sistema de IA no ar em um dia. Voz, skill, repo e uma rotina que roda sozinha.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..900&family=Inter+Tight:ital,wght@0,300..700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css?v=${BUILD}">
</head>
<body>
<header class="site-header">
  <a class="wordmark" href="index.html">MS&nbsp;CREATIVE&nbsp;KEYS</a>
  ${tag}
</header>
<main class="content">
${back}
${body}
</main>
<footer class="site-footer">— Marcel Serrano · MS CREATIVE KEYS · <strong>Dia Um</strong></footer>
<script type="module" src="app.js?v=${BUILD}"></script>
</body>
</html>`;
}

function buildSet(pages, outDir) {
  for (const p of pages) {
    const raw = readFileSync(join(__dir, 'content', p.file), 'utf8');
    const md = stripFrontmatter(raw);
    const fmTitle = raw.match(/title:\s*"([^"]+)"/);
    const h1 = md.match(/^#\s+(.+)$/m);
    const title = (fmTitle ? fmTitle[1] : (h1 ? h1[1] : 'Dia Um')) + ' · MS CREATIVE KEYS';
    const body = renderMarkdown(md);
    writeFileSync(join(outDir, p.out), pageTemplate({ title, body, kind: p.kind }));
    console.log('built', outDir.endsWith('docs') ? 'docs/' : 'private/', p.out);
  }
  copyFileSync(join(__dir, 'src', 'styles.css'), join(outDir, 'styles.css'));
  copyFileSync(join(__dir, 'src', 'app.js'), join(outDir, 'app.js'));
}

buildSet(PUBLIC_PAGES, PUB);
buildSet(PRIVATE_PAGES, PRIV);

// crachá DIA-UM — peça self-contained de conclusão (entregue ao fechar o Pulso 3/3).
// É a única peça de private/ usada de verdade na entrega: hospedar e linkar na Aula 6 do Skool.
copyFileSync(join(__dir, 'src', 'cracha.html'), join(PRIV, 'cracha.html'));
console.log('built private/ cracha.html');

writeFileSync(join(PUB, '.nojekyll'), '');
console.log('done — docs/ = público (landing). private/ = REFERÊNCIA/back-up (a entrega é o Skool); cracha.html é a peça viva.');
