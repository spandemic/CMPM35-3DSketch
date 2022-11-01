let r, r2;
let theta;
let phi;
let x, y, z;

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(DEGREES);

    r = 240;
    r2 = 210;
  }
  
function draw() {
    orbitControl();
    background(0);

    // formula for calculating points on a sphere
    // x = r(sin(phi)cos(theta))
    // y = r(sin(phi)sin(theta))
    // z = r(cos(phi))
    
    // outer swarm
    for (let theta = 30; theta < 330; theta += 15) {
        for (let phi = 0; phi < 360; phi += 30) {
            x = r * sin(phi) * cos(theta);
            y = r * sin(phi) * sin(theta);
            z = r * cos(phi);
            
            push();
            if (theta % 30 == 0) {
                rotateY(frameCount);
                rotateZ(-frameCount);
            } else {
                rotateY(-frameCount);
                rotateX(frameCount);
            }
            translate(x, y, z);
            noStroke();
            sphere(2);
            pop();
        }
    }

    // inner core
    for (let phi = 15; phi < 345; phi += 15) {
        push();
        fill(phi % 180);
        for (let theta = 0; theta < 360; theta += 15) {
            x = r2 * sin(phi) * cos(theta);
            y = r2 * sin(phi) * sin(theta);
            z = r2 * cos(phi);
            
            push();
            if (phi % 30 == 0) {
                rotateZ(2 * frameCount);
            } else {
                rotateZ(-2 * frameCount);
            }
            translate(x, y, z);
            noStroke();
            cone(20, 20, 3);
            pop();
        }
        pop();
    }
}
  