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

    // inner swarm
    for (let phi = 45; phi < 345; phi += 15) {
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

    // BIBLICALLY ACCURATE ANGEL
    push();
    noStroke();
    rotateY(1.5 * frameCount + 15);
    rotateZ(1.5 * frameCount);
    torus(150, 15, 6, 6);
    pop();

    push();
    noStroke();
    rotateX(-1.5 * frameCount);
    rotateZ(1.5 * frameCount - 12);
    torus(150, 15, 5, 6);
    pop();

    push();
    noStroke();
    rotateY(-1.5 * frameCount);
    rotateX(1.5 * frameCount+ 35);
    torus(150, 15, 4, 6);
    pop();

    // eyeball
    
}
  