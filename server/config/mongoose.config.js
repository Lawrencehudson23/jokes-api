const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jokes",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
  })
  .then(() => console.log("💻 Mongodb Connected"))
  .catch(err => console.error(err));
