var dom = document.querySelector('#articles');
var main = document.querySelector('#main');


dom.children[0].lastElementChild.style.color = 'blue';
dom.children[0].style.fontSize = '50px';
dom.previousElementSibling.style.backgroundColor = 'black';

main.childNodes[1].style.textDecoration = 'underline';
main.lastElementChild.style.fontSize = '50px';
main.firstElementChild.style.color = 'orange';
main.lastElementChild.parentElement.style.fontSize = "40px";