import * as m from './index.js'

export class Juego {
    historial = [];
    #monster = "";
    #monsterLife = 100;

    // SETTERS & GETTERS
    set setMonster(mon){
        this.#monster = mon;
    }
    set setMonsterLife(life){
        this.#monsterLife = life;
    }
    get monster(){
        return this.#monster;
    }
    get monsterLife(){
        return this.#monsterLife;
    }
    // METODOS
    loguear(ataca = "", accion) { // METODO QUE PERMITE REGISTRAR EL HISTORIAL DEL JUEGO
        if (ataca){
            this.historial.push(accion)
            console.log(accion);
        }else {
            this.historial.push(accion)
            console.log(accion);
        }
    }
    investigar(){
        if (this.monsterLife == 0){
            let rand = Math.trunc(Math.random() * 3) + 1 //Numero aleatorio entre 1 y 3
            if(rand == 1) {
                this.setMonster = "Orco"
                this.loguear("", 0, "Ha aparecido un Orco salvaje!")
            } else if (rand == 2) {
                this.setMonster = "Kobold"
                this.loguear("", 0, "Ha aparecido un Kobold salvaje!")
            } else {
                this.setMonster = "Goblin"
                this.loguear("", 0, "Ha aparecido un Goblin salvaje!")
            }
            return this.monster
        }else this.loguear("", "No puedes investigar, el monstruo actual sigue vivo")
        
    }

    atacar(damage){
        if (this.monsterLife > 0){
            this.setMonsterLife -= damage
            this.loguear = ("Y", `Atacas al monstruo! Le quitas ${damage} de vida`)
        }else this.loguear("", "No puedes atacar, ya has derrotado al monstruo, investiga otro")
    }
}