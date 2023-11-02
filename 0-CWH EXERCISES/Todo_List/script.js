const butt= document.querySelector("#but");
const textInput = document.querySelector("#todo");
const list =document.querySelector("#TaskList");


const add=()=>{
    
    const text= textInput.value;
    if(text!=""){
     const ll= document.createElement('LI');
     localStorage.setItem("todo",JSON.stringify(textInput.value));
     ll.append(text);
     list.append(ll);
     textInput.value="";
    }
}
butt.addEventListener('click',add);