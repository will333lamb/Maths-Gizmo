
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

let namesObject = {
    maleNames: {
        name: maleNameArray,
        heOrShe: "he",
        hisOrHer: "his"
    },
    femaleNames: {
        name: femaleNameArray,
        heOrShe: "she",
        hisOrHer: "her"
    }
};

//Global Variables/////////////////////////////////////////////////////////////////////////////////////////////////////

let questionNumber = 0

let globalDifficultySelection = 2;

let globalTopicAreaSelection;


//Other Functions /////////////////////////////////////////////////////////////////////////////////////////////////////

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
};

function frontPageNonCalc(){
    document.getElementById("questionText").innerHTML += 
    `<style>
    .frontPage{
        text-align: center;
        font-size: 1.5rem;
        line-height: 3.5rem;
        color: #009870;
    }

    .centeredLogo{
        margin: 0 auto;
        width: 300px;
        height: 100px;

    }
    </style>
    <div class="frontPage">
    <span style="font-weight: bold;">Functional Skills Mathematics Entry 3 Practice Paper<br>
    Community Events<br><br>
    <div class="centeredLogo"><div class="MathsGizmoWhiteBackgroundMiddle"></div></div><br>
    Non-Calculator</span><br>
    <span class="fa-stack fa-2x" style="font-size: 7.5rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span><br><br> 
    
    <span style="font-weight: bold;">Time allowed - 25 minutes</span><br>
    Marks: 10 <br>
    
    <br>
    Name: .................................................<br><br>
    Date: .................................................<br>

    </div>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    `

    document.getElementById("solutionText").innerHTML +=
    `<style>
    .frontPage{
        text-align: center;
        font-size: 1.5rem;
        line-height: 3.5rem;
        color: #009870;
    }
    </style>
    <div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    <div class="frontPage">
    <span style="font-weight: bold;">Functional Skills Mathematics Entry 3 Practice Paper Solutions<br>
    Community Events<br><br>
    </div>
    `
}

