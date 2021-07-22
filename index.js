import { addH, addPara, addForm } from './components.js';

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const header = document.createElement('header');
container.appendChild(header);

addH(1, 'Todo List', header);

const main = document.createElement('main');
container.appendChild(main);

const sidebar = document.createElement('div');
sidebar.classList.add('side-bar')
main.appendChild(sidebar);

addH(3, 'Home', sidebar);
addH(3, 'Today', sidebar);
addH(3, 'This Week', sidebar);

const task = document.createElement('div');
task.classList.add('add-task')
sidebar.appendChild(task);

const img = document.createElement('img');
img.src = './images/addtask.png';
task.appendChild(img)

addPara('Add Task', task);

const projects = document.createElement('div');
sidebar.classList.add('projects')
sidebar.appendChild(projects);

addH(1, 'Projects', projects);

const content = document.createElement('div');
content.classList.add('content')
main.appendChild(content);

const footer = document.createElement('footer');
container.appendChild(footer);

addPara('© 2021 Pollaroid All rights reserved', footer)

addForm(content)