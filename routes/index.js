const express = require('express');
const router = express.Router();
const User = require('../models/mess');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.render('index'); 
});

router.post("/registermess", (req, res) => {
    const { messid, messname, password } = req.body;
    User.findOne({ messid: messid }).then(user => {
        if (user) {
            req.flash("error_msg", 'MessId ALready Taken');
            res.redirect("/");
            
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
                        req.flash('success_msg', 'Your mess has been successfully Registered,Please fill the follwing Details');
                        res.redirect("member_reg");
                    })
                })
            })
        }
    });
});
module.exports = router;
