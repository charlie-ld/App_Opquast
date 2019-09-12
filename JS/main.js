// Call DOM => link with fields
const phases = document.getElementById('phases')
const title = document.getElementById("title");
const description = document.getElementById("description");
const objectives = document.getElementById("objectives");
const home = document.getElementById("home");
const glossaireContainer = document.getElementById('glossaire')
const bonnesPratiquesContainer = document.getElementById('bonnesPratiques')

// First Button Bonnes Pratiques
const arrayButton = ["Design",  "Développement", "Projet", "Intégration", "Rédaction", "Prototype"] 
const container = document.getElementById('container_array');

function addButton() 
{ 
    for (i = 0; i < arrayButton.length; i++) { // Boucle for create button
        var btn = document.requeteur; // Name requeter (index.html)
        var button = document.createElement("input"); // Create element input for each button
        button.type="button";
        button.value= arrayButton[i]; // Get the value value from the arrayButton 
        btn.appendChild(button); 
        button.addEventListener('click', (e) => {
            bonnesPratiques.forEach(function(element) { // Get all elements pratiques.js => by category
                if (element.phases.includes(e.target.value))
                {
                    container.innerHTML += '<br>' + element.title + '<br> <br>' + element.objectives + '<br> <br> <br>';
                }
            });
        });
    }
}    

// Function call Glosaire title & description
 function myFunction () { 
    glossaire.map(item => { // get ID glossaire index.html
        glossaireContainer.innerHTML += `<div><div><strong>${item.title}</strong></div><br/><div>${item.description}</div></div><br/><br/>`;
        // Get each elements title & description (boucle => array glossaire)
    })
}
