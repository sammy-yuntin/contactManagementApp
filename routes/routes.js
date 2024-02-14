const express = require("express");
const router = express.Router();
const multer = require("multer");
const { default: mongoose } = require("mongoose");
const User = mongoose.model('User')

//image upload
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./uploads");
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});

var upload = multer({
    storage:storage,  
})
 

//insert a user into database
router.post("/add",upload.single('photo'), (req,res)=>{
    // res.send('File uploaded successfully!');

    try {
        if(Object.values(req.body).includes("") || req.file == undefined) res.send('All input required');

        const user = new User({
            name:req.body.name,
            mail:req.body.mail,
            phone:req.body.phone,
            photopath:req.file.path,
        });
        user.save();
        res.redirect("/")

    } catch (error) {
        console.error(`${error} at user add!`)
    }
   
});

router.get("/users", async (req,res)=>{
    let users = await User.find();
    res.json(users)
});

router.post("/remove", (req,res)=>{
    User.deleteOne({ _id: req.body.userId })
    .then(() => {
        console.log('User deleted successfully');
    })
    .catch(err => {
        res.json({status:false})
        console.error('Error deleting user:', err);
    });
    
    res.json({status:true})
});










router.get("/add",(req,res)=>{
    res.render("add", {title:"ADD_PAGE"})
});
router.get("/",(req,res)=>{
    res.render("index", {title:"Home_PAGE"})
});


module.exports=router;