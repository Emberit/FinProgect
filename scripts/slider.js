let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide_item");
    
    if (slides) {
        if (n > slides.length) {
        slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "block";
    } else {
        return
    }
    
    
}

