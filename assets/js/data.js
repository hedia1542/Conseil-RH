/*
 * ESMC — Conseils & outils carrière
 * Contenus du site. Pour ajouter une fiche, copiez un objet du tableau
 * `ressources` et adaptez-le (voir README.md, section « Ajouter une fiche »).
 *
 * Toutes les fiches ci-dessous sont des PROPOSITIONS DE DÉPART à valider
 * par l'équipe ESMC. Les exemples sont fictifs.
 */
window.ESMC_DATA = {
  // Adresse publique du site (sert au plan du site pour Google). À changer en cas de domaine personnalisé.
  siteUrl: "https://hedia1542.github.io/Conseil-RH/",

  espaces: {
    alternance: {
      titre: "Trouver mon alternance",
      court: "Alternance",
      intro: "CV, candidatures, prospection d’entreprises, entretiens et relances : des méthodes pas à pas, des modèles de messages à copier et des checklists.",
      icone: "briefcase"
    },
    filieres: {
      titre: "Les outils de ma filière",
      court: "Filières",
      intro: "Des fiches pratiques adaptées à votre formation, pour être opérationnel·le plus vite en entreprise.",
      icone: "layers"
    },
    ia: {
      titre: "Créer du contenu avec l’IA",
      court: "IA",
      intro: "Tutoriels et prompts à copier pour préparer des publications, des scripts vidéo et des publicités — avec des exemples pour le BTS NDRC et le Bachelor Marketing Digital.",
      icone: "sparkles"
    }
  },

  filieres: [
    { id: "ndrc", label: "BTS NDRC", nom: "Négociation et Digitalisation de la Relation Client", desc: "Prospection, négociation, relation client et animation de réseaux." },
    { id: "marketing-digital", label: "Bachelor Marketing Digital", nom: "Marketing digital", desc: "Contenus, réseaux sociaux, campagnes publicitaires et analyse de performance." },
    { id: "mco", label: "BTS MCO", nom: "Management Commercial Opérationnel", desc: "Gestion d’un point de vente, animation commerciale et management d’équipe." },
    { id: "immobilier", label: "Immobilier", nom: "Formations immobilier", desc: "Transaction, visites, annonces et relation avec les propriétaires." },
    { id: "comptabilite", label: "Comptabilité", nom: "Formations comptabilité", desc: "Pièces comptables, rapprochement bancaire et suivi des règlements clients." },
    { id: "autres", label: "Autres filières", nom: "À compléter", desc: "Espace réservé aux autres formations ESMC, à compléter par l’équipe.", aCompleter: true }
  ],

  types: {
    fiche: "Fiche pratique",
    checklist: "Checklist",
    modele: "Modèles de messages",
    prompt: "Prompts IA",
    tutoriel: "Tutoriel"
  },

  // Lien vers la chaîne YouTube ESMC
  chaineYoutube: "https://www.youtube.com/@ESMCBUSINESSSHOOLOSNY",

  /*
   * Vidéos : collez une URL YouTube (https://www.youtube.com/watch?v=… ou /shorts/…),
   * Vimeo, ou le chemin d'un fichier MP4 placé dans assets/videos/.
   * Les YouTube Shorts s'affichent automatiquement au format vertical.
   * Les 4 premières vidéos apparaissent sur la page d'accueil ; toutes sont sur la page « Vidéos ».
   * Pour le référencement, donnez à chaque vidéo un titre et une courte description.
   */
  videos: [
    { titre: "Présentation d’ESMC Business School", description: "Découvrez ESMC Business School en vidéo.", url: "https://www.youtube.com/shorts/TJijhUEomRg" },
    { titre: "ESMC en vidéo — n°2", description: "", url: "https://www.youtube.com/shorts/IHSstxmg6_4" }, // titre à compléter
    { titre: "ESMC en vidéo — n°3", description: "", url: "https://www.youtube.com/shorts/hoZ5psemwd8" }, // titre à compléter
    { titre: "ESMC en vidéo — n°4", description: "", url: "https://www.youtube.com/shorts/-QEkxzYBZ1A" }, // titre à compléter
    { titre: "ESMC en vidéo — n°5", description: "", url: "https://www.youtube.com/shorts/dVPu_5R7twE" }, // titre à compléter
    { titre: "ESMC en vidéo — n°6", description: "", url: "https://www.youtube.com/shorts/dfeGI3EOByY" }, // titre à compléter
    { titre: "ESMC en vidéo — n°7", description: "", url: "https://www.youtube.com/shorts/p_lgPjUELBM" }, // titre à compléter
    { titre: "ESMC en vidéo — n°8", description: "", url: "https://www.youtube.com/shorts/zfCNMKlWIqw" }, // titre à compléter
    { titre: "ESMC en vidéo — n°9", description: "", url: "https://www.youtube.com/shorts/d9QOKSFeGyA" }, // titre à compléter
    { titre: "ESMC en vidéo — n°10", description: "", url: "https://www.youtube.com/shorts/1tbyYZbcnew" }, // titre à compléter
    { titre: "ESMC en vidéo — n°11", description: "", url: "https://www.youtube.com/shorts/yZlNUKke6LE" }, // titre à compléter
    { titre: "ESMC en vidéo — n°12", description: "", url: "https://www.youtube.com/shorts/DHEb0bQJECA" }, // titre à compléter
  ],

  ressources: [
    /* =====================================================
     * ESPACE 1 — TROUVER MON ALTERNANCE
     * ===================================================== */
    {
      id: "cv-alternance",
      titre: "Construire un CV d’alternance clair et ciblé",
      espace: "alternance", filieres: ["toutes"], theme: "CV", type: "fiche", duree: "45 min",
      resume: "Un CV d’une page, lisible en quelques secondes et adapté à chaque offre.",
      objectif: "Produire un CV d’une page qui montre rapidement au recruteur la formation visée, vos disponibilités et ce que vous pouvez apporter pendant l’alternance.",
      etapes: [
        "Écrivez un titre précis en haut du CV : la formation, le rythme et la date de début (ex. « Alternance BTS NDRC — [rythme] — à partir de [mois] »).",
        "Ajoutez des coordonnées utiles : téléphone, e-mail au format prenom.nom, ville, et lien LinkedIn s’il est à jour.",
        "Rédigez une accroche de 2 à 3 lignes : qui vous êtes, ce que vous cherchez, ce que vous pouvez apporter.",
        "Présentez vos expériences (stages, jobs, bénévolat, projets) avec des verbes d’action : accueillir, conseiller, vendre, organiser…",
        "Regroupez vos compétences : outils maîtrisés, langues, qualités illustrées par un fait concret.",
        "Adaptez le CV à chaque offre : reprenez les mots-clés de l’annonce que vous maîtrisez réellement.",
        "Exportez en PDF nommé « CV_Prenom_Nom_Alternance.pdf » et faites relire le document."
      ],
      exemple: {
        titre: "Reformuler une expérience (exemple fictif)",
        texte: "Avant : « Vendeuse dans un magasin de vêtements. »\n\nAprès : « Vendeuse — job d’été, 2 mois. Accueil et conseil client, encaissement, mise en rayon, participation à l’inventaire de fin de saison. »\n\nPourquoi c’est mieux : on comprend la durée, les missions réelles et les compétences transférables vers une formation commerciale."
      },
      checklist: [
        "Le CV tient sur une page.",
        "Le titre indique la formation, le rythme et la date de début.",
        "L’adresse e-mail est professionnelle.",
        "Chaque expérience commence par un verbe d’action.",
        "Le CV est adapté à l’offre visée.",
        "Toutes les informations sont exactes et vérifiables.",
        "Aucune faute d’orthographe (relecture par une autre personne).",
        "Le fichier est un PDF au nom clair."
      ],
      vigilance: ["N’indiquez que des informations exactes : un recruteur peut les vérifier en entretien."]
    },
    {
      id: "emails-candidature",
      titre: "E-mails de candidature : offre et candidature spontanée",
      espace: "alternance", filieres: ["toutes"], theme: "Candidature", type: "modele", duree: "20 min",
      resume: "Deux modèles d’e-mails courts et personnalisables, prêts à copier.",
      objectif: "Envoyer une candidature courte et personnalisée qui donne envie d’ouvrir votre CV.",
      etapes: [
        "Écrivez un objet clair : type de contrat, formation, votre nom (et la référence de l’offre si elle existe).",
        "Adressez-vous à une personne nommée quand c’est possible (cherchez le nom sur l’annonce ou LinkedIn).",
        "Suivez la structure en 3 temps : vous (qui vous êtes), eux (pourquoi cette entreprise), nous (ce que vous proposez).",
        "Joignez votre CV en PDF et vérifiez que la pièce jointe est bien présente.",
        "Relisez à voix haute, puis notez l’envoi dans votre tableau de suivi avec une date de relance."
      ],
      exemple: {
        titre: "Objet d’e-mail (exemple)",
        texte: "Candidature alternance BTS MCO — Prénom Nom — réf. [référence de l’offre]"
      },
      modeles: [
        {
          titre: "Réponse à une offre",
          texte: "Objet : Candidature alternance [formation] — [Prénom Nom] — réf. [référence]\n\nBonjour [Madame / Monsieur Nom],\n\nÉtudiant·e en [formation] à ESMC Business School, je recherche une alternance à partir de [date], au rythme de [rythme]. Votre offre de [intitulé du poste] a retenu toute mon attention.\n\n[Nom de l’entreprise] m’intéresse particulièrement pour [raison précise : un produit, une valeur, une actualité, un service]. Mes expériences en [expérience 1] et [expérience 2] m’ont permis de développer [compétence utile pour le poste].\n\nJe serais ravi·e d’échanger avec vous sur la manière dont je pourrais contribuer à [mission principale de l’offre]. Vous trouverez mon CV en pièce jointe.\n\nBien cordialement,\n[Prénom Nom]\n[Téléphone] — [lien LinkedIn]"
        },
        {
          titre: "Candidature spontanée",
          texte: "Objet : Candidature spontanée — alternance [formation] — [Prénom Nom]\n\nBonjour [Madame / Monsieur Nom],\n\nJe prépare un(e) [formation] à ESMC Business School et je recherche une entreprise d’accueil en alternance à partir de [date].\n\nJe m’adresse à [Nom de l’entreprise] car [raison précise]. Je souhaiterais contribuer à vos activités de [domaine : prospection, accueil client, communication digitale…], en m’appuyant sur [compétence ou expérience concrète].\n\nAuriez-vous 10 minutes dans les prochains jours pour en parler par téléphone ? Mon CV est joint à ce message.\n\nBien cordialement,\n[Prénom Nom]\n[Téléphone]"
        }
      ],
      vigilance: ["Remplacez toutes les parties entre crochets : un message générique se repère immédiatement."]
    },
    {
      id: "messages-linkedin",
      titre: "Contacter un recruteur ou un manager sur LinkedIn",
      espace: "alternance", filieres: ["toutes"], theme: "Prospection d’entreprises", type: "modele", duree: "15 min",
      resume: "Des messages de connexion et de suivi courts, polis et personnalisés.",
      objectif: "Entrer en contact avec la bonne personne dans une entreprise ciblée, sans message envahissant.",
      etapes: [
        "Vérifiez que votre profil est prêt : photo professionnelle, titre « Étudiant·e [formation] — recherche alternance [date] ».",
        "Identifiez la bonne personne : responsable du service visé, manager d’agence ou chargé·e de recrutement.",
        "Envoyez une demande de connexion avec une note courte et personnalisée.",
        "Une fois la connexion acceptée, envoyez un message plus complet avec une demande simple (un échange de 10 minutes).",
        "Sans réponse après une semaine, une seule relance polie suffit."
      ],
      exemple: {
        titre: "Titre de profil (exemple)",
        texte: "Étudiante en Bachelor Marketing Digital chez ESMC — Recherche alternance à partir de [mois] — Réseaux sociaux & création de contenu"
      },
      modeles: [
        {
          titre: "Note de demande de connexion",
          texte: "Bonjour [Prénom], étudiant·e en [formation] chez ESMC, je m’intéresse aux activités de [Entreprise] en [domaine]. Je serais heureux·se de rejoindre votre réseau. Belle journée !"
        },
        {
          titre: "Message après acceptation",
          texte: "Bonjour [Prénom],\n\nMerci d’avoir accepté ma demande. Je recherche une alternance en [formation] à partir de [date] et [Entreprise] fait partie des entreprises qui m’intéressent, notamment pour [raison précise].\n\nAuriez-vous 10 minutes pour m’indiquer si votre équipe accueille des alternant·e·s, ou vers qui je pourrais me tourner ?\n\nMerci d’avance,\n[Prénom Nom]"
        },
        {
          titre: "Relance unique (après 7 jours)",
          texte: "Bonjour [Prénom], je me permets de revenir vers vous au sujet de mon message de la semaine dernière. Je reste disponible pour un échange rapide si cela vous convient. Bonne journée !"
        }
      ]
    },
    {
      id: "liste-entreprises-cibles",
      titre: "Construire sa liste d’entreprises à prospecter",
      espace: "alternance", filieres: ["toutes"], theme: "Prospection d’entreprises", type: "fiche", duree: "1 h",
      resume: "Repérer les entreprises pertinentes et organiser vos prises de contact.",
      objectif: "Constituer une liste d’entreprises ciblées et suivre chaque prise de contact pour ne rien oublier.",
      etapes: [
        "Définissez vos critères : secteur, type de poste, zone géographique accessible depuis l’école et votre domicile.",
        "Cherchez des entreprises par plusieurs canaux : sites d’offres d’alternance, 1jeune1solution, LinkedIn, Google Maps, annuaires professionnels, votre entourage, les forums et événements de l’école.",
        "Pour chaque entreprise, notez un contact (nom, fonction) et le meilleur canal : e-mail, téléphone, LinkedIn ou visite sur place.",
        "Créez un tableau de suivi : entreprise, contact, canal, date du contact, statut, prochaine action.",
        "Fixez-vous un rythme réaliste de prises de contact par semaine et tenez le tableau à jour.",
        "Montrez votre liste au service relations entreprises de l’école pour avoir un avis."
      ],
      exemple: {
        titre: "Extrait de tableau de suivi (exemple fictif)",
        texte: "Entreprise : Agence fictive « Horizon Immo »\nContact : responsable d’agence (nom à trouver)\nCanal : visite en agence + CV papier\nDate : 14/03\nStatut : CV déposé\nProchaine action : appeler le 21/03"
      },
      checklist: [
        "Mes critères de recherche sont écrits.",
        "J’utilise au moins trois canaux de recherche différents.",
        "Chaque entreprise a un contact identifié ou un canal de contact.",
        "Mon tableau de suivi est créé.",
        "Une date de relance est prévue pour chaque candidature."
      ]
    },
    {
      id: "appel-candidature",
      titre: "Script d’appel pour proposer sa candidature",
      espace: "alternance", filieres: ["toutes"], theme: "Prospection d’entreprises", type: "modele", duree: "30 min",
      resume: "Un fil conducteur pour téléphoner à une entreprise avec assurance.",
      objectif: "Savoir se présenter au téléphone en moins de 30 secondes et obtenir une suite concrète : un nom, une adresse e-mail ou un rendez-vous.",
      etapes: [
        "Préparez-vous : le nom de l’entreprise, ce qu’elle fait, votre CV sous les yeux, de quoi noter.",
        "Appelez au calme, dans un créneau adapté (évitez par exemple l’ouverture d’un commerce).",
        "Présentez-vous brièvement et demandez la bonne personne.",
        "Posez une question simple : « Accueillez-vous des alternant·e·s ? » plutôt qu’un long discours.",
        "Terminez toujours par une suite : envoyer un CV à une adresse précise, rappeler à une date fixée, passer déposer un CV.",
        "Notez immédiatement le résultat dans votre tableau de suivi."
      ],
      exemple: {
        titre: "Réponse à une objection fréquente (exemple)",
        texte: "« Nous n’avons pas d’offre en ce moment. »\n→ « Je comprends. Est-ce que je peux tout de même vous transmettre mon CV pour une prochaine opportunité ? À quelle adresse puis-je l’envoyer ? »"
      },
      modeles: [
        {
          titre: "Script d’appel",
          texte: "Bonjour, [Prénom Nom], étudiant·e en [formation] à ESMC Business School.\n\nJe recherche une alternance à partir de [date] et je souhaiterais parler à la personne en charge du recrutement ou du service [service]. Pouvez-vous me dire qui je dois contacter ?\n\n[Si vous avez la bonne personne :]\nJe vous appelle car [Entreprise] m’intéresse pour [raison précise]. Accueillez-vous des alternant·e·s en [formation] ?\n\n[Pour conclure :]\nTrès bien, je vous envoie mon CV aujourd’hui. À quelle adresse dois-je l’adresser ? Puis-je vous rappeler [jour] si besoin ?\n\nMerci beaucoup pour votre temps, bonne journée."
        }
      ]
    },
    {
      id: "preparer-entretien",
      titre: "Préparer son entretien d’alternance",
      espace: "alternance", filieres: ["toutes"], theme: "Entretien", type: "fiche", duree: "1 h 30",
      resume: "Se renseigner, préparer ses réponses et ses questions, et soigner la logistique.",
      objectif: "Arriver à l’entretien en connaissant l’entreprise, avec des réponses préparées et des questions pertinentes.",
      etapes: [
        "Renseignez-vous sur l’entreprise : activité, clients, produits ou services, actualité récente, présence sur les réseaux.",
        "Relisez l’offre et listez les 3 compétences les plus demandées ; trouvez pour chacune un exemple tiré de votre parcours.",
        "Préparez votre présentation en 1 à 2 minutes : parcours, formation à ESMC, projet, motivation pour ce poste.",
        "Préparez vos réponses aux questions fréquentes (voir la fiche sur la méthode STAR).",
        "Préparez 2 ou 3 questions à poser : missions, organisation de l’équipe, accompagnement du tuteur.",
        "Vérifiez la logistique : adresse ou lien visio, trajet, tenue adaptée, CV imprimé, téléphone chargé.",
        "Entraînez-vous à voix haute, avec une personne de votre entourage ou en simulation."
      ],
      exemple: {
        titre: "Présentation en 1 minute (exemple fictif)",
        texte: "« Je m’appelle Sami, j’ai 19 ans et je prépare un BTS NDRC à ESMC Business School. J’ai travaillé deux étés comme équipier dans la restauration rapide, où j’ai appris à garder le sourire dans les moments de forte affluence. Ce qui me plaît dans le commerce, c’est le contact et le fait d’avoir des objectifs. Votre entreprise m’intéresse parce que vous travaillez avec des professionnels et que je souhaite apprendre la prospection B2B. »"
      },
      checklist: [
        "Je connais l’activité et les clients de l’entreprise.",
        "J’ai préparé ma présentation de 1 à 2 minutes.",
        "J’ai un exemple concret pour chaque compétence clé de l’offre.",
        "J’ai préparé 2 ou 3 questions à poser.",
        "Je connais le nom de mon interlocuteur.",
        "J’ai vérifié l’adresse, le trajet ou le lien de visio.",
        "Mon CV est imprimé (ou ouvert à l’écran en visio).",
        "Je connais le calendrier de ma formation (rythme, dates)."
      ]
    },
    {
      id: "methode-star",
      titre: "Répondre aux questions d’entretien avec la méthode STAR",
      espace: "alternance", filieres: ["toutes"], theme: "Entretien", type: "fiche", duree: "40 min",
      resume: "Une structure simple pour des réponses concrètes : Situation, Tâche, Action, Résultat.",
      objectif: "Répondre aux questions sur vos qualités et expériences avec des exemples concrets plutôt que des affirmations générales.",
      etapes: [
        "Situation : décrivez le contexte en une phrase (où, quand).",
        "Tâche : expliquez ce que vous deviez faire ou le problème à résoudre.",
        "Action : détaillez ce que VOUS avez fait (utilisez « je », pas « on »).",
        "Résultat : dites ce qui s’est passé ensuite et ce que vous en avez retenu.",
        "Préparez 4 ou 5 histoires de ce type : elles serviront pour plusieurs questions.",
        "Entraînez-vous à les raconter en moins de 2 minutes chacune."
      ],
      exemple: {
        titre: "« Parlez-moi d’une situation difficile » (exemple fictif)",
        texte: "S — Pendant mon job d’été en boutique, un client est revenu mécontent : son article était défectueux.\nT — Je devais trouver une solution alors que la responsable était absente.\nA — Je l’ai écouté sans l’interrompre, j’ai vérifié la procédure d’échange affichée en réserve et je lui ai proposé un échange immédiat.\nR — Le client est reparti avec un nouvel article. J’ai appris à garder mon calme et à m’appuyer sur les procédures."
      },
      checklist: [
        "J’ai une histoire sur une réussite.",
        "J’ai une histoire sur une difficulté surmontée.",
        "J’ai une histoire sur un travail en équipe.",
        "J’ai une histoire montrant mon sens du contact client.",
        "J’ai une réponse honnête à « Quel est votre point d’amélioration ? »."
      ]
    },
    {
      id: "relances",
      titre: "Relancer après une candidature ou un entretien",
      espace: "alternance", filieres: ["toutes"], theme: "Relance", type: "modele", duree: "15 min",
      resume: "Quand et comment relancer, avec trois modèles prêts à adapter.",
      objectif: "Relancer au bon moment et avec le bon ton pour montrer votre motivation sans insister.",
      etapes: [
        "Notez la date de chaque envoi dans votre tableau de suivi.",
        "Sans réponse à une candidature après environ une semaine, envoyez une relance courte (ou appelez).",
        "Après un entretien, envoyez un message de remerciement dans les 24 heures.",
        "Si l’entreprise vous a donné une date de réponse, attendez qu’elle soit passée avant de relancer.",
        "Après deux relances sans réponse, concentrez votre énergie sur d’autres entreprises."
      ],
      exemple: {
        titre: "Calendrier de relance (exemple)",
        texte: "Lundi 3 : envoi de la candidature\nLundi 10 : relance par e-mail\nJeudi 13 : appel téléphonique si toujours sans réponse\nEnsuite : passer à d’autres pistes, en gardant le contact positif"
      },
      modeles: [
        {
          titre: "Relance d’une candidature",
          texte: "Objet : Relance — candidature alternance [formation] — [Prénom Nom]\n\nBonjour [Madame / Monsieur Nom],\n\nLe [date], je vous ai adressé ma candidature pour une alternance en [formation] à partir de [date de début]. Je me permets de revenir vers vous car votre entreprise m’intéresse toujours vivement.\n\nJe reste disponible pour un échange, à votre convenance. Je joins à nouveau mon CV pour plus de facilité.\n\nBien cordialement,\n[Prénom Nom]\n[Téléphone]"
        },
        {
          titre: "Remerciement après entretien (sous 24 h)",
          texte: "Objet : Merci pour notre échange — [Prénom Nom]\n\nBonjour [Madame / Monsieur Nom],\n\nMerci pour le temps que vous m’avez accordé [hier / aujourd’hui]. Notre échange sur [sujet abordé pendant l’entretien] a renforcé mon envie de rejoindre votre équipe.\n\nJe reste à votre disposition pour tout complément d’information.\n\nBien cordialement,\n[Prénom Nom]"
        },
        {
          titre: "Relance après entretien sans réponse",
          texte: "Objet : Suite à notre entretien du [date]\n\nBonjour [Madame / Monsieur Nom],\n\nJe me permets de revenir vers vous suite à notre entretien du [date] pour le poste en alternance de [intitulé]. Ce poste m’intéresse toujours beaucoup. Avez-vous pu avancer dans votre décision ?\n\nBien cordialement,\n[Prénom Nom]"
        }
      ]
    },
    {
      id: "organisation-semaine",
      titre: "Organiser sa recherche d’alternance semaine après semaine",
      espace: "alternance", filieres: ["toutes"], theme: "Organisation", type: "checklist", duree: "10 min / semaine",
      resume: "Une routine hebdomadaire pour rester régulier·e et ne laisser passer aucune relance.",
      objectif: "Avancer chaque semaine avec une routine simple plutôt que par à-coups.",
      etapes: [
        "Bloquez des créneaux fixes dans votre agenda pour la recherche.",
        "Commencez chaque semaine par les relances prévues dans votre tableau de suivi.",
        "Ajoutez de nouvelles entreprises à votre liste.",
        "Envoyez vos candidatures personnalisées.",
        "En fin de semaine, faites le point : ce qui a fonctionné, ce qu’il faut ajuster (CV, message, ciblage).",
        "Partagez vos avancées avec le service relations entreprises de l’école."
      ],
      exemple: {
        titre: "Routine type (exemple)",
        texte: "Lundi : relances + mise à jour du tableau\nMercredi : recherche de nouvelles entreprises\nJeudi : candidatures et appels\nVendredi : bilan de la semaine (15 min)"
      },
      checklist: [
        "J’ai fait toutes les relances prévues cette semaine.",
        "J’ai ajouté de nouvelles entreprises à ma liste.",
        "J’ai envoyé mes candidatures personnalisées.",
        "Mon tableau de suivi est à jour.",
        "J’ai noté ce que je veux améliorer la semaine prochaine.",
        "J’ai consulté les offres partagées par l’école."
      ]
    },
    {
      id: "ia-simulation-entretien",
      titre: "S’entraîner à l’entretien avec l’IA",
      espace: "alternance", filieres: ["toutes"], theme: "Entretien", type: "prompt", duree: "30 min",
      resume: "Utiliser un assistant IA comme partenaire d’entraînement, avec un retour sur vos réponses.",
      objectif: "Vous entraîner à répondre aux questions d’un recruteur et recevoir des pistes d’amélioration, avant de vous exercer avec une vraie personne.",
      etapes: [
        "Copiez le prompt ci-dessous dans l’assistant IA autorisé par l’école ou de votre choix.",
        "Remplacez les éléments entre crochets (formation, poste, entreprise).",
        "Répondez aux questions une par une, comme en vrai entretien.",
        "Lisez les retours avec un esprit critique : gardez ce qui vous semble juste.",
        "Retravaillez vos réponses, puis entraînez-vous à voix haute."
      ],
      exemple: {
        titre: "Exemple de retour attendu",
        texte: "« Votre réponse est sincère mais reste générale. Ajoutez un exemple concret : où, quand, ce que vous avez fait et le résultat. »"
      },
      prompts: [
        {
          titre: "Simulation d’entretien",
          texte: "Tu es recruteur·se dans [type d’entreprise] et tu fais passer un entretien pour une alternance en [formation] sur un poste de [intitulé du poste].\n\nPose-moi une seule question à la fois, comme dans un vrai entretien (6 questions au total, dont une sur ma motivation et une mise en situation).\n\nAprès chacune de mes réponses, donne-moi :\n1) un point fort de ma réponse,\n2) un point à améliorer,\n3) une suggestion de reformulation plus concrète.\n\nN’invente rien sur mon parcours : si une information manque, demande-la-moi."
        }
      ],
      vigilance: [
        "Ne partagez pas de données personnelles sensibles (adresse, numéro de sécurité sociale…).",
        "L’IA peut se tromper : ses conseils ne remplacent pas ceux de vos formateurs."
      ]
    },

    /* =====================================================
     * ESPACE 2 — LES OUTILS DE MA FILIÈRE
     * ===================================================== */
    // ---------- BTS NDRC ----------
    {
      id: "ndrc-prospection-telephonique",
      titre: "Préparer une session de prospection téléphonique",
      espace: "filieres", filieres: ["ndrc"], theme: "Prospection commerciale", type: "fiche", duree: "1 h",
      resume: "Fichier, objectif d’appel, script et suivi : tout préparer avant de décrocher.",
      objectif: "Mener une session d’appels structurée pour obtenir des rendez-vous qualifiés avec des prospects.",
      etapes: [
        "Fixez l’objectif de chaque appel : obtenir un rendez-vous, qualifier un besoin ou mettre à jour une fiche.",
        "Préparez votre fichier : nom de l’entreprise, interlocuteur, fonction, téléphone, informations déjà connues.",
        "Rédigez votre accroche : qui vous êtes, pourquoi vous appelez, l’intérêt pour le prospect.",
        "Préparez 3 ou 4 questions de découverte et les réponses aux objections fréquentes.",
        "Appelez par séries, sur un créneau défini, dans un endroit calme.",
        "Notez le résultat de chaque appel dans le CRM ou le fichier, avec la prochaine action datée.",
        "Faites le bilan : nombre d’appels, d’interlocuteurs joints, de rendez-vous obtenus, et ce qu’il faut ajuster."
      ],
      exemple: {
        titre: "Accroche (exemple fictif — entreprise de fournitures de bureau)",
        texte: "« Bonjour Madame Martin, Lucas Bernard, de la société [Entreprise]. Nous accompagnons des cabinets comme le vôtre dans la gestion de leurs fournitures. Je vous appelle pour savoir comment vous organisez vos commandes aujourd’hui : auriez-vous deux minutes ? »"
      },
      modeles: [
        {
          titre: "Trame d’appel de prospection",
          texte: "1. Prise de contact\nBonjour [Madame / Monsieur Nom], [Prénom Nom], de [Entreprise]. Je vous appelle au sujet de [thème]. Avez-vous deux minutes ?\n\n2. Découverte\n- Comment gérez-vous aujourd’hui [besoin] ?\n- Qu’est-ce qui fonctionne bien ? Qu’aimeriez-vous améliorer ?\n- Qui intervient dans la décision ?\n\n3. Proposition de rendez-vous\nPour vous présenter concrètement [solution], je vous propose un rendez-vous de 20 minutes. Préférez-vous [jour 1] à [heure] ou [jour 2] à [heure] ?\n\n4. Conclusion\nJe vous confirme notre rendez-vous par e-mail. Merci et bonne journée."
        }
      ],
      checklist: [
        "Mon objectif d’appel est défini.",
        "Mon fichier de prospects est à jour.",
        "Mon accroche est écrite et testée à voix haute.",
        "Mes réponses aux objections sont prêtes.",
        "Je note chaque résultat avec une prochaine action datée."
      ]
    },
    {
      id: "ndrc-objections",
      titre: "Traiter une objection client",
      espace: "filieres", filieres: ["ndrc"], theme: "Négociation", type: "fiche", duree: "40 min",
      resume: "Écouter, reformuler, questionner, répondre, vérifier : une méthode en 5 temps.",
      objectif: "Répondre calmement à une objection et la transformer en occasion de mieux comprendre le besoin du client.",
      etapes: [
        "Écoutez l’objection jusqu’au bout, sans interrompre.",
        "Reformulez-la pour montrer que vous avez compris.",
        "Posez une question pour identifier la vraie raison (budget, timing, confiance, besoin mal compris).",
        "Répondez avec un argument adapté au besoin du client, ou une preuve vérifiable.",
        "Vérifiez que la réponse convient avant de poursuivre.",
        "Après l’entretien, notez les objections rencontrées pour enrichir votre argumentaire."
      ],
      exemple: {
        titre: "Objection « C’est trop cher » (exemple fictif)",
        texte: "Client : « C’est trop cher pour nous. »\nReformulation : « Si je comprends bien, le prix vous semble élevé par rapport à votre budget actuel ? »\nQuestion : « Par rapport à quoi le comparez-vous ? »\nRéponse : « Cette formule inclut l’installation et le support, que vous payez séparément aujourd’hui. Voulez-vous que nous comparions le coût total sur l’année ? »\nVérification : « Est-ce que cette comparaison vous aiderait à décider ? »"
      },
      checklist: [
        "J’ai listé les 5 objections les plus fréquentes de mon entreprise.",
        "J’ai une reformulation et une question pour chacune.",
        "Mes arguments s’appuient sur des éléments vérifiables.",
        "Je me suis entraîné·e à voix haute."
      ]
    },
    {
      id: "ndrc-compte-rendu-visite",
      titre: "Rédiger un compte rendu de visite client",
      espace: "filieres", filieres: ["ndrc"], theme: "Relation client", type: "modele", duree: "15 min",
      resume: "Une trame courte pour garder une trace utile de chaque rendez-vous dans le CRM.",
      objectif: "Garder une trace claire de chaque rendez-vous pour assurer le suivi et partager l’information avec l’équipe.",
      etapes: [
        "Rédigez le compte rendu le jour même, quand vos souvenirs sont précis.",
        "Notez les faits : besoins exprimés, interlocuteurs, budget, délais.",
        "Distinguez les faits de vos impressions.",
        "Indiquez les engagements pris de chaque côté.",
        "Fixez la prochaine action avec une date, puis enregistrez le tout dans le CRM."
      ],
      exemple: {
        titre: "Prochaine action (exemple fictif)",
        texte: "« Envoyer le devis pour 3 postes avant vendredi 12. Rappeler M. Leroy le mardi 16 pour recueillir son avis. »"
      },
      modeles: [
        {
          titre: "Trame de compte rendu",
          texte: "Client : [Entreprise] — Interlocuteur(s) : [nom, fonction]\nDate et type de rendez-vous : [date] — [visite / visio / téléphone]\n\nObjectif du rendez-vous : [objectif]\n\nSituation actuelle du client : [équipement, fournisseur actuel, organisation]\nBesoins exprimés : [besoins]\nFreins ou objections : [objections]\nBudget et délais évoqués : [si connus]\nDécideur(s) : [qui décide]\n\nEngagements pris :\n- de notre côté : [action]\n- du côté du client : [action]\n\nProchaine action : [action] — le [date]\nNiveau d’intérêt estimé : [faible / moyen / fort] — impression personnelle"
        }
      ]
    },

    // ---------- Bachelor Marketing Digital ----------
    {
      id: "mkt-calendrier-editorial",
      titre: "Construire un calendrier éditorial sur un mois",
      espace: "filieres", filieres: ["marketing-digital"], theme: "Réseaux sociaux", type: "fiche", duree: "2 h",
      resume: "Planifier les publications d’une marque avec des objectifs, des formats et des dates.",
      objectif: "Planifier un mois de publications cohérentes avec les objectifs de l’entreprise et les temps forts de son activité.",
      etapes: [
        "Rappelez l’objectif du mois : notoriété, trafic vers le site, inscriptions, ventes…",
        "Identifiez les temps forts : lancements, événements, saisonnalité, dates clés du secteur.",
        "Définissez 3 ou 4 piliers de contenu (ex. : conseils, coulisses, produits, communauté).",
        "Choisissez les réseaux et un rythme de publication réaliste pour l’équipe.",
        "Remplissez un tableau : date, réseau, pilier, format, sujet, accroche, visuel, responsable, statut.",
        "Faites valider le calendrier par votre tuteur avant de produire les contenus.",
        "En fin de mois, comparez les résultats et ajustez le mois suivant."
      ],
      exemple: {
        titre: "Une ligne de calendrier (exemple fictif — salle de sport locale)",
        texte: "Date : mardi 5 — Réseau : Instagram — Pilier : conseils\nFormat : carrousel 5 visuels\nSujet : « 3 étirements à faire après une journée assise »\nAccroche : « Votre dos vous dit merci. »\nResponsable : alternant·e — Statut : à valider"
      },
      checklist: [
        "L’objectif du mois est écrit.",
        "Les temps forts sont identifiés.",
        "Chaque publication est rattachée à un pilier.",
        "Le rythme est réaliste pour l’équipe.",
        "Le calendrier est validé par le tuteur.",
        "Les indicateurs à suivre sont définis."
      ]
    },
    {
      id: "mkt-indicateurs-campagne",
      titre: "Lire les indicateurs d’une campagne publicitaire",
      espace: "filieres", filieres: ["marketing-digital"], theme: "Analyse de performance", type: "fiche", duree: "45 min",
      resume: "Impressions, CTR, CPC, taux de conversion : comprendre et calculer les indicateurs de base.",
      objectif: "Comprendre les indicateurs de base d’une campagne et savoir en tirer une première analyse.",
      etapes: [
        "Relevez les données brutes : budget dépensé, impressions, clics, conversions.",
        "Calculez le taux de clic (CTR) = clics ÷ impressions × 100.",
        "Calculez le coût par clic (CPC) = budget ÷ clics.",
        "Calculez le taux de conversion = conversions ÷ clics × 100.",
        "Calculez le coût par conversion = budget ÷ conversions.",
        "Comparez avec l’objectif fixé ou une campagne précédente de l’entreprise, et proposez une action d’amélioration."
      ],
      exemple: {
        titre: "Calcul pas à pas (chiffres fictifs)",
        texte: "Budget : 75 € — Impressions : 10 000 — Clics : 150 — Conversions : 6\n\nCTR = 150 ÷ 10 000 × 100 = 1,5 %\nCPC = 75 ÷ 150 = 0,50 €\nTaux de conversion = 6 ÷ 150 × 100 = 4 %\nCoût par conversion = 75 ÷ 6 = 12,50 €\n\nPiste d’analyse : si l’objectif était un coût par conversion plus bas, on peut tester une autre accroche ou améliorer la page d’arrivée."
      },
      vigilance: ["Il n’existe pas de « bon » taux universel : comparez toujours avec les objectifs et l’historique de l’entreprise."]
    },
    {
      id: "mkt-brief-creatif",
      titre: "Rédiger un brief créatif",
      espace: "filieres", filieres: ["marketing-digital"], theme: "Publicité", type: "modele", duree: "30 min",
      resume: "Une trame pour transmettre une demande claire à un graphiste, un vidéaste ou un outil d’IA.",
      objectif: "Formuler une demande de création précise pour éviter les allers-retours.",
      etapes: [
        "Décrivez le contexte : l’entreprise, l’offre, la raison de la campagne.",
        "Précisez l’objectif et la cible.",
        "Formulez le message principal en une phrase.",
        "Indiquez les formats attendus, les contraintes (charte, mentions) et la date de livraison.",
        "Faites relire le brief par votre tuteur avant de l’envoyer."
      ],
      exemple: {
        titre: "Message principal (exemple fictif)",
        texte: "« Notre boulangerie livre désormais au bureau avant 9 h. »"
      },
      modeles: [
        {
          titre: "Trame de brief créatif",
          texte: "Projet : [nom de la campagne]\nEntreprise / offre : [description courte]\nContexte : [pourquoi maintenant]\nObjectif : [notoriété / trafic / leads / ventes]\nCible : [qui, besoins, freins]\nMessage principal : [une phrase]\nPreuves ou arguments : [éléments vérifiables]\nTon : [ex. chaleureux, expert, dynamique]\nFormats attendus : [ex. visuel carré, vidéo verticale 15 s]\nContraintes : [charte graphique, mentions légales, logo]\nAppel à l’action : [ex. Réserver, Demander un devis]\nDate de livraison : [date]\nValidation par : [nom]"
        }
      ]
    },

    // ---------- BTS MCO ----------
    {
      id: "mco-animation-commerciale",
      titre: "Préparer une animation commerciale en magasin",
      espace: "filieres", filieres: ["mco"], theme: "Animation commerciale", type: "fiche", duree: "1 h 30",
      resume: "De l’objectif au bilan : organiser une opération qui attire et fait vendre.",
      objectif: "Concevoir une animation commerciale avec un objectif mesurable, une organisation claire et un bilan.",
      etapes: [
        "Fixez un objectif mesurable : fréquentation, ventes d’une catégorie, panier moyen, inscriptions au programme de fidélité…",
        "Choisissez le type d’animation : dégustation, démonstration, atelier, jeu, offre temporaire.",
        "Vérifiez les règles de l’enseigne et la réglementation applicable avec votre tuteur (jeux, promotions, affichage des prix).",
        "Planifiez : date, horaires, emplacement, matériel, stock, personnel, budget.",
        "Communiquez avant : vitrine, affichage, réseaux sociaux, e-mail aux clients.",
        "Le jour J : briefez l’équipe et relevez les indicateurs.",
        "Faites le bilan : objectif atteint ou non, ce qui a fonctionné, ce qu’il faut changer."
      ],
      exemple: {
        titre: "Fiche projet (exemple fictif — magasin de thés)",
        texte: "Animation : dégustation de thés glacés, samedi 10 h – 17 h\nObjectif : augmenter les ventes de la gamme « thés glacés » ce samedi par rapport au samedi précédent\nMatériel : table, gobelets, 3 références, affichage\nÉquipe : 1 personne dédiée à la dégustation\nIndicateurs relevés : ventes de la gamme, nombre de dégustations, tickets"
      },
      checklist: [
        "L’objectif est mesurable.",
        "Les règles de l’enseigne sont respectées.",
        "Le stock est suffisant.",
        "L’équipe est briefée.",
        "La communication est lancée.",
        "Les indicateurs à relever sont définis.",
        "Le bilan est prévu."
      ]
    },
    {
      id: "mco-indicateurs-point-de-vente",
      titre: "Suivre les indicateurs clés du point de vente",
      espace: "filieres", filieres: ["mco"], theme: "Gestion du point de vente", type: "fiche", duree: "45 min",
      resume: "Chiffre d’affaires, panier moyen, taux de transformation, indice de vente.",
      objectif: "Calculer et interpréter les principaux indicateurs commerciaux d’un point de vente.",
      etapes: [
        "Relevez les données : chiffre d’affaires, nombre de tickets (ventes), nombre d’entrées, nombre d’articles vendus.",
        "Panier moyen = chiffre d’affaires ÷ nombre de tickets.",
        "Taux de transformation = nombre de tickets ÷ nombre d’entrées × 100.",
        "Indice de vente (articles par ticket) = nombre d’articles ÷ nombre de tickets.",
        "Comparez avec la même période de l’année précédente ou avec l’objectif.",
        "Proposez une action pour améliorer l’indicateur le plus faible."
      ],
      exemple: {
        titre: "Calcul sur une journée (chiffres fictifs)",
        texte: "CA : 4 800 € — Tickets : 160 — Entrées : 400 — Articles vendus : 240\n\nPanier moyen = 4 800 ÷ 160 = 30 €\nTaux de transformation = 160 ÷ 400 × 100 = 40 %\nIndice de vente = 240 ÷ 160 = 1,5 article par ticket\n\nPiste : pour augmenter l’indice de vente, former l’équipe à proposer un produit complémentaire."
      }
    },
    {
      id: "mco-briefing-equipe",
      titre: "Animer un briefing d’équipe de 10 minutes",
      espace: "filieres", filieres: ["mco"], theme: "Management d’équipe", type: "modele", duree: "20 min de préparation",
      resume: "Une trame courte pour lancer la journée avec des objectifs clairs.",
      objectif: "Transmettre à l’équipe les objectifs et informations du jour de façon courte, claire et motivante.",
      etapes: [
        "Préparez les chiffres de la veille et les objectifs du jour.",
        "Choisissez un seul point d’attention prioritaire.",
        "Valorisez une réussite de l’équipe.",
        "Laissez un temps pour les questions.",
        "Respectez la durée prévue."
      ],
      exemple: {
        titre: "Point d’attention (exemple fictif)",
        texte: "« Aujourd’hui, on propose systématiquement la carte de fidélité au passage en caisse. »"
      },
      modeles: [
        {
          titre: "Trame de briefing",
          texte: "1. Bonjour et météo de l’équipe (1 min)\n2. Résultats d’hier : [CA, panier moyen, point positif] (2 min)\n3. Objectif du jour : [objectif chiffré] (1 min)\n4. Point d’attention : [un seul sujet] (2 min)\n5. Informations pratiques : [livraison, planning, opération en cours] (2 min)\n6. Questions de l’équipe (2 min)\n7. Mot de fin positif"
        }
      ]
    },

    // ---------- Immobilier ----------
    {
      id: "immo-preparer-visite",
      titre: "Préparer et conduire une visite de bien",
      espace: "filieres", filieres: ["immobilier"], theme: "Transaction", type: "fiche", duree: "1 h",
      resume: "Connaître le bien, découvrir le besoin du visiteur et assurer le suivi.",
      objectif: "Mener une visite professionnelle qui répond aux questions du visiteur et permet un suivi utile pour le propriétaire.",
      etapes: [
        "Étudiez le dossier du bien : surface, pièces, charges, diagnostics disponibles, points forts et points d’attention.",
        "Avant la visite, appelez le visiteur pour confirmer le rendez-vous et vérifier son projet (budget, critères, financement).",
        "Arrivez en avance : aérez, allumez les lumières, vérifiez que tout est prêt.",
        "Faites visiter dans un ordre logique en laissant le visiteur s’exprimer ; répondez avec des informations vérifiées.",
        "Notez les remarques et les questions auxquelles vous devez répondre plus tard.",
        "Faites un retour au visiteur et au propriétaire dans les délais convenus par l’agence."
      ],
      exemple: {
        titre: "Question de découverte (exemple)",
        texte: "« Qu’est-ce qui est indispensable pour vous dans votre futur logement, et sur quoi pourriez-vous faire des compromis ? »"
      },
      checklist: [
        "J’ai étudié le dossier du bien.",
        "J’ai confirmé le rendez-vous.",
        "Je connais le projet du visiteur.",
        "Les clés et documents sont prêts.",
        "Je suis arrivé·e en avance.",
        "J’ai noté les questions en suspens.",
        "Le retour au propriétaire est planifié."
      ],
      vigilance: ["Ne répondez jamais « au hasard » : si vous ne savez pas, dites-le et revenez vers le visiteur avec une information vérifiée."]
    },
    {
      id: "immo-annonce",
      titre: "Rédiger une annonce immobilière claire",
      espace: "filieres", filieres: ["immobilier"], theme: "Annonce", type: "fiche", duree: "40 min",
      resume: "Un titre précis, une description structurée et des informations exactes.",
      objectif: "Rédiger une annonce qui donne les informations essentielles, met en valeur le bien sans exagérer et respecte les règles de l’agence.",
      etapes: [
        "Rédigez un titre précis : type de bien, nombre de pièces, surface, localisation.",
        "Commencez la description par les 2 ou 3 atouts principaux.",
        "Décrivez le bien de façon organisée : pièces, état, extérieurs, stationnement, environnement (transports, commerces).",
        "Ajoutez les informations pratiques : prix, charges, honoraires selon les règles de l’agence.",
        "Vérifiez avec votre tuteur les mentions obligatoires en vigueur (par exemple les informations liées au diagnostic de performance énergétique) : la réglementation évolue.",
        "Relisez : pas d’exagération, pas d’information non vérifiée, pas de faute."
      ],
      exemple: {
        titre: "Début d’annonce (exemple fictif)",
        texte: "Titre : Appartement 3 pièces — 64 m² — balcon — proche gare\n\n« Au 2e étage avec ascenseur, cet appartement lumineux offre un séjour ouvert sur un balcon exposé sud, deux chambres et une cuisine équipée. À [X] minutes à pied de la gare et des commerces. »\n\n[Prix, charges, honoraires et mentions obligatoires à compléter selon les règles de l’agence]"
      },
      vigilance: ["N’utilisez que des informations vérifiées dans le dossier du bien.", "Les mentions obligatoires sont à valider avec votre tuteur."]
    },
    {
      id: "immo-retour-proprietaire",
      titre: "Faire un retour de visite au propriétaire",
      espace: "filieres", filieres: ["immobilier"], theme: "Relation client", type: "modele", duree: "15 min",
      resume: "Informer le vendeur de façon factuelle et régulière après chaque visite.",
      objectif: "Tenir le propriétaire informé après chaque visite avec des retours factuels qui l’aident à prendre des décisions.",
      etapes: [
        "Faites le retour dans le délai promis par l’agence.",
        "Restez factuel : nombre de visites, profils, remarques entendues.",
        "Présentez les remarques négatives avec tact, sans les cacher.",
        "Proposez une action si plusieurs remarques se répètent.",
        "Faites valider vos messages par votre tuteur au début de votre alternance."
      ],
      exemple: {
        titre: "Remarque formulée avec tact (exemple fictif)",
        texte: "« Deux visiteurs ont trouvé la cuisine à rafraîchir. Nous pourrions évoquer ce point lors de notre prochain échange sur la présentation du bien. »"
      },
      modeles: [
        {
          titre: "E-mail de retour de visite",
          texte: "Objet : Retour de visite — [adresse du bien] — [date]\n\nBonjour [Madame / Monsieur Nom],\n\nNous avons fait visiter votre bien le [date] à [nombre] personne(s) / foyer(s).\n\nPoints appréciés : [remarques positives]\nPoints soulevés : [remarques ou questions]\nSuite envisagée par le(s) visiteur(s) : [réflexion / seconde visite / pas de suite]\n\n[Proposition éventuelle : action à envisager]\n\nNous restons à votre disposition et revenons vers vous dès que nous avons du nouveau.\n\nBien cordialement,\n[Prénom Nom] — [Agence]"
        }
      ]
    },

    // ---------- Comptabilité ----------
    {
      id: "compta-pieces",
      titre: "Organiser le traitement des pièces comptables",
      espace: "filieres", filieres: ["comptabilite"], theme: "Organisation comptable", type: "fiche", duree: "45 min",
      resume: "Collecter, vérifier, classer et enregistrer les pièces sans en oublier.",
      objectif: "Mettre en place une routine simple pour que chaque pièce soit vérifiée, classée et enregistrée.",
      etapes: [
        "Collectez les pièces : factures d’achat et de vente, relevés bancaires, notes de frais, justificatifs.",
        "Vérifiez chaque pièce : date, numéro, identité du fournisseur ou du client, montants HT, TVA et TTC.",
        "Classez selon la méthode du cabinet ou de l’entreprise (par journal, par mois, par tiers).",
        "Enregistrez dans le logiciel en respectant le plan de comptes utilisé.",
        "Signalez à votre tuteur les pièces manquantes ou douteuses plutôt que de deviner.",
        "Contrôlez en fin de période : toutes les pièces sont-elles enregistrées ?"
      ],
      exemple: {
        titre: "Contrôle d’une facture (exemple fictif)",
        texte: "Facture n° F-2041 du 03/04 — Fournisseur : [Entreprise fictive]\nHT : 500,00 € — TVA 20 % : 100,00 € — TTC : 600,00 €\nVérification : 500 × 20 % = 100 ✔ ; 500 + 100 = 600 ✔\n→ Pièce conforme, prête à être enregistrée."
      },
      checklist: [
        "Toutes les pièces de la période sont collectées.",
        "Les montants HT / TVA / TTC sont cohérents.",
        "Chaque pièce est classée.",
        "Chaque pièce est enregistrée.",
        "Les anomalies sont signalées au tuteur."
      ]
    },
    {
      id: "compta-rapprochement",
      titre: "Réaliser un rapprochement bancaire simple",
      espace: "filieres", filieres: ["comptabilite"], theme: "Trésorerie", type: "fiche", duree: "1 h",
      resume: "Expliquer l’écart entre le relevé bancaire et le compte banque de la comptabilité.",
      objectif: "Comprendre et justifier l’écart entre le solde du relevé bancaire et le solde du compte banque (512) en comptabilité.",
      etapes: [
        "Relevez les deux soldes à la même date : relevé bancaire et compte 512.",
        "Pointez les opérations présentes des deux côtés.",
        "Listez les opérations enregistrées en comptabilité mais pas encore passées en banque (ex. chèque émis non encaissé).",
        "Listez les opérations passées en banque mais pas encore comptabilisées (ex. frais bancaires).",
        "Calculez les soldes rectifiés : ils doivent être égaux.",
        "Enregistrez en comptabilité les opérations manquantes, après validation par votre tuteur."
      ],
      exemple: {
        titre: "Rapprochement (chiffres fictifs)",
        texte: "Solde du relevé bancaire : 12 400 €\nSolde du compte 512 : 11 975 €\n\nÉcarts constatés :\n- Chèque de 450 € émis et comptabilisé, pas encore débité par la banque\n- Frais bancaires de 25 € prélevés, pas encore comptabilisés\n\nBanque rectifiée : 12 400 − 450 = 11 950 €\nComptabilité rectifiée : 11 975 − 25 = 11 950 €\n→ Les soldes rectifiés sont égaux ✔"
      }
    },
    {
      id: "compta-relance-impaye",
      titre: "Relancer un client pour une facture impayée",
      espace: "filieres", filieres: ["comptabilite"], theme: "Relation client", type: "modele", duree: "20 min",
      resume: "Trois niveaux de relance, du rappel courtois au message plus ferme.",
      objectif: "Relancer un client de façon progressive et professionnelle, en respectant la procédure de l’entreprise.",
      etapes: [
        "Vérifiez d’abord que la facture n’a pas été réglée (pointage du compte client et de la banque).",
        "Consultez la procédure de l’entreprise : délais, interlocuteurs, niveau de validation.",
        "Commencez par un rappel courtois.",
        "Sans règlement, passez à une deuxième relance plus précise.",
        "Le troisième niveau est à valider avec votre tuteur avant tout envoi.",
        "Notez chaque relance dans le dossier client."
      ],
      exemple: {
        titre: "Vérification préalable (exemple fictif)",
        texte: "Facture F-1187 de 1 200 € TTC, échéance le 30/04. Au 10/05, aucun règlement sur le relevé bancaire ni en comptabilité → premier rappel courtois."
      },
      modeles: [
        {
          titre: "Niveau 1 — Rappel courtois",
          texte: "Objet : Rappel — facture [n°] du [date]\n\nBonjour [Madame / Monsieur Nom],\n\nSauf erreur de notre part, la facture n° [numéro] d’un montant de [montant] € TTC, arrivée à échéance le [date], n’a pas encore été réglée.\n\nS’il s’agit d’un oubli, nous vous remercions de bien vouloir procéder au règlement. Si celui-ci a été effectué entre-temps, merci de ne pas tenir compte de ce message.\n\nBien cordialement,\n[Prénom Nom] — [Entreprise]"
        },
        {
          titre: "Niveau 2 — Deuxième relance",
          texte: "Objet : Deuxième relance — facture [n°]\n\nBonjour [Madame / Monsieur Nom],\n\nMalgré notre précédent rappel du [date], la facture n° [numéro] de [montant] € TTC reste impayée à ce jour.\n\nNous vous remercions de procéder au règlement sous [délai] ou de nous contacter si vous rencontrez une difficulté, afin que nous trouvions ensemble une solution.\n\nBien cordialement,\n[Prénom Nom] — [Entreprise]"
        },
        {
          titre: "Niveau 3 — À valider par le tuteur",
          texte: "[Ce niveau dépend de la procédure de l’entreprise : mise en demeure, pénalités de retard, recours éventuels. Rédaction et envoi uniquement après validation par votre tuteur.]"
        }
      ]
    },

    // ---------- Autres filières ----------
    {
      id: "modele-fiche-filiere",
      titre: "Fiche à compléter : proposer une ressource pour une nouvelle filière",
      espace: "filieres", filieres: ["autres"], theme: "Modèle de fiche", type: "fiche", duree: "30 min",
      resume: "La trame à utiliser par l’équipe pour ajouter une fiche à une autre formation.",
      objectif: "Donner à l’équipe ESMC une trame commune pour créer de nouvelles fiches pratiques, quelle que soit la filière.",
      etapes: [
        "Choisissez une situation concrète que les alternant·e·s de la filière rencontrent souvent en entreprise.",
        "Formulez l’objectif en une phrase qui commence par un verbe.",
        "Découpez la méthode en 4 à 7 étapes simples.",
        "Rédigez un exemple concret et indiquez qu’il est fictif.",
        "Ajoutez si besoin une checklist, un modèle de message ou un prompt.",
        "Faites relire la fiche par un·e formateur·rice de la filière, puis ajoutez-la au fichier assets/js/data.js."
      ],
      exemple: {
        titre: "Trame vierge",
        texte: "Titre : [action concrète]\nFilière : [formation]\nThème : [thème]\nObjectif : [verbe + résultat attendu]\nÉtapes : 1. … 2. … 3. …\nExemple concret (fictif) : […]\nChecklist / modèle / prompt (facultatif) : […]"
      }
    },

    /* =====================================================
     * ESPACE 3 — CRÉER DU CONTENU AVEC L’IA
     * ===================================================== */
    {
      id: "ia-bien-prompter",
      titre: "Rédiger un bon prompt : la méthode RCTF",
      espace: "ia", filieres: ["toutes"], theme: "Bases de l’IA", type: "tutoriel", duree: "20 min",
      resume: "Rôle, Contexte, Tâche, Format : la base pour obtenir des réponses utiles.",
      objectif: "Écrire des demandes claires à un assistant IA pour obtenir un premier jet exploitable, que vous retravaillerez ensuite.",
      etapes: [
        "Rôle : indiquez à l’IA quel rôle jouer (ex. « Tu es community manager d’une PME »).",
        "Contexte : décrivez l’entreprise, la cible et l’objectif, sans données confidentielles.",
        "Tâche : formulez précisément ce que vous attendez (un post, 3 accroches, un script de 30 secondes…).",
        "Format : précisez la longueur, le ton, la structure, la langue.",
        "Ajoutez des contraintes : ce qu’il faut éviter, les informations à ne pas inventer.",
        "Améliorez par étapes : demandez des variantes, des raccourcissements, un autre ton.",
        "Relisez et vérifiez toujours le résultat avant de l’utiliser (voir la checklist de vérification)."
      ],
      exemple: {
        titre: "Prompt faible → prompt efficace",
        texte: "Faible : « Écris un post sur notre boulangerie. »\n\nEfficace : « Tu es community manager d’une boulangerie de quartier. Cible : actifs de 25 à 45 ans qui passent le matin. Objectif : faire connaître la nouvelle formule petit-déjeuner à emporter. Écris un post Instagram de 80 mots maximum, ton chaleureux, avec une accroche, 2 emojis maximum et un appel à l’action. N’invente ni prix ni avis client. »"
      },
      prompts: [
        {
          titre: "Prompt modèle RCTF",
          texte: "Rôle : Tu es [rôle].\nContexte : [entreprise, offre, cible, objectif].\nTâche : [ce que tu dois produire].\nFormat : [longueur, structure, ton, nombre de variantes].\nContraintes : n’invente aucun chiffre, prix, avis ou témoignage. Si une information manque, pose-moi la question."
        }
      ],
      vigilance: [
        "Ne saisissez jamais de données confidentielles de l’entreprise ou de données personnelles de clients.",
        "Respectez les règles de votre entreprise d’accueil sur l’usage de l’IA."
      ]
    },
    {
      id: "ia-checklist-verification",
      titre: "Vérifier un contenu créé avec l’IA avant publication",
      espace: "ia", filieres: ["toutes"], theme: "Bases de l’IA", type: "checklist", duree: "10 min",
      resume: "Les contrôles indispensables avant de publier ou d’envoyer un contenu.",
      objectif: "S’assurer qu’un contenu produit avec l’aide de l’IA est exact, adapté à l’entreprise et publiable.",
      etapes: [
        "Relisez le contenu en entier, à voix haute.",
        "Vérifiez chaque fait, chiffre, date ou prix auprès d’une source fiable ou de votre tuteur.",
        "Supprimez toute affirmation non vérifiable, tout faux avis ou témoignage.",
        "Adaptez le ton à la marque et à sa charte.",
        "Faites valider le contenu par la personne responsable avant publication."
      ],
      exemple: {
        titre: "Correction typique (exemple)",
        texte: "Texte généré : « Déjà plus de 1 000 clients satisfaits ! »\n→ Chiffre non vérifié : à supprimer, ou à remplacer par une information réelle fournie par l’entreprise."
      },
      checklist: [
        "Aucune donnée confidentielle n’a été saisie dans l’outil.",
        "Les faits, chiffres et prix sont vérifiés.",
        "Aucun faux témoignage, avis ou résultat n’apparaît.",
        "Le ton correspond à la marque.",
        "Les visuels et musiques utilisés sont libres de droits ou autorisés.",
        "Les mentions nécessaires sont présentes (ex. conditions d’une offre).",
        "Le contenu ne contient pas de faute.",
        "Le contenu est validé par mon tuteur ou le responsable."
      ]
    },
    {
      id: "ia-post-linkedin-ndrc",
      titre: "Préparer une publication LinkedIn B2B avec l’IA",
      espace: "ia", filieres: ["ndrc"], theme: "Publications", type: "tutoriel", duree: "30 min",
      resume: "Exemple NDRC : un post qui valorise une solution auprès de clients professionnels.",
      objectif: "Produire un premier jet de post LinkedIn pour présenter une solution de votre entreprise à des prospects professionnels, puis le retravailler.",
      etapes: [
        "Choisissez un problème concret de vos clients que votre entreprise aide à résoudre.",
        "Rassemblez les informations vérifiées : offre, bénéfices, appel à l’action.",
        "Utilisez le prompt ci-dessous pour obtenir 2 versions.",
        "Choisissez la meilleure, personnalisez-la avec votre expérience de terrain.",
        "Vérifiez le contenu avec la checklist dédiée et faites-le valider.",
        "Après publication, notez les réactions et les contacts générés."
      ],
      exemple: {
        titre: "Accroche obtenue puis retravaillée (exemple fictif)",
        texte: "« Combien de temps votre équipe passe-t-elle chaque semaine à commander ses fournitures ? Chez [Entreprise], nous avons simplifié ce point pour les cabinets et agences de notre région. »"
      },
      prompts: [
        {
          titre: "Post LinkedIn B2B",
          texte: "Tu es chargé·e d’affaires dans [type d’entreprise] et tu publies sur LinkedIn pour des [cible : dirigeants de PME, responsables achats…].\n\nProblème client : [problème concret].\nSolution proposée : [offre, sans exagérer].\nBénéfices vérifiés : [bénéfice 1], [bénéfice 2].\nAppel à l’action : [ex. proposer un échange de 15 minutes].\n\nRédige 2 versions d’un post de 120 à 150 mots : une accroche sous forme de question, un paragraphe court, une liste de 3 points maximum, un appel à l’action. Ton professionnel et accessible.\nN’invente aucun chiffre, client, avis ou résultat."
        },
        {
          titre: "Améliorer un premier jet",
          texte: "Voici mon post : [coller le texte].\nPropose 3 accroches alternatives plus courtes (moins de 12 mots), puis réécris le post en le rendant plus concret, sans ajouter d’information que je n’ai pas donnée."
        }
      ]
    },
    {
      id: "ia-message-prospection-ndrc",
      titre: "Personnaliser un message de prospection avec l’IA",
      espace: "ia", filieres: ["ndrc"], theme: "Prospection commerciale", type: "prompt", duree: "20 min",
      resume: "Exemple NDRC : adapter un e-mail de prospection à chaque prospect.",
      objectif: "Gagner du temps sur la personnalisation d’e-mails de prospection tout en restant précis et honnête.",
      etapes: [
        "Rassemblez des informations publiques sur le prospect (site, actualité, secteur).",
        "Ne saisissez aucune donnée personnelle sensible ni d’information interne confidentielle.",
        "Utilisez le prompt pour générer un message court.",
        "Vérifiez chaque élément mentionné sur le prospect.",
        "Envoyez depuis votre outil habituel et notez l’action dans le CRM."
      ],
      exemple: {
        titre: "Ouverture personnalisée (exemple fictif)",
        texte: "« J’ai vu que votre agence ouvrait un second bureau à [ville] : félicitations ! Avec deux sites, la gestion des fournitures devient souvent plus complexe… »"
      },
      prompts: [
        {
          titre: "E-mail de prospection personnalisé",
          texte: "Tu es commercial·e B2B pour [Entreprise], qui propose [offre].\n\nProspect : [secteur, taille, information publique récente].\nBesoin probable : [besoin].\nObjectif de l’e-mail : obtenir un rendez-vous de 15 minutes.\n\nRédige un e-mail de 90 mots maximum avec : un objet court, une première phrase personnalisée liée à l’information publique, un bénéfice concret, une question pour proposer un rendez-vous. Ton professionnel, sans formule exagérée. N’invente aucune information sur le prospect."
        },
        {
          titre: "Séquence de relance",
          texte: "À partir de cet e-mail de prospection : [coller l’e-mail], propose 2 relances courtes (50 mots maximum chacune) à envoyer à J+5 et J+12, chacune avec un angle différent. Pas de pression, pas de fausse urgence."
        }
      ]
    },
    {
      id: "ia-script-video-ndrc",
      titre: "Script de vidéo de présentation d’une offre (60 secondes)",
      espace: "ia", filieres: ["ndrc"], theme: "Scripts vidéo", type: "tutoriel", duree: "40 min",
      resume: "Exemple NDRC : une courte vidéo à envoyer à un prospect ou à publier sur LinkedIn.",
      objectif: "Écrire le script d’une vidéo d’environ 60 secondes qui présente une offre à des clients professionnels.",
      etapes: [
        "Définissez la cible et le message unique de la vidéo.",
        "Générez un script avec le prompt ci-dessous.",
        "Lisez-le à voix haute et chronométrez : coupez si nécessaire.",
        "Ajoutez vos propres mots pour que le texte vous ressemble.",
        "Filmez-vous (avec l’accord de votre entreprise), cadrage horizontal ou vertical selon le canal.",
        "Faites valider la vidéo avant toute diffusion."
      ],
      exemple: {
        titre: "Structure obtenue (exemple fictif)",
        texte: "0–5 s : « Vous gérez une agence et vos commandes de fournitures vous prennent du temps ? »\n5–40 s : présentation de la solution en 3 points\n40–55 s : comment ça se passe concrètement\n55–60 s : « Répondez à ce message pour un échange de 15 minutes. »"
      },
      prompts: [
        {
          titre: "Script vidéo 60 s",
          texte: "Tu es scénariste de vidéos commerciales B2B.\nÉcris le script d’une vidéo face caméra d’environ 60 secondes (150 mots maximum) pour présenter [offre] de [Entreprise] à [cible].\n\nStructure : accroche (5 s), problème du client, solution en 3 points, appel à l’action.\nPrésente le script en tableau : minutage | texte à dire | indication visuelle.\nTon naturel, phrases courtes faciles à dire à l’oral. N’invente aucun chiffre ni témoignage."
        }
      ]
    },
    {
      id: "ia-script-video-court-mkt",
      titre: "Écrire un script de vidéo courte (Reels, TikTok, Shorts)",
      espace: "ia", filieres: ["marketing-digital"], theme: "Scripts vidéo", type: "tutoriel", duree: "45 min",
      resume: "Exemple Marketing Digital : accroche, contenu rythmé et appel à l’action en format vertical.",
      objectif: "Produire le script d’une vidéo verticale courte, avec une accroche forte dès les premières secondes.",
      etapes: [
        "Choisissez un seul message par vidéo.",
        "Générez plusieurs accroches et choisissez la plus claire.",
        "Demandez un script découpé en plans avec texte à l’écran et voix off.",
        "Vérifiez la faisabilité du tournage avec les moyens de l’entreprise.",
        "Utilisez uniquement des musiques et images autorisées.",
        "Faites valider le script avant le tournage."
      ],
      exemple: {
        titre: "Découpage (exemple fictif — boutique de plantes)",
        texte: "Plan 1 (0–2 s) : gros plan sur une plante fanée — texte : « Elle a soif ou elle se noie ? »\nPlan 2 (2–10 s) : test du doigt dans la terre — voix off : astuce n°1\nPlan 3 (10–18 s) : arrosage au bon endroit — astuce n°2\nPlan 4 (18–22 s) : plan de la boutique — « Toutes nos astuces en magasin et en lien dans la bio »"
      },
      prompts: [
        {
          titre: "Accroches de vidéo courte",
          texte: "Tu es créateur·rice de contenus pour [marque], qui s’adresse à [cible].\nSujet de la vidéo : [sujet].\nPropose 10 accroches de moins de 8 mots, à afficher à l’écran dans les 2 premières secondes. Varie les styles : question, chiffre (uniquement si je te le fournis), erreur fréquente, avant/après."
        },
        {
          titre: "Script découpé en plans",
          texte: "Écris le script d’une vidéo verticale de [15 / 30] secondes pour [marque] sur le sujet : [sujet], avec l’accroche : « [accroche choisie] ».\nPrésente-le en tableau : plan | durée | ce qu’on voit | texte à l’écran | voix off.\nTournage réalisable avec un smartphone, sans acteur professionnel. Termine par un appel à l’action : [action]. N’invente aucune information sur la marque."
        }
      ]
    },
    {
      id: "ia-publicite-mkt",
      titre: "Créer des variantes de publicité pour un test A/B",
      espace: "ia", filieres: ["marketing-digital"], theme: "Publicités", type: "prompt", duree: "30 min",
      resume: "Exemple Marketing Digital : générer et comparer plusieurs versions d’une annonce.",
      objectif: "Préparer plusieurs versions d’une publicité pour tester ce qui fonctionne le mieux auprès de la cible.",
      etapes: [
        "Rédigez un mini-brief : offre, cible, objectif, message principal (voir la fiche « brief créatif »).",
        "Générez des variantes qui ne changent qu’un élément à la fois (l’accroche, par exemple).",
        "Vérifiez les limites de caractères et les règles publicitaires actuelles de la plateforme.",
        "Vérifiez que chaque promesse est exacte et que les conditions de l’offre sont indiquées.",
        "Lancez le test avec l’accord de votre tuteur, puis comparez les indicateurs (voir la fiche sur les indicateurs)."
      ],
      exemple: {
        titre: "Deux variantes d’accroche (exemple fictif — auto-école)",
        texte: "Variante A (bénéfice) : « Passez le code à votre rythme, depuis votre téléphone. »\nVariante B (question) : « Le code vous stresse ? Révisez 10 minutes par jour. »\nTexte et visuel identiques par ailleurs → on compare uniquement l’accroche."
      },
      prompts: [
        {
          titre: "Variantes d’annonce",
          texte: "Tu es spécialiste en publicité digitale.\nOffre : [offre et conditions].\nCible : [cible].\nObjectif : [clics vers le site / prises de contact / achats].\nPlateforme : [Meta, Google, LinkedIn…].\n\nPropose 4 variantes d’accroche (moins de 40 caractères) et 2 textes principaux (moins de 125 caractères), avec un appel à l’action adapté. Indique pour chaque variante l’angle utilisé (bénéfice, question, urgence réelle, preuve).\nN’invente aucune promesse, réduction, chiffre ou avis : utilise uniquement les informations fournies."
        },
        {
          titre: "Analyse des résultats du test",
          texte: "Voici les résultats de mon test A/B (chiffres réels de la campagne) : [coller les indicateurs par variante].\nExplique-moi quelle variante semble la plus performante et pourquoi, en précisant les limites de l’analyse (volume de données, durée). Propose un prochain test."
        }
      ]
    },
    {
      id: "ia-calendrier-mkt",
      titre: "Générer des idées de contenus pour un mois",
      espace: "ia", filieres: ["marketing-digital"], theme: "Publications", type: "prompt", duree: "20 min",
      resume: "Exemple Marketing Digital : nourrir un calendrier éditorial à partir de piliers de contenu.",
      objectif: "Obtenir une liste d’idées de publications à trier et à intégrer dans le calendrier éditorial.",
      etapes: [
        "Définissez vos piliers de contenu et l’objectif du mois.",
        "Utilisez le prompt pour obtenir des idées classées par pilier.",
        "Gardez uniquement les idées réalistes pour l’entreprise.",
        "Intégrez-les dans votre calendrier éditorial (voir la fiche dédiée).",
        "Faites valider le calendrier par votre tuteur."
      ],
      exemple: {
        titre: "Idées obtenues puis triées (exemple fictif — salle de sport)",
        texte: "Conseils : « 3 erreurs à éviter quand on reprend le sport »\nCoulisses : « Une journée avec notre coach du matin »\nCommunauté : « Le défi du mois : 10 000 pas par jour »"
      },
      prompts: [
        {
          titre: "Idées de contenus par pilier",
          texte: "Tu es responsable éditorial·e pour [marque], qui s’adresse à [cible] sur [réseaux].\nObjectif du mois : [objectif]. Temps forts : [événements, saisonnalité].\nPiliers de contenu : [pilier 1], [pilier 2], [pilier 3].\n\nPropose 12 idées de publications (4 par pilier) sous forme de tableau : pilier | sujet | format conseillé | accroche. Les idées doivent être réalisables par une petite équipe. N’invente aucune information sur la marque."
        }
      ]
    }
  ]
};
