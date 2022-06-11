
let color = document.getElementById('hOne');
let paragraph = document.getElementById('para')


function newdate() {
    let date = new Date ();
    paragraph.innerHTML = date;
    
}
function inputChange() {
  let randomNum = Math.floor(Math.random() * 4)
  switch(randomNum){
      case 0:
          color.style.color = 'blue'
          break;
      case 1:
        color.style.color = 'darkblue'
        break;
    case 2:
        color.style.color = 'darkred'
        break;
    case 3:
        color.style.color = 'green'
        break;
        default:
            color.style.color = 'red'
  }
  return randomNum;
};

/*function cal() {
    let fVal = parseInt(document.getElementById('fVal').value);
    let sVal = parseInt(document.getElementById('sVal').value);
    let oper = document.getElementById('oper').value;
    let sum;
    if(oper === '+')
    {
         sum = fVal + sVal;
    }else if(oper === '-'){
        sum = fVal - sVal;
    }else if(oper === '/'){
        sum = fVal / sVal;
    }else if(oper === '*'){
        sum = fVal * sVal;
    };
    document.getElementById('result').innerHTML =`<p>The result is ${sum}`;
}*/


document.getElementById('change').onclick = inputChange;
document.getElementById('newD').onclick = newdate;
document.body.style.backgroundColor = 'beige';

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map( button => {
    button.addEventListener('click', (e) => {
            switch(e.target.innerText){
               case 'C':
                   display.innerText = ''; 
                   break;
                   case '←':
                   if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                   }
                   break;
                   case '=':
                   display.innerText = eval(display.innerText);
                   break;
                default:
                    display.innerText += e.target.innerText;
            }
    });
});
