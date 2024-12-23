
let sec = 59-(new Date().getSeconds());
let hour = 23-(new Date().getHours());
let minutes = 59-(new Date().getMinutes());
let proximoAno = new Date().getUTCFullYear()+1;
let dias = diasFimAno(new Date(), new Date(proximoAno, 0, 0, 0, 0));


const interval = setInterval(() => {
   
  document.getElementById("ano").innerHTML = proximoAno;
  
  if(sec > 0){
    sec--;
    
    if(sec == 0 && minutes != 0){
      minutes--;
      sec = 59;
    }if(minutes == 0 && hour != 0){
      hour--;
      sec = 59;
    }
  }

  if(minutes == 0 && hour == 0 && sec == 0){
    setInterval(() => {
      sec = 59-(new Date().getSeconds());
      hour = 23-(new Date().getHours());
      minutes = 59-(new Date().getMinutes());
      proximoAno = new Date().getUTCFullYear()+1;
      dias = diasFimAno(new Date(2020, 10, 9), new Date(proximoAno, 0, 0, 0, 0));
    }, 1000);
  }

  document.getElementById("dias").innerHTML = dias < 10 ? '0'+dias: dias;
  document.getElementById("horas").innerHTML = hour < 10 ? '0'+hour+':' : hour+':';
  document.getElementById("minutos").innerHTML = minutes < 10 ? '0'+minutes+':' : minutes+':';
  document.getElementById("segundos").innerHTML = sec < 10 ? '0'+sec : sec;

    
}, 1000);

function diasFimAno(a, b){
   var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
   var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

   return Math.floor((utc2 - utc1) / ( 1000 * 60 * 60 * 24) );
}