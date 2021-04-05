class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(4);

        var puint1X = pointA.x
        var puint1Y = pointA.y

        var puint2X = pointB.x+this.offsetX
        var puint2Y = pointB.y+this.offsetY

        line(puint1X, puint1Y, puint2X, puint2Y);
    }
}