import style from "./style.css";
import logo from "./assets/Bardock.png";

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
$logo=d.createElement("img");

$h1.innerHTML="bienvenido curso de WEBPACK";
$logo.src=logo;
$logo.classList.add("pe")

$app.appendChild($h1);
$app.appendChild($logo);