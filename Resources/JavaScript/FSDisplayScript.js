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

let allNamesArray = [[maleNameArray, "he"],[femaleNameArray,"she"]];

let questionText = document.getElementById("questionText");
let solutionText = document.getElementById("solutionText");

let nonCalcSign = `<span class="fa-stack fa-2x" style="font-size: 1rem;">
<i class="fas fa-calculator fa-stack-1x"></i>
<i id="banSign" class="fas fa-ban fa-stack-2x"></i>
</span><br>`

let calcSign = `<i class="fas fa-calculator"></i>
<i id="checkSign" class="fas fa-check"></i><br>`

//Other Functions

function getSelectedTopicArea(){
    globalTopicAreaSelection = document.getElementById("topicAreaSelect").value;
};

function toDataURL(src, callback) {
    var image = new Image();
    image.crossOrigin = 'Anonymous';
 
    image.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        context.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };

    image.src = src;
}

        
//Question ID Functions/////////////////////////////////////////////////////////////////////////////////////////////////////

//Entry 3 *////////////////////////////////////////////////////////////////////////////////
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

function bestValueTables(){

    let smallCostPenceArray = [25, 50, 75]
    let smallTableCost = `${Math.ceil(Math.random()*5)+1}.${smallCostPenceArray[Math.floor(Math.random()*smallCostPenceArray.length)]}`
    let smallTableCostAsNum = parseFloat(smallTableCost);
    let lengthToBeCoveredArray = [4,6,8,10,12,14,16,18,20]
    let lengthToBeCovered = lengthToBeCoveredArray[Math.floor(Math.random()*lengthToBeCoveredArray.length)];
    let totalCostSmallTable = smallTableCostAsNum*lengthToBeCovered
    let largeTableLength20Array=[4,5]
    let largeTableLength12Array=[3,4]
    if(lengthToBeCovered===4 || lengthToBeCovered===6 || lengthToBeCovered===14 || lengthToBeCovered===18){
        largeTableLength = 2;
    } else if(lengthToBeCovered===8 || lengthToBeCovered===16){
        largeTableLength = 4;
    } else if(lengthToBeCovered===10){
        largeTableLength = 5;
    } else if(lengthToBeCovered===12){
        largeTableLength = largeTableLength12Array[Math.floor(Math.random()*largeTableLength12Array.length)]
    } else if(lengthToBeCovered===20){
        largeTableLength = largeTableLength20Array[Math.floor(Math.random()*largeTableLength20Array.length)]
    }
    let largeTableCostHelperArray = [0.25, -0.25, 0.5, -0.5, 0.75, -0.75]
    let largeTableCostHelper = largeTableCostHelperArray[Math.floor(Math.random()*largeTableCostHelperArray.length)]
    let largeTablecost = smallTableCostAsNum*largeTableLength+largeTableCostHelper
    let solutionBestValue
    if(largeTableCostHelper>0){
        solutionBestValue = "small table"
    } else{
        solutionBestValue = "large table"
    }

    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .tableCostsContainer{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .tableInfoBox{
        border: 1px solid black;
        width: 25%;
        text-align: center;
        overflow: overlay;
    }
    </style>
    A youth club plans to hold a Charity Sale.<br>
    People hire tables to sell things from. <br>
    The youth club has these different size tables.<br>
    <div class="tableCostsContainer">
        <div class="tableInfoBox">
        Small table<br>
        £${smallTableCost}<br>
        1m
        </div>
        <div class="tableInfoBox">
        Large table<br>
        £${largeTablecost.toFixed(2)}<br>
        ${largeTableLength}m
        </div>
    </div>
    <br>
    A man wants to hire tables to cover a length of ${lengthToBeCovered} metres.<br>
    Which tables would be cheapest for him to hire?`

    document.getElementById("solutionText").innerHTML = 
    `Small tables: £${smallTableCost}&times;${lengthToBeCovered} = £${totalCostSmallTable.toFixed(2)}<br>
    Large tables: £${largeTablecost.toFixed(2)}&times;${lengthToBeCovered / largeTableLength} = £${(largeTablecost*lengthToBeCovered/largeTableLength).toFixed(2)}
    <br> Therefore the cheapest tables for him to hire are the ${solutionBestValue}s`
}

function fourOpsWordedQuestion(){

    let image4Cups = "../Resources/Images/FS Q's/green stacked cups original 4.png";
    let image5Cups = "../Resources/Images/FS Q's/green stacked cups original 5.png";
    let image6Cups = "../Resources/Images/FS Q's/green stacked cups original 6.png";
    let image7Cups = "../Resources/Images/FS Q's/green stacked cups original 7.png";
    let image8Cups = "../Resources/Images/FS Q's/green stacked cups original 8.png";
    let image9Cups = "../Resources/Images/FS Q's/green stacked cups original 9.png";
    let imageCupsArray = [image4Cups,image5Cups,image6Cups,image7Cups,image8Cups,image9Cups];
    let chosenImageCups = imageCupsArray[Math.floor(Math.random()*imageCupsArray.length)];

    toDataURL(chosenImageCups, function(dataURL) {
        let cupBoxes = document.querySelectorAll(".cups");

        cupBoxes.forEach((e) => {
            e.style.backgroundImage =  `url('${dataURL}')`
        }) // loop through for every element of .cups
    })

    toDataURL("../Resources/Images/FS Q's/Sugar.png", function(dataURL) {
        document.querySelector(".sugar").style.backgroundImage = `url('${dataURL}')`
    })

    toDataURL("../Resources/Images/FS Q's/Spoon of sugar.png", function(dataURL) {
        document.querySelector(".sugarSpoon").style.backgroundImage = `url('${dataURL}')`
    })

    toDataURL("../Resources/Images/FS Q's/Milk cartons.png", function(dataURL) {
        document.querySelector(".milkCartons").style.backgroundImage = `url('${dataURL}')`
    })

    let sugarAmountArray=[500, 750, 1];
    let chosenSugarAmount = sugarAmountArray[Math.floor(Math.random()*sugarAmountArray.length)];
    let gramOrKg
    let chosenSugarAmountGrams
    if(chosenSugarAmount===1){
        gramOrKg = "kg";
        chosenSugarAmountGrams = 1000;
    } else if(chosenSugarAmount===500){
        gramOrKg = "g";
        chosenSugarAmountGrams = 500;
    } else if(chosenSugarAmount===750){
        gramOrKg = "g";
        chosenSugarAmountGrams = 750;
    }

    let howManyBoxesArray = [6,7,8,9,10,11,12];
    let howManyBoxes = howManyBoxesArray[Math.floor(Math.random()*howManyBoxesArray.length)];
    let cupsPerBox
    if(chosenImageCups===image4Cups){
        cupsPerBox=4
    } else if(chosenImageCups===image5Cups){
        cupsPerBox=5
    } else if(chosenImageCups===image6Cups){
        cupsPerBox=6
    } else if(chosenImageCups===image7Cups){
        cupsPerBox=7
    } else if(chosenImageCups===image8Cups){
        cupsPerBox=8
    } else if(chosenImageCups===image9Cups){
        cupsPerBox=9
    }

    let totalNumCups = cupsPerBox*howManyBoxes

    let numCupsNeededArray = [150,160,170,180,190,200]
    let chosenCupsNeeded = numCupsNeededArray[Math.floor(Math.random()*numCupsNeededArray.length)]
    let solutionCupsNeeded = chosenCupsNeeded-totalNumCups

    let sugarWeight = Math.floor(Math.random()*4)+4
    let gramsSugarNeeded = sugarWeight*chosenCupsNeeded;
    let numBagsNeeded
    if(chosenSugarAmount===1){
        numBagsNeeded = Math.ceil(gramsSugarNeeded / 1000)
    } else if(chosenSugarAmount===500){
        numBagsNeeded = Math.ceil(gramsSugarNeeded / 500)
    } else if(chosenSugarAmount===750){
        numBagsNeeded = Math.ceil(gramsSugarNeeded / 750)
    };

    let bagOrBags
    if(numBagsNeeded===1){
        bagOrBags = "bag";
    } else {
        bagOrBags = "bags"
    }

    let amountOfMilkArray = ["400ml", "450ml","600ml","700ml","900ml","850ml","1.2 litres", "1.5 litres"];
    let amountOfMilkChosen = amountOfMilkArray[Math.floor(Math.random()*amountOfMilkArray.length)];
    let bestMilk
    if(amountOfMilkChosen==="400ml" || amountOfMilkChosen==="450ml"){
        bestMilk = "A: 500ml carton";
    } else if(amountOfMilkChosen==="600ml" || amountOfMilkChosen==="700ml"){
        bestMilk = "C: 750ml carton";
    } else if(amountOfMilkChosen==="900ml" || amountOfMilkChosen==="850ml"){
        bestMilk = "D: 1 litre carton";
    } else if(amountOfMilkChosen==="1.2 litres" || amountOfMilkChosen==="1.5 litres"){
        bestMilk = "B: 2 litre carton";
    }

    document.getElementById("questionText").innerHTML = 
    `<style>
    .cupsContainer{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .cups{
        width: 100px;
        height: 140px;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .sugar{
        width: 100px;
        height: 140px;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
    }

    .milkCartons{
        min-width: 600px;
        height: 300px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    #amountOfSugar{
        bottom: 0;
        font-size: 0.5em;
        position: absolute;
        left: 25px;
        font-weight: bold;
    }

    .sugarContainer{
        display: flex;
    }

    .sugarSpoonContainer{
        padding-left: 150px;
    }

    .sugarSpoon{
        width: auto;
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media only screen and (max-width: 800px) {
        .cups{
            width: 70px;
            height: 100px;
            background-repeat: no-repeat;
            background-size: contain;
        }

        .milkCartons{
            width: 250px;
            height: 100px;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    </style>
    A playgroup plans to hold a Coffee Morning to raise money.<br>
    The play leader needs to buy more cups, sugar and milk.<br>
    She says we need ${chosenCupsNeeded} cups.<br> 
    They have these cups.<br>
    <div class="cupsContainer">
        <div class="cups"></div><div class="cups"></div><div class="cups"></div><div class="cups"></div><div class="cups"></div><div class="cups"></div>
    </div>
    <div class="cupsContainer">
        <div id="disapear1" class="cups"></div><div id="disapear2" class="cups"></div><div id="disapear3" class="cups"></div><div id="disapear4" class="cups"></div>
        <div id="disapear5" class="cups"></div><div id="disapear6" class="cups"></div>
    </div><br>
    a) How many more cups do they need?<br>
    <br>
    She needs to work out how many bags of sugar she needs for ${chosenCupsNeeded} cups.<br>
    She allows <span style="font-weight:bold;"> one spoonful of sugar</span> for each cup.<br>
    <div class="sugarContainer">
        <div class="sugar">
            <p id="amountOfSugar">${chosenSugarAmount}${gramOrKg}</p>
        </div>
        <div class="sugarSpoonContainer">
            <div class="sugarSpoon"></div>
            <p>One spoon of sugar weighs ${sugarWeight} grams</p>
        </div>
    </div><br>
    b) How many bags of sugar should the leader buy?<br><br>
    The play leader works out she needs ${amountOfMilkChosen} of milk.<br>
    <div class=milkCartons>
    </div>
    <br>
    c) Which size milk should she buy? <span style="font-weight:bold;"> Tick one</span>

    `

    document.getElementById("solutionText").innerHTML =
    `a) There are ${cupsPerBox} cups per stack and there is ${howManyBoxes} stacks. Therefore, ${cupsPerBox} &times; ${howManyBoxes} = ${totalNumCups}<br>
    So there are ${totalNumCups} cups at the moment. ${chosenCupsNeeded} - ${totalNumCups} = ${solutionCupsNeeded}.<br>
    So ${solutionCupsNeeded} cups are needed.<br><br>
    b) ${sugarWeight} grams &times; ${chosenCupsNeeded} cups = ${gramsSugarNeeded} grams of sugar needed.<br>
    ${gramsSugarNeeded}g &divide; ${chosenSugarAmountGrams}g = ${(gramsSugarNeeded / chosenSugarAmountGrams).toFixed(2)} Therefore they need to buy ${numBagsNeeded} ${bagOrBags}.
    <br><br>
    c) ${bestMilk}`

    if(howManyBoxes===6){
        document.getElementById("disapear1").style.display = "none"
        document.getElementById("disapear2").style.display = "none"
        document.getElementById("disapear3").style.display = "none"
        document.getElementById("disapear4").style.display = "none"
        document.getElementById("disapear5").style.display = "none"
        document.getElementById("disapear6").style.display = "none"
    } else if(howManyBoxes===7){
        document.getElementById("disapear2").style.display = "none"
        document.getElementById("disapear3").style.display = "none"
        document.getElementById("disapear4").style.display = "none"
        document.getElementById("disapear5").style.display = "none"
        document.getElementById("disapear6").style.display = "none"
    } else if(howManyBoxes===8){
        document.getElementById("disapear3").style.display = "none"
        document.getElementById("disapear4").style.display = "none"
        document.getElementById("disapear5").style.display = "none"
        document.getElementById("disapear6").style.display = "none"
    } else if(howManyBoxes===9){
        document.getElementById("disapear4").style.display = "none"
        document.getElementById("disapear5").style.display = "none"
        document.getElementById("disapear6").style.display = "none"
    } else if(howManyBoxes===10){
        document.getElementById("disapear5").style.display = "none"
        document.getElementById("disapear6").style.display = "none"
    } else if(howManyBoxes===11){
        document.getElementById("disapear6").style.display = "none"
    }

}

function scaleDrawings(){
    let imageOption1 = "../Resources/Images/FS Q's/TablesChairsPlanQOption1.png"
    let imageOption2 = "../Resources/Images/FS Q's/TablesChairsPlanQOption2.png"
    let imageOption3 = "../Resources/Images/FS Q's/TablesChairsPlanQOption3.png"
    let imageOption4 = "../Resources/Images/FS Q's/TablesChairsPlanQOption4.png"
    let imageOption5 = "../Resources/Images/FS Q's/TablesChairsPlanQOption5.png"
    let imageOption6 = "../Resources/Images/FS Q's/TablesChairsPlanQOption6.png"
    let imageOption7 = "../Resources/Images/FS Q's/TablesChairsPlanQOption7.png"
    let imageOption8 = "../Resources/Images/FS Q's/TablesChairsPlanQOption8.png"

    let imageOption1S = "../Resources/Images/FS Q's/TablesChairsPlanQOption1Solution.png"
    let imageOption2S = "../Resources/Images/FS Q's/TablesChairsPlanQOption2Solution.png"
    let imageOption3S = "../Resources/Images/FS Q's/TablesChairsPlanQOption3Solution.png"
    let imageOption4S = "../Resources/Images/FS Q's/TablesChairsPlanQOption4Solution.png"
    let imageOption5S = "../Resources/Images/FS Q's/TablesChairsPlanQOption5Solution.png"
    let imageOption6S = "../Resources/Images/FS Q's/TablesChairsPlanQOption6Solution.png"
    let imageOption7S = "../Resources/Images/FS Q's/TablesChairsPlanQOption7Solution.png"
    let imageOption8S = "../Resources/Images/FS Q's/TablesChairsPlanQOption8Solution.png"

    let imageOptionsArray = [[imageOption1,imageOption1S],[imageOption2,imageOption2S],[imageOption3,imageOption3S],[imageOption4,imageOption4S]
    ,[imageOption5,imageOption5S],[imageOption6,imageOption6S],[imageOption7,imageOption7S],[imageOption8,imageOption8S]];
    let chosenImage = imageOptionsArray[Math.floor(Math.random()*imageOptionsArray.length)];
    

    toDataURL(chosenImage[0], function(dataURL) {
        document.getElementById("tablesChairsPlanImage").src = dataURL
    })

    toDataURL(chosenImage[1], function(dataURL) {
        document.getElementById("solutionPlan").src = dataURL
    })


    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .tablesChairsPlanImage{
        width: 50%;
        height: 50%;
        margin: 0 25%;
    }


    @media only screen and (max-width: 800px) {
        .tablesChairsPlanImage{
            width: 90%;
            height: auto;
            margin: 0 auto;
        }
    }
    </style>
    There will be Afternoon Tea at the community centre. <br>
    The organiser needs to set up the room.<br>
    He starts to draw a plan to show where he wants the tables and chairs to go. <br>
    He needs <span style="font-weight: bold;">two more tables and eight chairs.</span><br>
    They need to be the same size and the same distance apart as the others.<br>
    <div class="centeredQuestion">
    <span style="font-weight:bold;">Plan of the room</span><br>
        <img id="tablesChairsPlanImage" class="tablesChairsPlanImage" src="" alt="image showing plan of room">
    </div>
    Complete the plan to show where the tables and chairs will go. 
    `

    document.getElementById("solutionText").innerHTML = 
    `
    <img id="solutionPlan" class="tablesChairsPlanImage" src="">
    `
}

