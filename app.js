const resolver = document.getElementById('boton');
const entradaUno = document.getElementById('entradaUno');
const entradaDos = document.getElementById('entradaDos');

resolver.addEventListener("click",()=>{
    const numeroUno = parseInt(entradaUno.value);
    const numeroDos = parseInt(entradaDos.value);
    const resultado = numeroUno + numeroDos;
    // console.log ('el resultado después de sumar ' + numeroUno + ' más ' + numeroDos + ' es: ' + resultado);
    document.getElementById("mostrarResultado").textContent = ('el resultado después de sumar ' + numeroUno + ' más ' + numeroDos + ' es: ' + resultado);
    // alert(resultado);
    limpiar();
} )

const limpiar = () =>{
    document.getElementById("entradaUno").value = ""; // Limpia el contenido de los inputs
    document.getElementById("entradaDos").value = "";
}
