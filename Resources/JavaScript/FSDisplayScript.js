let nameArray = ["Alex", "Amelia", "Ava", "Abigail", "Anthony", "Andrew", "Aaron", "Adam", "Anna", "Amy", "Andy", "Alan", "Alicia",
"Archie", "Angie", "Angela", "Abdullah", "Agnes", "Ben", "Brandon", "Brian", "Bruce", "Bernard", "Boris", "Bradley", "Bobby", "Bella",
"Bridget", "Bria", "Belinda", "Beatriz", "Betsy", "Britney", "Billie", "Becky", "Brooke", "Bethany", "Barry", "Blake", "Brianna",
"Charlie", "Charlotte", "Connor", "Cameron", "Caitlin", "Cara", "Chloe", "Catherine", "Calum", "Chris", "Casper", "Calvin", "Charles",
"Christian", "Courtney", "Carla", "Caroline", "Carol", "Cassie", "Catrina", "Chester", "Claire", "Clive", "Cody", "Colin", "Craig", "Curtis",
"Daniel", "Daisy", "Dylan", "David", "Darcey", "Dominic", "Danielle", "Dean", "Declan", "Demi", "Douglas", "Dale", "Daanyaal", "Dalton", "Dieumerci",
"Damian", "Dominika", "Daphne", "Darren", "Davina", "Daryl", "Debbie", "Denise", "Derek", "Dennis", "Derry", "Dion", "Dexter", "Diogo", "Donald",
"Emily", "Ethan", "Evie", "Eva", "Erin", "Ellie", "Emma", "Eddy", "Edward", "Elizabeth", "Esme", "Elsie", "Evan", "Eliza", "Elliot", "Emilia", "Eve", 
"Eloise", "Elijah", "Ellis", "Ellen", "Eli", "Elvis", "Emiliano", "Eric", "Ernie", "Etienne", "Evelina", "Ewan",
"Freya", "Finley", "Florence", "Frankie", "Frank", "Faith", "Francesca", "Farrah", "Faye", "Fatima", "Felicity", "Felix", "Fraser", "Fergus",
"Fletcher", "Francis", "Fred", "Fabian", "Fabio", "Fallon", "Faraz", "Ferne", "Felicia", "Fiona", "Francisco", "Freyja",
"Grace", "Georgia", "Gabby", "George", "Georgie", "Gregor", "Greg", "Gabriella", "Gareth", "Gary", "Gavin", "Gemma", "Gene",
"Geoffrey", "Gerard", "Gideon", "Gina", "Giovannie", "Glen", "Graeme", "Gordon", "Grant", "Guy",
"Harry", "Henry", "Holly", "Harrison", "Hannah", "Harley", "Harvey", "Hollie", "Harriet", "Heidi", "Hugo", "Hallie", 
"Hayden", "Hope", "Hamish", "Hattie", "Hayley", "Hazel", "Haashim", "Honey", "Helen", "Heather", "Helena", "Hermione", 
"Isla", "Isabelle", "Isaac", "Immogen", "Ivy", "Iris", "India", "Iona", "Ian", "Ida", "Idris", "Ibrahim", "Ingrid", 
"Irene", "Ines", "Isha", "Ivan", "Izzy",
"Jack", "Jacob", "Jessica", "James", "Joshua", "Jake", "Jayden", "Jamie", "Julia", "Jasmine", "John", "Jasper", "Joe", 
"Joel", "Jaden", "Jude", "Jan", "Jason", "Jennifer", "Jemima", "Jordan", "Jimmy", "Jonah", "Josie", "Jodie", "Jackie", 
"Katie", "Kyle", "Kai", "Kayla", "Kiera", "Kian", "Kaiden", "Kaitlyn", "Kara", "Kate", "Kayleigh", "Kevin", "Khloe", 
"Kieran", "Keelan", "Kaleb", "Kain", "Kanye", "Karl", "Karim", "Karina", "Karis", "Katherine", "Katrina", "Keith", 
"Lily", "Logan", "Leo", "Leon", "Lucas", "Lola", "Lewis", "Liam", "Luke", "Leah", "Luca", "Lottie", "Libby", "Lexie", 
"Lillie", "Layla", "Layton", "Lillian", "Louise", "Lucia", "Larissa", "Lance", "Lawrence", "Larry", "Lauren", "Laura", 
"Mia", "Max", "Mason", "Millie", "Maisie", "Megan", "Mollie", "Matthew", "Matilda", "Michael", "Maddison", "Mohammed", 
"Mya", "Maria", "Madeleine", "Mark", "Maggie", "Melissa", "Magnus", "Marcus", "Mary", "Miles", "Mustafa", "Mac", "Marissa", 
"Noah", "Niamh", "Nicole", "Neve", "Nia", "Nicola", "Nina", "Nadia", "Nadine", "Naomi", "Nancy", "Neicy", "Natalie", 
"Nathan", "Nathaniel", "Natasha", "Ned", "Neil", "Neville", "Niall", "Nick", "Nikhita", "Noel", "Nora", "Norbert", 
"Oliver", "Ollie", "Oli", "Olivia", "Olly", "Orban", "Ophelia", "Olaf", "Olga", "Omar", "Orson", "Oscar", "Owen", "Otis", 
"Poppy", "Phoebe", "Paige", "Patrick", "Polly", "Paris", "Penny", "Penelope", "Peter", "Peyton", "Pippa", "Pablo", "Paddy", 
"Paisley", "Pamela", "Patricia", "Paul", "Pauline", "Pavan", "Pearl", "Perry", "Percy", "Phillip", "Piers", "Pierre", 
"Quinn", "Quentin", "Riley", "Ruby", "Ryan", "Rosie", "Rebecca", "Rory", "Rhys", "Reuben", "Rose", "Reece", "Robbie", 
"Rachel", "Rowan", "Ruth", "Rio", "Roman", "Rihanna", "Ralph", "Ross", "Richard", "Ricky", "Rishi", "Robin", "Rogan", 
"Sophie", "Sophia", "Scarlett", "Samuel", "Sienna", "Summer", "Seb", "Stanley", "Sarah", "Skye", "Scott", "Shaun", "Sean", 
"Simon", "Sasha", "Sian", "Shelby", "Spencer", "Stella", "Stephanie", "Sabina", "Sadia", "Sardha", "Sardhadebie", "Samara", 
"Thomas", "Tyler", "Theo", "Toby", "Tabitha", "Taylor", "Teddy", "Tegan", "Tallulah", "Tara", "Tess", "Tristan", "Tallie", 
"Tasmin", "Tony", "Terry", "Teemu", "Theresa", "Thor", "Thierry", "Tiffany", "Tim", "Todd", "Tracey", "Trent", "Trevor", "Troy", 
"Uma", "Victoria", "Violet", "Vanessa", "Victor", "Valerie", "Vince", "Vinnie", "Vivienne", "Will", "William", "Willow", 
"Woody", "Wade", "Walter", "Warren", "Wendy", "Wayne", "Wesley", "Wilfred", "Whyatt", "Xander", "Xavier", "Yohana", 
"Yakub", "Yasmin", "Yolanda", "Youssef", "Yvonne", "Zara", "Zachary", "Zoe", "Zane", "Zakirullah", "Ziggy"];

