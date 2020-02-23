//cars //Массив с объектами

const carsLen = cars.length;

//ВЫДАЕТ ЦВЕТА БЕЗ ПОВТОРЕНИЙ
 function countColor(carsArr){ 
// 	//Выдает в виде массива все цвета всех машин в исходном массиве 
// 	//['БІЛИЙ', "ЧОРНИЙ", "БЛАКИТНИЙ", ...]

	const color = {};
	const colorName = [];
	//const carsLen = cars.length;
	for(let i = 0; i < carsLen; i++){
		color[cars[i].COLOR] = cars[i].COLOR;
	}
	for(ad in color){
		colorName.push(ad);
	}
	return colorName;
}

//ВЫДАЕТ ВСЕ ЦВЕТА, С ПОВТОРЕНИЯМИ
 function countColor1(carsArr){ 
// 	//Выдает в виде массива все цвета всех машин в исходном массиве 
// 	//['БІЛИЙ', "ЧОРНИЙ", "БЛАКИТНИЙ", ...]

	const color = new Set();
	console.time('loopTest');//счетчик времени обработки базы данных (начало)
	for(let i = 0; i < carsLen; i++){
		color.add(cars[i].COLOR);
	}
	console.timeEnd('loopTest');//счетчик времени обработки базы данных (конец)
	return color;
}
//***********************************************************************

 function maxColor(carsArr){
   //Выдает в виде строки цвет наиболее часто встречаемый в массиве
  //'ЗЕЛЕНИЙ'
    const color = {};
    let max = 0, 
        name = '';
    for(let i = 0; i < carsLen; i++){
    	if(color[cars[i].COLOR]){
    		color[cars[i].COLOR]++;
    	}else{
    		color[cars[i].COLOR] = 1;
    	}
    	if(max < color[cars[i].COLOR]){
    		max = color[cars[i].COLOR];
    		name = cars[i].COLOR;
    	}
    } 
    return(name);   
}   

 function countCars(carsArr){
    //Выдает массив объектов с именем ОВД и количеством автомобилей
    // [{OVD: 'Название ОВД', count : количество_машин}, ...]
    const ovd = {};
    for(let i = 0; i < carsLen; i++){
    	if(ovd[cars[i].OVD]){
    		ovd[cars[i].OVD]++;
    	}else{
    		ovd[cars[i].OVD] = 1;
    	}
    }
    return ovd;  
}
//*******************************************************************

 function oldAndNew(carsArr){
     //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
     //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]

    let min = {
    	name : cars[0].BRAND, 
    	date : cars[0].THEFT_DATA
    };
    let max = {
    	name : cars[0].BRAND, 
    	date : cars[0].THEFT_DATA
    };
    for(let i = 1; i < carsLen; i++){
    	if(min.date > cars[i].THEFT_DATA){
    		min.date = cars[i].THEFT_DATA;
    		min.name = cars[i].BRAND; 		
    	}
    	else if(max.date < cars[i].THEFT_DATA){
    		max.date = cars[i].THEFT_DATA;
    		max.name = cars[i].BRAND;	
    	}
    }	
    return{min, max};
}

console.log(countColor(cars));
console.log(countColor1(cars));
console.log(maxColor(cars));
console.log(countCars(cars));
console.log(oldAndNew(cars));