const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post('/register', async (req,res) => {
    const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.Secret_key),
    });

    try{
        const saveduser = await newuser.save();
        // console.log(saveduser);
        res.status(201).json(saveduser);
    }catch(err){
        // console.log(err);
        res.status(500).json(err);
    }
    
});

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Credential");
        // console.log(user);

        const hash_pass =  CryptoJS.AES.decrypt(user.password, process.env.Secret_key );
        // res.send(hash_pass);

        const Password = hash_pass.toString(CryptoJS.enc.Utf8);
        Password !== req.body.password && res.status(401).json("Wrong Password");
        
        const accessTocken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWTAccess, { expiresIn: "5d"}
        );
        

        const { password, ...others } = user._doc;

        res.status(200).json({...others,accessTocken});
        console.log("Successfully Logged In")

    }catch(err){
        console.log(err);
        res.status(500).json("In Catch of Auth");
    }
});

module.exports = router;