let maleNameArray = ["Alex", "Anthony", "Andrew", "Aaron", "Adam", "Andy", "Alan", 
"Archie", "Abdullah", "Ben", "Brandon", "Brian", "Bruce", "Bernard", "Boris", "Bradley", "Bobby", 
"Barry", "Charlie", "Connor", "Cameron", "Calum", "Chris", "Casper", "Calvin", "Charles",
"Christian", "Chester", "Clive", "Cody", "Colin", "Craig", "Curtis",
"Daniel", "Dylan", "David", "Dominic",  "Dean", "Declan", "Douglas", "Dale", "Dalton", "Dieumerci",
"Damian",  "Darren", "Daryl", "Derek", "Dennis", "Derry", "Dion", "Dexter", "Diogo", "Donald",
"Ethan","Eddy", "Edward", "Evan", "Elliot", 
"Elijah", "Ellis", "Eli", "Elvis", "Emiliano", "Eric", "Ernie", "Etienne", "Ewan",
"Finley", "Frankie", "Frank", "Farrah", "Felix", "Fraser", "Fergus",
"Fletcher", "Francis", "Fred", "Fabian", "Fabio", "Francisco", 
"George", "Gregor", "Greg", "Gareth", "Gary", "Gavin", "Gene",
"Geoffrey", "Gerard", "Gideon", "Giovannie", "Glen", "Graeme", "Gordon", "Grant", "Guy",
"Harry", "Henry", "Harrison", "Harley", "Harvey", "Hugo", 
"Hayden", "Hamish", "Haashim",
"Isaac", "Ian", "Idris", "Ibrahim", 
"Ivan", "Jack", "Jacob", "James", "Joshua", "Jake", "Jamie", "John", "Jasper", "Joe", 
"Joel", "Jaden", "Jude","Jason","Jordan", "Jimmy", "Jonah",  
"Kyle", "Kai", "Kian", "Kaiden", "Kevin", 
"Kieran", "Keelan", "Kaleb", "Kain", "Kanye", "Karl", "Karim", "Keith", 
"Logan", "Leo", "Leon", "Lucas", "Lewis", "Liam", "Luke", "Luca", 
"Layton", "Lance", "Lawrence", "Larry", 
"Max", "Mason", "Matthew", "Michael","Mohammed", 
"Mark", "Magnus", "Marcus", "Miles", "Mustafa", "Mac", 
"Noah", 
"Nathan", "Nathaniel", "Ned", "Neil", "Neville", "Niall", "Nick", "Noel", "Norbert", 
"Oliver", "Ollie", "Oli", "Olly", "Orban", "Olaf", "Omar", "Orson", "Oscar", "Owen", "Otis", 
"Patrick", "Peter", "Pablo", "Paddy", 
"Paul", "Pavan", "Perry", "Percy", "Phillip", "Piers", "Pierre", 
"Quentin", "Riley","Ryan", "Rory", "Rhys", "Reuben", "Reece", "Robbie", 
"Rowan", "Rio", "Roman", "Ralph", "Ross", "Richard", "Ricky", "Rishi", "Rogan", 
"Samuel", "Seb", "Stanley", "Scott", "Shaun", "Sean", 
"Simon", "Spencer",  
"Thomas", "Tyler", "Theo", "Toby", "Taylor", "Teddy", "Tristan",  
"Tony", "Terry", "Teemu", "Thor", "Thierry", "Tim", "Todd", "Trent", "Trevor", "Troy", 
"Victor", "Vince", "Vinnie", "Will", "William", 
"Woody", "Wade", "Walter", "Warren", "Wayne", "Wesley", "Wilfred", "Whyatt", "Xander", "Xavier", "Yohana", 
"Yakub", "Youssef", "Zachary", "Zane", "Zakirullah", "Ziggy"];

