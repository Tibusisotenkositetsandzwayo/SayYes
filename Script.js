// Target date matching May 8th
const targetDate = new Date("2027-05-08T12:30:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("mins").innerText = String(minutes).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").innerHTML = "<p style='color:#ff5290; font-weight:bold;'>It's Date Time! 🐮❤️</p>";
    }
}, 1000);

function showPage(pageId) {
    document.querySelectorAll('.card-container').forEach(card => {
        card.classList.remove('active-page');
    });
    document.getElementById(pageId).classList.add('active-page');
}

function selectCafe(cafeName) {
    document.getElementById('chosen-cafe').innerText = cafeName;
    showPage('page-success');
}

function moveButton() {
    const noBtn = document.getElementById("no-button");
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function spawnLoveElement() {
    const container = document.getElementById('cow-container');
    const premiumItems = ['🐄', '🐮', '💖', '💘', '🥛', '🌸', '✨', '🐾', '🥰'];
    const element = document.createElement('div');
    
    element.classList.add('floating-cow');
    element.innerText = premiumItems[Math.floor(Math.random() * premiumItems.length)];
    
    element.style.left = Math.random() * 95 + 'vw';
    element.style.fontSize = (Math.random() * 1.5 + 1.2) + 'rem';
    element.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    container.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 10000);
}

setInterval(spawnLoveElement, 300);
 
