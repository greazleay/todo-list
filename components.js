function addOption(text, parent) {
    const option = document.createElement('option');
    option.textContent = text;
    parent.appendChild(option)
}

function addInput(name, type, parent) {
    const label = document.createElement('label');
    label.textContent = name; 
    const input = document.createElement('input');
    input.type = type;
    label.appendChild(input)
    parent.appendChild(label);
}

export function addButton(type, text, parent) { 
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text
    parent.appendChild(button);
}

function addSelect(name, parent) {
    const label = document.createElement('label');
    label.textContent = name; 
    const select = document.createElement('select');
    addOption('Low', select);
    addOption('Medium', select);
    addOption('High', select);
    label.appendChild(select)
    parent.appendChild(label);
}

function addTextArea(name, parent) {
    const label = document.createElement('label');
    label.textContent = name; 
    const textarea = document.createElement('textarea');
    textarea.rows = 5;
    textarea.cols = 30;
    label.appendChild(textarea)
    parent.appendChild(label);
}

function addTRChild(type, text, parent) {
    const tchild = document.createElement(type);
    tchild.textContent = text;
    parent.appendChild(tchild)
}

export function addH(num, text, parent) {
    const h = document.createElement(`h${num}`);
    h.textContent = text;
    parent.appendChild(h);    
}

export function addPara(text, parent) {
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);    
}

export function addTRH(parent) {
    const tr = document.createElement('tr');
    addTRChild('th', 'Title', tr);
    addTRChild('th', 'Description', tr);
    addTRChild('th', 'Due Date', tr);
    addTRChild('th', 'Priority', tr);
    addTRChild('th', 'Modify', tr)
    parent.appendChild(tr)
}

export function addTRD(parent, title, description, dueDate, priority) {
    const tr = document.createElement('tr');
    addTRChild('td', title, tr);
    addTRChild('td', description, tr);
    addTRChild('td', dueDate, tr);
    addTRChild('td', priority, tr);
    addButton('button', '♺', tr)
    addButton('button', '✍', tr)
    parent.appendChild(tr)
}

export function projectForm(parent) {
    const div = document.createElement('div');
    div.classList.add('form-popup');
    const form = document.createElement('form');
    addH(2, 'New Project', form)
    addInput('Name', 'text', form);
    addButton('button', 'Cancel', form);
    addButton('submit', 'Add Project', form);
    div.appendChild(form)
    parent.appendChild(div)
}

export function taskForm(parent) {
    const div = document.createElement('div');
    div.classList.add('form-popup');
    div.classList.add('form-popup-task');
    const form = document.createElement('form');
    addInput('Title:', 'text', form);
    addInput('Due Date:', 'date', form);
    addSelect('Priority:', form);
    addTextArea('Description:', form);
    div.appendChild(form)
    parent.appendChild(div)
}

export function addli(parent, text) {
    const li = document.createElement('li');
    li.textContent = text;
    parent.appendChild(li);
}