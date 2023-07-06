const heading = document.getElementById("adviceid")
const quotes = document.getElementById("advicetext")

function callapi(){

}






// // API CALLING
//         // GET request
//         // PROMISE either returns data or error
//         // Long method for API calling
//         const handleGet= () => {
//             fetch(/*'API ENDPOINT'*/)
//                 .then(function(res){
//                     return res.JSON()
//                 })  //Checks whether theres a data to return
//                 .then(function(data){
//                     console.log(data)
//                     // what to do
//                 })  //Gives data
//                 .catch(function(err){
//                     console.log(err)
//                 })
//         }


//         // Short method of API calling
//         const handleGett = () => {
//             fetch('url')
//                 .then(res = res.JSON())
//                 .then(data = console.log(data))
//                 .catch(err = console.log(err))
//         }

//         // POST request
//         fetch(url, {
//             method: POST,
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(data) 
//         }).then
    

// // ASYNC AWAIT
// async function getUsers() {
//     const response = await fetch(url) //edit this when posting
//     const data = await response.json()
//     return data;
// }
// getUsers().then(users=> console.log(users));

// // 2nd Method
// const fetchData = async()=> {
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
// }


// // Advice Generator FEM