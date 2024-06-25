const upload = () =>  {
    const token = sessionStorage.getItem("token");

    const type = document.getElementById("type").value;
    const filename = document.getElementById("filename").value;
    const file = document.getElementById("file");

    fetch("http://localhost:8000/document", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "token": token,
            "type": type,
            "filename": filename
        })
    }).then(res => {return res.json()}).then(data => {
        console.log(data);
        if(data.ResponseCode == 0){
            const formData  = new FormData();
        
            formData.append("token", token);
            formData.append("document_id", data.Data.DocumentID);
            formData.append("file", file.files[0]);

            fetch("http://localhost:8000/file", {
                method: "POST",
                body: formData
            }).then(res => {return res.json()}).then(data => {
                console.log(data);
                if(data.ResponseCode == 0){
                    alert("file uploaded!");
                    window.location.href = "/";
                }
            });
        }
    });
}