let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status:"api is working fine!!",
        message:"welcome to RESTHUB ",
    });
});

// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
module.exports = router;