const prenom = document.getElementById("pre");
const nom = document.getElementById("nom");
const date = document.getElementById("date");
const email = document.getElementById("email");

let tabPersonnes =[];

function generer(){
    let nomValue = nom.value.trim();
    let prenomValue=prenom.value.trim();
    let dateValue = date.value.trim();
    let emailValue = "";
    if(nomValue != "" && prenomValue != "" && dateValue != ""){
        emailValue= prenomValue[0] + nomValue + dateValue.split("-")[0] + "@sonatel.com";
        email.value= emailValue.toLowerCase();
    }else{
        alert ("Veuillez remplir tous les champs svp");
    }
}

function enregistrer(){
    let nomValue = nom.value.trim();
    let prenomValue=prenom.value.trim();
    let dateValue = date.value.trim();
    let emailValue = email.value;
    if(nomValue !="" && prenomValue !="" && dateValue !="" && emailValue !=""){
        let personnes ={
            "prenom":prenomValue,
            "nom":nomValue,
            "date":dateValue,
            "email":emailValue
        };
        tabPersonnes.push(personnes);
    }else{
        alert ("Tous les champs sont obligatoires");
    }


    console.table(tabPersonnes);
    ViderChamps();
    AjoutDansLeTableau();

    
    
    
}
function ViderChamps(params){
    prenom.value = "";
    nom.value = "";
    date.value = "";
    email.value = "";
}
function AjoutDansLeTableau(){
    list.innerHTML="";
    tabPersonnes.forEach((element, i) => {
        let trElement = `
            <tr>
                <td class="text-center ">${i+1}</td>
                <td class="text-center ">${element?.prenom || ''}</td>
                <td class="text-center ">${element.nom}</td>
                <td class="text-center ">${element.date}</td>
                <td class="text-center ">${element.email}</td>
                <td width="20%" class="text-center" d-flex justify-content-between >
                 
                <button onclick="supprimerPerso('${i}')" class="btn btn-outline-danger btn-sm ">X</button>
                </td>
                
            </tr>
        
        `;
        list.innerHTML += trElement;

    });   
}

// function modification(position){
//     let p =tabPersonnes[position]
//     prenom.value=p.prenom;
//     nom.value= p.nom;
//     date.value=p.date;
//     email.value=p.email;
//     button.setAttribute("idPerso", position);
// }

function supprimerPerso(position){
    if(confirm("voulex vous supprimer cette personne")){
    tabPersonnes.splice(position, 1);
    AjoutDansLeTableau(); 
    };
    
}
