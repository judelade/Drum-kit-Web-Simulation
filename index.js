for(var i = 0; i <= document.querySelectorAll(".drum").length ; i++){

    //performs the function 'handleClick' when the event 'click' occurs on a button
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

//function of what is to happen when the button is clickedd
function handleClick(){
     
    //inner html of button pressed
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    


}

//Programming sounds to play when letters are pressed on the keyboard

document.addEventListener("keypress", function(event) {
        // "document." because we want the whole page listenining to keys pressed
        // 'event' in function tells us what happened,i.e a key was pressed on the keyboard
        // '.key' is a property that tells us what key exactly was pressed 
        makeSound(event.key);

        buttonAnimation(event.key);

});

function makeSound(key){

    switch(key){
        //if inner html of button pressed  is w
        case "w" : 
             //playing sounds whe
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
          break;

        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k" :
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "l" : 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        default : console.log(buttonInnerHTML);
    
    }


}


function buttonAnimation(currentKey){
    //calling the button that has either been clicked of typed
    var activeButton =  document.querySelector("."+currentKey);

    //adding class 'presed' that will implenent the needed animation
    activeButton.classList.add("pressed");

    //setting a timer so the animation ends after a few seconds
    // synax of setTimeout (function,time to execute)
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1000);
}

