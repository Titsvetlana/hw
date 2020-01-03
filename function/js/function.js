alert('Exercise 1');
function Number(a, b){
	if(a < b){
		console.log('1');
	}
	else if(a > b){
		console.log('2');
	}
	else if(a = b){
		console.log('0');
	}
}
 let a = +prompt('Введите первое число');
 let b = +prompt('Введите второе число');
Number(a, b);

// alert('Exercise 2');
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// } 
// let fac = +prompt('Введите число и я посчитаю его факториал');
// console.log( 'Факториал числа ' + fac + ' = ' +factorial(fac) );

// alert('Exercise 3');
// function Compound(x,z,y){
// 	console.log(x, z, y);
// }
// let x = +prompt('Введите первое число');
// let z = +prompt('Введите второе число');
// let y = +prompt('Введите третье число');
// Compound(x, z, y);

// alert('Exercise 4');
// function Area(p = 0, d = 0){
// 	if(p > 0 && d > 0){
// 		return p * d;
// 	}
// 	else if(p == 0 && d > 0){
// 		return d * d;
// 	}
// 	else if(d == 0 && p > 0){
// 		return p * p;
// 	}
// 	else if(d == p){
// 		return p * d;
// 	}
// }
// let p = +prompt('Введите первую сторону прямоугольника');
// let d = +prompt('Введите вторую сторону прямоугольника');
// console.log('Площадь равна ' + Area(p, d));

// alert('Exercise 5');
// function Perfection(num){
// 	let sum = 0;
// 	for (let i = num / 2; i >= 1; --i) {
// 		if (num % i == 0) {
// 			sum += i;			
// 		}		
// 	}
// 	return sum == num;
// }
// let num = +prompt('Введите число и я скажу Вам является ли Вавше число совершенным');
// console.log(Perfection(num));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// alert('Exercise 6'); //не считает
// function PerfectionNum (l, m){
// 	let tmp, rez = 0;
// 	if( l < m){
// 		tmp = l;
// 		l = m;
// 		m = tmp;
// 	}
// 	for (let i = l; i <= m; i++) {		
// 		for (let j = i / 2; j >= 1; ++j){
// 			if(i % j == 0){
// 				rez += j;
// 			}				
// 		}
// 		return rez == i;
// 	}
// }          
// let l = +prompt('Введите нижний диапазон');
// let m = +prompt('Введите верхний диапазон');
// console.log(PerfectionNum (l, m));

// alert('Exercise 7');
// function setTime(h = '00') {
//   return function setMinutes(m = '00') {
//     return function setSeconds(s = '00') {
//       return `${h}:${m}:${s}`;
//     }
//   }
// }
// let h = prompt('Введите часы');
// let m = prompt('Введите минуты');
// let s = prompt('Введите секунды');
// var time = setTime(h)(m)(s);
// console.log(time);

// alert('Exercise 8');
// function Time(h, m, s){
// 	return(h % 12) * 360 + m * 60 +s;
// }
// let h = +prompt('Введите часы');
// let m = +prompt('Введите минуты');
// let s = +prompt('Введите секунды');
// console.log(Time(h, m, s));

// alert('Exercise 9');
// function SeconTime(sec){
// 	let h, m, s;
// 	s = Math.floor(sec % 60);
// 	m = Math.floor((sec % 3600) / 60);
// 	h = Math.floor(sec / 3600);	
// 	return h + ':' + m + ':' + s;
// }
// let s = prompt('Введите секунды');
// console.log(SeconTime(s));



