let cadreContenu = document.getElementById("grid-container");
let text = document.getElementById("letter");

cadreContenu.style.display = "grid";
cadreContenu.style.gridTemplateColumns = "repeat(13,1fr)";
cadreContenu.style.gridGap = "10px";
cadreContenu.style.width = "100%";

text.style.display = "grid";
text.style.gridTemplateColumns = "repeat(13,1fr)";
text.style.width = "100%";
text.style.height = "50vh";
text.style.margin = "30px auto";
text.style.alignItems = "center";
text.style.border = "1px solid black";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let element of alphabet) {
  let create = document.createelementent("div");
  create.innerHTML = element;
  create.setAttribute("id", "grid");
  create.style.backgroundColor = "black";
  create.style.color = "white";
  create.style.padding = "30px";
  create.style.textAlign = "center";
  create.setAttribute("draggable", "true");
  create.addEventListener("dragstart", dragStart);
  create.addEventListener("dragend", dragEnd);
  create.addEventListener("mouseout", colorClear);
  cadreContenu.appendChild(newDiv);
}

text.addEventListener("dragover", allowDrop);
text.addEventListener("drop", dragDrop);

function dragStart(event) {
  event.currentTarget.style.backgroundColor = "gray";
}

function dragDrop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let box = document.getElementById(data);
  event.target.appendChild(box);
}

function allowDrop(event) {
  event.preventDefault();
}

function dragEnd(event) {
  let _x = event.clientX;
  let _y = event.clientY;
  console.log(event);
  event.target.style.left = _x + "px";
  event.target.style.top = _y + "px";
  event.target.style.position = "absolute"; 
}

function colorClear(event) {
  event.currentTarget.style.backgroundColor = "black";
}


/* Reste à limiter la zone de deplacement  */