let correctCount = 0;
const questionCount = document.querySelectorAll('.answer-submit').length;
document.querySelectorAll('.answer-submit').forEach(button => {  
  button.addEventListener('click', function() {  
    const liElement = button.closest('li');  
    if (liElement.classList.contains('disabled')) {  
      return; 
    }  
    const selectedAnswer = liElement.querySelector('input[type="radio"]:checked');  
    const correctAnswer = button.getAttribute('data-correct');   
    if (selectedAnswer) {  
        const selectedValue = selectedAnswer.value;  
        if (selectedValue === correctAnswer) {  
          liElement.querySelector('.accepted').style.display = 'block';    
          liElement.querySelector('.comment').style.display = 'block';  
          liElement.querySelector('.correct').style.display = 'none';
          correctCount++;
        } else {  
          liElement.querySelector('.correct').style.display = 'block'; 
          liElement.querySelector('.comment').style.display = 'block'; 
          liElement.querySelector('.accepted').style.display = 'none';
        }  
    } else {  
        alert("Пожалуйста, выберите ответ");  
    } 
    liElement.classList.add('disabled');   
  });  
});  

const resultsText = document.querySelector('.resultsText');
function results() {
  if (correctCount === questionCount) {
    resultsText.innerHTML = `Поздравляю, вы ответили правильно на все ${correctCount} вопросов`;
  }
  else {
    resultsText.innerHTML = `Правильных ответов: ${correctCount}`;
  }
}