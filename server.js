const express=require('express');
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Velocity",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Succesfully connected to database");
}).catch((err)=>{
    console.log("Connection is unsuccessful");
})
const app=express();

app.listen(3000,()=>{
    console.log("I am listening");
});
app.set('view engine', 'hbs');
app.set('views','./views');
/*
app.post('/Create',(req,res)=>{
    const name=req.params.usn;
    console.log('user has requested for creation of account');
    res.render('NewUser',{name:"Rudraksh"});
})
*/

/*app.get('/LoggedIn',(req,res)=>{
    res.render('loginuser',{name:,course:req.res.pass});
});*/

app.post('/SignUp',(req,res,next)=>
{
    console.log("received a request for loginpage");
    console.log("values sent by user:"+req.params);
    next();
})

/*app.get('/home',(req,res)=>{
    console.log("received a request for homepage");
    res.sendFile(__dirname+"/landing.html");
})*/

app.use("/home",express.static(__dirname+"/PublicData"));

/*function StoreData()
{
    let result;
    const DBSchema=new mongoose.Schema({
    Username:String,
    Email:String,
    School:String,
    Grade:Number,
    Password:String,
});

const EnrolledStudents=new mongoose.model("EnrolledSrtudents",DBSchema);
const data=new EnrolledStudents({
    Username:"Kailash",
    Email:"tubai@yahoo.com",
    School:"NagarPal High School",
    Grade:11,
    Password:"tubai1235"
});
data.save().then(
    ()=>{
        console.log("Data has been sent to database");
        result=true;
    }
).catch((err)=>
{
    console.log("something is wrong");
    result=false;
});
return result;
}*/