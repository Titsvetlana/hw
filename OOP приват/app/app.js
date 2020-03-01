class Table{
	date = new Date();//создаем чтоб всегда записывалась дата создания объекта
	#title;
	#width;
	#height;
	#length;
	#countertop_material;
	#foot_material;
	#tabletop_shape;
	#price;
	constructor(title, width, height, length, countertop_material, foot_material, tabletop_shape, price){
		this.#title = title;
		this.#width = width;
		this.#height = height;
		this.#length = length;
		this.#countertop_material = countertop_material;
		this.#foot_material = foot_material;
		this.#tabletop_shape = tabletop_shape;
		this.#price = price;
		//this.info = `Table ${this.#title}, ${this.#width}, ${this.#height}, ${this.#length}, ${this.#countertop_material}, ${this.#foot_material}, ${this.#tabletop_shape}, ${this.#price}`;
	}
}
// get info(){ 
// 	return `Table ${this.#title}, ${this.#width}, ${this.#height}, ${this.#length}, ${this.#countertop_material}, ${this.#foot_material}, ${this.#tabletop_shape}, ${this.#price}`;
// }
get title(){return this.#title;}
get width(){return this.#width;}
get height(){return this.#height;}
get length(){return this.#length;}
get countertop_material(){return this.#countertop_material;}
get foot_material(){return this.#foot_material;}
get tabletop_shape(){return this.#tabletop_shape;}
get price(){return this.#price;}

// static shop(){
// 	return `Магазин "Мебель".`;
// }
// static info = 'Информация о столах';
setTitle(title){//isNan - проверка на число
	if(isNaN(title)){this.#name = name; return name;}
	else{return this.error(name)}
}
setWidth(width){
	if(!isNaN(width) && width > 0 && width < Infinity){this.#width = width; return width;}
	else{return this.error(width);}
}
setHeight(height){
	if(!isNaN(height) && height > 0 && height < Infinity){this.#height = height; return height;}
	else{return this.error(height);}
}
setWidth(length){
	if(!isNaN(length) && length > 0 && length < Infinity){this.#length = length; return length;}
	else{return this.error(length);}
}
setCountertopMaterial(countertop_material){
	if(isNaN(countertop_material)){this.#countertop_material = countertop_material; return countertop_material;}
	else{return this.error(countertop_material);}
}
setFootMaterial(foot_material){
	if(isNaN(foot_material)){this.#foot_material = foot_material; return foot_material;}
	else{return this.error(foot_material);}
}
setTabletopShape(tabletop_shape){
	if(isNaN(tabletop_shape)){this.#tabletop_shape = tabletop_shape; return tabletop_shape;}
	else{return this.error(tabletop_shape);}
}
set PriceUAN(price){
	if(!isNaN(price) && price > 0 && price > Infinity){this.#price = price / 24.5; return this.#price;}
	else{return this.error(price);}
}
setPrice(price){
	if(!isNaN(price) && price > 0 && price < Infinity){this.#price = price; return price;}
	else{return `Error. Bad argument ${price}`;}
}


class Footwear{
	date = new Date();//создаем чтоб всегда записывалась дата создания объекта
	#size;
	#names;
	#price1;
	#material;
	constructor(size, name, price, material){
		this.#size = size;
		this.#names = names;
		this.#price1 = price1;
		this.#material = material;
	}
}
get size(){return this.#size;}
get names(){return this.#names;}
get price1(){return this.#price1;}
get material(){return this.#material;}

setSize(size){
	if(!isNaN(size) && size > 19 && size < 45){this.#size = size; return size;}
	else{return `Error. Bad argument ${size}`;}
}

class Employee{
	date = new Date();//создаем чтоб всегда записывалась дата создания объекта
	#name1;
	#last_name;
	#date_of_birth;
	#education;
	#gender;
	#date_of_employment;
	#nationality;
	#specialty;
	constructor(name, last_name, date_of_birth, education, gender, date_of_employment, nationality, specialty){
		this.#name1 = name1;
		this.#last_name1 = last_name1;
		this.#date_of_birth = date_of_birth;
		this.#education = education;
		this.#gender = gender;
		this.#date_of_employment = date_of_employment;
		this.#nationality = nationality;
		this.#specialty = specialty;
	}
}
get name1(){return this.#name1;}
get last_name(){return this.#last_name;}
get date_of_birth(){return this.#date_of_birth;}
get education(){return this.#education;}
get gender(){return this.#gender;}
get date_of_employment(){return this.#date_of_employment;}
get nationality(){return this.#nationality;}
get specialty(){return this.#specialty;}

function getdate_of_employment() {
  let fD = [2019, 7, 25], 
    d1 = 6, m1 = 4, 
    tx = [], rz, 
    d = new Date,
    tD = [d.getFullYear (), d.getMonth (), d.getDate ()], 
    dr = tD [2] - fD [2],
    mr = tD [1] - fD [1], 
    yr = tD [0] - fD [0], 
    Y = 'год-года-лет',
    M = 'месяц-месяца-месяцев', 
    D = 'день-дня-дней', 
    t = function (v, w) {
    	let x = w.toString ().split (''), 
    	    y = x [x.length - 1], 
    	    z = 0; 
    	    if (x > 4 && x < 21 || y == 0)z = 2; 
    	    else if (y > 1 && y < 5)z = 1; return ' ' + v.split ('-') [z]}
    if (dr < 0) dr = tD [2] + d1; 
    if (yr > 0 && mr < 0) yr -= 1; 
    if (mr < 0) mr = tD [1] + m1; 
let yt = (yr) ? yr + t (Y, yr) : ''; if (yt) tx [tx.length] = yt;
let mt = (mr) ? mr + t (M, mr) : ''; if (mt) tx [tx.length] = mt;
let dt = (dr) ? dr + t (D, dr) : ''; if (dt) tx [tx.length] = dt;
	if (tx.length == 1) rz = tx [0];
	if (tx.length == 2) rz = tx.join (' и ');
	if (tx.length == 3) rz = tx [0] + ', ' + tx [1] + ' и ' + tx [2];
    console.log('Стаж работы: ' + rz);
}
console.log(getdate_of_employment());

function getdate_of_birth() {
  let fD = [2000, 7, 25], 
    d1 = 6, m1 = 4, 
    tx = [], rz, 
    d = new Date,
    tD = [d.getFullYear (), d.getMonth (), d.getDate ()], 
    dr = tD [2] - fD [2],
    mr = tD [1] - fD [1], 
    yr = tD [0] - fD [0], 
    Y = 'год-года-лет',
    M = 'месяц-месяца-месяцев', 
    D = 'день-дня-дней', 
    t = function (v, w) {
    	let x = w.toString ().split (''), 
    	    y = x [x.length - 1], 
    	    z = 0; 
    	    if (x > 4 && x < 21 || y == 0)z = 2; 
    	    else if (y > 1 && y < 5)z = 1; return ' ' + v.split ('-') [z]}
    if (dr < 0) dr = tD [2] + d1; 
    if (yr > 0 && mr < 0) yr -= 1; 
    if (mr < 0) mr = tD [1] + m1; 
let yt = (yr) ? yr + t (Y, yr) : ''; if (yt) tx [tx.length] = yt;
let mt = (mr) ? mr + t (M, mr) : ''; if (mt) tx [tx.length] = mt;
let dt = (dr) ? dr + t (D, dr) : ''; if (dt) tx [tx.length] = dt;
	if (tx.length == 1) rz = tx [0];
	if (tx.length == 2) rz = tx.join (' и ');
	if (tx.length == 3) rz = tx [0] + ', ' + tx [1] + ' и ' + tx [2];
    console.log('Стаж работы: ' + rz);
}
console.log(getdate_of_birth());