// ==============================
// LOADER
// ==============================

window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
        document.getElementById("cinematic").style.display = "flex";

        setTimeout(function () {

            document.getElementById("cinema1").style.display = "none";
            document.getElementById("cinema2").style.display = "block";

        }, 3000);

        setTimeout(function () {

            document.getElementById("blackFade").style.opacity = "1";

            setTimeout(function () {

                document.getElementById("cinematic").style.display = "none";
                document.getElementById("welcome").style.display = "flex";
                document.getElementById("welcome").classList.add("fadeIn");

                setTimeout(function () {

                    document.getElementById("blackFade").style.opacity = "0";

                }, 400);

            }, 1000);

        }, 6000);

    }, 2500);

};


// ==============================
// OPEN SURPRISE
// ==============================

document.getElementById("openBtn").onclick = function () {

    changePage("welcome", "passwordPage");

};


// ==============================
// PASSWORD
// ==============================

function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === "1609") {

        document.getElementById("passwordPage").style.display = "none";

        document.getElementById("hero").style.display = "flex";
        document.getElementById("hero").classList.add("fadeIn");

        const music = document.getElementById("bgMusic");

        music.volume = 0.35;

        music.play().catch(function () {
            console.log("Music requires user interaction.");
        });

    } else {

        document.getElementById("error").innerHTML =
            "❌ Wrong Password ❤️";

    }

}


// ==============================
// HERO
// ==============================

document.getElementById("startBtn").onclick = function () {

    document.getElementById("hero").style.display = "none";

    document.getElementById("journey").style.display = "flex";
    document.getElementById("journey").classList.add("fadeIn");

};


// ==============================
// JOURNEY
// ==============================

document.getElementById("nextBtn").onclick = function () {

    document.getElementById("journey").style.display = "none";

    document.getElementById("meeting").style.display = "flex";
    document.getElementById("meeting").classList.add("fadeIn");

    startTyping();

};


// ==============================
// TYPING EFFECT
// ==============================

let text =
"Every beautiful story has a beginning... And ours became my favorite chapter. That day I never imagined that someone would become so special to me. Thank you for every smile, every memory and every moment. ❤️";

let index = 0;

function startTyping() {

    document.getElementById("typing").innerHTML = "";

    index = 0;

    typingEffect();

}

function typingEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typingEffect, 35);

    }

}


// ==============================
// MEETING → GALLERY
// ==============================

document.getElementById("meetingNext").onclick = function () {

    document.getElementById("meeting").style.display = "none";

    document.getElementById("gallery").style.display = "flex";

    current = 0;

    showPhoto();

    clearInterval(autoSlide);

    autoSlide = setInterval(nextGalleryPhoto, 4000);

};


// ==============================
// PHOTO GALLERY
// ==============================

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

const captions = [
    "Our first beautiful memory ❤️",
    "The smile I never want to lose 🌹",
    "My favorite picture of us ✨",
    "Forever grateful for you 💖",
    "Mine forever ❤️"
];

let current = 0;

function showPhoto() {

    document.getElementById("photo").src =
        photos[current];

    document.getElementById("photoText").innerHTML =
        captions[current];

}


// ==============================
// GALLERY BUTTONS
// ==============================

document.getElementById("nextPhoto").onclick = function () {

    clearInterval(autoSlide);

    nextGalleryPhoto();

    if (
        document.getElementById("gallery").style.display === "flex"
    ) {

        autoSlide = setInterval(nextGalleryPhoto, 4000);

    }

};


document.getElementById("prevPhoto").onclick = function () {

    current--;

    if (current < 0) {

        current = photos.length - 1;

    }

    showPhoto();

};


// ==============================
// AUTO GALLERY
// ==============================

let autoSlide;

function nextGalleryPhoto() {

    current++;

    if (current >= photos.length) {

        clearInterval(autoSlide);

        document.getElementById("gallery").style.display = "none";

        document.getElementById("letter").style.display = "flex";
        document.getElementById("letter").classList.add("fadeIn");

        startLetter();

        return;

    }

    showPhoto();

}


// ==============================
// LOVE LETTER
// ==============================

