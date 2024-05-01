
let photo;

function preload() {
  photo = loadImage('photo.jpg')
}

function setup() {
  createCanvas(1080 * 2, 608)
  image(photo, -20, 0);
}

function draw() {
  photo.loadPixels();

  for(x = 0; x < photo.width; x++) {
    for(y = 0; y < photo.height; y++) {
      let index = x + y * photo.width;
      let pix = photo.pixels[index];

      let r = red(pix);
      let g = green(pix);
      let b = blue(pix);

      r = round((r / 255)) * 255;
      g = round((g / 255)) * 255;
      b = round((b / 255)) * 255;

      photo.pixels[index] = color(r, g, b);
    }
  }

  photo.updatePixels();
  image(photo, 1080, 0)
}