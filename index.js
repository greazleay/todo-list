import { addH, addPara, addTRH, addButton, taskForm } from './components.js';
import { renderProjects ,renderTasks } from './script.js';

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
sidebar.classList.add('side-bar');
main.appendChild(sidebar);

addH(3, 'Home', sidebar);
addH(3, 'Today', sidebar);
addH(3, 'This Week', sidebar);

// const task = document.createElement('div');
// task.classList.add('add-task')
// sidebar.appendChild(task);

// const img = document.createElement('img');
// img.src = './images/addtask.png';
// task.appendChild(img)

// addPara('Add Task', task);

const projectlist = document.createElement('ul');
projectlist.classList.add('projects');
sidebar.appendChild(projectlist);

addH(1, 'Projects', projectlist);
addButton('button', '+ New Project', projectlist)
renderProjects(projectlist)

const content = document.createElement('div');
content.classList.add('content')
main.appendChild(content);

const footer = document.createElement('footer');
container.appendChild(footer);

addPara('© 2021 Pollaroid All rights reserved', footer)

const table = document.createElement('table');
addTRH(table)
renderTasks(table)
content.appendChild(table)

taskForm(content)
