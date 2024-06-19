import prompt from 'prompt-sync'
let ler = prompt()

export function menu(){
    console.log(`
Selecione uma das opções:
1. Depositar
2. Sacar
3. Visualizar Saldo
4. Simular Investimento
0. Sair
`)
    let opção = ler()

    return opção
}