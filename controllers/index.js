function index(req, res) {
    res. render('index');
};
function deleteInventory(id) {
    nootropics.splice(id, 1);
   };


module.exports = {
    index,
    deleteInventory
    
};