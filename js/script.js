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
        tokenizeExpression(expression);
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
function tokenizeExpression(expression) {
    var lastIndex = 0;
    var tokenizedExpression = [];
    for(var i = 0; i < expression.length; i++) {
        if(isDigit(expression[i - 1]) && isOperator(expression[i])) {
            for(var j = lastIndex; j < i; j++) {
                var number = (typeof number === "undefined") ? (number + expression[j]) : ("" + expression[j]);
                tokenizedExpression.push(number);
            }
        }
        else if(isOperator(expression[i - 1]) && isDigit(expression[i]) && i != 0) {
            tokenizedExpression.push(expression[i - 1]);
        }
    }
    console.log(tokenizedExpression);
    return tokenizedExpression;
}
function parseExpression(expression) {
    for(var i = 0; i < expression.length; i++) {

    }
}
function isDigit(character) {
    switch(character) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return true;
        default:
            return false;
    }
}
function isOperator(character) {
    switch(character) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}