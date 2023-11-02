const show= document.querySelector("#time");

const getdate=()=>{
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let day= time.getDay();
    let date= time.getDate();
    let hour = time.getHours();
    let min= time.getMinutes();
    let sec= time.getSeconds();
    let realdate= date +" , " + month + " , " + year+ " , ";
    let realtime = hour +":"+ min+":"+ sec;
    return realdate + "     " + realtime;

}


setInterval(()=>{
    let time= getdate();
show.innerHTML= time;
},1000);
