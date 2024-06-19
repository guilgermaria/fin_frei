import prompt from 'prompt-sync';
let ler = prompt();

const verdin = '\x1b[32m%s\x1b[0m'

function depositar(saldo){
    //Pergunte quanto o usuário deseja depositar
    let confirma = false
    let novoValor = saldo
    while (confirma == false){
        let depositado = Number(ler())
        if (String(depositado) == 'c'){
            confirma = true
            depositado = 0;
        } else if(depositado > 0){
            confirma = true
            novoValor = saldo + depositado;
        }

    }
    return novoValor;
}

function sacar(saldo){
    //Pergunte quanto o usuário deseja sacar
    let confirma = false
    let novoValor = saldo
    while(confirma == false){
        let sacado = Number(ler())
        if (String(sacado) == 'c'){
            confirma = true
    
        } else if (sacado > 0){
            confirma = true
            novoValor = saldo - sacado
        }

    }
    return novoValor;

}

function exibirSaldo(saldo){
    console.log(verdin, saldo);
}

function investimento(juros,meses,capital){
    let lucro = capital * (1 + juros/100) ** meses

    return lucro
}

export {depositar,sacar,exibirSaldo,investimento}