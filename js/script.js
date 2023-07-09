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
    document.getElementsByTagName("textarea")[0].value += element.id;
    console.log("Filling data in...")
}
function evaluateExpression(event) {
    if(event.code == "Enter") {
        var expression = document.getElementsByTagName("textarea")[0].value;
        console.log(expression);
    }
    else {
        console.log("User pressed a key.")
    }
}