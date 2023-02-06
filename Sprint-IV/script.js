// // PASSAGEM DOS SLIDES
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
};


// // Display Formularios
const um = document.querySelector(".um");
const tres = document.querySelector(".tres");
const lg = document.querySelector("#lg");
const cd = document.querySelector("#cd");
const btnfor1 = document.querySelector(".btnfor1");
const btnfor2 = document.querySelector(".btnfor2");

    btnfor1.addEventListener('click', function() {

        if(um.style.display === 'none') {
            um.style.display = 'flex';
        } else {
            um.style.display = 'none';
        }

    });

    lg.addEventListener('click', function() {

        if(um.style.display === 'flex') {
            um.style.display = 'none';
        } else {
            um.style.display = 'flex';
        }

    });

    btnfor2.addEventListener('click', function() {

        if(tres.style.display === 'none') {
            tres.style.display = 'flex';
        } else {
            tres.style.display = 'none';
        }

    });

    cd.addEventListener('click', function() {

        if(tres.style.display === 'flex') {
            tres.style.display = 'none';
        } else {
            tres.style.display = 'flex';
        }

    });



// Validação Formularios
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const campos = document.querySelectorAll('.inputs');
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
});
form2.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate2();
    emailValidate2();
    mainPasswordValidate2();
    comparePassword();
});

// Formulario de Login
function setError(index){
    campos[index].style.border='2px solid #e63636';
    spans[index].style.display='block';
}

function removeError(index){
    campos[index].style.border='';
    spans[index].style.display='none';
}

function nameValidate(){
    if(campos[0].value.length <3){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else{
        removeError(1);
    }
}

function mainPasswordValidate(){
    if(campos[2].value.length<8){
        setError(2);
    }
    else{
        removeError(2)
    }
}

// Formulario de Cadastro
function nameValidate2(){
    if(campos[3].value.length <3){
        setError(3);
    }
    else{
        removeError(3);
    }
}
function emailValidate2(){
    if(!emailRegex.test(campos[4].value)){
        setError(4);
    }
    else{
        removeError(4);
    }
}
function mainPasswordValidate2(){
    if(campos[5].value.length<8){
        setError(5);
    }
    else{
        removeError(5);
        // comparePassword();
    }
}

function comparePassword(){
    if(campos[5].value == campos[6].value && campos[6].value.length >= 8){
        removeError(6);
    }
    else{
        setError(6);
    }
}