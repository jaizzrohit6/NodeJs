
// const fetchData(){
//     return new Promise((resolve,rejecrt)=>{
//         setTimeout(()=>{
//             let success = true
//             if(success){
//                 console.log("resolve")
//                 resolve()
//             }else{
//                 console.log("reject")
//                 rejecrt()
//             }
//         },2000)
//     })
// }

// fetchData.then().catch()


var a = 30
let b = 20 

{
    var a = 20
    let b = 30
}
console.log(a,b)
console.log(a==b)