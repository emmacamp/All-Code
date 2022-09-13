window.addEventListener('scroll', function(){
    let about = document.getElementById('about');
    let positionObj1 = about.getBoundingClientRect().top;
    console.log(positionObj1);
    let viewportHeight = window.innerHeight/3.5;

    if(positionObj1 < viewportHeight){
        about.style.animation('mover 1s ease-in-out');
    }
});