const letter =
`My Dearest Fatemah,

Thank you for bringing happiness, peace and beautiful memories into my life.

No matter what happens, I will always pray for your smile, your success and your happiness.

Happy Birthday, Princess. ❤️`;

let letterIndex = 0;

function startLetter() {

    document.getElementById("letterText").innerHTML = "";

    letterIndex = 0;

    typeLetter();

}

function typeLetter() {

    if (letterIndex < letter.length) {

        document.getElementById("letterText").innerHTML +=
            letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}


// ==============================
// LETTER → COUNTDOWN
// ==============================

document.getElementById("letterNext").onclick = function () {

    document.getElementById("letter").style.display = "none";

    document.getElementById("countdown").style.display = "flex";

    let count = 3;

    document.getElementById("countNumber").innerHTML = count;

    let timer = setInterval(function () {

        count--;

        if (count > 0) {

            document.getElementById("countNumber").innerHTML =
                count;

        } else {

            clearInterval(timer);

            document.getElementById("countdown").style.display = "none";

            document.getElementById("question").style.display = "flex";
            document.getElementById("question").classList.add("fadeIn");

        }

    }, 1000);

};


// ==============================
// QUESTION → FINAL
// ==============================

function openFinalPage() {

    document.getElementById("question").style.display = "none";

    document.getElementById("final").style.display = "flex";
    document.getElementById("final").classList.add("fadeIn");

    for (let i = 0; i < 25; i++) {

        setTimeout(function () {

            createFirework();

        }, i * 120);

    }

    startLoveTyping();

    setInterval(createHeart, 500);
    setInterval(createConfetti, 120);

}

document.getElementById("yesBtn").onclick = openFinalPage;

document.getElementById("foreverBtn").onclick = openFinalPage;


// ==============================
// RESTART
// ==============================

document.getElementById("restartBtn").onclick = function () {

    location.reload();

};


// ==============================
// FALLING ROSES
// ==============================

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌹";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(function () {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 1500);


// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 6000);

}


// ==============================
// LOVE TYPING
// ==============================

const loveText =
"I Love You... Forever ❤️";

let loveIndex = 0;

function startLoveTyping() {

    document.getElementById("loveTyping").innerHTML = "";

    loveIndex = 0;

    typeLove();

}

function typeLove() {

    if (loveIndex < loveText.length) {

        document.getElementById("loveTyping").innerHTML +=
            loveText.charAt(loveIndex);

        loveIndex++;

        setTimeout(typeLove, 100);

    }

}


// ==============================
// CONFETTI
// ==============================

function createConfetti() {

    const piece = document.createElement("div");

    piece.className = "confetti";

    const colors = [
        "#FFD700",
        "#FF4D6D",
        "#00E5FF",
        "#7CFF6B",
        "#FFFFFF"
    ];

    piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    piece.style.left =
        Math.random() * 100 + "vw";

    piece.style.animationDuration =
        (3 + Math.random() * 2) + "s";

    document.getElementById("confetti").appendChild(piece);

    setTimeout(function () {

        piece.remove();

    }, 5000);

}


// ==============================
// OPEN MY GIFT
// ==============================

document.getElementById("openGiftBtn").onclick = function () {

    document.getElementById("openGiftBtn").style.display =
        "none";

    document.getElementById("giftMessage").style.display =
        "block";

    document.getElementById("secretLetterBtn").style.display =
        "inline-block";

};


// ==============================
// SECRET LETTER
// ==============================

document.getElementById("secretLetterBtn").onclick = function () {

    document.getElementById("secretLetter").style.display =
        "block";

    document.getElementById("secretLetterBtn").style.display =
        "none";

    setTimeout(function () {

        document.getElementById("cinematicEnding")
            .classList.add("cinematicShow");

    }, 8000);

};


// ==============================
// SECOND BIRTHDAY CAKE
// ==============================

