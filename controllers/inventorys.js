const Inventory = require('../models/inventory');


function newInventory(req, res){
    res.render('inventorys/new');


}

function create(req, res){
    Inventory.create(req.body, function(err, inventory){
        console.log(inventory);
        res.redirect('/');
    });
}


function index(req, res){
    Inventory.find({}, function(err, inventorys){
        res.render('inventorys/index',{inventorys});
    });
};



// DELETE
  function deleteInventory(req, res){    
    Inventory.findByIdAndDelete(req.params.id, (err, data) => {
       res.redirect("/inventorys");
     });
    }


    function edit(req, res) {
        Inventory.findById(req.params.id, (err, inventory) => {
          res.render('inventorys/edit', { inventory });
      })
  }
  function update(req, res){
    Inventory.update(req.body, function(err, inventory){
       console.log(inventory);
       res.redirect('/');
   });
}
 
    module.exports = {
        new: newInventory,
        create,
        index, 
        delete: deleteInventory,
        edit,
        update
}