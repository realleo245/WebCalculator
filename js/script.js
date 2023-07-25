//var darkMode = window.matchMedia('prefers-color-scheme: dark');
alert("This calculator isn't functional yet. None of the keys work");
var numCalculations = 0;
// function toggleDarkMode(startup) {
//     var buttons = document.getElementsByClassName("btn");
//     for(var i = 0; i < buttons.length; i++) {
//         if(darkMode && startup) {
//             console.log("Enabling dark mode...");
//             buttons[i].classList.add("btn-dark");
//         }
//         else if(!darkMode && startup) {
//             console.log("Enabling light mode...");
//             buttons[i].classList.add("btn-light");
//         }
//         else if(darkMode && !startup) {
//             console.log("Enabling light mode...");
//             buttons[i].classList.add("btn-light");
//         }
//         else {
//             console.log("Enabling dark mode...");
//             buttons[i].classList.add("btn-dark");
//         }
//     }
// }
function clearEverything() {
    document.getElementById("textarea").value = "";
    console.log("Everything cleared");
}
function backspace() {
    document.getElementById("textarea").value = document.getElementById("textarea").value.substring(0, document.getElementById("textarea").value.length - 1);
    console.log("Backspace successful");
}
function fillInputBox(element) {
    document.getElementById("textarea").value += element.id;
    console.log("Filling data in...")
}
function evaluateExpression(event) {
    if(event.code == "Enter") {
        var userInput = document.getElementById("textarea").value;
        var expression = userInput.split("\n").pop();
        console.log(expression);
        var result = userInput + "=" + expression;
        document.getElementById("textarea").value = result;
    }
    else {
        console.log("User pressed a key.")
    }
}
function isValid(expression) {
    for(var i = 0; i < expression.length; i++) {
        if(!isCharacterPermitted(expression[i])) {
            return false;
        }
    }
    return true;
}
function isCharacterPermitted(character) {
    
}