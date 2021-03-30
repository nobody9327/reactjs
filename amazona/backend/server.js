import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id == req.params.id);
    if(product){
        res.send(product);
    }else{
        res.send({message: 'Product not found'});
    }
})
app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});
