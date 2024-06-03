import * as m from './modules/index.js'

//5. Chequear si el juego está terminado o no (si `Heroe` no tiene vida), e impedir hacer acciones si lo está
//6. Permitir reiniciar el juego
//13. agregar pocion a inventario
let buttonStart = document.getElementById("start")
let investigar = document.getElementById("investigar")

let heroContainer = document.querySelector(".hero__stats")
let heroName = document.querySelector(".hero__name");
let heroLife = document.querySelector(".hero__life");
let heroMaxLife = document.querySelector(".hero__maxlife")
let heroAttack = document.querySelector(".hero__attack")

let monsterContainer = document.querySelector(".monster__stats")
let monsterName = document.querySelector(".monster__name");
let monsterLife = document.querySelector(".monster__life");
let monsterMaxLife = document.querySelector(".monster__maxlife")
let monsterAttack = document.querySelector(".monster__attack")

buttonStart.addEventListener("click", ()=>{


    buttonStart.style.display = "none"
    heroContainer.style.display = "block"
    investigar.style.display = "block"
    heroName.textContent = prompt("Ingrese el nombre de su heroe")


    let heroe = new m.Heroe(heroName.textContent, new m.Inventario)
    heroLife.textContent = `Vida de tu heroe ${heroe.vida}`
    heroMaxLife.textContent = `Vida maxima de tu heroe: ${heroe.vidaMax}`
    heroAttack.textContent = `Ataque actual de tu heroe: ${heroe.ataque}`

    let inventario = new m.Inventario
    let juego = new m.Juego(inventario)
    investigar.addEventListener("click", ()=>{
        
        let hecho = juego.ejecutar("investigar")
        let monstruo;
        if (hecho == "poscion"){
            alert(`Has encontrado una ${hecho}`)
            investigar.style.display = "block"
        }else {
            investigar.style.display = "none"
            alert(`Ha aparecido un ${hecho} salvaje!`)
            if(hecho == "Orco"){
                monstruo = new m.Orco;
            } else if(hecho == "Kobold"){
                monstruo = new m.Kobold;
            }else if (hecho == "Goblin"){
                monstruo = new m.Goblin;
            }
            monsterContainer.style.display = "block"
            monsterName.textContent = `Monstruo tipo: ${monstruo.nombre}`
            monsterLife.textContent = `Vida del monstruo: ${juego.monsterLife}`
            monsterMaxLife.textContent = `Vida maxima del monstruo: ${juego.monsterLife}`
            monsterAttack.textContent = `Ataque del monstruo: ${monstruo.ataque}`
        }
    })



})


    