const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById('pid');
const input = document.querySelector("input");

h1.innerHTML = "Patito <br> Feo";
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("verde");

input.value = "456";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/10526915/pexels-photo-10526915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
console.log(img);

pid.append(img);
