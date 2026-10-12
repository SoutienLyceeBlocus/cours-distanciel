// Apparition des blocs au défilement. Sans JS ou avec « réduire les animations », tout est visible.
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.addEventListener("DOMContentLoaded", function () {
    var cibles = document.querySelectorAll(
      "main .bloc:not(.ouverture) .bloc__marge, main .bloc:not(.ouverture) .bloc__contenu > *, .etapes li, .garanties li, .contacts > div, .pied"
    );
    var observateur = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observateur.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    cibles.forEach(function (el) {
      el.classList.add("apparait");
      observateur.observe(el);
    });
  });
})();
