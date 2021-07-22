class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.desccription = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function getProjects() {
    if (localStorage.length === 0) return [];
    return JSON.parse(localStorage.getItem('projects')).map(project => {
        return new Project()
    });
}

function setProjects() {
    localStorage.setItem('projects', JSON.stringify(projects))
}

