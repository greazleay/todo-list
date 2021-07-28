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
        this.tasks.push(new Task(title, description, duedate, priority));
        return this;
    }
}

const getProjects = () => {
    if (localStorage.length === 0) return [];
    return JSON.parse(localStorage.getItem('allProjects')).map(project => {
        return new Project(project.name, project.tasks);
    });
};

const setProjects = () => {
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
};

let allProjects = getProjects();

const getProjectNames = () => {
    const projectList = []
    allProjects.forEach((project) => {
    projectList.push(project.name);
  });
  return projectList;
}

const clearNode = (parent, tag) => {
    [...parent.childNodes].filter(e => e.nodeName === tag).forEach(child => {
        parent.removeChild(child);
    })
};

const clearByClass = (parent, cname) => {
    [...parent.childNodes].filter(e => e.className === cname).forEach(child => {
        parent.removeChild(child);
    })
};

const renderTasks = (parent) => {
    allProjects.forEach(project => {
        project.tasks.sort((a, b) =>  new Date(a.dueDate) - new Date(b.dueDate)).forEach(task => {
            addTRD(parent, [task.title, task.description, task.dueDate, task.priority, '']);
        })
    })
};

renderTasks(table);

const renderProjects = (parent) => {
    allProjects.forEach(project => {
        addElement('li', project.name, parent);
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
    document.querySelector('.form-popup').style.display = 'none';
    clearNode(projectlist, "LI");
    renderProjects(projectlist);
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
    const priority = [...priolist.querySelectorAll('option')].filter(i => i.selected)[0].textContent;
    const currentProject = [...projList.querySelectorAll('option')].filter(i => i.selected)[0].textContent;
    allProjects.filter(project => project.name === currentProject)[0].newtask(title, description, dueDate, priority);
    setProjects();
    document.querySelector('.form-popup-task').style.display = 'none';
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