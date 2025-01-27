document.getElementById('register').addEventListener("submit", async (e)=>{
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const body = {
        username: username,
        email : email,
        password : password
    }
    console.log(body)

    const response = await fetch("https://api-development-assignment-fillip.onrender.com/user", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    window.location.href = "../login/index.html"
    console.log(data)
})