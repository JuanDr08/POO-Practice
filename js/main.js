import * as m from './modules/index.js'

//5. Chequear si el juego está terminado o no (si `Heroe` no tiene vida), e impedir hacer acciones si lo está
let buttonStart = document.getElementById("start")
let investigar = document.getElementById("investigar")
let restart = document.getElementById("restart")
let inventory = document.getElementById("inventory")
let useItem = document.getElementById("use")
let attack = document.getElementById("attack")

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
    heroLife.textContent = `Vida de tu heroe: ${heroe.vida}`
    heroMaxLife.textContent = `Vida maxima de tu heroe: ${heroe.vidaMax}`
    heroAttack.textContent = `Ataque actual de tu heroe: ${heroe.ataque}`

    let inventario = new m.Inventario
    let juego = new m.Juego(inventario)
    investigar.addEventListener("click", ()=>{
        console.log(inventario);
        restart.style.display = "block"
        restart.addEventListener("click", () => location.reload())
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
            monstruo.setVida = juego.monsterLife
            monstruo.setVidaMax = juego.monsterLife
            monsterContainer.style.display = "block"
            monsterName.textContent = `Monstruo tipo: ${monstruo.nombre}`
            monsterLife.textContent = `Vida del monstruo: ${monstruo.vida}`
            monsterMaxLife.textContent = `Vida maxima del monstruo: ${monstruo.vidaMax}`
            monsterAttack.textContent = `Ataque del monstruo: ${monstruo.ataque}`
        }
    })



})


    