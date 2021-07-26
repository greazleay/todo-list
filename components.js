function addOption(text, parent) {
    const option = document.createElement('option');
    option.textContent = text;
    parent.appendChild(option)
}

function addInput(name, type, parent, cname) {
    const label = document.createElement('label');
    label.textContent = name; 
    const input = document.createElement('input');
    input.type = type;
    input.className = cname;
    label.appendChild(input)
    parent.appendChild(label);
}

function addButton(btype, bclass, btext, parent) { 
    const button = document.createElement('button');
    button.type = btype;
    button.className = bclass;
    button.textContent = btext;
    parent.appendChild(button);
}

function addSelect(name, arr, parent, elLabel) {
    const label = document.createElement('label');
    label.textContent = name;
    label.className = elLabel; 
    const select = document.createElement('select');
    arr.forEach(item => addOption(item, select));
    label.appendChild(select);
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

function addH(num, text, parent) {
    const h = document.createElement(`h${num}`);
    h.textContent = text;
    parent.appendChild(h);    
}

function addPara(text, parent) {
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);    
}

function addTRH(parent) {
    const tr = document.createElement('tr');
    addTRChild('th', 'Title', tr);
    addTRChild('th', 'Description', tr);
    addTRChild('th', 'Due Date', tr);
    addTRChild('th', 'Priority', tr);
    addTRChild('th', 'Modify', tr);
    parent.appendChild(tr);
}

function addTRD(parent, title, description, dueDate, priority) {
    const tr = document.createElement('tr');
    addTRChild('td', title, tr);
    addTRChild('td', description, tr);
    addTRChild('td', dueDate, tr);
    addTRChild('td', priority, tr);
    addButton('button', '', '♺', tr);
    addButton('button', '', '✍', tr);
    parent.appendChild(tr)
}

function projectForm(parent) {
    const div = document.createElement('div');
    div.classList.add('form-popup');
    const form = document.createElement('form');
    form.classList.add('pform');
    addH(2, 'New Project', form);
    addInput('Name', 'text', form, 'submit');
    addButton('button', '', 'Cancel', form);
    addButton('submit', '', 'Add Project', form);
    div.appendChild(form)
    parent.appendChild(div)
}

function taskForm(parent) {
    const div = document.createElement('div');
    div.classList.add('form-popup');
    div.classList.add('form-popup-task');
    const form = document.createElement('form');
    form.classList.add('tform');
    addH(2, 'New Task', form);
    addInput('Title:', 'text', form);
    addInput('Due Date:', 'date', form);
    addSelect('Priority:', ['Low', 'Medium', 'High'], form);
    addTextArea('Description:', form);
    // addSelect('Project', getProjectNames(), form)
    div.appendChild(form);
    parent.appendChild(div);
}

function addli(parent, text) {
    const li = document.createElement('li');
    li.textContent = text;
    parent.appendChild(li);
}