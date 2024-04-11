import express from "express"
import routes from "./src/routes/character.routes";
import dotenv from "dotenv";

// create express app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use(routes);
app.get('/', function (req, res) {
  res.send("Welcome to the Codex of Convallaria Backend!");
});

app.use((req, res, next) => {
  res.status(404).send("ERROR: That path doesn't exist!")
})

// starts service
app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});