//КАЛЬКУЛЯТОР 1
let num1,
	num2,
	result;
function number(){
	num1 = document.getElementById('n1').value;//получаем первое значение введенное пользователем
	num1 = parseInt(num1);// проверяем чтоб получили целое число (Int)

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
}	
function plus(){
	number();
	result = num1 + num2;
	document.getElementById('out').innerHTML = result; //записуем в кнопку результат
}

function minus(){
	number();
	result = num1 - num2;
	document.getElementById('out').innerHTML = result; //записуем в кнопку результат
}

//КАЛЬКУЛЯТОР 2
// функция для отоброжения добовления вводимого текста в первую строку калькулятора
function insert(num){
	// выбираю форму и дорбовляю вводимое
	document.form.textview.value = document.form.textview.value + num;
}
// функция для удаления всех символов
function clean(){
	document.form.textview.value = '';
}
// функция для удаления последнего символа
function back(){
	let exp = document.form.textview.value; //передаю значение всей строки
	document.form.textview.value = exp.substring(0, exp.length - 1);//записую  новую строку от 0 єлем до последнего-1
}
// функция =
function equal(){
	let exp = document.form.textview.value;
	if(exp){
		//eval - функция js, она считывает строку и возвращает результат, в ней поддерживаются все знаки и скобки, дроби
		document.form.textview.value = eval(exp);
	}
}


//секундамер
//объявляем переменные
   var base = 60; 
   var clocktimer,dateObj,dh,dm,ds,ms; 
   var readout=''; 
   var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
   
   //функция для очистки поля
   function ClearСlock() { 
        clearTimeout(clocktimer); 
        h=1;m=1;tm=1;s=0;ts=0;ms=0; 
        init=0;
        readout='00:00:00.00'; 
        document.MyForm.stopwatch.value=readout;        
   } 
   
   //функция для старта секундомера
   function StartTIME() { 
        var cdateObj = new Date(); 
        var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
        if (t>999) { s++; } 
        if (s>=(m*base)) { 
                ts=0; 
                m++; 
        } else { 
                ts=parseInt((ms/100)+s); 
                if(ts>=base) { ts=ts-((m-1)*base); } 
        } 
        if (m>(h*base)) { 
                tm=1; 
                h++; 
        } else { 
                tm=parseInt((ms/100)+m); 
                if(tm>=base) { tm=tm-((h-1)*base); } 
        } 
        ms = Math.round(t/10); 
        if (ms>99) {ms=0;} 
        if (ms==0) {ms='00';} 
        if (ms>0&&ms<=9) { ms = '0'+ms; } 
        if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
        dm=tm-1; 
        if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
        dh=h-1; 
        if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
        readout = dh + ':' + dm + ':' + ds + '.' + ms; 
        document.MyForm.stopwatch.value = readout; 
        clocktimer = setTimeout("StartTIME()",1); 
   } 
   
   //Функция запуска и остановки
   function StartStop() { 
        if (init==0){ 
                ClearСlock();
                dateObj = new Date(); 
                StartTIME(); 
                init=1; 
                alert('Таймер запущен');
        } else { 
                clearTimeout(clocktimer);
                init=0;
                alert('Таймер остановлен');
        } 
   } 


// let interval = 0,
//     sec = 0;

// function start(){
// 	if(interval == 0){
// 		interval = setInterval(()=>sec++, 1000);
// 		alert('Таймер запущен');
// 	}else{
// 		alert('Таймер уже запущен');
// 	}
// }    

// function pause(){
// 	if(interval == 0){
// 		alert('Таймер не был запущен');
// 	}else{
// 		clearInterval(interval);
// 		alert('Таймер остановлен, ', sec);
// 		interval = 0;
// 	}
// }

// function stop(){
// 	if(interval == 0){
// 		alert('Таймер не был запущен');
// 	}else{
// 		clearInterval(interval);
// 		alert('Прошло: ', sec);
// 		interval = 0;
// 		sec = 0;
// 		alert('Таймер остановлен ', sec);
// 	}
// }