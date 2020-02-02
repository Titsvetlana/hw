function ValidPasport() {
    let regPas = /^([А-ЯЁ][А-ЯЁ]\d*[0-9]{6}+)$/i;
    if (regPas.test() == true){
    	console.log('Номер паспорта введен правильно!');
    }
    else {
    	console.log('Номер паспорта введен неправильно!');
    }
}  
function ValidPhone() {
    let regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    if (regPhone.test() == true){
    	console.log('Номер телефона введен правильно!');
    }
    else {
    	console.log('Номер телефона введен неправильно!');
    }
}  
function ValidInn() {
    let regInn = /^\d{12}+$/;
    if (regInn.test() == true){
    	console.log('ИНН введен правильно!');
    }
    else {
    	console.log('ИНН введен неправильно!');
    }
} 

      
