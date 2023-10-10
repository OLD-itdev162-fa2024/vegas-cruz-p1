// const express = require("express");
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require("cors");

// const port = 5000;

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors());
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

// app.listen(port, ()=> console.log('Server running on port 5000'));

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});