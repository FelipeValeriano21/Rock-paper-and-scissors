var novaArray = ["pedra", "papel", "tesoura"]; 

function jogar (){

    const opcpc = Math.floor(Math.random() * novaArray.length);
    console.log("O valor sorteado é " + novaArray[opcpc])

    const valormaquina = novaArray[opcpc];

    return valormaquina;
    


}

function pedra(){

const valormaquina = jogar (); 


if(valormaquina=="pedra"){
    window.alert("Deu empate");
}else if (valormaquina=="papel"){
    window.alert("a maquina ganhou");
}else{
    window.alert("Você ganhou");
}

document.getElementById( 'pedramaquina' ).style.opacity = 0;

}

function papel(){

    const valormaquina = jogar (); 
    
    
    if(valormaquina=="pedra"){
        window.alert("Você ganhou");
    }else if (valormaquina=="papel"){
        window.alert("Deu empate");
    }else{
        window.alert("a maquina ganhou");
    }
    
}

function tesoura(){

    const valormaquina = jogar (); 
    
    
    if(valormaquina=="pedra"){
        window.alert("a maquina ganhou");
    }else if (valormaquina=="papel"){
        window.alert("Você ganhou");
    }else{
        window.alert("Deu empate");
    }
    
}