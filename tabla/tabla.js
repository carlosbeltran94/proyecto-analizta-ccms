  $(document).ready(function() {
//obtenemos el valor de los input

$('#adicionar').click(function() {
  var documento = document.getElementById("documento").value;
  var nombre= document.getElementById("nombre").value;
  var fechainicio = document.getElementById("fechainicio").value;
  var fechafin = document.getElementById("fechafin").value; 
  var horainicio = document.getElementById("horainicio").value;  
  var horafin = document.getElementById("horafin").value; 
  var horainicioex = document.getElementById("horainicioex").value;
  var horafinex = document.getElementById("horafinex").value;   
  var motivo = document.getElementById("motivo").value;
  var i = 1; //contador para asignar id al boton que borrara la fila    
  var fila = '<tr id="row' + i + '"><td>' + documento + '</td><td>' + nombre + '</td><td>' + fechainicio + '</td><td>' + fechafin + '</td><td>' + horainicio + '</td><td>' + horafin + '</td><td>' + horainicioex + '</td><td>' + horafinex + '</td><td>' + motivo + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

  i++;

  $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
    //le resto 1 para no contar la fila del header
    document.getElementById("documento").value ="";
    document.getElementById("nombre").value = "";
    document.getElementById("fechainicio").value = "";
    document.getElementById("fechafin").value = "";
    document.getElementById("horainicio").value = "";
    document.getElementById("horafin").value = "";
    document.getElementById("horainicioex").value = "";
    document.getElementById("horafinex").value = "";
    document.getElementById("motivo ").value = "";
    document.getElementById("motivo").focus();
  });
$(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr("id");
    //cuando da click obtenemos el id del boton
    $('#row' + button_id + '').remove(); //borra la fila
    //limpia el para que vuelva a contar las filas de la tabla
    $("#adicionados").text("");
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1);
  });
});