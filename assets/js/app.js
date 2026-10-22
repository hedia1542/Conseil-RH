/* ESMC — Conseils & outils carrière : interactions dans le navigateur
 * (filtres, copie, checklists, vidéos). Le contenu des pages est déjà écrit dans le HTML. */
(function () {
  "use strict";

  var R = window.ESMC_RENDER;
  var app = document.getElementById("app");

  // Anciennes adresses du type « #/fiche/cv-alternance » → nouvelles pages
  if (/^#\//.test(location.hash)) {
    location.replace(document.baseURI.split("#")[0].split("?")[0] + location.hash.slice(2).replace(/^([^?]+)/, "$1/").replace(/^\/$/, ""));
    return;
  }

  function storageGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }

  /* ---------- Lien d'évitement ---------- */
  var skip = document.querySelector(".skip-link");
  if (skip) skip.addEventListener("click", function (e) { e.preventDefault(); app.focus(); });

  /* ---------- Bibliothèque : recherche + filtres ---------- */
  var form = app.querySelector("[data-library]");
  if (form) {
    var fixed = { espace: form.getAttribute("data-fixed-espace"), filiere: form.getAttribute("data-fixed-filiere") };
    var results = app.querySelector("[data-results]");
    var count = app.querySelector("[data-count]");
    var reset = app.querySelector("[data-reset]");
    var keys = ["q", "espace", "filiere", "theme", "type"];
    var params = new URLSearchParams(location.search);
    var state = {};
    keys.forEach(function (k) {
      state[k] = fixed[k] || params.get(k) || "";
      var el = form.querySelector('[data-filter="' + k + '"]');
      if (el && !fixed[k]) el.value = state[k];
      if (el && el.value !== state[k]) state[k] = el.value; // valeur inconnue dans la liste
    });

    var update = function (writeUrl) {
      var list = R.filterRes(state);
      count.textContent = R.countLabel(list.length);
      results.innerHTML = R.resultsHtml(list);
      reset.hidden = !keys.some(function (k) { return state[k] && !fixed[k]; });
      if (writeUrl) {
        var p = new URLSearchParams();
        keys.forEach(function (k) { if (state[k] && !fixed[k]) p.set(k, state[k]); });
        var qs = p.toString();
        history.replaceState(null, "", location.pathname + (qs ? "?" + qs : ""));
      }
    };
    var onChange = function (e) {
      var k = e.target.getAttribute("data-filter");
      if (!k) return;
      state[k] = e.target.value;
      update(true);
    };
    form.addEventListener("input", onChange);
    form.addEventListener("change", onChange);
    reset.addEventListener("click", function () {
      keys.forEach(function (k) { if (!fixed[k]) state[k] = ""; });
      form.querySelectorAll("[data-filter]").forEach(function (el) { el.value = ""; });
      update(true);
    });
    if (keys.some(function (k) { return state[k] && !fixed[k]; })) update(false);
  }

  /* ---------- Checklist ---------- */
  var cl = app.querySelector("[data-checklist]");
  if (cl) {
    var key = "esmc-check-" + cl.getAttribute("data-checklist");
    var boxes = cl.querySelectorAll("[data-check]");
    var text = cl.querySelector("[data-progress-text]");
    var bar = cl.querySelector("[data-progress-bar]");
    var saved = [];
    try { saved = JSON.parse(storageGet(key) || "[]"); } catch (err) { saved = []; }
    boxes.forEach(function (b) { if (saved.indexOf(Number(b.getAttribute("data-check"))) > -1) b.checked = true; });
    var refresh = function (save) {
      var checked = [];
      boxes.forEach(function (b) { if (b.checked) checked.push(Number(b.getAttribute("data-check"))); });
      text.textContent = checked.length + " / " + boxes.length + " terminé" + (checked.length > 1 ? "s" : "");
      bar.style.width = (checked.length / boxes.length * 100) + "%";
      if (save) storageSet(key, JSON.stringify(checked));
    };
    boxes.forEach(function (b) { b.addEventListener("change", function () { refresh(true); }); });
    cl.querySelector("[data-check-reset]").addEventListener("click", function () {
      boxes.forEach(function (b) { b.checked = false; });
      refresh(true);
    });
    refresh(false);
  }

  /* ---------- Copier / partager / vidéos ---------- */
  var toastEl = document.querySelector(".toast");
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 2200);
  }

  function copyText(text) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallback(); });
    }
    return Promise.resolve(fallback());
  }

  app.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copy]");
    if (btn) {
      copyText(btn.closest(".copy-item").querySelector(".copy-body").textContent).then(function (ok) {
        toast(ok ? "Texte copié — pensez à le personnaliser" : "Copie impossible : sélectionnez le texte manuellement");
      });
      return;
    }
    if (e.target.closest("[data-share]")) {
      copyText(location.href).then(function (ok) { toast(ok ? "Lien de la fiche copié" : "Copie impossible"); });
      return;
    }
    if (e.target.closest("[data-print]")) { window.print(); return; }

    var yt = e.target.closest("[data-yt]");
    if (yt) {
      e.preventDefault();
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(yt.getAttribute("data-yt")) + "?autoplay=1&playsinline=1&rel=0";
      iframe.title = yt.getAttribute("aria-label") || "Vidéo ESMC";
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      yt.replaceWith(iframe);
    }
  });
})();
