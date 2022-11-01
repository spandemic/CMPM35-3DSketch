let r;
let theta;
let phi;
let x, y, z;

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(DEGREES);

    r = 240;
  }
  
function draw() {
    orbitControl();
    background(0);

    // formula for calculating points on a sphere
    // x = r(sin(phi)cos(theta))
    // y = r(sin(phi)sin(theta))
    // z = r(cos(phi))
    
    for (let phi = -180; phi <= 180; phi += 15) {
        for (let theta = 0; theta < 360; theta += 30) {
            x = r * sin(phi) * cos(theta);
            y = r * sin(phi) * sin(theta);
            z = r * cos(phi)
            
            push();
            if (phi % 30 == 0) {
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
    
}
  