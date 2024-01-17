
let displayEl= document.getElementById("display-el");

// let marks =60;

function marksCalculator(){
    let marksEl=document.getElementById("marks-el").value
    if( marksEl>=79 && marksEl<=100){
        displayEl.innerHTML=("A")
    }
    else if(marksEl>=60 && marksEl<79){
    message=("B")
    }
    else if (marksEl>=49 && marksEl<=59){
    message=("C")
}
    else if (marksEl >=40 && marksEl <=49){
    message=("D")}
    else if (marksEl >10){
        message=("Please Enter Correct Score")
    }
    else{
    message=("E")
    }
    displayEl.innerHTML=" "+ message
    
}

function renderMarks(){
    displayEl.innerHTML= " "
   marksCalculator() 
}
