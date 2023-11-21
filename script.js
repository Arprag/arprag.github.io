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
            { nom: "Camille", age: 15, cadeaux: [] },
            { nom: "Roxane", age: 4, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille Sangarin David", 
        membres: [
            { nom: "Maryse", cadeaux: [] },
            { nom: "Mickael", cadeaux: [] },
            { nom: "Océane", age: 13, cadeaux: [] },
            { nom: "Victor", age: 7, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille David Le Doaré", 
        membres: [
            { nom: "Cécile", cadeaux: [] },
            { nom: "Mathieu", cadeaux: [] },
            { nom: "Élise", age: 2, cadeaux: [] }
        ]
    },
    { 
        nom: "Famille Pavlioglou", 
        membres: [
            { nom: "Stéphanie", cadeaux: [] },
            { nom: "Yann", cadeaux: [] }
        ]
    },
    // Les membres déjà déclarés
    { 
        nom: "Sandrine", 
        cadeaux: [
            // Liste des cadeaux de Sandrine
        ]
    },
    { 
        nom: "Yannou", 
        cadeaux: [
            // Liste des cadeaux de Yannou
        ]
    },
    { 
        nom: "Stéphanie", 
        cadeaux: [
            // Liste des cadeaux de Stéphanie
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
