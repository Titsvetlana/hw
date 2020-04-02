$('document').ready(function(){
	loadGoods();//эта функция загружает товары на страницу
});
function loadGoods(){
	    //загружаю файл json в data
	$.getJSON("eshop.json", function( data ){
		//console.log(data);
		let out = '';
		for(let key in data){//перебираю массив. в key попадает первый артикл(1000) и мы получаем доступ к его значениям
//контактенирую внутринности артикла
			out += '<p>' + data[key]['name'] + '</p>'; 
			out += '<p>' + data[key]['brand'] + '</p>'; 
			out += '<p>' + data[key]['cost'] + '</p>'; 
			out += '<p>' + data[key]['description'] + '</p>';
			out += '<img src = "'+data[key].img+'">';  
    	}
    	$('#eshop').html(out);
	})
}