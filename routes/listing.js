const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn} = require("../middleware.js")


const validateListing = (req, res, next) =>{
     let {error}  = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400, errMsg)
        }else{
        next();
        }
}


//index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);


//new route (should be place above the show route here as the server treates the 2nd argument after listing as :id)
router.get("/new", isLoggedIn, (req, res) =>{
    res.render("listings/new.ejs");
})

//create route
router.post("/",
    validateListing,
    isLoggedIn,
    wrapAsync(async(req,res) =>{
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success","New listing created!");
        res.redirect("/listings");
})
);


//show route
router.get("/:id",
    isLoggedIn,
     wrapAsync(async(req, res) =>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error", "Listin you requested for does not exists!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs" , {listing});

}));


//edit route
router.get("/:id/edit",isLoggedIn, wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    req.flash("success", "Edit successful!")
    res.render("listings/edit.ejs" , {listing});
}))

//update route
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , { ...req.body.listing });
    req.flash("success","update was successful!")
    res.redirect(`/listings/${id}`);
}))

//delete route
router.delete("/:id",isLoggedIn, wrapAsync(async(req, res)=>{
    let {id} = req.params;
    let DElisting  = await Listing.findByIdAndDelete(id);
    req.flash("success","Deleted successfully!")
    console.log(DElisting);
    res.redirect("/listings");
}))


module.exports = router;