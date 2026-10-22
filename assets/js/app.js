/* ESMC — Conseils & outils carrière : application (routage par #, recherche, filtres, fiches). */
(function () {
  "use strict";

  var D = window.ESMC_DATA;
  var app = document.getElementById("app");
  var SITE = "ESMC Conseils carrière";
  var copyStore = [];
  var firstRender = true;

  /* ---------- Utilitaires ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(s) {
    return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  function filiereById(id) {
    for (var i = 0; i < D.filieres.length; i++) if (D.filieres[i].id === id) return D.filieres[i];
    return null;
  }
  function filiereLabel(id) {
    if (id === "toutes") return "Toutes filières";
    var f = filiereById(id);
    return f ? f.label : id;
  }
  function resById(id) {
    for (var i = 0; i < D.ressources.length; i++) if (D.ressources[i].id === id) return D.ressources[i];
    return null;
  }
  function plural(n, one, many) { return n + " " + (n > 1 ? many : one); }
  function storageGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }

  var ICONS = {
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
    layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
    sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill-opacity=".25"/><path d="M10 8l6 4-6 4V8Z"/></svg>'
  };

  // Index de recherche (texte normalisé, sans accents)
  D.ressources.forEach(function (r) {
    r._txt = norm([
      r.titre, r.resume, r.objectif, r.theme, D.types[r.type], D.espaces[r.espace].titre,
      r.filieres.map(filiereLabel).join(" "),
      (r.etapes || []).join(" "),
      r.exemple ? r.exemple.titre + " " + r.exemple.texte : "",
      (r.checklist || []).join(" "),
      (r.modeles || []).map(function (m) { return m.titre; }).join(" "),
      (r.prompts || []).map(function (m) { return m.titre; }).join(" ")
    ].join(" "));
  });

  /* ---------- Rendu des éléments communs ---------- */
  function badges(r, opts) {
    opts = opts || {};
    var out = '<span class="badge badge-type">' + esc(D.types[r.type]) + "</span>";
    r.filieres.forEach(function (f) { out += '<span class="badge">' + esc(filiereLabel(f)) + "</span>"; });
    out += '<span class="badge">' + esc(r.theme) + "</span>";
    if (opts.duree && r.duree) out += '<span class="badge">⏱ ' + esc(r.duree) + "</span>";
    out += '<span class="badge badge-draft">Proposition à valider</span>';
    return out;
  }

  function resCard(r) {
    return '<a class="card res-card" href="#/fiche/' + esc(r.id) + '">' +
      "<h3>" + esc(r.titre) + "</h3>" +
      "<p>" + esc(r.resume) + "</p>" +
      '<div class="meta">' + badges(r) + "</div></a>";
  }

  function filterRes(f) {
    var words = norm(f.q).trim().split(/\s+/).filter(Boolean);
    return D.ressources.filter(function (r) {
      if (f.espace && r.espace !== f.espace) return false;
      if (f.filiere && r.filieres.indexOf(f.filiere) === -1) return false;
      if (f.theme && r.theme !== f.theme) return false;
      if (f.type && r.type !== f.type) return false;
      for (var i = 0; i < words.length; i++) if (r._txt.indexOf(words[i]) === -1) return false;
      return true;
    });
  }

  function uniq(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }

  /* ---------- Bibliothèque : recherche + filtres ---------- */
  // `fixed` : filtres imposés par la page (ex. espace ou filière), `basePath` : route sans paramètres.
  function library(fixed, params, basePath) {
    var scope = filterRes({ q: "", espace: fixed.espace || "", filiere: fixed.filiere || "", theme: "", type: "" });
    var state = {
      q: params.get("q") || "",
      espace: fixed.espace || params.get("espace") || "",
      filiere: fixed.filiere || params.get("filiere") || "",
      theme: params.get("theme") || "",
      type: params.get("type") || ""
    };

    var espaces = uniq(scope.map(function (r) { return r.espace; }));
    var filieres = [];
    scope.forEach(function (r) { r.filieres.forEach(function (f) { if (filieres.indexOf(f) === -1) filieres.push(f); }); });
    var ordre = D.filieres.map(function (f) { return f.id; }).concat(["toutes"]);
    filieres.sort(function (a, b) { return ordre.indexOf(a) - ordre.indexOf(b); });
    var themes = uniq(scope.map(function (r) { return r.theme; })).sort(function (a, b) { return a.localeCompare(b, "fr"); });
    var types = Object.keys(D.types).filter(function (t) { return scope.some(function (r) { return r.type === t; }); });

    function select(name, label, allLabel, values, labelFn) {
      var html = '<label>' + esc(label) + '<select class="select" data-filter="' + name + '"><option value="">' + esc(allLabel) + "</option>";
      values.forEach(function (v) {
        html += '<option value="' + esc(v) + '"' + (state[name] === v ? " selected" : "") + ">" + esc(labelFn ? labelFn(v) : v) + "</option>";
      });
      return html + "</select></label>";
    }

    var selects = [];
    if (!fixed.espace && espaces.length > 1) selects.push(select("espace", "Espace", "Tous les espaces", ["alternance", "filieres", "ia"].filter(function (e) { return espaces.indexOf(e) > -1; }), function (v) { return D.espaces[v].titre; }));
    if (!fixed.filiere && filieres.length > 1) selects.push(select("filiere", "Filière", "Toutes", filieres, function (v) { return v === "toutes" ? "Tronc commun (toutes filières)" : filiereLabel(v); }));
    if (themes.length > 1) selects.push(select("theme", "Thème", "Tous les thèmes", themes));
    if (types.length > 1) selects.push(select("type", "Type de ressource", "Tous les types", types, function (v) { return D.types[v]; }));

    var html = '<form class="filters" role="search" data-library onsubmit="return false">' +
      '<div class="search-field">' + ICONS.search +
      '<input class="input" type="search" data-filter="q" placeholder="Rechercher : CV, relance, prompt, objection…" aria-label="Rechercher une fiche" value="' + esc(state.q) + '" enterkeyhint="search"></div>' +
      (selects.length ? '<div class="filters-row" style="--cols:' + selects.length + '">' + selects.join("") + "</div>" : "") +
      "</form>" +
      '<div class="results-bar"><span data-count></span><button type="button" class="link-btn" data-reset hidden>Réinitialiser</button></div>' +
      '<div class="grid grid-3" data-results></div>';

    return {
      html: html,
      bind: function () {
        var form = app.querySelector("[data-library]");
        var results = app.querySelector("[data-results]");
        var count = app.querySelector("[data-count]");
        var reset = app.querySelector("[data-reset]");

        function update(writeUrl) {
          var list = filterRes(state);
          count.textContent = plural(list.length, "fiche trouvée", "fiches trouvées");
          results.innerHTML = list.length ? list.map(resCard).join("") :
            '<div class="empty card" style="grid-column:1/-1"><p><strong>Aucune fiche ne correspond.</strong></p><p>Essayez un autre mot-clé ou réinitialisez les filtres.</p></div>';
          var active = state.q || (!fixed.espace && state.espace) || (!fixed.filiere && state.filiere) || state.theme || state.type;
          reset.hidden = !active;
          if (writeUrl) {
            var p = new URLSearchParams();
            ["q", "espace", "filiere", "theme", "type"].forEach(function (k) { if (state[k] && !fixed[k]) p.set(k, state[k]); });
            var qs = p.toString();
            history.replaceState(null, "", basePath + (qs ? "?" + qs : ""));
          }
        }

        form.addEventListener("input", function (e) {
          var k = e.target.getAttribute("data-filter");
          if (!k) return;
          state[k] = e.target.value;
          update(true);
        });
        form.addEventListener("change", function (e) {
          var k = e.target.getAttribute("data-filter");
          if (!k) return;
          state[k] = e.target.value;
          update(true);
        });
        reset.addEventListener("click", function () {
          ["q", "espace", "filiere", "theme", "type"].forEach(function (k) { if (!fixed[k]) state[k] = ""; });
          form.querySelectorAll("[data-filter]").forEach(function (el) { el.value = ""; });
          update(true);
        });
        update(false);
      }
    };
  }

  /* ---------- Vidéos ---------- */
  function videoEmbed(v) {
    var url = (v.url || "").trim();
    var m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/))) {
      return '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(m[1]) + '" title="' + esc(v.titre) + '" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return '<iframe src="https://player.vimeo.com/video/' + esc(m[1]) + '" title="' + esc(v.titre) + '" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>';
    }
    if (/\.(mp4|webm)(\?.*)?$/i.test(url)) {
      return '<video controls preload="metadata" playsinline src="' + esc(url) + '"></video>';
    }
    return '<div class="video-placeholder">' + ICONS.play + "<strong>Emplacement vidéo ESMC</strong><span>Vidéo à ajouter</span></div>";
  }

  function videosSection() {
    return '<section class="section"><div class="container">' +
      '<div class="section-title"><h2>Vidéos ESMC</h2></div>' +
      '<p style="color:var(--ink-2)">Espace réservé aux vidéos d’ESMC Business School.</p>' +
      '<div class="grid grid-3">' + D.videos.map(function (v) {
        return '<article class="card video-card"><div class="video-frame">' + videoEmbed(v) + '</div>' +
          '<div class="video-body"><h3>' + esc(v.titre) + "</h3><p>" + esc(v.description) + "</p></div></article>";
      }).join("") + "</div></div></section>";
  }

  /* ---------- Vues ---------- */
  function countEspace(e) { return D.ressources.filter(function (r) { return r.espace === e; }).length; }
  function countFiliere(f) { return D.ressources.filter(function (r) { return r.filieres.indexOf(f) > -1; }).length; }

  function spaceCards() {
    return '<div class="grid grid-3">' + ["alternance", "filieres", "ia"].map(function (k) {
      var e = D.espaces[k];
      return '<a class="card space-card" href="#/' + k + '"><span class="icon">' + ICONS[e.icone] + "</span>" +
        "<h3>" + esc(e.titre) + "</h3><p>" + esc(e.intro) + "</p>" +
        '<span class="count">' + plural(countEspace(k), "fiche", "fiches") + "</span>" +
        '<span class="more">Découvrir →</span></a>';
    }).join("") + "</div>";
  }

  function viewHome() {
    var featured = ["cv-alternance", "liste-entreprises-cibles", "preparer-entretien", "relances", "ia-bien-prompter", "ia-post-linkedin-ndrc"]
      .map(resById).filter(Boolean);
    document.title = SITE;
    app.innerHTML =
      '<section class="hero"><div class="container">' +
        '<span class="eyebrow">ESMC Business School</span>' +
        "<h1>Conseils &amp; outils carrière</h1>" +
        '<p class="lead">Des méthodes simples, des modèles à copier et des fiches pratiques pour préparer votre recherche d’alternance et développer des compétences utiles en entreprise.</p>' +
        '<form class="hero-search" role="search" data-hero-search>' +
          '<input class="input" type="search" name="q" placeholder="CV, relance, prompt…" aria-label="Rechercher une fiche" enterkeyhint="search">' +
          '<button class="btn" type="submit">Rechercher</button>' +
        "</form>" +
        '<span class="notice-pill">Version de démonstration — contenus en cours de validation</span>' +
      "</div></section>" +

      '<section class="section"><div class="container">' +
        '<div class="section-title"><h2>Trois espaces pour avancer</h2></div>' + spaceCards() +
      "</div></section>" +

      '<section class="section" style="padding-top:0"><div class="container">' +
        '<div class="section-title"><h2>Par filière</h2><a href="#/filieres">Voir tout →</a></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:8px">' + D.filieres.map(function (f) {
          return '<a class="btn btn-ghost btn-sm" href="#/filiere/' + f.id + '">' + esc(f.label) + "</a>";
        }).join("") + "</div>" +
      "</div></section>" +

      '<section class="section" style="padding-top:0"><div class="container">' +
        '<div class="section-title"><h2>Pour bien démarrer</h2><a href="#/fiches">Toutes les fiches →</a></div>' +
        '<div class="grid grid-3">' + featured.map(resCard).join("") + "</div>" +
      "</div></section>" +

      videosSection() +

      '<section class="section"><div class="container"><div class="commit">' +
        '<div class="card"><h3>Comment utiliser ces fiches</h3><ul>' +
          "<li>Chaque fiche présente un <strong>objectif</strong>, des <strong>étapes simples</strong> et un <strong>exemple concret</strong>.</li>" +
          "<li>Copiez les modèles et prompts en un clic, puis personnalisez-les.</li>" +
          "<li>Cochez les checklists : votre progression reste enregistrée sur votre appareil.</li>" +
        "</ul></div>" +
        '<div class="card"><h3>À savoir</h3><ul>' +
          "<li>Les fiches sont des <strong>propositions de départ à valider</strong> par l’équipe ESMC.</li>" +
          "<li>Les exemples sont <strong>fictifs</strong> et servent d’illustration.</li>" +
          "<li>Ce site vous aide à vous préparer : il <strong>ne garantit pas</strong> l’obtention d’une alternance.</li>" +
        "</ul></div>" +
      "</div></div></section>";

    app.querySelector("[data-hero-search]").addEventListener("submit", function (e) {
      e.preventDefault();
      var q = e.target.q.value.trim();
      location.hash = "#/fiches" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }

  function viewEspace(key, params) {
    var e = D.espaces[key];
    var lib = library({ espace: key }, params, "#/" + key);
    document.title = e.titre + " — " + SITE;
    var extra = "";
    if (key === "filieres") {
      extra = '<section class="section" style="padding-top:8px"><div class="container">' +
        "<h2>Choisir ma filière</h2>" +
        '<div class="grid grid-3">' + D.filieres.map(function (f) {
          return '<a class="card filiere-card' + (f.aCompleter ? " todo" : "") + '" href="#/filiere/' + f.id + '">' +
            '<span class="label">' + esc(f.label) + "</span>" +
            '<span class="nom">' + esc(f.nom) + "</span>" +
            "<p>" + esc(f.desc) + "</p>" +
            '<span class="badge" style="align-self:flex-start;margin-top:8px">' + (f.aCompleter ? "À compléter" : plural(countFiliere(f.id), "fiche", "fiches")) + "</span></a>";
        }).join("") + "</div></div></section>";
    }
    app.innerHTML =
      '<div class="container page-head"><span class="eyebrow">Espace</span><h1>' + esc(e.titre) + "</h1><p>" + esc(e.intro) + "</p></div>" +
      extra +
      '<section class="section" style="padding-top:8px"><div class="container">' +
        (key === "filieres" ? "<h2>Toutes les fiches filières</h2>" : "") + lib.html +
      "</div></section>";
    lib.bind();
  }

  function viewFiliere(id, params) {
    var f = filiereById(id);
    if (!f) return viewNotFound();
    var lib = library({ filiere: id }, params, "#/filiere/" + id);
    document.title = f.label + " — " + SITE;
    app.innerHTML =
      '<div class="container"><nav class="breadcrumb"><a href="#/filieres">← Toutes les filières</a></nav></div>' +
      '<div class="container page-head" style="padding-top:4px"><span class="eyebrow">Filière</span><h1>' + esc(f.label) + "</h1>" +
        '<p><strong>' + esc(f.nom) + "</strong> — " + esc(f.desc) + "</p>" +
        (f.aCompleter ? '<div class="draft-banner">' + ICONS.info + "<div>Cet espace est prévu pour les autres formations ESMC. L’équipe peut le compléter en suivant la trame de la fiche ci-dessous.</div></div>" : "") +
        '<p style="font-size:.9rem">Les fiches communes à toutes les filières (CV, entretiens, IA…) sont dans <a href="#/alternance">Trouver mon alternance</a> et <a href="#/ia">Créer du contenu avec l’IA</a>.</p>' +
      "</div>" +
      '<section class="section" style="padding-top:8px"><div class="container">' + lib.html + "</div></section>";
    lib.bind();
  }

  function viewLibrary(params) {
    var lib = library({}, params, "#/fiches");
    document.title = "Toutes les fiches — " + SITE;
    app.innerHTML =
      '<div class="container page-head"><span class="eyebrow">Recherche</span><h1>Toutes les fiches</h1>' +
      "<p>Filtrez par espace, filière, thème et type de ressource, ou tapez un mot-clé.</p></div>" +
      '<section class="section" style="padding-top:8px"><div class="container">' + lib.html + "</div></section>";
    lib.bind();
    var q = app.querySelector('[data-filter="q"]');
    if (q && !params.get("q") && window.matchMedia("(min-width: 900px)").matches) q.focus();
  }

  function copyBlock(item) {
    var idx = copyStore.push(item.texte) - 1;
    return '<div class="copy-item"><div class="copy-head"><strong>' + esc(item.titre) + "</strong>" +
      '<button type="button" class="btn btn-sm" data-copy="' + idx + '">' + ICONS.copy + "Copier</button></div>" +
      '<pre class="copy-body">' + esc(item.texte) + "</pre></div>";
  }

  function viewFiche(id) {
    var r = resById(id);
    if (!r) return viewNotFound();
    copyStore = [];
    var e = D.espaces[r.espace];
    var n = 0;
    function h(title) { n++; return '<h2><span class="num">' + n + "</span>" + esc(title) + "</h2>"; }

    var backHref = r.espace === "filieres" && r.filieres[0] !== "toutes" ? "#/filiere/" + r.filieres[0] : "#/" + r.espace;
    var backLabel = r.espace === "filieres" && r.filieres[0] !== "toutes" ? filiereLabel(r.filieres[0]) : e.titre;

    var main =
      '<div class="block block-objectif">' + h("Objectif") + "<p>" + esc(r.objectif) + "</p></div>" +
      '<div class="block">' + h("Étapes") + '<ol class="steps">' + r.etapes.map(function (s) { return "<li><span>" + esc(s) + "</span></li>"; }).join("") + "</ol></div>" +
      '<div class="block">' + h("Exemple concret") +
        (r.exemple.titre ? '<div class="example-title">' + esc(r.exemple.titre) + "</div>" : "") +
        '<div class="example">' + esc(r.exemple.texte) + "</div>" +
        '<p class="tag-fictif">Exemple d’illustration, à adapter à votre situation.</p></div>';

    if (r.modeles && r.modeles.length) main += '<div class="block">' + h(r.modeles.length > 1 ? "Modèles à copier" : "Modèle à copier") + r.modeles.map(copyBlock).join("") + "</div>";
    if (r.prompts && r.prompts.length) main += '<div class="block">' + h(r.prompts.length > 1 ? "Prompts à copier" : "Prompt à copier") + r.prompts.map(copyBlock).join("") + "</div>";
    if (r.checklist && r.checklist.length) {
      var saved = [];
      try { saved = JSON.parse(storageGet("esmc-check-" + r.id) || "[]"); } catch (err) { saved = []; }
      main += '<div class="block">' + h("Checklist") +
        '<div class="progress-label"><span data-progress-text></span><button type="button" class="link-btn" data-check-reset>Tout décocher</button></div>' +
        '<div class="progress"><span data-progress-bar></span></div>' +
        '<ul class="checklist">' + r.checklist.map(function (c, i) {
          return '<li><label><input type="checkbox" data-check="' + i + '"' + (saved.indexOf(i) > -1 ? " checked" : "") + "><span>" + esc(c) + "</span></label></li>";
        }).join("") + "</ul></div>";
    }
    if (r.vigilance && r.vigilance.length) main += '<div class="block">' + h("Points de vigilance") + '<ul class="vigilance">' + r.vigilance.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>";

    var related = D.ressources.filter(function (x) {
      return x.id !== r.id && (x.theme === r.theme || (r.filieres[0] !== "toutes" && x.filieres.indexOf(r.filieres[0]) > -1));
    }).slice(0, 4);

    var aside =
      '<div class="block"><h2 style="font-size:1rem">En bref</h2><dl class="facts">' +
        "<dt>Espace</dt><dd>" + esc(e.titre) + "</dd>" +
        "<dt>Filière</dt><dd>" + esc(r.filieres.map(filiereLabel).join(", ")) + "</dd>" +
        "<dt>Thème</dt><dd>" + esc(r.theme) + "</dd>" +
        "<dt>Type</dt><dd>" + esc(D.types[r.type]) + "</dd>" +
        (r.duree ? "<dt>Durée</dt><dd>" + esc(r.duree) + "</dd>" : "") +
        "<dt>Statut</dt><dd>Proposition à valider</dd>" +
      "</dl>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">' +
        '<button type="button" class="btn btn-ghost btn-sm" data-share>' + ICONS.link + "Copier le lien</button>" +
        '<button type="button" class="btn btn-ghost btn-sm" data-print>' + ICONS.print + "Imprimer</button>" +
      "</div></div>" +
      (related.length ? '<div class="block"><h2 style="font-size:1rem">Fiches liées</h2><ul class="aside-list">' +
        related.map(function (x) { return '<li><a href="#/fiche/' + esc(x.id) + '">' + esc(x.titre) + "</a></li>"; }).join("") + "</ul></div>" : "");

    document.title = r.titre + " — " + SITE;
    app.innerHTML =
      '<article class="container fiche">' +
        '<nav class="breadcrumb"><a href="' + backHref + '">← ' + esc(backLabel) + "</a></nav>" +
        '<header class="fiche-head"><div class="meta">' + badges(r, { duree: true }) + "</div>" +
          "<h1>" + esc(r.titre) + "</h1>" +
          '<p class="lead">' + esc(r.resume) + "</p></header>" +
        '<div class="draft-banner">' + ICONS.info + "<div><strong>Proposition de contenu à valider</strong> par l’équipe pédagogique ESMC. Adaptez toujours les conseils à votre entreprise et demandez l’avis de votre tuteur ou de vos formateurs.</div></div>" +
        '<div class="fiche-layout"><div>' + main + '</div><aside class="fiche-aside">' + aside + "</aside></div>" +
      "</article>";

    bindChecklist(r);
  }

  function bindChecklist(r) {
    var boxes = app.querySelectorAll("[data-check]");
    if (!boxes.length) return;
    var text = app.querySelector("[data-progress-text]");
    var bar = app.querySelector("[data-progress-bar]");
    function refresh(save) {
      var checked = [];
      boxes.forEach(function (b) { if (b.checked) checked.push(Number(b.getAttribute("data-check"))); });
      text.textContent = checked.length + " / " + boxes.length + " terminé" + (checked.length > 1 ? "s" : "");
      bar.style.width = (checked.length / boxes.length * 100) + "%";
      if (save) storageSet("esmc-check-" + r.id, JSON.stringify(checked));
    }
    boxes.forEach(function (b) { b.addEventListener("change", function () { refresh(true); }); });
    app.querySelector("[data-check-reset]").addEventListener("click", function () {
      boxes.forEach(function (b) { b.checked = false; });
      refresh(true);
    });
    refresh(false);
  }

  function viewNotFound() {
    document.title = "Page introuvable — " + SITE;
    app.innerHTML = '<div class="container page-head"><h1>Page introuvable</h1><p>Cette page n’existe pas ou a été déplacée.</p>' +
      '<a class="btn" href="#/">Retour à l’accueil</a></div>';
  }

  /* ---------- Copier / partager ---------- */
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
      copyText(copyStore[Number(btn.getAttribute("data-copy"))]).then(function (ok) {
        toast(ok ? "Texte copié — pensez à le personnaliser" : "Copie impossible : sélectionnez le texte manuellement");
      });
      return;
    }
    if (e.target.closest("[data-share]")) {
      copyText(location.href).then(function (ok) { toast(ok ? "Lien de la fiche copié" : "Copie impossible"); });
      return;
    }
    if (e.target.closest("[data-print]")) window.print();
  });

  /* ---------- Routage ---------- */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "");
    var i = h.indexOf("?");
    var path = i > -1 ? h.slice(0, i) : h;
    var qs = i > -1 ? h.slice(i + 1) : "";
    return { parts: path.split("/").filter(Boolean), params: new URLSearchParams(qs) };
  }

  function setActiveNav(key) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      var on = a.getAttribute("data-nav") === key;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }

  function route() {
    var r = parseHash();
    var view = r.parts[0] || "";
    var nav = "home";
    if (view === "") viewHome();
    else if (view === "alternance" || view === "filieres" || view === "ia") { viewEspace(view, r.params); nav = view; }
    else if (view === "filiere") { viewFiliere(r.parts[1], r.params); nav = "filieres"; }
    else if (view === "fiches") { viewLibrary(r.params); nav = "fiches"; }
    else if (view === "fiche") { var res = resById(r.parts[1]); viewFiche(r.parts[1]); nav = res ? res.espace : ""; }
    else viewNotFound();
    setActiveNav(nav);
    if (!firstRender) {
      window.scrollTo(0, 0);
      app.focus({ preventScroll: true });
    }
    firstRender = false;
  }

  window.addEventListener("hashchange", route);
  route();
})();
