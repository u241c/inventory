const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  name: String,
	category: String,
});
// mongodb exported below
module.exports = mongoose.model("Inventory", InventorySchema);