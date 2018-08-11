var pseudo = prompt("Entrez votre pseudo");

var password = prompt("Entrez votre mot de passe");

        if (password === pseudo) {
        document.getElementById("resultat").innerHTML =
        "Connexion réussie";
        resultat.style.color = "green";
        alert("Connexion réussie !")
        }

        else {
        resultat.innerHTML = "Erreur, veuillez recommencer";
        resultat.style.color = "red";
        alert("Erreur, veuillez recommencer")
        }