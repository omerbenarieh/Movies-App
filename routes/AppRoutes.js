const { Router } = require("express"); // מייבאת את הרוטר עי אקספרס 
const { getObject, addObject, updateObject, deleteObject } = require('../Controller/AppController'); // מייבאת את כל המטודות של הקראד
const router = Router(); // לוקחת משתנה שהוא יהיה הרוטר שלי

router.get('/', getObject) // עכשיו ברגע שאני אהיה בדף הראשי יופיעו לי כל המשימות
router.post('/add', addObject) //יוצרת אובייקט
router.post('/update',updateObject) // מעדכנת אובייקט    // שלושתם חייבים להיות פוסט כדי שיתעדכן בהתאמה 
router.post('/delete',deleteObject) //מוחקת אובייקט
module.exports = router;