const url = 'https://jsonplaceholder.typicode.com/users/200';




createTimer(3000).then((e) => {
    console.log('alert', e)
    return fetch(url);
})
.then((resp) => {
    return resp.text();
})
.then(text => {
    return JSON.parse(text);
})
.then((data) => {
    console.log(data)
})
.catch(()=>{
    console.log('error')
})





function createTimer(miliseconds){
    return new Promise((resolve, reject)=> {
        if (miliseconds >= 5000){
            reject();
        } else {
            setTimeout(() => {
                resolve('ladkshfgalkshdfgkjhasdgf');
            }, miliseconds);
        }
    })
}




// const prom = fetch(url)
//     .then( resp => {
//         // console.log(resp);

//         // return Promise.reject('Error');
//     }, (resp)=>{
//         console.log('error', resp)
//     })
//     .finally(()=>{
//         console.log('finaly')
//     })
    
// console.log(prom);




// request('GET', url, (data) => {
//     console.log(data);
        
//     xhr.onreadystatechange = function(){
//         console.log('ready change', xhr);
//         if (xhr.readyState === 4){
//             cb(JSON.parse(xhr.responseText));
//         }
//     }
//     request('GET', url + '/' + data[0].id, (user)=>{
            
//         xhr.onreadystatechange = function(){
//             console.log('ready change', xhr);
//             if (xhr.readyState === 4){
//                 cb(JSON.parse(xhr.responseText));
//             }
//         }
//         console.log(user);

//         request('GET', url + '/' + data[0].id, (user)=>{
            
//             xhr.onreadystatechange = function(){
//                 console.log('ready change', xhr);
//                 if (xhr.readyState === 4){
//                     cb(JSON.parse(xhr.responseText));
//                 }
//             }
//             console.log(user);
//         });
//     });
// })



// xhr.onload = function (){
//     console.log(JSON.parse(xhr.responseText));
// }
// console.log(xhr);