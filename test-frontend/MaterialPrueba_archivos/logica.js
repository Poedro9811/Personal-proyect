/*************************************************************************************************************************/
/********************** VALIDACION DADA PARA SER UTILIZADA ***************************************************************/
/*************************************************************************************************************************/

function validarCedula(ci) {
  //Inicializo los coefcientes en el orden correcto
  var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  var suma = 0;
  //Para el caso en el que la CI tiene menos de 8 digitos
  //calculo cuantos coeficientes no voy a usar
  var difCoef = parseInt(arrCoefs.length - ci.length);
  //recorro cada digito empezando por el de más a la derecha
  //o sea, el digito verificador, el que tiene indice mayor en el array
  for (var i = ci.length - 1; i > -1; i--) {
    //Obtengo el digito correspondiente de la ci recibida
    var dig = ci.substring(i, i + 1);
    //Lo tenía como caracter, lo transformo a int para poder operar
    var digInt = parseInt(dig);
    //Obtengo el coeficiente correspondiente al ésta posición del digito
    var coef = arrCoefs[i + difCoef];
    //Multiplico dígito por coeficiente y lo acumulo a la suma total
    suma = suma + digInt * coef;
  }
  var result = false;
  // si la suma es múltiplo de 10 es una ci válida
  if (suma % 10 === 0) {
    result = true;
  }
  return result;
}
//funcion que valida los campos
function validar() {
  //obtengo el valor de cada campo
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var ci = document.getElementById("ci").value;
  var dep = document.getElementById("dep").value;
  var loc = document.getElementById("loc").value;
  var term = document.getElementById("terminos");
  //la variable expresion expresa la regulacion del correo
  var expresion = /\w+@\w+\.+[a-z]/;
  //error en un inicio es falso ya que aun no se ha detectado
  var error = false;

  //validacion del nombre
  //si el campo es vacío salta error 
  if (name === "") {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("errorName").innerHTML =
      "El campo no puede estar vacío";
    error = true;

  }

  //si el campo esta escrito pero con solo 1 o 2 caracteres salta error
  if (name.length > 0 && name.length < 3) {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("errorName").innerHTML =
      "El nombre no cumple los caracteres requeridos";
    error = true;
  }
  //validacion del apellido
  //si el campo es vacío salta error
  if (lastname === "") {
    document.getElementById("lastname").style.borderColor = "red";
    document.getElementById("errorLastname").innerHTML =
      "El campo no puede estar vacío";
    error = true;
  }
  //si el campo esta escrito pero con solo 1 o 2 caracteres salta error
  if (lastname.length > 0 && lastname.length < 3) {
    document.getElementById("lastname").style.borderColor = "red";
    document.getElementById("errorLastname").innerHTML =
      "El apellido no cumple con la cantidad de caracteres requeridos";
    error = true;
  }
  //validacion del email
  //si no cumple con la expresión salta error
  if (!expresion.test(email)) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("errorEmail").innerHTML =
      "Complete el campo correctamente";
    error = true;
  } //si es vacío salta error
  if (email === "") {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("errorEmail").innerHTML =
      "El campo no puede estar vacío";
    error = true;
  }
  //validacion de la cedula
  //si no cumple con lo requerido en la function validarCedula() salta error
  if (validarCedula(ci) === false) {
    document.getElementById("ci").style.borderColor = "red";
    document.getElementById("errorCI").innerHTML =
      "La C.I introducida no es válida";
    error = true;
  } //si el campo esta vacío salta error
  if (ci === "") {
    document.getElementById("ci").style.borderColor = "red";
    document.getElementById("errorCI").innerHTML =
      "El campo no puede estar vacío";
    error = true;
  } //validacion de departamento
  if (dep === "") {
    document.getElementById("dep").style.borderColor = "red";
    document.getElementById("errorDep").innerHTML = "Seleccione una opción";
    error = true;
  } //validacion de localidad
  if (loc == "") {
    document.getElementById("loc").style.borderColor = "red";
    document.getElementById("errorLoc").innerHTML = "Seleccione una opción";
    error = true;
  } //validacion de bases y condiciones
  if (!term.checked) {
    document.getElementById("errorCheck").style.color = "red";
    error = true;
  }
  return !error;
}
/*************************************************************************************************************************/
/********************** Eliminar errores ***************************************************************/
/*************************************************************************************************************************/

function eliminarErrorNombre() {
  document.getElementById("name").style.borderColor = "";
  document.getElementById("errorName").innerHTML = "";

}

function eliminarErrorApellido() {
  document.getElementById("lastname").style.borderColor = "";
  document.getElementById("errorLastname").innerHTML = "";
}

function eliminarErrorEmail() {

  document.getElementById("email").style.borderColor = "";
  document.getElementById("errorEmail").innerHTML = "";
}

function eliminarErrorCI() {

  document.getElementById("ci").style.borderColor = "";
  document.getElementById("errorCI").innerHTML = "";
}

function eliminarErrorDep() {

  document.getElementById("dep").style.borderColor = "";
  document.getElementById("errorDep").innerHTML = "";
}

function eliminarErrorLoc() {

  document.getElementById("loc").style.borderColor = "";
  document.getElementById("errorLoc").innerHTML = "";
}

function eliminarErrorCheck() {
  document.getElementById("errorCheck").style.color = "black";
}