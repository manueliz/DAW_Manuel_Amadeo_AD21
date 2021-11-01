function SetResultado(value){
    document.getElementById('Texto').innerHTML= value;
}
function GetResultado() {
   return (document.getElementById('Texto').innerHTML);
}

function Agregarnumero(x){
    /*Agregar los datos de los botones*/
    var resultado = GetResultado();
    if (resultado!='0' || isNaN(x)) SetResultado(resultado + x);
    else SetResultado(x);
}
function Resultado(){
    /*Funcion que regresa el resultado final*/
    var result = eval(GetResultado()); 
    SetResultado(result);
}
function Clear() { 
    /*Poner Pantalla en 0*/
    SetResultado(0);
}