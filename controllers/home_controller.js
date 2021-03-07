const Tasks = require("../models/tasks");

//callback function for main page
module.exports.home = function(req,res){
    Tasks.find({},function(err,task){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        // redering the home page by substituting variables( in ejs file) with their values
        return res.render('home',{
            title: "Home",
            heading:"TODO App",
            inputHeading1:"DESCRIPTION",
            inputHeading2:"CATEGORY",
            selectPERSONAL:"PERSONAL",
            selectWORK:"WORK",
            selectSCHOOL:"SCHOOL",
            selectCLEANING:"CLEANING",
            selectOTHER:"OTHER",
            inputHeading3:"DUE DATE",
            inputHeading4:"TIME",
            selectMORNING:"MORNING (8:00 am)",
            selectAFTERNOON:"AFTERNOON (1:00 pm)",
            selectEVENING:"EVENING (5:00 pm)",
            selectNIGHT:"NIGHT (9:00 pm)",
            add:"ADD TASK",
            del: "DELETE TASKS",
            tasks_list: task,
            month:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC']
        });
    });
};

