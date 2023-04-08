const express=require('express');
const userController = require("../controllers/users");
const router=express.Router();

router.post('/createaccount',userController.createaccount);
router.post('/Nutrilogin',userController.Nutrilogin);
router.post('/registration',userController.registration);
router.post('/forgot',userController.forgot);
router.post('/confirm',userController.confirm);
module.exports = router;


