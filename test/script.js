document.querySelectorAll('.answer-submit').forEach(button => {  
  button.addEventListener('click', function() {  
      const liElement = button.closest('li');  
      const selectedAnswer = liElement.querySelector('input[type="radio"]:checked');  
      const correctAnswer = button.getAttribute('data-correct');   
      if (selectedAnswer) {  
          const selectedValue = selectedAnswer.value;  
          if (selectedValue === correctAnswer) {  
            liElement.querySelector('.accepted').style.display = 'block';    
            liElement.querySelector('.comment').style.display = 'block';  
            // console.log(1);
          } else {  
            liElement.querySelector('.correct').style.display = 'block'; 
            liElement.querySelector('.comment').style.display = 'block'; 
            liElement.querySelector('.accepted').style.display = 'none';      
          }  
      } else {  
          alert("Пожалуйста, выберите ответ");  
      }  
  });  
});  