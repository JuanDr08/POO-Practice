//Se separa la logica de combate de la clase juego, creando una nueva plantilla
//que contendrá todo lo relacionado al combate, a su vez, en juego habrá una propiedad
//que instanciará la clase combate

import * as m from './index.js'

export class Combate {
    juego = new m.Juego
    atacar(damage){
        if (this.juego.monsterLife > 0){
            this.juego.setMonsterLife -= damage
            this.juego.loguear = (`Atacas al monstruo! Le quitas ${damage} de vida`)
        }else this.juego.loguear("No puedes atacar, ya has derrotado al monstruo,investiga otro")
    }
}