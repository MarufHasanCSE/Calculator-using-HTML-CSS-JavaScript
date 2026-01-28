let inputField = document.getElementById("inputField");;
let buttons = document.querySelectorAll("button");
let input = "";

buttons.forEach((button) => {
    button.addEventListener("click", (ev) => {
        if (ev.target.innerText == "=") {
            try {
                input = eval(input);
                inputField.value = input;
            }
            catch (error) {
                inputField.value = "Error";
            }
        } else if (ev.target.innerText == "AC") {
            input = "";
            inputField.value = input;
        } else if (ev.target.innerText == "DEL") {
            input = input.slice(0, -1);
            inputField.value = input;
        } 
        else {
            input += ev.target.innerText;
            inputField.value = input;
        }
    });
});



