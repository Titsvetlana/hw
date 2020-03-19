(function() { 
	let inp = document.querySelectorAll('.point'),
	    mas = [],
	    btn = document.querySelector('button'),
	    max1 = 0,
		max2 = 0,
		max3 = 0,
		ind1, ind2, ind3;
	btn.onclick = function(){
		for (var i = 0; i < inp.length; i++) {
	        mas[i] = inp[i].value;
				if(mas[i] > max1){
					max1 = mas[i];
					ind1 = mas.indexOf(max1) + 1;		
				}
				else if(mas[i] < max1 && max2 < mas[i]){
					max2 = mas[i];
					ind2 = mas.indexOf(max2) + 1;
				}
				else if(mas[i] < max2 && mas[i] < max1 && max3 < mas[i]){
					max3 = mas[i];
					ind3 = mas.indexOf(max3) + 1;
				}		
	    }
	    let one = document.querySelector('.one');
	    one.innerHTML = max1;
	    let one1 = document.querySelector('.one1');
	    one1.innerHTML = ind1;
	    let two = document.querySelector('.two');
	    two.innerHTML = max2;
	    let two2 = document.querySelector('.two2');
	    two2.innerHTML = ind2;
	    let three = document.querySelector('.three');
	    three.innerHTML = max3;
	    let three3 = document.querySelector('.three3');
	    three3.innerHTML = ind3;
	}
})();
