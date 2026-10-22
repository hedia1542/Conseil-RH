# ESMC — Conseils & outils carrière

Site web statique (HTML, CSS, JavaScript) pour les étudiant·e·s d’ESMC Business School :

- **Trouver mon alternance** : CV, candidatures, prospection d’entreprises, entretiens, relances (modèles à copier, checklists).
- **Les outils de ma filière** : BTS NDRC, Bachelor Marketing Digital, BTS MCO, Immobilier, Comptabilité, autres filières à compléter.
- **Créer du contenu avec l’IA** : tutoriels et prompts à copier (publications, scripts vidéo, publicités), avec des exemples NDRC et Marketing Digital.

Recherche par mot-clé et filtres par espace, filière, thème et type de ressource. Pas de compte utilisateur, pas de base de données, pas d’étape de compilation.

> Toutes les fiches fournies sont des **propositions de départ à valider** par l’équipe ESMC. Les exemples sont fictifs. Le site n’affiche aucun témoignage, partenariat ou résultat, et ne promet pas d’alternance.

## Structure

```
index.html               Page unique (en-tête, navigation, pied de page)
assets/css/style.css     Mise en forme (mobile d’abord, mode sombre automatique)
assets/js/data.js        CONTENUS : espaces, filières, vidéos, fiches
assets/js/app.js         Fonctionnement : navigation, recherche, filtres, copie
assets/img/logo-esmc.jpg Logo ESMC (en-tête et accueil)
assets/img/favicon.png    Icône d’onglet / écran d’accueil
assets/videos/           Dossier pour d’éventuelles vidéos MP4
```

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
python3 -m http.server 8000
```

Puis, sur le téléphone, ouvrez `http://ADRESSE-IP-DE-L-ORDINATEUR:8000`.

## Personnaliser

### Logo
Le logo officiel est dans `assets/img/logo-esmc.jpg`. Pour le changer, remplacez ce fichier en gardant le même nom (et `favicon.png` pour l’icône).

### Couleurs
Les couleurs reprennent le logo (bleu marine `#0a1944`, orange `#e77b3a`). Pour les ajuster, modifiez `--brand`, `--brand-2` et `--accent` en haut de `assets/css/style.css` selon la charte ESMC (et la ligne `theme-color` dans `index.html`).

### Vidéos
Dans `assets/js/data.js`, section `videos`, renseignez `url` avec :
- un lien YouTube (`https://www.youtube.com/watch?v=…` ou `https://youtu.be/…`),
- un lien Vimeo,
- ou un fichier placé dans `assets/videos/` (ex. `assets/videos/presentation.mp4`).

Tant que `url` est vide, un emplacement réservé s’affiche.

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

Pour une nouvelle filière, ajoutez une entrée dans `filieres` (en haut du fichier).

### Retirer la mention « Proposition à valider »
Une fois les contenus validés, la mention se trouve dans `assets/js/app.js` (fonctions `badges` et `viewFiche`) et dans `index.html` (pied de page).
