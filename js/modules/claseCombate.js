//Se separa la logica de combate de la clase juego, creando una nueva plantilla
//que contendrá todo lo relacionado al combate, a su vez, en juego habrá una propiedad
//que instanciará la clase combate

import * as m from './index.js'

export class Combate {
    atacar(damage, monsterLife){
        let dmg = monsterLife - damage
        let mensaje = `Atacas al monstruo! Le quitas ${damage} de vida`
        return [dmg, mensaje]
    }
}