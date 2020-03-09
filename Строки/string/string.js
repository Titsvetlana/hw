console.log(`1 - Написать функцию, которая принимает строку и выводит
статистику о ней: количество букв, количество цифр и
количество других знаков.`);

let poem =`Нас, конечно, удивила
		   Африканская горилла.
		   Всё от пяток до бровей
		   У горилл, как у людей.`;
function countPoem(poem){
	const poemlen = poem.length;
	const ovd = {};
    for(let i = 0; i < poemlen; i++){
    	if(ovd[poem[i]]){
    		ovd[poem[i]]++;
    	}else{
    		ovd[poem[i]] = 1;
    	}    	
    }
    return ovd;
}
console.log(countPoem(poem));

console.log(`2 - Написать функцию, которая принимает двузначное число
и возвращает его в текстовом виде.
Например: 35 – тридцать пять, 89 – восемьдесят девять,
12 – двенадцать.`);
function textNumber(number){
	let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
	let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
	let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
	if (number > 0 && number <= 9){
	    return first[number - 1];
	}
	if (number >= 10 && number <= 20){
	    return second[number - 10];
	}
	if (number > 20 && number <= 99){
	    let str = `${number}`;
	    str = str.split('');
	    let firstNumber = str[0];
	    let secondNumber = str[1];
	    return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
	}
}
console.log('9 = ', textNumber(9));
console.log('70 = ', textNumber(70));
console.log('93 = ', textNumber(93));

console.log(`3 - Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания. 
`);
function change_register(str) {
let new_poem = "";
let len = poem.length;
	for (let i = 0; i < len; i++) {
	    if (poem[i] === poem[i].toLowerCase()) {
	      new_poem += poem[i].toUpperCase();
	    } else {
	      new_poem += poem[i].toLowerCase();
	    }
	}
	return new_poem;
}
console.log(change_register(poem));

console.log(`4 - Написать функцию, которая преобразует названия cssстилей с дефисом в название 
	         в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, 
	         textalign в textAlign.`);
str = "font size";
function initCap(str) {
    return str.toLowerCase().replace(/(?:^|\s)[a-z]/g,
   
    function(m) {
      return m.toUpperCase().replace(/\s+/g, "");
   });
};

console.log(initCap(str));

console.log(`8 - Написать функцию, которая получает url и выводит подробную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.`);
function url(){
	let names1 = ' url “https://itstep.org/ua/about”';
	console.log(names1);
	let rez1 = /\//;
	let name1List = names1.split(rez1);
	return(name1List);
}
console.log(url());

console.log(`9 - Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью
указанного разделителя.
Например: строка “10/08/2020”, разделитель “/”, результат:
“10”, “08”, “2020”.`);
function data(){
	let names = '20/08/2020';
	console.log(names);
	let rez = /\//;
	let nameList = names.split(rez);
	return (nameList);
}
console.log(data());



