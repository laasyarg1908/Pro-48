class Cannon
{
    constructor(x, y, width, height, angle)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.cannon_image = loadImage("assets/CANON.png");
        this.cannon_base = loadImage("assets/cannon_base.png");

    }

    display()
    {
        if (keyIsDown(RIGHT_ARROW) && this.angle < 0.6)
        {
            this.angle += 0.01;
            
        }

        if (keyIsDown(LEFT_ARROW) && this.angle > -1)
        {
            this.angle -= 0.01;
        }

        fill("black");
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_image, 0, 0, this.width, this.height);
        pop();

        image(this.connon_base, 70, 20, 200, 200, PI, TWO_PI);
        noFill();
    }
}