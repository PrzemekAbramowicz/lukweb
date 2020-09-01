let accordions = document.querySelectorAll('.accordion-item');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(e) {
        this.querySelector('.accordion-item__content').classList.toggle('is-open');
    });
}