const Store = require("../models/store");

const addStore=()=>{
    return new Promise((resolve, reject)=>{

    let name = req.body.name,
        adress = req.body.adress,
        phone = req.body.phone
      let newstore = new Store({
        name,
        adress,
        phone
      });
})
}

 exports.addStore=addStore