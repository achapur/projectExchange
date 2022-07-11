const router = require("express").Router();
const User = require("../models/User.model");
const Organization = require("../models/Organization.model");
const Country = require("../models/Country.model");
const fileUploader = require("../config/cloudinary.config");

// //ROUTES GO HERE
router.get('/org/:id',(req,res,next)=>{
    const {id} = req.params;

    User.findById(id)
    .then((user)=>{
        Organization.findOne({'_org_owner':`${id}`})
        .populate('_students _org_owner _org_country')
        .then((owner=>{
            if(!owner._leagueOwner){
                console.log('owner',coach._players);
                const numPlayers = coach._players.length;
                res.render('team/main-team',{user , coach , id , numPlayers});
            }
            else {
                League.findById(coach._leagueOwner)
                .populate('_teams')
                .then((league)=>{
                    console.log('data',league._teams);
                    const data = league._teams;
                    const numPlayers = coach._players.length;
                    res.render('team/main-team',{user , coach , id , numPlayers , data , league});
                })
            }
        }))
    })
    .catch(error=>console.log('error',error))
})
// //EXPORTS
// module.exports = router;