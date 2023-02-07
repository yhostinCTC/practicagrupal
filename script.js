document.getElementsByClassName("card_parrafo").innerHTML = "Este texto ha sido cambido por mi"
if (confirm("Preciona el boton!")) {
    txt = "Tu precionastes OK!";
  } else {
    txt = "Tu precionastes Cancelar!";
  }

alert("Hola! Quien eres?");

let person = prompt("Porfavor escribe tu nombre", "Escribe tu nombre aqui");
let text;
if (person == null || person == "") {
  text = "El usuario cancelo el mensaje.";
} else {
  text = "Hola " + person + "!Como estas hoy?";
}

document.getElementsByClassName("container-1")[0].innerHTML +=
'<p>Párrafo de texto</p>'
