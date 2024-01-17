const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7fhovkc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffeeShop = client.db("coffeeShop").collection("products");

    app.get("/addCoffees", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeShop.find().toArray();
      res.send(result);
    });
    app.get("/addCoffees/:id", async (req, res) => {
      const id = req.params.id;
      
      const updateId = { _id: new ObjectId(id) };

      const result = await coffeeShop.findOne(updateId);
      res.send(result);
    });
    app.post("/addCoffees", async (req, res) => {
      const product = req.body;
      console.log("new product", product);
      const query = await coffeeShop.insertOne(product);
      res.send(query);
    });

    app.put("/addCoffees/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id, "has been updated");
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          title: updatedCoffee.title,
          photo: updatedCoffee.photo,
          quantity: updatedCoffee.quantity,
          des: updatedCoffee.des,
          Taste: updatedCoffee.Taste,
          Supplier: updatedCoffee.Supplier,
          category: updatedCoffee.category,
        },
      };
      const result = await coffeeShop.updateOne(filter, coffee, options);
      res.send(result);
    });

    app.delete("/addCoffees/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id, "has been deleted");
      const query = { _id: new ObjectId(id) };
      const result = await coffeeShop.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee make is getting ready.........");
});

app.listen(port, () => {
  console.log(`port is running on : ${port}`);
});
