import express from "express"
import routes from "./src/routes/routes";
import dotenv from "dotenv";

// create express app
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use(routes);
app.get('/', function (_, res) {
  res.status(200).send("<h1> Welcome to the Codex of Convallaria Backend! </h1>");
});

app.use((_, res) => {
  res.status(404).send("ERROR: That path doesn't exist!")
})

// starts service
app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});