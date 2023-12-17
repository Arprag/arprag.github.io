const offresDeCadeaux = {
    "Sandrine": "Mathieu",
    "Cécile": "Maryse",
    "Nicolas": "Suzanne",
    "Maryse": "Stéphanie",
    "Mathieu": "Mickael",
    "Mickael": "Cécile",
    "Stéphanie": "Nicolas",
    "Suzanne": "Yann",
    "Yann": "Sandrine"
};

const cadeauxOffertsPar = Object.entries(offresDeCadeaux).reduce((acc, [offreur, receveur]) => {
    if (!acc[receveur]) {
        acc[receveur] = offreur;
    }
    return acc;
}, {});

const familles = [
    { 
        nom: "Famille Sangarin Vincent", 
        membres: [
            { nom: "Sandrine", cadeaux: [
            { nom: "Livre : Tous les styles de Louis XIII à l'art déco", url: "https://fr.shopping.rakuten.com/mfp/3021265/tous-les-styles-du-louis-xiii-a-l-art-deco-sylvie-chadenet-livre?pid=1991419" },
            { nom: "Embellisseur de teint", url: "https://www.magnifaik.com/products/embellisseur-de-teint-cest-la-base" },
            { nom: "Shampoing", url: "https://www.lush.com/fr/fr/p/fairly-traded-honey-shampoo/300g" },
            { nom: "Chaussettes", url: "https://www.lavantgardiste.com/products/chaussettes-cocooning-en-moumoute?variant=41930779820220" },
            { nom: "Lampe de lecture", url: "https://www.lavantgardiste.com/products/lampe-de-lecture-pince-a-linge?_pos=4&_sid=e7491a6d6&_ss=r" },
            { nom: "Boîte à bijoux", url: "https://coulobre.com/products/boite-bijoux-en-bois" },
            { nom: "Thé (Earl Grey)", url: "" }, // Aucune URL pour cet élément
            { nom: "Une place de théâtre", url: "" } // Aucune URL pour cet élément
            ] },
            { nom: "Nicolas", cadeaux: [
            { nom: "Tequila Cimarron Reposado", url: "https://www.whisky.fr/tequila-cimarron-reposado.html" },
            { nom: "Whisky Double Barrel Islay & Highland D. Laing", url: "https://www.magnifaik.com/products/embellisseur-de-teint-cest-la-base" },
            { nom: "Une)
                )
                , url: "https://www.lush.com/fr/fr/p/fairly-traded-honey-shampoo/300g" },à
            { nom: "Chaussettes", url: "https://www.lavantgardiste.com/products/chaussettes-cocooning-en-moumoute?variant=41930779820220" },
            { nom: "Lampe de lecture", url: "https://www.lavantgardiste.com/products/lampe-de-lecture-pince-a-linge?_pos=4&_sid=e7491a6d6&_ss=r" },
            { nom: "Boîte à bijoux", url: "https://coulobre.com/products/boite-bijoux-en-bois" },
            { nom: "Thé (Earl Grey)", url: "" }, // Aucune URL pour cet élément
            { nom: "Une place de théâtre", url: "" } // Aucune URL pour cet élément
            ] },
            { nom: "Suzanne", cadeaux: [] },
            { nom: "Camille (15 ans)", age: 15, cadeaux: [] },
            { nom: "Roxane (4 ans)", age: 4, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille Sangarin David", 
        membres: [
            { nom: "Maryse", cadeaux: [
            { nom: "LEGO Disney et Pixar 43217 La maison de Là-haut", url: "" },
            { nom: "Un parfum dans un pochon Fragonard", url: "https://www.fragonard.com/fr-int/les-pochons-c-1010.htm" },
            { nom: "Mini Brands Disney Store Magasin de Jouets avec 2 Miniatures Exclusives, 77267", url: "https://www.amazon.fr/SURPRISE-Magasin-Miniatures-Exclusives-77267/dp/B09NRNVX6L/" },
            { nom: "Mascara bleu électrique Référence 02", url: "https://www.kikocosmetics.com/fr-fr/maquillage/yeux/mascaras/Smart-Colour-Mascara/p-KM00301066" },
            { nom: "Rituals : The Legend of the dragon", url: "https://www.rituals.com/fr-fr/corps/produits-bain-et-douche/gels-et-mousses-de-douche" },
            { nom: "Rituals : The Ritual of Ayurveda", url: "https://www.rituals.com/fr-fr/corps/produits-bain-et-douche/huiles-de-douche" },
            { nom: "Rituals : The Ritual of Sakura", url: "https://www.rituals.com/fr-fr/corps/soins-du-corps/huiles-et-cremes-pour-le-corps" }
            ] },
            { nom: "Mickael", cadeaux: [
            { nom: "Watchmen - Tome 0", url: "https://www.fnac.com/a3869009/Watchmen-Tome-0-WATCHMEN-Dave-Gibbons" },
            { nom: "Sweat Dragon Ball Z", url: "https://www.celio.com/fr-fr/p/dragon-ball-z---sweat/1140243.html" },
            { nom: "STAR WARS Episode IV - UN NOUVEL ESPOIR (2019) - Blu-ray 4K [4K Ultra-HD + Blu-ray + Blu-ray Bonus]", url: "https://amzn.eu/d/iPQ5qsl" },
            { nom: "STAR WARS Episode V - L'EMPIRE CONTRE-ATTAQUE - Blu-ray 4K [4K Ultra-HD + Blu-ray + Blu-ray Bonus]", url: "https://amzn.eu/d/1u4Drjl" },
            { nom: "STAR WARS Episode VI - LE RETOUR DU JEDI (2019) - Blu-ray [Blu-ray + Blu-ray bonus]", url: "https://www.fnac.com/a14057070/Star-Wars-Le-Retour-du-Jedi-Episode-6-Blu-ray-4K-Ultra-HD-Mark-Hamill-Blu-ray-4K" }
            ] },
            { nom: "Océane (13 ans)", age: 13, cadeaux: [] },
            { nom: "Victor (7 ans)", age: 7, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille David Le Doaré", 
        membres: [
            { nom: "Cécile", cadeaux: [
            { nom: "Des boucles d’oreilles pendantes dans les tons bleus ou marrons", url: "" },
            { nom: "Un bracelet d’Apple Watch (40mm)", url: "" },
            { nom: "Des bracelets fins (aime bien faire des mélanges de plusieurs bracelets)", url: "" },
            { nom: "Un porte cartes pour 5-10 cartes", url: "" },
            { nom: "Le savon-soin hydratant de Sandrine", url: "" },
            { nom: "Des gants chauds et pratiques pour faire du vélo en hiver", url: "" },
            ] },
            { nom: "Mathieu", cadeaux: [
            { nom: "Baldur's Gate 3, sur Steam", url: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"},
            { nom: "Chants of Sennaar sur Xbox", url: "https://www.xbox.com/fr-FR/games/store/chants-of-sennaar/9nr8v6m3qh57"},
            { nom: "Le président est une noix de coco", url: "https://www.amazon.fr/dp/2413040803/"},
            { nom: "Les cerveaux de la ferme: Au coeur des émotions et des perceptions", url: "https://www.amazon.fr/cerveaux-ferme-%C3%A9motionnel-animaux-d%C3%A9levage/dp/2842217357/"},     
            { nom: "Insoluble mais vrai !: Ces énigmes et casse-tête qui résistent encore à la science", url: "https://www.amazon.fr/dp/2081486776/"}
            ] },
            { nom: "Élise (2 ans)", age: 2, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille Pavlioglou", 
        membres: [
            { nom: "Stéphanie", cadeaux: [
            { nom: "Vacuvin - Champagne saver & verser", url: "" },
            { nom: "Lampe de lecture", url: "" },
            { nom: "Bourjois volume glamour effet push up waterproof", url: "" }
            ] },
            { nom: "Yann", cadeaux: [
            { nom: "Velours de Santal", url: "https://www.labogie.com/products/velours-de-santalz" },
            { nom: "Oranger en fleur", url: "https://www.labogie.com/products/oranger-en-fleur" },
            { nom: "Housse de coussin Leonard beige doux", url: "https://www.madura.com/products/housse-de-coussin-leonard-beige-doux-40-40" },
            { nom: "+ Coussin de garnissage Fibre blanc", url: "https://www.madura.com/products/coussin-de-garnissage-fibre-blanc-40-40" }
            ] }
        ]
    },
    // Ajoutez ici d'autres membres et leurs listes de cadeaux
];

function afficherListes() {
    const container = document.getElementById('listeCadeaux');
    container.innerHTML = ''; // Vider le contenu précédent

    familles.forEach(famille => {
        const familleDiv = document.createElement('div');
        familleDiv.className = 'famille';
        familleDiv.innerHTML = `<h2>Liste de la ${famille.nom}</h2>`;
        
        famille.membres.forEach(membre => {
            const membreDiv = document.createElement('div');
            membreDiv.className = 'membre';

            // Utiliser le nouvel objet pour obtenir le nom de la personne qui offre le cadeau
            const offertPar = cadeauxOffertsPar[membre.nom] || "le Père Noël";
            membreDiv.innerHTML = `<h3>${membre.nom}, offert par ${offertPar}</h3>`;
            
            const listeUl = document.createElement('ul');
            listeUl.className = 'cadeau';
            membre.cadeaux.forEach(cadeau => {
                const cadeauLi = document.createElement('li');
                cadeauLi.innerHTML = cadeau.url 
                    ? `<a href="${cadeau.url}" target="_blank">${cadeau.nom}</a>` 
                    : cadeau.nom;
                listeUl.appendChild(cadeauLi);
            });

            membreDiv.appendChild(listeUl);
            familleDiv.appendChild(membreDiv);
        });

        container.appendChild(familleDiv);
    });
}
