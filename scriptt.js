// const button = document.getElementById('btn');
// const mainBody = document.querySelector('main');
// const section = document.getElementById('section');
// const div = document.createElement('div');
// const li = document.createElement('li');
// li.innerText = 'print this'
// div.innerHTML = '<h2>This is a page loaded</h2>';
// document.addEventListener('DOMContentLoaded', ()=> {
//     mainBody.appendChild(div)
// })
// section.addEventListener('mouseover', ()=> {
//     section.appendChild(li)
//     section.style.background = 'blue'
// })
// section.addEventListener('mouseout', ()=> {
//     section.removeChild(li)
//     section.style.background = 'white'
// })
// button.addEventListener('click',()=> {
//     button.style.background = 'blue'
//     button.innerText = 'click again'
//     mainBody.removeChild(div);
// })

const div = document.createElement('div');
div.innerHTML = '<h2>Welcome,please fill this form as required.</h2>'
const mainBody = document.querySelector('body');
document.addEventListener('DOMContentLoaded', ()=> {
    mainBody.appendChild(div)
})
document.addEventListener('mouseover',()=> {
    mainBody.removeChild(div)
})

const input = document.getElementById('new-password')
input.addEventListener('paste',()=> {
    input.innerText = 'Not Accepted';
    input.style.background = 'black';
})


// input.addEventListener('input',()=> {
//     // input.innerText = 'Not Accepted';
//     input.style.background = 'blue';
// })

input.addEventListener('mouseout',()=> {
    // input.innerText = 'Not Accepted';
    input.style.background = '#0a0a23';
})

const hints =document.createElement('div');
const li = document.createElement('li');
li.innerText = 'Password should be more than 8 character.' ;
hints.innerHTML =(li);
div.innerText = '1. Password should be min of 8 character'; 

input.addEventListener('input',()=> {
    hints.appendChild(div);
})



// const text = document.createComment('sub');
// const press = document.getElementById('sub');
// document.addEventListener('click',()=> {
//     text.innerText #0a0a23


// })


// function checkyourCookies() {

//     var text = "";
  
//     if (navigator.cookieEnabled == true) {
  
//       text = "your web page Cookies are active.";
  
//     } else {
  
//       text = "your web page Cookies are not active.";
  
//     }
  
//     document.getElementById("OnloadTest").innerHTML = text;
  
//   }
