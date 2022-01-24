
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

/************************************
 Global Variables
 ****************************************/

let questionNumber = 0

let globalDifficultySelection = 2;


/************************************
 Other functions
 ****************************************/

function getSelectedTopicArea(){
    globalTopicAreaSelection = parseInt(document.getElementById("topicAreaSelect").value);
    if (globalTopicAreaSelection === 1){
        document.querySelector(".numberTopics").style.display = "block";
        document.querySelector(".algebraTopics").style.display = "none";
        document.querySelector(".ratioTopics").style.display = "none";
        document.querySelector(".geometryMeasuresTopics").style.display = "none";
        document.querySelector(".probabilityTopics").style.display = "none";
    }
    else if (globalTopicAreaSelection === 2){
        document.querySelector(".numberTopics").style.display = "none";
        document.querySelector(".algebraTopics").style.display = "block";
        document.querySelector(".ratioTopics").style.display = "none";
        document.querySelector(".geometryMeasuresTopics").style.display = "none";
        document.querySelector(".probabilityTopics").style.display = "none";
    }
    else if (globalTopicAreaSelection === 3){
        document.querySelector(".numberTopics").style.display = "none";
        document.querySelector(".algebraTopics").style.display = "none";
        document.querySelector(".ratioTopics").style.display = "block";
        document.querySelector(".geometryMeasuresTopics").style.display = "none";
        document.querySelector(".probabilityTopics").style.display = "none";
    }
    else if (globalTopicAreaSelection === 4){
        document.querySelector(".numberTopics").style.display = "none";
        document.querySelector(".algebraTopics").style.display = "none";
        document.querySelector(".ratioTopics").style.display = "none";
        document.querySelector(".geometryMeasuresTopics").style.display = "block";
        document.querySelector(".probabilityTopics").style.display = "none";
    }
    else if (globalTopicAreaSelection === 5){
        document.querySelector(".numberTopics").style.display = "none";
        document.querySelector(".algebraTopics").style.display = "none";
        document.querySelector(".ratioTopics").style.display = "none";
        document.querySelector(".geometryMeasuresTopics").style.display = "none";
        document.querySelector(".probabilityTopics").style.display = "block";
    }
};
function getSelectedTopic(){globalSelectedTopic = document.getElementById("topicSelect").value}
function getSelectedDifficultyValue(){globalDifficultySelection = parseInt(document.getElementById("difficultyDropDown").value)};


//Functions to get number of Bronze, Silver, Gold Q's for worksheet
function getBronzeNumber(){
    bronzeNumber = parseInt(document.getElementById("bronzeNumber").value);
};
function getSilverNumber(){
    silverNumber = parseInt(document.getElementById("silverNumber").value)
};
function getGoldNumber(){
    goldNumber = parseInt(document.getElementById("goldNumber").value)
};


function worksheetDifficultyHeadings(){
    if (globalDifficultySelection === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
        //document.getElementById("questionText").innerHTML += `<h2 id="BSGHeadings">Bronze Questions</h2>`
        document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    }
    else if (globalDifficultySelection === 2 && silverNumber>0){
        //document.getElementById("questionText").innerHTML += `<h2 id="BSGHeadings">Silver Questions</h2>`
        //document.getElementById("solutionText").innerHTML += `<h2 id="BSGHeadings">Silver Solutions</h2>`
    }
    else if (globalDifficultySelection === 3 && goldNumber>0){
        //document.getElementById("questionText").innerHTML += `<h2 id="BSGHeadings">Gold Questions</h2>`
        //document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>` + `<h2 id="BSGHeadings">Gold Solutions</h2>`
    }
    questionNumber = 0;
}

/************************************
 Question functions
 ****************************************/
