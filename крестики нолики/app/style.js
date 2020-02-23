let area = document.getElementById('area'),//обращаемся к нашему блоку area
    move = 0;

area.addEventListener('click', function(event){
	if(move % 2 == 0){//четный ход - крестики, нечетный- ход ноликов
		event.target.innerHTML = 'X'; //innerHTML- получить, положить
	}else{
		event.target.innerHTML = '0';
	}
	move++;
	check();
});
function check(){
	let boxes = document.getElementsByClassName('box');//обращаемся к box
	let arr = [ 
		[0,1,2],
		[3,4,5],
		[6,7,8],

		[0,3,6],
		[1,4,7],
		[2,5,8],

		[0,4,8],
		[2,4,6]
	]

	for(let i = 0; i < arr.length; i++){ //проверяю на совпадения
		if(boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' &boxes[arr[i][2]].innerHTML == 'X'){
			alert('Победили Крестики');
			location.reload();//обновляем и начинаем игру заново
		}else if(boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' &boxes[arr[i][2]].innerHTML == '0'){
			alert('Победили Нолики');
			location.reload();
		}
	}
}
