let cols, rows;
let scl = 15;
let w = 1000; 
let h = 1500; 

let flying = 0;

let terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;
  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
   noStroke();
}

function draw() {
  flying -= 0.1;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1
    }
    yoff += 0.1;
  }
  background(0);
  rotateX(PI / 3);
  rotateZ(-PI / 3);
  fill(138, 73, 20, 200);
  translate(-w / 2, 3 * -h / 4);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      let v = terrain[x][y];
      fill(v+110, v+58, v+16, v+200);
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      endShape();
  }
  directionalLight(250,250,250,300,200,300);
  ambientLight(255,255,255);
  translate(w / 2, 3 * h / 4);
  rotateZ(PI / 3);
  rotateX(-PI / 3);
  translate(-120,-140,400);
  specularMaterial(155,0,0);
  fill(155,0,0);
  sphere(10);
  fill(155,155,0);  
  translate(80,20);
  beginShape();
  vertex(0,6);
  vertex(1,2);
  vertex(5,2);
  vertex(2,-0.5);
  vertex(3,-4);
  vertex(0,-1.5);
  vertex(-3,-4);
  vertex(-2,-0.5);
  vertex(-5,2);
  vertex(-1,2);
  endShape(CLOSE)
  translate(70, -10);
  rotate(PI/2);
  beginShape(); 
  vertex(0,3);
  vertex(0.5,1);
  vertex(2.5,1);
  vertex(1,-0.25);
  vertex(1.5,-2);
  vertex(0,-0.75);
  vertex(-1.5,-2);
  vertex(-1,-0.25);
  vertex(-2.5,1);
  vertex(-0.5,1);
  endShape(CLOSE)
  rotate(-PI/2)
  translate(100, 30);
  rotate(PI/3);
  beginShape();
  vertex(0,12);
  vertex(2,4);
  vertex(10,4);
  vertex(4,-1);
  vertex(6,-8);
  vertex(0,-3);
  vertex(-6,-8);
  vertex(-4,-1);
  vertex(-10,4);
  vertex(-2,4);
  endShape(CLOSE)
  rotate(-PI/3);
  
  translate(-130,100,0);
  translate(mouseX/2-150 , mouseY/2-150);
  push();
  rotateX(PI/3);
  fill(189,189,189);
  ambientMaterial(189,189,189);
  sphere(13);
  torus(15, 5);
  translate(0,0,-8);
  fill(255,255,0);
  ambientMaterial(255,255,0);
  torus(7,4);
  translate(0,0,16);
  fill(255,255,0);
  torus(7,3);
  translate(0,0,-8);
  fill(10,45,255);
  ambientMaterial(0,0,255);
  torus(20,1);
  pop();
}
