const quotes = document.querySelectorAll('.slide');
const input = document.querySelector('.findInput');
function findText() {
  for (let i = 0; i < quotes.length; i++) {
    if ((quotes[i].innerHTML.indexOf(input.value)) !== -1) {
      quotes[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      return;
    }
  }
}