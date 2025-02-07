let questions = [
    "Do you think I'm the cutest,sexiest and prettiest person ever? 🥰",
    "Would you cuddle with me for 24 hours straight and have fun with me? 😏",
    "Do you manna make me wet?",
    "Do you promise to always give me kisses and hugs? 😘",
    "Are you ready for the most important question? 🤤"
];

let memes = [
    "https://i.imgur.com/JVjdA0h.jpeg",
    "https://i.imgur.com/fjM8DqR.jpeg",
    "https://i.imgur.com/7XnGx92.jpeg",
    "https://i.imgur.com/9FnNoxT.jpeg"
];

let currentQuestion = 0;

function nextQuestion(answer) {
    if (!answer) {
        alert("Oops! Wrong answer. Try again. 😜👅");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
        document.getElementById("catMeme").src = memes[currentQuestion];
    } else {
        document.body.innerHTML = `
            <h1 style="color:#fff; font-size:3rem;">Will You Be My Valentine? 💖🐱</h1>
            <button class="yes" onclick="acceptProposal()">Yes 😍</button>
            <button class="no" onmouseover="moveButton()">No 🙃</button>
            <div class="cat-container">
                <img id="catMeme" src="https://i.imgur.com/7XnGx92.jpeg" alt="Happy Cat">
            </div>
        `;
        startHeartsAndBunnies();
    }
}

function acceptProposal() {
    document.body.innerHTML = "<h1 style='color:#fff; font-size:3rem;'>Yay! 🎉 You said YES! 💕🐱</h1>";
    startHeartsAndBunnies();
}

function moveButton() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    document.querySelector('.no').style.position = "absolute";
    document.querySelector('.no').style.left = x + 'px';
    document.querySelector('.no').style.top = y + 'px';
}

function startHeartsAndBunnies() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("hearts-container").appendChild(heart);

        let bunny = document.createElement('div');
        bunny.classList.add('bunny');
        bunny.innerHTML = "🐰";
        bunny.style.left = Math.random() * 100 + "vw";
        bunny.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("bunnies-container").appendChild(bunny);
    }
}
