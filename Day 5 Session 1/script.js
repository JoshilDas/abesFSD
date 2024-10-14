// import React from 'react';

// // Arrow function component
// const App = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>This is my first basic React component using an arrow function.</p>
//     </div>
//   );
// }


// import React from 'react';
// import Counter from './Counter';

// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;

// function display(){
//     let p1=document.querySelectorAll("p");
//     p1[0].innerHTML="I am in paragraph";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="I am in paragraph";
//     p1[1].style.backgroundColor="green";
// }

// int changeheader=()=>{

// }

let a=()=>{
    console.log("arrow function");
}
let b=()=>console.log("Arrow function");
let c=(x,y)=>{
    return x+y;
}
let res1=c("Joshil"," Das");
let res2=c(7,3);

a();
b();
console.log(res1,res2);

/*function display(){
    let d=document.querySelector("p");
    d.innerHTML="im 1st para";
    d.style.backgroundColor="red";
}*/
display=()=>{
    let p=document.querySelectorAll("p");
    p[0].textContent="im 1st para";
    p[0].style.backgroundColor="red";
    p[1].textContent="im 2nd para";
    p[1].style.backgroundColor="blue";
}
changeanchor=()=>{
    let a1=document.querySelector("a");
    a1.textContent="aktu website";
    a1.setAttribute("href","https://aktu.ac.in");
}

appending=()=>{
    const newDiv=document.createElement('div');
    newDiv.textContent="this is a new div";
    const body=document.querySelector('body');
    body.appendChild(newDiv);
}
