// const btnGet1 = document.getElementById("btnGet1");
// const inputGet1Id = document.getElementById("inputGet1Id");
const resultDiv = document.getElementById("result");
const apiUrl = "https://65423162f0b8287df1ffa8cd.mockapi.io/users/";

btnGet1.addEventListener("click", () => {
  const id = inputGet1Id.value.trim();
  if (id === "") {
    mostrarTodo();
  } else {
    fetch(apiUrl + id)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          var lista = document.getElementById("results");
          lista.innerHTML = "";
          mostrar(data.id, data.name, data.lastname);
        } else {
          mostrarError("Error al encontrar el usuario");
        }
      })
      .catch((error) => {
        mostrarError("Error al encontrar el usuario");
      });
  }
});

function mostrar(id1, nombre, apellido) {
  var id = document.createElement("li");
  var name = document.createElement("li");
  var lastname = document.createElement("li");
  var cadenaVacia = document.createElement("li");

  id.textContent = `ID: ${id1} `;
  name.textContent = `Name: ${nombre} `;
  lastname.textContent = `Apellido: ${apellido} `;
  cadenaVacia.textContent = ` `;

  var lista = document.getElementById("results");

  lista.appendChild(id);
  lista.appendChild(name);
  lista.appendChild(lastname);
  lista.appendChild(cadenaVacia);
}

function mostrarTodo() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var lista = document.getElementById("results");
      lista.innerHTML = "";
      for (const person of data) {
        mostrar(person.id, person.name, person.lastname);
      }
    })
    .catch((error) => {
      mostrarError("Error en el servidor");
      console.error("Error:", error);
    });
}

mostrarTodo();
