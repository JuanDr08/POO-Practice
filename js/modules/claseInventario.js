export class Inventario {
    inventario = []


    agregar(item) {
        this.inventario.push(item)
    }
    removerItem(item){
        this.inventario.splice(this.inventario.indexOf(item),this.inventario.indexOf(item))
    }
    listarItems(){
        this.inventario.forEach(val => console.log(val))
    }
    utilizarItem(item){
        if(this.inventario.includes(item.name)) {
            let cura = item.utilizar(item.name);
            this.inventario.splice(this.inventario.indexOf(item.name), this.inventario.indexOf(item.name))
            this.setVida = this.vida + cura;
        }
    }
}