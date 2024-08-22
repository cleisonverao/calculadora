//função para adicionar o número no display
function add(char){
const valor = document.querySelector('.display').value;
document.querySelector('.display').value = valor + char;
}
//função para limpar o input
function clearInput(){
    document.querySelector('.display').value = '';
}
//função para calcular usando eve() do javaScript
function calcular(){
    const valor = document.querySelector('.display').value;
    document.querySelector('.display').value = eval(valor);
}
//função para inverter o número
function inverter(){
    const valor = document.querySelector('.display').value;
    document.querySelector('.display').value = valor * -1;
}
