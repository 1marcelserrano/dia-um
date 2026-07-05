// Renderiza os HTML de capa em PNG @2x. Uso: node covers/render.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// [arquivo html, png de saída, escala]
// Largura/altura são lidas do próprio HTML (html,body{width:..;height:..}).
const jobs = [
  ['horizontal.html', 'dia-um-cover-horizontal.png', 2],
  ['skool-cover.html', 'dia-um-cover-skool.png', 2],
  ['vertical.html', 'dia-um-cover-vertical.png', 2],
  ['square.html', 'dia-um-cover-square.png', 2],
];

const dims = (file) => {
  const css = readFileSync(resolve('covers', file), 'utf8');
  const m = css.match(/html,body\{width:(\d+)px;height:(\d+)px/);
  if (!m) throw new Error(`dimensões não encontradas em ${file}`);
  return { width: +m[1], height: +m[2] };
};

const browser = await chromium.launch();
for (const [html, png, scale] of jobs) {
  const { width, height } = dims(html);
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: scale,
  });
  await page.goto('file://' + resolve('covers', html));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  await page.screenshot({ path: resolve('covers', png) });
  console.log(`✓ ${png} (${width * scale}x${height * scale})`);
  await page.close();
}
await browser.close();
