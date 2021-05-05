const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:abc12345@cluster0.s9fdn.mongodb.net/inventory?retryWrites=true&w=majority',
  
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});