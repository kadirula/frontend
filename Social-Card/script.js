const cards = Array.from(document.querySelectorAll('.card'));
const cardContainer = document.querySelector('.container');

cardContainer.addEventListener('mousemove', (e) => {
    for(const card of cards){
        const rect = card.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
});