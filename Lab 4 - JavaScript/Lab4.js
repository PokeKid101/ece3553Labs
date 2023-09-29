// Variables
let credits = document.getElementsByClassName("credits");
let grades = document.getElementsByClassName("grades");
let output = document.getElementById("output");



// Function calcuates the GPA for i number of classes taken
function calcGPA(){
    let gpa = 0;
    let credHours = 0;
    for(let i = 0; i < credits.length; i++){        
        let classGrade = parseFloat(credits[i].value) * matchGrade(grades[i].value);
        credHours = credHours + parseFloat(credits[i].value);
        gpa = gpa + classGrade;
        console.log(gpa, credHours);
    }
    gpa = gpa / credHours;
    
    output.innerHTML = gpa;
    
    if(gpa > 3.50){
        output.style.color = "limegreen";
    }
    else if(gpa > 3.00){
        output.style.color = "pink";
    }
    else{
        output.style.color = "red";
    }
    
}

// Function returns appropriate score based on letter grade
function matchGrade(letterGrade){
    switch(letterGrade){
        case "A":
        case "a":
            return 4;
            break;
        case "B":
        case "b":
            return 3;
            break;
        case "C":
        case "c":
            return 2;
            break;
        case "D":
        case "d":
            return 1;
            break;
        default:
            return 0;
            break;
    }
    return 0;
}

// Function clears the GPA calculator
function clearCalc(){
    for(let i = 0; i < credits.length; i++){
        credits[i].value = "";
        grades[i].value = "";
    }
    output.innerHTML = "0.00";
    output.style.color = "black";
}