function Calcular(){
    //declarar variables
    var m,g,P;
    //recuperar los valores
    m=parseFloat(document.getElementById("Masa").value);
    g=parseFloat(document.getElementById("Gravedad").value);
    //Realizar la operacion
    P=(m*g)/9.8;
    //mostrar el resultado en la caja de texto
    document.getElementById("Peso").value=P;
    }
    
function Borrar (){
    document.getElementById("Masa").value="";
    document.getElementById("Gravedad").value="";
    document.getElementById("Peso").value="";
    }
