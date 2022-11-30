function apostar(){
    var a=Math.round(Math.random()*10);//REDONDEA ASI ARRIBA APROXIMAR AL NUMERO MAS ALTO
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    if (a==b){
      document.getElementById("salida").value="ganó";
    } else {
      document.getElementById("salida").value="perdió";
    }
  }
  function cancel(){
    document.getElementById("apostado").value=" ";// borrar contenido
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
  }
  
  