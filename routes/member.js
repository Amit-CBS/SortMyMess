const express = require("express");
const router = express.Router();
const Member = require("../models/members");
const User=require("../models/mess");
const Data=require("../models/datas");
const bcrypt = require("bcryptjs");
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.render("memberreg");
});

router.get("/member_reg", (req, res) => {
    res.render("memberreg");
});
router.get("/member_signin", (req, res) => {
    res.render("membersigin");
});
router.post("/member_reg", (req, res) => {
    const {messid1, name, email, phone, password } = req.body;
    const userId=req.body.messid1;
    const nameId=req.body.name;
    const emailId=req.body.email;
        Data.findOne({user:email}).then(data=>{
            if(!data){
                Member.findOne({email:email}).then(user1=>{
                    if(user1){
                        req.flash("error_msg",'Member alredy exists');
                        res.redirect("member_reg");
                    }else{
                        const newUser = new Member({
                            messid1, email,name, phone, password
                        });
                        const newData = new Data({
                            userId,nameId,emailId
                        });
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                newUser.password = hash;
                                newUser.save().then(savedUser => {
                                    newData.save().then(savedData=>{
                                        req.flash('success_msg', 'Yor are now registered,please login');
                                        res.redirect('member_signin');
                                    })
                                });
                            });
                        });
                    }
                })
            }
           
        })
});
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
    const memberUser=req.user.messid1;
    const memberUser1=req.user.messid1;
    var test=120;
    Member.find({ messid1: memberUser }).then(memberUser=>{
        Data.find({userId:memberUser1}).then(dataUser=>{
            var memberTotal = [];
            for (var i = 0; i < dataUser.length; i++) {
                var sum = 0
                for (var j = 0; j < dataUser[i].price.length; j++) {
                    sum = sum + dataUser[i].price[j];
                }
                memberTotal.push({values:sum,name:dataUser[i].nameId});
            }
            // console.log(memberTotal);
            res.render("dashboard", {
                name: req.user.name,
                messid: req.user.messid1,
                email: req.user.email,
                idUser: req.user.id,
                memberUser: memberUser,
                dataUser:dataUser,
                memberTotal:memberTotal
            });
        });
    })
});   
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    Member.findOne({ email: email }).then(user => {
        if (!user) return done(null, false, { message: 'No User found' });
        bcrypt.compare(password, user.password, (err, matched) => {
            if (err) return err;
            if (matched) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Incorrect password' });
            }
        })
    })
}));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    Member.findById(id, function (err, user) {
        done(err, user);
    });
});
router.post("/member_signin", (req, res,next) => {
    messid2=req.body.messid2;
    email1=req.body.email;
    Member.findOne({email:email1}).then(pass=>{
        if(pass){
            if (pass.messid1==messid2) {
                passport.authenticate("local", {
                    successRedirect: "/dashboard",
                    failureRedirect: "/member_signin",
                    failureFlash: "true"
                })(req, res, next);
            } else {
                req.flash('error_msg', "Please enter correct MessId");
                res.redirect('member_signin');
            }
        }else{
            req.flash('error_msg', "User does not exits");
            res.redirect('member_signin');
        }  
    })      
});
module.exports = router;