let femaleNameArray = ["Amelia", "Ava", "Abigail", "Anna", "Amy", "Alicia",
"Angie", "Angela", "Agnes", "Bella",
"Bridget", "Bria", "Belinda", "Beatriz", "Betsy", "Britney", "Billie", "Becky", "Brooke", "Bethany", "Brianna",
"Charlotte", "Caitlin", "Cara", "Chloe", "Catherine", 
"Courtney", "Carla", "Caroline", "Carol", "Cassie", "Catrina", "Claire", 
"Daisy", "Darcey", "Danielle","Demi",
"Dominika", "Daphne", "Davina", "Debbie", "Denise", 
"Emily", "Evie", "Eva", "Erin", "Ellie", "Emma","Elizabeth", "Esme", "Elsie", "Eliza",  
"Eloise", "Ellen", "Evelina",
"Freya", "Florence", "Faith", "Francesca", "Faye", "Fatima", "Felicity", 
"Fallon", "Ferne", "Felicia", "Fiona", "Freyja",
"Grace", "Georgia", "Gabby", "Georgie", "Gabriella","Gemma",
"Gina",
"Holly", "Hannah", "Hollie", "Harriet", "Heidi", "Hallie", 
"Hope", "Hattie", "Hayley", "Hazel", "Honey", "Helen", "Heather", "Helena", "Hermione", 
"Isla", "Isabelle", "Immogen", "Ivy", "Iris", "India", "Iona", "Ida", "Ingrid", 
"Irene", "Ines", "Isha", "Izzy",
"Jessica", "Julia", "Jasmine",  
"Jan", "Jennifer", "Jemima", "Josie", "Jodie", "Jackie", 
"Katie", "Kayla", "Kiera", "Kaitlyn", "Kara", "Kate", "Kayleigh", "Khloe", 
"Karina", "Karis", "Katherine", "Katrina", 
"Lily", "Lola", "Leah", "Lottie", "Libby", "Lexie", 
"Lillie", "Layla", "Lillian", "Louise", "Lucia", "Larissa", "Lauren", "Laura", 
"Mia", "Millie", "Maisie", "Megan", "Mollie", "Matilda", "Maddison", 
"Mya", "Maria", "Madeleine", "Maggie", "Melissa", "Mary", "Marissa", 
"Niamh", "Nicole", "Neve", "Nia", "Nicola", "Nina", "Nadia", "Nadine", "Naomi", "Nancy", "Neicy", "Natalie", 
"Natasha", "Nikhita","Nora", 
"Olivia", "Ophelia", "Olga",  
"Poppy", "Phoebe", "Paige", "Polly", "Paris", "Penny", "Penelope", "Peyton", "Pippa",  
"Paisley", "Pamela", "Patricia","Pauline", "Pearl",  
"Ruby", "Rosie", "Rebecca", "Rose",  
"Rachel", "Ruth", "Rihanna",  "Robin",  
"Sophie", "Sophia", "Scarlett", "Sienna", "Summer", "Sarah", "Skye",  
"Sasha", "Sian", "Shelby", "Stella", "Stephanie", "Sabina", "Sadia", "Sardha", "Sardhadebie", "Samara", 
"Tabitha", "Tegan", "Tallulah", "Tara", "Tess", "Tallie", 
"Tasmin", "Theresa",  "Tiffany", "Tracey",  
"Uma", "Victoria", "Violet", "Vanessa", "Valerie", "Vivienne",  "Willow", 
"Wendy", 
"Yasmin", "Yolanda", "Yvonne", "Zara","Zoe"];


