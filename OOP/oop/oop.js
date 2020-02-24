class Table{
	date = new Date();//создаем чтоб всегда записывалась дата создания объекта
	constructor(title, width, height, length, countertop_material, foot_material, tabletop_shape, price){
		this.title = title;
		this.width = width;
		this.height = height;
		this.length = length;
		this.countertop_material = countertop_material;
		this.foot_material = foot_material;
		this.tabletop_shape = tabletop_shape;
		this.price = price;
	}
}

class Footwear{
	date = new Date();//создаем чтоб всегда записывалась дата создания объекта
	constructor(size, name, price, material){
		this.size = size;
		this.name = name;
		this.price = price;
		this.material = material;
	}
}

class Employee{
	date = new Date();//создаем чтоб всегда записывалась дата создания объекта
	constructor(name, last_name, date_of_birth, education, gender, date_of_employment, nationality, specialty){
		this.name = name;
		this.last_name = last_name;
		this.date_of_birth = date_of_birth;
		this.education = education;
		this.gender = gender;
		this.date_of_employment = date_of_employment;
		this.nationality = nationality;
		this.specialty = specialty;
	}
}

let table_small = new Table('Детский', "80см", "50см", "100см", "ДСП", "дерево", "прямоугольная", "1200 грн");
console.log(table_small);
console.log(table_small.title);

let sneakers_man = new Footwear("41р", 'Adidas', "3500грн", "кожа");
console.log(sneakers_man);
console.log(sneakers_man.name);

let working = new Employee('Ярослав', "Бойко", "23.04.1998", "высшее", "муж", "15.09.2017", "украинец", "оператор");
console.log(working);
console.log(`${working.name} ` + `${working.last_name}`);

