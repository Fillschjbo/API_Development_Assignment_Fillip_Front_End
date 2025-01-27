async function login() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const res = await fetch("https://api-development-assignment-fillip.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });

    const data = await res.json();

    if (data.ok) {
        localStorage.setItem('userId', data.id)
        localStorage.setItem('username', data.username)
        localStorage.setItem("token", data.accessToken);
        window.location.href = "../index.html"
    }else {
        console.error("Invalid username or password, please try again")
    }

}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    login();
});