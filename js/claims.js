// Rotierende Claims im Hero-Bereich - dieselben drei mehrsprachigen
// Ausdrücke auf jeder Sprachversion der Seite (bewusstes Markenspiel,
// analog zur App).
(function () {
  const CLAIMS = ["Zackir's Dir", "Zackir it", "Zackíralo!"];
  const el = document.querySelector('[data-claim-rotator]');
  if (!el) return;

  let index = 0;
  el.textContent = CLAIMS[0];
  el.classList.add('visible');

  setInterval(() => {
    el.classList.remove('visible');
    setTimeout(() => {
      index = (index + 1) % CLAIMS.length;
      el.textContent = CLAIMS[index];
      el.classList.add('visible');
    }, 400);
  }, 2600);
})();
