let imgs = [];
let positions = []; 
let targetPositions = []; 
let speed = 15; 
let numImages = 9; 
let clearBackground = false; // New flag for clearing background
let star;

let sketch2 = (p) => {
  p.preload = () => {
    // Load images
    imgs[0] = p.loadImage('texture/texture-.png');
    imgs[1] = p.loadImage('texture/texture-2.png');
    imgs[2] = p.loadImage('texture/texture-3.png');
    imgs[3] = p.loadImage('texture/texture-4.png');
    imgs[4] = p.loadImage('texture/texture-5.png');
    imgs[5] = p.loadImage('texture/texture-6.png');
    imgs[6] = p.loadImage('texture/texture-7.png');
    imgs[7] = p.loadImage('texture/texture-8.png');
    imgs[8] = p.loadImage('texture/texture-9.png');
    star = p.loadImage('star.png'); // Correctly load the star image
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight); 

    for (let i = 0; i < numImages; i++) {
      let x = p.random(-imgs[i].width, p.width + imgs[i].width); 
      let y = p.random(-imgs[i].height, p.height + imgs[i].height);
      positions.push({ x: x, y: y });

      targetPositions.push({
        x: p.random(0, p.width - imgs[i].width),
        y: p.random(0, p.height - imgs[i].height)
      });
    }
  };

  p.draw = () => {
    // Clear the background if the flag is set
    if (clearBackground) {
      p.clear(); // Clear the canvas
    } else {
      p.background(250, 249, 246); // Draw background color
    }

    // Draw the star image at the bottom right corner

    // Move each image towards its target position
    for (let i = 0; i < numImages; i++) {
      let pos = positions[i];
      let targetPos = targetPositions[i];

      // Move towards the target position
      if (pos.x < targetPos.x) {
        pos.x += speed; 
        if (pos.x > targetPos.x) {
          pos.x = targetPos.x; 
        }
      } else if (pos.x > targetPos.x) {
        pos.x -= speed; 
        if (pos.x < targetPos.x) {
          pos.x = targetPos.x; 
        }
      }
      
      if (pos.y < targetPos.y) {
        pos.y += speed; 
        if (pos.y > targetPos.y) {
          pos.y = targetPos.y;
        }
      } else if (pos.y > targetPos.y) {
        pos.y -= speed; 
        if (pos.y < targetPos.y) {
          pos.y = targetPos.y;
        }
      }

      // Draw the image at its current position
      p.image(imgs[i], pos.x, pos.y, imgs[i].width / 4, imgs[i].height / 4); 
    }
    p.image(star, 500, 500, star.width / 4, star.height / 4);
  };

  p.mousePressed = () => {
    // Clear the background when mouse is pressed
    clearBackground = true;

    // Move all images to new target positions outside the frame
    for (let i = 0; i < numImages; i++) {
      // Randomly choose a direction to move out of the canvas
      let direction = p.floor(p.random(4)); // 0: left, 1: right, 2: up, 3: down
      switch (direction) {
        case 0: // Move left
          targetPositions[i] = { x: p.random(-imgs[i].width, -100), y: positions[i].y };
          break;
        case 1: // Move right
          targetPositions[i] = { x: p.random(p.width + 100, p.width + imgs[i].width), y: positions[i].y };
          break;
        case 2: // Move up
          targetPositions[i] = { x: positions[i].x, y: p.random(-imgs[i].height, -100) };
          break;
        case 3: // Move down
          targetPositions[i] = { x: positions[i].x, y: p.random(p.height + 100, p.height + imgs[i].height) };
          break;
      }
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight); // Resize the canvas on window resize
  };
};

// Attach the sketch to the div with ID 'sketch2-container'
new p5(sketch2, 'sketch2-container');
