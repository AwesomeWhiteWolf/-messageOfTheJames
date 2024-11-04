// const quotes = document.querySelectorAll('.slide');
// const input = document.querySelector('.findInput');
// function findText() {
//   for (let i = 0; i < quotes.length; i++) {
//     if ((quotes[i].innerHTML.toLowerCase().indexOf(input.value)) !== -1) {
//       quotes[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
//       // quotes[i].innerHTML.forEach(item => {
//       //   if (item.toLowerCase().includes(input.value)) {
//       //       console.log(item);
//       //   }
//       // });
//       return;
//     }
//   }
// }

const quotes = document.querySelectorAll('.slide');  
const input = document.querySelector('.findInput');  

function findText() {  
  quotes.forEach(quote => {   
    quote.innerHTML = quote.dataset.original || quote.innerHTML;
  });  

  const searchValue = input.value.toLowerCase();  
  
  for (let i = 0; i < quotes.length; i++) {  
    const quoteText = quotes[i].innerHTML.toLowerCase();  
    if (quoteText.indexOf(searchValue) !== -1 && searchValue.length > 0) {  
      if (!quotes[i].dataset.original) {  
        quotes[i].dataset.original = quotes[i].innerHTML;  
      }  
      
      const regex = new RegExp(`(${searchValue})`, 'gi');  
      quotes[i].innerHTML = quotes[i].innerHTML.replace(regex, '<span class="highlight">$1</span>');  
      quotes[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });  
      return;  
    }  
  }  
}

document.addEventListener( 'keyup', event => {
  if( event.code === 'Enter' ) { findText(); }
})