// Statischer Claim im Hero-Bereich, ein fester Spruch pro Sprachversion
// (keine Rotation mehr - vorher liefen mehrere Sprueche durch, teils sogar
// sprachuebergreifend gemischt, was verwirrend wirkte).
(function () {
  const CLAIM_BY_LANG = {
    de: "Zackir's Dir",
    en: 'Zackir it',
    es: 'Zackíralo!',
  };
  const lang = document.documentElement.lang || 'de';
  const el = document.querySelector('[data-claim-rotator]');
  if (!el) return;

  el.textContent = CLAIM_BY_LANG[lang] || CLAIM_BY_LANG.de;
  el.classList.add('visible');
})();
