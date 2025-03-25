// Pedir cuántas personas se van a registrar
let cantidad = parseInt(prompt("¿Cuántas personas vas a registrar?"));
let personas = [];

// Pedir los datos de cada persona
for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Persona ${i + 1} - Nombre:`);
    let edad = parseInt(prompt(`Persona ${i + 1} - Edad:`));
    let nota = parseFloat(prompt(`Persona ${i + 1} - Nota:`));
    personas.push([nombre, edad, nota]);
}

// Mostrar lista original
console.log("Lista original:");
personas.forEach((p) => {
    console.log(`Nombre: ${p[0]}, Edad: ${p[1]}, Nota: ${p[2]}`);
});

// Ordenar por nota de mayor a menor
let ordenado = personas.slice().sort((a, b) => b[2] - a[2]);

// Mostrar lista ordenada
console.log("Lista ordenada por nota (mayor a menor):");
ordenado.forEach((p) => {
    console.log(`Nombre: ${p[0]}, Edad: ${p[1]}, Nota: ${p[2]}`);
});
