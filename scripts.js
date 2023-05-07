/*
¿Se acuerdan del ejercicio de hace dos clases en el cual capturaron los elementos del DOM? 
Bueno, hoy hay que hacer la misma pagina, pero hay que renderizarla y agregarle algunos estilos a elección desde JS.
*/


// SetAtributte
const title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerHTML = "Registrate en DiabloSoy";

const text = document.createElement("p");
text.setAttribute("id", "text");
text.innerHTML = "Completa los siguientes datos:";

const containerPrimary = document.createElement("div");
containerPrimary.setAttribute("id", "containerPrimary");

const firstname = document.createElement("input");
firstname.setAttribute("id", "firstname");
firstname.setAttribute("class", "form-control");
firstname.setAttribute("name", "firstname");
firstname.setAttribute("type", "text");
firstname.setAttribute("required", "true");
const labelFirstname = document.createElement("label");
labelFirstname.setAttribute("for", "firstname");
labelFirstname.innerHTML = "Nombre*:";

const age = document.createElement("input");
age.setAttribute("id", "age");
age.setAttribute("class", "form-control");
age.setAttribute("name", "age");
age.setAttribute("type", "number");
const labelAge = document.createElement("label");
labelAge.setAttribute("for", "age");
labelAge.innerHTML = "Edad:";

const emailPrimary = document.createElement("input");
emailPrimary.setAttribute("id", "email-primary");
emailPrimary.setAttribute("class", "form-control");
emailPrimary.setAttribute("name", "email-primary");
emailPrimary.setAttribute("type", "email");
emailPrimary.setAttribute("required", "true");
emailPrimary.setAttribute("readonly", "true");
emailPrimary.setAttribute("Value", "gonpablo@gmail.com");
const labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.innerHTML = "Email*:";

const checkboxPileta = document.createElement("input");
checkboxPileta.setAttribute("type", "checkbox");
checkboxPileta.setAttribute("class", "form-check-input");
checkboxPileta.setAttribute("id", "option-1");
checkboxPileta.setAttribute("name", "option-1");
checkboxPileta.setAttribute("value", "Pileta");
checkboxPileta.setAttribute("checked", "True");
const checkboxPiletaLabel = document.createElement("label");
checkboxPiletaLabel.setAttribute("for", "option-1");
checkboxPiletaLabel.setAttribute("class", "form-check-label");
checkboxPiletaLabel.innerHTML = "Pileta";


const checkboxGimnasio = document.createElement("input");
checkboxGimnasio.setAttribute("type", "checkbox");
checkboxGimnasio.setAttribute("class", "form-check-input");
checkboxGimnasio.setAttribute("id", "option-2");
checkboxGimnasio.setAttribute("name", "option-2");
checkboxGimnasio.setAttribute("value", "Gimnasio");
checkboxGimnasio.setAttribute("disabled", "true");
const checkboxGimnasioLabel = document.createElement("label");
checkboxGimnasioLabel.setAttribute("for", "option-2");
checkboxGimnasioLabel.setAttribute("class", "form-check-label");
checkboxGimnasioLabel.innerHTML = "Gimnasio";


const checkboxCanchaTenis = document.createElement("input");
checkboxCanchaTenis.setAttribute("type", "checkbox");
checkboxCanchaTenis.setAttribute("class", "form-check-input");
checkboxCanchaTenis.setAttribute("id", "option-3");
checkboxCanchaTenis.setAttribute("name", "option-3");
checkboxCanchaTenis.setAttribute("value", "Cancha Tenis");
const checkboxCanchaTenisLabel = document.createElement("label");
checkboxCanchaTenisLabel.setAttribute("for", "option-3");
checkboxCanchaTenisLabel.setAttribute("class", "form-check-label");
checkboxCanchaTenisLabel.innerHTML = "Cancha Tenis";


const button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "Enviar";


// AppendChild
const colTop = document.getElementById("col-top");
colTop.appendChild(title);
colTop.appendChild(text);
colTop.appendChild(containerPrimary);

const formGroup1 = document.getElementById("form-group-1");
formGroup1.appendChild(labelFirstname);
formGroup1.appendChild(firstname);

const formGroup2 = document.getElementById("form-group-2");
formGroup2.appendChild(labelAge);
formGroup2.appendChild(age);

const formGroup3 = document.getElementById("form-group-3");
formGroup3.appendChild(labelEmail);
formGroup3.appendChild(emailPrimary);

const formCheck1 = document.getElementById("form-check-1");
formCheck1.appendChild(checkboxPileta);
formCheck1.appendChild(checkboxPiletaLabel);

const formCheck2 = document.getElementById("form-check-2");
formCheck2.appendChild(checkboxGimnasio);
formCheck2.appendChild(checkboxGimnasioLabel);

const formCheck3 = document.getElementById("form-check-3");
formCheck3.appendChild(checkboxCanchaTenis);
formCheck3.appendChild(checkboxCanchaTenisLabel);

const formGroup4 = document.getElementById("form-group-4");
formGroup4.appendChild(button);


// Estilos
button.style.backgroundColor = "#ff0000";
button.style.borderColor = "#ff0000";
title.style.color = "#ff8100";
text.style.fontWeight = "600";
firstname.style.backgroundColor = "#fff8e9";
age.style.backgroundColor = "#fff8e9";
emailPrimary.style.backgroundColor = "#fff8e9";