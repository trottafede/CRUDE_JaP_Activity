document.getElementById("btnPost").addEventListener("click", function () {
  var nombre = document.getElementById("inputPostNombre").value;
  var apellido = document.getElementById("inputPostApellido").value;

  var objetoUsuario = {
    name: nombre,
    lastname: apellido,
  };

  var headers = {
    "Content-Type": "application/json",
  };

  fetch("https://65423162f0b8287df1ffa8cd.mockapi.io/users/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(objetoUsuario),
  })
    .then((response) => response.json())
    .then((data) => {
        console.log("Response data:", data);
        mostrarTodo()
    })
    .catch((error) => {
      mostrarError("Error al crear");
      console.error("Error:", error);
    });
});
