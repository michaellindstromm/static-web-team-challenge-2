let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

let index = 1;
let index2 = 1;

function create(event){
  event.currentTarget.removeEventListener("click", create)
  event.currentTarget.classList.toggle("borderToggle");
  let thisDiv = event.currentTarget;
  thisDiv.id = `div${index}`
  let formArea = document.getElementById("form");
  let form = document.createElement("form");
  form.id = `currentForm${index}`;
  let button = document.createElement("input");
  button.type = "button";
  button.id = `colorButton${index}`;
  let input = document.createElement("input");
  input.id = `colorInput${index}`;
  form.appendChild(button);
  form.appendChild(input);
  formArea.appendChild(form);
  event.currentTarget.addEventListener("click", destroy);
  let colorButton = document.getElementById(`colorButton${index}`);
  let colorInput = document.getElementById(`colorInput${index}`);
  let thatDiv = document.getElementById(`div${index}`);
  function creatColor(){
    thatDiv.style.backgroundColor = colorInput.value;
  }
  colorButton.addEventListener("click", creatColor)
  index++;
}

function destroy(event){
  let formArea = document.getElementById("form");
  let thisForm = document.getElementById(`currentForm${index2}`)
  console.log(thisForm);
  event.currentTarget.removeEventListener("click", destroy)
  formArea.removeChild(thisForm);
  event.currentTarget.classList.toggle("borderToggle");
  event.currentTarget.addEventListener("click", create);
  index2++;
}




div1.addEventListener("click", create);
div2.addEventListener("click", create);
div3.addEventListener("click", create);
