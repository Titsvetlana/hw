let turtle = prompt("Введите черепашку: Донателло, Микеланджело, Рафаэль, Леонардо"),
    answ = "Автомат";

switch(turtle){
    case "Донателло":{
    answ = "Посох Бо";
    break;
    }
    case "Микеланджело":{
    answ = "Нунчаки";
    break;
    }
    case "Рафаэль":{
    answ = "Пара сай";
    break;
    }
    case "Леонардо":{
    answ = "Катана";
    break;
    }
}
alert(answ);