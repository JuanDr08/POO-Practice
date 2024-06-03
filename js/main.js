import * as m from './modules/index.js'

//5. Chequear si el juego está terminado o no (si `Heroe` no tiene vida), e impedir hacer acciones si lo está
//6. Permitir reiniciar el juego

const hero = new m.Juego
hero.ejecutar("atacar", 10)
hero.loguear("Te has follado al monstruo")
console.log(hero.historial);