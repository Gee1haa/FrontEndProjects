
//detecting button press

var no_of_buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < no_of_buttons; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var pressedbutton = this.innerHTML;
        makeSound(pressedbutton); //here make sound function is called with the button pressed 
        }
    );
}
//Detecting key board press
document.addEventListener("keydown", function(event){
    makeSound(event.key)//here make sound function is called by the key press 
   
})

function makeSound(key)
 {

    switch(key) {

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;

        default:  console.log(pressedbutton)
    }}

    // new line