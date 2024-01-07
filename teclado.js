var SETA_ESQUERDA = 37;
var ESQUERDA = 65;
var SETA_ACIMA = 38;
var ACIMA = 87;
var SETA_DIREITA = 39;
var DIREITA = 68;
var SETA_ABAIXO = 40;
var ABAIXO = 83;
var ESPACO = 32;
var ENTER = 13;

function Teclado(elemento){
    this.elemento = elemento;

    this.pressionadas = [];

    this.disparadas = [];

    this.funcoesDisparo = [];

    var teclado = this;

    elemento.addEventListener('keydown', function(evento){
        var tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;

        if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]){
            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla] ();
        }
    });

    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.keyCode] = false;
        teclado.disparadas[evento.keyCode] = false;
    });
}

Teclado.prototype = {
    pressionada: function(tecla){
        return this.pressionadas[tecla];
    },
    disparou: function(tecla, callback){
        this.funcoesDisparo[tecla] = callback;
    }
}