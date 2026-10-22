/*
 * ESMC — Conseils & outils carrière : fonctions d'affichage partagées.
 * Utilisées par scripts/build.js (génération des pages HTML pour Google)
 * et par le navigateur (mise à jour des résultats de recherche).
 * Tous les liens sont relatifs à la racine du site (balise <base> dans chaque page).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory;
  else root.ESMC_RENDER = factory(root.ESMC_DATA);
})(this, function (D) {
  "use strict";

  var SITE = "ESMC Conseils carrière";

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
  function uniq(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }

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

  /* ---------- Éléments communs ---------- */
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
    return '<a class="card res-card" href="fiche/' + esc(r.id) + '/">' +
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

  function resultsHtml(list) {
    return list.length ? list.map(resCard).join("") :
      '<div class="empty card" style="grid-column:1/-1"><p><strong>Aucune fiche ne correspond.</strong></p><p>Essayez un autre mot-clé ou réinitialisez les filtres.</p></div>';
  }
  function countLabel(n) { return plural(n, "fiche trouvée", "fiches trouvées"); }

  /* ---------- Bibliothèque : recherche + filtres ---------- */
  // `fixed` : filtres imposés par la page (espace ou filière). Les résultats complets sont
  // écrits dans la page (lisibles par Google) ; app.js gère ensuite les filtres.
  function library(fixed) {
    var scope = filterRes({ q: "", espace: fixed.espace || "", filiere: fixed.filiere || "" });

    var espaces = uniq(scope.map(function (r) { return r.espace; }));
    var filieres = [];
    scope.forEach(function (r) { r.filieres.forEach(function (f) { if (filieres.indexOf(f) === -1) filieres.push(f); }); });
    var ordre = D.filieres.map(function (f) { return f.id; }).concat(["toutes"]);
    filieres.sort(function (a, b) { return ordre.indexOf(a) - ordre.indexOf(b); });
    var themes = uniq(scope.map(function (r) { return r.theme; })).sort(function (a, b) { return a.localeCompare(b, "fr"); });
    var types = Object.keys(D.types).filter(function (t) { return scope.some(function (r) { return r.type === t; }); });

    function select(name, label, allLabel, values, labelFn) {
      var html = "<label>" + esc(label) + '<select class="select" name="' + name + '" data-filter="' + name + '"><option value="">' + esc(allLabel) + "</option>";
      values.forEach(function (v) {
        html += '<option value="' + esc(v) + '">' + esc(labelFn ? labelFn(v) : v) + "</option>";
      });
      return html + "</select></label>";
    }

    var selects = [];
    if (!fixed.espace && espaces.length > 1) selects.push(select("espace", "Espace", "Tous les espaces", ["alternance", "filieres", "ia"].filter(function (e) { return espaces.indexOf(e) > -1; }), function (v) { return D.espaces[v].titre; }));
    if (!fixed.filiere && filieres.length > 1) selects.push(select("filiere", "Filière", "Toutes", filieres, function (v) { return v === "toutes" ? "Tronc commun (toutes filières)" : filiereLabel(v); }));
    if (themes.length > 1) selects.push(select("theme", "Thème", "Tous les thèmes", themes));
    if (types.length > 1) selects.push(select("type", "Type de ressource", "Tous les types", types, function (v) { return D.types[v]; }));

    return '<form class="filters" role="search" data-library data-fixed-espace="' + esc(fixed.espace || "") + '" data-fixed-filiere="' + esc(fixed.filiere || "") + '" onsubmit="return false">' +
      '<div class="search-field">' + ICONS.search +
      '<input class="input" type="search" name="q" data-filter="q" placeholder="Rechercher : CV, relance, prompt, objection…" aria-label="Rechercher une fiche" enterkeyhint="search"></div>' +
      (selects.length ? '<div class="filters-row" style="--cols:' + selects.length + '">' + selects.join("") + "</div>" : "") +
      "</form>" +
      '<div class="results-bar"><span data-count>' + countLabel(scope.length) + '</span><button type="button" class="link-btn" data-reset hidden>Réinitialiser</button></div>' +
      '<div class="grid grid-3" data-results>' + resultsHtml(scope) + "</div>";
  }

  /* ---------- Vidéos ---------- */
  function youtubeId(url) {
    var m = String(url || "").match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
    return m ? m[1] : null;
  }
  function isVertical(v) { return /youtube\.com\/shorts\//.test(v.url || "") || v.format === "vertical"; }

  // Vignette cliquable : la vidéo YouTube ne se charge qu'au clic (page plus rapide sur mobile).
  function videoEmbed(v) {
    var url = (v.url || "").trim();
    var id = youtubeId(url), m;
    if (id) {
      return '<a class="yt-facade" href="' + esc(url) + '" data-yt="' + esc(id) + '" target="_blank" rel="noopener" aria-label="Lire la vidéo : ' + esc(v.titre) + '">' +
        '<img src="https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg" alt="" loading="lazy" decoding="async">' +
        '<span class="yt-play">' + ICONS.play + "</span></a>";
    }
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return '<iframe src="https://player.vimeo.com/video/' + esc(m[1]) + '" title="' + esc(v.titre) + '" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>';
    }
    if (/\.(mp4|webm)(\?.*)?$/i.test(url)) {
      return '<video controls preload="metadata" playsinline src="' + esc(url) + '"></video>';
    }
    return '<div class="video-placeholder">' + ICONS.play + "<strong>Emplacement vidéo ESMC</strong><span>Vidéo à ajouter</span></div>";
  }

  function videoCard(v) {
    return '<article class="card video-card"><div class="video-frame' + (isVertical(v) ? " vertical" : "") + '">' + videoEmbed(v) + "</div>" +
      '<div class="video-body"><h3>' + esc(v.titre) + "</h3>" + (v.description ? "<p>" + esc(v.description) + "</p>" : "") + "</div></article>";
  }

  function channelButton() {
    return D.chaineYoutube ? '<a class="btn btn-ghost" href="' + esc(D.chaineYoutube) + '" target="_blank" rel="noopener">' + ICONS.play + "Notre chaîne YouTube</a>" : "";
  }

  /* ---------- Pages ---------- */
  function countEspace(e) { return D.ressources.filter(function (r) { return r.espace === e; }).length; }
  function countFiliere(f) { return D.ressources.filter(function (r) { return r.filieres.indexOf(f) > -1; }).length; }

  function spaceCards() {
    return '<div class="grid grid-3">' + ["alternance", "filieres", "ia"].map(function (k) {
      var e = D.espaces[k];
      return '<a class="card space-card" href="' + k + '/"><span class="icon">' + ICONS[e.icone] + "</span>" +
        "<h3>" + esc(e.titre) + "</h3><p>" + esc(e.intro) + "</p>" +
        '<span class="count">' + plural(countEspace(k), "fiche", "fiches") + "</span>" +
        '<span class="more">Découvrir →</span></a>';
    }).join("") + "</div>";
  }

  function pageHome() {
    var featured = ["cv-alternance", "liste-entreprises-cibles", "preparer-entretien", "relances", "ia-bien-prompter", "ia-post-linkedin-ndrc"]
      .map(resById).filter(Boolean);
    var homeVideos = D.videos.slice(0, 4);
    return {
      title: SITE + " — alternance, fiches métiers et IA",
      description: "Conseils et outils carrière d’ESMC Business School : trouver son alternance (CV, candidatures, entretiens, relances), fiches pratiques par filière et création de contenu avec l’IA.",
      nav: "home",
      body:
        '<section class="hero"><div class="container">' +
          '<img class="hero-logo" src="assets/img/logo-esmc.jpg" alt="Logo ESMC Paris Business School" width="132" height="123">' +
          '<span class="eyebrow">ESMC Business School</span>' +
          "<h1>Conseils &amp; outils carrière</h1>" +
          '<p class="lead">Des méthodes simples, des modèles à copier et des fiches pratiques pour préparer votre recherche d’alternance et développer des compétences utiles en entreprise.</p>' +
          '<form class="hero-search" role="search" action="fiches/" method="get">' +
            '<input class="input" type="search" name="q" placeholder="CV, relance, prompt…" aria-label="Rechercher une fiche" enterkeyhint="search">' +
            '<button class="btn" type="submit">Rechercher</button>' +
          "</form>" +
          '<span class="notice-pill">Version de démonstration — contenus en cours de validation</span>' +
        "</div></section>" +

        '<section class="section"><div class="container">' +
          '<div class="section-title"><h2>Trois espaces pour avancer</h2></div>' + spaceCards() +
        "</div></section>" +

        '<section class="section" style="padding-top:0"><div class="container">' +
          '<div class="section-title"><h2>Par filière</h2><a href="filieres/">Voir tout →</a></div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:8px">' + D.filieres.map(function (f) {
            return '<a class="btn btn-ghost btn-sm" href="filiere/' + f.id + '/">' + esc(f.label) + "</a>";
          }).join("") + "</div>" +
        "</div></section>" +

        '<section class="section" style="padding-top:0"><div class="container">' +
          '<div class="section-title"><h2>Pour bien démarrer</h2><a href="fiches/">Toutes les fiches →</a></div>' +
          '<div class="grid grid-3">' + featured.map(resCard).join("") + "</div>" +
        "</div></section>" +

        '<section class="section"><div class="container">' +
          '<div class="section-title"><h2>Vidéos ESMC</h2><a href="videos/">Toutes les vidéos →</a></div>' +
          '<div class="grid video-grid">' + homeVideos.map(videoCard).join("") + "</div>" +
          '<p class="btn-row"><a class="btn" href="videos/">' + ICONS.play + "Voir les " + D.videos.length + " vidéos</a>" + channelButton() + "</p>" +
        "</div></section>" +

        '<section class="section"><div class="container"><div class="commit">' +
          '<div class="card"><h2 class="h3">Comment utiliser ces fiches</h2><ul>' +
            "<li>Chaque fiche présente un <strong>objectif</strong>, des <strong>étapes simples</strong> et un <strong>exemple concret</strong>.</li>" +
            "<li>Copiez les modèles et prompts en un clic, puis personnalisez-les.</li>" +
            "<li>Cochez les checklists : votre progression reste enregistrée sur votre appareil.</li>" +
          "</ul></div>" +
          '<div class="card"><h2 class="h3">À savoir</h2><ul>' +
            "<li>Les fiches sont des <strong>propositions de départ à valider</strong> par l’équipe ESMC.</li>" +
            "<li>Les exemples sont <strong>fictifs</strong> et servent d’illustration.</li>" +
            "<li>Ce site vous aide à vous préparer : il <strong>ne garantit pas</strong> l’obtention d’une alternance.</li>" +
          "</ul></div>" +
        "</div></div></section>"
    };
  }

  function pageEspace(key) {
    var e = D.espaces[key];
    var extra = "";
    if (key === "filieres") {
      extra = '<section class="section" style="padding-top:8px"><div class="container">' +
        "<h2>Choisir ma filière</h2>" +
        '<div class="grid grid-3">' + D.filieres.map(function (f) {
          return '<a class="card filiere-card' + (f.aCompleter ? " todo" : "") + '" href="filiere/' + f.id + '/">' +
            '<span class="label">' + esc(f.label) + "</span>" +
            '<span class="nom">' + esc(f.nom) + "</span>" +
            "<p>" + esc(f.desc) + "</p>" +
            '<span class="badge" style="align-self:flex-start;margin-top:8px">' + (f.aCompleter ? "À compléter" : plural(countFiliere(f.id), "fiche", "fiches")) + "</span></a>";
        }).join("") + "</div></div></section>";
    }
    return {
      title: e.titre + " — " + SITE,
      description: e.intro,
      nav: key,
      body:
        '<div class="container page-head"><span class="eyebrow">Espace</span><h1>' + esc(e.titre) + "</h1><p>" + esc(e.intro) + "</p></div>" +
        extra +
        '<section class="section" style="padding-top:8px"><div class="container">' +
          (key === "filieres" ? "<h2>Toutes les fiches filières</h2>" : "") + library({ espace: key }) +
        "</div></section>"
    };
  }

  function pageFiliere(id) {
    var f = filiereById(id);
    return {
      title: f.label + " : fiches pratiques — " + SITE,
      description: "Fiches pratiques " + f.label + " (" + f.nom + ") : " + f.desc,
      nav: "filieres",
      body:
        '<div class="container"><nav class="breadcrumb"><a href="filieres/">← Toutes les filières</a></nav></div>' +
        '<div class="container page-head" style="padding-top:4px"><span class="eyebrow">Filière</span><h1>' + esc(f.label) + "</h1>" +
          "<p><strong>" + esc(f.nom) + "</strong> — " + esc(f.desc) + "</p>" +
          (f.aCompleter ? '<div class="draft-banner">' + ICONS.info + "<div>Cet espace est prévu pour les autres formations ESMC. L’équipe peut le compléter en suivant la trame de la fiche ci-dessous.</div></div>" : "") +
          '<p style="font-size:.9rem">Les fiches communes à toutes les filières (CV, entretiens, IA…) sont dans <a href="alternance/">Trouver mon alternance</a> et <a href="ia/">Créer du contenu avec l’IA</a>.</p>' +
        "</div>" +
        '<section class="section" style="padding-top:8px"><div class="container">' + library({ filiere: id }) + "</div></section>"
    };
  }

  function pageLibrary() {
    return {
      title: "Toutes les fiches — " + SITE,
      description: "Recherchez parmi toutes les fiches ESMC : CV, candidatures, entretiens, fiches par filière, prompts IA. Filtres par filière, thème et type de ressource.",
      nav: "fiches",
      body:
        '<div class="container page-head"><span class="eyebrow">Recherche</span><h1>Toutes les fiches</h1>' +
        "<p>Filtrez par espace, filière, thème et type de ressource, ou tapez un mot-clé.</p></div>" +
        '<section class="section" style="padding-top:8px"><div class="container">' + library({}) + "</div></section>"
    };
  }

  function pageVideos() {
    return {
      title: "Vidéos ESMC Business School — " + SITE,
      description: "Toutes les vidéos d’ESMC Business School : présentation de l’école, alternance et vie étudiante.",
      nav: "videos",
      body:
        '<div class="container page-head"><span class="eyebrow">Vidéos</span><h1>Les vidéos ESMC</h1>' +
          "<p>Découvrez ESMC Business School en vidéo. Appuyez sur une vidéo pour la lancer.</p>" +
          '<p class="btn-row">' + channelButton() + "</p></div>" +
        '<section class="section" style="padding-top:8px"><div class="container">' +
          '<div class="grid video-grid">' + D.videos.map(videoCard).join("") + "</div>" +
        "</div></section>"
    };
  }

  function copyBlock(item) {
    return '<div class="copy-item"><div class="copy-head"><strong>' + esc(item.titre) + "</strong>" +
      '<button type="button" class="btn btn-sm" data-copy>' + ICONS.copy + "Copier</button></div>" +
      '<pre class="copy-body">' + esc(item.texte) + "</pre></div>";
  }

  function pageFiche(id) {
    var r = resById(id);
    var e = D.espaces[r.espace];
    var n = 0;
    function h(title) { n++; return '<h2><span class="num">' + n + "</span>" + esc(title) + "</h2>"; }

    var byFiliere = r.espace === "filieres" && r.filieres[0] !== "toutes";
    var backHref = byFiliere ? "filiere/" + r.filieres[0] + "/" : r.espace + "/";
    var backLabel = byFiliere ? filiereLabel(r.filieres[0]) : e.titre;

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
      main += '<div class="block" data-checklist="' + esc(r.id) + '">' + h("Checklist") +
        '<div class="progress-label"><span data-progress-text>0 / ' + r.checklist.length + ' terminé</span><button type="button" class="link-btn" data-check-reset>Tout décocher</button></div>' +
        '<div class="progress"><span data-progress-bar></span></div>' +
        '<ul class="checklist">' + r.checklist.map(function (c, i) {
          return '<li><label><input type="checkbox" data-check="' + i + '"><span>' + esc(c) + "</span></label></li>";
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
        related.map(function (x) { return '<li><a href="fiche/' + esc(x.id) + '/">' + esc(x.titre) + "</a></li>"; }).join("") + "</ul></div>" : "");

    return {
      title: r.titre + " — " + SITE,
      description: r.resume + " " + r.objectif,
      nav: r.espace,
      body:
        '<article class="container fiche">' +
          '<nav class="breadcrumb"><a href="' + backHref + '">← ' + esc(backLabel) + "</a></nav>" +
          '<header class="fiche-head"><div class="meta">' + badges(r, { duree: true }) + "</div>" +
            "<h1>" + esc(r.titre) + "</h1>" +
            '<p class="lead">' + esc(r.resume) + "</p></header>" +
          '<div class="draft-banner">' + ICONS.info + "<div><strong>Proposition de contenu à valider</strong> par l’équipe pédagogique ESMC. Adaptez toujours les conseils à votre entreprise et demandez l’avis de votre tuteur ou de vos formateurs.</div></div>" +
          '<div class="fiche-layout"><div>' + main + '</div><aside class="fiche-aside">' + aside + "</aside></div>" +
        "</article>"
    };
  }

  function pageNotFound() {
    return {
      title: "Page introuvable — " + SITE,
      description: "Cette page n’existe pas ou a été déplacée.",
      nav: "",
      body: '<div class="container page-head"><h1>Page introuvable</h1><p>Cette page n’existe pas ou a été déplacée.</p>' +
        '<a class="btn" href="./">Retour à l’accueil</a></div>'
    };
  }

  return {
    SITE: SITE, ICONS: ICONS, esc: esc, filterRes: filterRes, resultsHtml: resultsHtml, countLabel: countLabel,
    youtubeId: youtubeId,
    pageHome: pageHome, pageEspace: pageEspace, pageFiliere: pageFiliere, pageLibrary: pageLibrary,
    pageVideos: pageVideos, pageFiche: pageFiche, pageNotFound: pageNotFound
  };
});
