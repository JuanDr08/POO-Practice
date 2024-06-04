import * as m from './index.js'

export class Juego {
    historial = [];
    #monster;
    #monsterLife = 0;
    combate = new m.Combate; //Instanciamos la clase combate para ser usada
    // SETTERS & GETTERS
    constructor(invt, herolife){
        this.inventario = invt
        this.heroLife = herolife
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
        alert(accion)
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
                this.inventario.agregar(new m.Item("poscion"))
                return "poscion"
            }
            return this.monster
        }else this.loguear("No puedes investigar, el monstruo actual sigue vivo")
        
    }
    ejecutar(accion, damage = 0){
        if(accion == "monsterAttack") {
            let vals = this.combate.atacar(damage, this.heroLife, 1)
            this.heroLife = vals[0]
            this.loguear(vals[1])
            return vals[0]
        }
        if (accion == "atacar"){
            if(this.monsterLife > 0) {
                let vals = this.combate.atacar(damage, this.monsterLife)
                this.setMonsterLife = vals[0]
                this.loguear(vals[1])
                return vals[0]
            }
        }else if (accion == "investigar") {
            return this.#investigar()
        }
    }
    listarItems(){
        return this.inventario.listarItems()
    }
    utilizarItem(item){
        return this.inventario.utilizarItem(item)
    }
}

//Evaluar la posibilidada de que las estadisticas se entrelacen por las clases y no con las internas de la clase juego, es decir recibir parametros los cuales sean las estadisticas reales de los monstruos