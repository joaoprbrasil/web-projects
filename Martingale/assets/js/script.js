var botao = document.getElementById("buttonLogin");
var run = document.getElementById("run");

if(botao !== null){
    botao.addEventListener("click", function() {
        window.location.href = "./home.html";
    });
}

if(run !== null){
    run.addEventListener("click", function(){
        var coroa=0, moeda;
        const array = [10, 100, 1000, 10000, 20000, 50000, 100000];
        for(let j=0; j<array.length; j++){
            for(let i=0; i<=array[j]; i++){
                moeda = Math.floor(Math.random() * 2);
                if(moeda == 1)
                    coroa++;
                document.getElementById('coroas'+(j+1)).innerHTML = coroa;
                document.getElementById('fr'+(j+1)).innerHTML = (coroa/array[j]).toFixed(4);
            }
            coroa=0;
        }
    });
}
