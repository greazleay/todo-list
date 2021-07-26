// import { addH, addPara, addTRH, addButton, projectForm, taskForm } from './components.js';
// import { renderProjects ,renderTasks, formPopup } from './script.js';

const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
        import('./components.js'),
        import('./script.js')
    ]).then(([
            { addH, addPara, addTRH, addButton, projectForm, taskForm },
            { renderProjects ,renderTasks, formPopup }
        ]) => {
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
            
            const content = document.createElement('div');
            content.classList.add('content')
            main.appendChild(content);
            
            addH(3, 'Home', sidebar);
            addH(3, 'Today', sidebar);
            addH(3, 'This Week', sidebar);
            
            addButton('button', 'Task', sidebar)
            
            const projectlist = document.createElement('ul');
            projectlist.classList.add('projects');
            sidebar.appendChild(projectlist);
            
            addH(1, 'Projects', projectlist);
            addButton('button', '+ New Project', projectlist, () => formPopup('.form-popup'))
            renderProjects(projectlist)
            
            const footer = document.createElement('footer');
            container.appendChild(footer);
            
            addPara('© 2021 Pollaroid All rights reserved', footer)
            
            const table = document.createElement('table');
            addTRH(table)
            renderTasks(table)
            content.appendChild(table)
            
            projectForm(content);
            // taskForm(content);
            })
    })




window.onclick = function(event) {
    if (event.target.className === 'form-popup') {
        document.querySelector('.form-popup').style.display = "none";
    }
}