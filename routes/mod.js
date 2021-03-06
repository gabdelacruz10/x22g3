var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


var mod_controller = require('../controllers/modController');

router.get('/', mod_controller.moderator_students_list);

// TODO: POST request to add a new student, will modify to redirect
router.post('/', urlencodedParser, mod_controller.moderator_create_student_post);

router.get('/settings', mod_controller.moderator_settings_detail);


module.exports = router;