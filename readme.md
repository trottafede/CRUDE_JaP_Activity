Listar: GET https://65423162f0b8287df1ffa8cd.mockapi.io/users/
Devuelve un json con una lista que contiene todos los registros.

Obtener 1: GET https://65423162f0b8287df1ffa8cd.mockapi.io/users/:id
Recibe un id en la url y devuelve un json con el registro cuyo id haya sido solicitado.

Agregar: POST https://65423162f0b8287df1ffa8cd.mockapi.io/users/
Recibe un json con un objeto con los atributos name y lastname, (en el body) lo agrega a la base de datos (asignándole un id) y devuelve un json con el registro creado.

Modificar: PUT https://65423162f0b8287df1ffa8cd.mockapi.io/users/:id
Recibe un id en la url y un json con un objeto con los atributos name y lastname, (en el body), modifica con dichos datos el registro cuyo id coincida con el recibido, y devuelve un json con el registro modificado.

Eliminar: DELETE https://65423162f0b8287df1ffa8cd.mockapi.io/users/:id
Recibe un id en la url, elimina el registro cuyo id coincida con el recibido, y devuelve un json con el registro eliminado.

http://localhost:5500/

1) El botón "Buscar" debe mostrar como resultado el registro cuyo id haya sido solicitado.
En caso de dejar vacío el campo del id, debe mostrar cómo resultado la lista de todos los registros.
https://65423162f0b8287df1ffa8cd.mockapi.io/users/ + id
Chiara

2) El botón "Agregar" debe enviar al servidor un objeto construido con los valores introducidos por el usuario en los campos nombre y apellido. 
Deberá mostrar como resultado el listado de registros, incluyendo el agregado.
Franco

3) El botón "Modificar" deberá abrir un modal donde se muestren los campos nombre y apellido, ya con los valores cargados coincidentes con el registro cuyo id ingresó el usuario. 
El usuario debe poder modificar dichos valores, y al presionar el botón para guardar los cambios, se debe realizar la consulta adecuada para modificar el registro, cerrar el modal, y mostrar como resultado la lista de registros, con las correspondientes modificaciones.
Fede y Nahuel

4) El botón "Borrar" deberá realizar la consulta para eliminar el registro cuyo id coincida con el ingresado por el usuario, y mostrar como resultado el listado de registros, ya con el mismo eliminado.
Cami


5) Por último, en todos los casos, excepto el de "Buscar", los botones que realizan la consulta deberán permanecer desactivados, mientras alguno de los campos correspondientes se encuentre vacío.
Además, en caso de que la solicitud genere una respuesta con un status no ok, por ejemplo si intentamos borrar, modificar o buscar un registro inexistente, se deberá avisar al usuario por medio de una alerta que algo no salió bien.
Nacho