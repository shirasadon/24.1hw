 const Client = require("../models/client");


const getAllClient=()=>{
    return new Promise((resolve, reject)=>{
       Client.find().then(clients=>resolve(clients)).catch(err=>reject(err))

    })
}






// exports.getAllClient=getAllClient