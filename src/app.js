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
          fontFamily: 'Inter Tight, sans-serif',
          background: '#14161d',
          primaryColor: '#1A1D26',
          primaryBorderColor: '#A89D80',
          primaryTextColor: '#B2A898',
          lineColor: '#756750',
          clusterBkg: '#12141A',
          clusterBorder: 'rgba(255,255,255,.06)',
        },
      });
    })
    .catch(() => {});
}
