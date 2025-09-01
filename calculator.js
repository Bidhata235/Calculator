const screen = document.getElementById("screen")

function display(data){
     screen.innerHTML += data
}

function calculate(){
    try{
      screen.innerHTML = eval(screen.innerHTML)
    } catch(e){
      screen.innerHTML = "Syntax error"
    }
}

function openCalculator() {
    screen.innerHTML = '';
}

function offCalculator() {
    screen.innerHTML = '';
}

function clearscreen(){
     screen.innerHTML = '';
}