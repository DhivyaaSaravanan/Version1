const express=require('express');
const router=express.Router();

router.get("/",(req,res) =>{
    //  res.send("hi");
      res.render("index");
  });
  router.get("/about",(req,res) =>{
        res.render("about");
    });
    router.get("/coach",(req,res) =>{
        res.render("coach");
    });
    router.get("/community",(req,res) =>{
        res.render("community");
    });
    router.get("/admin",(req,res)=>{
       res.render("admin");
    });
    router.get("/createaccount",(req,res) =>{
      res.render("createaccount");
  });
  router.get("/gallery",(req,res) =>{
      res.render("gallery");
  });
  router.get("/NutriLogin",(req,res) =>{
      res.render("NutriLogin");
  });
  router.get("/nutritionist",(req,res) =>{
      res.render("nutritionist");
  });
  router.get("/recipes",(req,res) =>{
      res.render("recipes");
  });
  router.get("/registration",(req,res) =>{
      res.render("registration");
  });
  router.get("/salads",(req,res) =>{
      res.render("salads");
  });
  router.get("/yoga",(req,res) =>{
      res.render("yoga");
  });
  router.get("/paymentmethod",(req,res) =>{
    res.render("paymentmethod");
});
router.get("/offer",(req,res) =>{
    res.render("index");
});
router.get("/thankyou",(req,res) =>{
    res.render("thankyou");
});
router.get("/forgot",(req,res)=>{
     res.render("forgot");
});
router.get("/confirm",(req,res)=>{
    res.render("confirm");
});


  module.exports = router;
