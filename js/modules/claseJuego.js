import * as m from './index.js'

export class Juego {
    historial = [];
    #monster = "";
    #monsterLife = 100;
    combate = new m.Combate //Instanciamos la clase combate para ser usada
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
    loguear(accion) { // METODO QUE PERMITE REGISTRAR EL HISTORIAL DEL JUEGO
        this.historial.push(accion)
        console.log(accion);
    }
    #investigar(){
        if (this.monsterLife <= 0){
            let rand = Math.trunc(Math.random() * 3) + 1 //Numero aleatorio entre 1 y 3
            if(rand == 1) {
                this.setMonster = "Orco"
                this.loguear("Ha aparecido un Orco salvaje!")
            } else if (rand == 2) {
                this.setMonster = "Kobold"
                this.loguear("Ha aparecido un Kobold salvaje!")
            } else {
                this.setMonster = "Goblin"
                this.loguear("Ha aparecido un Goblin salvaje!")
            }
            return this.monster
        }else this.loguear("No puedes investigar, el monstruo actual sigue vivo")
        
    }
    ejecutar(accion, damage){
        if (accion == "atacar"){
            this.combate.atacar = damage
        }else if (accion == "investigar") {
            this.#investigar
        }
    }
}

//Evaluar la posibilidada de que las estadisticas se entrelacen por las clases y no con las internas de la clase juego, es decir recibir parametros los cuales sean las estadisticas reales de los monstruos