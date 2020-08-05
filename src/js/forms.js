import tasks from './notes';
import show from './render'; // eslint-disable-line
import content from './content';

const createProject = () => {
  const taskForm = document.getElementById('newTask');
  const projectForm = document.getElementById('newProj');
  taskForm.style.display = 'none';
  projectForm.style.display = 'block';
  document.getElementById('card-container').style.opacity = '0';
};

const createTask = () => {
  const taskForm = document.getElementById('newTask');
  const projectForm = document.getElementById('newProj');
  projectForm.style.display = 'none';
  taskForm.style.display = 'block';
  document.getElementById('card-container').style.opacity = '0';
  content.updateDrop();
};

const hideForms = () => {
  const taskForm = document.getElementById('newTask');
  const projectForm = document.getElementById('newProj');
  projectForm.style.display = 'none';
  taskForm.style.display = 'none';
};

const projectForm = () => {
  const form = document.getElementById('newProj').children[0];
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('projectTitle').value;
    if (title !== '') {
      tasks.project.push(title);
      form.reset();
    }
    show.showProject();
  });
};

const tasksForm = () => {
  const taskForm = document.getElementById('newTask').children[0];
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById('textTask').value;
    const taskDate = document.getElementById('dateTask').value;
    const priority = document.getElementById('priority');
    const selectedPriority = priority.options[priority.selectedIndex].text;
    const project = document.getElementById('dropdown-category');
    const selectedPrject = project.options[project.selectedIndex].text;
    const note = document.getElementById('notes').value;
    if (taskTitle !== '' || taskDate !== '' || selectedPriority !== '' || note !== '' || selectedPrject !== '') {
      const result = new tasks.Note(taskTitle, note, taskDate, selectedPriority, selectedPrject);
      tasks.notes.push(result);
      taskForm.reset();
    }
    show.showAll();
  });
};

export default {
  createProject, createTask, hideForms, projectForm, tasksForm,
};