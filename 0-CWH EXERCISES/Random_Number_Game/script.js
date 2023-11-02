const form =document.querySelector("form");
const button=document.querySelector("#butt");
const show=document.querySelector('show');

form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm= form.elements.query.value;
  
    check(searchTerm);
    searchTerm="";
})

let count=0;
let b=Math.floor(Math.random()*100);

let text;

const check =(a)=>{
    count++
if(a==b){
   text = `Hurraahhhh! Correct Guess in ${count} chances`;
}else if(a>b){
    text="Ohhhh....! Just bit larger";

}else if(a<b){
    text="Ohhh....! Just bit smaller";
}
const res = document.createElement('h6');
   
  res.append(text);
   form.append(res);

}