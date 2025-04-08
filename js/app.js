function CriarMensagem(){
    const mensagem = document.getElementById("mensagem-valor").value;
    const mensagemtext = document.getElementById("text-msg");

  mensagemtext.innerHTML += `<p>${mensagem}</p>
                        <br/>
                                                `;
  document.getElementById("mensagem-valor").value = "";
}
const btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click",CriarMensagem);

function CriarConversa(){
    const conversa = document.getElementById("msg");
 
    conversa.innerHTML += `  <section id="msg">
                <div class="conteudo-preview">
                    <div id="perfil">
                    </div>
                    <p id="preview-msg">Retorno Mensagem de Teste</p>
                </div>
            </section>`
}
const btnAdicionar = document.getElementById("adicionar");
btnAdicionar.addEventListener("click",CriarConversa);