const prom = fetch('https://jsonplaceholder.typicode.com/users')

prom.then((resp) => {
    resp.json().then((data) => {
        console.log(data);
    })

})