let numTicket = +prompt('Введите номер билета (6 цифр)');
let a, b, c, d, e, f, sum_1, sum_2, rez;
a = Math.floor((numTicket % 1000000) / 100000); //первая цифра
b = Math.floor((numTicket % 100000) / 10000); //вторая цифра
c = Math.floor((numTicket % 10000) / 1000); //третья цифра
d = Math.floor((numTicket % 1000) / 100); 
e = Math.floor((numTicket % 100) / 10);
f = Math.floor(numTicket % 10);
sum_1 = a + b + c;
sum_2 = d + e + f;
if(sum_1 == sum_2){
	alert('У Вас Счастливый билет!!!');
}
else{
	alert('Вам повезет в следующий раз!');
}

