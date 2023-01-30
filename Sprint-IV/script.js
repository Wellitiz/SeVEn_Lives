// PASSAGEM DOS SLIDES
let time = 1;
document.getElementById("radio1");

setInterval(function () {
  nextImage();
}, 3000);

function nextImage() {
  time++;

  if (time > 3) {
    time = 1;
  }

  document.getElementById("radio" + time).checked = true;
}

//VALIDAÇÃO FORMULÁRIO

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        nameValidate();
        emailValidate();
        mainPasswordValidate();
        comparePassword();
    });

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate(){
        if(campos[0].value.length < 3)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }

    function emailValidate(){
        if(!emailRegex.test(campos[1].value))
        {
            setError(1);
        }
        else
        {
            removeError(1);
        }
    }

    function mainPasswordValidate(){
        if(campos[2].value.length < 8)
        {
            setError(2);
        }
        else
        {
            removeError(2);
            comparePassword();
        }
    }

    function comparePassword(){
        if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
        {
            removeError(3);
        }
        else
        {
            setError(3);
        }
    }



// CRIA O ELEMENTO
//const form = document.createElement("form");

//POPULA O ELEMENTO
// form.innerHTML = `
// <div class="xcontainer">
//   <a class="links" id="paracadastro"></a>
//   <a class="links" id="paralogin"></a>
//   <div class="xcontent">
//     <!--Login-->
//     <div id="login">
//       <form method="post" action="">
//         <h1 class="h1_form">Login</h1>
//         <p>
//           <label for="email_login">Seu E-mail</label>
//           <input id="login_email" name="login_email"required="required" type="text" placeholder="seuemail@email.com">
//         </p>
//         <p>
//           <label for="senha_login">Sua Senha</label>
//           <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234567">
//         </p>
//         <p>
//           <input type="checkbox" name="manterlogado" id="manterlogado" value="">
//           <label for="manterlogado">Manter-me Logado</label>
//         </p>
//         <p>
//           <input type="submit" value="Logar" />
//         </p>
//           <p class="link">Ainda não tem conta?
//           <a href="#paracadastro">Cadastre-se Aqui</a>
//         </p>
//       </form>
//     </div>
//     <!--Formulário Cadastro-->
//     <div id="cadastro">
//       <form method="post" action="">
//         <h1 class="h1_form">Cadastro</h1>
//         <p>
//           <label for="nome_cad">Seu nome</label>
//           <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Digite seu nome" />
//         </p>
//         <p>
//           <label for="email_cad">Seu e-mail</label>
//           <input id="email_cad" name="email_cad" required="required" type="email" placeholder="seuemail@email.com">
//         </p>
//         <p>
//           <label for="senha_cad">Sua Senha</label>
//           <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="Digite uma Senha Segura">
//         </p>
//         <p class="link">Já Possui conta? <a href="#paralogin"> Logar Conta</a></p>
//       </form>
//     </div>
//   </div>
// </div>
// `;
// // ADICIONA O ELEMENTO NO DOM
// const main = document.querySelector("main");
// main.appendChild(form);