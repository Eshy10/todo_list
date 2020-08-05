import note from './notes';
import form from './forms'; // eslint-disable-line

const show = (num) => {
  document.getElementById('card-container').style.opacity = '1';
  const container = document.getElementById('card-container');
  const taskNote = note.notes[num];
  const cardTask = document.createElement('div');
  cardTask.setAttribute('class', 'card');
  cardTask.setAttribute('style', 'width: 18rem;');
  cardTask.innerHTML = `
  <div class="card-body">
  <h5 class="card-title">${taskNote.title}</h5>
  <p class="card-text">${taskNote.notes}</p>
  <a href="#" class="card-link">${taskNote.date}</a>
  <a href="#" class="card-link">${taskNote.priority}</a>
  <a href="#" class="card-link">${taskNote.category}</a>
    </div>`;
  container.appendChild(cardTask);
};

const showAll = () => {
  document.getElementById('card-container').innerHTML = '';
  for (let i = 0; i < note.notes.length; i += 1) {
    show(i);
  }
  form.hideForms();
};

const showProjCard = (num) => {
   document.getElementById('card-container').innerHTML = '';
  for (let i = 0; i < note.notes.length; i += 1) {
      if (note.notes[i].category === note.project[num]){
        show(i);
      }
  }
  form.hideForms();
}

const showProject = () => {
  const projectContainer = document.querySelector('#projects');
  projectContainer.innerHTML = '';
  for (let i = 0; i < note.project.length; i += 1) {
    projectContainer.innerHTML += `<h6  onclick="showProjCard(${i})" class="text-secondary mb-3 interactive"><i class="fas fa-users-cog text-warning"></i>${note.project[i]}</h6>`;
  }
  form.hideForms();
};

export default { show, showAll, showProject, showProjCard };