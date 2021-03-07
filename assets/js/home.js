// Variable declarations
let toggle = document.getElementById("outer");
let inner = document.getElementById("inner");
let container = document.getElementById("container");
let input = document.querySelectorAll("form input,select");
let root = document.documentElement;
let category = document.getElementsByClassName("task-type");
let checkboxchecked = document.getElementsByClassName('checkboxes');
let mode = localStorage.getItem("mode");
let des = document.getElementsByClassName('description-date-container');
let task_ids = document.getElementsByClassName('task-ids');
let checked_ids = [];

// function that toggles between light and dark mode
const changemode = function(){
    container.classList.toggle("dark");
    input.forEach(element => {
        element.classList.toggle("dark");
    });
    inner.classList.toggle("margin");
}

// to maintain the theme when the site refreshes after addition or deletion of a task
if(mode == 'dark'){
    changemode();
    root.style.setProperty('--hover-color','#2e2e2e');
    root.style.setProperty('--outer-color','#343434');
    root.style.setProperty('--calender-indicator','invert(1)');
}

// A click eventListener to toggle between light and dark mode
toggle.addEventListener("click", function () {
    changemode();
    if(container.classList.contains("dark")){
        localStorage.setItem('mode','dark');
        root.style.setProperty('--hover-color','#2e2e2e');
        root.style.setProperty('--outer-color','#343434');
        root.style.setProperty('--calender-indicator','invert(1)');
    }
    else{
        localStorage.setItem('mode','light');
        root.style.setProperty('--hover-color','#EAEDF0');
        root.style.setProperty('--outer-color','#E7E7E7');
        root.style.setProperty('--calender-indicator','none');
    }
});

// Assigning colors to the Cateogory types in a task list
const taskColor = function(){
    let category_name = ['PERSONAL','WORK','SCHOOL','CLEANING','OTHER']
    let category_color = ['#1A1E33','#9B00AD','#F2A500','#F48024','#432711'];
    for(var i=0; i<category.length;i++){
            category[i].style.backgroundColor=category_color[category_name.indexOf(category[i].innerText)];  
    };  
};

// Function to add line-through to the checked tasks and also storing their ids in an array so that they can be deleted
const strikethrough = function(){
    for (let i = 0; i < checkboxchecked.length; i++) {
        checkboxchecked[i].addEventListener('click', function(){
            if(checkboxchecked[i].checked == true){
                des[i].style.textDecoration = 'line-through';
                document.querySelectorAll('#task-list>div')[i].classList.toggle("crossedout");
                checked_ids.push(task_ids[i].innerText);
            }
            else{
                des[i].style.textDecoration = 'none';
                document.querySelectorAll('#task-list>div')[i].classList.toggle("crossedout"); 
                checked_ids.splice(checked_ids.indexOf(task_ids[i].innerText),1);
            }
            document.getElementById('del-task').setAttribute('href','/delete-task/?ids='+checked_ids);
        });
    };  
};

// Calling the functions
taskColor();
strikethrough();
