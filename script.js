function bookMovie(){

let movie=document.getElementById("movie").value;

let seat=document.getElementById("seat").value;

document.getElementById("result").innerHTML=

"✅ "+seat+

" Ticket(s) booked for <br><br>"+movie;

}
