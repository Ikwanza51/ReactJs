const router = require("express").Router();
const stripe = require("stripe")(process.env.Stripe_Secret_Key);

router.post("/payment", async (req,res) => {
    stripe.charges.create(
        {
            source: req.body.tokenid,
            amount:req.body.amount,
            currency: "usd",
        },
        ( stripeErr, stripeRes) => {
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;