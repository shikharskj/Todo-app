//require the library
const mongoose = require('mongoose');

//defining the schema
const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    task_type:{
        type: String,
        required: true
    },
    on_date:{
        type: Date,
        required: true
    },
    at_time:{
        type: String,
        required: true
    }
});

//collection name 
//basically the name by which data will be stored in the database
const Tasks = mongoose.model('Tasks',taskSchema);

// exporting
module.exports = Tasks;