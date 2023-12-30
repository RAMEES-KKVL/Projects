const fs = require("fs")
const datas = JSON.parse(fs.readFileSync("./models/userdata.json"))

module.exports = {
    home:(req,res)=>{
        if(req.session.user){
            res.render('home',{datas})

        }
        res.render("login",{errorMessage:""})
      },
     
    loginget:(req,res)=>{
    
        if(req.session.user){
            res.redirect('/')
        }
        res.render("login",{errorMessage:""})
        
      },
    loginpost:(req,res)=>{
        console.log(req.body);
        const data = req.body
        let {email,password}=data
        console.log(email,password);
      const userCheck = datas.find((data)=> data.email === email && data.password === password)
      if(userCheck){
        req.session.user = userCheck
        res.redirect('/')
      }else{
        res.render("login",{errorMessage:"password thettaanu, try again... fail again... ennit nirthi pokko...!"})
        // res.render("login")
      }
        
      },
    signupget:(req,res)=>{
        res.render("signup",{errorMessage:""})
    },
    signuppost:(req,res)=>{
        // console.log(req.body);
        let datasmon=req.body;
        
        datas.push(datasmon)
        fs.writeFile("./models/userdata.json", JSON.stringify(datas),(err,data)=>{
            if(err){
                res.status(404).send("error vannu...!")
            }else{
                res.render('login',{errorMessage:""})
            }
        })
        // console.log(userDatas);
        // fs.writeFile(JSON.parse())
    },
    logout:(req,res)=>{
       req.session.destroy(()=>{
        res.redirect("/login")
       })
    }
    
}