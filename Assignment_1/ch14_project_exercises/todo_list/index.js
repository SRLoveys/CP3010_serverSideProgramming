const url_users = "https://jsonplaceholder.typicode.com/users";
const url_todo = "https://jsonplaceholder.typicode.com/todos/?userId=";

async function getUsers() {
    const response = await fetch(url_users);
    return await response.json()
}