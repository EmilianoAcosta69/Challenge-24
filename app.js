// Realice un programa donde un personaje abra 10 cofres, los cofres pueden contener: 10 de oro, 2 pociones de vida, nada.
// a. Indique el oro final recolectado
// b. Indique cuantas pociones de Vida obtuvo
// c. Indique cuantos cofres vacíos hubo
// d. Cada vez que abre un cofre indique qué saco

let cofreVacio = 0;
let oro = 0;
let pociones = 0;
let cofreNoAbierto = 0;
let abrir = true;


for(let i = 1; i <= 10 ; i++){

        abrir = confirm('Desea abrir el cofre?');
        if(abrir == false){
            alert(`Usted no quiso abrir el cofre numero ${i}, No se llevo ninguna recompensa.`);
            cofreNoAbierto = cofreNoAbierto + 1;
        }else{
            switch(Math.floor(Math.random() * 3)){
                case 0:
                    console.log(`El cofre numero ${i} contenia 10 de oro`);
                    oro = oro + 10;
                    break;
                case 1:
                    console.log(`El cofre numero ${i} contenia 2 pociones de vida`);
                    pociones = pociones + 2;
                    break;
                case 2:
                    console.log(`El cofre numero ${i} estaba vacio`);
                    cofreVacio = cofreVacio + 1;
                    break;
            }
        }
    }
console.log(`Oro recolectado: ${oro}`);
console.log(`Pociones de vida obtenidas: ${pociones}`);
console.log(`Cofres Vacios Abiertos: ${cofreVacio}`);
console.log(`Cofres No Abiertos: ${cofreNoAbierto}`);