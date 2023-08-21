const cors = require('cors');
const express = require("express");
const data = require("./utils/dummyData");

const app = express();

const abc = {
    origin: "*"
}

app.use(cors(abc))

app.get('/api/items/getItems', (req, res) => {
    console.log("req ::: ", req);
    res.status(200).json({ "data": data });
})

app.listen(5001, () => {
    console.log("Server is running");
})