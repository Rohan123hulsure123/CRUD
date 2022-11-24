const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require('../controllers/controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', controller.test);

//add url to add new record
router.post('/add',controller.add);

//read url 
router.post('/read',controller.read);

//update url
router.post('/update', controller.update);

//delete url
router.post('/delete', controller.delete);

module.exports = router;