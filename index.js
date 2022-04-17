const hex= [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
//#f14025
const btn = document.querySelector("#btn")
const color = document.querySelector(".color")
const body = document.querySelector("body")


btn.onclick = () => {
    let hexColor="#"
    for (let i = 0; i < 6; i++) {
        hexColor+= hex[Math.floor(Math.random()*hex.length)]
    }
    color.textContent = hexColor;
    body.style.backgroundColor= hexColor;
}