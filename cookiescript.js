// cookiescript.js
document.addEventListener('DOMContentLoaded', function () {
    var acceptButton = document.querySelector('.acceptButton');
    var cookieCard = document.querySelector('.cookieCard');

    if (acceptButton && cookieCard) {
        var hasAccepted = localStorage.getItem('cookieAccepted');

        if (!hasAccepted) {
            // The cookie card is not yet accepted
            acceptButton.addEventListener('click', function () {
                cookieCard.style.display = 'none';
                localStorage.setItem('cookieAccepted', 'true');
            });
        } else {
            // The cookie card has been accepted before, hide it
            cookieCard.style.display = 'none';
        }
    }
});
