class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.desccription = description;
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

(function renderTasks(parent) {
    allProjects.forEach(project => {
        project.tasks.sort((a, b) =>  new Date(a.dueDate) - new Date(b.dueDate)).forEach(task => {
            addTRD(parent, task.title, task.description, task.dueDate, task.priority)
        })
    })
})(table);

(function renderProjects(parent) {
    allProjects.forEach(project => {
        addli(parent, project.name);
    })
})(projectlist);

document.querySelector('.new-project').addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'block';
});

document.querySelector('.pform').addEventListener('submit', (e) => {
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
    const tform = document.querySelector('.tform');
    addSelect('Project', getProjectNames(), tform, 'label-select');
});

window.onclick = function (e) {
    const tform = document.querySelector('.tform');
    switch (true) {
      case e.target.className === "form-popup":
        document.querySelector(".form-popup").style.display = "none";
        break;
      case e.target.className === "form-popup form-popup-task":
        document.querySelector(".form-popup-task").style.display = "none";
        clearByClass(tform, 'label-select');
        break;
    }
  };
 



