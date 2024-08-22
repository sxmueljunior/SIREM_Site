function toggleMenu() {
  var menuOpcoes = document.getElementById("menu-opcoes");
  if (menuOpcoes.style.display === "block") {
    menuOpcoes.style.display = "none";
  } else {
    menuOpcoes.style.display = "block";
  }
}

function carregarImagem(event) {
  var fotoPerfil = document.getElementById("foto-perfil");
  fotoPerfil.src = URL.createObjectURL(event.target.files[0]);
}

document
  .querySelector(".foto-perfil::after")
  .addEventListener("click", function () {
    document.getElementById("upload-foto-perfil").click();
  });

function limparFormulario() {
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}

function mostrarFormulario(formulario) {
  if (formulario === 'login') {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('cadastro-form').style.display = 'none';
  } else if (formulario === 'cadastro') {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('cadastro-form').style.display = 'block';
  }
}

function limparFormulario() {
  document.getElementById('login-form').reset();
  document.getElementById('cadastro-form').reset();
}