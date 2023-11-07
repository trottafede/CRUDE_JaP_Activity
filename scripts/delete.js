const deleteBtn = document.getElementById("btnDelete");

const url = "https://65423162f0b8287df1ffa8cd.mockapi.io/users/";

deleteBtn.addEventListener("click", () => {
  //el valor del id
  let inputDelete = document.getElementById("inputDelete").value;
  let full_url = url + inputDelete;

  fetch(full_url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (typeof data == "string") {
        mostrarError("No se encontro el ID a borrar");
      } else {
        mostrarTodo();
      }
    })
    .catch((error) => {
      mostrarError("Error en el servidor");
      console.error("Error:", error);
    });
});
