
/* TYPED JS */

const typed = new Typed('.typed', {
    strings: ['<span class="text-animation">development and sofware ingenier</span>'],
  
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: 1,
    shouwCursor: true,
    cursorChar: '|',
    contentType: 'html',
  
  })
  
  
  /* UNLOAD EFECTS */
  
  /* Funcion unload */
  function unload() {
    var unload = document.getElementById("unload");
    unload.classList.add("unload");
  
  }
  