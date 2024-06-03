import * as m from './index.js'

export class Juego {
    historial = [];
    #monster = "";
    #monsterLife = 100;
    combate = new m.Combate; //Instanciamos la clase combate para ser usada
    // SETTERS & GETTERS
    constructor(invt){
        this.inventario = invt
    }
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
            let rand = Math.trunc(Math.random() * 4) + 1 //Numero aleatorio entre 1 y 4
            if(rand == 1) {
                this.setMonster = "Orco"
                this.setMonsterLife = 130
                this.loguear("Ha aparecido un Orco salvaje!")
            } else if (rand == 2) {
                this.setMonster = "Kobold"
                this.setMonsterLife = 115
                this.loguear("Ha aparecido un Kobold salvaje!")
            } else if (rand == 3) {
                this.setMonster = "Goblin"
                this.setMonsterLife = 100
                this.loguear("Ha aparecido un Goblin salvaje!")
            } else {
                this.setMonster = ""
                this.setMonsterLife = 0
                this.loguear("Has encontrado una pocion!")
                this.inventario.push("poscion")
            }
            return this.monster
        }else this.loguear("No puedes investigar, el monstruo actual sigue vivo")
        
    }
    ejecutar(accion, damage = 0){
        if (accion == "atacar"){
            if(this.monsterLife > 0) {
                let vals = this.combate.atacar(damage, this.monsterLife)
                this.setMonsterLife = vals[0]
                this.loguear(vals[1])
            } else this.loguear("No puedes atacar, ya has derrotado al monstruo,investiga otro")
        }else if (accion == "investigar") {
            this.#investigar
        }
    }
    listarItems(){
        this.inventario.listarItems()
    }
    utilizarItem(item){
        this.inventario.utilizarItem(item)
    }
}

//Evaluar la posibilidada de que las estadisticas se entrelacen por las clases y no con las internas de la clase juego, es decir recibir parametros los cuales sean las estadisticas reales de los monstruos