
const trips = require("./data");
const prompt = require("prompt-sync")();
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
affichertrajets();
let tickets=[];
  function acheterticket(){
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



acheterticket();
affichertickets();


rechercherticket();
filtrertrajets()

    
    
        




