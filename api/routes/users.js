const router= require("express").Router()
const CryptoJs = require("crypto-js")
const User = require("../models/User")
const verify = require("../verifyToken")



//UPDATE

router.put("/:id",verify, async(req,res) =>{
    if(req.user.id==req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password=CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY)
        }

        try{
            const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateUser)

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("u can update only your account")
    }
})


//DELETE

router.delete("/:id",verify, async(req,res) =>{
    if(req.user.id==req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(206).json("User has been deleted")

        }catch(err){
            res.status(500).json(err)
        }
        }else{
            res.status(403).json("u can delete only your account")
        }
})



//GET

router.get("/find/:id", async(req,res) =>{

        try{
            const user=await User.findById(req.params.id);
            const { password, ...info}=user._doc;
            res.status(200).json(info)

            }catch(err){
                res.status(500).json(err)
            }      
});


//GET ALL

router.get("/", verify,async(req,res) =>{
    const query =req.query.new;
    if(req.user.isAdmin){
        try{
            const users=query? await User.find().limit(10) : await User.find();
            res.status(206).json(users)

        }catch(err){
            res.status(500).json(err)
        }
        }else{
            res.status(403).json("u can't access all accounts")
        }
})

//GET ALL STATS
router.get("/stats",verify,async (req,res) =>{
    const today = new Date();
    const LastYear = today.setFullYear(today.setFullYear()-1);

    const monthsArray =[
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    try{
        const data= await User.aggregate([
            {
                $project:{
                    month: {$month :"$createdAt"}
                }
            },{
                $group :{
                    _id:"$month",
                    total:{$sum :1}
                }
            }
        ])
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports =router