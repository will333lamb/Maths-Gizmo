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

function tellTheTimeOnAnalogueClock(){

    let eveningMorningArray=["Evening","Morning"];
    let eveningMorning=eveningMorningArray[Math.floor(Math.random()*eveningMorningArray.length)];
    let solutionAmPm
    if(eveningMorning==="Evening"){
        solutionAmPm="pm"
    } else if(eveningMorning==="Morning"){
        solutionAmPm="am"
    }

    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .clock{
        width: 200px;
        height: 200px;
        background-color: rgba(88, 229, 186, 0.3);
        line-height: 1;
        border-radius: 50%;
        border: 3px solid #1a3d1f;
        margin: 0 auto;
        position: relative;
        font-size: 1.2rem;
    }
    
    .clock .number{
        --rotation: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        transform: rotate(var(--rotation));
    }
    
    .clock .number1{--rotation: 30deg;}
    .clock .number2{--rotation: 60deg;}
    .clock .number3{--rotation: 90deg;}
    .clock .number4{--rotation: 120deg;}
    .clock .number5{--rotation: 150deg;}
    .clock .number6{--rotation: 180deg;}
    .clock .number7{--rotation: 210deg;}
    .clock .number8{--rotation: 240deg;}
    .clock .number9{--rotation: 270deg;}
    .clock .number10{--rotation: 300deg;}
    .clock .number11{--rotation: 330deg;}
    
    .clock .hand{
        --rotation: 0;
        position: absolute;
        bottom: 50%;
        left: 50%;
        z-index: 10;
        transform-origin: bottom;
        transform: translateX(-50%) rotate(calc(var(--rotation)*1deg));
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 2px solid #1a3d1f;
    }
    
    .clock::after{
        content: '';
        position: absolute;
        background-color: #1a3d1f;
        z-index: 12;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    
    
    .clock .hand.minute{
        width: 7px;
        height: 40%;
        z-index: 11;
        background-color: rgba(88, 229, 186, 0.7);
        --rotation: 0;
    }
    
    .clock .hand.hour{
        width: 10px;
        height: 25%;
        background-color: rgba(88, 229, 186, 0.85);
        --rotation: 270;
    }

    .centeredQuestion{
        text-align: center;
    }
    </style>
    What time does the clock show?<br><br>
    <div class="clock">
            <div class="hand hour" data-hour-hand></div>
            <div class="hand minute" data-minute-hand></div>
            <div class="number number1"><div style="transform: rotate(-30deg);">1</div></div>
            <div class="number number2"><div style="transform: rotate(-60deg);">2</div></div>
            <div class="number number3"><div style="transform: rotate(-90deg);">3</div></div>
            <div class="number number4"><div style="transform: rotate(-120deg);">4</div></div>
            <div class="number number5"><div style="transform: rotate(-150deg);">5</div></div>
            <div class="number number6"><div style="transform: rotate(-180deg);">6</div></div>
            <div class="number number7"><div style="transform: rotate(-210deg);">7</div></div>
            <div class="number number8"><div style="transform: rotate(-240deg);">8</div></div>
            <div class="number number9"><div style="transform: rotate(-270deg);">9</div></div>
            <div class="number number10"><div style="transform: rotate(-300deg);">10</div></div>
            <div class="number number11"><div style="transform: rotate(-330deg);">11</div></div>
            <div class="number number12">12</div>
    </div>
    <div class="centeredQuestion">${eveningMorning}</div>`

    let hourHand = document.querySelector('[data-hour-hand]');
    let minuteHand = document.querySelector('[data-minute-hand]');
    let rotationOptionsArray = [0,30,60,90,120,150,180,210,240,270,300,330]
    
    let chosenMinuteHandRotation = rotationOptionsArray[Math.floor(Math.random()*rotationOptionsArray.length)];

    let chosenHourHandRotation = rotationOptionsArray[Math.floor(Math.random()*rotationOptionsArray.length)];

    let additionalHourMovement
    if(chosenMinuteHandRotation===0){
        additionalHourMovement=0
    } else if(chosenMinuteHandRotation===30){
        additionalHourMovement =2.5;
    } else if(chosenMinuteHandRotation===60){
        additionalHourMovement=5;
    } else if(chosenMinuteHandRotation===90){
        additionalHourMovement=7.5;
    } else if(chosenMinuteHandRotation===120){
        additionalHourMovement=10;
    } else if(chosenMinuteHandRotation===150){
        additionalHourMovement=12.5;
    } else if(chosenMinuteHandRotation===180){
        additionalHourMovement=15;
    } else if(chosenMinuteHandRotation===210){
        additionalHourMovement=17.5;
    } else if(chosenMinuteHandRotation===240){
        additionalHourMovement=20;
    } else if(chosenMinuteHandRotation===270){
        additionalHourMovement=22.5;
    } else if(chosenMinuteHandRotation===300){
        additionalHourMovement=25;
    } else if(chosenMinuteHandRotation===330){
        additionalHourMovement=27.5
    };

    let chosenHourHandRotationPlusAdditional = chosenHourHandRotation+additionalHourMovement

    hourHand.style.setProperty('--rotation', chosenHourHandRotationPlusAdditional);
    minuteHand.style.setProperty('--rotation', chosenMinuteHandRotation);

    let solutionHour
    if(chosenHourHandRotation===0){
        solutionHour=12
    } else if(chosenHourHandRotation===30){
        solutionHour=1
    } else if(chosenHourHandRotation===60){
        solutionHour=2
    } else if(chosenHourHandRotation===90){
        solutionHour=3
    } else if(chosenHourHandRotation===120){
        solutionHour=4
    } else if(chosenHourHandRotation===150){
        solutionHour=5
    } else if(chosenHourHandRotation===180){
        solutionHour=6
    } else if(chosenHourHandRotation===210){
        solutionHour=7
    } else if(chosenHourHandRotation===240){
        solutionHour=8
    } else if(chosenHourHandRotation===270){
        solutionHour=9
    } else if(chosenHourHandRotation===300){
        solutionHour=10
    } else if(chosenHourHandRotation===330){
        solutionHour=11
    };

    let solutionMinute
    if(chosenMinuteHandRotation===0){
        solutionMinute="00"
    } else if(chosenMinuteHandRotation===30){
        solutionMinute="05"
    } else if(chosenMinuteHandRotation===60){
        solutionMinute=10
    } else if(chosenMinuteHandRotation===90){
        solutionMinute=15
    } else if(chosenMinuteHandRotation===120){
        solutionMinute=20
    } else if(chosenMinuteHandRotation===150){
        solutionMinute=25
    } else if(chosenMinuteHandRotation===180){
        solutionMinute=30
    } else if(chosenMinuteHandRotation===210){
        solutionMinute=35
    } else if(chosenMinuteHandRotation===240){
        solutionMinute=40
    } else if(chosenMinuteHandRotation===270){
        solutionMinute=45
    } else if(chosenMinuteHandRotation===300){
        solutionMinute=50
    } else if(chosenMinuteHandRotation===330){
        solutionMinute=55
    };

    document.getElementById("solutionText").innerHTML =
    `${solutionHour}:${solutionMinute} ${solutionAmPm}`

    
}

function identifyCorrectMeasuringTool(){
    let Qa = "to measure 100g sugar"; //scales
    let Qb = "to measure a persons waist"; //tape Measure
    let Qc = "to measure the length of a chocolate bar"; //ruler
    let Qd = "to measure the time taken for an athlete to run 100m"; //stopwatch
    let Qe = "to measure 250ml of water"; //measuring jug
    let Qf = "to measure 40g butter"; //scales
    let Qg = "to measure the width of a door"; //tape measure
    let Qh = "to measure the length of your finger"; //ruler
    let Qi = "to measure the time taken for a swimmer to swim 5 lengths"; //stopwatch
    let Qj = "to measure 700ml of milk"; //measuring jug
    let Qk = "to measure 5ml of medicine" // teaspoon
    let Ql = "to measure 3ml of vanilla essence" //teaspoon
    let Qm = "to measure the temperature of water in an aquarium" //thermometer
    let Qn = "to measure the temperature in a room" //thermometer
    let questionArray =[Qa,Qb,Qc,Qd,Qe,Qf,Qg,Qh,Qi,Qj,Qk,Ql,Qm,Qn]

    let chosenQuestion = questionArray[Math.floor(Math.random()*questionArray.length)];

    let a1="Scales"
    let a2="Tape Measure"
    let a3="Ruler"
    let a4="Stopwatch"
    let a5="Measuring Jug"
    let a6="Teaspoon"
    let a7="Thermometer"

    let option1
    let option2
    let option3
    let option4

    let solution
    if(chosenQuestion===Qa || chosenQuestion===Qf){
        solution=a1; //scales
        option1 = solution;
        option2 = a2;
        option3 = a3;
        option4 = a4;
    }else if(chosenQuestion===Qb || chosenQuestion===Qg){
        solution=a2; //tape measure
        option1 = a5;
        option2 = solution;
        option3 = a6;
        option4 = a7;
    }else if(chosenQuestion===Qc || chosenQuestion===Qh){
        solution=a3;//ruler
        option1 = a1;
        option2 = a2;
        option3 = solution;
        option4 = a4;
    }else if(chosenQuestion===Qd || chosenQuestion===Qi){
        solution=a4;//stopwatch
        option1 = a7;
        option2 = a5;
        option3 = a6;
        option4 = solution;
    }else if(chosenQuestion===Qe || chosenQuestion===Qj){
        solution=a5;//measuring jug
        option1 = solution;
        option2 = a7;
        option3 = a1;
        option4 = a2;
    }else if(chosenQuestion===Qk || chosenQuestion===Ql){
        solution=a6;//teaspoon
        option1 = a3;
        option2 = solution;
        option3 = a4;
        option4 = a5;
    }else if(chosenQuestion===Qm || chosenQuestion===Qn){
        solution=a7;//thermometer
        option1 = a6;
        option2 = a2;
        option3 = solution;
        option4 = a1;
    }

   
    

    

    document.getElementById("questionText").innerHTML = 
    `
    Which one of these measuring instruments is best ${chosenQuestion}?<br><br>
    <div class="centeredQuestion">
    ${option1}<span class="spaceBetween">.....</span>${option2}<span class="spaceBetween">.....</span>
    ${option3}<span class="spaceBetween">.....</span>${option4}
    </div>
    `

    document.getElementById("solutionText").innerHTML =
    `${solution}`

}

function fastestTime(){
    let randomizerArray =["FriendAOverHour","FriendABelowHour"];
    let chooseForFriendA = randomizerArray[Math.floor(Math.random()*randomizerArray.length)];
    let randomizerArrayC =["FriendCOverHour","FriendCBelowHour"];
    let chooseForFriendC = randomizerArrayC[Math.floor(Math.random()*randomizerArray.length)];

    let friendANum1 = Math.floor(Math.random()*10);
    let friendCNum1;
    for(friendCNum1 = Math.ceil(Math.random()*9); friendCNum1===friendANum1;){
        friendCNum1 = Math.ceil(Math.random()*9)
    }


    let friendATime
    let friendASolTime
    if(chooseForFriendA==="FriendAOverHour"){
        friendATime = `1 hour 1${friendANum1} minutes`
        friendASolTime = parseFloat(1 + `${1}${friendANum1}`)
    } else if(chooseForFriendA==="FriendABelowHour"){
        friendATime = `5${friendANum1} minutes`
        friendASolTime = parseFloat(`${5}${friendANum1}`)
    };

    let friendBTime
    let friendBSolTime
    if(chooseForFriendA==="FriendAOverHour"){
        friendBTime = `5${friendANum1} minutes`
        friendBSolTime = parseFloat(`${5}${friendANum1}`)
    } else if(chooseForFriendA==="FriendABelowHour"){
        friendBTime = `1 hour 1${friendANum1} minutes`
        friendBSolTime = parseFloat(1+`${1}${friendANum1}`)
    }

    let friendCTime
    let friendCSolTime
    if(chooseForFriendC==="FriendCOverHour"){
        friendCTime = `1 hour ${friendCNum1} minutes`
        friendCSolTime = parseFloat(1+`${0}${friendCNum1}`)
    } else if(chooseForFriendC==="FriendCBelowHour"){
        friendCTime = `5${friendCNum1} minutes`
        friendCSolTime = parseFloat(`${5}${friendCNum1}`)
    };

    let friendDTime
    let friendDSolTime
    if(chooseForFriendC==="FriendCOverHour"){
        friendDTime = `5${friendCNum1} minutes`
        friendDSolTime = parseFloat(`${5}${friendCNum1}`)
    } else if(chooseForFriendC==="FriendCBelowHour"){
        friendDTime = `1 hour ${friendCNum1} minutes`
        friendDSolTime = parseFloat(1+`${0}${friendCNum1}`)
    }

    let solutionFastestFriendNum = Math.min(friendASolTime,friendBSolTime,friendCSolTime,friendDSolTime)
    let solutionFastestFriend
    if(solutionFastestFriendNum===friendASolTime){
        solutionFastestFriend = "Friend A"
    } else if(solutionFastestFriendNum===friendBSolTime){
        solutionFastestFriend = "Friend B"
    } else if(solutionFastestFriendNum===friendCSolTime){
        solutionFastestFriend = "Friend C"
    } else if(solutionFastestFriendNum===friendDSolTime){
        solutionFastestFriend = "Friend D"
    }

    document.getElementById("questionText").innerHTML = 
    `At a charity Fun Race event, four friends finished the race in the following times.<br><br>
    Friend A: ${friendATime}<br>
    Friend B: ${friendBTime}<br>
    Friend C: ${friendCTime}<br>
    Friend D: ${friendDTime}<br><br>
    Who had the fastest time?
    `
    document.getElementById("solutionText").innerHTML = 
    `${solutionFastestFriend} is the fastest at ${solutionFastestFriendNum} minutes`
}

function completeFrequencyTable(){

    let eventsArray=["Fun Fair","Marathon","Quiz","Street Party","Talent Show"];

    let FirstTableArray=[eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]
    ,eventsArray[Math.floor(Math.random()*eventsArray.length)],eventsArray[Math.floor(Math.random()*eventsArray.length)]]
    
    let funFairCount = FirstTableArray.filter(x => x === "Fun Fair").length
    let marathonCount = FirstTableArray.filter(x => x === "Marathon").length
    let quizCount = FirstTableArray.filter(x => x === "Quiz").length
    let streetPartyCount = FirstTableArray.filter(x => x === "Street Party").length
    let talentShowCount = FirstTableArray.filter(x => x === "Talent Show").length

    document.getElementById("questionText").innerHTML = 
    `
    <style>
    table{
        width: 100%;
        font-size: 1rem;
    }
    td {
        outline: 1px solid black;
        text-align: center;
        width: 20%;
    }
    th{
        outline: 1px solid black;
        text-align: center;
    }
    </style>
    An organiser keeps a record of the different types of community events that took place over the summer.<br>
    She started to put this information into a frequency table to report it at a meeting.<br>
    <table>
    <tr>
    <td>${FirstTableArray[0]}</td><td>${FirstTableArray[1]}</td>
    <td>${FirstTableArray[2]}</td><td>${FirstTableArray[3]}</td>
    <td>${FirstTableArray[4]}</td>
    </tr>
    <tr>
    <td>${FirstTableArray[5]}</td><td>${FirstTableArray[6]}</td>
    <td>${FirstTableArray[7]}</td><td>${FirstTableArray[8]}</td>
    <td>${FirstTableArray[9]}</td>
    </tr>
    <tr>
    <td>${FirstTableArray[10]}</td><td>${FirstTableArray[11]}</td>
    <td>${FirstTableArray[12]}</td><td>${FirstTableArray[13]}</td>
    <td>${FirstTableArray[14]}</td>
    </tr>
    <tr>
    <td>${FirstTableArray[15]}</td><td>${FirstTableArray[16]}</td>
    <td>${FirstTableArray[17]}</td><td>${FirstTableArray[18]}</td>
    <td>${FirstTableArray[19]}</td>
    </tr>
    <tr>
    <td>${FirstTableArray[20]}</td><td>${FirstTableArray[21]}</td>
    <td>${FirstTableArray[22]}</td><td>${FirstTableArray[23]}</td>
    <td>${FirstTableArray[24]}</td>
    </tr>
    </table>
    <br>
    <table>
    <tr>
    <th>Community Event</th>
    <th>Frequency</th>
    </tr>
    <tr>
    <td>Fun Fair</td><td>${funFairCount}</td>
    </tr>
    <tr>
    <td>Marathon</td><td>${marathonCount}</td>
    </tr>
    <tr>
    <td>Street Party</td><td>${streetPartyCount}</td>
    </tr>
    <tr>
    <td>Quiz</td><td></td>
    </tr>
    <tr>
    <td>Talent Show</td><td></td>
    </tr>
    </table>
    <br>
    Complete the frequency table`

    document.getElementById("solutionText").innerHTML = 
    `Quiz = ${quizCount} and Talent Show = ${talentShowCount}`
}

function interpretBarChart(){

    let dataSpringFair = Math.floor(Math.random()*1000);
    let dataCricketMatch = Math.floor(Math.random()*1000);
    let dataStreetParty = Math.floor(Math.random()*1000);
    let dataSummerBall = Math.floor(Math.random()*1000);

    let mostPopularEventNum = Math.max(dataSpringFair,dataCricketMatch,dataStreetParty,dataSummerBall);
    let mostPopularEvent
    let secondMostPopularEventNum
    let secondMostPopularEvent
    if(mostPopularEventNum===dataSpringFair){
        mostPopularEvent="Spring Fair"
        secondMostPopularEventNum = Math.max(dataCricketMatch,dataStreetParty,dataSummerBall);
        if(secondMostPopularEventNum===dataCricketMatch){
            secondMostPopularEvent="Cricket Match"
        } else if(secondMostPopularEventNum===dataStreetParty){
            secondMostPopularEvent="Street Party"
        } else if(secondMostPopularEventNum===dataSummerBall){
            secondMostPopularEvent="Summer Ball"
        }
    } else if(mostPopularEventNum===dataCricketMatch){
        mostPopularEvent="Cricket Match"
        secondMostPopularEventNum = Math.max(dataSpringFair,dataStreetParty,dataSummerBall);
        if(secondMostPopularEventNum===dataSpringFair){
            secondMostPopularEvent="Spring Fair"
        } else if(secondMostPopularEventNum===dataStreetParty){
            secondMostPopularEvent="Street Party"
        } else if(secondMostPopularEventNum===dataSummerBall){
            secondMostPopularEvent="Summer Ball"
        }
    } else if(mostPopularEventNum===dataStreetParty){
        mostPopularEvent="Street Party"
        secondMostPopularEventNum = Math.max(dataSpringFair,dataCricketMatch,dataSummerBall);
        if(secondMostPopularEventNum===dataCricketMatch){
            secondMostPopularEvent="Cricket Match"
        } else if(secondMostPopularEventNum===dataSpringFair){
            secondMostPopularEvent="Spring Fair"
        } else if(secondMostPopularEventNum===dataSummerBall){
            secondMostPopularEvent="Summer Ball"
        }
    } else if(mostPopularEventNum===dataSummerBall){
        mostPopularEvent="Summer Ball"
        secondMostPopularEventNum = Math.max(dataSpringFair,dataCricketMatch,dataStreetParty);
        if(secondMostPopularEventNum===dataCricketMatch){
            secondMostPopularEvent="Cricket Match"
        } else if(secondMostPopularEventNum===dataStreetParty){
            secondMostPopularEvent="Street Party"
        } else if(secondMostPopularEventNum===dataSpringFair){
            secondMostPopularEvent="Spring Fair"
        }
    }

    document.getElementById("questionText").innerHTML = 
    `<style>

    @media only screen and (min-width: 800px) {
    .barChartContainer{
        width: 30%;
        margin: 0 auto;
    }
    
    .barChartContainerChild{
        width: 100%;
        min-width: 315px;
    }
    }

    @media only screen and (max-width: 800px) {
        .barChartContainer{
            width: 85%;
            margin: 0 auto;
        }
        
        .barChartContainerChild{
            width: 100%;
            
        }
    }
    </style>
    
    This chart shows the numbers of people attending different community events last year.<br>
    <div class="barChartContainer">
        <div class="barChartContainerChild">
            <canvas id="FSBarChart" width="10" height="10"></canvas>
        </div>
    </div><br>
    Which two events had the highest number of people attending?`

    document.getElementById("solutionText").innerHTML = 
    `${mostPopularEvent} and ${secondMostPopularEvent}`

    const ctx = document.getElementById('FSBarChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Spring Fair', 'Cricket Match', 'Street Party', 'Summer Ball'],
        datasets: [{
            label: 'Community Events',
            data: [dataSpringFair,dataCricketMatch,dataStreetParty,dataSummerBall],
            backgroundColor: [
                'rgba(88, 229, 186, 0.5)',
                'rgba(88, 229, 186, 0.5)',
                'rgba(88, 229, 186, 0.5)',
                'rgba(88, 229, 186, 0.5)',
            ],
            borderColor: [
                'rgba(88, 229, 186, 1)',
                'rgba(88, 229, 186, 1)',
                'rgba(88, 229, 186, 1)',
                'rgba(88, 229, 186, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        duration: 0
    }
});
}

function fractionShadedOfShape(){

    let row3YayOrNayArray = [0,1];
    let oneToFiveArray = [1,2,3,4];
    let zeroToFiveArray = [0,1,2,3,4,5];
    function row3YayOrNay(){
    YayOrNay = row3YayOrNayArray[Math.floor(Math.random()*row3YayOrNayArray.length)];
    YayOrNay2 = row3YayOrNayArray[Math.floor(Math.random()*row3YayOrNayArray.length)];
    
    
    row1ShadedNum = oneToFiveArray[Math.floor(Math.random()*oneToFiveArray.length)];
    if(row1ShadedNum===1){
        document.getElementById("row1data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row1ShadedNum===2){
        document.getElementById("row1data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row1data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row1ShadedNum===3){
        document.getElementById("row1data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row1data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row1data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row1ShadedNum===4){
        document.getElementById("row1data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row1data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row1data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row1data4").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    }

    row2ShadedNum = zeroToFiveArray[Math.floor(Math.random()*zeroToFiveArray.length)];
    if(row2ShadedNum===1){
        document.getElementById("row2data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row2ShadedNum===2){
        document.getElementById("row2data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row2ShadedNum===3){
        document.getElementById("row2data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row2ShadedNum===4){
        document.getElementById("row2data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data4").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row2ShadedNum===5){
        document.getElementById("row2data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data4").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row2data5").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    }

    row3ShadedNum = zeroToFiveArray[Math.floor(Math.random()*zeroToFiveArray.length)];
    if(row3ShadedNum===1){
        document.getElementById("row3data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row3ShadedNum===2){
        document.getElementById("row3data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row3ShadedNum===3){
        document.getElementById("row3data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row3ShadedNum===4){
        document.getElementById("row3data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data4").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    } else if(row3ShadedNum===5){
        document.getElementById("row3data1").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data2").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data3").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data4").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
        document.getElementById("row3data5").style.backgroundColor = "rgba(88, 229, 186, 0.5)"
    }

    if(YayOrNay===0){
        document.getElementById("row3").style.display = "none"
        row3ShadedNum=0
    }
    if(YayOrNay2===0){
        document.getElementById("row2").style.display = "none"
        row2ShadedNum=0
    }


    let denominatorSolution
    if(YayOrNay===0 && YayOrNay2===0){
        denominatorSolution=5
    } else if(YayOrNay2===0 && YayOrNay===1){
        denominatorSolution=10
    } else if(YayOrNay2===1 && YayOrNay===0){
        denominatorSolution=10
    } else if(YayOrNay2===1 && YayOrNay===1){
        denominatorSolution=15
    }

    let numeratorSolution = row1ShadedNum+row2ShadedNum+row3ShadedNum
    
    document.getElementById("solutionText").innerHTML =
    ` ${numeratorSolution} &frasl; ${denominatorSolution}<br><br>
    
    `

    }

    

    document.getElementById("questionText").innerHTML = 
    `<style>
    table{
        border: 1px solid #009870;
        border-collapse: collapse;
        font-size: 1em;
        width: 80%;
        white-space: pre-line;
        line-height: 1.5;
    }
    td{
        border: 1px solid #009870;
    }
    
    </style>
    What fraction of this shape is shaded?<br><br>
    <div class="centeredTable">
    <table>
        <tr id="row1">
            <td id="row1data1"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row1data2"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row1data3"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row1data4"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row1data5"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
        </tr>
        <tr id="row2">
            <td id="row2data1"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row2data2"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row2data3"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row2data4"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row2data5"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
        </tr>
        <tr id="row3">
            <td id="row3data1"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row3data2"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row3data3"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row3data4"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
            <td id="row3data5"><span class="spaceBetweenTable">&nbsp&nbsp&nbsp&nbsp&nbsp</span></td>
        </tr>
    </table>
    </div>`

    
    row3YayOrNay();

    
}

function sequencesNextNumberDecimal(){
    let num1 = Math.floor((Math.random()*20)+10) /10
    let num1String = `${num1.toFixed(1)}`
    let progression
    for(progression = Math.floor((Math.random()*20)+5)/10; progression === num1;){
        progression = Math.floor((Math.random()*20)+5)/10;
    }
    if(progression===2 || progression===1){
        progression = progression+0.1
    }
    let num2 = num1 + progression
    let num2String = `${num2.toFixed(1)}`
    let num3 = num2 + progression
    let num3String = `${num3.toFixed(1)}`
    let num4 = num3 + progression
    let num4String = `${num4.toFixed(1)}`
    let num5Solution = num4 + progression
    let num5SolutionString = `${num5Solution.toFixed(1)}`

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
    ${num1String}<span class="spaceBetweenSequences">....</span>${num2String}<span class="spaceBetweenSequences">....</span>${num3String}<span class="spaceBetweenSequences">....</span>
    ${num4String}<span class="spaceBetweenSequences">....</span>..........<br>
    </div>
    `

    document.getElementById("solutionText").innerHTML =
    `The term to term rule is +${progression}, and the next term is ${num5SolutionString}`
}

function roundingMoney(){
    let num1 = `${(Math.ceil((Math.random()*900)+100)/10).toFixed(1)}${Math.ceil(Math.random()*9)}`
    let num1AsNumber = parseFloat(num1);
    let roundingToArray = ["pound", "10p"];
    let roundTo = roundingToArray[Math.floor(Math.random()*roundingToArray.length)];

    let solutionRounded
    if(roundTo==="pound"){
        solutionRounded = num1AsNumber.toFixed(0)
    } else{
        solutionRounded = `${num1AsNumber.toFixed(1)}0`
    }

    document.getElementById("questionText").innerHTML = 
    `What is £${num1} rounded to the nearest ${roundTo}`

    document.getElementById("solutionText").innerHTML = 
    `£${solutionRounded}`
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
    } else if(globalTopicAreaSelection==="tellTheTimeOnAnalogueClock"){
        tellTheTimeOnAnalogueClock();
    } else if(globalTopicAreaSelection==="identifyCorrectMeasuringTool"){
        identifyCorrectMeasuringTool();
    } else if(globalTopicAreaSelection==="fastestTime"){
        fastestTime();
    } else if(globalTopicAreaSelection==="completeFrequencyTable"){
        completeFrequencyTable();
    } else if(globalTopicAreaSelection==="interpretBarChart"){
        interpretBarChart();
    } else if(globalTopicAreaSelection==="fractionShadedOfShape"){
        fractionShadedOfShape();
    } else if(globalTopicAreaSelection==="sequencesNextNumberDecimal"){
        sequencesNextNumberDecimal();
    } else if(globalTopicAreaSelection==="roundingMoney"){
        roundingMoney();
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
