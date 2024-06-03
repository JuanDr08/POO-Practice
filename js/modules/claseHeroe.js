import * as m from "./index.js";

export class Heroe extends m.Criatura{ //Desciende de criatura
    inventario = []
    constructor(name){ //Se le da el nombre
        super(name); // Se sobrecarga el construcor madre
    }
}