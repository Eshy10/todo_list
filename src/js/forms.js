import tasks from './notes';
import show from './render';

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
 let taskTitle = document.getElementById('textTask').value;
 let taskDate = document.getElementById('dateTask').value;
 let priority = document.getElementById('priority');
 let selectedPriority = priority.options[priority.selectedIndex].text;
 let note = document.getElementById('notes').value;
if (taskTitle !== '' || taskDate !== '' || selectedPriority !== '' || note !== '') {
  const result = new tasks.Note(taskTitle, note, taskDate, selectedPriority)
  tasks.notes.push(result);
  taskForm.reset();
}
show.showAll();
})
};

export default {
  createProject, createTask, hideForms, projectForm, tasksForm,
};