var soundList = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"]
for (i = 0; i < 7; i++) {


    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var hitButton = this.innerHTML;
        handleClick(hitButton);
        buttonAnimation(hitButton);
    });
}
document.addEventListener("keydown", function (event) {
    handleClick(event.key);
    buttonAnimation(event.key);
});
function handleClick(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(hitButton)

    }

}
function buttonAnimation(currentKey){
    var pressedKey = document.querySelector("." + currentKey)
    pressedKey.classList.add("pressed");
    setTimeout(function() {pressedKey.classList.remove("pressed")}, 100);
}
