const mysql = require ("mysql");
// const bcrypt = require("bcryptjs");

const db=mysql.createConnection({
   host:process.env.DATABASE_HOST,
   user:process.env.DATABASE_USER,
   password:process.env.DATABASE_PASS,
   database:process.env.DATABASE,
   });

   exports.Nutrilogin=async(req,res) =>{
   try{
    const{ email,password} =req.body;
    if(email=="admin@gmail.com"&&password=="123456"){
      res.render("admin");
    }
   else if(!email || !password){
      res.render('Nutrilogin',{msg:'Please enter your email and password',msg_type:"error"});
    }
    db.query('select * from users where email=?',[email],async(error,result)=>{
    console.log(result);
    if(result.length<=0){
      res.render('Nutrilogin',{msg:'Enter correct email or password',msg_type:"error"});
    }
    else{
      if(result[0].PASS!=password){
      res.render('Nutrilogin',{msg:'Enter correct email or password',msg_type:"error"});
    }else{
     res.render("offer");
    }
  }
    });
    }catch(error){
   console.log(error);
   }
   
  };

//exporting registratin pg in mysql
  exports.registration=(req,res)=>{
    // const {name,email,phno,age,weight,height,gender_choice,time_choice,goal_choice,desc}=req.body;

    const name=req.body.uname;
    const email=req.body.email;
    const phno=req.body.phno;
    const age=req.body.age;
    const weight=req.body.weight;
    const height=req.body.height;
    const gender_choice=req.body.gender_choice;
    const time_choice=req.body.TIMING_SLOT;
    const goal_choice=req.body.goal_choice;
    const desc=req.body.desc;
    console.log(req.body);

    const reg1 ={FNAME:name,EMAIL:email,PHONE_NO:phno, DOB:age, WEIGHT:weight, HEIGHT:height, GENDER:gender_choice, TIMING_SLOT:time_choice, GOAL:goal_choice, HEALTH_ISSUE:desc};
    db.query("insert into reg set ?",[reg1],(err,result)=>{
      if(err) throw err;
      else{
        res.render("thankyou",{msg:"user registered successfully"})
      }  
    });
  }


exports.forgot=(req,res) =>{
  const email=req.body.email;
  db.query('select email from users where EMAIL=?',[email],async(error,result)=>{
    store=result[0].email;
   res.render("confirm",{store:store});
  })
  

}
exports.confirm=(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;
  const confirmpassword=req.body.confirmpassword;
 const sql={PASS:password}
  db.query("update users set ? where email=?",[sql,email],(err,result) =>{

});
const sql1={PASSCHECK:confirmpassword}
  db.query("update users set ? where email=?",[sql1,email],(err,result) =>{

});

}

//exporting createaccount in mysql
exports.createaccount=(req,res) =>{
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const password2 = req.body.password2;
 
   // res.send("formsubmitted");
   // res.render("");

   db.query('select * from users where EMAIL=?',[email],async(error,result)=>{
    if(error){
      console.log(error);
    }
    
    else if(result.length>0){
      res.render('createaccount',{msg:'Email taken already',msg_type:"error"});
    }
    else if(password!=password2){
      res.render('createaccount',{msg:'Password does not match',msg_type:"error"});
    }
    //let hashedPassword = await bcrypt.hash(password,4);
    db.query("insert into users set?",{FNAME:username,EMAIL:email,PASS:password,PASSCHECK:password2},(err,result) =>{
       if(error){
        console.log(error);
       }
       else{
        // console.log(result);
        res.render('NutriLogin',{msg:' Registration Success',msg_type:"good"});
       }
    }
    ); 
   });
};


