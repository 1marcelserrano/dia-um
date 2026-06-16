// copy buttons on prompt code blocks
document.querySelectorAll('.code-wrap .copy').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const pre = btn.parentElement.querySelector('pre');
    const text = pre ? pre.innerText : '';
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copiado ✓';
      btn.classList.add('done');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('done'); }, 1600);
    } catch (e) {
      // fallback: select the text
      const r = document.createRange();
      r.selectNodeContents(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      btn.textContent = 'Selecionado';
      setTimeout(() => { btn.textContent = 'Copiar'; }, 1600);
    }
  });
});

// mermaid (only loads if a diagram exists)
if (document.querySelector('.mermaid')) {
  import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')
    .then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
          fontFamily: 'Newsreader, Georgia, serif',
          primaryColor: '#FbF7Ef',
          primaryBorderColor: '#A85A30',
          primaryTextColor: '#1f1b16',
          lineColor: '#A85A30',
          clusterBkg: '#F6F1E6',
          clusterBorder: 'rgba(31,27,22,.18)',
        },
      });
    })
    .catch(() => {});
}
