const emojis = [
    "😂",
    "😂",
    "😊",
    "😊",
    "🤣",
    "🤣",
    "😍",
    "😍",
    "😒",
    "😒",
    "👌",
    "👌",
    "😘",
    "😘",
    "😁",
    "😁"
    ]; //guardar os emojis
let openCards = []; //Guardar os elementos que vamos abrir
let listaCard = []

// Deixar os emojis de modo randomico.
let randomEmojis = emojis.sort(()=>{
    Math.random() > 0.5 ? 2: -1

})

// Para incrementar os emojis na tela
for(let i =0; i< emojis.length;i++){
    let caixa = document.createElement("div");
    caixa.className = `item` ;
    caixa.innerHTML = randomEmojis[i];
    caixa.onclick = handleClick;
    document.querySelector(".game").appendChild(caixa);
    

}


function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this)
        
    }else if(openCards.length === 2){
        setTimeout(verificarCartas,500);

    }
}

function verificarCartas(){
    if( openCards[0].innerHTML === openCards[1].innerHTML){

        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    if(document.querySelectorAll("boxMatch").length === emojis.length){
        alert("Você venceu!");
        window.location.reload();

    }
    openCards = [];


}