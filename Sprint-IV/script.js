let time = 1;
document.getElementById('radio1');

setInterval(function(){
  nextImage();

}, 3000)

function nextImage(){
  time++;

  if(time>3){
    time = 1;
  }
  
  document.getElementById('radio'+time).checked = true;
}

