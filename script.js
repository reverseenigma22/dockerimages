function bookTicket(){

let name=document.getElementById("name").value;

let from=document.getElementById("from").value;

let to=document.getElementById("to").value;

document.getElementById("ticket").innerHTML=

`✅ Ticket Booked Successfully<br>
Passenger : ${name}<br>
${from} ➜ ${to}`;

}
