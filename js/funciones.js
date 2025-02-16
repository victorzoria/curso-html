document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowLeft') {
        // Mover al slide anterior
        var prevButton = document.querySelector('.carousel-control-prev');
        if (prevButton) {
            prevButton.click();
        }
    }
    if(event.key === 'ArrowRight') {
        // Mover al siguiente slide
        var nextButton = document.querySelector('.carousel-control-next');
        if (nextButton) {
            nextButton.click();
        }
    }
});