function compassDirections(){
    let compassNorthWest = "../Resources/Images/FS Q's/compassDirectionNorthWest.png"
    let compassNorth = "../Resources/Images/FS Q's/compassDirectionsNorth.png"
    let compassNorthEast = "../Resources/Images/FS Q's/compassDirectionsNorthEast.png"
    let compassSouthEast = "../Resources/Images/FS Q's/compassDirectionsSouthEast.png"
    let compassSouth = "../Resources/Images/FS Q's/compassDirectionsSouth.png"
    let compassSouthWest = "../Resources/Images/FS Q's/compassDirectionsSouthWest.png"
    let compassWest = "../Resources/Images/FS Q's/compassDirectionsWest.png"
    let compassArray = [compassNorthWest,compassNorth,compassNorthEast,compassSouthEast,compassSouth,compassSouthWest,compassWest];
    let chosenCompassImage = compassArray[Math.floor(Math.random()*compassArray.length)];

    toDataURL(chosenCompassImage, function(dataURL) {
        document.getElementById("compassDirections").src = dataURL
    })

    let solutionCompassDirection
    if(chosenCompassImage===compassNorthWest){
        solutionCompassDirection="North West"
    } else if(chosenCompassImage===compassNorth){
        solutionCompassDirection="North"
    } else if(chosenCompassImage===compassNorthEast){
        solutionCompassDirection="North East"
    } else if(chosenCompassImage===compassSouthEast){
        solutionCompassDirection="South East"
    } else if(chosenCompassImage===compassSouth){
        solutionCompassDirection="South"
    } else if(chosenCompassImage===compassSouthWest){
        solutionCompassDirection="South West"
    } else if(chosenCompassImage===compassWest){
        solutionCompassDirection="West"
    } 


    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .compassDirections{
        width: 65%;
        height: auto;
        margin: 0 12.5%;
        border: 5px solid black;
    }

    @media only screen and (max-width: 800px) {
        .compassDirections{
            width: 90%;
            height: auto;
            border: 5px solid black;
            margin: 0;
        }
    }
    </style>
    A scout group organises a Treasure Hunt.<br>
    People will follow directions to look for clues and then answer questions. <br>
    A group of friends decide to take part.<br>
    Here is the direction to Clue One.<br>
    <div class=centeredQuestion">
    <img id="compassDirections" class="compassDirections" src="" alt="map showing direction to clue one">
    </div>
    In which direction is Clue One?
    `

    document.getElementById("solutionText").innerHTML = 
    `${solutionCompassDirection}`
}

function linesOfSymmetry(){

    // 0 Lines of Symmetry
    let letterFImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/F.png"
    let letterGImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/G.png"
    let letterJImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/J.png"
    let letterLImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/L.png"
    let letterNImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/N.png"
    let letterPImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/P.png"
    let letterQImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/Q.png"
    let letterRImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/R.png"
    let letterSImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/S.png"
    let letterZImage = "../Resources/Images/FS Q's/LettersLOS/0 Line of symmetry/Z.png"
    let zeroLOSArray = [[letterFImage,"F"],[letterGImage,"G"],[letterJImage,"J"],[letterLImage,"L"],[letterNImage,"N"],[letterPImage,"P"],[letterQImage,"Q"],[letterRImage,"R"],[letterSImage,"S"],[letterZImage,"Z"]];
    let chosenZeroArrayOptions = zeroLOSArray[Math.floor(Math.random()*zeroLOSArray.length)];
    for(chosen4thZeroLOS=zeroLOSArray[Math.floor(Math.random()*zeroLOSArray.length)]; chosen4thZeroLOS===chosenZeroArrayOptions;){
        chosen4thZeroLOS=zeroLOSArray[Math.floor(Math.random()*zeroLOSArray.length)];
    }
    
    // 1 Line of Symmetry
    let letterAImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/A.png"
    let letterCImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/C.png"
    let letterDImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/D.png"
    let letterEImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/E.png"
    let letterKImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/K.png"
    let letterMImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/M.png"
    let letterTImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/T.png"
    let letterUImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/U.png"
    let letterVImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/V.png"
    let letterWImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/W.png"
    let letterYImage = "../Resources/Images/FS Q's/LettersLOS/1 Line of symmetry/Y.png"
    let oneLOSArray = [[letterAImage,"A"],[letterCImage,"C"],[letterDImage,"D"],[letterEImage,"E"],[letterKImage,"K"],[letterMImage,"M"],[letterTImage,"T"],[letterUImage,"U"],[letterVImage,"V"],[letterWImage,"W"],[letterYImage,"Y"]];
    let choseOneArrayOptions = oneLOSArray[Math.floor(Math.random()*oneLOSArray.length)];
    let chosen4thOneLOS
    for(chosen4thOneLOS=oneLOSArray[Math.floor(Math.random()*oneLOSArray.length)]; chosen4thOneLOS===choseOneArrayOptions;){
        chosen4thOneLOS=oneLOSArray[Math.floor(Math.random()*oneLOSArray.length)];
    }
    

    // 2 Lines of Symmetry
    let letterHImage = "../Resources/Images/FS Q's/LettersLOS/2 line of symmetry/H.png"
    let letterOImage = "../Resources/Images/FS Q's/LettersLOS/2 line of symmetry/O.png"
    let letterXImage = "../Resources/Images/FS Q's/LettersLOS/2 line of symmetry/X.png"
    let twoLOSArray = [[letterHImage,"H"],[letterOImage,"O"],[letterXImage,"X"]];
    let chosenTwoArrayOptions = twoLOSArray[Math.floor(Math.random()*twoLOSArray.length)];


    let numberLinesOfSymmetryArray = ["no lines","one line","two lines"];
    let chosenNumberLinesOfSymmetry = numberLinesOfSymmetryArray[Math.floor(Math.random()*numberLinesOfSymmetryArray.length)];

    if(chosenNumberLinesOfSymmetry==="no lines"){
        chosenZeroLOSImage = chosenZeroArrayOptions[0] 
        chosenZeroLOSLetter = chosenZeroArrayOptions[1]
        chosenOneLOSImage = choseOneArrayOptions[0]
        chosenOneLOSLetter = choseOneArrayOptions[1]
        chosenTwoLOSImage = chosenTwoArrayOptions[0]
        chosenTwoLOSLetter = chosenTwoArrayOptions[1]
        chosen4thLOSImage = chosen4thOneLOS[0]
        chosen4thOneLOSLetter = chosen4thOneLOS[1]
        solutionLetter = chosenZeroLOSLetter
    } else if(chosenNumberLinesOfSymmetry==="one line"){
        chosenZeroLOSImage = chosenZeroArrayOptions[0] 
        chosenZeroLOSLetter = chosenZeroArrayOptions[1]
        chosenOneLOSImage = choseOneArrayOptions[0]
        chosenOneLOSLetter = choseOneArrayOptions[1]
        chosenTwoLOSImage = chosenTwoArrayOptions[0]
        chosenTwoLOSLetter = chosenTwoArrayOptions[1]
        chosen4thLOSImage = chosen4thZeroLOS[0]
        chosen4thOneLOSLetter = chosen4thZeroLOS[1]
        solutionLetter = chosenOneLOSLetter
    } else if(chosenNumberLinesOfSymmetry==="two lines"){
        chosenZeroLOSImage = chosenZeroArrayOptions[0] 
        chosenZeroLOSLetter = chosenZeroArrayOptions[1]
        chosenOneLOSImage = choseOneArrayOptions[0]
        chosenOneLOSLetter = choseOneArrayOptions[1]
        chosenTwoLOSImage = chosenTwoArrayOptions[0]
        chosenTwoLOSLetter = chosenTwoArrayOptions[1]
        chosen4thLOSImage = chosen4thZeroLOS[0]
        chosen4thOneLOSLetter = chosen4thZeroLOS[1]
        solutionLetter = chosenTwoLOSLetter
    }

    toDataURL(chosenZeroLOSImage, function(dataURL) {
        document.getElementById("letter1").src = dataURL
    })
    toDataURL(chosenOneLOSImage, function(dataURL) {
        document.getElementById("letter2").src = dataURL
    })
    toDataURL(chosenTwoLOSImage, function(dataURL) {
        document.getElementById("letter3").src = dataURL
    })
    toDataURL(chosen4thLOSImage, function(dataURL) {
        document.getElementById("letter4").src = dataURL
    })

    let positionLettersArray = [1,2,3,4]
    let chosenPosition = positionLettersArray[Math.floor(Math.random()*positionLettersArray.length)];

    if(chosenPosition===1){
    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br>
    <div class="lettersContainer">
        <img id="letter1" class="letters" src="">
        <img id="letter2" class="letters" src="">
        <img id="letter3" class="letters" src="">
        <img id="letter4" class="letters" src="">
    </div>
    
    `
} else if(chosenPosition===2){
    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br>
    <div class="lettersContainer">
        <img id="letter2" class="letters" src="">
        <img id="letter1" class="letters" src="">
        <img id="letter4" class="letters" src="">
        <img id="letter3" class="letters" src="">
    </div>
    
    `
} else if(chosenPosition===3){
    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br>
    <div class="lettersContainer">
        <img id="letter4" class="letters" src="">
        <img id="letter3" class="letters" src="">
        <img id="letter2" class="letters" src="">
        <img id="letter1" class="letters" src="">
    </div>
    
    `
} else if(chosenPosition===4){
    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br>
    <div class="lettersContainer">
        <img id="letter1" class="letters" src="">
        <img id="letter3" class="letters" src="">
        <img id="letter4" class="letters" src="">
        <img id="letter2" class="letters" src="">
    </div>
    
    `
}

    document.getElementById("solutionText").innerHTML = 
    `The letter ${solutionLetter} has ${chosenNumberLinesOfSymmetry} of symmetry`
}

function wordedDivisionAndRoundingUp(){

    let numPeopleArray = [100,200,300,400,500];
    let chosenNumPeople = numPeopleArray[Math.floor(Math.random()*numPeopleArray.length)];
    let twoOrThreeArray = [["two",2],["three",3]]
    let chosenTwoOrThree = twoOrThreeArray[Math.floor(Math.random()*twoOrThreeArray.length)];
    let numPacksArray = [6,12,18,24,30];
    let chosenNumPacks
    let numSausagesNeeded = chosenNumPeople*chosenTwoOrThree[1];
    for(chosenNumPacks=numPacksArray[Math.floor(Math.random()*numPacksArray.length)];Number.isInteger(numSausagesNeeded/chosenNumPacks)===true;){
        chosenNumPacks=numPacksArray[Math.floor(Math.random()*numPacksArray.length)];
    }

    let numPacksUnrounded = numSausagesNeeded / chosenNumPacks;
    let numPacksRounded = Math.ceil(numPacksUnrounded);

    let denominatorForVegSausagesArray = [10,5,8,6,4]
    let denominatorForVegSausages
    for(denominatorForVegSausages=denominatorForVegSausagesArray[Math.floor(Math.random()*denominatorForVegSausagesArray.length)];Number.isInteger(numSausagesNeeded/denominatorForVegSausages)===false;){
        denominatorForVegSausages=denominatorForVegSausagesArray[Math.floor(Math.random()*denominatorForVegSausagesArray.length)]
    }

    

    document.getElementById("questionText").innerHTML = 
    `A club plans to hold a Barbecue for ${chosenNumPeople} people.<br>
    She allows <span style="font-weight:bold;">${chosenTwoOrThree[0]} sausages</span> for <span style="font-weight:bold;">each person.</span><br>
    A club member needs to order the rolls <span style="font-weight:bold;">and</span> sausages.<br>
    She needs to order <span style="font-weight:bold;">one long roll</span> for <span style="font-weight:bold;">each sausage.</span><br>
    The rolls are sold in packs of ${chosenNumPacks}<br><br>
    a) How many packs of rolls must she order?
    <br><br>
    She needs to order the sausages.<br>
    <span style="font-weight:bold;"> <sup>1</sup> &frasl;<sub>${denominatorForVegSausages}</sub></span> of the number of sausages need to be vegetarian.<br><br>
    b) How many vegetarian sausages will she order?`

    document.getElementById("solutionText").innerHTML = 
    `a) ${chosenNumPeople} &times; ${chosenTwoOrThree[1]} = ${numSausagesNeeded} sausages needed. Therefore ${numSausagesNeeded} rolls are needed.<br>
    ${numSausagesNeeded} &divide; ${chosenNumPacks} = ${numPacksUnrounded}<br>
    Rounding up, she needs to order ${numPacksRounded} packs of rolls.<br><br>
    b) <sup>1</sup> &frasl;<sub>${denominatorForVegSausages}</sub> &times; ${numSausagesNeeded} = ${numSausagesNeeded/denominatorForVegSausages} vegetarian sausages needed.<br>
    `
}

function readingScalesChildsHeight(){

    let childImage57cm = "../Resources/Images/FS Q's/Scales, height of child/57cm.png"
    let childImage76cm = "../Resources/Images/FS Q's/Scales, height of child/76cm.png"
    let childImage105cm = "../Resources/Images/FS Q's/Scales, height of child/105cm.png"
    let childImage111cm = "../Resources/Images/FS Q's/Scales, height of child/111cm.png"
    let childImage124cm = "../Resources/Images/FS Q's/Scales, height of child/124cm.png"
    let childImage128cm = "../Resources/Images/FS Q's/Scales, height of child/128cm.png"
    let childImage136cm = "../Resources/Images/FS Q's/Scales, height of child/136cm.png"
    let childImage142cm = "../Resources/Images/FS Q's/Scales, height of child/142cm.png"


    let childImagesArray = [[childImage76cm,[74,78],76],[childImage105cm,[102,108],105],[childImage111cm,[108,114],111],[childImage124cm,[121,127],124],
    [childImage128cm,[124,132],128],[childImage136cm,[133,139],136],[childImage57cm,[53,60],57],[childImage142cm,[138,146],142]];
    let chosenChildImageArray = childImagesArray[Math.floor(Math.random()*childImagesArray.length)];
    
    let maxHeightForRide = chosenChildImageArray[1][Math.floor(Math.random()*chosenChildImageArray[1].length)];
    let childHeight = chosenChildImageArray[2];

    let isChildBigEnough
    if(childHeight>maxHeightForRide){
        isChildBigEnough = `yes the child is tall enough to go on the rides since ${childHeight}cm is bigger than ${maxHeightForRide}cm`
    } else{
        isChildBigEnough = `no the child is not tall enough to go on the rides since ${childHeight}cm is smaller than ${maxHeightForRide}cm`
    }
    
    toDataURL(chosenChildImageArray[0], function(dataURL) {
        document.getElementById("childImage").src = dataURL
    })


    document.getElementById("questionText").innerHTML = 
    `
    A family sees a poster for a Fun Fair.<br>
    It says children have to be <span style="font-weight:bold;"> over ${maxHeightForRide}cm</span> tall to go on the rides.<br>
    They need to check their child's height before they go to the Fun Fair.<br>
    <img id="childImage" src="" alt="picture showing height of child"><br>
    Can the child go on the rides?
    `

    document.getElementById("solutionText").innerHTML = 
    `
    The child's height is ${childHeight}cm. Therefore, ${isChildBigEnough}.
    `
}

function multiplicationMoney(){

    let ticketsSold = Math.floor(Math.random()*49)+50
    let twentyFiveArray = [25,75]
    let ticketCost = `${Math.floor(Math.random()*6)+2}.${twentyFiveArray[Math.floor(Math.random()*twentyFiveArray.length)]}`
    let ticketCostAsNum = parseFloat(ticketCost);
    let totalSales = (ticketCostAsNum*ticketsSold).toFixed(2);
    let differenceArray = [50, -50, 30, -30, 40, -40, 60, -60];
    let chosenDifference = differenceArray[Math.floor(Math.random()*differenceArray.length)];
    let lastYearAmount = Math.ceil(parseFloat(totalSales) + chosenDifference)

    let ticketsSoldToNearest10 = Math.round(ticketsSold / 10) * 10;
    
    let solutionStatement
    if(chosenDifference<0){
        solutionStatement = `the organiser is correct since £${totalSales} is more than £${lastYearAmount}`
    } else{
        solutionStatement = `the organiser is incorrect since £${totalSales} is less than £${lastYearAmount}`
    }


    document.getElementById("questionText").innerHTML = 
    `
    A dance school holds a Dance Display every year.<br>
    <span style="font-weight:bold;">Last year</span> they made £${lastYearAmount} from the ticket sales.<br>
    <span style="font-weight:bold;">This year</span> they sold ${ticketsSold} tickets at £${ticketCost} each.<br>
    The organiser thinks they made <span style="font-weight:bold;">more money</span> this year than they did last year from the ticket sales. <br>
    a) Is the organiser correct? <br>
    <br>
    b) Use an approximation to check your answer.
    `

    document.getElementById("solutionText").innerHTML = 
    `
    a) ${ticketsSold} &times; £${ticketCost} = £${totalSales} and therefore they made £${totalSales} this year.<br>
    Last year they made £${lastYearAmount}.<br>
    Therefore, ${solutionStatement}<br><br>
    b) ${ticketsSoldToNearest10} &times; £${Math.round(ticketCostAsNum)} = £${ticketsSoldToNearest10*Math.round(ticketCostAsNum)}
    `
}

//Level 1 *////////////////////////////////////////////////////////////////////////////////

function BIDMAS(){
    let x=Math.ceil(Math.random()*9);
    let y=Math.ceil(Math.random()*8)+1;
    let z=Math.ceil(Math.random()*8)+1;
    let solution= x + y * z;

    questionText.innerHTML = `
    ${x} + ${y} &times ${z} = `

    solutionText.innerHTML = `${x} + ${y} &times ${z} = ${solution}`
}

function squaring(){
    let x=Math.ceil(Math.random()*25)+10;
    questionText.innerHTML = `${x}<sup>2</sup> = `
    solutionText.innerHTML = `${x}<sup>2</sup> = ${x*x}`
}

function FDPFracToDec(){
    let mainArray = [[5,[1,2,3,4]],[4,[1,3]],[5,[1,2,3,4]],[4,[1,3]],[5,[1,2,3,4]],[4,[1,3]],[2,[1]]];
    let chosenArray = mainArray[Math.floor(Math.random()*mainArray.length)];
    let y=chosenArray[0];
    let x=chosenArray[1][Math.floor(Math.random()*chosenArray[1].length)];

    questionText.innerHTML = `What is <sup>${x}</sup>&frasl;<sub>${y}</sub> as a decimal?`

    solutionText.innerHTML = `<sup>${x}</sup>&frasl;<sub>${y}</sub> = ${x/y}`
}

function addingNegatives(){
    let signArray = ["-","+"];
    let signOne = "-"
    let signTwo = signArray[Math.floor(Math.random()*signArray.length)]

    let num1 = Math.floor(Math.random()*19)+2;
    let num2Array = [num1 +1,num1-1];
    let num2 = num2Array[Math.floor(Math.random()*num2Array.length)];

    if(signTwo==="-"){
        solution = num1*(-1) - num2
    } else{
        solution = num1*(-1) + num2
    }

    if(solution===1){
        solutionLetter = "A"
    } else if(solution===-1){
        solutionLetter = "B"
    } else{
        solutionLetter = "D"
    }

    questionText.innerHTML = `
    <style>
        table{
            width: 20%;
            border-collapse: seperate;
            border-spacing: 0.5em;
        }
        .box{
            outline: 1px solid black;
            width: 2em;
            min-width: 1.75em;
        }
    </style>
    ${signOne}${num1} ${signTwo} ${num2} = 
    <br>
    (tick one box)<br>
    <table>
        <tr>
            <th>A</th>
            <td>1</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>B</th>
            <td>-1</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>C</th>
            <td>${num1+num2}</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>D</th>
            <td>${(num1+num2)*-1}</td>
            <td class="box">&nbsp</td>
        </tr>
    </table>    
    
    `

    solutionText.innerHTML =`${signOne}${num1} ${signTwo} ${num2} = ${solution}. Therefore, ${solutionLetter} should be ticked`
}

function percentageOfAnAmountNonCalc(){
    let array=[2,3,4,6,7,8,9]
    let x = parseFloat(`${array[Math.floor(Math.random()*array.length)]}0`)
    let y = parseFloat(`${array[Math.floor(Math.random()*array.length)]}00`)

    let array10 = [10, -10]

    let A1 = Math.round(x/100 * y) +`g`;
    let A2 = Math.round(x/1000* y )+`g`;
    let A3 = Math.round(0.5* y )+`g`;
    let A4 = Math.round(0.1*y)+`g`;

    let orderArrayAnswers = [[A1,A2,A3,A4,"A"],[A1,A2,A4,A3,"A"],[A1,A3,A2,A4,"A"],[A1,A3,A4,A2,"A"],[A1,A4,A3,A2,"A"],[A1,A4,A2,A3,"A"],
    [A2,A1,A3,A4,"B"],[A2,A1,A4,A3,"B"],[A2,A3,A1,A4,"C"],[A2,A3,A4,A1,"D"],[A2,A4,A1,A3,"C"],[A2,A4,A3,A1,"D"],
    [A3,A1,A2,A4,"B"],[A3,A1,A4,A2,"B"],[A3,A2,A1,A4,"C"],[A3,A2,A4,A1,"D"],[A3,A4,A1,A2,"C"],[A3,A4,A2,A1,"D"],
    [A4,A1,A2,A3,"B"],[A4,A1,A3,A2,"B"],[A4,A2,A1,A3,"C"],[A4,A2,A3,A1,"D"],[A4,A3,A1,A2,"C"],[A4,A3,A2,A1,"D"]];

    let chosenOrder = orderArrayAnswers[Math.floor(Math.random()*orderArrayAnswers.length)];


    questionText.innerHTML = `
    
    <style>
        table{
            width: 20%;
            border-collapse: seperate;
            border-spacing: 0.5em;
        }
        .box{
            outline: 1px solid black;
            width: 2em;
            min-width: 1.75em;
        }
    </style>
    ${x}% of ${y}g = <br>
    (tick one box)<br>
    <table>
        <tr>
            <th>A</th>
            <td>${chosenOrder[0]}</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>B</th>
            <td>${chosenOrder[1]}</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>C</th>
            <td>${chosenOrder[2]}</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>D</th>
            <td>${chosenOrder[3]}</td>
            <td class="box">&nbsp</td>
        </tr>
    </table>`

    solutionText.innerHTML = `${x}% of ${y}g = ${A1}. Therefore ${chosenOrder[4]} should be ticked.`
}

function rangeOfNumbers(){
    let array = [1,-1]
    let num1=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num2=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num3=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num4=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num5=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num6=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num7=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num8=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num9=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num10=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num11=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);
    let num12=100+(Math.floor(Math.random()*50)*array[Math.floor(Math.random()*array.length)]);

    let maxNum = Math.max(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12);
    let minNum = Math.min(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12);

    let rangeSolution = maxNum - minNum

    questionText.innerHTML = `
    <style>
        table{
            width: 100%;
            border-collapse: collapse;
            border: 2px solid black;
            text-align: center;
            background-color: rgba(88, 229, 186, 0.2);
        }
    </style>
    <table>
        <tr>
            <td>${num1}</td>
            <td>${num2}</td>
            <td>${num3}</td>
            <td>${num4}</td>
            <td>${num5}</td>
            <td>${num6}</td>
        </tr>
        <tr>
            <td>${num7}</td>
            <td>${num8}</td>
            <td>${num9}</td>
            <td>${num10}</td>
            <td>${num11}</td>
            <td>${num12}</td>
        </tr>
    </table>
    <br>
    What is the range of these numbers?
    `

    solutionText.innerHTML = `${maxNum} - ${minNum} = ${rangeSolution}`
}

function percentageSavingsAccount(){

    let x=parseFloat(`${Math.ceil(Math.random()*9)+1}000`);
    let yArray = [[2,0.02],[3,0.03],[4,0.04],[5,0.05],[6,0.06],[7,0.07],[8,0.08],[9,0.09]];
    let chosenY = yArray[Math.floor(Math.random()*yArray.length)];
    let y=chosenY[0];

    onePercent=x*0.01

    questionText.innerHTML = `A man puts £${x} into a savings account. <br>
    the interest is ${y}% per year.<br><br>
    How much will the interest be for the first year?`

    solutionText.innerHTML = `
    1% = £${x} &divide 100 = £${onePercent}<br>
    ${y}% = £${onePercent} &times ${y} = £${Math.round(x*chosenY[1])}
    `
}

function probabilityScale(){

    let impossProb = "../Resources/Images/FS Q's/Level 1/Probability Scale/1 - 0.png"
    let unlikelyProb = "../Resources/Images/FS Q's/Level 1/Probability Scale/2 - 0.25.png"
    let evensProb = "../Resources/Images/FS Q's/Level 1/Probability Scale/3 - 0.5.png"
    let likelyProb = "../Resources/Images/FS Q's/Level 1/Probability Scale/4 - 0.75.png"
    let certainProb = "../Resources/Images/FS Q's/Level 1/Probability Scale/5 - 1.png"

    let probabilitiesArray = [[impossProb,0,"impossible","A"],[unlikelyProb,0.25,"unlikely","B"],[evensProb,0.5,"evens","C"],
    [likelyProb,0.75,"likely","D"],[certainProb,1,"certain","E"]];

    let chosenProb = probabilitiesArray[Math.floor(Math.random()*probabilitiesArray.length)];

    toDataURL(chosenProb[0], function(dataURL) {
        document.getElementById("scale").src = dataURL
    })

    questionText.innerHTML = `
    <style>
    .scaleContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
    }
    #scale{
        width: 70%;
    }
    </style>
    This scale shows the probability of something that will happen.<br>
    <div class="scaleContainer">
        <img id="scale" src="">
    </div><br>
    What probability does the scale show?<br>
    <style>
        table{
            width: 20%;
            border-collapse: seperate;
            border-spacing: 0.5em;
        }
        .box{
            border: 1px solid black;
            width: 2em;
            min-width: 1.75em;
        }
    </style>
    (tick one box)<br>
    <table>
        <tr>
            <th>A</th>
            <td>impossible</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>B</th>
            <td>unlikely</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>C</th>
            <td>evens</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>D</th>
            <td>likely</td>
            <td class="box">&nbsp</td>
        </tr>
        <tr>
            <th>E</th>
            <td>certain</td>
            <td class="box">&nbsp</td>
        </tr>
    </table>
    `

    solutionText.innerHTML = `
    The arrow shows a probability of ${chosenProb[1]}, the word to describe this is ${chosenProb[2]}.
    Therefore, ${chosenProb[3]} should be ticked.`
}

function volumeOfCube(){

    let cubePic = "../Resources/Images/FS Q's/Level 1/VolumeOfCube/Cube.png"
    toDataURL(cubePic, function(dataURL) {
        document.getElementById("cube").src = dataURL
    })

    let xArray = [2,3,4,5,10];
    let x = xArray[Math.floor(Math.random()*xArray.length)];


    questionText.innerHTML = `
    <style>
    .cubeContainer{
        display: grid;
        grid-template-rows: 1fr 0.1fr;
        text-align: center;
    }
    .length{
        transform: translateY(-1em);
    }
    </style>
    <div class="cubeContainer">
        <div class="cube">
            <img id="cube" src="">
        </div>
        <div class="length">
            ${x}cm
        </div>
    </div>
    What is the volume of this cube?`

    solutionText.innerHTML = `The volume is ${x}<sup>3</sup> = ${x}cm &times ${x}cm &times ${x}cm = ${x*x*x}cm<sup>3</sup>`;
}

function convertingMixedNumtoImproper(){

    let x=Math.ceil(Math.random()*9);
    let mainArray = [[8,[1,3,5,7]],[7,[1,2,3,4,5,6]],[6,[1,5]],[5,[1,2,3,4]],[4,[1,3]],[2,[1]]];
    let chosenArray = mainArray[Math.floor(Math.random()*mainArray.length)];
    let b=chosenArray[0];
    let a=chosenArray[1][Math.floor(Math.random()*chosenArray[1].length)];

    let numeratorSolution = x*b + a

    questionText.innerHTML = `
    <style>
    .tableContainer{
        width: 100%;
        height: auto;
    }
    table{
        width: 2em;
        border-collapse: separate;
        border-spacing: 0.5em;
        text-align: center;
        float: right;
    }
    .box{
        outline: 1px solid black;
        width: 2em;
        min-width: 1.75em;
    }
    .hyphen{
        border-top: 1px solid black;
    }
    </style>
    ${x} <sup>${a}</sup>&frasl;<sub>${b}</sub> is the same as <br><br>
    <div class="tableContainer">
        <table>
            <tr>
                <td class="box">&nbsp</td>
            </tr>
            <tr>
                <td class="hyphen">${b}</td>
            </tr>
        </table><br><br><br>
    </div>
    
    `

    solutionText.innerHTML = `${x} <sup>${a}</sup>&frasl;<sub>${b}</sub> = <sup>${numeratorSolution}</sup>&frasl;<sub>${b}</sub>`
}

function saleOfGuitar(){

    let guitarPic = "../Resources/Images/FS Q's/Level 1/Sale of guitar/Guitar.jpg"
    toDataURL(guitarPic, function(dataURL) {
        document.getElementById("guitar").src = dataURL
    })
    let yArray=[15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,105,110,115,120,125,130,135,140,145,150];
    let y=yArray[Math.floor(Math.random()*yArray.length)];
    let wArray=[2,3,4,6,7,8,9];
    let w=parseFloat(`${wArray[Math.floor(Math.random()*wArray.length)]}0`);
    let reducedPrice=  parseFloat(w/100 * y).toFixed(2);
    let reducedPriceRound = Math.round(reducedPrice).toFixed(2);
    let addOrSubtractArray = [[1,-1,2,-2],[1.50,-1.50,2.5,-2.5]]
    if(reducedPrice===reducedPriceRound){
        chosenAddorSubtract = addOrSubtractArray[0][Math.floor(Math.random()*addOrSubtractArray[0].length)];
        x=parseFloat(reducedPrice) + chosenAddorSubtract
    } else{
        chosenAddorSubtract = addOrSubtractArray[1][Math.floor(Math.random()*addOrSubtractArray[1].length)];
        x=parseFloat(reducedPrice) + chosenAddorSubtract
    }

    if(reducedPrice<x){
        concludingStatement = `They have £${x}. Therefore, they can afford the guitar.`
    } else{
        concludingStatement =  `They only have £${x}. Therefore, they cannot afford the guitar.`
    }
    

    questionText.innerHTML = `
    <style>
    .guitarAndSaleGridContainer{
        width: 100%
    }
    .guitarAndSaleGridContainer{
        display: grid;
        grid-template-rows: 1fr 0.1fr;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        
    }
    #guitar{
        height: 10em;
        width: auto;
        margin: 0 auto;
    }
    .SaleBox{
        border: 1px solid black;
        background-color: rgba(88, 229, 186, 0.2);
        align-self: center;
        justify-self: center;
        padding: 1em;
    }

    .ticketPrice{
        border: 1px solid black;
        border-radius: 75%;
        background-color: rgba(88, 229, 186, 0.2);
        align-self: center;
        justify-self: center;
        padding: 0.35em;
    }

    </style>
    A customer wants to buy a guitar in the sale at a music shop. They have £${x}.<br><br>
    <div class="guitarAndSaleContainer">
        <div class="guitarAndSaleGridContainer">
            <img id="guitar" src="">
            <div class="SaleBox">
                SALE<br>
                All guitars<br>
                Reduced to ${w}%<br>
                Of their ticket price
            </div>
            <div class="ticketPrice">
                £${y}
            </div>
        </div>
    </div><br>
    Can the customer afford to buy the guitar?
    `

    solutionText.innerHTML = `
    10% of £${y} = £${(y*0.1).toFixed(2)}<br>
    ${w}% of £${y} = £${(y*0.1).toFixed(2)} &times ${w/10} = £${reducedPrice} &#8594 So the guitar costs £${reducedPrice} in the sale.<br>
    ${concludingStatement}
    `
}

function ratioJumpers(){

    let chosenGender = allNamesArray[Math.floor(Math.random()*allNamesArray.length)];
    let name=chosenGender[0][Math.floor(Math.random()*chosenGender[0].length)];

    function getNumbers(){  
        x=Math.ceil(Math.random()*4)+1;
        totalRatio = x+1;
        y=parseFloat(`${Math.ceil(Math.random()*9)}00`)  ;
        solution=y/totalRatio;
        if(Number.isInteger(solution)===false){
            getNumbers();
        };
    }
    getNumbers();
    

    questionText.innerHTML = `
    ${name} makes 1 jumper with red fabric for every ${x} jumpers with blue fabric.<br>
    Today, ${chosenGender[1]} needs ${y} jumpers altogether.<br><br>
    How many jumpers will ${chosenGender[1]} make with red fabric today?`

    solutionText.innerHTML = `The ratio of red to blue jumpers is 1:${x}<br>
    The total ratio parts is 1 + ${x} = ${totalRatio}<br>
    ${y} &divide ${totalRatio} = ${solution}. So ${chosenGender[1]} will make ${solution} red jumpers today.`
}

function probabilityOfficWorker(){

    let name = nameArray[Math.floor(Math.random()*nameArray.length)];

    let x=Math.ceil(Math.random()*20)+1

    questionText.innerHTML = `${name} works in an office. <br>
    There are ${x} desks and ${x} staff members. The manager allocates the desks to the staff members randomly at the start of each day.<br>
    No one likes the desk next to the door.<br>
    What is the probability that ${name} will get the desk next to the door today?`

    solutionText.innerHTML = `Since there is the same amount of staff as desks, somebody will have to sit next to the door.<br>
    They all have an equal probability of sitting next to the door and there is ${x} staff, so the probability of ${name}
    sitting by the door is <sup>${1}</sup>&frasl;<sub>${x}</sub>`
}

function readingScalesFuelGauge(){  
    let fuelGaugePic25 = "../Resources/Images/FS Q's/Level 1/Fuel Gauge/1 - 0.25 full.png"
    let fuelGaugePic75 = "../Resources/Images/FS Q's/Level 1/Fuel Gauge/2 - 0.75 full.png"
    let fuelGaugeArray =[[fuelGaugePic25,0.25,"25%"],[fuelGaugePic75,0.75,"75%"]];
    let chosenFuelGauge = fuelGaugeArray[Math.floor(Math.random()*fuelGaugeArray.length)];
    
    toDataURL(chosenFuelGauge[0], function(dataURL) {
        document.getElementById("fuelGauge").src = dataURL
    })

    let xArray=[50,60,70,80,90,110,120,130,140,150,160,170,180]
    let x=xArray[Math.floor(Math.random()*xArray.length)];


    questionText.innerHTML = `
    A van has a fuel tank that holds ${x} litres when full.<br>
    This diagram shows the fuel gauge on the van.<br>
    <div class="centeredQuestion">
        <image id="fuelGauge" src="">
    </div>
    <span class="bold">Approximately</span> how many litres of fuel are left in the tank?
    <span class="bold">Give your answer in whole litres.</span>
    `

    solutionText.innerHTML = `The fuel gauge is showing ${chosenFuelGauge[2]} full.<br>
    ${chosenFuelGauge[2]} of ${x} litres = ${x*chosenFuelGauge[1]} litres.`

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
    } else if(globalTopicAreaSelection==="bestValueTables"){
        bestValueTables();
    } else if(globalTopicAreaSelection==="fourOpsWordedQuestion"){
        fourOpsWordedQuestion();
    } else if(globalTopicAreaSelection==="scaleDrawings"){
        scaleDrawings();
    } else if(globalTopicAreaSelection==="compassDirections"){
        compassDirections();
    } else if(globalTopicAreaSelection==="linesOfSymmetry"){
        linesOfSymmetry();
    } else if(globalTopicAreaSelection==="wordedDivisionAndRoundingUp"){
        wordedDivisionAndRoundingUp();
    } else if(globalTopicAreaSelection==="readingScalesChildsHeight"){
        readingScalesChildsHeight();
    } else if(globalTopicAreaSelection==="multiplicationMoney"){
        multiplicationMoney();
    } else if(globalTopicAreaSelection==="BIDMAS"){
        BIDMAS();
    } else if(globalTopicAreaSelection==="squaring"){
        squaring();
    } else if(globalTopicAreaSelection==="FDPFracToDec"){
        FDPFracToDec();
    } else if(globalTopicAreaSelection==="addingNegatives"){
        addingNegatives();
    } else if(globalTopicAreaSelection==="percentageOfAnAmountNonCalc"){
        percentageOfAnAmountNonCalc();
    } else if(globalTopicAreaSelection==="rangeOfNumbers"){
        rangeOfNumbers();
    } else if(globalTopicAreaSelection==="percentageSavingsAccount"){
        percentageSavingsAccount();
    } else if(globalTopicAreaSelection==="probabilityScale"){
        probabilityScale();
    } else if(globalTopicAreaSelection==="volumeOfCube"){
        volumeOfCube();
    } else if(globalTopicAreaSelection==="convertingMixedNumtoImproper"){
        convertingMixedNumtoImproper();
    } else if(globalTopicAreaSelection==="saleOfGuitar"){
        saleOfGuitar();
    } else if(globalTopicAreaSelection==="ratioJumpers"){
        ratioJumpers();
    } else if(globalTopicAreaSelection==="probabilityOfficWorker"){
        probabilityOfficWorker();
    } else if(globalTopicAreaSelection==="readingScalesFuelGauge"){
        readingScalesFuelGauge();
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
