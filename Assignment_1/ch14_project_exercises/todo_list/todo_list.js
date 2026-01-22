"use strict";

const url_users = "https://jsonplaceholder.typicode.com/users";
const url_todo = "https://jsonplaceholder.typicode.com/todos/?userId=";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", async () => {
    // load <select> element
    const responseUser = await fetch(url_users);
    const userData = await responseUser.json();
    const userSelect = getElement("#users");

    for (let user of userData) {
        let userOption = document.createElement("option");
        userOption.value = user.id;
        userOption.textContent = user.name;
        userSelect.appendChild(userOption)
    }


    // display to-do items for first user in <select> element

    let responseTodo = await fetch(url_todo + userSelect.value);
    const todoData = await responseTodo.json();
    const todoList = getElement("#list tbody");

    todoList.innerHTML = "";
    for (let todo of todoData) {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(todo.title))
        tr.appendChild(td1)

        const td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(todo.completed))
        tr.appendChild(td2)

        todoList.appendChild(tr);
    }
    

    // event handler for <select> change event

    userSelect.addEventListener("change", async () => {
        let responseTodo = await fetch(url_todo + userSelect.value);
        const todoData = await responseTodo.json();
        const todoList = getElement("#list tbody");

        todoList.innerHTML = "";
        for (let todo of todoData) {
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.appendChild(document.createTextNode(todo.title))
            tr.appendChild(td1)

            const td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(todo.completed))
            tr.appendChild(td2)

            todoList.appendChild(tr);
    }
    })
    
 });