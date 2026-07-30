const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {

res.send(`

<html>

<head>

<title>Gaming Portal</title>

<style>

body{

background:#111827;

color:white;

font-family:Arial;

text-align:center;

padding-top:100px;

}

button{

padding:15px;

font-size:22px;

background:#7c3aed;

color:white;

border:none;

border-radius:8px;

cursor:pointer;

}

button:hover{

background:#9333ea;

}

</style>

</head>

<body>

<h1>🎮 Gaming Portal</h1>

<h2>Welcome Gamer!</h2>

<h3>Play PUBG, FIFA, GTA V</h3>

<button>Play Now</button>

</body>

</html>

`);

});

app.listen(PORT,()=>{

console.log("Server Started");

});
