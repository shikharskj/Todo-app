const Tasks = require("../models/tasks");

// callback function used to add task to the database
module.exports.create = function(req, res){
    Tasks.create({
        description: req.body.description,
        task_type: req.body.task_type,
        on_date: req.body.on_date,
        at_time: req.body.at_time
        }, 
        function(err,newTask){
            if(err){
                console.log('error in creating a task');
                return;
            }
            console.log('********',newTask);
            // redirecting back to home page
            return res.redirect('back');
        });
};