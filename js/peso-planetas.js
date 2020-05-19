var caja = document.getElementById("peso");
       var caja_planeta=document.getElementById('planeta');
       var botoncito =document.getElementById('boton');
        var body= document.getElementById('body');


       botoncito.addEventListener('click', mostrar);


        var mercurio = {nombre : 'mercurio', peso: 3.7};
        var venus = {nombre : 'venus', peso: 8.87};
        var luna = {nombre:'luna', peso: 1.62};
        var tierra={nombre:'tierra', peso: 9.8} ;
        var marte ={nombre:'marte',peso:3.7};
        var jupiter ={nombre:'jupiter',peso:24.8};
        var saturno ={nombre:'saturno',peso:10.4};
        var urano ={nombre:'urano',peso:8.9};
        var neptuno ={nombre:'neptuno',peso:11.15};
        
        
        function mostrar(){

        var tupeso = parseInt(caja.value);
        var planeta= parseInt(caja_planeta.value)
        
     
      
  
         var peso_final;
        var nombreplaneta;
 
         if(planeta == 1)
          {
              peso_final = tupeso * mercurio.peso / tierra.peso;
              nombreplaneta = mercurio.nombre;
              body.classList.add('mercurio');
        
          }
          else if(planeta==2)
           {
             peso_final = tupeso * venus.peso / tierra.peso;
             nombreplaneta = venus.nombre;
             body.classList.add('venus');

           }
           else if(planeta==3)
           {
             peso_final = tupeso * luna.peso / tierra.peso;
             nombreplaneta = luna.nombre;
             body.classList.add('luna');
           }
           else if(planeta==4)
           {
             peso_final = tupeso * marte.peso / tierra.peso;
             nombreplaneta = marte.nombre;
             body.classList.add('marte');

           }
           else if(planeta==5)
           {
             peso_final = tupeso * jupiter.peso / tierra.peso;
             nombreplaneta = jupiter.nombre;
             body.classList.add('jupiter');
            
            }
            else if(planeta==6)
            {
              peso_final = tupeso * saturno.peso / tierra.peso;
              nombreplaneta = saturno.nombre;
              body.classList.add('saturno');
            
            }
            else if(planeta==7)
            {
              peso_final = tupeso * urano.peso / tierra.peso;
              nombreplaneta = urano.nombre;
              body.classList.add('urano');
            
            }
            else if(planeta==8)
            {
              peso_final = tupeso * neptuno.peso / tierra.peso;
              nombreplaneta = neptuno.nombre;
              body.classList.add('neptuno');
            
            }


        
        peso_final= parseInt(peso_final);
        
        document.getElementById('marte').innerHTML += " " + nombreplaneta + " es : <strong>" + peso_final + " kilos</strong>";
       console.log(nombreplaneta)

       
      }