const game = document.querySelector('.game');
import { bird, birb } from './bird.js';

export function createObstacle() {
    const obstacleTop = document.createElement('div');
    const obstacleBottom = document.createElement('div');
    let leftOfObstacle = 400;
    let topHeight = Math.random() * 16 + 3.125;
    let bottomHeight = 21.5 - topHeight;
    obstacleBottom.classList.add('obstacle-bottom');
    obstacleTop.classList.add('obstacle-top');
    obstacleBottom.style.left = obstacleTop.style.left = leftOfObstacle + 'px';
    obstacleTop.style.height = topHeight + 'rem';
    obstacleBottom.style.height = bottomHeight + 'rem';
    game.appendChild(obstacleBottom);
    game.appendChild(obstacleTop);
    let creationTimer = setTimeout(createObstacle, 4000);
    setInterval(() => {
        // console.log(bird.y);
        if (leftOfObstacle >= -20) {
            leftOfObstacle = leftOfObstacle - 1;
            obstacleBottom.style.left = leftOfObstacle + 'px';
            obstacleTop.style.left = leftOfObstacle + 'px';

        }
        else {
            obstacleBottom.remove();
            obstacleTop.remove();
        }
        if (bird.y > 380) {
            clearTimeout(creationTimer);
        }
        if (obstacleBottom.style.left == birb.style.left) {
            console.log('ins obs cekc');
            if (obstacleBottom.offsetHeight >= 400 - birb.offsetTop){
                clearTimeout(creationTimer);
                console.log('ins obs');

            }
            if (obstacleTop.offsetHeight+obstacleTop.offsetTop >=  birb.offsetTop){
                clearTimeout(creationTimer);
                console.log('ins obs');

            }

        }
    }, 10);
}

