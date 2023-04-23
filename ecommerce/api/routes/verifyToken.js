const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authtoken =  req.headers.token;
    if(authtoken){
        const token = authtoken.split(" ")[1];
        jwt.verify(token, process.env.JWTAccess, (err,user) => {
            if(err){
                res.status(403).json("Token is Not Valid");
            }
            req.user= user;
            next();
        });
    }else {
        return res.status(401).json("You Are Not Authenticated");
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else {
            res.status(403).json("You are Not Allowed to Perform this")
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }
        else {
            res.status(403).json("You are Not Allowed to Perform this")
        }
    });
};

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}