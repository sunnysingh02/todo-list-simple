// let ctr=0;
// function callback(){
//   const el=document.querySelectorAll("h4")[1]
//   el.innerHTML=ctr;
//   ctr=ctr+1;
// }
// setInterval(callback,100);
let ctr=1;
function deleteTodo(index){
  const element=document.getElementById(index);
  element.parentNode.removeChild(element);
}
function addtodo(){
  //fetching
  const inputEl=document.querySelector("#inputTodo");
  var value=inputEl.value;

  const newDivEl=document.createElement("div");
  newDivEl.setAttribute("id",ctr);

  newDivEl.innerHTML=`<div>${value}</div><button onclick='deleteTodo(${ctr})'>delete</button>`;
  document.querySelector("body").appendChild(newDivEl);
  ctr=ctr+1;
    
  
}