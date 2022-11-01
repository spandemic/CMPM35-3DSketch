let r;
let theta;
let phi;
let x, y, z;

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(DEGREES);

    r = 210;
  }
  
function draw() {
    orbitControl();
    background(0);
    // x = r(sin(phi)cos(theta))
    // y = r(sin(phi)sin(theta))
    // z = r(cos(phi))

    // rotateZ(5 * frameCount);
    // rotateX(5 * frameCount);
    
    for (let phi = -180; phi <= 180; phi += 15) {
        for (let theta = 0; theta < 360; theta += 15) {
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
            translate(x, z, y);
            noStroke();
            sphere(2);
            pop();
        }

    }
    
}
  