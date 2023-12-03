let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let input = document.querySelectorAll('input');
let calc = document.querySelector('button');

calc.addEventListener('click',()=>{
    if(!Number(weight.value && height.value) && isNaN(weight.value) || isNaN(height.value) && weight.value ==='' || height.value===''){
        alert('Please Enter Valid Value');
    }
    else{
        let weightVal = weight.value;
        let heightVal = height.value;
        let result = weightVal/heightVal*2;
        let h1 = document.querySelector('h1');
        h1.innerHTML = `${Math.round(result)} BMI`;
        let h2 = document.querySelector('h2');
        if(result<19){
            h2.innerHTML = "underweight";
            weight.value ='';
            height.value ='';

        }
        else if(result>=19 && result<25){
            h2.innerHTML = "Normal"
            weight.value ='';
            height.value ='';
        }
        else if(result>25){
            h2.innerHTML = "Overweight"
            weight.value ='';
            height.value ='';
        }
    }
});