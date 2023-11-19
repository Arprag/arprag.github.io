// Liste des membres de la famille et de leurs cadeaux souhaités
const familles = [
    { nom: "Alice", cadeaux: ["Livre", "Parfum", "Montre", "Sac à main", "Chaussures"] },
    { nom: "Bob", cadeaux: ["Casque audio", "Montre connectée", "Lunettes de soleil", "Sneakers", "Ceinture"] },
    // Ajoutez ici d'autres membres et leurs listes de cadeaux
];

function afficherListes() {
    const container = document.getElementById('listeCadeaux');
    container.innerHTML = ''; // Vider le contenu précédent

    familles.forEach(membre => {
        const membreDiv = document.createElement('div');
        membreDiv.innerHTML = `<h2>Liste de ${membre.nom}</h2>`;
        
        const listeUl = document.createElement('ul');
        membre.cadeaux.forEach(cadeau => {
            const cadeauLi = document.createElement('li');
            cadeauLi.textContent = cadeau;
            listeUl.appendChild(cadeauLi);
        });

        membreDiv.appendChild(listeUl);
        container.appendChild(membreDiv);
    });
}
