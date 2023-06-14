const express=require('express');  // צד השרת מייבאת את אקספרס
const mongoose=require('mongoose'); // מייבאת את מונגו
const cors=require("cors") // מייבאת את cors 

// require('dotenv').config(); // פה מייבאת את המונגו כביכול מהקובץ env
const app=express(); // יוצרת אובייקט app שדרכו יהיה את כל המטודות של הexpress
// const routers =require('./routes/AppRoutes') ;// מייבא את הרוטר שלי 
const PORT=process.env.port||3000; // נותנת ברירת מחדל או לפורט בנוי מראש ואם לא אז 3000
app.use(express.json()) // כל כתיבה שתיהיה לנו תכתב בתצורת גייסון
app.use(cors()) // חייב את זה 
// mongoose.
// connect(process.env.MONGODB_URL) //דרך זה ניגישים לקובץ ומתחברים למונגו db שלנו
// .then(()=>console.log(`conect to MONGODB`)).catch((err)=>console.log(err));

// app.use(routers) // האפליקציה שלנו תשתמש בrouters
app.listen(PORT,()=>console.log(`listen to:${PORT}`));//   שלנו באפליקציה התחברות לשרת 