let user= document.querySelector("#main");
let result=document.querySelector("#result");
let again =document.querySelector("#again");

const game=(user,cpu)=>{
    if(user==cpu){
        return "draw";
    }else if(user=='snake' && cpu=='water'){
        return "user";
    }
    else if(user=='water' && cpu=='snake'){
        return "cpu";
    }
    else if(user=='snake' && cpu=='gun'){
        return "cpu";
    }
    else if(user=='gun' && cpu=='snake'){
        return "user";
    }
    else if(user=='gun' && cpu=='water'){
        return "cpu";
    } else if(user=='water' && cpu=='gun'){
        return "user";
    }

}

const cputurn=()=>{
    let number = Math.floor(Math.random() * 100) + 1;
    let cpu;
    if (number<33)
    {
        cpu = "snake";
    }
    else if (number>33 && number<66)
    {
        cpu = "water";
    }
    else
    {
        cpu = "gun";
    }
    return cpu;
    }

    user.addEventListener("click",(e)=>{
        let user = e.target.innerText;
        let cpu = cputurn();
        let res = game(user, cpu);
        if(res=="draw"){
            result.innerHTML  = `<h2>cpu:${cpu} <br> user:${user} <br>Match Draw Try Again</h2>`;
            
        }
        else if(res == "cpu"){
            
            result.innerHTML = `<h2>cpu: ${cpu} <br> user: ${user} <br>You loose</h2>`;
         
        }
        else if(res=="user"){
            result.innerHTML =`<h2>cpu: ${cpu} <br> user: ${user} <br>You Win</h2>`;
           
        }
        console.log(user)
        console.log(cpu)
        console.log(res)
    })

    again.addEventListener("click",()=>{
        
        result.innerHTML = null;
    })