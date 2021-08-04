const express = require("express");
const app = express();
const PORT = 4000;
const cors = require('cors');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));


app.get('/', (req, res) => {

  res.send("request at port 4000 received");
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});