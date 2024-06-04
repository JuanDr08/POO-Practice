import * as m from './modules/index.js'

// SELECCION DE LOS BOTONES NECESARIOS DEL HTML PARA DAR OPCIONES AL USUARIO
let buttonStart = document.getElementById("start")
let investigar = document.getElementById("investigar")
let restart = document.getElementById("restart")
let inventory = document.getElementById("inventory")
let useItem = document.getElementById("use")
let attack = document.getElementById("attack")

// SELECCION DE LOS ELEMENTOS DOM DEL HEROE DONDE SERÁN MOSTRADAS SUS ESTADISTICAS
let heroContainer = document.querySelector(".hero__stats")
let heroName = document.querySelector(".hero__name");
let heroLife = document.querySelector(".hero__life");
let heroMaxLife = document.querySelector(".hero__maxlife")
let heroAttack = document.querySelector(".hero__attack")
let DOMinventory = document.querySelector(".hero__inventory")

// SELECCION DE LOS ELEMENTOS DOM DEL MONSTRUO NECESARIOS PARA MOSTRAR LAS ESTADISTICAS DEL MISMO
let monsterContainer = document.querySelector(".monster__stats")
let monsterName = document.querySelector(".monster__name");
let monsterLife = document.querySelector(".monster__life");
let monsterMaxLife = document.querySelector(".monster__maxlife")
let monsterAttack = document.querySelector(".monster__attack")

// INICIO DEL JUEGO
buttonStart.addEventListener("click", ()=>{

    // ACTIVACION DE OTRAS ACCIONES DESPUES DE INICIAR EL JUEGO
    buttonStart.style.display = "none"
    heroContainer.style.display = "flex"
    investigar.style.display = "block"
    inventory.style.display = "inline-block"
    useItem.style.display = "inline-block"
    heroName.textContent = prompt("Ingrese el nombre de su heroe") //PETICION DEL NOMBRE DEL HEROE POR PROMPT

    // INSTANCIACION DEL INVENTARIO GENERAL QUE SERÁ USADO EN EL FLUJO DEL JUEGO Y POR EL HEROE
    let inventario = new m.Inventario
    //CREACION DEL HEROE CON EL NOMBRE INGRESADO Y MOSTRAR ESTADISTICAS EN LA PAGINA
    let heroe = new m.Heroe(heroName.textContent, inventario)
    heroLife.textContent = `Vida de tu heroe: ${heroe.vida}`
    heroMaxLife.textContent = `Vida maxima de tu heroe: ${heroe.vidaMax}`
    heroAttack.textContent = `Ataque actual de tu heroe: ${heroe.ataque}`

    // CREACION DE LA VARIABLE QUE CONTENDRÁ LA INSTANCIA DEL MONSTRUO
    let monstruo;
    
    // CREACION DE LA INSTANCIA JUEGO QUE CONTROLA EL FLUJO DE ESTE, SE LE PASA LA INSTANCIA DEL INVENTARIO Y LA VIDA DEL HEROE
    let juego = new m.Juego(inventario, heroe.vida)

    // Funcionalidad del boton investigar para generar un monstruo o agreegar posciones al inventario
    investigar.addEventListener("click", ()=>{
        restart.style.display = "block"
        restart.addEventListener("click", () => location.reload())
        let hecho = juego.ejecutar("investigar")
        if (hecho == "poscion"){
            investigar.style.display = "block"
        }else {
            // GENERACION DEL MONSTRUO A ENFRENTAR
            attack.style.display = "inline-block"
            investigar.style.display = "none"
            if(hecho == "Orco"){
                monstruo = new m.Orco;
                monstruo.setAtaque = 20
            } else if(hecho == "Kobold"){
                monstruo = new m.Kobold;
                monstruo.setAtaque = 15
            }else if (hecho == "Goblin"){
                monstruo = new m.Goblin;
                monstruo.setAtaque = 10
            }
            // DECLARRAR LAS ESTADISTICAS DEL MONSTRUO Y MOSTRARLAS EN EL HTML
            monstruo.setVida = juego.monsterLife
            monstruo.setVidaMax = juego.monsterLife
            monsterContainer.style.display = "block"
            monsterName.textContent = `Monstruo tipo: ${monstruo.nombre}`
            monsterLife.textContent = `Vida del monstruo: ${monstruo.vida}`
            monsterMaxLife.textContent = `Vida maxima del monstruo: ${monstruo.vidaMax}`
            monsterAttack.textContent = `Ataque del monstruo: ${monstruo.ataque}`
        }
    })

    // FUNCIONALIDAD DEL INVENTARIO PARA MOSTRAR QUE ITEMS HAY DISPONIBLES
    inventory.addEventListener("click", ()=>{
        let items = juego.listarItems()
        if(items.length) {
            DOMinventory.innerHTML = ""
            for (let i = 0; i < items.length; i++) {
                if(i){
                    items[i].name === items[i - 1].name ? DOMinventory.innerHTML = `<li>${items[i].name} x${i + 1}</li>` : DOMinventory.innerHTML += `<li>${items[i].name}</li>`
                }else DOMinventory.innerHTML += `<li>${items[i].name}</li>`
                
            }
        } else juego.loguear("Actualmente no posees items para ser listados")
    })

    // FUNCIONALIDAD PARA USAR ITEMS DE CURACION EN EL HEROE
    useItem.addEventListener("click", ()=>{
        if(!heroe.vida) juego.loguear("Será inutil utilizar items, ya has muerto")
        else {
            if(juego.listarItems().length){
                if(heroe.vida == heroe.vidaMax) juego.loguear("No puedes curar a tu heroe, esta al maximo de su vida")
                else {
                    juego.loguear("Has curado a tu heroe")
                    DOMinventory.innerHTML = ""
                    heroe.setVida = heroe.vida + inventario.utilizarItem(juego.listarItems()[0])
                    heroLife.textContent = `Vida de tu heroe: ${heroe.vida}`
                }
            } else juego.loguear("No posees items para ser usados")
        }
    })

    //FUNCIONALIDAD DE ATACAR POR PARTE DEL HEROE Y SEGUIDAMENTE DEL MONSTRUO, EVALUANDO LAS VIDAS Y PARANDO CUANDO ALGUNO MUERA
    attack.addEventListener("click", ()=>{
        if(heroe.vida == 0) juego.loguear("Será inutil, tu heroe ya ha muerto, deberás reiniciar")
        else {
            if(!monstruo.vida) {
                juego.loguear("No puedes atacar, ya has derrotado al monstruo,investiga otro")
                investigar.style.display = "block"
            } else {
                monstruo.setVida = juego.ejecutar("atacar", heroe.ataque)
                monsterLife.textContent = `Vida del monstruo: ${monstruo.vida}`
                juego.loguear("Es el turno del monstruo de atacar")
                let probability = Math.trunc(Math.random() * 4) + 1
                if(probability < 4){
                    juego.loguear("El monstruo ha fallado su golpe! Te has librado")
                } else {
                    heroe.setVida = juego.ejecutar("monsterAttack", monstruo.ataque)
                    heroLife.textContent = `Vida de tu heroe: ${heroe.vida}`
                    heroe.vida ? juego.loguear("Vamos defiendete, es tu turno de atacar!") : juego.loguear("Has fallecido")
                }
            }
        }
    })
})


    