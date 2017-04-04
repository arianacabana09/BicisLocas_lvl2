function validateForm(){
  /* Escribe tú código aquí */
  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var correo = document.getElementById("input-email");
  var psw = document.getElementById("input-password");
  var seleccion = document.getElementById("select");
  var op = seleccion.options[seleccion.selectedIndex].text;
  var msje = document.getElementById("msj");

  //Ingresar los campos necesarios
  if (nombre.value == "" || apellido.value == "" || correo.value == "" || psw.value == ""  || op.value == 0){
    msje.innerText = "Verifica que datos obligatorios estan incompletos";
    //alert("Estos Datos son obligatorios \n Nombre \n apellido \n correo \n password");
  }

  //caracteres expresion regular
  var crtCantidad = /^\s+|\s+$/;
  var letras = /^[a-zA-Z]+$/;
  var crtNumero = /[0-9]/;

  validaNombre();
  //valido el nombre
  function validaNombre(){
    var msg = document.getElementById("msja");
    if (nombre.value.length < 3 || crtCantidad.test(nombre.value)){
      msg.innerText = "Tiene que ingresar su nombre";
      return nombre.focus();
    } else if (crtNumero.test(nombre.value) || !(letras.test(nombre.value))){
      msg.innerText = "Solo se permiten letras";
      return nombre.focus();
    } else if (!(/[^a-z]+([a-z]{1,})/.test(nombre.value))){
      msg.innerText = "Su nombre debe empezar con mayúscula";
      return nombre.focus();
    } else{
      msg.innerText = "";
      msg.style.display = "none";
      validaApellido();
    }
  }

  //valido el apellido
  function validaApellido(){
    var msg = document.getElementById("msjb");
    if (apellido.value.length < 3 || crtCantidad.test(apellido.value)){
      msg.innerText = "Tiene que ingresar su apellido";
      return apellido.focus();
    } else if (crtNumero.test(apellido.value) || !(letras.test(apellido.value))){
      msg.innerText = "Solo se permite letras";
      return apellido.focus();
    } else if (!(/[^a-z]+([a-z]{1,})/.test(apellido.value))){
      msg.innerText = "Su apellido debe empezar con mayúscula";
      return apellido.focus();
    } else{
      msg.innerText = ""
      msg.style.display = "none";
      validaEmail();
    }
  }

  //valido el correo
  function validaEmail(){
    var msg = document.getElementById("msjc")
    var crt = /\S+@\+\S+.\+S+/;
    var crt2= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (!crt.test(correo.value) && correo.value.length < 10){
      msg.innerText = "Ingrese el formato correcto del correo";
      return correo.focus();
    } else if (!(crt2.test(correo.value))){
      msg.innerText = "Correo no válido \n ej: abcd@lab.co";
      return correo.focus();
    } else{
      msg.innerText = ""
      msg.style.display = "none";
      validaPass();
    }
  }

  //valido la contraseña
  function validaPass(){
    var msg = document.getElementById("msjd");

    if (psw.value.length < 6 || crtCantidad.test(psw.value)){
      msg.innerText = "Ingrese una contraseña: mínimo 6 carácteres";
      return psw.focus();
    } else if(psw.value == "123456"){
      msg.innerText = "La contraseña debe ser diferente de 123456";
      return psw.focus();
    } else if(psw.value == "098754"){
      msg.innerText = "La contraseña debe ser diferente de 098754";
      return psw.focus();
    } else if(psw.value == "password" || psw.value == "PASSWORD"){
      msg.innerText = "La contraseña debe ser diferente de password";
      return psw.focus();
    } else{
      msg.innerText = "";
      msg.style.display = "none";
      validaOpciones();
    }
  }

  //valido el tipo de bici
  function validaOpciones(){
    var msg = document.getElementById("msje");

    if(seleccion.value == 0){
      msg.innerText = "Eliga una opción";
      return seleccion.focus();
    } else {
      msje.innerText = "Usted a elegido: "+ op + " \n Gracias por su visita :)";
      msg.innerText = "";
      msg.style.display = "none";
    }
  }
}
