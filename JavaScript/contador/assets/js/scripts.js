let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    if(count >= 10){
        CURRENT_NUMBER.style.color = "red";
        CURRENT_NUMBER.innerHTML = 'Número Máximo Alcançado';
    }
	else{
        count++;
	    CURRENT_NUMBER.innerHTML = count;
        CURRENT_NUMBER.style.color = "black";
    }
}

function decrement() {
    if(count <= 0){
        CURRENT_NUMBER.style.color = "red";
        CURRENT_NUMBER.innerHTML = 'Número Mínimo Alcançado';
    }
	else{
        count--;
	    CURRENT_NUMBER.innerHTML = count;
        CURRENT_NUMBER.style.color = "black";
    }
}