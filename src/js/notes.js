const notes = JSON.parse(localStorage.getItem('notes')) || [];
const project = JSON.parse(localStorage.getItem('projects')) || [];

function Note(title, notes, date, priority, category) {
  this.title = title;
  this.notes = notes;
  this.date = date;
  this.priority = priority;
  this.category = category;
}


export default { notes, Note, project };