let btn = document.querySelector('button'), 
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.closeBtn');
    btn.addEventListener('click', function(){//создаю безымян. функц
    	modal.style.display = 'flex';//и говорюб что при клике меняйся на flex(становись видимой)
    })
    closeBtn.addEventListener('click', function(){
    	modal.style.display = 'none';
    })
    //функция- при нажатии на серую область, чтоб модал.окно закрывалось
    window.addEventListener('click', function(e){
    	if(e.target == modal){
    		modal.style.display = 'none';
    	}
    })
