let x = 0;
const dim = 100;
const frames = 30;
const speed = 3;
let canvasTime;
let startTime;
const numNotes = 3;

const bpm = 120;
const numerator = 4;

let startBtn;
let resetBtn;

let timerId;

function setup() {
  createCanvas(600, dim * numNotes);
  // noStroke();
  fill("green");
  rectMode(CENTER);
  frameRate(frames);
  canvasTime = width / (speed * frames);
  loadNotes();

  //DOM
  startBtn = createButton("Start");
  startBtn.mousePressed(start);
  resetBtn = createButton("Reset");
  resetBtn.mousePressed(reset);

  noLoop();
}

function draw() {
  background(101);

  x = x + speed;

  let xDeltaEvalBar = 25;

  for (let note of notes) {
    let length = (note.endTime - note.startTime) * speed * frames;
    let YPos = (height / numNotes) * note.pitch - dim / 2;
    let XPos =
      note.startTime * speed * frames + length / 2 - x + xDeltaEvalBar + 4;
    rect(XPos, YPos, length, dim);
  }

  // Eval Bar
  const deltaBarStroke = 4;
  strokeWeight(deltaBarStroke);
  line(xDeltaEvalBar, 0, xDeltaEvalBar, height);

  // Notes lines
  // Notes bars
  // line(x1, y1, x2, y2)
  for (let i = 0; i < numNotes; i++) {
    stroke(255, 204, 0);
    strokeWeight(1);
    line(0, dim * (i + 1), 600, dim * (i + 1));
  }

  // x = time * speed * frames

  // Bars
  const numBars = 8;
  const distanceBetweenBars = (60 / bpm) * numerator * speed * frames;
  strokeWeight(1);
  for (let i = 0; i < numBars * numerator; i++) {
    i == 0
      ? (xDeltaEvalBar =
          -1 * (xDeltaEvalBar * (numerator - 1)) + deltaBarStroke + 5)
      : null;
    let xBar = (distanceBetweenBars * (i + 1) + xDeltaEvalBar) / numerator;
    if (i % numerator == 0) {
      strokeWeight(2);
      stroke("black");
    } else {
      strokeWeight(1);
      stroke("gray");
    }
    line(xBar - x, 0, xBar - x, height);
  }
}

function start() {
  startTime = millis();
  console.log(startTime);
  timerId = setInterval(() => {
    console.log("Tick");
  }, 1000);
  loop();
}

function reset() {
  startTime = millis();
  x = 0;
  noLoop();
  clearInterval(timerId);
}
