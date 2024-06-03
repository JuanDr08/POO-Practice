import * as m from "./index.js";

export class Heroe extends m.Criatura{ //Desciende de criatura
    constructor(name, instanciaInvt){ //Se le da el nombre
        super(name); // Se sobrecarga el construcor madre
        this.inventario = instanciaInvt;
    }
}