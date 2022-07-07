const express = require("express");
//const router = express.Router();
const app = express();
const port = 3003;
const cors = require("./middleware/cors");
const Controller = require("./controllers/Controller");


app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods", 
    "GET, POST, PUT, DELETE"
    );
  next();
});

app.get("/", Controller.index);
app.get("/users", Controller.user);
app.post("/create", Controller.create);
app.delete("/supp/:id", Controller.supp);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
