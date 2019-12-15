alert('Задание 1');
let name = prompt('Enter your name, please.');
alert('Hello, ' + name);

alert('Задание 2');
const year = 2019;
let yearBirth = +prompt('Enter your year of birth, please.');
let age = year - yearBirth;
alert('You are ' + age + ' years old.');

alert('Задание 3');
let square = +prompt('Enter the length of the side of the square, please.');
let perimeter = 4 * square;
alert('square perimeter = ' + perimeter);

alert('Задание 4');
let circle = +prompt('Please enter the radius of the circle.');
let radius = Math.pow((3.14 * circle),2);
alert('Circle Area = ' + radius);

alert('Задание 5');
let distance = +prompt('Введите расстояние между городами');
let time = +prompt('Введите время за которое хотите преодолеть это расстояние');
let kmTime = distance / time;
alert('Вам необходимо двигаться со скоростью ' + kmTime + ' км/ч' );

alert('Задание 6');
alert('Currency Converter');
const eu = .87;
let dol = +prompt('Enter the amount in dollars.');
let sum = eu * dol;
alert('In euro you will receive: ' + sum);

alert('Задание 7');
let gigB = +prompt('Specify the volume of the flash drive in GB');
const megB = 1024;
let col = (gigB * megB) / 820;
let rounding = Math.floor(col);
alert(rounding + ' files will fit on a USB flash drive');

alert('Задание 8');
let summ = +prompt('Введите сумму денег для покупки');
let price = +prompt('Введите цену одной шоколадки');
let coll = (sum * 100) / (price * 100);
let round = Math.floor(coll);
let surrender = ((sum * 100) - (round * (price * 100))) / 100;
alert('Вы сможете купить ' + round + ' шоколадки и у Вас останется сдача ' + surrender + 'грн');

alert('Задание 9');
let a = +prompt('Введите трех значное число');
alert(('' + a).split('').reverse().join(''));

alert('Задание 10');
let number = +prompt('Введите целое число');
(number % 2 == 0) ?
alert('Ваше число четное') : alert('Ваше число нечетное');