document.getElementById("blowCandlesBtn").onclick = function () {

    const flames =
        document.querySelectorAll(".flame");

    flames.forEach(function (flame) {

        flame.style.display = "none";

    });

    document.getElementById("cakeMessage").innerHTML =
        "Wish made! Happy Birthday, Fatemah ❤️";

    document.getElementById("blowCandlesBtn").style.display =
        "none";

    for (let i = 0; i < 20; i++) {

        setTimeout(function () {

            createHeart();

        }, i * 80);

    }

    for (let i = 0; i < 10; i++) {

        setTimeout(function () {

            createConfetti();

        }, i * 100);

    }

};


// ==============================
// FIRST CAKE CANDLE → GAME
// ==============================

function blowCandle() {

    // Change candle to blown-out candle
    document.getElementById("candle").innerHTML = "💨";

    // Celebration
    for (let i = 0; i < 60; i++) {

        createConfetti();

    }

    for (let i = 0; i < 20; i++) {

        createHeart();

    }

    // Wait for celebration
    setTimeout(function () {

        // Hide first cake
        document.getElementById("cakeSection").style.display =
            "none";

        // Show Tic-Tac-Toe
        document.getElementById("timoGame").style.display =
            "block";

        // Start a fresh game
        startGame();

        // Scroll to game
        document.getElementById("timoGame").scrollIntoView({
            behavior: "smooth"
        });

    }, 1200);

}


// ==============================
// MUSIC CONTROL
// ==============================

const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");

musicBtn.onclick = function () {

    if (bgMusic.paused) {

        bgMusic.play();

        musicBtn.innerHTML =
            "🎵 Music ON";

    } else {

        bgMusic.pause();

        musicBtn.innerHTML =
            "🔇 Music OFF";

    }

};


// ==============================
// FIREWORKS
// ==============================

function createFirework() {

    const firework =
        document.createElement("div");

    firework.className =
        "firework";

    firework.style.left =
        (20 + Math.random() * 60) + "vw";

    firework.style.top =
        (20 + Math.random() * 40) + "vh";

    firework.style.setProperty(
        "--x",
        (Math.random() * 300 - 150) + "px"
    );

    firework.style.setProperty(
        "--y",
        (Math.random() * 300 - 150) + "px"
    );

    document.getElementById("fireworks")
        .appendChild(firework);

    setTimeout(function () {

        firework.remove();

    }, 1200);

}


// ==============================
// MEMORY WALL
// ==============================

const memoryCards =
    document.querySelectorAll(".memoryCard");

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closePhotoViewer =
    document.getElementById("closePhotoViewer");


memoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const image =
            card.querySelector("img");

        viewerImage.src =
            image.src;

        photoViewer.style.display =
            "flex";

    });

});


closePhotoViewer.onclick = function () {

    photoViewer.style.display =
        "none";

};


photoViewer.onclick = function (event) {

    if (event.target === photoViewer) {

        photoViewer.style.display =
            "none";

    }

};


// ==============================
// SMOOTH PAGE TRANSITIONS
// ==============================

function changePage(fromId, toId) {

    const fromPage =
        document.getElementById(fromId);

    const toPage =
        document.getElementById(toId);

    fromPage.classList.add("pageLeaving");

    setTimeout(function () {

        fromPage.style.display = "none";

        fromPage.classList.remove("pageLeaving");

        toPage.style.display = "flex";

        toPage.classList.add("pageEntering");

        setTimeout(function () {

            toPage.classList.remove("pageEntering");

        }, 800);

    }, 700);

}


// ================================
// TIMO TIC-TAC-TOE GAME ❤️
// ================================

let board = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

let gameOver = false;

let player = "X";

let ai = "O";


// ==============================
// START GAME
// ==============================

function startGame() {

    board = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    gameOver = false;

    const cells =
        document.querySelectorAll(
            "#gameBoard button"
        );

    cells.forEach(function (cell) {

        cell.innerHTML = "";
        cell.disabled = false;

    });

    document.getElementById("gameMessage").innerHTML =
        "Your turn, Timo ❤️";

}


// ==============================
// PLAYER MOVE
// ==============================

