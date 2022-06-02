



const notesSrc = [
  [1, 0, 2],
  [2, 2, 4],
  [3, 4, 8],
  [1, 8, 12],
  [2, 12, 14],
  [3, 14, 18],
  [1, 18, 24],
  [2, 24, 26],
  [3, 26, 30],
];

let notes = [];

function loadNotes() {
  for (let i = 0; i < notesSrc.length; i++) {
    let note = {
      pitch: notesSrc[i][0],
      startTime: notesSrc[i][1],
      endTime: notesSrc[i][2],
    };
    notes.push(note);
  }
}
