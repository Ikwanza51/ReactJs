const User = require("../models/User");
const {verifytoken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();


// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization , async (req, res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.Secret_key);
    }

    try{
        const updatedUser =  await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true});
        res.status(201).json(updatedUser);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// DELETE USER
router.delete("/:id",verifyTokenAndAuthorization , async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(201).json("User Has been Deleted");
    }catch(err) {
        res.status(500).json(err);
    }
} );

// GET USER
router.get("/find/:id",verifyTokenAndAdmin, async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password,...other} = user._doc;
        res.status(200).json(other);
    }
    catch(err){
        res.status(500).json("Error while getting Certain User  "+err);
    }
});

// GET ALL USER
router.get("/findall",verifyTokenAndAdmin, async (req,res) => {
    const query = req.query.new;
    try{
        const user = query ? await User.find().sort({_id:-1}).limit(1) : await User.find();
        // const {password,...other} = user;
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json("Error while getting Certain User  "+err);
    }
});

// GET USER STATS
router.get("/stats",verifyTokenAndAdmin, async (req,res) => {
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.getFullYear()-1));
    try{
        const data = await User.aggregate([
            {
                $match:
                {
                    createdAt: { $gte: lastyear}
                }
            },
            {
                $project:
                {
                    month: { $month: "$createdAt"},
                }
            },
            {
                $group:
                {
                    _id: "$month",
                    total: {$sum:1},
                }
            }
        ]);
        res.status(200).json(data);
        // console.log(data);
    }
    catch(err){
        res.status(500).json("Error while getting Stats");
    }
});

module.exports = router;

