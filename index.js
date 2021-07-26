const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

const script = document.createElement("script");
script.src = "./script.js";
body.appendChild(script);

const header = document.createElement("header");
container.appendChild(header);

addH(1, "Todo List", header);

const main = document.createElement("main");
container.appendChild(main);

const sidebar = document.createElement("div");
sidebar.classList.add("side-bar");
main.appendChild(sidebar);

const content = document.createElement("div");
content.classList.add("content");
main.appendChild(content);

addH(3, "Home", sidebar);
addH(3, "Today", sidebar);
addH(3, "This Week", sidebar);

addButton("button", 'new-task', "Task", sidebar);

const projectlist = document.createElement("ul");
projectlist.classList.add("projects");
sidebar.appendChild(projectlist);

addH(1, "Projects", projectlist);
addButton("button", 'new-project', "+ New Project", projectlist);

const footer = document.createElement("footer");
container.appendChild(footer);

addPara("© 2021 Pollaroid All rights reserved", footer);

const table = document.createElement("table");
addTRH(table);
content.appendChild(table);

projectForm(content);
taskForm(content);


