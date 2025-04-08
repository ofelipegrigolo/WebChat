function CriarMensagem(){
    const mensagem = document.getElementById("mensagem-valor").value;
    const mensagemtext = document.getElementById("text-msg");

  // Cria um novo parágrafo e adiciona ao container, sem apagar o anterior
  mensagemtext.innerHTML += `<p>${mensagem}</p>
                        <br/>
                                                `;

  // Limpa o campo de texto depois de enviar
  document.getElementById("mensagem-valor").value = "";
}
const btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click",CriarMensagem);