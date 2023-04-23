const Product = require("../models/Products");
const {verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();

// Create Product
router.post("/create", verifyTokenAndAdmin ,async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json("Not able to Create Product");
    }
});

// UPDATE Product
router.put("/:id", verifyTokenAndAdmin , async (req, res) => {
    try{
        const updatedProduct =  await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true});
        res.status(201).json(updatedProduct); 
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// DELETE PRODUCT
router.delete("/:id",verifyTokenAndAdmin , async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(201).json("Product Has been Deleted");
    }catch(err) {
        res.status(500).json(err);
    }
} );

// GET PRODUCT
router.get("/find/:id", async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json("Error while getting Certain Product  "+err);
    }
});

// GET ALL PRODUCT
router.get("/findall", async (req,res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;
        if(qNew){
            products = await Product.find().sort({ createdAt: -1}).limit(5);
        }else if(qCategory){
            products = await Product.find({
                category: {
                    $in: [qCategory],
                }
            });
        }else{
            products = await Product.find();
        }

        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json("Error while getting Certain Product  "+err);
    }
});

module.exports = router;

