import { addTRD } from "./components.js";

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

let allProjects = [
    {
        name: 'House Chores',
        tasks: [
            {
                title: 'Sweep',
                description: 'sweep the whole floor',
                dueDate: '07/31/2021',
                priority: 'High'
            },
        
            {
                title: 'Eat',
                description: 'eat breakfast',
                dueDate: '07/28/2021',
                priority: 'Low'
            }
        ]
    }
]

function getProjects() {
    if (localStorage.length === 0) return [];
    return JSON.parse(localStorage.getItem('allProjects')).map(project => {
        return new Project(project.name, project.tasks)
    });
}

function setProjects() {
    localStorage.setItem('allProjects', JSON.stringify(allProjects))
}

export function renderProjects(parent) {
    allProjects.forEach(project => {
        project.tasks.sort((a, b) =>  new Date(a.dueDate) - new Date(b.dueDate)).forEach(task => {
            addTRD(parent, task.title, task.description, task.dueDate, task.priority)
        })
    })
}

