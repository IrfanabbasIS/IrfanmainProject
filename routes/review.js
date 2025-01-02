const express=require("express");
const router=express.Router({mergeParams:true });
const wrapAsync=require("../utils/wrapAcync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js"); 
const Listing=require("../models/listings.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


// Reviews
//POST Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


//delte particualr review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports=router;