//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

//create an element with ('tagName)
// tagName = 'p', 'div', 'span'..etc
let element = document.createElement('div')

//set properties:
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

//Append Elements into the DOM:
document.body.appendChild(element);

//Center the element:
element.style.textAlign ='center';

//Append elements to that element:
let ul = document.createElement('ul');

for(let i=0; i<3; i++){
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

//text align to left
ul.style.textAlign ='left';

//removeChild()
ul.removeChild(ul.querySelector('li:nth-child(2)'));

//remoe ul
ul.remove();
