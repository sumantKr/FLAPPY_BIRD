export const birb = document.querySelector('.birb');

export const bird = {
    gravity: 1,
    speed: 0.000001,
    position: 200,
    up: 35,
    x: 100,
    y: 200,
    init: function () {
        this.x=100;
        this.y=200;
        birb.style.left = this.x + 'px';
        birb.style.top = this.y + 'px';
        
    },
    fall: function () {
        // console.log(this.gravity);
        this.y += this.gravity;
        birb.style.top = this.y + 'px';

        //increase speeed of game
        this.gravity += this.speed;
        //increase jump speed
        this.up += this.speed;
    },
    jump: function () {
        if (this.y > 20)
            this.y -= this.up;
        else
            this.y = 50;
        birb.style.top = this.y + 'px';
        // console.table(this.up, this.gravity);
    }
}