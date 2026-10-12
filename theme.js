// Thème clair / sombre. Chargé dans <head> sans defer pour éviter le flash.
(function () {
  var racine = document.documentElement;

  function lire() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function ecrire(valeur) {
    try {
      localStorage.setItem("theme", valeur);
    } catch (e) {
      // stockage indisponible (fichier local, navigation privée) : le choix vaut pour la page
    }
  }

  function systemeSombre() {
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  function themeEffectif() {
    var choisi = racine.getAttribute("data-theme");
    if (choisi === "clair" || choisi === "sombre") return choisi;
    return systemeSombre() ? "sombre" : "clair";
  }

  var initial = lire();
  if (initial === "clair" || initial === "sombre") racine.setAttribute("data-theme", initial);

  function majBouton() {
    var bouton = document.getElementById("bouton-theme");
    if (bouton) bouton.setAttribute("aria-pressed", themeEffectif() === "sombre" ? "true" : "false");
  }

  window.basculerTheme = function () {
    var suivant = themeEffectif() === "sombre" ? "clair" : "sombre";
    racine.setAttribute("data-theme", suivant);
    ecrire(suivant);
    majBouton();
  };

  document.addEventListener("DOMContentLoaded", function () {
    var bouton = document.getElementById("bouton-theme");
    if (!bouton) return;
    bouton.hidden = false;
    majBouton();
    bouton.addEventListener("click", window.basculerTheme);
  });
})();