//Other Functions

function getSelectedTopicArea(){
    globalTopicAreaSelection = document.getElementById("topicAreaSelect").value;
};

//Question ID Functions/////////////////////////////////////////////////////////////////////////////////////////////////////

function sequencesNextNumberInteger(){
    let num1 = Math.floor((Math.random()*20)+5)
    let progression
    for(progression = Math.floor((Math.random()*20)+5); progression === num1;){
        progression = Math.floor((Math.random()*20)+5);
    }
    let num2 = num1 + progression
    let num3 = num2 + progression
    let num4 = num3 + progression
    let num5Solution = num4 + progression 

    document.getElementById("questionText").innerHTML =
    `
    <style>
    .spaceBetweenSequences{
        color: #fff
    }
    .centeredQuestion{
        text-align: center;
    }
    </style>
    What is the next number in this sequence?<br>
    <div class="centeredQuestion">
    ${num1}<span class="spaceBetweenSequences">....</span>${num2}<span class="spaceBetweenSequences">....</span>${num3}<span class="spaceBetweenSequences">....</span>
    ${num4}<span class="spaceBetweenSequences">....</span>..........<br>
    </div>
    `

    document.getElementById("solutionText").innerHTML =
    `The term to term rule is +${progression}, and the next term is ${num5Solution}`
}

function roundToPowerOfTen(){
    let num1 = Math.ceil(Math.random()*9);
    let num2 = Math.ceil(Math.random()*9);
    let num3 = Math.ceil(Math.random()*9);
    let numToBeRounded = `${num1}${num2}${num3}`; //How to concat three numbers.
    let numToBeRoundedAsInt = parseInt(numToBeRounded);
    let powerOfTenArray = [10, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 100, 1000];
    let powerOfTenChosen = powerOfTenArray[Math.floor(Math.random()*powerOfTenArray.length)];
    let roundedNumSolution = (Math.round(numToBeRoundedAsInt / powerOfTenChosen)*powerOfTenChosen)

    document.getElementById("questionText").innerHTML =
    `
    
    What is ${numToBeRounded} rounded to the nearest ${powerOfTenChosen}? <br>

    `

    document.getElementById("solutionText").innerHTML =
    `${roundedNumSolution}`
    
}

