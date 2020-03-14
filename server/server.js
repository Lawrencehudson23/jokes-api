const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true}));

const jokesRoutes = require("./routes/jokes.routes");

//important
jokesRoutes(app);


app.listen(5000, () => console.log("The server is all fired up on port 5000"));


