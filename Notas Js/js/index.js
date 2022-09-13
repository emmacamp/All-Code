/*- Crear la clase Estudiante con los atributos:
nombre, apellido, matricula y nota.
- Crear un documento html con cajas de texto para cada uno de los atributos: nombre, apellido, matricula y nota. Agregar un botón "Agregar".
- Con JS manejar el evento click del botón para que tome las informaciones de las cajas de texto y las asigne a un nuevo objeto de tipo Estudiante. El nuevo objeto se debe almacenar en un arreglo.
- Crear un botón "Mostrar estudiantes" que muestre una lista (en html) de todos los estudiantes con cada uno de sus datos ( nombre, apellido, matricula y nota ). Debe crear una función para esto y manejarla con el evento click.
- Mientras se vayan agregando los estudiantes se debe mostrar automáticamente el promedio, la nota máxima y la nota mínima. (Cada una de ellas deben ser calculadas y retornadas con funciones independientes).
- Aplicar estilos a su html para dar un toque agradable a la UI.
*/

let estudiantes = localStorage.getItem("estudiantes")
	? JSON.parse(localStorage.getItem("estudiantes"))
	: [];

class Estudiante {
	constructor(nombre, apellido, matricula, nota) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.matricula = matricula;
		this.nota = nota;
	}
}

const form = document.querySelector("form");
form.addEventListener("submit", e => {
	e.preventDefault();
	agregarEstudiante();
});
let notaMask = IMask(document.getElementById("nota"), {
	mask: "000",
});
let matriculaMask = IMask(document.getElementById("matricula"), {
	mask: "0000-0000",
});

function agregarEstudiante() {
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let matricula = matriculaMask._value;
	let nota = validate(notaMask._value);
	if (!allValidates(nombre, apellido, matricula, nota)) return;
	let estudiante = new Estudiante(nombre, apellido, matricula, nota);
	estudiantes.push(estudiante);
	localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
	limpiarCampos();
	mostrarEstudiantes();
}

function validate(notaMask) {
	let number = parseInt(notaMask);
	if (number < 0 || number > 100) {
		alert("La nota debe estar entre 1 y 100");
		return;
	}
	return number;
}
function allValidates(nombre, apellido, matricula, nota) {
	let validate = true;
	if (nombre === "") validate = false;
	if (apellido === "") validate = false;
	if (!matricula) validate = false;
	if (!nota) validate = false;
	if (validate) {
		return true;
	} else {
		alert("por favor llene todos los campos");
		return false;
	}
}
function limpiarCampos() {
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("matricula").value = "";
	document.getElementById("nota").value = "";
}

function mostrarEstudiantes() {
	const container = document.querySelector(".personas");
	const notesContainer = document.querySelector(".notas");
	let min = getMinNote() ? getMinNote() : 0;
	let max = getMaxNote() ? getMaxNote() : 0;
	let avg = getAvgNote();
	notesContainer.innerHTML = `<p>minima: <span>${min}</span> </p>
    <p>maxima: <span>${max}</span> </p>
    <p>promedio: <span>${avg}</span> </p>`;
	container.innerHTML = "";
	for (let i = 0; i < estudiantes.length; i++) {
		container.innerHTML += `<div class="persona">
    <h2>Nombre:  <span>${estudiantes[i].nombre}</span></h2>
    <h2>Apellido:     <span>${estudiantes[i].apellido}</span></h2>
    <h2>Matricula:    <span>${estudiantes[i].matricula}</span></h2>
    <h2>Nota:         <span>${estudiantes[i].nota}</span></h2>
    </div>`;
	}
}
function getMinNote() {
	let min = estudiantes[0].nota;
	for (let i = 0; i < estudiantes.length; i++) {
		if (estudiantes[i].nota < min) {
			min = estudiantes[i].nota;
		}
	}
	return min;
}
function getMaxNote() {
	let max = estudiantes[0].nota;
	for (let i = 0; i < estudiantes.length; i++) {
		if (estudiantes[i].nota > max) {
			max = estudiantes[i].nota;
		}
	}
	return max;
}
function getAvgNote() {
	let avg = 0;
	for (let i = 0; i < estudiantes.length; i++) {
		avg += estudiantes[i].nota;
	}
	return avg / estudiantes.length;
}
