// class Link {
//   constructor (url, text, tooltip, cssClass) {
//       this.url = url;
//       this.text = text;
//       this.tooltip = tooltip;
//       this.cssClass = cssClass;
//   }
//   createLinkHtml() {  
//     return `<a href="${this.url}" class="${this.cssClass}" title="${this.tooltip}">${this.text}</a>`;  
//   }  
// }
// const links = [  
// new Link('explanation/index.html', 'Толкование', 'Перейти на страницу Толкование', 'link-style1'),
// new Link('quotes/index.html', 'Цитаты', 'Перейти на страницу Цитаты', 'link-style2'),
// new Link('video/index.html', 'Видео', 'Перейти на страницу Видео', 'link-style3'),
// new Link('test/index.html', 'Тест', 'Перейти на страницу Тест', 'link-style1')
// ];  
// const randomLink = links[Math.floor(Math.random() * links.length)]; 
// let link1 = new Link(randomLink.url, randomLink.text, randomLink.tooltip, randomLink.cssClass); 
// document.getElementById('randomLink').innerHTML = link1.createLinkHtml();  


// class Theme {  
//   constructor(theme, chapter) {  
//       this.theme = theme;  
//       this.chapter = chapter;  
//   }  
// }  
// // Функция для генерации таблицы  
// function generateTable(users) {  
//   const headers = ['Тема', 'Глава'];  
//   let table = '<table border="1"><thead><tr>';  
//   headers.forEach(header => {  
//       table += `<th>${header}</th>`;  
//   });
//   table += '</tr></thead><tbody>';  
//   themes.forEach(themeObj => {  
//       table += '<tr>';  
//       table += `<td>${themeObj.theme}</td>`;  
//       table += `<td>${themeObj.chapter}</td>`;  
//       table += '</tr>';  
//   });  
//   table += '</tbody></table>';  
//   return table;  
// }  
// const themes = [  
//   new Theme('Об искушениях', 1),  
//   new Theme('О лицеприятии', 2),  
//   new Theme('Вера без дел мертва', 2),   
// ];  
// document.getElementById('themeTable').innerHTML = generateTable(themes);  