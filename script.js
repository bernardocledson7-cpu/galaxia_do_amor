/* =========================
   ESTRELAS
========================= */

const canvas =
    document.getElementById("stars");

const ctx =
    canvas.getContext("2d");


let stars = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* Criar estrelas */

function createStars() {

    stars = [];

    for (
        let i = 0;
        i < 180;
        i++
    ) {

        stars.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() * 2,

            speed:
                Math.random() * .5 + .1,

            opacity:
                Math.random()

        });

    }

}


createStars();


/* Animar estrelas */

function animateStars() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    stars.forEach(
        star => {

            star.y +=
                star.speed;


            if (
                star.y >
                canvas.height
            ) {

                star.y = 0;

            }


            ctx.beginPath();


            ctx.fillStyle =
                `rgba(
                    255,
                    255,
                    255,
                    ${star.opacity}
                )`;


            ctx.arc(
                star.x,
                star.y,
                star.size,
                0,
                Math.PI * 2
            );


            ctx.fill();

        }
    );


    requestAnimationFrame(
        animateStars
    );

}


animateStars();



/* =========================
   CORAÇÕES
========================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    heart.innerHTML =
        Math.random() > .5
        ? "❤️"
        : "💗";


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        15 +
        Math.random() * 25 +
        "px";


    heart.style.animationDuration =
        4 +
        Math.random() * 5 +
        "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        () => heart.remove(),
        9000
    );

}


/* Criar corações automaticamente */

setInterval(
    createHeart,
    800
);



/* =========================
   BOTÃO
========================= */

function createManyHearts() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}



/* =========================
   ENTRAR NA GALÁXIA
========================= */

function enterGalaxy() {

    const screen =
        document.getElementById(
            "startScreen"
        );


    screen.style.opacity = "0";


    setTimeout(
        () => {

            screen.style.display =
                "none";

        },
        1000
    );

}
