import * as m from "./clasesAbstractas.js";

export class Orco extends m.Monstruo { //Mas fuertes
    constructor(name){
        super(name);
    }
}
export class Goblin extends m.Monstruo { //Mas debiles
    constructor(name){
        super(name);
    }
}
export class Kobold extends m.Monstruo { //Segundos
    constructor(name){
        super(name);
    }
}