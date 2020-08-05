import note from './notes'


const content = (() => {
  const rowElement = document.createElement('div');
  rowElement.classList.add('row');
  const colElement = document.createElement('div');
  colElement.classList.add('col-2');
  colElement.innerHTML = `
  <h6 class="text-secondary mb-3 interactive" onclick="showAll()"><i class="fas fa-sticky-note mt-3 text-warning font-weight-bold"></i> All Notes</h6>
  <h6 class="text-secondary mb-3 interactive" onclick="createProject()"><i class="fas fa-object-group text-warning"></i>Create Project</h6>
  <h6 class="text-secondary mb-3 interactive" onclick="createTask()"><i class="fas fa-sticky-note text-warning"></i>Create a note</h6>
  `;
  const project = document.createElement('div');
  project.id = 'projects'
  colElement.appendChild(project);
  const bigColElement = document.createElement('div');
  bigColElement.classList.add('col-10');
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.id = 'newProj';
  const projectForm = document.createElement('form');
  projectForm.innerHTML = `
  <div class="form-group">
  <label class="text-secondary" for="exampleInputEmail1">Create a Project</label>
  <input type="text" class="form-control" id="projectTitle" aria-describedby="emailHelp">
</div>
<button type="submit" class="btn btn-warning">Submit</button>
  `;
  projectDiv.appendChild(projectForm);
  const taskDiv = document.createElement('div');
  taskDiv.id = 'newTask';
  taskDiv.setAttribute('class', 'task mt-4');
  const taskForm = document.createElement('form');
  const titleForm = document.createElement('div');
  titleForm.classList.add('form-group');
  titleForm.innerHTML = `
  <label for="exampleFormControlInput1" class="text-secondary">Task title</label>
  <input type="text" class="form-control" id="textTask" placeholder="enter new task">
  `;
  const dateForm = document.createElement('div');
  dateForm.classList.add('form-group');
  dateForm.innerHTML = `
  <label for="exampleFormControlInput1" class="text-secondary">Date</label>
  <input type="date" class="form-control" id="dateTask">
  `;
  const priorityForm = document.createElement('div');
  priorityForm.classList.add('form-group');
  priorityForm.innerHTML = `
  <label for="priority" class="text-secondary">Task Priority</label>
  <select class="form-control" id="priority">
    <option>important</option>
    <option>primary</option>
    <option>secondary</option>
  </select>
  `;
  const dropdownForm = document.createElement('div');
  dropdownForm.classList.add('form-group');
  dropdownForm.innerHTML = `<label for="dropdown-category" class="text-secondary">Task Project</label>
  <select class="form-control" id="dropdown-category">
  </select>`
  
  const noteForm = document.createElement('div');
  noteForm.classList.add('form-group');
  noteForm.innerHTML = `
  <label for="notes" class="text-secondary">Notes</label>
  <textarea class="form-control" id="notes" rows="3"></textarea>
  `;
  const sumbitButton = document.createElement('button');
  sumbitButton.setAttribute('class', 'btn btn-warning');
  sumbitButton.setAttribute('type', 'submit');
  sumbitButton.textContent = 'Submit';
  taskForm.appendChild(titleForm);
  taskForm.appendChild(dateForm);
  taskForm.appendChild(priorityForm);
  taskForm.appendChild(dropdownForm);
  taskForm.appendChild(noteForm);
  taskForm.appendChild(sumbitButton);
  taskDiv.appendChild(taskForm);
  const task = document.createElement('div');
  task.setAttribute('class', 'row row-cols-1 row-cols-md-2 mt-4');
  const colTask = document.createElement('div');
  colTask.setAttribute('class', 'col mb-4');
  const cardTask = document.createElement('div');
  cardTask.setAttribute('id', 'card-container');
  colTask.appendChild(cardTask);
  task.appendChild(colTask);
  bigColElement.appendChild(projectDiv);
  bigColElement.appendChild(taskDiv);
  bigColElement.appendChild(task);
  rowElement.appendChild(colElement);
  rowElement.appendChild(bigColElement);
  return rowElement;
})();

const updateDrop = () => {
  const dropdownCat = document.getElementById('dropdown-category')
  let drop = '';
  for (let i = 0; i < note.project.length; i += 1){
    drop += `<option onclick="showProj(${i})">${note.project[i]}</option>`
  }
  dropdownCat.innerHTML = drop;
}

export default { content, updateDrop };