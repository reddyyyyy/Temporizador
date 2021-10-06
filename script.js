// variaveis
var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var começar = document.getElementById('começar');

var tempSeg;
var minutoAtual;
var segundoAtual;
var intervalo;
// temporizador

for(i=0;i<=60;i++) {
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>';
};

for(i=0;i<=60;i++) {
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>';
};

começar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

    intervalo = setInterval(function(){
        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                alert("acabou");
                clearInterval(intervalo);
            };
        };

        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    },1000);
});

