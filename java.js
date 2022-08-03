const input = document.getElementById('input')
const button = document.getElementById('button')
const res = document.getElementById('res')

task1 = 'Lixo, Caixa do Simba, chão fora'
task3 = 'Varrer o chão casa, quartos, banheiro'
task2 = 'Limpar por cima e organizar banheiro'
task4 = 'Roupas'

function onCLick(){
    x = input.value
    switch(x) {
        case '1': 
        case '5':     
        case '9':     
        case '13':   
        case '17': 
        case '21':
        case '25':
        case '29':                                                               
            res.innerHTML = `Pablo: ${task1} || Nilo:${task2} || Lucas:${task3} || João: ${task4} `
          break;
        case '2': 
        case '6':  
        case '10':  
        case '14':  
        case '18':  
        case '22':  
        case '26':  
        case '30':                                     
            res.innerHTML = `Pablo: ${task2} || Nilo:${task3} || Lucas:${task4} || João: ${task1}  `
          break;
        case '3':            
        case '7':            
        case '11':            
        case '15':            
        case '19':            
        case '23':            
        case '27':            
        case '31':                                          
            res.innerHTML = `Pablo: ${task3} || Nilo:${task4} || Lucas:${task1} || João: ${task2}`
          break;
          case '4':            
          case '8':            
          case '12':            
          case '16':            
          case '20':            
          case '24':            
          case '28':                                
              res.innerHTML = `Pablo: ${task4} || Nilo:${task1} || Lucas:${task2} || João: ${task3}`
            break;
        
        default:
            res.innerHTML = 'Digita certo seu burro!!'
      }
    input.value = ""
}

button.addEventListener('click', onCLick)

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});