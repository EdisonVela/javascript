//Funcion para mostrar un cuadro de dialogo emergente 
function mostrarMensaje(){
    alert("Hola Mundo :)");
}

//Variables
function imprimirvariables(){
    let nombre = "Edison"
    let edad = "22"
    console.log("nombre:" , nombre);
    console.log("edad: " , edad);
//Forma moderna de concatenar cadenas
    console.log(`nombre : ${nombre}, edad: ${edad}`);
    console.error("Error: bla bla bla");
    console.warn("Advertencia: x ");

    function arreglos(){
        let frutas = ["manzana" , "pera" , "banana"];
        for(let f of fruta) {
        }
    }
}