// Import contact model
Contact = require('./contactModel');

// Handle index actions
exports.index = (function(req, res) {
    Contact.get(function(err, contacts){
        if (err){
            res.json({
                status: "error",
                message: "err"
            });
        }
        res.json({
            status: "success",
            message: "contacts retrieved successfully",
            data: contacts
        });
    });
});

// Handle create contact actions
exports.new = function(req, res) {
    var contact = new Contact();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.gender = req.body.gender;
    // save the contact and check for errors
    contact.save(function(err){
          res.json({
            message: 'New contact created!',
            data: contact
            });      
    });
};

// Handle view contact info
exports.view = function(err, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
            res.json({
                message: 'Contact details loading..',
            data: contact
            }); 
    });
};

// Handle update contact info
exports.update = function (req, res) {

    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);

            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
            contact.gender = req.body.gender;

        // save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

//handle patch contact info
// exports.patch = function (req, res){
//  Contact.findById(req.params.contact_id, function (err, contact){
//      if (req.body._id){
//          delete req.body._id;
//      }
//      for(let b in req.body){
//          contact[b] = req.body[b];
//  }
//     contact.save();
//     res.json(contact);
//    });
// };

// Handle delete contact
exports.delete = function(req, res){
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact){
        if (err)
        res.send(err);

        res.json({
            status: "success",
          message: 'Contact deleted'
        });
    });
};
