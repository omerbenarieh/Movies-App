
const MovieModel=require('../modules/AppModules') // מייבאת את התיקייה של המודל 
module.exports.getController=async(req,res)=> // כל מטודה אני מייבאת אותה שאוכל להשתמש דרך האובייקט של המודל נשתמש בכל הפונקציות
{
    const Movie=await MovieModel.find(); // יביא לנו את כל המשימות כמו גט משרת רק פה אנחנו מבקשים מהמודל
    res.send(Movie) //כביכול הלקוח יבקש את כל המשימות והשרת ישלח לו אותם
}

module.exports.addObject=async(req,res)=> //ליצור אובייקט חדש 
{
    const{text}=req.body //הלקוח הקליד בקשה כביכול מזין אובייקט שזה משימה חדש 
    ToDoModel.create({text}).then((data)=>{ //כל הפעולות האלה נעשות עי ה המודל שלנו עם מטודות בנויות מראש 
        console.log('adding to a list');
        console.log(data);
        res.send(data) //השרת ישלח לנו את המשימה החדשה 
    })
}
module.exports.uploadObject=async(req,res)=>
{
    const{_id,text}=req.body; //דיסטרקצר
    ToDoModel
    .findByIdAndUpdate(_id,{text}).then(()=>res.send("upload succsess")).catch((err)=>console.log(err));
}
module.exports.deleteObject=async(req,res)=>
{
    const{_id}=req.body;
    ToDoModel
    .findByIdAndDelete(_id).then(()=>res.send("DELETE succsess")).catch((err)=>console.log(err));
}

