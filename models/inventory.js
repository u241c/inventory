const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: String,
	quantity: String,
});
// mongodb exported below
module.exports = mongoose.model("Inventory", InventorySchema);