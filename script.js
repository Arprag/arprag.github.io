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
            { nom: "Nicolas", cadeaux: [] },
            { nom: "Suzanne", cadeaux: [] },
            { nom: "Camille (15 ans)", age: 15, cadeaux: [] },
            { nom: "Roxane (4 ans)", age: 4, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille Sangarin David", 
        membres: [
            { nom: "Maryse", cadeaux: [] },
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
            { nom: "Cécile", cadeaux: [] },
            { nom: "Mathieu", cadeaux: [] },
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
        familleDiv.innerHTML = `<h2>Liste de la ${famille.nom}</h2>`;
        
        famille.membres.forEach(membre => {
            const membreDiv = document.createElement('div');
            membreDiv.innerHTML = `<h3>${membre.nom}</h3>`;
            
            const listeUl = document.createElement('ul');
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
