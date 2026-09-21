const botao = document.getElementById("btnUsuarios");
const imagem = document.getElementById("imagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const pais = document.getElementById("pais");
const senha = document.getElementById("senha");

function buscarUsuario() {
    fetch("https://randomuser.me/api/")
        .then(resposta => resposta.json())
        .then(dados => {
            const usuario = dados.results[0];

            imagem.src = usuario.picture.large;
            nome.textContent = usuario.name.first;
            email.textContent = usuario.email;
            pais.textContent = usuario.location.country;
            senha.textContent = usuario.login.password;
        })
        .catch(erro => {
            console.error("Erro ao buscar usuário:", erro);
        });
}

botao.addEventListener("click", buscarUsuario);

buscarUsuario();
