function rectangle(){
let bx = 1,
    by = 7,
    dx = 10,
    dy = 2;
console.log(`Прямоугольник с координатами: b = ${bx}, ${by}; d = ${dx}, ${dy}`);
	function task2(){
		return dx - bx;
	}
	function task3(){
		return by - dy;;
	}
	function task4(){
		return task2() * task3();
	}
	function task5(){
		return (task2() + task3()) * 2;
	}
	function task6(){
		return task2() + 2;
	}
	function task7(){
		return task3() + 2;
	}
	function task8(b, d){
		return (`${task2() + 1}; ${task3() + 2}`);
	}
	//Дальше не получается
	function task9(by, dy){
		return (`${bx + 2}; ${dx + 2}`);
	}
	function task10(bx, dx){
		return (`${by + 2}; ${dy + 2}`);
	}
	function task11(by, dy, bx, dx){ 
		return (`${bx + 2}; ${dx + 2}; ${by + 2}; ${dy + 2}`);
	}
	return (`Ширина прямоугольника = ${task2()};\n 
		     Высота прямоугольника = ${task3()};\n
		     Площадь прямоугольника = ${task4()};\n
		     Периметр прямоугольника = ${task5()};\n
		     Изменяем ширину на 2ед = ${task6()};\n
		     Изменяем высоту на 2ед = ${task7()};\n
		     Изменяем на 2ед каждую сторону = ${task8()};\n
		     Cмещения прямоугольника по оси X на 2ед = ${task9()};\n
		     Cмещения прямоугольника по оси Y на 2ед = ${task10()};\n
		     Cмещения прямоугольника по оси X  и по оси Y на 2ед = ${task11()};`)
	
}
console.log(rectangle());

	





// function getScore() {
//   var num1 = 2,
//       num2 = 3;
  
//   function add() {
//     return name + ' scored ' + (num1 + num2);
//   }
  
//   return add();
// }

// console.log(getScore());
