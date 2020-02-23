let a = 0;
let line;
function loaber1(obj){
	a++;
	    console.clear();
	    console.log(`ASCII_▲: ${obj.line[obj.index]}`);
	    obj.index = (obj.index + 1) % 4;
	if(a == 10){
		clearInterval(asd);
	}	
}
let asd = setInterval(loaber1, 1000, {line: 'ᐅ▲ᐊ▼', index: 0});
//*****************************************************************
function loaber2(obj){
	a++;
	if(a > 10){
		console.clear();
	    console.log(`ASCII_⣿: ${obj.line[obj.index]}`);
	    obj.index = (obj.index + 1) % 9;
	}
	
	if(a == 30){
		clearInterva(asb);
	}	
}	
let asb = setInterval(loaber2, 1000, {line: '⣿⡿⣟⣯⣷⣾⣽⣻⢿', index: 0});
//********************************************************************
function loaber3(obj){
	a++;
	if(a > 30){
		console.clear();
		console.log(`ASCII_⬍: ${obj.line[obj.index]}`);
		obj.index = (obj.index + 1) % 4;
	}
	
	if(a == 38){
		clearInterval(asv);
	}	
}
let asv = setInterval(loaber3, 1000, {line: '⬌⬉⬍⬈', index: 0});
//****************************************************************
function loaber4(obj){
	a++;
	if(a > 38){
		console.clear();
		console.log(`ASCII_+: ${obj.line[obj.index]}`);
		obj.index = (obj.index + 1) % 2;
	}
	
	if(a == 46){
		clearInterval(asс);
	}	
}
let asс = setInterval(loaber4, 1000, {line: '+×', index: 0});
//*************************************************************




	
 

	