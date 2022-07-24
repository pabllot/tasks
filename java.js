const input = document.getElementById('input')
const button = document.getElementById('button')
const res = document.getElementById('res')

task1 = 'Lixo, Caixa do Simba, chão fora'
task3 = 'Varrer o chão casa, quartos, banheiro'
task2 = 'Limpar por cima, roupas, organizar banheiro'

function onCLick(){
    x = input.value
    switch(x) {
        case '1': 
        case '4':     
        case '7':     
        case '10':   
        case '13': 
        case '16':
        case '19':
        case '22':                                
        case '25':                                
        case '28':                                
        case '31':                                
            res.innerHTML = `Pablo: ${task1} || Nilo:${task2} || Lucas:${task3} `
          break;
        case '2': 
        case '5':  
        case '8':  
        case '11':  
        case '14':  
        case '17':  
        case '20':  
        case '23':             
        case '26':             
        case '29':                          
            res.innerHTML = `Pablo: ${task3} || Nilo:${task1} || Lucas:${task2} `
          break;
        case '3':            
        case '6':            
        case '9':            
        case '12':            
        case '15':            
        case '18':            
        case '21':            
        case '24':                       
        case '27':                       
        case '30':                       
            res.innerHTML = `Pablo: ${task2} || Nilo:${task3} || Lucas:${task1}`
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