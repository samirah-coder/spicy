let questions = [
    "Do you think I'm the cutest,sexiest and prettiest person ever? 🥰",
    "Would you cuddle with me for 24 hours straight and have fun with me? 😏",
    "Do you manna make me wet?",
    "Do you promise to always give me kisses and hugs? 😘",
    "Are you ready for the most important question? 🤤"
];

let memes = [
    "https://media.gifdb.com/cute-bf-gf-couple-hug-2oyicxe5ac4ts3tn.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXk0a2c0NGFhb2lhd3VnNXllaG5sNTJ4M2piNGM3ZHVzOWJwaXNrciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DdfmUJ1IpAtws/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTQ1ZW56MndnNzgxbHc3bmUxeXVsc3NyaWQxN3MwamIxaDNyaG93eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ik7yZ0whfgeqI/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2R5OWttaGc5YzQ2a2Frazk1bXJvY3dicDFrMGh1cjNwb2RqZGxrYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gMA8trxqSKjGo/giphy.gif"
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
                <img id="catMeme" src="https://tenor.com/udu0qpEm09W.gif" alt="Happy Cat">
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
