
const name = require ('ejs')
const express = require ('express')
const app = express ()
app.set ('view engine', 'ejs')
app.get("/",(req,res)=>{
    const person = {
        name : "oscar man shrestha",
        class : 12,
        age : 12,

    }
    res.render("home",{person : person})
})
app.get("/about",(req,res)=>{
    res.render
}
)



app.listen(3000,()=>{
    console.log("Node Js is at port 3000")
})