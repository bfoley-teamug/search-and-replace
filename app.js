const oldWord = document.getElementById('oldWord'); 
const input = oldWord.querySelector('input.input');

const newWord = document.getElementById('newWord');
const inputB = newWord.querySelector('.inputB');

const button = document.getElementById('button');

const before = document.getElementById('before');
const after = document.getElementById('after'); 

button.addEventListener('click', (e) => {
   
  
  
   function replaceWord(text, before, after) {
    const index = text.indexOf(before);
      if (input.value == 0 || inputB.value == 0) { 
        alert("Please fill 'em both out"); 
        return ' '; 
      }   
     //this part doesn't work ... 
//        else if (input.value !== before.indexOf()) {
//          alert("That word ain't there");
//          return ' ';
//        }
     
       else 
         if (text[index] === text[index].toUpperCase()) {
          after = after.charAt(0).toUpperCase() + after.slice(1);
        }
     text = text.replace(new RegExp(before, 'g'), after); //global replace       
     return text;
      
    }
  
   var output = replaceWord(before.textContent, input.value, inputB.value);
   console.log(output); 
  
  const p = document.getElementById('after');
  p.textContent = output; 
});