const Qid0001 = () => {
    let name1 = nameArray[Math.floor(Math.random()*nameArray.length)];

    let name1Distance = (Math.ceil(Math.random()*19)) + 25 + '0';
    let name1Time = Math.ceil(Math.random()*9 + 1);

    let name1Speed = Math.round((name1Distance / name1Time)*10)/10;

    let name2 = nameArray[Math.floor(Math.random()*nameArray.length)];

    if (name1 === name2) {
    name2 = "Mathias";
    }

    let speed2ArrayDifference = [(Math.ceil(Math.random()*20)),(Math.ceil(Math.random()*-20))-1];

    let name2Speed = name1Speed + (speed2ArrayDifference[Math.floor(Math.random()*2)]);

    let name2Time = Math.ceil(Math.random()*9 + 1);
    let minsArray = [15, 30, 45];
    let name2TimeMins = minsArray[Math.floor(Math.random()*3)];

    let minsArray2 = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57];
    let name2TimeDecimal = name2Time + (name2TimeMins/60);

    let name2TimeMins2 = minsArray2[Math.floor(Math.random()*16)];

    let name2TimeDecimal2 = name2Time + (name2TimeMins2/60);

    let name2Distance = Math.round(name2Speed * name2TimeDecimal);
    let name2SpeedSol = Math.round((name2Distance / name2TimeDecimal)*100)/100;

    let name2Distance2 = Math.round(name2Speed * name2TimeDecimal2);
    let name2SpeedSol2 = Math.round((name2Distance2 / name2TimeDecimal2)*100)/100;

    let speedArrayBronze = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    let BronzeName1Time = Math.ceil(Math.random()*14+2);
    let name1DistanceBronze = (BronzeName1Time*speedArrayBronze[Math.floor(Math.random()*speedArrayBronze.length)]);
    let name1SpeedBronze = name1DistanceBronze/BronzeName1Time;

    let arrayBronzehelper = [(Math.ceil(Math.random()*5*5)),(Math.ceil(Math.random()*-5*5))-1];
    let name2SpeedBronze = name1SpeedBronze + arrayBronzehelper[Math.floor(Math.random()*2)];
    let array1orminus1 = [1,-1,2,-2];
    let name2TimeBronze = BronzeName1Time + array1orminus1[Math.floor(Math.random()*4)];
    let name2DistanceBronze = name2SpeedBronze * name2TimeBronze;

    let fastestName;
    if (name1Speed >= name2SpeedSol){
    fastestName = name1;
    } else {
    fastestName = name2;
    };

    let fastestNameBronze;
    if (name1SpeedBronze >= name2SpeedBronze){
        fastestNameBronze = name1;
    } else {
        fastestNameBronze = name2;
    };

    questionNumber ++;

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    //Question Info ***********************

    document.getElementById("examBoardText").innerHTML = "OCR";
    document.getElementById("tierText").innerHTML = "Foundation";
    document.getElementById("paperText").innerHTML = "1";
    document.getElementById("monthText").innerHTML = "November";
    document.getElementById("yearText").innerHTML = "2019";
    document.getElementById("questionInfoText").innerHTML = 14;
    document.getElementById("calculatorText").innerHTML = "Yes";
    document.getElementById("marksAvailableText").innerHTML = 4;
    document.querySelector(".tableinfo").style.display = "inline-table";

    function reassignValues(){
        name1 = nameArray[Math.floor(Math.random()*nameArray.length)];

        name1Distance = (Math.ceil(Math.random()*19)) + 25 + '0';
        name1Time = Math.ceil(Math.random()*9 + 1);

        name1Speed = Math.round((name1Distance / name1Time)*10)/10;

        name2 = nameArray[Math.floor(Math.random()*nameArray.length)];

    if (name1 === name2) {
    name2 = "Mathias";
    }

        speed2ArrayDifference = [(Math.ceil(Math.random()*20)),(Math.ceil(Math.random()*-20))-1];

        name2Speed = name1Speed + (speed2ArrayDifference[Math.floor(Math.random()*2)]);

        name2Time = Math.ceil(Math.random()*9 + 1);
        minsArray = [15, 30, 45];
        name2TimeMins = minsArray[Math.floor(Math.random()*3)];

        minsArray2 = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57];
        name2TimeDecimal = name2Time + (name2TimeMins/60);

        name2TimeMins2 = minsArray2[Math.floor(Math.random()*16)];

        name2TimeDecimal2 = name2Time + (name2TimeMins2/60);

        name2Distance = Math.round(name2Speed * name2TimeDecimal);
        name2SpeedSol = Math.round((name2Distance / name2TimeDecimal)*100)/100;

        name2Distance2 = Math.round(name2Speed * name2TimeDecimal2);
        name2SpeedSol2 = Math.round((name2Distance2 / name2TimeDecimal2)*100)/100;

        speedArrayBronze = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        BronzeName1Time = Math.ceil(Math.random()*14+2);
        name1DistanceBronze = (BronzeName1Time*speedArrayBronze[Math.floor(Math.random()*speedArrayBronze.length)]);
        name1SpeedBronze = name1DistanceBronze/BronzeName1Time;

        arrayBronzehelper = [(Math.ceil(Math.random()*5*5)),(Math.ceil(Math.random()*-5*5))-1];
        name2SpeedBronze = name1SpeedBronze + arrayBronzehelper[Math.floor(Math.random()*2)];
        array1orminus1 = [1,-1,2,-2];
        name2TimeBronze = BronzeName1Time + array1orminus1[Math.floor(Math.random()*4)];
        name2DistanceBronze = name2SpeedBronze * name2TimeBronze;

        fastestName;
    if (name1Speed >= name2SpeedSol){
    fastestName = name1;
    } else {
    fastestName = name2;
    };

        fastestNameBronze;
    if (name1SpeedBronze >= name2SpeedBronze){
        fastestNameBronze = name1;
    } else {
        fastestNameBronze = name2;
    };

    //questionNumber ++;
    }


    function runQuestion(){
    
    //Difficulty Silver    
    if (globalDifficultySelection === 2){
    document.getElementById("questionText").innerHTML += 
    `<style>
    .borderBottomSolution{
        border-bottom: 5px dotted #009870;
    }
    #questionText{
        line-height: 2;
    }
    </style>

    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i>
    <span class="questionNumber"> ${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1} drives a distance of ${name1Distance}km in ${name1Time} hours. <br>
    ${name2} drives a distance of ${name2Distance}km in ${name2Time} hours ${name2TimeMins} minutes. <br>
    Who has the highest average speed? <br>
    Show how you decide.<br><br><br><br><br><br><br><br><br><br>`+`<div class="answerLine"><p id="marksGiven">(4 marks)</p></div>`

    document.getElementById("solutionText").innerHTML += 
    `
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i>
    <span class="questionNumber"> ${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1Distance} ÷ ${name1Time} = ${name1Speed}. Therefore, ${name1}'s speed is ${name1Speed} km/h <br>
    ${name2Time} hours ${name2TimeMins} minutes can be written as ${name2TimeDecimal}. <br>
    ${name2Distance} ÷ ${name2TimeDecimal} = ${name2SpeedSol}. Therefore, ${name2}'s speed is ${name2SpeedSol} km/h <br>
    Hence, ${fastestName} is the fastest.<br><br><div class="borderBottomSolution"></div><br>`
    } 

    //Difficulty Gold
    else if (globalDifficultySelection === 3){
    document.getElementById("questionText").innerHTML += 
    `<style>
    .borderBottomSolution{
        border-bottom: 5px dotted #009870;
    }
    #questionText{
        line-height: 2;
    }
    </style>

    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i>
    <span class="questionNumber"> ${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1} drives a distance of ${name1Distance}km in ${name1Time} hours. <br>
    ${name2} drives a distance of ${name2Distance2}km in ${name2Time} hours ${name2TimeMins2} minutes. <br>
    Who has the highest average speed? <br>
    Show how you decide.<br><br><br><br><br><br><br><br><br><br>`+ `<div class="answerLine"><p id="marksGiven">(4 marks)</p></div>`

    document.getElementById("solutionText").innerHTML += 
    `
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i>
    <span class="questionNumber"> ${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1Distance} ÷ ${name1Time} = ${name1Speed}. Therefore, ${name1}'s speed is ${name1Speed} km/h <br>
    ${name2Time} hours ${name2TimeMins2} minutes can be written as ${name2TimeDecimal2}. <br>
    ${name2Distance2} ÷ ${name2TimeDecimal2} = ${name2SpeedSol2}. Therefore, ${name2}'s speed is ${name2SpeedSol2} km/h <br>
    Hence, ${fastestName} is the fastest.<br><br><div class="borderBottomSolution"></div><br>`
    }

    //Difficulty Bronze
    else if (globalDifficultySelection === 1){
    document.getElementById("questionText").innerHTML += 
    `<style>
    .borderBottomSolution{
        border-bottom: 5px dotted #009870;
    }
    #questionText{
        line-height: 2;
    }
    </style>
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i>
    <span class="questionNumber"> ${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1} drives a distance of ${name1DistanceBronze}km in ${BronzeName1Time} hours. <br>
    ${name2} drives a distance of ${name2DistanceBronze}km in ${name2TimeBronze} hours. <br>
    Who has the highest average speed? <br>
    Show how you decide.<br><br><br><br><br><br><br><br><br><br>`+`<div class="answerLine"><p id="marksGiven">(4 marks)</p></div>`

    document.getElementById("solutionText").innerHTML += 
    `
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i>
    <span class="questionNumber"> ${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1DistanceBronze} ÷ ${BronzeName1Time} = ${name1SpeedBronze}. Therefore, ${name1}'s speed is ${name1SpeedBronze} km/h <br>
    ${name2DistanceBronze} ÷ ${name2TimeBronze} = ${name2SpeedBronze}. Therefore, ${name2}'s speed is ${name2SpeedBronze} km/h <br>
    Hence, ${fastestNameBronze} is the fastest.<br><br><div class="borderBottomSolution"></div><br>`
    }
    }

    //Page Breaks
    if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 5){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 7){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 9){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 11){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 13){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 15){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 17){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 19){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 21){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 23){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 25){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 27){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 29){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 31){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 33){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 35){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 37){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 39){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 41){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 43){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 45){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 47){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 49){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 51){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 53){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 55){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 57){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 59){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 61){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    };

    if (questionNumber === 8){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 15){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    } else if (questionNumber === 22){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    } else if (questionNumber === 30){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    } else if (questionNumber === 38){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    } else if (questionNumber === 46){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    } else if (questionNumber === 54){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    } else if (questionNumber === 62){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
    }

    reassignValues();
    runQuestion();

};

