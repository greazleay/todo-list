class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(name, tasks=[]) {
        this.name = name;
        this.tasks = tasks;
    }

    newtask(title, description, duedate, priority) {
        this.tasks.push(new Task(title, description, duedate, priority))
    }
}

function getProjects() {
    if (localStorage.length === 0) return [];
    return JSON.parse(localStorage.getItem('allProjects')).map(project => {
        return new Project(project.name, project.tasks)
    });
};

function setProjects() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects))
};

let allProjects = getProjects();

function getProjectNames() {
    const plist = []
    allProjects.forEach((project) => {
    plist.push(project.name);
  });
  return plist
}

function clearNode(parent, tag) {
    Array.from(parent.childNodes).filter(e => e.nodeName === tag).forEach(child => {
        parent.removeChild(child)
    })
};

function clearByClass(parent, cname) {
    Array.from(parent.childNodes).filter(e => e.className === cname).forEach(child => {
        parent.removeChild(child)
    })
};

function renderTasks(parent) {
    allProjects.forEach(project => {
        project.tasks.sort((a, b) =>  new Date(a.dueDate) - new Date(b.dueDate)).forEach(task => {
            addTRD(parent, task.title, task.description, task.dueDate, task.priority)
        })
    })
};

renderTasks(table);

function renderProjects(parent) {
    allProjects.forEach(project => {
        addli(parent, project.name);
    })
}

renderProjects(projectlist);

document.querySelector('.new-project').addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'block';
});

document.querySelector('.project-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const submit = document.querySelector('.submit').value;
    allProjects.push(new Project(submit));
    setProjects();
    document.querySelector('.form-popup').style.display = 'none'
    clearNode(projectlist, "LI");
    renderProjects(projectlist)
});

document.querySelector('.new-task').addEventListener('click', () => {
    document.querySelector('.form-popup-task').style.display = 'block';
    const tform = document.querySelector('.task-form');
    addSelect('Project', getProjectNames(), tform, 'label-select', 'plist');
    addButton('submit', 'submit-task', 'Submit', tform);
});

document.querySelector('.task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const tform = document.querySelector('.task-form');
    const priolist = tform.querySelector('.priority');
    const projList = tform.querySelector('.plist');
    const title = tform.querySelector('input[type="text"]').value;
    const dueDate = tform.querySelector('input[type="date"]').value;
    const description = tform.querySelector('textarea').value;
    const priority = Array.from(priolist.querySelectorAll('option')).filter(i => i.selected)[0].textContent;
    const currentProject = Array.from(projList.querySelectorAll('option')).filter(i => i.selected)[0].textContent;
    allProjects.filter(project => project.name === currentProject)[0].newtask(title, description, dueDate, priority);
    setProjects();
    document.querySelector('.form-popup-task').style.display = 'none'
    clearNode(table, "TR");
    addTRH(table);
    renderTasks(table);
});

window.onclick = function (e) {
  const tform = document.querySelector(".task-form");
  switch (true) {
    case e.target.className === "form-popup":
      document.querySelector(".form-popup").style.display = "none";
      break;
    case e.target.className === "form-popup form-popup-task":
      document.querySelector(".form-popup-task").style.display = "none";
      clearByClass(tform, "label-select");
      clearByClass(tform, "submit-task");
      break;
  }
};
 



