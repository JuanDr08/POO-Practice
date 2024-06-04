export class Inventario {
    #inventario = []


    agregar(item) {
        this.#inventario.push(item)
    }
    removerItem(item){
        this.#inventario.splice(this.#inventario.indexOf(item),this.#inventario.indexOf(item))
    }
    listarItems(){
        return this.#inventario
    }
    utilizarItem(item){
        if(this.#inventario.includes(item)) {
            let cura = item.utilizar(item.name);
            this.#inventario.splice(this.#inventario.indexOf(item), this.#inventario.indexOf(item) + 1)
            console.log(this.#inventario);
            return cura
        }
    }
}