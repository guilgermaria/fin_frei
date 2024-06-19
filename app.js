import prompt from 'prompt-sync'
let ler = prompt()

import {menu} from './menu.js'
import {sacar,depositar,exibirSaldo,investimento} from './financeiro.js'
import {titulo, agradecimento} from './exibicao.js'

const magenta = '\x1b[35m%s\x1b[0m'
let saldo = 0
let op = 1

while (op != '0'){
    console.log(magenta, titulo())
    op = menu()
    if(op == '1'){
        console.log('\nInsira o valor a ser depositado')
        saldo = depositar(saldo)

    } else if (op == '2'){

        console.log('\nInsira o valor a a ser sacado')
        saldo = sacar(saldo)

    } else if (op == '3'){
        exibirSaldo(saldo)
    } else if (op == 4){
        console.log('\n Insira os Juros, o tempo investido em meses, e o capital inicial')
        let J = Number(ler())
        let T = Number(ler())
        let C = Number(ler())

        let lucro = investimento(J,T,C)

        console.log(`O seu lucro é de ${lucro}`)
    }
}

console.log(magenta, agradecimento())