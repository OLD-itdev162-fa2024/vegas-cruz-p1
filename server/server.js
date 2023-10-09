const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

const port = 5000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, ()=> console.log('Server running on port 5000'));