let scale = 1.5;
let posX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 1);
  shape = createShape([
    [0, 50],
    [0, 60],
    [-100, 0],
    [0, -60],
    [0, -50],
    [50, 0],
    [75, 25],
    [75, -25],
    [50, 0]
  ]);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // 根據滑鼠移動改變形狀的大小
  let size = map(mouseX, 0, width, 10, 50);
  scale = map(mouseX, 0, width, 1, 3);

  for (let j = 0; j < 5; j++) {
    push(); // 記錄目前的變換矩陣
    translate(posX + j * 20, 0); // 水平移動多邊形
    for (let i = 0; i < shape.length; i++) {
      let point1 = shape[i];
      let point2 = shape[(i + 1) % shape.length];
      let color1 = color(random(255), random(255), random(255), 1);
      let color2 = color(random(255), random(255), random(255), 1);
      setGradient(
        point1.x * scale,
        point1.y * scale,
        color1,
        point2.x * scale,
        point2.y * scale,
        color2
      );
    }
    pop(); // 恢復先前的變換矩陣
  }
  // 顯示 "TKUET"
  textSize(size);
  textAlign(CENTER, CENTER);
  fill(random(255), random(255), random(255), 1);
  text("TKUET", 0, 0);
}

function setGradient(x1, y1, c1, x2, y2, c2) {
  let gradient = drawingContext.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  drawingContext.strokeStyle = gradient;
  strokeWeight(10);
  line(x1, y1, x2, y2);
}

function createShape(points) {
  let shape = [];
  for (let i = 0; i < points.length; i++) {
    let point = createVector(points[i][0], points[i][1]);
    shape.push(point);
  }
  return shape;
}
