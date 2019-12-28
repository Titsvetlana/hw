let numLes = +prompt('Введите номер урока');
const dur =45;
let breakT= 0;
if(numLes >=0 && numLes <= 10){
    if(numLes %2 == 0 && numLes != 2){
      breakT =(numLes - 2) / 2 * 20 + 5; 
    }
    else if(numLes % 2 != 0 && numLes != 1){
      breakT = (numLes - 1) / 2 * 20;  
    }
    else if(numLes == 2){
      breakT =5;  
    }
    else if(numLes == 1){
      breakT = 0;
    }
    let endHours = Math.floor((numLes * dur + 540 + breakT) / 60);
    let endMinutes = (numLes * dur +540 + breakT) % 60;
    alert(endHours + ':' + endMinutes);
}
else{
    alert('Введите верное время');
}