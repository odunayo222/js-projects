const grade = () => {
    var score = document.getElementById("score").value;
    for(i in score){
        if(score >= 75 && score < 101){
    document.getElementById("result").innerHTML= " Your grade is A\nYou did well keep it up";
    } else if(score <= 74 && score 
    > 49){
    document.getElementById("result").innerHTML= "Your grade is C\nYou tried but put in more effort";

    }
    else if (score <= 49 && score > -1){
    document.getElementById("result").innerHTML= "Your grade is F\nPlease try to work harder next time";
    
    }
    else if(score > 100){
    document.getElementById("result").innerHTML= "Error! The mark is over 100";
    }
    else if(score < 0){

    document.getElementById("result").innerHTML= "Error! The mark is less than 0";
    }
    else{
    document.getElementById("result").innerHTML= "Invalid Score";
    }

    }

  
}

