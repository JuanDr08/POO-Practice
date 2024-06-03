//Se separa la logica de combate de la clase juego, creando una nueva plantilla
//que contendrá todo lo relacionado al combate, a su vez, en juego habrá una propiedad
//que instanciará la clase combate

export class Combate {
    atacar(damage){
        if (this.monsterLife > 0){
            this.setMonsterLife -= damage
            this.loguear = (`Atacas al monstruo! Le quitas ${damage} de vida`)
        }else this.loguear("No puedes atacar, ya has derrotado al monstruo,investiga otro")
    }
}