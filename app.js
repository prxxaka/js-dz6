let counter = document.querySelectorAll('.counter')
for (let i = 0; i < counter.length; i++){
   counter[i].onclick = function (){
       let incBtn = document.querySelectorAll('.increment')
       let decBtn = document.querySelectorAll('.decrement')
       let input = document.querySelectorAll('.input')
       let textFieldValue = +input.value;

        incBtn.onclick = function (){
            input.value = textFieldValue + 1;
        }
        decBtn.onclick = function (){
            input.value = textFieldValue - 1;
        }
    }
}

