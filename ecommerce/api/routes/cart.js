const Cart = require("../models/Cart");
const {verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization} = require("./verifyToken");
const router = require("express").Router();

// Create Cart
router.post("/create", verifyToken ,async (req, res) => {
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json("Not able to Create Cart");
    }
});

// UPDATE Cart
router.put("/:id", verifyTokenAndAuthorization , async (req, res) => {
    try{
        const updatedCart =  await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true});
        res.status(201).json(updatedCart); 
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// DELETE Cart
router.delete("/:id",verifyTokenAndAuthorization , async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(201).json("Cart Has been Deleted");
    }catch(err) {
        res.status(500).json(err);
    }
} );

// GET USER Cart
router.get("/find/:userid",verifyTokenAndAuthorization, async (req,res) => {
    try{
        const cart = await Cart.findOne({ userId: req.params.userid });
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json("Error while getting Certain Cart  ");
    }
});

// GET ALL Cart
router.get("/findall",verifyTokenAndAdmin, async (req,res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }
    catch(err){
        res.status(500).json("Error while getting All Carts");
    }
});

module.exports = router;

