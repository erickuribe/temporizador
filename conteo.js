   //DEFINIMOS UN TEMPORIZADOR DE 30 MINUTOS 

    var cronometro;
    contador_s =0;
    contador_m =30;
    function carga()
    {
        
        s = document.getElementById("segundos");
        m = document.getElementById("minutos");
        cronometro = setInterval(
            function(){ 
                if(contador_s==0)
                {
                    contador_s=59;
                    contador_m--;
                    m.innerHTML = contador_m;
                }
                s.innerHTML = contador_s;
                contador_s--;
                if((contador_m==0)&&(contador_s==0))
                {
                    //AQUI VA EL CODIGO PARA CUANDO TERMINE EL TEMPORIZADOR
                 clearInterval(cronometro);
                 window.close();
                }
            }        
            ,1000);

    }
