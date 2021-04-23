import { bird, birb } from './bird.js'
import { createObstacle } from './obstacle.js'
const banner = document.querySelector('.start');

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    gameOver();
})
let bannerToggle = (e) => {
    e.preventDefault();

    // console.log(e.keyCode);
    if (e.keyCode === 13) {
        banner.style.display = 'none';
        document.addEventListener('keydown', jump);
        document.removeEventListener('keydown', bannerToggle);
        play();

    }
}

let jump = (e) => {
    e.preventDefault();
    if (e.keyCode === 32)
        bird.jump();
}

let gameOver = () => {
    document.removeEventListener('keydown', jump);
    document.addEventListener('keydown', bannerToggle);
    banner.style.display = 'block';
    // bannerToggle();

}
let play = () => {
    bird.init();
    createObstacle();
    let playInterval = setInterval(() => {
        const obstacleBottom = document.querySelector('.obstacle-bottom');
        const obstacleTop = document.querySelector('.obstacle-top');
        // console.log(obstacleBottom.offsetHeight);
        // console.log(birb.offsetTop);
        bird.fall();
        if (obstacleBottom.style.left == birb.style.left) {
            console.log('ins app check');
                if (obstacleBottom.offsetHeight >= 400 - birb.offsetTop) {
                    clearInterval(playInterval);
                    console.log('ins app ');
                    gameOver();
                }
            if (obstacleTop.offsetHeight + obstacleTop.offsetTop >= birb.offsetTop) {
                clearInterval(playInterval);
                console.log('ins app ');
                gameOver();
            }
        }


        if (bird.y > 380) {
            clearInterval(playInterval);
            gameOver();
        }
    }, 16.7);

}