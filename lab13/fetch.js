let table = document.getElementById("table_data").getElementsByTagName('tbody')[0];

function fetchApi(url) {
 fetch(url).then((res)=>{
    console.log(res);
    if(!res.ok)
    {
        throw `Error HTTP + ${res.status}`
    };

    return res.json();
 }
 ).then((data)=>{
    data.forEach(element => {
        console.log(element);
        
        let row  = table.insertRow(-1);

        row.insertCell(0).innerText = element.id
        row.insertCell(1).innerText = element.name
        row.insertCell(2).innerText = element.username

        // table.append
        // table.insertRow(0).insertCell(1).innerText = element.name

    });
 }).catch((error)=>{
    console.log(error);
    
 });
}




fetchApi("https://jsonplaceholder.typicode.com/users")