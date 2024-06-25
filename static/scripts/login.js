const login = () =>  {
    const password = document.getElementById("password").value;

    fetch("http://localhost:8000/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password
        })
    }).then(res => {return res.json()}).then(data => {
        console.log(data);
        if(data.ResponseCode == 0){
            sessionStorage.setItem("token", data.Data.Token);
            window.location.href = "/";
        }
    });
}