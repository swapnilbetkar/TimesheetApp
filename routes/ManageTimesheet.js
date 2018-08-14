var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://swapnil:a123456@ds135534.mlab.com:35534/timesheetusers',['employees']);


//Get all employees
router.get('/timesheet',function(req,res,next){
//res.send('Manage your time sheets here');
db.employees.find(function(err,employees){
if(err)
{
    res.send('OOPS!! Something went wrong')
}
else{
    res.json(employees);
}
});
});

//get specific employee
// router.get('/timesheet',function(req,res,next){
//     //res.send('Manage your time sheets here');
//     db.employees.findOne({"Emp ID":101},function(err,employees){
//     if(err)
//     {
//         res.send('OOPS!! Something went wrong')
//     }
//     else{
//         res.json(employees);
//     }
//     });
//     });
// router.post('/timesheet',function(req,res,next){
//     //res.send('Manage your time sheets here');
//     var newEmp = req.body;
//     if((!newEmp.name) || (!newEmp.EmpID) || (!newEmp.role) || (!newEmp.designation))
//     {
//         if((!newEmp.name))
//         {
//             res.status(400);
//             res.json({
//                 "error":"Employee name required!"
//         });
//         }
//         if((!newEmp.EmpID))
//         {
//         res.status(400);
//         res.json({
//             "error":"Employee ID required!"
//         });
//         }
//         if((!newEmp.role))
//         {
//         res.status(400);
//         res.json({
//             "error":"Employee role required!"
//         });
//         }
//         if((!newEmp.designation))
//         {
//         res.status(400);
//         res.json({
//             "error":"Designation required!"
//         });
//         }
//     }
//     else
//     {
//         db.employees.save(newEmp,function(err,employees){
//             if(err){
//                 res.send(err);
//             }
//             res.json(newEmp);
//         });
//     }
//     });

//      router.delete('/timesheet',function(req,res,next){
//      //res.send('Manage your time sheets here');
//      db.employees.remove({"Emp ID":103},function(err,employees){
//      if(err)
//      {
//          res.send('OOPS!! Something went wrong')
//      }
//      else{
//          res.json(employees);
//      }
//      });
//      });
module.exports = router;
