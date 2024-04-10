import express from "express"
import routes from "./src/routes/routes";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(routes);

app.get('/', function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});