function playMove(index) {

    if (
        gameOver ||
        board[index] !== ""
    ) {

        return;

    }

    board[index] = player;

    updateBoard();


    if (checkWinner(player)) {

        endGame(
            "🎉 CONGRATULATIONS TIMO ❤️👑"
        );

        return;

    }


    if (
        board.every(function (cell) {
            return cell !== "";
        })
    ) {

        endGame(
            "It's a draw 😭❤️ Try again!"
        );

        return;

    }


    document.getElementById("gameMessage").innerHTML =
        "My turn... 🤖❤️";


    setTimeout(function () {

        aiMove();

    }, 500);

}


// ==============================
// AI MOVE
// ==============================

function aiMove() {

    if (gameOver) {

        return;

    }

    let emptyCells = [];


    board.forEach(function (cell, index) {

        if (cell === "") {

            emptyCells.push(index);

        }

    });


    if (emptyCells.length === 0) {

        return;

    }


    // AI tries to win

    for (
        let i = 0;
        i < emptyCells.length;
        i++
    ) {

        let index =
            emptyCells[i];

        board[index] = ai;


        if (checkWinner(ai)) {

            updateBoard();

            endGame(
                "Awww Timo 😭❤️ Try again!"
            );

            return;

        }

        board[index] = "";

    }


    // AI blocks Timo

    for (
        let i = 0;
        i < emptyCells.length;
        i++
    ) {

        let index =
            emptyCells[i];

        board[index] = player;


        if (checkWinner(player)) {

            board[index] = ai;

            updateBoard();

            document.getElementById("gameMessage").innerHTML =
                "My turn... 😏❤️";

            setTimeout(function () {

                if (!gameOver) {

                    document.getElementById("gameMessage").innerHTML =
                        "Your turn, Timo ❤️";

                }

            }, 500);

            return;

        }

        board[index] = "";

    }


    // Random move

    let randomIndex =
        emptyCells[
            Math.floor(
                Math.random() *
                emptyCells.length
            )
        ];


    board[randomIndex] = ai;

    updateBoard();


    if (checkWinner(ai)) {

        endGame(
            "Awww Timo 😭❤️ Try again!"
        );

        return;

    }


    if (
        board.every(function (cell) {
            return cell !== "";
        })
    ) {

        endGame(
            "It's a draw 😭❤️ Try again!"
        );

        return;

    }


    document.getElementById("gameMessage").innerHTML =
        "Your turn, Timo ❤️";

}


// ==============================
// UPDATE BOARD
// ==============================

function updateBoard() {

    const cells =
        document.querySelectorAll(
            "#gameBoard button"
        );

    cells.forEach(function (cell, index) {

        cell.innerHTML =
            board[index];

    });

}


// ==============================
// WIN CHECK
// ==============================

function checkWinner(symbol) {

    const winningCombinations = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]

    ];


    return winningCombinations.some(
        function (combo) {

            return combo.every(
                function (index) {

                    return board[index] === symbol;

                }
            );

        }
    );

}


// ==============================
// END GAME → ONE LAST GIFT
// ==============================

function endGame(message) {

    gameOver = true;


    document.querySelectorAll(
        "#gameBoard button"
    ).forEach(function (cell) {

        cell.disabled = true;

    });


    document.getElementById("gameMessage").innerHTML =
        message;


    // Celebration if Timo wins

    if (
        message.includes(
            "CONGRATULATIONS"
        )
    ) {

        for (let i = 0; i < 80; i++) {

            createConfetti();

        }

        for (let i = 0; i < 30; i++) {

            createHeart();

        }

    }


    // ==============================
    // AFTER GAME
    // SHOW ONE LAST GIFT
    // ==============================

    setTimeout(function () {

        // Hide game
        document.getElementById("timoGame").style.display =
            "none";


        // Show gift section
        const giftBox =
            document.getElementById("giftBox");

        giftBox.style.display =
            "block";


        // IMPORTANT:
        // Keep Open My Gift button visible
        document.getElementById("openGiftBtn").style.display =
            "inline-block";


        // Hide message until she opens gift
        document.getElementById("giftMessage").style.display =
            "none";


        // Hide secret letter button until gift is opened
        document.getElementById("secretLetterBtn").style.display =
            "none";


        // Scroll to gift
        giftBox.scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);

}
