# ESMC — Conseils & outils carrière

Site web statique (HTML, CSS, JavaScript) pour les étudiant·e·s d’ESMC Business School :

- **Trouver mon alternance** : CV, candidatures, prospection d’entreprises, entretiens, relances (modèles à copier, checklists).
- **Les outils de ma filière** : BTS NDRC, Bachelor Marketing Digital, BTS MCO, Immobilier, Comptabilité, autres filières à compléter.
- **Créer du contenu avec l’IA** : tutoriels et prompts à copier (publications, scripts vidéo, publicités), avec des exemples NDRC et Marketing Digital.

Recherche par mot-clé et filtres par espace, filière, thème et type de ressource. Pas de compte utilisateur, pas de base de données, pas d’étape de compilation.

> Toutes les fiches fournies sont des **propositions de départ à valider** par l’équipe ESMC. Les exemples sont fictifs. Le site n’affiche aucun témoignage, partenariat ou résultat, et ne promet pas d’alternance.

## Structure

```
assets/js/data.js        CONTENUS : espaces, filières, vidéos, fiches (le seul fichier à modifier)
assets/js/render.js      Mise en page des contenus (partagée par le générateur et le navigateur)
assets/js/app.js         Interactions : filtres, copie, checklists, lecture des vidéos
assets/css/style.css     Mise en forme (mobile d’abord, mode sombre automatique)
assets/img/              Logo ESMC et icône
scripts/build.js         Générateur des pages HTML
index.html, fiche/…, filiere/…, alternance/, filieres/, ia/, fiches/, videos/, 404.html
                         Pages GÉNÉRÉES (ne pas modifier à la main)
sitemap.xml, robots.txt  Plan du site pour Google (générés)
```

### Après chaque modification de `data.js`

```bash
node scripts/build.js
```

Le générateur (Node.js, sans dépendance) réécrit toutes les pages. Chaque fiche a sa propre adresse
(ex. `fiche/cv-alternance/`), avec un titre et une description lisibles par Google.

## Référencement (Google)

- Chaque page contient son texte complet dans le HTML, un titre, une description et une adresse canonique.
- `sitemap.xml` liste toutes les pages. Déclarez-le dans [Google Search Console](https://search.google.com/search-console)
  (ajouter la propriété avec l’adresse du site, puis « Sitemaps » → `sitemap.xml`).
- `robots.txt` n’est pris en compte par Google qu’à la racine d’un domaine : il deviendra utile avec un domaine personnalisé.
- En cas de domaine personnalisé, changez `siteUrl` en haut de `data.js` puis relancez le générateur.

## Voir le site depuis votre téléphone

### Option 1 — GitHub Pages (recommandée, gratuite)

1. Sur github.com, ouvrez le dépôt **Conseil-RH** → **Settings** → **Pages**.
2. Dans **Build and deployment**, choisissez **Source : Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**. Cliquez sur **Save**.
3. Patientez 1 à 2 minutes : l’adresse du site s’affiche en haut de la page (du type `https://hedia1542.github.io/Conseil-RH/`).
4. Ouvrez cette adresse sur votre téléphone. Astuce : menu du navigateur → « Ajouter à l’écran d’accueil » pour l’ouvrir comme une application.

Remarque : avec un compte GitHub gratuit, GitHub Pages n’est disponible que pour un dépôt **public**. Si le dépôt est privé, il faut le rendre public ou utiliser l’option 2.

### Option 2 — Netlify Drop (sans réglage GitHub)

Téléchargez le dépôt (bouton **Code → Download ZIP**), décompressez-le, puis glissez le dossier sur <https://app.netlify.com/drop>. Une adresse publique est créée immédiatement.

### Option 3 — Sur votre ordinateur (même Wi-Fi que le téléphone)

```bash
node scripts/build.js
python3 -m http.server 8000
```

Puis, sur le téléphone, ouvrez `http://ADRESSE-IP-DE-L-ORDINATEUR:8000`.

## Personnaliser

### Logo
Le logo officiel est dans `assets/img/logo-esmc.jpg`. Pour le changer, remplacez ce fichier en gardant le même nom (et `favicon.png` pour l’icône).

### Couleurs
Les couleurs reprennent le logo (bleu marine `#0a1944`, orange `#e77b3a`). Pour les ajuster, modifiez `--brand`, `--brand-2` et `--accent` en haut de `assets/css/style.css` selon la charte ESMC (et la ligne `theme-color` dans `scripts/build.js`).

### Vidéos
Dans `assets/js/data.js`, section `videos`, renseignez `url` avec :
- un lien YouTube (`https://www.youtube.com/watch?v=…` ou `https://youtu.be/…`),
- un lien Vimeo,
- ou un fichier placé dans `assets/videos/` (ex. `assets/videos/presentation.mp4`).

Tant que `url` est vide, un emplacement réservé s’affiche. Les 4 premières vidéos apparaissent sur l’accueil, toutes sur la page `videos/`.
Les vidéos YouTube ne se chargent qu’au clic (page plus rapide). Pour le référencement, donnez à chaque vidéo un vrai titre et une description.

### Ajouter une fiche
Dans `assets/js/data.js`, copiez un bloc `{ … }` du tableau `ressources` et adaptez-le :

| Champ | Rôle |
|---|---|
| `id` | identifiant unique, sans espace ni accent (sert dans l’adresse de la fiche) |
| `titre`, `resume` | titre et phrase de présentation |
| `espace` | `alternance`, `filieres` ou `ia` |
| `filieres` | liste parmi `ndrc`, `marketing-digital`, `mco`, `immobilier`, `comptabilite`, `autres`, ou `toutes` |
| `theme` | texte libre (les filtres se construisent automatiquement) |
| `type` | `fiche`, `checklist`, `modele`, `prompt` ou `tutoriel` |
| `objectif`, `etapes`, `exemple` | **obligatoires** : objectif, étapes simples, exemple concret |
| `checklist`, `modeles`, `prompts`, `vigilance` | facultatifs |

Pour une nouvelle filière, ajoutez une entrée dans `filieres` (en haut du fichier). Relancez ensuite `node scripts/build.js`.

### Retirer la mention « Proposition à valider »
Une fois les contenus validés, la mention se trouve dans `assets/js/render.js` (fonctions `badges` et `pageFiche`) et dans `scripts/build.js` (pied de page).
