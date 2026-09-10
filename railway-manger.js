
const trips = require("./data");
const prompt = require("prompt-sync")();
function aficherMenuPrincipal(){

let choix;
do{
console.log("=================================");
console.log("RAILWAY MANAGER");
console.log("=================================");
console.log("1. Afficher les trajets");
console.log("2. Acheter un ticket");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets");
console.log("7. Trier les trajets");
console.log("8. Nombre total de tickets vendus   ")
console.log("9. Chiffre d'affaires total :  ")
console.log("0. Quitter");
choix = (   Number(prompt("Votre choix :" )));

switch(choix) {
  case 1:
     affichertrajets();
     break;
  case 2:
      acheterTicket();
      affichertickets();
     break;
  case 3:
    affichertickets();
     break;
  case 4:
      annulerticket();
     break;
  case 5:
      rechercherticket();
     break;
  case 6:
      filtrertrajets();
     break;   

 case 7:
     Triertrajets();
     break;
 case 8:
    Nbrtotalticketsvendus()
      break;
   case 9:
    ChiffredaffairestotaL()
      break;    

 case 0:
    console.log(" byyyy")
     break;
 default:
         console.log("Choix invalide.");
}
    
} while (choix !== 0);
}

function affichertrajets(){
    console.log("=== TRAJETS DISPONIBLES ===");
    for ( let trip of trips ){
        if ( trip.availableSeats>0) {
console.log (`#${trip.id} ${trip.departure} -> ${trip.destination}` );
console.log (`Dèpart:${trip.departureTime}` );
console.log (`Arrivèe: ${trip.arrivalTime} ` );
console.log (`prix: ${trip.price} ` );
console.log (`Places disponibles: ${trip.availableSeats} ` );
console.log("---------------------------");
}

}
}
let tickets=[];
  function acheterTicket(){
let nompassger=   prompt("Nom du passager :")
 let idtrajet=  Number(prompt("Identifiant du trajet : "))
  let trajetrouv= false
 for ( let trajet of trips){
    if (trajet.id ===idtrajet) {
        trajetrouv= true;
    
    if(trajet.availableSeats>0 ){
    
     let ticket ={
    id :tickets.length +1,
     passengerName: nompassger,
      tripId: idtrajet,
       seatNumber: 50- trajet.availableSeats +1,
       price:trajet.price,
     };
     trajet.availableSeats--;
      tickets.push(ticket); 
      console.log("Ticket acheté avec succès.");
      console.log(`trajet #${ticket.id}`);
      console.log(`Passager :${ ticket.passengerName}`);
      console.log(`Trajet:${trajet.departure} -> ${trajet.destination} `);
      console.log(`Place: ${ticket.seatNumber}`);
      console.log(`Prix:${ ticket.price}`);
    } else{
   console.log("Train complet.")}
   break;
} 
 
}
 if (!trajetrouv){
 console.log("Trajet introuvable.")
 }

}

function affichertickets(){
    
    for ( let ticket of tickets ){
        let trajet = trips.find(function(trip) {
            return trip.id === ticket.tripId;
             });

console.log("=== TICKETS ===");
console.log(`trajet #${ticket.id}`);
      console.log(`Passager :${ ticket.passengerName}`);
      console.log(`Trajet:${trajet.departure} -> ${trajet.destination} `);
      console.log(`Place: ${ticket.seatNumber}`);
      console.log(`Prix:${ ticket.price}`);
      
}
}
function annulerticket(){
    let idticket= Number( prompt("Identifiant du ticket:" ));
    let trouv= false;
    for ( let ticket of tickets){
        if (ticket.id===idticket){
            trouv= true;
            tickets.splice( tickets.indexOf(ticket),1)
            for (let trajet of trips) {
                if (trajet.id === ticket.tripId) {
                    trajet.availableSeats++;
                }
            }

            console.log("Ticket annulé avec succès.");
            break;


        }  
        
    }

    if (!trouv){
    console.log("Ticket introuvable.");}
}
function rechercherticket(){
let nompassger= prompt(" entre le nom de passager :");
let trouv= false;
for ( let ticket of tickets){
    if ( ticket.passengerName===nompassger){
        trouv= true;
     console.log("=== TICKET of the name ===");
            console.log(`Ticket #${ticket.id}`);
            console.log(`Passager : ${ticket.passengerName}`);
            console.log(`Place : ${ticket.seatNumber}`);
            console.log(`Prix : ${ticket.price} DH`);
            console.log("-------------------");
    }
}
if (!trouv){
    console.log(" le nom pas trouve")}

}

 function filtrertrajets(){
let villdepart= prompt( " ville de depart :")
for ( let  trajet of  trips){
   if ( trips.filter(  trajet=> trips.departure ===villdepart )){
    console.log(`${ villdepart} ->${ trajet.destination } : ${ trajet.price } DH`)


   }
}



 }
 function Triertrajets(){
    console.log("------- traje trier--------")
let resulta=[...trips]
resulta.sort((a,b)=>a.price - b.price )
     for ( let  trajet of resulta){
        
        console.log(` ${trajet.departure} -> ${ trajet.destination} : ${ trajet.price} DH` );


     }

 }
 function Nbrtotalticketsvendus(){

     console.log(`Nombre de tickets : ${tickets.length}`);


 }
  function ChiffredaffairestotaL(){
let sum=0;
for ( let ticket of tickets)
    sum+=ticket.price;
console.log(` Chiffre d'affaires total : ${sum}`);





  }
function Trajetplusvendu



 acheterTicket()












    
    
        




