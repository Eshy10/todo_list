import note from './notes';

const show = (num) => {
  const container = document.getElementById('card-container');
  const note = note.notes[num];
  const cardTask = document.createElement('div');
  cardTask.setAttribute('class', 'card');
  cardTask.setAttribute('style', 'width: 18rem;');
  cardTask.innerHTML = `
  <div class="card-body">
  <h5 class="card-title">${note.title}</h5>
  <p class="card-text">${note.notes}</p>
  <a href="#" class="card-link">${note.date}</a>
  <a href="#" class="card-link">${note.priority}</a>
    </div>`;
    container.appendChild(cardTask)
};

const showAll = () => {
    document.getElementById('card-container').innerHTML = ''
    for (let i = 0; i < note.notes.length; i += 1){
        show(i)
    }
}


export default { show, showAll }