function writeNumberInFigures(){
    let numArray = ["one","two","three","four","five","six","seven","eight","nine"];
    let num1 = numArray[Math.floor(Math.random()*numArray.length)];
    let num2 = numArray[Math.floor(Math.random()*numArray.length)];
    let num1Sol
    if(num1==="one"){num1Sol=1}else if(num1==="two"){num1Sol=2}else if(num1==="three"){num1Sol=3}else if(num1==="four"){num1Sol=4}
    else if(num1==="five"){num1Sol=5}else if(num1==="six"){num1Sol=6}else if(num1==="seven"){num1Sol=7}else if(num1==="eight")
    {num1Sol=8}else if(num1==="nine"){num1Sol=9};
    let num2Sol
    if(num2==="one"){num2Sol=1}else if(num2==="two"){num2Sol=2}else if(num2==="three"){num2Sol=3}else if(num2==="four"){num2Sol=4}
    else if(num2==="five"){num2Sol=5}else if(num2==="six"){num2Sol=6}else if(num2==="seven"){num2Sol=7}else if(num2==="eight")
    {num2Sol=8}else if(num2==="nine"){num2Sol=9};

    let concatedSolution = `${num1Sol}${0}${num2Sol}`


    document.getElementById("questionText").innerHTML = 
    `Write <span style="font-weight:bold;">${num1} hundred and ${num2}</span> in figures.`

    document.getElementById("solutionText").innerHTML = 
    `${concatedSolution}`
}

function highestNumberWithDecimals(){
    let firstDigit = Math.ceil(Math.random()*9); //number between 1-9
    let secondDigit = Math.floor(Math.random()*10); //number between 0-9
    let thirdDigit = Math.floor(Math.random()*10);

    let firstDecimal09 = Math.floor(Math.random()*10);
    let firstDecimal19 = Math.ceil(Math.random()*9);
    let secondDecimal09
    for(secondDecimal09 = Math.floor(Math.random()*10); secondDecimal09===firstDecimal09;){
        secondDecimal09 = Math.floor(Math.random()*10);
    }
    let secondDecimal19 = Math.ceil(Math.random()*9);
    let thirdDecimal59 = Math.ceil(Math.random()*6)+3;
    let fourthDecimal09
    for(fourthDecimal09 = Math.floor(Math.random()*10); fourthDecimal09===secondDecimal09;){
        fourthDecimal09 = Math.floor(Math.random()*10);
    }
    let fourthDecimal19 = Math.ceil(Math.random()*9);

    let num1 = `${firstDigit}${secondDigit}${thirdDigit}.${firstDecimal09}${firstDecimal19}`
    let num2 = `${firstDigit}${secondDigit}${thirdDigit}.${secondDecimal09}${secondDecimal19}`
    let num3 = `${firstDigit}${secondDigit}${thirdDigit}.${thirdDecimal59}`
    let num4 = `${firstDigit}${secondDigit}${thirdDigit}.${fourthDecimal09}${fourthDecimal19}`

    let num1AsNumber = parseFloat(num1);
    let num2AsNumber = parseFloat(num2);
    let num3AsNumber = parseFloat(num3);
    let num4AsNumber = parseFloat(num4);

    let largestNumberSolution = Math.max(num1AsNumber,num2AsNumber,num3AsNumber,num4AsNumber);




    //Math.round((num + Number.EPSILON) * 100) / 100


    document.getElementById("questionText").innerHTML =
    `<style>
    .spaceBetweenSequences{
        color: #fff
    }
    .centeredQuestion{
        text-align: center;
    }
    </style>
    Which of these is the <span style="font-weight:bold;">highest</span> number?<br>
    <div class="centeredQuestion">${num1}<span class="spaceBetweenSequences">......</span>${num2}<span class="spaceBetweenSequences">......</span>
    ${num3}<span class="spaceBetweenSequences">......</span>${num4}
    </div>
    `

    document.getElementById("solutionText").innerHTML = 
    `${largestNumberSolution}`
}

