document.getElementById("loginForm").addEventListener("submit", (Event) => {
    Event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginButton = document.querySelector("#login-button")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginButton.onclick = () => {
        console.log("logged in")
        if(username.value === storedUsername && password.value === storedPassword) {
            alert(`login successfull, welcome ${username.value}!`)
            window.location.href = "index.html"
        }
        else { 
            alert("try again!")
        }
    }
})