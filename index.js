const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

const script = document.createElement("script");
script.src = "./script.js";
body.appendChild(script);

const header = document.createElement("header");
container.appendChild(header);

addElement('h1', "Todo List", header);

const main = document.createElement("main");
container.appendChild(main);

const sidebar = document.createElement("div");
sidebar.classList.add("side-bar");
main.appendChild(sidebar);

const content = document.createElement("div");
content.classList.add("content");
main.appendChild(content);

const sorter = document.createElement('ul');
['🏠 Home', '🌞 Today', '📅 This Week'].forEach(li => addElement('li', li, sorter));
sidebar.append(sorter)

addButton("button", "new-task", "⊕ Task", content);

const projectlist = document.createElement("ul");
projectlist.classList.add("projects");
sidebar.appendChild(projectlist);

addElement('h1', "Projects", projectlist);
addButton("button", "new-project", "⨁ New Project", projectlist);

const table = document.createElement("table");
addTRH(table);
content.appendChild(table);

projectForm(content);
taskForm(content);

const footer = document.createElement("footer");
container.appendChild(footer);

addElement('p', "© 2021 Pollaroid All rights reserved", footer);