function subtraction3DigitBy3Digit(){
    let Num1firstDigit = Math.ceil(Math.random()*3); //number between 1-3
    let Num1secondDigit = Math.floor(Math.random()*10); //number between 0-9
    let Num1thirdDigit = Math.ceil(Math.random()*9); //Max number for number to be subtracted is 399, min is 301
    let num1 = `${Num1firstDigit}${Num1secondDigit}${Num1thirdDigit}`

    let Num2firstDigit = Math.ceil(Math.random()*6)+3; //number between 4-9
    let Num2secondDigit = Math.floor(Math.random()*10); //number between 0-9
    let Num2thirdDigit = Math.floor(Math.random()*10); //Max num2 = 999, min is 400
    let num2 = `${Num2firstDigit}${Num2secondDigit}${Num2thirdDigit}`

    let num1AsNumber = parseFloat(num1);
    let num2AsNumber = parseFloat(num2);

    let subtractedSolution = num2AsNumber-num1AsNumber;

    document.getElementById("questionText").innerHTML = 
    `Subtract ${num1} from ${num2}`

    document.getElementById("solutionText").innerHTML = 
    `${subtractedSolution}`

}

/********************************************** Button functions//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

let generateQButton = document.getElementById("generateQButton");

generateQButton.onclick = function(){
    if(globalTopicAreaSelection ==="sequencesNextNumberInteger"){
        sequencesNextNumberInteger();
    } else if(globalTopicAreaSelection==="roundToPowerOfTen"){
        roundToPowerOfTen();
    } else if(globalTopicAreaSelection==="writeNumberInFigures"){
        writeNumberInFigures();
    } else if(globalTopicAreaSelection==="highestNumberWithDecimals"){
        highestNumberWithDecimals();
    } else if(globalTopicAreaSelection==="subtraction3DigitBy3Digit"){
        subtraction3DigitBy3Digit();
    }
};

let showSolutionButton = document.getElementById("showSolutionButton");

showSolutionButton.onclick = function(){
    if (showSolutionButton.innerHTML === 'Show Solution'){
        showSolutionButton.innerHTML = 'Hide solution';
        document.querySelector('.solution-box').style.display = 'block';
    } else {
        showSolutionButton.innerHTML = 'Show Solution';
        document.querySelector('.solution-box').style.display = 'none';
    };
};

function makeFullscreen(){

    if (document.getElementById("fullscreenButton").innerHTML === "Fullscreen"){
        document.querySelector(".wrapper").style.display = "none";
        document.querySelector(".question-container").style.width = "100%";
        document.querySelector(".question-container").style.marginLeft = "0";
        document.querySelector(".buttons-container").style.display = "inline-flex";
        document.querySelector(".buttons-container").style.padding = "2px 10%";
        document.querySelector(".buttons-container").style.width = "75%";
        document.querySelector(".difficultyContainer").style.width = "25%";
        document.querySelector("nav").style.display = "none";
        document.querySelector("body").style.backgroundColor = "#ddfaf1";
        document.querySelector(".wrapper").style.marginTop = "0";
        document.querySelector(".buttons-container").style.justifyContent = "space-between";
        document.getElementById("fullscreenButton").innerHTML = "Exit fullscreen";
        document.querySelector(".questionSolutionContainer").style.height = "1000px";
        document.querySelector(".questionSolutionContainer").style.backgroundColor = "#ddfaf1";
        document.querySelector(".buttonsAndPrintingContainer").style.backgroundColor = "#ddfaf1";
        //document.querySelector(".question-container").style.transition = "all 0.1s";
        //transition: width 2s, height 4s;
    }
    else {
        document.querySelector(".wrapper").style.display = "block";
        document.querySelector(".question-container").style.width = "calc(100% - 315px)";
        document.querySelector(".question-container").style.marginLeft = "315px";
        document.querySelector(".buttons-container").style.display = "block";
        document.querySelector(".buttons-container").style.padding = "1%";
        document.querySelector(".buttons-container").style.width = "100%";
        document.querySelector(".difficultyContainer").style.width = "100%";
        document.querySelector("nav").style.display = "block";
        document.querySelector(".wrapper").style.marginTop = "50px";
        document.querySelector(".buttons-container").style.justifyContent = "flex-start";
        document.getElementById("fullscreenButton").innerHTML = "Fullscreen";
        document.querySelector(".questionSolutionContainer").style.height = "100%";
        document.querySelector("body").style.backgroundColor = "#fff";
    }
}
