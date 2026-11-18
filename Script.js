const bookButtons = document.querySelectorAll('.Book, .Book-btn');
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.Destination').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const learnButtons = document.querySelectorAll('.Card-content button');
learnButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.Destination-card');
        const destination = card.querySelector('h2').textContent;
        const price = card.querySelector('.Price').textContent;
        const description = card.querySelector('p').textContent;
        alert(
            'Destination: ' + destination +
            '\n' + price +
            '\n\n' + description
        );
    });
});
const homeLink = document.querySelector('.top li:first-child a');
homeLink.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const destinationLink = document.querySelector('.top li:last-child a');
destinationLink.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.Destination').scrollIntoView({
        behavior: 'smooth'
    });
});
const backToTop = document.querySelector('.Back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
