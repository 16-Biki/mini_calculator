const display = document.getElementById("display");
function showdisplay(input) {
    display.value += input;
}
function cleardisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression and set the result to display
    } catch (error) {
        display.value = "Error";
    }
}
function deletelast() {
    display.value = display.value.slice(0, -1); // Remove the last character from the display value
}
