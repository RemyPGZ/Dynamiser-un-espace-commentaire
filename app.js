let form = document.querySelector("form");

form.addEventListener("submit", validerLeFormulaire);

function validerLeFormulaire(event) {
    event.preventDefault();

    let commentList = document.getElementById("comment-list");
    let nom = document.getElementById("last-name").value;
    let prenom = document.getElementById("first-name").value;
    let error = document.getElementById("error-message");
    let message = document.getElementById("message").value;

    // Si un champ est vide, on affiche le message d'erreur
    if (nom === '' || prenom === '' || message === '') {
        error.style.display = "block";
    } else {
        error.style.display = "none";  // Cache le message d'erreur

        // Création d'un nouvel élément pour le commentaire
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.gap = "15px";
        div.style.marginLeft = "-10px";
        div.style.fontSize = "14px";  
        div.style.color = "#4B5563"; 

        // Création du div pour le contenu du commentaire
        let contentDiv = document.createElement("div");
        contentDiv.style.flexGrow = "1";
        contentDiv.style.paddingTop = "20px";
        contentDiv.style.borderTop = "1px solid #E5E7EB";
        contentDiv.style.paddingLeft = "10px";

        // Création du titre du commentaire (prénom + nom)
        let title = document.createElement("h3");
        title.style.fontWeight = "500";
        title.style.color = "#1F2937";
        title.textContent = prenom + " " + nom;

        // Création du paragraphe pour le message
        let messagePara = document.createElement("p");
        messagePara.style.marginTop = "12px";
        messagePara.style.marginBottom = "30px";
        messagePara.style.color = "#6B7280";
        messagePara.style.maxWidth = "100%";
        messagePara.textContent = message;

        // Ajouter le titre et le message au contenu du commentaire
        contentDiv.appendChild(title);
        contentDiv.appendChild(messagePara);

        div.appendChild(contentDiv);

        commentList.appendChild(div);

        form.reset();
    }
}