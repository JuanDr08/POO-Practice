export class Criatura {
    #vida = 100; //Dependerá del daño que se este recibiendo o elementos para recuperarla
    #vidaMaxima = 100; //Dependera del equipamiento y nivel del personaje, por defecto es 100 pero puede incrementar
    #ataque = 10; //Dependerá de la fuerza e instrumentos que el personaje posea
    constructor(nombre){
        if (this.constructor === Criatura) throw new Error("No puedes instanciar una clase abstracta")// Clase abstracta, solo sirve de plantilla, no realiza funciones
            this.nombre = nombre; // El nombre si o si deberá ser pasado para crear la criatura
    }
}

export class Monstruo extends Criatura {
    constructor(nombre){ // Se deberá declarar el nombre
        if (this.constructor === Monstruo) throw new Error("No puedes instanciar una clase abstracta")
        super(nombre); // Se pasa el nombre a la clase abstracta 
    }
}