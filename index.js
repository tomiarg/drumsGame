
// here we will hear wich button is the one clicked
const botones = document.querySelectorAll(".drum")
botones.forEach(boton=> boton.addEventListener("click",()=>{
    //alert("auch")
    let btnHtml = boton.innerHTML;
    sound(btnHtml)
    changeClass (btnHtml)
  
}))

//here we select all de "document" to hear the key who is pressed.
document.addEventListener("keydown",(event)=>{
    let letterPress = event.key
   sound(letterPress)
   if (letterPress === "w" || letterPress === "a" || letterPress === "s" || letterPress === "d" || letterPress === "j" || letterPress === "k" || letterPress === "l") {
     changeClass(letterPress) 
   } else{
    console.log(letterPress)
   }
   

})
// this function will recibe a parameter and, dependin wich paramter is, will make the sound.

function sound(key){
    switch (key) {
        case "w":
            let crash = new Audio("../sounds/crash.mp3")
            crash.play()   
            break;
        case "a":
            let kick = new Audio("../sounds/kick-bass.mp3")
            kick.play()           
            break;
        case "s":
            let snare = new Audio("../sounds/snare.mp3")
            snare.play()            
            break;
        case "d":
            let tom4 = new Audio("../sounds/tom-4.mp3")
            tom4.play() 
           break;
        case "j":
            let tom3 = new Audio("../sounds/tom-3.mp3")
            tom3.play()            
            break;
        case "k":
            let tom2 = new Audio("../sounds/tom-2.mp3")
            tom2.play()            
        case "l":
            let tom1 = new Audio("../sounds/tom-1.mp3")
            tom1.play()            
            break;
        default: console.log(key)
        break;
    }

}
function changeClass (idkWtput){
    let pressedKey = document.querySelector(`.${idkWtput}`)
    pressedKey.classList.add("pressed")
    setTimeout(() => {
        pressedKey.classList.remove("pressed")
    }, 1000);

}
function HouseKeeper (name, surename, age, lenguages, cleaningReport){
    this.name = name;
    this.surename = surename;
    this.age = age;
    this.lenguages = lenguages;
    this.cleaningReport = cleaningReport;
    this.clean = function (){alert("house clean!")};
}

