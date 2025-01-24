let mydiv=document.querySelector('#myDiv');
// let newElement=document.createElement('span')
// newElement.textContent="Love Babbar"

// mydiv.insertAdjacentElement('beforeend',newElement);

let parent=document.querySelector('#myDiv');
//let parent=child.parentElement;//wont work
let child=document.querySelector('#fPara');
parent.removeChild(child);
