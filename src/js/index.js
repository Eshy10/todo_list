import 'bootstrap';
import '../styles/style.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import navbar from './navbar';
import content from './content';
import forms from './forms';
import render from './render';

library.add(fas, far, fab);

dom.i2svg();

const container = document.querySelector('.container-fluid');
container.appendChild(content.content);
content.updateDrop();
document.body.insertBefore(navbar, container);

window.createTask = () => {
  forms.createTask();
};

window.createProject = () => {
  forms.createProject();
};

window.hideForms = () => {
  forms.hideForms();
};

window.showAll = () => {
  render.showAll();
};

window.showProject = () => {
  render.showProject();
};

window.showProjCard = (num) => {
  render.showProjCard(num);
};

window.removeNote = (num) => {
  render.removeNote(num);
};


forms.projectForm();
forms.tasksForm();
forms.clearElement();


render.showAll();
render.showProject();
