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

export function addForm(parent) {
    const form = document.createElement('form');
    addInput('Title:', 'text', form);
    addInput('Due Date:', 'date', form)
    addSelect('Priority:', form)
    addTextArea('Description:', form)
    parent.appendChild(form)
}