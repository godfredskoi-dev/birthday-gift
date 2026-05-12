 
 document.addEventListener("DOMContentLoaded", () => {

    // ================= TYPEWRITER =================
    function typeWriter(text, element, speed = 80, onComplete = null) {
        

        let i = 0;
        element.innerHTML = "";

        function typing() {
            if (i < text.length) {
                element.innerHTML += text[i];
                i++;
                setTimeout(typing, speed);
            }else{
                if (onComplete) onComplete();
            }
        }

        typing();
    }

    // ================= COUNTDOWN =================
   let timeLeft = 5;
const countdownText = document.getElementById('countdownText');
const startBtn = document.getElementById('startBtn');

if (countdownText && startBtn) {
    const countdown = setInterval(() => {
        timeLeft--;
        countdownText.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            countdownText.innerText = "🎂 It's time!";
            startBtn.style.display = "block";
        }
    }, 1000);
}

    // ================= MUSIC =================
    document.body.addEventListener('click', () => {
        const music = document.getElementById('bgMusic');
        if (music) {
            music.play().catch(() => {});
        }
    }, { once: true });

    // ================= SCREEN SWITCH =================
    const mainContent = document.getElementById('mainContent');
const countdownScreen = document.getElementById('countdownScreen');

if (startBtn && mainContent && countdownScreen) {
    startBtn.addEventListener('click', () => {
        countdownScreen.style.display = 'none';
        mainContent.style.display = 'block';
     // 🎉 Celebration explosion
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: ['#ff99bb', '#ffc0cb', '#ff66a3', '#ffffff'] });
    confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 } });
});
}

    // ================= SURPRISE BUTTON =================
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseDiv = document.getElementById('surpriseContent');

    if (surpriseBtn && surpriseDiv) {
        surpriseBtn.addEventListener('click', () => {

            if (surpriseDiv.style.display === '' || surpriseDiv.style.display === 'none') {

                surpriseDiv.innerHTML = '<p id="loveMessage"></p>';
                surpriseDiv.style.display = 'block';

                setTimeout(() => {
                    typeWriter(
                        "🎁 You are my greatest gift. I love you so much ❤️",
                        document.getElementById("loveMessage")
                    );
                }, 300);

                surpriseBtn.innerText = 'Close surprise';

            } else {
                surpriseDiv.style.display = 'none';
                surpriseBtn.innerText = 'Click for a surprise!';
            }
        });
    }

    // ================= FLOATING HEARTS =================
    const heartsContainer = document.querySelector('.hearts');

    if (heartsContainer) {
        setInterval(() => {
            const heart = document.createElement('span');
            heart.innerHTML = '💖';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
       heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 10000);
        }, 800);
    }

    // ================= SPECIAL MESSAGE PAGE =================
if (openMessageBtn && mainContent && messageSection) {
    openMessageBtn.addEventListener('click', () => {

        mainContent.style.display = 'none';
        messageSection.style.display = 'flex';

        const messageEl = document.getElementById("specialMessage");

        if (messageEl) {
            typeWriter(
                "From the moment I met you, everything changed... ❤️ You are my happiness, my peace, and my forever. Happy Birthday my love 🎂💖",
                messageEl,
                80,
                () => {
    // =Center burst
    confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff99bb', '#ffc0cb', '#ff66a3', '#ffffff']
    });

    // Left burst
    confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });

    // Right burst
    confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
   });
   //  then gentle fall
// Continuous rain
const rainInterval = setInterval(() => {
    confetti({
        particleCount: 10,
        angle: 90,
        spread: 120,
        origin: { y: 0 },
        gravity: 1.5
    });
}, 200);

// Stop after 5 seconds
setTimeout(() => {
    clearInterval(rainInterval);
}, 5000);
                    }
                );
            }
        });
    }
});