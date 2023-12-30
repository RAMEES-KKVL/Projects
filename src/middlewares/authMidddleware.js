const fs = require("fs")
const userdata =JSON.parse(fs.readFileSync("./models/userdata.json","utf-8"))

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


const validating = (req,res,next)=>{
    const {email,password,confirmPassword} = req.body

    if(!email || !password || !confirmPassword){
        res.render("signup",{errorMessage:"missing data....! velachiledukkallee....!"})

    }

    else {
        const userExist = userdata.find((val)=>val.email=== email)
        if(userExist){
           res.render("signup",{errorMessage:"User already exist"})
        }
        else{
            const validatingEmail = emailRegex.test(email)
            const validatingPassword = passwordRegex.test(password)
            if(!validatingEmail){
                res.redirect('/signup');
            }
            else if(!validatingPassword){
                 res.render("signup",{errorMessage:"enter a valid password"})
            }
            else if(password !== confirmPassword){
                  res.render("signup",{errorMessage:"confirm password not match"})
            }else{
                
                next()
            }
        }
    }
}

module.exports = validating;