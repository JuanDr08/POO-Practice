//Se separa la logica de combate de la clase juego, creando una nueva plantilla
//que contendrá todo lo relacionado al combate, a su vez, en juego habrá una propiedad
//que instanciará la clase combate

import * as m from './index.js'

export class Combate {
    atacar(damage, monsterLife, monster = 0){
        let dmg;
        let mensaje;
        if(monsterLife < damage) dmg = monsterLife - monsterLife
        else {
            dmg = monsterLife - damage
        }
        monster ? mensaje = `El monstruo te ha atacado, te quita ${damage} de vida` : mensaje = `Atacas al monstruo! Le quitas ${damage} de vida`
        return [dmg, mensaje]
    }
}