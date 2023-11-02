text= document.querySelector("#main")

let a = [
    'INITIALIZING HACK...',
    'CONNECTING TO SERVER...',
    'ACCESSING DATA...',
    'COPYING DATA...',
    'CONNECTION DONE...',
    'HACKED SUCCESSFULLY...'
]

const delaymsg=(msg)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            text.innerHTML= text.innerHTML + msg + "<br/>";
            resolve();
        },2000)
    })
}

async function message(){
    for(let i =0 ;i<a.length;i++){
        await delaymsg(a[i]);
    }
}

message();