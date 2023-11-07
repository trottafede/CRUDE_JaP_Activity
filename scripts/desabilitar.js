const inputGet1Id = document.getElementById("inputGet1Id");
const btnGet1 = document.getElementById("btnGet1");
const inputPostNombre = document.getElementById("inputPostNombre");
const inputPostApellido = document.getElementById("inputPostApellido");
const btnPost = document.getElementById("btnPost");
const inputPutId = document.getElementById("inputPutId");
const btnPut = document.getElementById("btnPut");
const inputDelete = document.getElementById("inputDelete");
const btnDelete = document.getElementById("btnDelete");

inputGet1Id.addEventListener("input", () => {
  btnGet1.disabled = inputGet1Id.value.trim() === "";
});

inputPostNombre.addEventListener("input", () => {
  btnPost.disabled =
    inputPostNombre.value.trim() === "" ||
    inputPostApellido.value.trim() === "";
});

inputPostApellido.addEventListener("input", () => {
  btnPost.disabled =
    inputPostApellido.value.trim() === "" ||
    inputPostApellido.value.trim() === "";
});

inputPutId.addEventListener("input", () => {
  btnPut.disabled = inputPutId.value.trim() === "";
});

inputDelete.addEventListener("input", () => {
  btnDelete.disabled = inputDelete.value.trim() === "";
});


function mostrarError(error) {
  const alertError = document.getElementById("alert-error");
  alertError.innerHTML = error;
  if (alertError) {
    alertError.style.display = "block";
    alertError.classList.add("show");
  }
  setTimeout(() => {
      alertError.style.display = "none";
      alertError.classList.remove("show");

  }, 3000);
}


const showModal = () => {
  const dataModal = new bootstrap.Modal(document.getElementById("dataModal"));
  dataModal.show();
}
const hideModal = () => {
  const dataModal = new bootstrap.Modal(document.getElementById("dataModal"));
  dataModal.hide();
}