function frontPageCalc(){
    document.getElementById("questionText").innerHTML += 
    `<style>
    .frontPage{
        text-align: center;
        font-size: 1.5rem;
        line-height: 3.5rem;
        color: #009870;
    }

    .centeredLogo{
        margin: 0 auto;
        width: 300px;
        height: 100px;

    }
    </style>
    <div class="frontPage">
    <span style="font-weight: bold;">Functional Skills Mathematics Entry 3 Practice Paper<br>
    Community Events<br><br>
    <div class="centeredLogo"><div class="MathsGizmoWhiteBackgroundMiddle"></div></div><br>
    Calculator</span><br>
    <span style="font-size: 7.5rem;"><i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i></span>
    <br><br> 
    
    <span style="font-weight: bold;">Time allowed - 65 minutes</span><br>
    Marks: 30 <br>
    
    <br>
    Name: .................................................<br><br>
    Date: .................................................<br>

    </div>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    `

    document.getElementById("solutionText").innerHTML +=
    `<style>
    .frontPage{
        text-align: center;
        font-size: 1.5rem;
        line-height: 3.5rem;
        color: #009870;
    }
    </style><br><br>
    <div class="frontPage">
    <span style="font-weight: bold;">Calculator Part</span>
    </div>
    `
}

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

    document.getElementById("questionText").innerHTML +=
    `
    <style>
    .spaceBetweenSequences{
        color: #fff
    }
    .centeredQuestion{
        text-align: center;
    }
    </style>
    <span class="questionNumber">Q1.</span>
    What is the next number in this sequence?<br><br><br><br><br>
    <div class="centeredQuestion">
    ${num1}<span class="spaceBetweenSequences">....</span>${num2}<span class="spaceBetweenSequences">....</span>${num3}<span class="spaceBetweenSequences">....</span>
    ${num4}<span class="spaceBetweenSequences">....</span>..........<br>
    </div>
    <p id="marksGiven">(1 mark)</p>
    `

    document.getElementById("solutionText").innerHTML +=
    `<br><span class="questionNumber">Q1.</span>
    The term to term rule is +${progression}, and the next term is ${num5Solution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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

    document.getElementById("questionText").innerHTML +=
    `<br><br><br>
    <span class="questionNumber">Q2.</span>
    What is <span style="font-weight: bold;">${numToBeRounded}</span> rounded to the nearest ${powerOfTenChosen}? <br><br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p>
    `

    document.getElementById("solutionText").innerHTML +=
    `<br><br>
    <span class="questionNumber">Q2.</span> ${roundedNumSolution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
    
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


    document.getElementById("questionText").innerHTML += 
    `<br><br><br><span class="questionNumber">Q3.</span>
    Write <span style="font-weight:bold;">${num1} hundred and ${num2}</span> in figures. <br><br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p>`

    document.getElementById("solutionText").innerHTML += 
    `<br><br>
    <span class="questionNumber">Q3.</span> ${concatedSolution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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


    document.getElementById("questionText").innerHTML +=
    `<style>
    .spaceBetweenSequences{
        color: #fff
    }
    .centeredQuestion{
        text-align: center;
    }
    </style>
    <br><br><br><span class="questionNumber">Q4.</span>
    Which of these is the <span style="font-weight:bold;">highest</span> number?<br><br><br>
    <div class="centeredQuestion">${num1}<span class="spaceBetweenSequences">......</span>${num2}<span class="spaceBetweenSequences">......</span>
    ${num3}<span class="spaceBetweenSequences">......</span>${num4}<br><br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p><br><br>
    </div>
    `

    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q4.</span> ${largestNumberSolution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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

    document.getElementById("questionText").innerHTML += 
    `<br><br><span class="questionNumber">Q5.</span>
    Subtract <span style="font-weight: bold;">${num1}</span> from <span style="font-weight: bold;">${num2}</span>
    <br><br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`
    
    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q5.</span> ${subtractedSolution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`

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

    document.getElementById("questionText").innerHTML += 
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
    <span class="questionNumber">Q6.</span>
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
    </div><br>
    <div class="centeredQuestion">${eveningMorning}</div>
    <br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p><br><br>`

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

    document.getElementById("solutionText").innerHTML +=
    `<br><br><span class="questionNumber">Q6.</span> ${solutionHour}:${solutionMinute} ${solutionAmPm}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>
    `

    
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

   
    

    

    document.getElementById("questionText").innerHTML += 
    `
    <br><br><span class="questionNumber">Q7.</span> Which one of these measuring instruments is <span style="font-weight: bold;">best</span> ${chosenQuestion}?<br>
    <span style="font-weight: bold;">Circle one</span><br><br><br><br>
    ${option1}<br><br><br><br>${option2}<br><br><br><br>
    ${option3}<br><br><br><br>${option4}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    `

    document.getElementById("solutionText").innerHTML +=
    `<br><br><span class="questionNumber">Q7.</span> ${solution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`

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

    document.getElementById("questionText").innerHTML += 
    `<br><br><span class="questionNumber">Q8.</span> At a charity Fun Race event, four friends finished the race in the following times.<br><br>
    Friend A:<span class="spaceBetween">.......</span> ${friendATime}<br>
    Friend B:<span class="spaceBetween">.......</span> ${friendBTime}<br>
    Friend C:<span class="spaceBetween">.......</span> ${friendCTime}<br>
    Friend D:<span class="spaceBetween">.......</span> ${friendDTime}<br><br>
    Who had the fastest time?
    <br><br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p><br><br>
    
    `
    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q8.</span> ${solutionFastestFriend} is the fastest at ${solutionFastestFriendNum} minutes
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`
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

    document.getElementById("questionText").innerHTML += 
    `
    <style>
    table{
        font-size: 1rem;
        border-collapse: collapse;
    }
    #firstTable{
        width: 100%;
    }
    #secondTable{
        width: 60%;
    }
    .secondTableContainer{
        margin-left: 30%;
        margin-right: 10%
    }
    td {
        border: 1px solid #009870;
        text-align: center;
        width: 20%;
    }
    th{
        border: 1px solid #009870;
        text-align: center;
        background-color: rgba(88, 229, 186, 0.3);
    }
    </style>
    <span class="questionNumber">Q9.</span> An organiser keeps a record of the different types of community events that took place over the summer.<br><br>
    She started to put this information into a frequency table to report it at a meeting.<br><br>
    <table id="firstTable">
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
    <div class="secondTableContainer">
    <table id="secondTable">
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
    </div>
    <br>
    Complete the frequency table
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`

    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q9.</span> Quiz = ${quizCount} and Talent Show = ${talentShowCount}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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

    document.getElementById("questionText").innerHTML += 
    `<style>

    @media only screen and (min-width: 800px) {
    .barChartContainer{
        width: 30%;
        margin: 0 20%;
    }
    
    .barChartContainerChild{
        width: 100%;
        min-width: 315px;
    }
    .barChartImageContainer{
        margin: 0 20%;
    }

    .barChartImageContainerChild{
        width: 100%;
    }

    #barChartImg{
        width: 60%;
        height: auto;
    }
    

    }

    @media only screen and (max-width: 800px) {
        .barChartContainer{
            width: 45%;
        }
        
        .barChartContainerChild{
            width: 100%;
            max-width: 200px;
            
        }
        .barChartImageContainer{
            margin: 0 20%;
        }
    
        .barChartImageContainerChild{
            width: 100%;
        }
        #barChartImg{
            width: 60%;
            height: auto;
        }
    }
    </style>
    
    <span class="questionNumber">Q10.</span> This chart shows the numbers of people attending different community events last year.<br>
    <div class="barChartContainer">
        <div class="barChartContainerChild">
            <canvas id="FSBarChart" width="10" height="10"></canvas>
        </div>
    </div>
    <div class="barChartImageContainer">
        <div class="barChartImageContainerChild">
            <img id="barChartImg" src="">
        </div>
    </div><br><div>
    Which <span style="font-weight: bold;">two</span> events had the <span style="font-weight: bold;">highest</span> number of people attending?
    <br><br><br><br></div>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .<span class="spaceBetween">.........................</span>. . . . . . . . . . . . . . . . . </div>
    <p id="marksGiven">(1 mark)</p><br><br><br><br>
    <p id="marksGiven" style="font-weight: bold; font-style: normal;">Total marks: 10</p><br><br><br><br><br>
    <div class="frontPage">
    End of Non-calculator paper
    </div>
    `

    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q10.</span> ${mostPopularEvent} and ${secondMostPopularEvent}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`

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
        animation: {
            duration: 0
        }
    }
});
document.getElementById('barChartImg').src = myChart.toBase64Image();
document.querySelector(".barChartContainer").style.display = "none";
document.querySelector(".barChartContainerChild").style.display = "none";
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
    
    document.getElementById("solutionText").innerHTML +=
    `<span class="questionNumber">Q1.</span> ${numeratorSolution} &frasl; ${denominatorSolution}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>
    `

    }

    

    document.getElementById("questionText").innerHTML += 
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
    <span class="questionNumber">Q1.</span> What fraction of this shape is shaded?<br><br>
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
    </div><br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</div>
    <p id="marksGiven">(1 mark)</p><br><br>`

    
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

    document.getElementById("questionText").innerHTML +=
    `
    <style>
    .spaceBetweenSequences{
        color: #fff
    }
    .centeredQuestion{
        text-align: center;
    }
    </style>
    <span class="questionNumber">Q2.</span> What is the next number in this sequence?<br><br><br>
    <div class="centeredQuestion">
    ${num1String}<span class="spaceBetweenSequences">....</span>${num2String}<span class="spaceBetweenSequences">....</span>${num3String}<span class="spaceBetweenSequences">....</span>
    ${num4String}<span class="spaceBetweenSequences">....</span>..........<br>
    </div>
    <p id="marksGiven">(1 mark)</p><br><br>
    `

    document.getElementById("solutionText").innerHTML +=
    `<br><br><span class="questionNumber">Q2.</span> The term to term rule is +${progression}, and the next term is ${num5SolutionString}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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

    document.getElementById("questionText").innerHTML += 
    `
    <span class="questionNumber">Q3.</span> What is £${num1} rounded to the nearest ${roundTo}
    <br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</div>
    <p id="marksGiven">(1 mark)</p><br><br>`

    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q3.</span> £${solutionRounded}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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

    document.getElementById("questionText").innerHTML += 
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
        line-height: 1.2em;
        text-align: center;
        overflow: overlay;
    }
    </style>
    <span class="questionNumber">Q4.</span> A youth club plans to hold a Charity Sale.<br>
    People hire tables to sell things from. <br>
    The youth club has these different size tables.<br><br>
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
    A man wants to hire tables to cover a length of <span style="font-weight:bold;">${lengthToBeCovered} metres.</span><br>
    Which tables would be <span style="font-weight:bold;">cheapest</span> for him to hire? <span style="font-weight:bold;">Give a reason for your answer. Use numbers to help you explain.</span>
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
    <p id="marksGiven">(4 marks)</p>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`

    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q4.</span> Small tables: £${smallTableCost}&times;${lengthToBeCovered} = £${totalCostSmallTable.toFixed(2)}<br>
    Large tables: £${largeTablecost.toFixed(2)}&times;${lengthToBeCovered / largeTableLength} = £${(largeTablecost*lengthToBeCovered/largeTableLength).toFixed(2)}
    <br> Therefore the cheapest tables for him to hire are the ${solutionBestValue}s
    <p id="marksGiven">(4 marks)</p><br><br>
    <div class="borderBottomSolution"></div>`
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
        document.getElementById("milkCartons").src = dataURL
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

    document.getElementById("questionText").innerHTML += 
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

    #milkCartons{
        width: 50%;
        height: auto;
        border: 3px solid #f6f6f6;
        margin: 0 25%;
    }

    .milkCartonContainer{
        margin: auto;
    }

    #amountOfSugar{
        bottom: 1.5em;
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

        #milkCartons{
            width: 50%;
            height: auto;
            margin: 0 25%;          
        }

        .milkCartonContainer{
            margin: auto;
        }
    }

    </style>
    <span class="questionNumber">Q5.</span> A playgroup plans to hold a Coffee Morning to raise money.<br>
    The play leader needs to buy more cups, sugar and milk.<br><br>
    She says we need ${chosenCupsNeeded} cups.<br><br> 
    They have these cups.<br><br>
    <div class="cupsContainer">
        <div class="cups"></div><div class="cups"></div><div class="cups"></div><div class="cups"></div><div class="cups"></div><div class="cups"></div>
    </div>
    <div class="cupsContainer">
        <div id="disapear1" class="cups"></div><div id="disapear2" class="cups"></div><div id="disapear3" class="cups"></div><div id="disapear4" class="cups"></div>
        <div id="disapear5" class="cups"></div><div id="disapear6" class="cups"></div>
    </div><br>
    <span class="questionNumber">a)</span> How many more cups do they need?<br>
    Show all of your working out. <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <p id="marksGiven">(2 marks)</p>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    She needs to work out how many bags of sugar she needs for ${chosenCupsNeeded} cups.<br><br>
    She allows <span style="font-weight:bold;"> one spoonful of sugar</span> for each cup.<br>
    <div class="sugarContainer">
        <div class="sugar">
            <p id="amountOfSugar">${chosenSugarAmount}${gramOrKg}</p>
        </div>
        <div class="sugarSpoonContainer">
            <div class="sugarSpoon"></div>
            <p>One spoon of sugar weighs ${sugarWeight} grams</p>
        </div>
    </div><br><br>
    <span class="questionNumber">b)</span> How many bags of sugar should the leader buy?<br><br><br><br><br><br>
    <p id="marksGiven">(3 marks)</p><br><br><br>
    
    The play leader works out she needs ${amountOfMilkChosen} of milk.<br><br>
    <div class="milkCartonContainer">
        <img id="milkCartons" src="" alt="picture showing different cartons of milk"
    </div>
    <br><br>
    <span class="questionNumber">c)</span> Which size milk should she buy? <span style="font-weight:bold;"> Tick one</span><br>
    <p id="marksGiven">(1 mark)</p>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>

    `

    document.getElementById("solutionText").innerHTML +=
    `<br><br><span class="questionNumber">Q5.</span><br><br>
    <span class="questionNumber">a)</span> There are ${cupsPerBox} cups per stack and there is ${howManyBoxes} stacks. Therefore, ${cupsPerBox} &times; ${howManyBoxes} = ${totalNumCups}<br>
    So there are ${totalNumCups} cups at the moment. ${chosenCupsNeeded} - ${totalNumCups} = ${solutionCupsNeeded}.<br>
    So ${solutionCupsNeeded} cups are needed.
    <p id="marksGiven">(2 marks)</p>
    <br><br><br>
    <span class="questionNumber">b)</span> ${sugarWeight} grams &times; ${chosenCupsNeeded} cups = ${gramsSugarNeeded} grams of sugar needed.<br>
    ${gramsSugarNeeded}g &divide; ${chosenSugarAmountGrams}g = ${(gramsSugarNeeded / chosenSugarAmountGrams).toFixed(2)} Therefore they need to buy ${numBagsNeeded} ${bagOrBags}.
    <p id="marksGiven">(3 marks)</p>
    <br><br><br>
    <span class="questionNumber">c)</span> ${bestMilk}
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`

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


    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .tablesChairsPlanImage{
        width: 50%;
        height: 50%;
        border: 2px solid black;
    }


    @media only screen and (max-width: 800px) {
        .tablesChairsPlanImage{
            width: 50%;
            height: auto;
        }
    }
    </style>
    <span class="questionNumber">Q6.</span> There will be Afternoon Tea at the community centre. <br>
    The organiser needs to set up the room.<br><br>
    He starts to draw a plan to show where he wants the tables and chairs to go. <br><br>
    He needs <span style="font-weight: bold;">two more tables and eight chairs.</span><br><br>
    They need to be the same size and the same distance apart as the others.<br><br>
    <div class="centeredQuestion">
    <span style="font-weight:bold;">Plan of the room</span><br><br>
        <img id="tablesChairsPlanImage" class="tablesChairsPlanImage" src="" alt="image showing plan of room">
    </div><br>
    Complete the plan to show where the tables and chairs will go.<br>
    <span style="font-weight:bold;">Put labels on your diagram.</span><br><br>
    <p id="marksGiven">(4 marks)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    `

    document.getElementById("solutionText").innerHTML += 
    `
    <br><br><span class="questionNumber">Q6.</span><br><br>
    <img id="solutionPlan" class="tablesChairsPlanImage" src=""><br>
    <p id="marksGiven">(4 marks)</p><br><br>
    <div class="borderBottomSolution"></div>
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


    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .compassDirections{
        width: 45%;
        height: auto;
        margin: 0 25%;
        border: 5px solid black;
    }
    </style>
    <span class="questionNumber">Q7.</span> A scout group organises a Treasure Hunt.<br>
    People will follow directions to look for clues <span style="font-weight:bold;">and</span> then answer questions. <br><br>
    A group of friends decide to take part.<br><br>
    Here is the direction to Clue One.<br><br>
    <div class=centeredQuestion">
    <img id="compassDirections" class="compassDirections" src="" alt="map showing direction to clue one">
    </div><br>
    <span class="questionNumber">a)</span> In which direction is Clue One?
    <br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</span>
    <p id="marksGiven">(1 mark)</p><br><br>

    `

    document.getElementById("solutionText").innerHTML += 
    `
    <br><br><span class="questionNumber">Q7.</span><br><br>
    <span class="questionNumber">a)</span> ${solutionCompassDirection}
    <p id="marksGiven">(1 mark)</p><br><br>
    `
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
    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    They read Clue One.<br><br>
    <div class="centeredQuestion" style="font-weight: bold;">Clue One</div><br><br>
    
    <div class="lettersContainer">
        <img id="letter1" class="letters" src="">
        <img id="letter2" class="letters" src="">
        <img id="letter3" class="letters" src="">
        <img id="letter4" class="letters" src="">
    </div>
    <br><br><br>
    <span class="questionNumber">b)</span> Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</span>
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    
    `
} else if(chosenPosition===2){
    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    They read Clue One.<br><br>
    <div class="centeredQuestion" style="font-weight: bold;">Clue One</div><br><br>
    
    <div class="lettersContainer">
        <img id="letter2" class="letters" src="">
        <img id="letter1" class="letters" src="">
        <img id="letter4" class="letters" src="">
        <img id="letter3" class="letters" src="">
    </div>
    <br><br><br>
    <span class="questionNumber">b)</span> Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</span>
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    
    `
} else if(chosenPosition===3){
    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    They read Clue One.<br><br>
    <div class="centeredQuestion" style="font-weight: bold;">Clue One</div><br><br>
    
    <div class="lettersContainer">
        <img id="letter4" class="letters" src="">
        <img id="letter3" class="letters" src="">
        <img id="letter2" class="letters" src="">
        <img id="letter1" class="letters" src="">
    </div><br><br><br>
    <span class="questionNumber">b)</span> Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</span>
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    
    `
} else if(chosenPosition===4){
    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .lettersContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    </style>
    They read Clue One.<br><br>
    <div class="centeredQuestion" style="font-weight: bold;">Clue One</div><br><br>
    
    <div class="lettersContainer">
        <img id="letter1" class="letters" src="">
        <img id="letter3" class="letters" src="">
        <img id="letter4" class="letters" src="">
        <img id="letter2" class="letters" src="">
    </div><br><br><br>
    <span class="questionNumber">b)</span> Which of these letters has <span style="font-weight:bold;">${chosenNumberLinesOfSymmetry}</span> of symmetry?<br><br><br>
    <div class="centeredQuestion">. . . . . . . . . . . . . . . . .</span>
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    
    `
}

    document.getElementById("solutionText").innerHTML += 
    `<br><span class="questionNumber">b)</span>
    The letter ${solutionLetter} has ${chosenNumberLinesOfSymmetry} of symmetry
    <p id="marksGiven">(1 mark)</p><br><br>
    <div class="borderBottomSolution"></div>`
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

    

    document.getElementById("questionText").innerHTML +=

    `<style>
        .rightQuestion{
            text-align: right;
        }
    </style>
    <span class="questionNumber">Q8.</span> A club plans to hold a Barbecue for ${chosenNumPeople} people.<br><br>
    She allows <span style="font-weight:bold;">${chosenTwoOrThree[0]} sausages</span> for <span style="font-weight:bold;">each person.</span><br><br>
    A club member needs to order the rolls <span style="font-weight:bold;">and</span> sausages.<br>
    She needs to order <span style="font-weight:bold;">one long roll</span> for <span style="font-weight:bold;">each sausage.</span><br><br>
    The rolls are sold in packs of ${chosenNumPacks}<br><br>
    <span class="questionNumber">a)</span> How many packs of rolls must she order?<br>
    <span style="font-weight:bold;">Show your working out</span>
    <br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="rightQuestion">. . . . . . . . . . . . . . . . . packs of rolls</div>
    <p id="marksGiven">(4 marks)</p><br><br>
    She needs to order the sausages.<br><br>
    <span style="font-weight:bold;"> <sup>1</sup> &frasl;<sub>${denominatorForVegSausages}</sub></span> of the number of sausages need to be vegetarian.<br><br>
    <span class="questionNumber">b)</span> How many vegetarian sausages will she order?<br>
    Show your working out.
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="rightQuestion">. . . . . . . . . . . . . . . . . vegetarian sausages</div>
    <p id="marksGiven">(2 marks)</p><br><br>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`

    document.getElementById("solutionText").innerHTML += 
    `<br><br><span class="questionNumber">Q8.</span><br><br>
    <span class="questionNumber">a)</span> ${chosenNumPeople} &times; ${chosenTwoOrThree[1]} = ${numSausagesNeeded} sausages needed. Therefore ${numSausagesNeeded} rolls are needed.<br>
    ${numSausagesNeeded} &divide; ${chosenNumPacks} = ${numPacksUnrounded}<br>
    Rounding up, she needs to order ${numPacksRounded} packs of rolls.<br><br>
    <p id="marksGiven">(4 marks)</p><br><br>
    <span class="questionNumber">b)</span> <sup>1</sup> &frasl;<sub>${denominatorForVegSausages}</sub> &times; ${numSausagesNeeded} = ${numSausagesNeeded/denominatorForVegSausages} vegetarian sausages needed.<br>
    <p id="marksGiven">(2 marks)</p><br><br>
    <div class="borderBottomSolution"></div>
    <div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>
    `
}




//Generate Preview Button/////////////////////////////////////////////////////////////////////////////////////////////////////

let generateQButton = document.getElementById("generateQButton");

generateQButton.onclick = function(){
    function loseInstructions(){
        document.querySelector(".previewHeadings").style.display = "block";
        document.querySelector(".previewBoxQContainer").style.display = "block";
        document.querySelector(".solutionsContainer").style.display = "block";
        document.querySelector(".previewHeadingsSolutions").style.display = "block";
        document.getElementById("instructionsParagraph").style.display = "none";
        document.getElementById("downloadFile").style.display = "block ";
        document.getElementById("downloadSolutions").style.display = "block";
        document.getElementById("downloadBothFiles").style.display = "block";
    }
if(document.getElementById("generateQButton").innerHTML==="Reset"){
    window.location.reload(); 
} else if(globalTopicAreaSelection ==="communityEvents"){
    loseInstructions();
    frontPageNonCalc();
    sequencesNextNumberInteger();
    roundToPowerOfTen();
    writeNumberInFigures();
    highestNumberWithDecimals();
    subtraction3DigitBy3Digit();
    tellTheTimeOnAnalogueClock();
    identifyCorrectMeasuringTool();
    fastestTime();
    completeFrequencyTable();
    interpretBarChart();
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br>`
    frontPageCalc();
    fractionShadedOfShape();
    sequencesNextNumberDecimal();
    roundingMoney();
    bestValueTables();
    fourOpsWordedQuestion();
    scaleDrawings();
    compassDirections();
    linesOfSymmetry();
    wordedDivisionAndRoundingUp();


    document.getElementById("generateQButton").innerHTML="Reset";
} 
};


//Download Options/////////////////////////////////////////////////////////////////////////////////////////////////////
function generatePDF(){
    window.scrollTo(0,0);
    const element = document.querySelector(".previewBoxQ");
    const options = {
        margin:     [0,0.1],
        filename:     "tempFileName",
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2, dpi: 192, letterRendering: true},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        scale: 10,
      };
    html2pdf()
    .from(element)
    .set(options)
    .save()
}

function generateSolutions(){
    window.scrollTo(0,0);
    const element = document.querySelector(".previewBoxSolution");
    const options = {
        margin:     [0,0.1],
        filename:     "tempSolutionTitle",
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, dpi: 192, letterRendering: true},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
    html2pdf()
    .from(element)
    .set(options)
    .save()
}

function downloadBothFiles(){
    generatePDF();
    generateSolutions();
}

