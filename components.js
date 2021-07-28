function addElement(type, text, parent) {
  const element = document.createElement(type);
  element.textContent = text;
  parent.appendChild(element);
}

function addInput(name, type, parent, cname) {
  const label = document.createElement("label");
  label.textContent = name;
  const input = document.createElement("input");
  input.type = type;
  input.className = cname;
  label.appendChild(input);
  parent.appendChild(label);
}

function addButton(btype, bclass, btext, parent) {
  const button = document.createElement("button");
  button.type = btype;
  button.className = bclass;
  button.textContent = btext;
  parent.appendChild(button);
}

function addSelect(name, options, parent, lclass, sclass) {
  const label = document.createElement("label");
  label.textContent = name;
  label.className = lclass;
  const select = document.createElement("select");
  select.className = sclass;
  options.forEach((option) => addElement('option', option, select));
  label.appendChild(select);
  parent.appendChild(label);
}

function addTextArea(name, parent) {
  const label = document.createElement("label");
  label.textContent = name;
  const textarea = document.createElement("textarea");
  textarea.rows = 5;
  textarea.cols = 30;
  label.appendChild(textarea);
  parent.appendChild(label);
}

function addTRH(parent) {
  const items = ['Title', 'Description', 'Due Date', 'Priority', 'Modify'];
  const tr = document.createElement("tr");
  items.forEach(item => {addElement('th', item, tr)})
  parent.appendChild(tr);
}

function addTRD(parent, arr) {
  const tr = document.createElement("tr");
  arr.forEach(item => addElement('td', item, tr))
  addButton("button", "", "✍", tr.lastChild);
  addButton("button", "", "♺", tr.lastChild);
  parent.appendChild(tr);
}

function projectForm(parent) {
  const div = document.createElement("div");
  div.classList.add("form-popup");
  const form = document.createElement("form");
  form.classList.add("project-form");
  addElement('h2', "New Project", form);
  addInput("Name", "text", form, "submit");
  addButton("button", "", "Cancel", form);
  addButton("submit", "", "Add Project", form);
  div.appendChild(form);
  parent.appendChild(div);
}

function taskForm(parent) {
  const div = document.createElement("div");
  div.classList.add("form-popup");
  div.classList.add("form-popup-task");
  const form = document.createElement("form");
  form.classList.add("task-form");
  addElement('h2', "New Task", form);
  addInput("Title:", "text", form);
  addInput("Due Date:", "date", form);
  addSelect("Priority:", ["Low", "Medium", "High"], form, "", "priority");
  addTextArea("Description:", form);
  div.appendChild(form);
  parent.appendChild(div);
}