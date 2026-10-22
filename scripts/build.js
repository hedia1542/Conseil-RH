#!/usr/bin/env node
/*
 * Génère toutes les pages HTML du site à partir de assets/js/data.js.
 * Chaque fiche, espace et filière obtient sa propre page (lisible par Google),
 * ainsi que sitemap.xml et robots.txt.
 *
 * Utilisation : node scripts/build.js   (aucune dépendance à installer)
 */
"use strict";

var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");
var GENERATED_DIRS = ["alternance", "filieres", "ia", "fiches", "videos", "filiere", "fiche"];

// Charge data.js comme le ferait le navigateur
var sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "assets/js/data.js"), "utf8"), sandbox);
var D = sandbox.window.ESMC_DATA;
var R = require(path.join(ROOT, "assets/js/render.js"))(D);
var esc = R.esc;
var SITE_URL = D.siteUrl.replace(/\/?$/, "/");

var NAV_TOP = [
  ["alternance", "alternance/", "Trouver mon alternance"],
  ["filieres", "filieres/", "Ma filière"],
  ["ia", "ia/", "Contenu &amp; IA"],
  ["videos", "videos/", "Vidéos"]
];
var NAV_BOTTOM = [
  ["home", "./", "Accueil", '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>'],
  ["alternance", "alternance/", "Alternance", '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'],
  ["filieres", "filieres/", "Filières", '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>'],
  ["ia", "ia/", "IA", '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'],
  ["fiches", "fiches/", "Rechercher", '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>']
];

function navLink(key, active, href, inner, cls) {
  var on = key === active;
  return '<a href="' + href + '" data-nav="' + key + '"' + (cls || on ? ' class="' + [cls, on ? "active" : ""].filter(Boolean).join(" ") + '"' : "") + (on ? ' aria-current="page"' : "") + ">" + inner + "</a>";
}

function layout(page, urlPath, base) {
  var canonical = SITE_URL + urlPath;
  var description = page.description.length > 300 ? page.description.slice(0, 297) + "…" : page.description;
  var top = NAV_TOP.map(function (n) { return navLink(n[0], page.nav, n[1], n[2]); }).join("\n        ") +
    "\n        " + navLink("fiches", page.nav, "fiches/", '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>\n          Toutes les fiches', "top-nav-search");
  var bottom = NAV_BOTTOM.map(function (n) {
    return navLink(n[0], page.nav, n[1], '\n      <svg aria-hidden="true" viewBox="0 0 24 24">' + n[3] + "</svg>\n      <span>" + n[2] + "</span>\n    ");
  }).join("\n    ");

  return '<!doctype html>\n' +
'<html lang="fr">\n' +
'<head>\n' +
'  <meta charset="utf-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
'  <base href="' + base + '">\n' +
'  <title>' + esc(page.title) + '</title>\n' +
'  <meta name="description" content="' + esc(description) + '">\n' +
(page.noindex ? '  <meta name="robots" content="noindex">\n' : '  <link rel="canonical" href="' + esc(canonical) + '">\n') +
'  <meta property="og:type" content="website">\n' +
'  <meta property="og:locale" content="fr_FR">\n' +
'  <meta property="og:site_name" content="ESMC — Conseils &amp; outils carrière">\n' +
'  <meta property="og:title" content="' + esc(page.title) + '">\n' +
'  <meta property="og:description" content="' + esc(description) + '">\n' +
'  <meta property="og:url" content="' + esc(canonical) + '">\n' +
'  <meta property="og:image" content="' + esc(SITE_URL) + 'assets/img/logo-esmc.jpg">\n' +
'  <meta name="theme-color" content="#0a1944">\n' +
'  <link rel="icon" href="assets/img/favicon.png" type="image/png">\n' +
'  <link rel="apple-touch-icon" href="assets/img/favicon.png">\n' +
'  <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">\n' +
'  <link rel="stylesheet" href="assets/css/style.css">\n' +
'</head>\n' +
'<body>\n' +
'  <!-- Page générée par scripts/build.js — modifiez assets/js/data.js puis relancez « node scripts/build.js » -->\n' +
'  <a class="skip-link" href="#app">Aller au contenu</a>\n\n' +
'  <header class="site-header">\n' +
'    <div class="container header-inner">\n' +
'      <a class="brand" href="./" aria-label="Accueil — ESMC Conseils &amp; outils carrière">\n' +
'        <img class="brand-logo" src="assets/img/logo-esmc.jpg" alt="Logo ESMC Paris Business School" width="48" height="45">\n' +
'        <span class="brand-text">\n' +
'          <strong>ESMC</strong>\n' +
'          <span>Conseils &amp; outils carrière</span>\n' +
'        </span>\n' +
'      </a>\n' +
'      <nav class="top-nav" aria-label="Navigation principale">\n        ' + top + '\n      </nav>\n' +
'    </div>\n' +
'  </header>\n\n' +
'  <main id="app" tabindex="-1">\n' + page.body + '\n  </main>\n\n' +
'  <footer class="site-footer">\n' +
'    <div class="container">\n' +
'      <p><strong>ESMC — Conseils &amp; outils carrière</strong> · Version de démonstration</p>\n' +
'      <p>Les fiches présentées sont des <strong>propositions de contenus à valider</strong> par l’équipe ESMC. Les exemples sont fictifs. Ce site aide à préparer ses démarches : il ne garantit pas l’obtention d’une alternance.</p>\n' +
'    </div>\n' +
'  </footer>\n\n' +
'  <nav class="bottom-nav" aria-label="Navigation mobile">\n    ' + bottom + '\n  </nav>\n\n' +
'  <div class="toast" role="status" aria-live="polite" hidden></div>\n\n' +
'  <script src="assets/js/data.js"></script>\n' +
'  <script src="assets/js/render.js"></script>\n' +
'  <script src="assets/js/app.js"></script>\n' +
'</body>\n' +
'</html>\n';
}

// Nettoie les pages générées précédemment (une fiche supprimée ne doit pas rester en ligne)
GENERATED_DIRS.forEach(function (d) { fs.rmSync(path.join(ROOT, d), { recursive: true, force: true }); });

var urls = [];
function write(urlPath, page) {
  var depth = urlPath.split("/").filter(Boolean).length;
  var base = depth ? new Array(depth + 1).join("../") : "./";
  var file = path.join(ROOT, urlPath, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, layout(page, urlPath, base));
  urls.push(urlPath);
}

write("", R.pageHome());
["alternance", "filieres", "ia"].forEach(function (k) { write(k + "/", R.pageEspace(k)); });
write("fiches/", R.pageLibrary());
write("videos/", R.pageVideos());
D.filieres.forEach(function (f) { write("filiere/" + f.id + "/", R.pageFiliere(f.id)); });
D.ressources.forEach(function (r) { write("fiche/" + r.id + "/", R.pageFiche(r.id)); });

// Page 404 de GitHub Pages : servie à n'importe quelle profondeur, d'où une base absolue
var notFound = R.pageNotFound();
notFound.noindex = true;
fs.writeFileSync(path.join(ROOT, "404.html"), layout(notFound, "404.html", new URL(SITE_URL).pathname));

fs.writeFileSync(path.join(ROOT, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(function (u) { return "  <url><loc>" + esc(SITE_URL + u) + "</loc></url>"; }).join("\n") +
  "\n</urlset>\n");
fs.writeFileSync(path.join(ROOT, "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: " + SITE_URL + "sitemap.xml\n");

console.log(urls.length + " pages générées, plus 404.html, sitemap.xml et robots.txt.");
