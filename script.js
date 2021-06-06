document.querySelector('.troll').addEventListener('click', function(){
  var audio = new Audio('five-nights-at-freddys-full-scream-sound_2.mp3')
  audio.play()
  document.querySelector('.troll').style.display = 'none';
  document.querySelector('.ghost').style.display = 'inherit';
})
