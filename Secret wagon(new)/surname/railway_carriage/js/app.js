let m = +prompt('Введите место');
let coupe, room, locationPlace;
if(m % 2 == 0){
	locationPlace = 'Верхняя полка';

}
else if(m % 2 != 0){
	locationPlace = 'Нижняя полка';
}
if( m <= 37){
	room = 'купейное место';
}
else if(m > 37){
	room = 'боковое место';
}
if(m <= 54 && m >= 53 || m >= 1 && m <= 4){
	coupe = 'первое купе';
}
else if(m <= 52 && m >= 51 || m > 4 && m <= 8){
	coupe = 'второе купе';
}
else if(m <= 50 && m >= 49 || m > 8 && m <= 12){
	coupe = 'третье купе';
}
else if(m <= 48 && m >= 47 || m > 12 && m <= 16){
	coupe = 'четвертое купе';
}
else if(m <= 46 && m >= 45 || m > 16 && m <= 20){
	coupe = 'пятое купе';
}
else if(m <= 44 && m >= 43 || m > 20 && m <= 24){
	coupe = 'шестое купе';
}
else if(m <= 42 && m >= 41 || m > 24 && m <= 28){
	coupe = 'седьмое купе';
}
else if(m <= 40 && m >= 39 || m > 28 && m <= 32){
	coupe = 'восьмое купе';
}
else if(m <= 38 && m >= 37 || m > 32 && m <= 36){
	coupe = 'девятое купе';
}
alert(locationPlace + ', ' + room + ', ' + coupe);