import * as m from "./clasesAbstractas.js";

export class Orco extends m.Monstruo { //Mas fuertes
    constructor(){
        super("Orco");
    }
}
export class Goblin extends m.Monstruo { //Mas debiles
    constructor(){
        super("Goblin");
    }
}
export class Kobold extends m.Monstruo { //Segundos
    constructor(){
        super("Kobold");
    }
}