const Qid0002 = () => {

    let nameFemale = namesObject.femaleNames.name[Math.floor(Math.random()*femaleNameArray.length)];
    let nameMale = namesObject.maleNames.name[Math.floor(Math.random()*maleNameArray.length)];
    let name1Array = [nameFemale,nameMale];
    let name1 = name1Array[Math.floor(Math.random()*name1Array.length)];
    let heOrShe
    if (name1 === nameMale){
        heOrShe = "he";
    } else {
        heOrShe = "she"
    };
    let hisOrHer
    if (name1 === nameMale){
        hisOrHer = "his";
    } else {
        hisOrHer = "her"
    };
    let costsArrayHelper = [10, Math.floor(Math.random()*8)+2];
    let costsArrayHelper2 = [10, Math.floor(Math.random()*8)+2];
    let costsArrayHelper3 = [10, Math.floor(Math.random()*8)+5];
    let arrayOdd = [3,5,7,9];
    let arrayEven = [4,6,8];
    let staffNum = costsArrayHelper[Math.floor(Math.random()*costsArrayHelper.length)];
    let staffHoursNum = costsArrayHelper2[Math.floor(Math.random()*costsArrayHelper2.length)];
    let staffPay = costsArrayHelper3[Math.floor(Math.random()*costsArrayHelper3.length)];
    if (staffNum === 10){
        staffHoursNum = arrayOdd[Math.floor(Math.random()*arrayOdd.length)];
        staffPay = arrayEven[Math.floor(Math.random()*arrayEven.length)];
    } else if (staffHoursNum === 10){
        staffNum = arrayOdd[Math.floor(Math.random()*arrayOdd.length)];
        staffPay = arrayEven[Math.floor(Math.random()*arrayEven.length)];
    } else if (staffPay === 10){
        staffNum = arrayOdd[Math.floor(Math.random()*arrayOdd.length)];
        staffHoursNum = arrayEven[Math.floor(Math.random()*arrayEven.length)];
    } else if (staffNum != 10 && staffHoursNum != 10 && staffPay != 10){
        staffPay = 10;
    }
    if(globalDifficultySelection === 1){
        staffNum = 10;
        staffHoursNum = 10;
        staffPay = Math.ceil(Math.random()*8)+1;
    }
    let numMeals = Math.ceil(Math.random()*9) + '0';
    let mealsCostPounds = Math.ceil(Math.random()*8)+1;
    let mealsCost = mealsCostPounds + .95;
    if (globalDifficultySelection === 3){
        let mealsCostPence = ((Math.ceil(Math.random()*80)/10 + Math.ceil(Math.random()*90)/100)+1).toFixed(2);
        mealsCost = mealsCostPence
    };
    let numPrizes = Math.ceil(Math.random()*8)+1;
    let prizesCostPounds = Math.ceil(Math.random()*7)+2;
    let prizesCost = 10*(prizesCostPounds) + 9.99;
    if (globalDifficultySelection === 3){
        prizesCostGold = (prizesCostPounds)+((Math.ceil(Math.random()*80)/10 + Math.ceil(Math.random()*90)/100)+1).toFixed(2);
        prizesCost = prizesCostGold;
    }
    let numGuests = Math.ceil((Math.random()*9)+1)*10; 
    let guestsCost = Math.ceil(Math.random()*7)+2;
    let Sponsorship = 1000; 
    if(globalDifficultySelection === 3){
        SponsorshipGoldArray = [Math.ceil(Math.random()*500),Math.ceil(Math.random()*-500)];
        Sponsorship = 1000 + SponsorshipGoldArray[Math.floor(Math.random()*SponsorshipGoldArray.length)];
    }
    if(globalDifficultySelection === 1){
        guestsCostArray = [5,2,10];
        guestsCost = guestsCostArray[Math.floor(Math.random()*guestsCostArray.length)];
    }
    
    let staffTotalCost = staffNum*staffHoursNum*staffPay;
    let mealsCostSigFig = parseFloat(mealsCost);
    let mealsCostSigFig2 = parseFloat(mealsCostSigFig.toPrecision(1));
    let totalMealsCost = mealsCostSigFig2*numMeals;
    let prizesCostsSigFig = parseFloat(prizesCost);
    let prizesCostsSigFig2 = parseFloat(prizesCostsSigFig.toPrecision(1));
    let totalPrizesCost = prizesCostsSigFig2*numPrizes;
    let totalCosts = staffTotalCost+totalMealsCost+totalPrizesCost;
    let guestTotalIncome = numGuests*guestsCost;
    let sponsorshipSigFig = parseFloat(Sponsorship.toPrecision(1));
    let totalIncome = sponsorshipSigFig+guestTotalIncome;

    let profit = totalIncome-totalCosts;
    let conclusionStatement
    if(profit>0){
        conclusionStatement = 'Since the total income is more than the total costs, then ' + name1 + ' is correct.';
    } else if (profit<=0){
        conclusionStatement = 'Since the total income is less than the total costs, then ' + name1 + ' is incorrect.';
    }

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };
    questionNumber++;

    //Question Info************************
    document.getElementById("examBoardText").innerHTML = "OCR";
    document.getElementById("tierText").innerHTML = "Foundation";
    document.getElementById("paperText").innerHTML = "2";
    document.getElementById("monthText").innerHTML = "November";
    document.getElementById("yearText").innerHTML = "2019";
    document.getElementById("questionInfoText").innerHTML = 15;
    document.getElementById("calculatorText").innerHTML = "No";
    document.getElementById("marksAvailableText").innerHTML = 6;
    document.querySelector(".tableinfo").style.display = "inline-table";


    function runQuestion(){
    document.getElementById("questionText").innerHTML +=
    `<span class="fa-stack fa-2x" style="font-size: 1rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span>
    <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
    ${name1} is planning a presentation evening. <br>
    ${name1} writes down ${hisOrHer} costs and income. <br>
    <style>
    .questionSolutionContainer{
        font-size: 0.97rem;
        line-height: 2;
        width: 100%;
    }

    #questionText{
        line-height: 2;
    }

    .questionNumber{
        color: #009870;
        font-weight: bolder;
    }

    table {
        border: 1px solid #009870;
        border-collapse: collapse;
        font-size: 1em;
        width: 100%;
        white-space: pre-line;
        line-height: 1.5;
    }
    td {
        padding: 0 1%;
        border-right: 1px solid #009870;
        width: fit-content;
    }
    th {
        padding: 0 1%;
        border-right: 1px solid #009870;
        width: fit-content;
        text-align: left;
    }
    .tableHeadings{
        text-align: center;
        border-bottom: 1px solid #009870;
        width: fit-content;
    }
    .underline{
        text-decoration: underline;
    }
    .totalCostIncome{
        text-decoration: underline;
        font-weight: bold;
    }
    .note{
        color: black;
    }
    .borderBottomSolution{
        border-bottom: 5px dotted #009870;
    }
    </style>
    <table>
        <tr>
            <th class="tableHeadings">Costs</th>
            <th class="tableHeadings">Income</th>
        </tr>
        <tr>
            <th> Staff: </th>
            <th> Guests: </th>
        </tr>
        <tr>
            <td> ${staffNum} staff each working ${staffHoursNum} hours at £${staffPay} per hour </td>
            <td> ${numGuests} guests each paying £${guestsCost} </td>
        </tr>
        <tr>
            <th> Food: </th>
            <th> Sponsorship:</th>
        </tr>
        <tr>
            <td> ${numMeals} meals at £${mealsCost} each </td>
            <td> £${Sponsorship} </td>
        </tr>
        <tr>
            <th> Prizes: </th>
        </tr>
        <tr>
            <td> ${numPrizes} prizes at £${prizesCost} each </td>
        </tr>
    </table> <br>
    ${name1} thinks ${heOrShe} will make a profit. <br>
    Use estimation to decide if ${name1} is correct. <br>
    Show all of your working.`+ `<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>` + `<div class="answerLine"><p id="marksGiven">(6 marks)</p></div>` 
    + `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>` 

    document.getElementById("solutionText").innerHTML += 
    `<span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
    <span class="underline">Costs:</span> <br>
    Staff costs:   ${staffNum} staff &#215 ${staffHoursNum} hours &#215 £${staffPay} means ${staffNum} &#215 ${staffHoursNum} &#215 £${staffPay} = <span class="underline">£${staffTotalCost}</span><br>
    Food costs: Rounding £${mealsCost} gives £${mealsCostSigFig2} and ${numMeals} meals at £${mealsCostSigFig2} means ${numMeals} &#215 £${mealsCostSigFig2} = <span class="underline">£${totalMealsCost}</span> <br>
    Prize costs: Rounding £${prizesCost} gives £${prizesCostsSigFig2} and ${numPrizes} prizes at £${prizesCostsSigFig2} means ${numPrizes} &#215 £${prizesCostsSigFig2} = <span class="underline">£${totalPrizesCost}</span> <br>
    Therefore total costs are £${staffTotalCost} + £${totalMealsCost} + £${totalPrizesCost} = <span class="totalCostIncome">£${totalCosts}</span> <br> 
    <span class="underline">Income:</span> <br>
    Guests income: ${numGuests} guests each paying £${guestsCost} means ${numGuests} &#215 £${guestsCost} = <span class="underline">£${guestTotalIncome}</span> <br>
    Sponsorship: Rounding £${Sponsorship} gives <span class="underline">£${sponsorshipSigFig}.</span> <br>
    Therefore the total income is £${guestTotalIncome} + £${sponsorshipSigFig} = <span class="totalCostIncome">£${totalIncome}</span> <br><br>
    ${conclusionStatement}<br><br><div class="borderBottomSolution"></div><br>` 
    }

    if (questionNumber === 4){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 7){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 10){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 13){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 16){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 19){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 22){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 25){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 28){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 31){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }
    
    function reassignValues(){
        nameFemale = namesObject.femaleNames.name[Math.floor(Math.random()*femaleNameArray.length)];
        nameMale = namesObject.maleNames.name[Math.floor(Math.random()*maleNameArray.length)];
        name1Array = [nameFemale,nameMale];
        name1 = name1Array[Math.floor(Math.random()*name1Array.length)];
        heOrShe
        if (name1 === nameMale){
            heOrShe = "he";
        } else {
            heOrShe = "she"
        };
        hisOrHer
        if (name1 === nameMale){
            hisOrHer = "his";
        } else {
            hisOrHer = "her"
        };
        costsArrayHelper = [10, Math.floor(Math.random()*8)+2];
        costsArrayHelper2 = [10, Math.floor(Math.random()*8)+2];
        costsArrayHelper3 = [10, Math.floor(Math.random()*8)+5];
        arrayOdd = [3,5,7,9];
        arrayEven = [4,6,8];
        staffNum = costsArrayHelper[Math.floor(Math.random()*costsArrayHelper.length)];
        staffHoursNum = costsArrayHelper2[Math.floor(Math.random()*costsArrayHelper2.length)];
        staffPay = costsArrayHelper3[Math.floor(Math.random()*costsArrayHelper3.length)];
        if (staffNum === 10){
            staffHoursNum = arrayOdd[Math.floor(Math.random()*arrayOdd.length)];
            staffPay = arrayEven[Math.floor(Math.random()*arrayEven.length)];
        } else if (staffHoursNum === 10){
            staffNum = arrayOdd[Math.floor(Math.random()*arrayOdd.length)];
            staffPay = arrayEven[Math.floor(Math.random()*arrayEven.length)];
        } else if (staffPay === 10){
            staffNum = arrayOdd[Math.floor(Math.random()*arrayOdd.length)];
            staffHoursNum = arrayEven[Math.floor(Math.random()*arrayEven.length)];
        } else if (staffNum != 10 && staffHoursNum != 10 && staffPay != 10){
            staffPay = 10;
        }
        if(globalDifficultySelection === 1){
            staffNum = 10;
            staffHoursNum = 10;
            staffPay = Math.ceil(Math.random()*8)+1;
        }
        numMeals = Math.ceil(Math.random()*9) + '0';
        mealsCostPounds = Math.ceil(Math.random()*8)+1;
        mealsCost = mealsCostPounds + .95;
        if (globalDifficultySelection === 3){
            mealsCostPence = ((Math.ceil(Math.random()*80)/10 + Math.ceil(Math.random()*90)/100)+1).toFixed(2);
            mealsCost = mealsCostPence
        };
        numPrizes = Math.ceil(Math.random()*8)+1;
        prizesCostPounds = Math.ceil(Math.random()*7)+2;
        prizesCost = 10*(prizesCostPounds) + 9.99;
        if (globalDifficultySelection === 3){
            prizesCostGold = (prizesCostPounds)+((Math.ceil(Math.random()*80)/10 + Math.ceil(Math.random()*90)/100)+1).toFixed(2);
            prizesCost = prizesCostGold;
        }
        numGuests = Math.ceil((Math.random()*9)+1)*10; 
        guestsCost = Math.ceil(Math.random()*7)+2;
        Sponsorship = 1000; 
        if(globalDifficultySelection === 3){
            SponsorshipGoldArray = [Math.ceil(Math.random()*500),Math.ceil(Math.random()*-500)];
            Sponsorship = 1000 + SponsorshipGoldArray[Math.floor(Math.random()*SponsorshipGoldArray.length)];
        }
        if(globalDifficultySelection === 1){
            guestsCostArray = [5,2,10];
            guestsCost = guestsCostArray[Math.floor(Math.random()*guestsCostArray.length)];
        }
        
        staffTotalCost = staffNum*staffHoursNum*staffPay;
        mealsCostSigFig = parseFloat(mealsCost);
        mealsCostSigFig2 = parseFloat(mealsCostSigFig.toPrecision(1));
        totalMealsCost = mealsCostSigFig2*numMeals;
        prizesCostsSigFig = parseFloat(prizesCost);
        prizesCostsSigFig2 = parseFloat(prizesCostsSigFig.toPrecision(1));
        totalPrizesCost = prizesCostsSigFig2*numPrizes;
        totalCosts = staffTotalCost+totalMealsCost+totalPrizesCost;
        guestTotalIncome = numGuests*guestsCost;
        sponsorshipSigFig = parseFloat(Sponsorship.toPrecision(1));
        totalIncome = sponsorshipSigFig+guestTotalIncome;
    
        profit = totalIncome-totalCosts;
        conclusionStatement
        if(profit>0){
            conclusionStatement = 'Since the total income is more than the total costs, then ' + name1 + ' is correct.';
        } else if (profit<=0){
            conclusionStatement = 'Since the total income is less than the total costs, then ' + name1 + ' is incorrect.';
        }
        
    
    }

    reassignValues();
    runQuestion();
}

