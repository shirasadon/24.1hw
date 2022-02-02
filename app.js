const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const mongoose = require("mongoose");
const client = require("./models/client");
const { Schema } = mongoose;
const order = require("./models/order");
const store = require("./models/store");
const ClientControler = require("./controlers/clientControler");
const storeControler = require("./controlers/storeControler");

var mongoDB = "mongodb://127.0.0.1/ten-wolt";
mongoose
  .connect(mongoDB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((e) => console.error(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


// app.post("/client.html", (req, res) => {
//   res.send("client!");
//   let name = req.body.name,
//     adress = req.body.adress,
//     isvip = req.body.isvip,
//     phone = req.body.phone;
//   console.log(name, adress, isvip, phone);
//   let newclient = new Client({
//     name,
//     adress,
//     isvip,
//     phone,
//   });
//   newclient.save((err, data) => {
//     console.log(err);
//     console.log(data);
//   });

  // app.post("/store", (req, res) => {
  //   res.send("store");
  // });

  app.get("/client.html", async (req, res) => {
    let client = await client.find();
    res.send(client);
  });

  // app.get("/allorder", (req, res) => {
  //   res.send("all order");
  // });

  //update

  app.get("/uporder/:id", (req, res) => {
    // res.send("order")
    order.findOneAndUpdate(req.params.id, {}, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.send(data);
      }
    });
  });
  // app.put("/client.html/:id", function (req, res) {
  //   const data = req.body;
  //   Client.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { $set: data },
  //     function (err, result) {
  //       if (err) {
  //         console.log(err);
  //       }
  //       res.send("updated successfully");
  //     }
  //   );
  // });

  // app.get("/upclient/:id", (req, res) => {
  //   // res.send("client!");
  //   client.findOneAndUpdate(req.params.id, {}, (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       res.send(data);
  //     }
  //   });
  // });

//   app.get("/upstore/:id", (req, res) => {
//     // res.send("store");
//     store.findOneAndUpdate(req.params.id, {}, (error, data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//       }
//     });
//   });
// });

// order request
// app.post("/order.html", (req, res) => {
//   res.send("order!");
//   let neworder = new order({
//  client: req.body.client,
//   store: req.body.store
//   })
  
//   neworder.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })

// app.get("/getorders", async (req, res) => {
//   let theorder = await order.find();
//   res.send(theorder);
//  });

// })
// store request

// app.post("/store.html", (req, res) => {
//   res.send("the stor!");
//   let name = req.body.name,
//     adress = req.body.adress,
//     phone = req.body.phone
//   console.log(name, adress, phone);
//   let newstore = new store({
//     name,
//     adress,
//     phone
//   });
//   newstore.save((err, data) => {
//     console.log(err);
//     console.log(data);
//   });


// app.get("/getstors", async (req, res) => {
//   let thestore = await store.find();
//   res.send(thestore);
// });
// })


app.get("/client.html", (req, res) => {
 let theid=client.findById(req.body.id)
 
  console.log(theid);
  // res.send(theclient);
})







app.post("/store.html", (req, res) => {
  res.send("the stor!");
 storeControler.addStore.then(stores)
  newstore.save((err, data) => {
    console.log(err);
    console.log(data);
  });
})