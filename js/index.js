let warning = "";
let entrar = false;

const placeholderCantidad = document.querySelector("#cantidad").placeholder;
const placeholderNombre = document.querySelector("#nombre").placeholder;
const placeholderApellido = document.querySelector("#apellido").placeholder;
const placeholderEmail = document.querySelector("#email").placeholder;


const btnResumenFormulario = document.querySelector("#resumen");
btnResumenFormulario &&  btnResumenFormulario.addEventListener("click", resumenFormulario);



const ingresarClaseInputOriginal = (nombreDato) => {
    document.querySelector(`#${nombreDato}`).className = "form-control"; 
  }

  const ingresarPlaceholderOriginal = (nombreDato) =>{
  
    if (nombreDato == "nombre" ) {
      document.querySelector(`#${nombreDato}`).placeholder = placeholderNombre 
    } else if (nombreDato == "apellido") {
      document.querySelector(`#${nombreDato}`).placeholder = placeholderApellido
    } else if (nombreDato == "email") {
      document.querySelector(`#${nombreDato}`).placeholder = placeholderEmail
    } else if (nombreDato == "cantidad"){
      document.querySelector(`#${nombreDato}`).placeholder = placeholderCantidad
    } 
  
  }  


  function modificarInput(nombreDato) {
    document.querySelector(`#${nombreDato}`).value = "";
    document.querySelector(`#${nombreDato}`).placeholder = warning;
    document.querySelector(`#${nombreDato}`).className = "invalid"
  }

function validarNombreApellido(dato,nombreDato) {

    if (dato.length < 2) {
      warning = `${nombreDato.toUpperCase()} NO VÁLIDO. Ingrese el dato.`
      entrar = true;
      modificarInput(nombreDato);
      return;
    }
    ingresarClaseInputOriginal(nombreDato);
    ingresarPlaceholderOriginal(nombreDato);  
  }

  function validarRegistro(dato,nombreDato) {
  
    if (isNaN(dato) || dato == 0 ) { 
      warning = nombreDato.charAt(0) == "e" 
       ? `  ${nombreDato.toUpperCase()}  INCORRECTA. Ingrese el dato.` 
       : `  ${nombreDato.toUpperCase()}  INCORRECTO. Ingrese el dato.`
      entrar = true;
      modificarInput(nombreDato);
      return;
    }
    
    switch (nombreDato) {
      
      case "dni":
        if( dato  < 10000000 || dato > 99999999)   {
          warning = `El ${nombreDato} NO es válido. Ingresé los 8 dígitos.`
          entrar = true;
          modificarInput(nombreDato);
          return;
      // Se verifica que no se intente ingresar un DNI repetido.
        } else  if (arrayDNIRegistrados.includes(dato)) {
          warning = `El ${nombreDato.toUpperCase()} ya se encuentra registrado.`
          entrar = true;
          modificarInput(nombreDato);
          return;
        }
        ingresarClaseInputOriginal(nombreDato);
      break;
      
      case "estatura":
        if( dato < 0.62 || dato > 2.60)   {
         ejecutarValidacion(nombreDato);  
         modificarInput(nombreDato);
         return;
        } 
        ingresarClaseInputOriginal(nombreDato);
        break;
      
        case "peso":
        if( dato < 2 || dato > 595)   {
          ejecutarValidacion(nombreDato);
          modificarInput(nombreDato);
          return;
        } 
        ingresarClaseInputOriginal(nombreDato);
        break;
  
      default:
        break;
        
    }
  
  }



  function resumenFormulario() {
    const nombreCliente = document.getElementById('nombre').value;
    const apellidoCliente = document.getElementById('apellido').value;
    const cantidadDelCLiente = document.getElementById('cantidad').value;
    const categoriaCliente = document.getElementById('categoria').value;
    console.log(nombreCliente,apellidoCliente,cantidadDelCLiente,categoriaCliente);

    validarNombreApellido(nombreCliente,"nombre");

    validarNombreApellido(apellidoCliente,"apellido")

  }
