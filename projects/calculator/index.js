const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        //Do something
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        
        if(!action){
            if (displayedNum === "0"){
                display.textContent = keyContent; 
            } else {
                display.textContent = displayedNum + keyContent; 
            }
            //tester to determine if a number or an operator is pressed
            //console.log("number key!")
        }; 
        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide" 
            ) {
                console.log("operator key!");
        }
        if (action === "decimal"){
            console.log("decimal key")
        }
        if (action === "clear"){
            console.log("clear key!")
        }
        if (action === "calculate"){
            console.log("equal key!")
        }
    }
});

