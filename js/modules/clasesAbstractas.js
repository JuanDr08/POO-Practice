export class Criatura {
    #vida = 100; 
    #vidaMaxima = 100; 
    #ataque = 10;
    constructor(nombre){
        if (this.constructor === Criatura) throw new Error("No puedes instanciar una clase abstracta")// Clase abstracta, solo sirve de plantilla, no realiza funciones
        this.nombre = nombre; // El nombre si o si deberá ser pasado para crear la criatura
    }
    get vida(){ // Getters y setters creados para facilitar la manipulacion de las propiedades
        return this.#vida;
    }
    get vidaMax(){
        return this.#vidaMaxima;
    }
    get ataque(){
        return this.#ataque;
    }
    set setVida(newVida){
        this.#vida = newVida;
    }
    set setVidaMax(newVidaMax){
        this.#vidaMaxima = newVidaMax;
    }
    set setAtaque(newAtack){
        this.#ataque = newAtack;
    }
}

export class Monstruo extends Criatura {
    constructor(nombre){ // Se deberá declarar el nombre
        super(nombre); // Se pasa el nombre a la clase abstracta 
        if (this.constructor === Monstruo) throw new Error("No puedes instanciar una clase abstracta")
    }
}