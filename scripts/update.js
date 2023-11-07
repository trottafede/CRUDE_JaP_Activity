document.addEventListener("DOMContentLoaded", () => {
  const btnModificar = document.getElementById("btnPut");
  btnModificar.addEventListener("click", handleUpdate);
});

async function fetchUsers(id) {
  const url = "https://65423162f0b8287df1ffa8cd.mockapi.io/users/";
  const response = await fetch(url + id);
  const data = await response.json();
  return data;
}

const handleUpdate = async () => {
  const id = document.getElementById("inputPutId").value;

  const info = await fetchUsers(id);
  if (typeof info != "string") {
    showModal();
    const inputNombre = document.getElementById("inputPutNombre");
    const inputApellido = document.getElementById("inputPutApellido");

    inputNombre.value = info.name;
    inputApellido.value = info.lastname;

    const btnSendChanges = document.getElementById("btnSendChanges");
    btnSendChanges.disabled = false;
    btnSendChanges.addEventListener("click", () => update(id));
  } else {
    mostrarError("No se encontro el usuario");
  }
};

const update = async (id) => {
  let data = {
    name: document.getElementById("inputPutNombre").value,
    lastname: document.getElementById("inputPutApellido").value,
  };

  const response = await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    mostrarTodo();
    document.getElementById("dataModal").style.display = "none";
    document.getElementById("dataModal").classList.remove("show");
  } else {
    mostrarError("Error en el servidor");
  }
};
