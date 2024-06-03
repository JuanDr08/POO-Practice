import * as m from "./index.js";

export class Heroe extends m.Criatura{ //Desciende de criatura
    inventario = []
    constructor(name){ //Se le da el nombre
        super(name); // Se sobrecarga el construcor madre
    }

    utilizarItem(item){
        if(this.inventario.includes(item.name)) {
            let cura = item.utilizar(item.name);
            this.inventario.splice(this.inventario.indexOf(item.name), this.inventario.indexOf(item.name))
            this.setVida = this.vida + cura;
        }
        
    }
}