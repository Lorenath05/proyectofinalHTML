function prefer(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;
            }else{
                alert("ERROR EN TURNO …");
                break;
            }
        }
    }
    function user(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');//toString para convertir numeros en texto
            //padStart para poner dos digitos decimales a la izquierda
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;
            }else{
                alert("ERROR EN TURNO…");
                break;
            }
        }
    }
