let sketch1 = (p) => {
  let font;
  let houses = [];
  let selected_image;

  p.preload = () => {
    font = p.loadFont('ABCSynt-Mono.otf');
    houses[0] = p.loadImage('houses/ascii_house_01.png');
    houses[1] = p.loadImage('houses/marie_houses-01.png');
    houses[2] = p.loadImage('houses/marie_houses-02.png');
    houses[3] = p.loadImage('houses/nor_house.png');
    houses[4] = p.loadImage('houses/nor_house_02.png');
    houses[5] = p.loadImage('houses/nor_house_03.png');
    houses[6] = p.loadImage('houses/3d_house_03.png');
    houses[7] = p.loadImage('houses/3d_house_06.png');
    houses[8] = p.loadImage('houses/3d_house_09.png');
    houses[9] = p.loadImage('houses/3d_house_11.png');
    houses[10] = p.loadImage('houses/sarah_house-23.png');
    houses[11] = p.loadImage('houses/sarah_house-24.png');
    houses[12] = p.loadImage('houses/sarah_house-25.png');
    houses[13] = p.loadImage('houses/sarah_house-26.png');
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background('#FAF9F6');
    p.imageMode(p.CENTER);
    p.drawingContext.shadowBlur = 5;
    p.drawingContext.shadowColor = 'rgba(94,94,94,0.2)';
    selected_image = p.random(houses);
    p.image(selected_image, p.windowWidth / 2, p.windowHeight / 2);
  };

  p.draw = () => {
    p.drawingContext.shadowBlur = 5;
    p.drawingContext.shadowColor = 'rgba(134, 255, 134, 0.1)';
    p.textSize(24);
    p.textFont(font);
    p.text('DRAW YOUR OWN GREENTOPIA', 50, 50);
    p.text('press e to redraw, press s to save', 50, 75);

    p.noStroke();
    p.fill('#86ff86');
    p.circle(p.mouseX, p.mouseY, 8);
  };

  p.mouseClicked = () => {

  };

  p.keyPressed = () => {
    if (p.key === 's' || p.key === 'S') {
      p.saveCanvas('love_your_art', 'png');
    }
    if (p.key === 'e' || p.key === 'E') {  
      p.setup();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// Attach the sketch to the div with ID 'sketch1-container'
new p5(sketch1, 'sketch1-container');
