const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAcync = require("../utils/wrapAcync");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/users.js");


//rendersignupfrom & signup bacekdn connect
router.route("/signup")
.get(userController.renderSignupForm )
.post( wrapAcync(userController.signup));


//renderloginfrom & login bacekdn connect
router.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",{
    failureFlash:true, 
    failureRedirect:"/login"}),
    userController.login
    );


//logout route
router.get("/logout", userController.logout);


module.exports=router;
