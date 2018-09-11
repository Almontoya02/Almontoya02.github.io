/**
 * la funcion con el signo ($) hace que sea mas facil el acceso a los html, sin necesidad de mucho codigo
 */

$(function () {
    var operation = "C";
    var selected_index = -1;
    /**
     * Esta variable permite que los datos de la tabla no se borren
     */
    var tblHistorial = localStorage.getItem("tblHistorial");
    tblHistorial = JSON.parse(tblHistorial);
    if (tblHistorial === null)
        tblHistorial = [];
      
                    
var  comprobar=false;
    function Create() {
        if ($("#ide").val()!= "" && $("#historialP").val()!= "" ) {
            for (var i = 0; i <= tblHistorial.length; i++) {
                if (tblHistorial[i].Cedula !== $("#ide").val()) {
                    var Historial = JSON.stringify({
                        Cedula: $("#ide").val(),
                        HistorialP: $("#historialP").val()
                    });
                    //se agrega a la tabla
                    tblHistorial.push(Historial);
                    //se guarda localmente
                    localStorage.setItem("tblHistorial", JSON.stringify(tblHistorial));
                    alert("Historial agregado correctamente");
                    return true;
                    
                 }
                 if(comprobar==false) {
                    alert("Usuario existente")
                    break;
                 }

            }
        }else{
            alert("Ingrese Todos los datos")
        }
    }
    function Edit() {
        //obtiene los datos del elemento seleccionado
        tblHistorial[selected_index] = JSON.stringify({
            Cedula: $("#ide").val(),
            HistorialP: $("#historialP").val()
        });
        //actualiza la tabla local
        localStorage.setItem("tblHistorial", JSON.stringify(tblHistorial));
        alert("Información actualizada");
        return true;
    }
    function List() {
        $("#tblList").html("");
        $("#tblList").html(
            "<thead>" +
            "<tr>" +
            "<th>Cédula</th>" +
            "<th>Historial</th>" +
            "<th>Acción</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
        );
        //carga los datos locales a la tabla
        for (var i in tblHistorial) {
            var historial = JSON.parse(tblHistorial[i]);
            $("#tblList tbody").append("<tr>" +
                "<td>" + historial.Cedula + "</td>" +
                "<td>" + historial.HistorialP + "</td>" +
                "<td><img src='img/edit.png' alt='Edit" + i + "' class='btnEdit'/></td>" +
                "</tr>"
            );
        }
    }
    /*si la operacion es C se llama el metodo Create haciendo que el boton guardarHistorial agregue un nuevo historial,
    * sino ese boton llama la función Edit y actualiza la informacion de la historial
    */
    $("#guardarHistorial").bind("click", function () {
        if (operation === "C")
            return Create();
        else
            return Edit();
    });

    List();
    //al seleccionar el boton edit se carga la información del historial y la operación cambia a E
    $(".btnEdit").bind("click", function () {
        operation = "E";

        selected_index = parseInt($(this).attr("alt").replace("Edit", ""));

        var Histo = JSON.parse(tblHistorial[selected_index]);
        $("#ide").val(Histo.Cedula);
        $("#historialP").val(Histo.HistorialP);
        $("#ide").attr("readonly", "readonly");
    });
});


