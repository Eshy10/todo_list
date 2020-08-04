import tasks from './notes';

const createProject = () => {
  const taskForm = document.getElementById('newTask');
  const projectForm = document.getElementById('newProj');
  taskForm.style.display = 'none';
  projectForm.style.display = 'block';
};

const createTask = () => {
  const taskForm = document.getElementById('newTask');
  const projectForm = document.getElementById('newProj');
  projectForm.style.display = 'none';
  taskForm.style.display = 'block';
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
    if (title != '') {
      tasks.project.push(title);
    }
  });
};

export default {
  createProject, createTask, hideForms, projectForm,
};