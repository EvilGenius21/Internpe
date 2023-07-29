let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('but'))
console.log(buttons)
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
    switch(e.target.innerText){
        case 'C':
            display.innerText='';
            break;
        case'<':
        if( display.innerText){
            display.innerText=display.innerText.slice(0,-1)
        }
        break;   
        case'=':
        try{
            display.innerText=eval(display.innerText)
            // eval takes a string and excutes it as it is a js code
            // avoid it when making application
        }catch{
            display.innerText='ERROR!'
        }
        break;   
        default:
            display.innerText+=e.target.innerText;
          
    }
    })
})