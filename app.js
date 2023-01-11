function getPin(){
    const pin = Math.round(Math.random()*10000);

    const pinString = pin.toString();

    if(pinString.length == 4){
        return pin ;
    }

    else {
        
        return getPin();
    }


}

function generatePin(){
    // const getPin = getPin();
    const pin = getPin();
    document.getElementById('pin-display').value = pin;

}

document.getElementById('number-click').addEventListener('click', function(event){

    const clickNumber = event.target.innerText;
    const number = document.getElementById('number-display');
    const previousNumber = number.value ;

    if(isNaN(clickNumber)){
        if(clickNumber ==='C'){
            number.value = '';
        }
        else if (clickNumber ==='<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            
            number.value = remainingDigit;
        }
    }

    else {
    
    
    const newNumber = previousNumber + clickNumber;
    number.value = newNumber;
    }
    


})

function matchPin(){
    const generatedPin = document.getElementById('pin-display').value ;
    const inputPin = document.getElementById('number-display').value;

    const sucessMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-failed');

    if(generatedPin == inputPin){
        sucessMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else{
        sucessMessage.style.display = 'none';
        failMessage.style.display = 'block'
    }
}