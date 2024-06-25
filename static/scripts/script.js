const list = document.getElementById("list");

fetch("http://localhost:8000/documents", {
    method: "GET",
}).then(res => {return res.json()}).then(data => {
    console.log(data.Data);
    if(data.ResponseCode == 0){
        for(let i = 0;i < data.Data.Documents.length;i++){
            const node = document.createElement("li");
            const par = document.createElement("a");
            par.setAttribute("href", data.Data.Documents[i].URL);
            par.setAttribute("target", "_blank");
            const text = document.createTextNode(data.Data.Documents[i].Filename);
            
            par.appendChild(text);
            node.appendChild(par);
            list.appendChild(node);
        }
    }
});

