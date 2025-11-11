// Sticky header efecto al hacer scroll
window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    if(window.scrollY > 50){ 
        header.classList.add('scrolled'); 
    } else { 
        header.classList.remove('scrolled'); 
    }
});

// Lightbox functionality
function openLightbox(src){
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

document.getElementById('lightbox').onclick = function(){ 
    this.style.display = 'none'; 
}

// Form submission
function submitForm(e){
    e.preventDefault();
    alert("Mensagem enviada com sucesso! / ¡Mensaje enviado con éxito! / Message sent successfully!");
    e.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});