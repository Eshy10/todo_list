const notes = [];
const project = [];

function Note(title, notes, date, priority, category) {
  this.title = title;
  this.notes = notes;
  this.date = date;
  this.priority = priority;
  this.category = category;
}

export default { notes, Note, project };