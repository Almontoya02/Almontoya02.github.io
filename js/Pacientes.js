/**
 * la funcion con el signo ($) hace que sea mas facil el acceso a los html, sin necesidad de mucho codigo
 */

$(function () {
  var operation = "C";
  var selected_index = -1;
  /**
   * Esta variable permite que los datos de la tabla no se borren haciendo el almacenamiento localmente en el navegador
   */
  var tblPacientes = localStorage.getItem("tblPacientes"); 
  tblPacientes = JSON.parse(tblPacientes); 
  if (tblPacientes === null)
    tblPacientes = [];
  

  function Create() {
    if ($("#ide").val()!= "" && $("#nombreP").val()!= "" && $("#apellidosP").val()!= "" && $("#contraseñaP").val()!= "" && $("#telefonoP").val()!= "") {
    var paciente = JSON.stringify({
      Cedula: $("#ide").val(),
      Nombre: $("#nombreP").val(),
      Apellidos: $("#apellidosP").val(),
      Contraseña: $("#contraseñaP").val(),
      Telefono: $("#telefonoP").val(),
      Direccion: $("#direccionP").val(),
      Correo: $("#correoP").val()
    }); 
    //se agrega a la tabla
    tblPacientes.push(paciente);
    //se guarda localmente
    localStorage.setItem("tblPacientes", JSON.stringify(tblPacientes));
    alert("Paciente agregado correctamente");
    return true;
  }
  else{
    alert("Ingrese todos los datos")
  }
  }

  function Edit() {
    //obtiene los datos del elemento seleccionado
    tblPacientes[selected_index] = JSON.stringify({
      Cedula: $("#ide").val(),
      Nombre: $("#nombreP").val(),
      Apellidos: $("#apellidosP").val(),
      Contraseña: $("#contraseñaP").val(),
      Telefono: $("#telefonoP").val(),
      Direccion: $("#direccionP").val(),
      Correo: $("#correoP").val()
    });
    //actualiza la tabla local
    localStorage.setItem("tblPacientes", JSON.stringify(tblPacientes)); 
    alert("Información actualizada"); 
    return true;
  }

  function Delete() {
   //elimina el elemento seleccionado
    tblPacientes.splice(selected_index, 1); 
    //actualiza la tabla local
    localStorage.setItem("tblPacientes", JSON.stringify(tblPacientes)); 
    alert("Información eliminada"); 
  }

  function List() {
    $("#tblList").html("");
    $("#tblList").html(
            "<thead>" +
            "<tr>" +                
            "<th>Cédula</th>" +
            "<th>Nombre</th>" +
            "<th>Apellidos</th>" +
            "<th>Contraseña</th>" +
            "<th>Teléfono</th>" +
            "<th>Dirección</th>" +
            "<th>Correo</th>" +
            "<th>Acciones</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); 
    //carga los datos locales a la tabla
    for (var i in tblPacientes) {
        var pac = JSON.parse(tblPacientes[i]);
        $("#tblList tbody").append("<tr>" +                    
                "<td>" + pac.Cedula + "</td>" +
                "<td>" + pac.Nombre + "</td>" +
                "<td>" + pac.Apellidos + "</td>" +
                "<td>" + pac.Contraseña + "</td>" +   
                "<td>" + pac.Telefono + "</td>" +
                "<td>" + pac.Direccion + "</td>" +  
                "<td>" + pac.Correo + "</td>" +                
                "<td><img src='img/edit.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='img/delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
                "</tr>"
                );
    } 
  }
  /*si la operacion es C se llama el metodo Create haciendo que el boton crearP agregue un nuevo usuario,
  * sino ese boton llama la función Edit y actualiza la informacion del paciente
  */
  $("#crearP").bind("click", function () {
    if (operation === "C")
        return Create();
    else
        return Edit();
  }); 
  
  List();
  //al seleccionar el boton edit se carga la información del paciente seleccionado y la operación cambia a E
  $(".btnEdit").bind("click", function () {
    operation = "E"; 
    
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    
    var pac = JSON.parse(tblPacientes[selected_index]); 
    $("#ide").val(pac.Cedula);
    $("#nombreP").val(pac.Nombre);
    $("#apellidosP").val(pac.Apellidos);
    $("#contraseñaP").val(pac.Contraseña);
    $("#telefonoP").val(pac.Telefono);
    $("#direccionP").val(pac.Direccion);
    $("#correoP").val(pac.Correo);
    $("#ide").attr("readonly", "readonly");
    $("#nombreP").attr("readonly", "readonly");
    $("#apellidosP").attr("readonly", "readonly");
  });

  $(".btnDelete").bind("click", function () {

    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); 
    List();
    location.reload(true);
  });
});


