const express = require("express");
const app = express();
const cors = require('cors');
require("./config/mongoose.config");
//need to be high enough

app.use(express.json(),express.urlencoded({extended:true}));
app.use(cors());

const jokesRoutes = require("./routes/jokes.routes");

//important
jokesRoutes(app);


app.listen(5000, () => console.log("The server is all fired up on port 5000"));


