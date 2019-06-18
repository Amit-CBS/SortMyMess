const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.render('index'); 
});
router.post("/register",(req,res)=>{
    res.send("Working");
});
router.post("/registermess", (req, res) => {
    const { messid, messname, password } = req.body;
    User.findOne({ messid: messid }).then(user => {
        if (user) {
            //errors.push({ msg: 'Email already exits' });
            res.send("MessId already exists");
        } else {
            const newUser = new User({
                messid,
                messname,
                password
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save().then(savedUser => {
                        //req.flash('success_msg', 'Yor are now registered,please login');
                        res.render("index");
                    })
                })
            })
        }
    });
});

module.exports = router;
