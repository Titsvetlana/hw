function load(){
	const aja = new XMLHttpRequest();
	aja.addEventListener('readystatechange', function(){
		if(this.status == 200 && this.readyState == 4){
		show(this.responseText);
		}
	})
	aja.open('GET', '/data/data.json');
	aja.send();
}
	
function show(data){
	console.log(JSON.parse(data));
	document.querySelector('#root').innerHTML = renderTable(JSON.parse(data));
}
function renderTable(arr){
	return `<table>${arr.map(el=>`<tr><td>${el.id}</td><td>${el.author}</td><td>${el.message}</td></tr>`).join('')}</table>`;
}

document.querySelector('.btn-load').addEventListener('click', load);