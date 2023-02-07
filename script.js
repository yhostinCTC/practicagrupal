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