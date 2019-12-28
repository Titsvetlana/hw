 alert('Задание 1');
 let age = +prompt('Введите свой возраст');
 let years = ' ';
 if(age >= 0 && age <= 12){
 	years = ('Вы ребенок!');
 }
 if (age > 12 && age <= 18) {
 	years = ('Вы подросток!');
 }
if (age > 18 && age <= 60) {
	years = ('Вы взрослый!');
}
if (age > 60 && age <= 120) {
	years = ('Вы пенсионер!');
}
 if (age > 120) {
 	years = ('Столько люди не живут!');
 }
 if (age < 0) {
 	years = ('Вы еще не родились!!!');
 }
alert(years);
alert('Задание 2');
let num = +prompt('Введите число от 0 до 9');
switch(num){
	case 0:{
		num = ')';
		break;
	}
	case 1:{
		num = '!';
		break;
	}
	case 2:{
		num = '@';
		break;
	}
	case 3:{
		num = '#';
		break;
	}
	case 4:{
		num = '$';
		break;
	}
	case 5:{
		num = '%';
		break;
	}
	case 6:{
		num = '^';
		break;
	}
	case 7:{
		num = '&';
		break;
	}
	case 8:{
		num = '*';
		break;
	}
	case 9:{
		num = '(';
		break;
	}
	default:{
		num = 'Вы ввели не правильное число!';
	}
}
alert(num);
alert('Задание 3');
let numeral = +prompt('Введите трехзначное число');
let a, b, c, answ;
a = Math.floor((numeral % 1000) / 100); //первая цифра
b = Math.floor((numeral % 100) / 10); //вторая цифра
c = Math.floor(numeral % 10); //третья цифра
if(a != b && a != c && b != c) {
	answ = 'В вашем числе нет повторяющихся цифр!';
}
else {
	answ = 'В вашем числе есть повторяющиеся цифры!';
}
alert(answ);
alert('Задание 4');
let year = +prompt('Введите любой год');
if(year % 4 == 0){
	alert('Ваш год высокосный');
}
else{
	alert('Ваш год не высокосный');
}
alert('Задание 5');
let nN_1 = +prompt("Введите пятизначное число");
let a1, b1, c1, d1, e1;
a1 = Math.floor((nN_1 % 100000) / 10000); //первая цифра
b1 = Math.floor((nN_1 % 10000) / 1000); //вторая цифра
c1 = Math.floor((nN_1 % 1000) / 100); //третья цифра
d1 = Math.floor((nN_1 % 100) / 10); 
e1 = Math.floor(nN_1 % 10);
if((nN_1 > 9999)&&(nN_1 < 100000)){
    if ((b1 == d1) && (a1 == e1)){
        alert("Это число палиндром");
    }
    else {
        alert("Это число не палиндром");
    }
}
 alert('Задание 6');
 let money = +prompt('Введите колличество денег в доллорах');
 let currency = +prompt('Выберите валюту: 1 - EUR; 2 - UAN; 3 - AZN');
let convector;
switch(currency){
	case 1:{
		convector = money * 0.89;
		alert(convector);
		break;
	}
	case 2:{
		convector = money * 23.69;
		alert(convector);
		break;
	}
	case 3:{
		convector = money * 1.70;
		alert(convector);
		break;
	}
}
alert('Задание 7');
let sum = +prompt('Введите сумму покупки');
let discount;
if(sum >= 200 && sum <= 300){
	discount = (sum * 3) / 100;
}
if(sum > 300 && sum >= 500){
	discount = (sum * 5) / 100;
}
if(sum > 500){
	discount = (sum * 7) / 100;
}
alert('Ваша скидка состовляет ' + discount + ' грн');

// -----------------------

// ДАЛЬШЕ НЕ ЗНАЮ КАК ДЕЛАТЬ
alert('Задание 9');
alert('Мини-тест на определение характера');
let first, second, th, four, answ_1 = 0,answ_2, answ_3, answ_4;
first = +prompt('Сложите руки в замок. Если сверху окажется большой палец правой руки, нажмите «2», если левой — цифру «1», если лень - «0».');
switch (first){
  case 1:{
    answ_1 += 1;
    break;
  }
  case 2:{
    answ_1 += 2;
    break;
  }
  case 0:{
    answ_1 += 0;
    break;
  }
}
second = +prompt('Прицельтесь в невидимую мишень, закрыв один глаз… Если остался открытым левый глаз, нажмите «1», если правый — «2», если лень - «0»');
switch (second){
  case 2:{
    answ_2 = answ_1 + 2;
    break;
  }
  case 1:{
    answ_2 = answ_1 + 1;
    break;
  }
  case 0:{
    answ_2 = answ_1 + 0;
    break;
  }
}
third = +prompt('Положите руки на грудь крестом, и посмотрите, какая рука окажется сверху. Если кисть левой руки окажется лежащей сверху на правой руке, то запишите цифру «1», правая сверху — «2», если лень - «0»');
switch (third){
  case 2:{
    answ_3 = answ_2 + 2;
    break;
  }
  case 1:{
    answ_3 = answ_2 + 1;
    break;
  }
  case 0:{
    answ_3 = answ_2 + 0;
    break;
  }
}
fourth = +prompt('Поаплодируйте. Если сверху окажется левая рука, то цифра «1», если правая, то «2», если лень - «0»');
switch (fourth){
  case 2:{
    answ_4 = answ_3 + 2;
    break;
  }
  case 1:{
    answ_4 = answ_3 + 1;
    break;
  }
  case 0:{
    answ_4 = answ_3 + 0;
    break;
  }
}
alert('Ваш результат ' + answ_4);
let rez = +prompt('Введите свой результат');
switch(rez){
	case 8:{
		alert('(стопроцентный правша) — устойчивый тип характера, консерватизм, не желание вступать в конфликты спорить с кем либо.');
	    break;
	}
	case 7:{
		alert('у вас самая яркая черта характера — крайняя нерешительность.');
		break;
	}
	case 6:{
		alert('вы коммуникабельны, всегда можете найти общий язык практически со всеми.');
		break;
	}
	case 5:{
		alert('вы непостоянны, делаете всё сами, не ищите поддержки других.');
		break;
	}
	case 4:{
		alert('(стопроцентный левша) — вы крайне не консервативный человек. Творчество занимает в вашей жизни далеко не последнюю роль. На многие вещи вы смотрите нестандартно. Сильные эмоции, выраженный индивидуализм, эгоизм. Вы упрямы и эгоистичны, но это не мешает вам жить.');
	    break;
	}
	case 3:{
		alert('Вы склонны к самокопанию, немного замкнуты, из-за чего вам довольно сложно найти друзей, но духом сильны, а в достижении поставленной цели вряд ли что-то может сломить вас.');
	    break;
	}
	case 2:{
		alert('Вы очень ленивый человек');
		break;
	}
	case 1:{
		alert('Вы самый ленивый человек');
		break;
	}
	case 0:{
		alert('Не знаю чем вас утешить');
		break;
	}

}

// -----------------------

// ОСТАЛЬНЫЕ НЕ ЗНАЮ КАК ДЕЛАТЬ
