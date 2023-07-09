var darkMode = window.matchMedia('prefers-color-scheme: dark');
function toggleDarkMode(startup) {
    var buttons = document.getElementsByClassName("btn");
    for(var i = 0; i < buttons.length; i++) {
        if(darkMode && startup) {
            console.log("Enabling dark mode...");
            buttons[i].classList.add("btn-dark");
        }
        else if(!darkMode && startup) {
            console.log("Enabling light mode...");
            buttons[i].classList.add("btn-light");
        }
        else if(darkMode && !startup) {
            console.log("Enabling light mode...");
            buttons[i].classList.add("btn-light");
        }
        else {
            console.log("Enabling dark mode...");
            buttons[i].classList.add("btn-dark");
        }
    }
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
        var result = userInput + expression.value + "\n";
        userInput = result;
    }
    else {
        console.log("User pressed a key.")
    }
}