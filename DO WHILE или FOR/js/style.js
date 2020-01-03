// alert('Задача 1');
// let num = +prompt('Введите число');
// let sum, i = 0;
// do{
// 	sum = num % 10;
// 	num = Math.floor(num / 10);
// 	i += sum;
// }
// while(num > 0);
// alert(i);

// alert('Задача 2');
// let num_1 = +prompt('Введите первое число');
// let num_2 = +prompt('Введите второе число');
// for (let j = num_1; j > 0; j--){
// 	if(num_1 % j == 0 && num_2 % j == 0){
// 		let nod = j;
// 		alert('nod = ' + nod);
// 		break;
// 	}
// }

// alert('Задача 3');
// let number = + prompt('Введите число');
// let rez;
// for (let del = number; del > 0; del--){	
// 	if (number % del == 0) {
// 		rez = del;
// 		alert(rez);
// 	}
// }


// alert('Задача 4');
// let numeral = +prompt('Введите число');
// let rez = 0;
// while(numeral > 0){
// 	numeral % 10;
// 	numeral = Math.floor(numeral / 10);
// 	rez++;    	
// }
// alert(rez);

// alert('Задача 5');
// // не считает
// alert('Введите 10 чисел от -9 до 9')
// let numer1 = +prompt('Введите первое число');
// let numer2 = +prompt('Введите второе число');
// let numer3 = +prompt('Введите третье число');
// let numer4 = +prompt('Введите четвертое число');
// let numer5 = +prompt('Введите пятое число');
// let numer6 = +prompt('Введите шестое число');
// let numer7 = +prompt('Введите седьмое число');
// let numer8 = +prompt('Введите восьмое число');
// let numer9 = +prompt('Введите девятое число');
// let numer10 = +prompt('Введите десятое число');
// let pol = 0, otr = 0, nul = 0, chet = 0, nochet = 0;
// if(numer1 == 0 || numer2 == 0 || numer3 == 0 || numer4 == 0 || numer5 == 0 || numer6 == 0 || numer7 == 0 || numer8 == 0 || numer9 == 0 || numer10 == 0){
// 	nul++;
// }
// if(numer1 >= 0 || numer2 >= 0 || numer3 >= 0 || numer4 >= 0 || numer5 >= 0 || numer6 >= 0 || numer7 >= 0 || numer8 >= 0 || numer9 >= 0 || numer10 >= 0){
// 	pol++;
// }
// if(numer1 < 0 || numer2 < 0 || numer3 < 0 || numer4 < 0 || numer5 < 0 || numer6 < 0 || numer7 < 0 || numer8 < 0 || numer9 < 0 || numer10 < 0){
// 	otr++;
// }
// if((numer1 % 2) == 0 || (numer2 % 2) == 0 || (numer3 % 2) == 0 || (numer4 % 2) == 0 || (numer5 % 2) == 0 || (numer6 % 2) == 0 || (numer7 % 2) == 0 || (numer8 % 2) == 0 || (numer9 % 2) == 0 || (numer10 % 2) == 0){
// 	chet++;
// }
// if((numer1 % 2) != 0 || (numer2 % 2) != 0 || (numer3 % 2) != 0 || (numer4 % 2) != 0 || (numer5 % 2) != 0 || (numer6 % 2) != 0 || (numer7 % 2) != 0 || (numer8 % 2) != 0 || (numer9 % 2) != 0 || (numer10 % 2) != 0){
// 	nochet++;
// }
// alert('Положительных = ' + pol + ', ' + 'Нулевых = ' + nul + ', ' + 'Отрицательных = ' + otr + ', ' +'Четных = ' + chet + ', ' + 'Нечетных = ' + nochet);

alert('Задача 6');
// не получается зациклить
do{
	let enter = +prompt('Введите число');
	let enter2 = +prompt('Введите второе число');
	let act = prompt('Выберите действие: "Сложение", "Вычитание", "Деление", "Умножение", для выхода нажмите "0".');
	let sum;
	switch(act){
		case "Сложение":{
			sum = enter + enter2;
			alert(sum);
			break;
		}
		case "Вычитание":{
			sum = enter - enter2;
			alert(sum);
			break;
		}
		case "Деление":{
			sum = enter / enter2;
			alert(sum);
			break;
		}
		case "Умножение":{
			sum = enter * enter2;
			alert(sum);
			break;
		}
	}
}
 while(act != 0);

// alert('Задача 7');
// let str = prompt("Введите число!");
// let k = prompt("На сколько цифр его сдвинуть?");
// console.log(str.substring(k) + str.substring(0, k));

// alert('Задача 8');
// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;
// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

// alert('Задача 9');
// let n = +prompt("Введите число");
// for(let i = 1; i <= 10; i++){
//     console.log(i + ' * ' + n + ' = ' + (i * n));
//     //alert(i + ' * ' + n + ' = ' + (i * n));
// }

// alert('Задача 9');
// document.write("<table>");
// for (var i = 1; i <= 9; i++ ) {
//   document.write("<tr>");
//   document.write("<td>" + i + "</td>");
 
//  for ( var j = 2; j <= 9; j++ ) {
//    document.write("<td>" + i * j + "</td>");
// }
//    document.write("</tr>");
// }
// document.write("</table>");

// alert('Задача 10');
// let N = 50, half = 25, i = 1, ch;
// alert("Добро пожаловать в игру 'Угадай число!'");
// alert("Загадайте число от 0 до 100, нажмите Enter.");
// let x = +prompt("Введите 1, если ваше число больше; Введите 2, если ваше число больше; Введите 0, если ваше число больше; " + n);
//дальше не знаю