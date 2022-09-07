console.log("Hey guy!!!")


var buttons = document.getElementById("casioButtons");
var operations = document.getElementById("casioOperation");
var result = document.getElementById("casioResult");
var locked = false;

const reset = () => {
    operations.textContent = "_";
    result.textContent = 0;
}

const arithmeticEval = (fn) => new Function('return ' + fn)();

reset();

buttons.addEventListener('click', (e) => {
    
    const clickedElement = event.target;
    if (!clickedElement.matches('.casioButton')) return;
    if (operations.textContent === "_") operations.textContent = null;
    
    if (e.target.id === "buttonReset"){
        locked = false;
        reset();
        return;  
    }

    if (e.target.id === "buttonOff"){
        operations.textContent = "BY JULIO GARCIA";
        result.textContent = "APAGADO"; 
        locked = true;
        return;  
    }

    if (e.target.id === "buttonDel"){
        if (operations.textContent.length && !locked) operations.textContent = operations.textContent.substring(0, operations.textContent.length - 1);
        // falta otro IF para ver si acabaste la cadena
        return;
    }

    if (e.target.id === "buttonResult"){

        try{
            
            result.textContent = arithmeticEval(operations.textContent)
            
            // Falta detectar el NAN  
        
        }catch(err){
            operations.textContent = "MATH ERROR";
            locked = true;
            result.textContent = "0"; 
        }    

        return;    
    }


    if(!locked) operations.textContent += e.target.textContent;

})



