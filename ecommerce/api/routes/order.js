const Order = require("../models/Order");
const {verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization} = require("./verifyToken");
const router = require("express").Router();

// Create ORDER
router.post("/create", verifyToken ,async (req, res) => {
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json("Not able to Create Cart");
    }
});

// UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedOrder =  await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true});
        res.status(201).json(updatedOrder); 
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// DELETE ORDER
router.delete("/:id",verifyTokenAndAdmin , async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(201).json("Order Has been Deleted");
    }catch(err) {
        res.status(500).json(err);
    }
} );

// GET USER ORDER
router.get("/find/:userid",verifyTokenAndAuthorization, async (req,res) => {
    try{
        const orders = await Order.find({ userId: req.params.userid });
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json("Error while getting User All Order");
    }
});

// GET ALL ORDER
router.get("/findall",verifyTokenAndAdmin, async (req,res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json("Error while getting All Carts");
    }
});

//  Get Monthly Income
router.get("/income",verifyTokenAndAdmin,async (req,res) => {
    const date = new Date();
    const lastmonth = new Date(date.setMonth(date.getMonth()-1));
    const premonth = new Date(new Date().setMonth(lastmonth.getMonth()-1));

    try {
        const income = await Order.aggregate([
          { $match: { createdAt: { $gte: premonth } } },
          {
            $project: {
              month: { $month: "$createdAt" },
              sales: "$amount",
            },
          },
          {
            $group: {
              _id: "$month",
              total: { $sum: "$sales" },
            },
          },
        ]);
        
        res.status(200).json(income);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

