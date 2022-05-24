import style from "./style.css";
import logo from "./assets/Bardock.png";
import data from "./assets/data.json"

const arr =[1,2,3],
fun=()=>{
    console.log(...arr);
}
console.log("hola")
fun();

//document.querySelector("#app").innerHTML=`<img src="${logo}" alt="bardock"><img/>`;

const d=document,
$app=d.getElementById("app"),
$h1=d.createElement("h1"),
$logo=d.createElement("img"),
$nav =d.createElement("nav");

let menu="";

data.links.forEach((ind)=>{
    console.log(ind); 
    menu+=`<a href="${ind[1]}">${ind[0]}</a>`
});

$nav.innerHTML=menu;

$h1.innerHTML="bienvenido curso de WEBPACK";
$logo.src=logo;
$logo.classList.add("pe")

$app.appendChild($h1);
$app.appendChild($nav);
$app.appendChild($logo);