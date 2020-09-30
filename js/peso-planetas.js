var caja = document.getElementById("peso");
var caja_planeta = document.getElementById("planeta");
var botoncito = document.getElementById("boton");
var body = document.getElementById("body");
var fondo = document.getElementById("fondo");

botoncito.addEventListener("click", mostrar);

var mercurio = { nombre: "mercurio", peso: 3.7 };
var venus = { nombre: "venus", peso: 8.87 };
var luna = { nombre: "luna", peso: 1.62 };
var tierra = { nombre: "tierra", peso: 9.8 };
var marte = { nombre: "marte", peso: 3.7 };
var jupiter = { nombre: "jupiter", peso: 24.8 };
var saturno = { nombre: "saturno", peso: 10.4 };
var urano = { nombre: "urano", peso: 8.9 };
var neptuno = { nombre: "neptuno", peso: 11.15 };

function mostrar() {
  var tupeso = parseInt(caja.value);
  var planeta = parseInt(caja_planeta.value);

  var peso_final;
  var nombreplaneta;

  if (planeta == 1) {
    peso_final = (tupeso * mercurio.peso) / tierra.peso;
    nombreplaneta = mercurio.nombre;
    fondo.src =
      "http://1.bp.blogspot.com/-AZyuiqVGPBc/UcM2CvWiKhI/AAAAAAAAFbU/OGOdNwdaD6M/s1600/mercurio-color-lupa.jp";
  } else if (planeta == 2) {
    peso_final = (tupeso * venus.peso) / tierra.peso;
    nombreplaneta = venus.nombre;
    fondo.src =
      "https://image.winudf.com/v2/image1/Y29tLmNvZGVrb25kaXRvci52ZW51c19zY3JlZW5fMTFfMTU0MTQxOTgwN18wMDU/screen-11.jpg?fakeurl=1&type=.jpg";
  } else if (planeta == 3) {
    peso_final = (tupeso * luna.peso) / tierra.peso;
    nombreplaneta = luna.nombre;
    fondo.src = "http://radarnews.mx/wp-content/uploads/2018/04/45-4.png";
  } else if (planeta == 4) {
    peso_final = (tupeso * marte.peso) / tierra.peso;
    nombreplaneta = marte.nombre;
    fondo.src =
      "https://i.pinimg.com/originals/69/7c/67/697c67285d5d8fc2f70a59452690d8bd.jpg";
  } else if (planeta == 5) {
    peso_final = (tupeso * jupiter.peso) / tierra.peso;
    nombreplaneta = jupiter.nombre;
    fondo.src =
      "https://www.renderhub.com/virtual-creator-and-creature/incredible-hd-jupiter-planet/incredible-hd-jupiter-planet-03.jpg";
  } else if (planeta == 6) {
    peso_final = (tupeso * saturno.peso) / tierra.peso;
    nombreplaneta = saturno.nombre;
    fondo.src =
      "http://3.bp.blogspot.com/-ccU3XHzKRJQ/Uv7gDqr6vmI/AAAAAAAAAcA/4ifNL6MFpw4/s1600/Bankoboev.Ru_planeta_saturn.jpg";
  } else if (planeta == 7) {
    peso_final = (tupeso * urano.peso) / tierra.peso;
    nombreplaneta = urano.nombre;
    fondo.src = "http://img2.rtve.es/i/?w=1600&i=1520938099246.jpg";
  } else if (planeta == 8) {
    peso_final = (tupeso * neptuno.peso) / tierra.peso;
    nombreplaneta = neptuno.nombre;
    fondo.src =
      "https://marbal.files.wordpress.com/2010/06/neptune__the_mystic_by_shadeforwench.jpg";
  }

  peso_final = parseInt(peso_final);

  document.getElementById("respuestaPeso").innerHTML +=
    " " + nombreplaneta + " es : <strong>" + peso_final + " kilos</strong>";
  console.log(nombreplaneta);
}
