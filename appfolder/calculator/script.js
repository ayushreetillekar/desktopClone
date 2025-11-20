const textSection = document.querySelector('.text-area input');
const btns = document.querySelectorAll('.btn');

let string = "";

btns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        const value =  e.target.textContent;

        if(value === '='){
           try {
              string = eval(string);
             textSection.value = string;
           } catch (error) {
              string = `Can't Evaluate`;
              textSection.value = string
           }
        }
        else if(value === 'B'){
            string = string.slice(0, -1);
            textSection.value = string;
        }
        else if(value=== 'C'){
            string = '';
            textSection.value = '';
        }
        else{
            string += value;
            textSection.value = string;
        }
    })
})