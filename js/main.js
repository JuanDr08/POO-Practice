import * as m from './modules/index.js'

//5. Chequear si el juego está terminado o no (si `Heroe` no tiene vida), e impedir hacer acciones si lo está
//6. Permitir reiniciar el juego
//13. agregar pocion a inventario

const invt = new m.Inventario
const hero = new m.Heroe("carlos", invt)
console.log(hero);