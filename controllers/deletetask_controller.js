const Tasks = require("../models/tasks");

// callback function used to delete tasks based on ids
module.exports.delete = function(req,res){
    let ids= req.query.ids.split(',');
    Tasks.deleteMany({_id:{ $in: ids}},function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        // redirecting back to home page
        return res.redirect('back');
    });
};