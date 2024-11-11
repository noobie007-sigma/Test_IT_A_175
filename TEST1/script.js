function authenticateUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "123" && password === "123") {
        document.getElementById("login-panel").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        
    } else {
        alert("Invalid login details");
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login-panel").style.display = "block";
}

async function fetchGitHubUsers() {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    const topUsers = users.slice(0, 10);
    displayUsers(topUsers);
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = user.html_url;
        link.textContent = user.login;
        listItem.appendChild(link);
        userList.appendChild(listItem);
    });
}

function sortUsers() {

    userList.innerHTML = '';
    users.forEach(user => {
        userList.appendChild(user);
    });
}
