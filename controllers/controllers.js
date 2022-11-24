const {Employee} = require('../models/model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.add = function (req, res) {
    const newEmployee = new Employee({
        UID : req.body.UID, 
        firstName : req.body.firstName, 
        lastName : req.body.lastName, 
        number : req.body.number
    })

    newEmployee.save(err => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        res.json({message: "Nem employee added."})
    })
    
};

exports.read = function (req, res) {
    Employee.findOne(
        { 
            UID: req.body.UID 
        
        }, 
        (err, results) => {
            if (!err) {
                res.json(results); 
            }
        
        }
    )  
};

exports.update = function (req, res) {
    
    Employee.updateOne(
        { 
            UID: req.body.UID
        },
        {
            UID: req.body.UID,
            firstName : req.body.firstName, 
            lastName : req.body.lastName, 
            number : req.body.number
        },
        (err, result) => {
            if (result.modifiedCount) {
                res.status(200);
                res.json({message: "Record updated."}); 
            }
        }
    )    
     
};

exports.delete = function (req, res) {
    
    Employee.deleteOne(
        { 
            UID: req.body.UID 
        
        }, 
        (err, results) => {
            if (!err) {
                res.json({message: "Record Deleted."});
            }
        
        }
    )  
     
};