
























/*$(function () {
    var operation = "C";
    var selected_index = -1;
    var tblCitas = localStorage.getItem("tblCitas"); 
    tblCitas = JSON.parse(tblCitas); 
    if (tblCitas === null)
        tblCitas = [];
       
    function Create() {
    if($("#Cedula".val()!="")){
      var citas = JSON.stringify({
        Cedula: $("#cedulaPaciente").val(),
        Fecha: $("#fechaCita").val(),
        Hora: $("#horaCita").val(),
        Doctor: $("#selectDoctor").val()
      }); 
    
      tblCitas.push(citas);
   
      localStorage.setItem("tblCitas", JSON.stringify(tblCitas));
      alert("La cita ha sido guardada");
      return true;
    }
    }
  
    function Edit() {
  
      tblCitas[selected_index] = JSON.stringify({
        Cedula: $("#cedulaPaciente").val(),
        Fecha: $("#fechaCita").val(),
        Hora: $("#horaCita").val(),
        Doctor: $("#selectDoctor").val()
      });
  
      localStorage.setItem("tblCitas", JSON.stringify(tblCitas));
      alert("La cita ha sido Editada");
      return true;
    }
  
    function Delete() {
     
      tblCitas.splice(selected_index, 1); 
     
      localStorage.setItem("tblCitas", JSON.stringify(tblCitas));
      alert("La cita ha sido borrada"); 
    }
  
    function List() {
      $("#tblList").html("");
      $("#tblList").html(
              "<thead>" +
              "<tr>" +                
              "<th>Cedula</th>" +
              "<th>Fecha</th>" +
              "<th>Hora</th>" +
              "<th>Doctor</th>" +
              "<th>Acción</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody>" +
              "</tbody>"
              ); 
      for (var i in tblCitas) {
          var cita = JSON.parse(tblCitas[i]);
          $("#tblList tbody").append("<tr>" +                    
                  "<td>" + cita.Cedula + "</td>" +
                  "<td>" + cita.Fecha + "</td>" +
                  "<td>" + cita.Hora+ "</td>" +
                  "<td>" + cita.Doctor + "</td>" +
                  "<td><img src='img/edit.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='img/delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +                    
                  "</tr>"
                  );
      } 
    }
  
    $("#formCitas").bind("submit", function () {
      if (operation === "C")
          return Create();
      else
          return Edit();

    }); 
    
    List();
    
    
  
    $(".btnEdit").bind("click", function () {
      operation = "E"; 
      
      selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
      
      var cita = JSON.parse(tblCitas[selected_index]); 
      $("#cedulaPaciente").val(cita.Cedula);
      $("#fechaCita").val(cita.Fecha);
      $("#horaCita").val(cita.Hora);
      $("#selectDoctor").val(cita.Doctor);
      $("#cedulaPaciente").focus();
    });
  
    $(".btnDelete").bind("click", function () {
  
      selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
      Delete(); 
      List(); 
      location.reload();
    });
  });*/