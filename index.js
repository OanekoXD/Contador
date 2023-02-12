let count = 0;

let buttons = document.querySelectorAll(".btn");
let value = document.getElementById("value")

buttons.forEach((button) => {
    button.addEventListener("click", (event) =>{
        const style = event.currentTarget.classList;
        if(style.contains("decrease")){ //aumentale a este if "&& count > 0" si no quieres que muestre numeros negativos. 
            count--;
        }else if(style.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        // si no quieres colores borras esto
        if(count < 0){
            value.style.color = "red";
        }else if(count > 0){
            value.style.color = "green";
        }else{
            value.style.color = "black";
        }
        //hasta aqui

        value.textContent = count;
    });
});