// Função para manipular os dados
function calculo(tipo, valor) {

    if(tipo === 'acao') {

        if(valor === 'c') {
            // Limpar o visor da calculadora
            document.getElementById('visor').value = ''
        }

        // Tratando as operações
        if(valor === '/' || valor === '-' || valor === '*' || valor === '+' || valor === '.' ) {
            document.getElementById('visor').value += valor
        }

        // Calculando resultado
        if(valor === '=') {
            // Recupera e faz a operacão do valor
            var valor_visor = eval(document.getElementById('visor').value)
            // Exibir resultado
            document.getElementById('visor').value = valor_visor
        }

        // Raiz quadrada
        if(valor === '^2'){
            valor_recebido = document.getElementById('visor').value
            valor_raiz = (valor_recebido * valor_recebido)
            document.getElementById('visor').value = valor_raiz
        }
    } else if (tipo === 'valor') {
        //Mostrar o valor no visor
        document.getElementById('visor').value += valor
    }
}