/**********************************************
 * Button Functions *
 *******************************************/

let generateQButton = document.getElementById("generateQButton");

generateQButton.onclick = function(){
    if(globalTopicAreaSelection === 4 && globalSelectedTopic === "speedDistanceTime"){
        getBronzeNumber();
        globalDifficultySelection = 1;
        worksheetDifficultyHeadings();
        for (let i = 0; i < bronzeNumber; i++){
            Qid0001(i)}
        getSilverNumber(); 
        globalDifficultySelection = 2;
        worksheetDifficultyHeadings();
        for (let i = 0; i < silverNumber; i++){
            Qid0001(i)}
        getGoldNumber();
        globalDifficultySelection = 3;
        worksheetDifficultyHeadings();
        for (let i = 0; i < goldNumber; i++){
            Qid0001(i)}

} else if(globalTopicAreaSelection === 1 && globalSelectedTopic === "estimation"){
        getBronzeNumber();
        globalDifficultySelection = 1;
        worksheetDifficultyHeadings();
        for (let i = 0; i < bronzeNumber; i++){
            Qid0002(i)}
        getSilverNumber(); 
        globalDifficultySelection = 2;
        worksheetDifficultyHeadings();
        for (let i = 0; i < silverNumber; i++){
            Qid0002(i)}
        getGoldNumber();
        globalDifficultySelection = 3;
        worksheetDifficultyHeadings();
        for (let i = 0; i < goldNumber; i++){
            Qid0002(i)}
}; this.onclick=null; //THIS MAKES THE BUTTON ONLY WORK ONCE.
};

//Using HTML2PDF
function generatePDF(){
    window.scrollTo(0,0);
    const element = document.querySelector(".previewBoxQ");
    const options = {
        margin:     [0,0.1],
        filename:     'Worksheet.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, dpi: 192, letterRendering: true},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
    html2pdf()
    .from(element)
    .set(options)
    .save()
}

function generateSolutions(){
    const element = document.querySelector(".previewBoxSolution");
    const options = {
        margin:     [0,0.1],
        filename:     'Solutions.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, dpi: 192, letterRendering: true},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
    html2pdf()
    .from(element)
    .set(options)
    .save()
}

//Testing jsPDF
function genPDF(){
    var doc = new jsPDF();
    doc.text(20,20, 'Test');
    doc.addPage();
    doc.text(20,20,'test page 2');
    doc.save('Test.pdf');
}

