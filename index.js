const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomEl1= document.getElementById("random1-el")
let randomEl2= document.getElementById("random2-el")
 

function button(){
    const newPassword = []
    for(let i = 0; i < 15; i++){
      const randomIndex = (Math.floor(Math.random() * characters.length))
      newPassword.push(characters[randomIndex])
    }
    randomEl1.textContent = newPassword.join("")
    
    const secondPassword = []
    for(let i = 0; i < 15; i++){
        const randomIndex2 = (Math.floor(Math.random() * characters.length)) 
        secondPassword.push(characters[randomIndex2])
    }
    randomEl2.textContent = secondPassword.join("")

}


