
//Names///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

let allNamesArray = [[maleNameArray, "he","He","his"],[femaleNameArray,"she","She","her"]];

//Names starting with certain letters
//A
let startsWithAMale = maleNameArray.filter((name) => name.startsWith("A"));
let startsWithAFemale = femaleNameArray.filter((name) => name.startsWith("A"));
let allNamesStartsWithA = [[startsWithAMale, "he", "He", "his"],[startsWithAFemale, "she", "She", "her"]];
//B
let startsWithBMale = maleNameArray.filter((name) => name.startsWith("B"));
let startsWithBFemale = femaleNameArray.filter((name) => name.startsWith("B"));
let allNamesStartsWithB = [[startsWithBMale, "he", "He", "his"],[startsWithBFemale, "she", "She", "her"]];
//C
let startsWithCMale = maleNameArray.filter((name) => name.startsWith("C"));
let startsWithCFemale = femaleNameArray.filter((name) => name.startsWith("C"));
let allNamesStartsWithC = [[startsWithCMale, "he", "He", "his"],[startsWithCFemale, "she", "She", "her"]];

//Global Variables/////////////////////////////////////////////////////////////////////////////////////////////////////

let questionNumber = 0

let globalDifficultySelection = 2;

let globalTopicAreaSelection;

let infoBoxButton = document.getElementById("questionInfoButton");
let infoBox = document.getElementById("infoBox");
let questionText = document.getElementById("questionText");
let solutionText = document.getElementById("solutionText");
let pagebreak = `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`


let nonCalcSign = `<span class="fa-stack fa-2x" style="font-size: 1rem;">
<i class="fas fa-calculator fa-stack-1x"></i>
<i id="banSign" class="fas fa-ban fa-stack-2x"></i>
</span>`

let calcSign = `<i class="fas fa-calculator"></i>
<i id="checkSign" class="fas fa-check"></i>`
//Other Functions /////////////////////////////////////////////////////////////////////////////////////////////////////

let worksheetTitle=""
let solutionsTitle=""
function getWorksheetTitle(){
    
    if(globalTopicAreaSelection==="speedDistanceTime"){
        worksheetTitle="Speed Distance Time Worksheet Maths Gizmo";
        solutionsTitle="Speed Distance Time Solutions Maths Gizmo";
    } else if(globalTopicAreaSelection==="estimation"){
        worksheetTitle="Estimation Worksheet Maths Gizmo"
        solutionsTitle="Estimation Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="solveQuadraticByFactorising"){
        worksheetTitle="Solve quadratics via factorising Worksheet Maths Gizmo"
        solutionsTitle="Solve quadratics via factorising Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="simultaneousEquationsNoContext"){
        worksheetTitle="Simultaneous Equations No Context Worksheet Maths Gizmo"
        solutionsTitle="Simultaneous Equations No Context Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="simultaneousEquationsContext"){
        worksheetTitle="Simultaneous Equations With Context Worksheet Maths Gizmo"
        solutionsTitle="Simultaneous Equations With Context Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="triangleAndTrapezium"){
        worksheetTitle="Area: Triangles & Trapeziums Worksheet Maths Gizmo"
        solutionsTitle="Area: Triangles & Trapeziums Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="proportionRateOfWorkProblem"){
        worksheetTitle="Proportion: Rates of Work Worksheet Maths Gizmo"
        solutionsTitle="Proportion: Rates of Work Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="percentageProfit"){
        worksheetTitle="Percentage Profit Worksheet Maths Gizmo"
        solutionsTitle="Percentage Profit Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="perimeterProblemSolving"){
        worksheetTitle="Perimeter L shape Worksheet Maths Gizmo"
        solutionsTitle="Perimeter L shape Solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="usingAFormula"){
        worksheetTitle="Garden seeds worksheet Maths Gizmo"
        solutionsTitle="Garden seeds solutions Maths Gizmo"
    } else if(globalTopicAreaSelection==="percentagesBestBuyPorblemSolving"){
        worksheetTitle="Percentages best buys worksheet Maths Gizmo";
        solutionsTitle="Percentages best buys solutions Maths Gizmo";
    } else if(globalTopicAreaSelection==="moneySkillsWithFractionsAndMixedNumbers"){
        worksheetTitle="Money skills with mixed numbers worksheet maths gizmo";
        solutionsTitle="Money skills with mixed numbers solutions maths gizmo";
    } else if(globalTopicAreaSelection==="areaOfSemiCircles"){
        worksheetTitle="Area of semi-circles worksheet maths gizmo";
        solutionsTitle="Area of semi-circles solutions maths gizmo";
    } else if(globalTopicAreaSelection==="ratioWithFractions"){
        worksheetTitle="Ratio: Converting to Fractions worksheet maths gizmo";
        solutionsTitle="Ratio: Converting to Fractions solutions maths gizmo";
    }
};

function getSelectedTopicArea(){
    globalTopicAreaSelection = document.getElementById("topicAreaSelect").value;
    getWorksheetTitle();
};

function getSelectedTopic(){
    globalSelectedTopic = document.getElementById("topicSelect").value
};

function getBronzeNumber(){
    bronzeNumber = parseInt(document.getElementById("bronzeNumber").value);
};
function getSilverNumber(){
    silverNumber = parseInt(document.getElementById("silverNumber").value)
};
function getGoldNumber(){
    goldNumber = parseInt(document.getElementById("goldNumber").value)
};

function questionInfo(){

    
    if(infoBoxButton.innerHTML==="Show Info"){
        infoBox.style.display = "block";
        infoBoxButton.innerHTML = "Hide Info";
    } else{
        infoBox.style.display = "none";
        infoBoxButton.innerHTML = "Show Info";
    }
}

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

//Function to auto sum total questions
$(document).ready(function(e){
    $("input").change(function(){
        var sum=0;
        $("input[name=forSum]").each(function(){
            sum = sum + parseInt($(this).val());
        })
        $("input[name=totalQuestions]").val(sum);
        let sumTotalQuestions = parseInt(document.getElementById("totalQuestions").value);
    if(globalTopicAreaSelection ==="estimation" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="speedDistanceTime" && sumTotalQuestions>60){
        alert("Sorry, the maximum amount of questions for this topic is 60. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="solveQuadraticByFactorising" && sumTotalQuestions>90){
        alert("Sorry, the maximum amount of questions for this topic is 90. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="simultaneousEquationsNoContext" && sumTotalQuestions>60){
        alert("Sorry, the maximum amount of questions for this topic is 60. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="simultaneousEquationsContext" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="triangleAndTrapezium" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="proportionRateOfWorkProblem" && sumTotalQuestions>60){
        alert("Sorry, the maximum amount of questions for this topic is 60. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="percentageProfit" && sumTotalQuestions>60){
        alert("Sorry, the maximum amount of questions for this topic is 60. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection ==="perimeterProblemSolving" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection==="usingAFormula" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection==="percentagesBestBuyPorblemSolving" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection==="moneySkillsWithFractionsAndMixedNumbers" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection==="areaOfSemiCircles" && sumTotalQuestions>30){
        alert("Sorry, the maximum amount of questions for this topic is 30. " +
        "Your worksheet may not load properly if you exceed this.");
    } else if(globalTopicAreaSelection==="ratioWithFractions" && sumTotalQuestions>60){
        alert("Sorry, the maximum amount of questions for this topic is 60. " +
        "Your worksheet may not load properly if you exceed this.");
    }

    
});
});

//Question ID Functions/////////////////////////////////////////////////////////////////////////////////////////////////////


//Speed distance time - comparing speeds
const Qid0001 = () => {
    infoBox.innerHTML = `
    <style>
    .infoBox{
        font-size: 1em;
    }
    </style>
    <h2>Question Info</h2>
    This question was designed based on question 14 on OCR paper 1 November 2019. It is a calculator paper and OCR awarded 4 marks. I have tried to make the speeds 
    realistic and each time the two speeds should be fairly close together so that it is not immediately obvious who is fastest.<br><br>
    Difficulty settings:<br><br>
    Bronze - There is no minutes included in either persons time and each division to calculate speed will result in an integer.<br><br>
    Silver - The minutes part for person two's time will alternate between 15, 30 and 45 minutes.<br><br>
    Gold - The minutes part for person two's time will be a multiple of 3 between 0 and 57 avoiding 15, 30 and 45.`

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
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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

// Estimation
const Qid0002 = () => {

    infoBox.innerHTML = `
    <style>
    .infoBox{
        font-size: 1em;
    }
    </style>
    <h2>Question Info</h2>
    This question was designed based on question 15 on OCR paper 2 November 2019. It is a non-calculator paper and OCR awarded 6 marks. <br><br>
    Difficulty settings:<br><br>
    Bronze - Two numbers in the staff costs are always 10. The guest payment alternates between £2, £5 and £10. Sponsorship is always £1000. <br><br>
    Silver - Only one number in staff costs is 10. The range of guest payments increase. Sponsorship is always £1000.<br><br>
    Gold - Same as silver except the sponsorship now alternates. The pence part of food and prizes cost now changes from 95 and 99 respectively.    
    
    `

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
    Show all of your working.`+ `<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>` + `<div class="answerLine"><p id="marksGiven">(6 marks)</p></div>` 
    + `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>` 

    document.getElementById("solutionText").innerHTML += 
    `
    <span class="fa-stack fa-2x" style="font-size: 1rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
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
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
};

// Solving quadratics via factorisation
function QidSolveQuadraticFactorising001(){

    infoBox.innerHTML = `
    <style>
    .infoBox{
        font-size: 1em;
    }
    </style>
    <h2>Question Info</h2>
    This question was designed based on question 27 on OCR paper 3 June 2019 although this style of question comes up in many papers. It is a calculator paper and OCR awarded 3 marks.<br><br>
    Difficulty settings:<br><br>
    Bronze - Both signs are always positive <br><br>
    Silver - The first sign is always negative and the second always positive<br><br>
    Gold - The first sign alternates whilst the second sign is always negative`

    let signArray = ["+","-"];
    let signOne
    if(globalDifficultySelection === 1){
        signOne = signArray[0];
    } else if(globalDifficultySelection === 2){
        signOne = "-";
    } else if(globalDifficultySelection === 3){
        signOne = signArray[Math.floor(Math.random()*signArray.length)];
    };
    let signTwo
    if(globalDifficultySelection === 1){
        signTwo = signArray[0];
    } else if(globalDifficultySelection === 2){
        signTwo = signArray[0];
    } else if(globalDifficultySelection === 3){
        signTwo = signArray[1];
    };
    let cValueHelp1 = (Math.ceil(Math.random()*12));
    let cValueHelp2 = (Math.ceil(Math.random()*12));
    let helperArray = [13,14,15]
    if(globalDifficultySelection === 3 && cValueHelp1 === cValueHelp2){
        cValueHelp2 = helperArray[Math.floor(Math.random()*helperArray.length)]
    }
    let cValue = cValueHelp1*cValueHelp2;
    let bValueHelp1
    if(signOne === "+" && signTwo ==="+"){
        bValueHelp1 = cValueHelp1+cValueHelp2
    } else if(signOne === "-" && signTwo === "+"){
        bValueHelp1 = cValueHelp1+cValueHelp2
    } else if(signOne === "+" && signTwo === "-"){
        bValueHelp1 = cValueHelp1-cValueHelp2
    } else if(signOne === "-" && signTwo === "-"){
        bValueHelp1 = cValueHelp2-cValueHelp1
    }
    let bValue = Math.abs(bValueHelp1);
    let bValueSol = bValue
    if(bValue === 1){
        bValue=""
        bValueSol = 1
    }

    let solSignOne
    let solSignTwo
    if(signOne === "+" && signTwo === "+"){
        solSignOne ="+";
        solSignTwo ="+";
    } else if(signOne === "-" && signTwo === "+"){
        solSignOne ="-";
        solSignTwo ="-";
    } else if(signOne === "+" && signTwo === "-" && (cValueHelp1-cValueHelp2)>0){
        solSignOne ="+";
        solSignTwo ="-";
    } else if(signOne === "+" && signTwo === "-" && (cValueHelp1-cValueHelp2)<0){
        solSignOne ="-";
        solSignTwo ="+";
    } else if(signOne === "-" && signTwo === "-" && (cValueHelp2-cValueHelp1)>0){
        solSignOne ="+";
        solSignTwo ="-";
    } else if(signOne === "-" && signTwo === "-" && (cValueHelp2-cValueHelp1)<0){
        solSignOne ="-";
        solSignTwo ="+";
    }

    let solSignFinal1
    let solSignFinal2
    if (solSignOne ==="+"){
        solSignFinal1 ="";
    } else {
        solSignFinal1 ="-";
    };

    if(solSignTwo === "+"){
        solSignFinal2 ="";
    } else {
        solSignFinal2 ="-"
    };

    let solSignFinalFinal1
    let solSignFinalFinal2
    if (solSignOne === "+"){
        solSignFinalFinal1 ="-";
    } else{
        solSignFinalFinal1 ="";
    };

    if(solSignTwo ==="+"){
        solSignFinalFinal2 ="-";
    } else{
        solSignFinalFinal2 ="";
    };

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };
    questionNumber++;
    

    function runQuestion(){
        // Question Text
    document.getElementById("questionText").innerHTML +=
    `
    <style>
    .centeredQuadratic{
        width: 100%;
        padding: 40%;
        font-family: 'sans-serif';
    }
    .superscripts{
        font-size: 0.75em;
    }
    .answerLines{
        float: right;
    }

    </style>
    
    <span class="fa-stack fa-2x" style="font-size: 1rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span>
    <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span> Solve by factorising.<br>
    <span class="centeredQuadratic"> &#119909<sup class="superscripts">2</sup> ${signOne} ${bValue}&#119909 ${signTwo} ${cValue} = 0 <br>
    </span><br><br><br><br><br><br><br><br>
    <span class="answerLines">&#119909 = _____________ or &#119909 = _____________     </span><br><br>`+ `<p id="marksGiven">(3 marks)</p><br><br>`

// Solution Text
    document.getElementById("solutionText").innerHTML +=
    `<span class="fa-stack fa-2x" style="font-size: 1rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
    To factorise, I need to think of two numbers that multiply together to give ${signTwo}${cValue} and sum together to give ${signOne}${bValueSol}.<br>
    ${solSignFinal1}${cValueHelp1} &#215 ${solSignFinal2}${cValueHelp2} = ${signTwo}${cValue}<br>
    ${solSignFinal1}${cValueHelp1} + ${solSignFinal2}${cValueHelp2} = ${signOne}${bValueSol} <br>
    Thus, the two numbers that satisfy these conditions are ${solSignFinal1}${cValueHelp1} and ${solSignFinal2}${cValueHelp2}.<br>
    Therefore, factorising gives:<br> (&#119909 ${solSignOne} ${cValueHelp1})(&#119909 ${solSignTwo} ${cValueHelp2}) = 0 <br>
    Therefore &#119909 = ${solSignFinalFinal1}${cValueHelp1} or  &#119909 = ${solSignFinalFinal2}${cValueHelp2}.<br><br>
    <div class="borderBottomSolution"></div><br>`
    }


    function reassignValues(){
    signArray = ["+","-"];
    signOne
    if(globalDifficultySelection === 1){
        signOne = signArray[0];
    } else if(globalDifficultySelection === 2){
        signOne = "-";
    } else if(globalDifficultySelection === 3){
        signOne = signArray[Math.floor(Math.random()*signArray.length)];
    };
    signTwo
    if(globalDifficultySelection === 1){
        signTwo = signArray[0];
    } else if(globalDifficultySelection === 2){
        signTwo = signArray[0];
    } else if(globalDifficultySelection === 3){
        signTwo = signArray[1];
    };
    cValueHelp1 = (Math.ceil(Math.random()*12));
    cValueHelp2 = (Math.ceil(Math.random()*12));
    helperArray = [13,14,15]
    if(globalDifficultySelection === 3 && cValueHelp1 === cValueHelp2){
        cValueHelp2 = helperArray[Math.floor(Math.random()*helperArray.length)]
    }
    cValue = cValueHelp1*cValueHelp2;
    bValueHelp1
    if(signOne === "+" && signTwo ==="+"){
        bValueHelp1 = cValueHelp1+cValueHelp2
    } else if(signOne === "-" && signTwo === "+"){
        bValueHelp1 = cValueHelp1+cValueHelp2
    } else if(signOne === "+" && signTwo === "-"){
        bValueHelp1 = cValueHelp1-cValueHelp2
    } else if(signOne === "-" && signTwo === "-"){
        bValueHelp1 = cValueHelp2-cValueHelp1
    }
    bValue = Math.abs(bValueHelp1);
    bValueSol = bValue
    if(bValue === 1){
        bValue=""
        bValueSol = 1
    }

    solSignOne
    solSignTwo
    if(signOne === "+" && signTwo === "+"){
        solSignOne ="+";
        solSignTwo ="+";
    } else if(signOne === "-" && signTwo === "+"){
        solSignOne ="-";
        solSignTwo ="-";
    } else if(signOne === "+" && signTwo === "-" && (cValueHelp1-cValueHelp2)>0){
        solSignOne ="+";
        solSignTwo ="-";
    } else if(signOne === "+" && signTwo === "-" && (cValueHelp1-cValueHelp2)<0){
        solSignOne ="-";
        solSignTwo ="+";
    } else if(signOne === "-" && signTwo === "-" && (cValueHelp2-cValueHelp1)>0){
        solSignOne ="+";
        solSignTwo ="-";
    } else if(signOne === "-" && signTwo === "-" && (cValueHelp2-cValueHelp1)<0){
        solSignOne ="-";
        solSignTwo ="+";
    }

    solSignFinal1
    solSignFinal2
    if (solSignOne ==="+"){
        solSignFinal1 ="";
    } else {
        solSignFinal1 ="-";
    };

    if(solSignTwo === "+"){
        solSignFinal2 ="";
    } else {
        solSignFinal2 ="-"
    };

    solSignFinalFinal1
    solSignFinalFinal2
    if (solSignOne === "+"){
        solSignFinalFinal1 ="-";
    } else{
        solSignFinalFinal1 ="";
    };

    if(solSignTwo ==="+"){
        solSignFinalFinal2 ="-";
    } else{
        solSignFinalFinal2 ="";
    };
}


  //Page Breaks
  if (questionNumber === 4){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if (questionNumber === 7){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 10){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 13){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 16){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 19){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 22){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 25){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 28){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 31){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 34){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 37){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 40){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 43){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 46){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 49){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 52){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 55){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 58){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 61){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 64){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 67){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 70){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 73){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 76){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 79){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 82){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 85){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 88){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
} else if (questionNumber === 91){
    document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
};

if (questionNumber === 5){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 9){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 13){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 17){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 21){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 25){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 29){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 33){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 37){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 41){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 45){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 49){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 53){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 57){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 61){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 65){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 69){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 73){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 77){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 81){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 85){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 89){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 93){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 97){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 101){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
} else if(questionNumber === 105){
    document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
}
    
    reassignValues();
    runQuestion();

}

//Simultaneous Equations No context
function QidSimultaneousEquationsNoContext(){

    infoBox.innerHTML = `
    <style>
    .infoBox{
        font-size: 1em;
    }
    </style>
    <h2>Question Info</h2>
    This question was designed based on question 21 on OCR paper 2 November 2020. It is a non-calculator paper and OCR awarded 4 marks. I have made it a calculator question
    due to the random number generators. <br><br>
    Difficulty settings:<br><br>
    Bronze - The coefficients of &#119909 in both equations are always equal. <br><br>
    Silver - The coefficients of &#119909 and &#119910 in both equations are always non-equal. My solution uses the smallest LCM of coefficents but there are many ways you can solve these. <br><br>
    Gold - Same as silver but also adds negative numbers.`
    
    let xCoefficentEqn1 = Math.ceil((Math.random()*9)+1);

    let yCoefficentEqn1
    for(yCoefficentEqn1 = Math.ceil(Math.random()*9)+1 ; yCoefficentEqn1 === xCoefficentEqn1;){
        yCoefficentEqn1 = Math.ceil(Math.random()*9)+1;
    };
    
    let xValue
    if(globalDifficultySelection === 2){
        xValue = Math.ceil((Math.random()*9)+1);
    } else if(globalDifficultySelection === 3){
        xValue = Math.ceil((Math.random()*12)+1)*-1
    } else if(globalDifficultySelection === 1){
        xValue = Math.ceil((Math.random()*9)+1);
    }

    let yValue
    // This loop makes sure x and y values aren't equal for future ref!!!. Note it is yval = xval, not yval != xval as stopping condition has to evaluate as false to stop.
    if(globalDifficultySelection === 2){
        for(yValue = Math.ceil((Math.random()*9)+1) ; yValue === xValue;){
            yValue = Math.ceil((Math.random()*9)+1);
        };
    } else if(globalDifficultySelection === 3){
        for(yValue = Math.ceil((Math.random()*12)+1)*-1; yValue === xValue;){
            yValue = Math.ceil((Math.random()*12)+1)*-1;
        };
    } else if(globalDifficultySelection === 1){
        yValue = Math.ceil((Math.random()*9)+1);
    }
     

    let eqn1Num = xCoefficentEqn1*xValue + yCoefficentEqn1*yValue

    let xCoefficentEqn2
    if(globalDifficultySelection === 2){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 3){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 1){
        xCoefficentEqn2 = xCoefficentEqn1;
    }

    let yCoefficentEqn2
    for(yCoefficentEqn2 = Math.ceil(Math.random()*9)+1; yCoefficentEqn2 === yCoefficentEqn1;){
        yCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
    };

    let eqn2Num = xCoefficentEqn2*xValue + yCoefficentEqn2*yValue;

    function lcm_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
         return false;
       return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
     }
     
     function gcd_two_numbers(x, y) {
       x = Math.abs(x);
       y = Math.abs(y);
       while(y) {
         var t = y;
         y = x % y;
         x = t;
       }
       return x;
     }

     let lcmX =lcm_two_numbers(xCoefficentEqn1,xCoefficentEqn2);
     let lcmY =lcm_two_numbers(yCoefficentEqn1,yCoefficentEqn2);
     
    let eqn1MultiplierX = lcmX/xCoefficentEqn1
    let eqn2MultiplierX = lcmX/xCoefficentEqn2
    let eqn1YCoefficientMult = yCoefficentEqn1*eqn1MultiplierX
    let eqn1NumMult = eqn1Num*eqn1MultiplierX
    let eqn2YCoefficientMult = yCoefficentEqn2*eqn2MultiplierX
    let eqn2NumMult = eqn2Num*eqn2MultiplierX

    let subtractedEqnYCoefficient = eqn1YCoefficientMult - eqn2YCoefficientMult
    let subtractedEqnNum = eqn1NumMult - eqn2NumMult

    let substitutedYVal = yCoefficentEqn1*yValue

    let eqn1MultiplierY = lcmY/yCoefficentEqn1
    let eqn2MultiplierY = lcmY/yCoefficentEqn2
    let eqn1XCoefficientMult = xCoefficentEqn1*eqn1MultiplierY
    let eqn2XCoefficientMult = xCoefficentEqn2*eqn2MultiplierY
    let eqn1NumMultY = eqn1Num*eqn1MultiplierY
    let eqn2NumMultY = eqn2Num*eqn2MultiplierY

    let subtractedEqnXCoefficient = eqn1XCoefficientMult - eqn2XCoefficientMult
    let subtractedEqnNumY = eqn1NumMultY - eqn2NumMultY

    let substitutedXVal = xCoefficentEqn1*xValue

    let bronzeSubtractedYval = yCoefficentEqn1 - yCoefficentEqn2
    let bronzeSubtractedNum = eqn1Num - eqn2Num

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };
    questionNumber++;

    function runQuestion(){
        // Question Text
    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .centeredEquation{
        width: 100%;
        text-align: center;
        font-family: 'sans-serif';
    }
    .answerLines{
        float: right;
    }
    </style>
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i> <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="answerLines">
    &#119909 = ____________<br><br>
    &#119910 = ____________<br>
    <p id="marksGiven">(4 marks)</p>
    </div><br><br><br><br>

    
    `

// Solution Text

    if(globalDifficultySelection === 2){
        if(lcmX <= lcmY){
            document.getElementById("solutionText").innerHTML += 
            `<style>
        #solutionText{
            line-height: 1.5;
        }
        </style>`+`<i class="fas fa-calculator"></i>
            <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
            Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div><br> 
            The lowest common multiple of the &#119909-coefficients is ${lcmX}<br>
            Multiplying the top equation by ${eqn1MultiplierX} and the bottom equation by ${eqn2MultiplierX}, we get:<br>
            <div class="centeredEquation">
            ${lcmX}&#119909 + ${eqn1YCoefficientMult}&#119910 = ${eqn1NumMult}<br>
            ${lcmX}&#119909 + ${eqn2YCoefficientMult}&#119910 = ${eqn2NumMult}
            </div>`
            if(eqn1YCoefficientMult>eqn2YCoefficientMult){
                document.getElementById("solutionText").innerHTML += 
                `We can now subract the bottom equation from the top equation and solve for &#119910, giving:
                <div class="centeredEquation">
                ${subtractedEqnYCoefficient}&#119910 = ${subtractedEqnNum}<br>
                &#119910 = ${yValue}
                </div>
                Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
                &#119909 = ${xValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            } else {
                document.getElementById("solutionText").innerHTML +=
                `We can now subtract the top equation from the bottom equation and solve for &#119910, giving:
                <div class="centeredEquation">
                ${subtractedEqnYCoefficient*-1}&#119910 = ${subtractedEqnNum*-1}<br>
                &#119910 = ${yValue}
                </div>
                Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
                &#119909 = ${xValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            }
        } else if(lcmX>lcmY){
            document.getElementById("solutionText").innerHTML +=
            `<i class="fas fa-calculator"></i>
            <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
            Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div> 
            The lowest common multiple of the &#119910-coefficients is ${lcmY}<br>
            Multiplying the top equation by ${eqn1MultiplierY} and the bottom equation by ${eqn2MultiplierY}, we get:<br>
            <div class="centeredEquation">
            ${eqn1XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn1NumMultY}<br>
            ${eqn2XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn2NumMultY}
            </div>`
            if(eqn1XCoefficientMult>eqn2XCoefficientMult){
                document.getElementById("solutionText").innerHTML += 
                `We can now subract the bottom equation from the top equation and solve for &#119909, giving:
                <div class="centeredEquation">
                ${subtractedEqnXCoefficient}&#119909 = ${subtractedEqnNumY}<br>
                &#119909 = ${xValue}
                </div>
                Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
                &#119910 = ${yValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            } else {
                document.getElementById("solutionText").innerHTML += 
                `We can now subract the top equation from the bottom equation and solve for &#119909, giving:
                <div class="centeredEquation">
                ${subtractedEqnXCoefficient*-1}&#119909 = ${subtractedEqnNumY*-1}<br>
                &#119909 = ${xValue}
                </div>
                Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
                &#119910 = ${yValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            }
        }
        
    } else if(globalDifficultySelection === 3){
        if(lcmX <= lcmY){
            document.getElementById("solutionText").innerHTML += 
            `<i class="fas fa-calculator"></i>
            <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
            Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div>  
            The lowest common multiple of the &#119909-coefficients is ${lcmX}<br>
            Multiplying the top equation by ${eqn1MultiplierX} and the bottom equation by ${eqn2MultiplierX}, we get:<br>
            <div class="centeredEquation">
            ${lcmX}&#119909 + ${eqn1YCoefficientMult}&#119910 = ${eqn1NumMult}<br>
            ${lcmX}&#119909 + ${eqn2YCoefficientMult}&#119910 = ${eqn2NumMult}
            </div>`
            if(eqn1YCoefficientMult>eqn2YCoefficientMult){
                document.getElementById("solutionText").innerHTML += 
                `We can now subract the bottom equation from the top equation and solve for &#119910, giving:
                <div class="centeredEquation">
                ${subtractedEqnYCoefficient}&#119910 = ${subtractedEqnNum}<br>
                &#119910 = ${yValue}
                </div>
                Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 - ${substitutedYVal*-1} = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
                &#119909 = ${xValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            } else {
                document.getElementById("solutionText").innerHTML +=
                `We can now subtract the top equation from the bottom equation and solve for &#119910, giving:
                <div class="centeredEquation">
                ${subtractedEqnYCoefficient*-1}&#119910 = ${subtractedEqnNum*-1}<br>
                &#119910 = ${yValue}
                </div>
                Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 - ${substitutedYVal*-1} = ${eqn1Num}<br>
                ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
                &#119909 = ${xValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            }
        } else if(lcmX>lcmY){
            document.getElementById("solutionText").innerHTML +=
            `<i class="fas fa-calculator"></i>
            <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
            Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div> 
            The lowest common multiple of the &#119910-coefficients is ${lcmY}<br>
            Multiplying the top equation by ${eqn1MultiplierY} and the bottom equation by ${eqn2MultiplierY}, we get:<br>
            <div class="centeredEquation">
            ${eqn1XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn1NumMultY}<br>
            ${eqn2XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn2NumMultY}
            </div>`
            if(eqn1XCoefficientMult>eqn2XCoefficientMult){
                document.getElementById("solutionText").innerHTML += 
                `We can now subract the bottom equation from the top equation and solve for &#119909, giving:
                <div class="centeredEquation">
                ${subtractedEqnXCoefficient}&#119909 = ${subtractedEqnNumY}<br>
                &#119909 = ${xValue}
                </div>
                Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
                &#119910 = ${yValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            } else {
                document.getElementById("solutionText").innerHTML += 
                `We can now subract the top equation from the bottom equation and solve for &#119909, giving:
                <div class="centeredEquation">
                ${subtractedEqnXCoefficient*-1}&#119909 = ${subtractedEqnNumY*-1}<br>
                &#119909 = ${xValue}
                </div>
                Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
                <div class="centeredEquation">
                ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
                ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
                &#119910 = ${yValue}
                <br>
    <div class="borderBottomSolution"></div><br>
                </div>
                `
            }
        }
    } else if(globalDifficultySelection === 1){
        if(yCoefficentEqn1>yCoefficentEqn2){
            document.getElementById("solutionText").innerHTML += 
            `<i class="fas fa-calculator"></i>
            <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
            Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div> 
            By subtracting the bottom equation from the top equation and solving for &#119910, we have:
            <div class="centeredEquation">
            ${bronzeSubtractedYval}&#119910 = ${bronzeSubtractedNum}<br>
            &#119910 = ${yValue}
            </div>
            Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal}<br>
            &#119909 = ${xValue}
            <br>
    <div class="borderBottomSolution"></div><br>
            </div>`
        } else{
            document.getElementById("solutionText").innerHTML += 
            `<i class="fas fa-calculator"></i>
            <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
            Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div> 
            By subtracting the top equation from the bottom equation and solving for &#119910, we have:
            <div class="centeredEquation">
            ${bronzeSubtractedYval*-1}&#119910 = ${bronzeSubtractedNum*-1}<br>
            &#119910 = ${yValue}
            </div>
            Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal}<br>
            &#119909 = ${xValue}
            <br>
    <div class="borderBottomSolution"></div><br>
            </div>`
        }
    }
        
    }

    //Page Breaks
    if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    if (questionNumber === 3){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 5){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 7){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 9){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 11){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 13){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 15){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 17){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 19){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 21){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 23){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 25){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 27){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 29){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 31){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 33){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 35){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 37){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 39){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 41){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 43){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 45){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 47){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 49){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 51){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 53){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 55){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 57){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 59){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 61){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 63){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 65){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }

    function reassignValues(){
        xCoefficentEqn1 = Math.ceil((Math.random()*9)+1);

        yCoefficentEqn1
    for(yCoefficentEqn1 = Math.ceil(Math.random()*9)+1 ; yCoefficentEqn1 === xCoefficentEqn1;){
        yCoefficentEqn1 = Math.ceil(Math.random()*9)+1;
    };
    
        xValue
    if(globalDifficultySelection === 2){
        xValue = Math.ceil((Math.random()*9)+1);
    } else if(globalDifficultySelection === 3){
        xValue = Math.ceil((Math.random()*12)+1)*-1
    } else if(globalDifficultySelection === 1){
        xValue = Math.ceil((Math.random()*9)+1);
    }

        yValue
    // This loop makes sure x and y values aren't equal for future ref!!!. Note it is yval = xval, not yval != xval as stopping condition has to evaluate as false to stop.
    if(globalDifficultySelection === 2){
        for(yValue = Math.ceil((Math.random()*9)+1) ; yValue === xValue;){
            yValue = Math.ceil((Math.random()*9)+1);
        };
    } else if(globalDifficultySelection === 3){
        for(yValue = Math.ceil((Math.random()*12)+1)*-1; yValue === xValue;){
            yValue = Math.ceil((Math.random()*12)+1)*-1;
        };
    } else if(globalDifficultySelection === 1){
        yValue = Math.ceil((Math.random()*9)+1);
    }
     

        eqn1Num = xCoefficentEqn1*xValue + yCoefficentEqn1*yValue

        xCoefficentEqn2
    if(globalDifficultySelection === 2){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 3){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 1){
        xCoefficentEqn2 = xCoefficentEqn1;
    }

        yCoefficentEqn2
    for(yCoefficentEqn2 = Math.ceil(Math.random()*9)+1; yCoefficentEqn2 === yCoefficentEqn1;){
        yCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
    };

        eqn2Num = xCoefficentEqn2*xValue + yCoefficentEqn2*yValue;

    function lcm_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
         return false;
       return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
     }
     
     function gcd_two_numbers(x, y) {
       x = Math.abs(x);
       y = Math.abs(y);
       while(y) {
         var t = y;
         y = x % y;
         x = t;
       }
       return x;
     }

        lcmX =lcm_two_numbers(xCoefficentEqn1,xCoefficentEqn2);
        lcmY =lcm_two_numbers(yCoefficentEqn1,yCoefficentEqn2);
     
        eqn1MultiplierX = lcmX/xCoefficentEqn1
        eqn2MultiplierX = lcmX/xCoefficentEqn2
        eqn1YCoefficientMult = yCoefficentEqn1*eqn1MultiplierX
        eqn1NumMult = eqn1Num*eqn1MultiplierX
        eqn2YCoefficientMult = yCoefficentEqn2*eqn2MultiplierX
        eqn2NumMult = eqn2Num*eqn2MultiplierX

        subtractedEqnYCoefficient = eqn1YCoefficientMult - eqn2YCoefficientMult
        subtractedEqnNum = eqn1NumMult - eqn2NumMult

        substitutedYVal = yCoefficentEqn1*yValue

        eqn1MultiplierY = lcmY/yCoefficentEqn1
        eqn2MultiplierY = lcmY/yCoefficentEqn2
        eqn1XCoefficientMult = xCoefficentEqn1*eqn1MultiplierY
        eqn2XCoefficientMult = xCoefficentEqn2*eqn2MultiplierY
        eqn1NumMultY = eqn1Num*eqn1MultiplierY
        eqn2NumMultY = eqn2Num*eqn2MultiplierY

        subtractedEqnXCoefficient = eqn1XCoefficientMult - eqn2XCoefficientMult
        subtractedEqnNumY = eqn1NumMultY - eqn2NumMultY

        substitutedXVal = xCoefficentEqn1*xValue

        bronzeSubtractedYval = yCoefficentEqn1 - yCoefficentEqn2
        bronzeSubtractedNum = eqn1Num - eqn2Num

    }
    

    reassignValues();
    runQuestion();

}

//Simultaneous Equations with context
function QidSimultaneousEquationsContext(){

    infoBox.innerHTML = `
    <style>
    .infoBox{
        font-size: 1em;
    }
    </style>
    <h2>Question Info</h2>
    This question was designed based on question 21 on OCR paper 1 May 2019. It is a calculator paper and OCR awarded 5 marks.<br><br>
    Difficulty settings:<br><br>
    Bronze - The number of shirts each person buys are always equal. <br><br>
    Silver - The number of shirts and jumpers each person buys are non-equal. <br><br>
    Gold - Same as silver but the range of numbers generated increases.`

    let name1 =  maleNameArray[Math.floor(Math.random()*maleNameArray.length)];
    let name2 = femaleNameArray[Math.floor(Math.random()*femaleNameArray.length)];

    let xCoefficentEqn1 = Math.ceil((Math.random()*9)+1);

    let yCoefficentEqn1
    for(yCoefficentEqn1 = Math.ceil(Math.random()*9)+1 ; yCoefficentEqn1 === xCoefficentEqn1;){
        yCoefficentEqn1 = Math.ceil(Math.random()*9)+1;
    };
    
    let xValue
    if(globalDifficultySelection === 2){
        xValue = Math.ceil((Math.random()*9)+1);
    } else if(globalDifficultySelection === 3){
        xValue = Math.ceil((Math.random()*12)+6)
    } else if(globalDifficultySelection === 1){
        xValue = Math.ceil((Math.random()*9)+1);
    }

    let yValue
    // This loop makes sure x and y values aren't equal for future ref!!!. Note it is yval = xval, not yval != xval as stopping condition has to evaluate as false to stop.
    if(globalDifficultySelection === 2){
        for(yValue = Math.ceil((Math.random()*9)+1) ; yValue === xValue;){
            yValue = Math.ceil((Math.random()*9)+1);
        };
    } else if(globalDifficultySelection === 3){
        for(yValue = Math.ceil((Math.random()*12)+6); yValue === xValue;){
            yValue = Math.ceil((Math.random()*12)+6);
        };
    } else if(globalDifficultySelection === 1){
        yValue = Math.ceil((Math.random()*9)+1);
    }
     

    let eqn1Num = xCoefficentEqn1*xValue + yCoefficentEqn1*yValue

    let xCoefficentEqn2
    if(globalDifficultySelection === 2){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 3){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*12)+6) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*12)+6;
        };
    } else if(globalDifficultySelection === 1){
        xCoefficentEqn2 = xCoefficentEqn1;
    }

    let yCoefficentEqn2
    for(yCoefficentEqn2 = Math.ceil(Math.random()*9)+1; yCoefficentEqn2 === yCoefficentEqn1;){
        yCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
    };

    let eqn2Num = xCoefficentEqn2*xValue + yCoefficentEqn2*yValue;

    function lcm_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
         return false;
       return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
     }
     
     function gcd_two_numbers(x, y) {
       x = Math.abs(x);
       y = Math.abs(y);
       while(y) {
         var t = y;
         y = x % y;
         x = t;
       }
       return x;
     }

     let lcmX =lcm_two_numbers(xCoefficentEqn1,xCoefficentEqn2);
     let lcmY =lcm_two_numbers(yCoefficentEqn1,yCoefficentEqn2);
     
    let eqn1MultiplierX = lcmX/xCoefficentEqn1
    let eqn2MultiplierX = lcmX/xCoefficentEqn2
    let eqn1YCoefficientMult = yCoefficentEqn1*eqn1MultiplierX
    let eqn1NumMult = eqn1Num*eqn1MultiplierX
    let eqn2YCoefficientMult = yCoefficentEqn2*eqn2MultiplierX
    let eqn2NumMult = eqn2Num*eqn2MultiplierX

    let subtractedEqnYCoefficient = eqn1YCoefficientMult - eqn2YCoefficientMult
    let subtractedEqnNum = eqn1NumMult - eqn2NumMult

    let substitutedYVal = yCoefficentEqn1*yValue

    let eqn1MultiplierY = lcmY/yCoefficentEqn1
    let eqn2MultiplierY = lcmY/yCoefficentEqn2
    let eqn1XCoefficientMult = xCoefficentEqn1*eqn1MultiplierY
    let eqn2XCoefficientMult = xCoefficentEqn2*eqn2MultiplierY
    let eqn1NumMultY = eqn1Num*eqn1MultiplierY
    let eqn2NumMultY = eqn2Num*eqn2MultiplierY

    let subtractedEqnXCoefficient = eqn1XCoefficientMult - eqn2XCoefficientMult
    let subtractedEqnNumY = eqn1NumMultY - eqn2NumMultY

    let substitutedXVal = xCoefficentEqn1*xValue

    let bronzeSubtractedYval = yCoefficentEqn1 - yCoefficentEqn2
    let bronzeSubtractedNum = eqn1Num - eqn2Num

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };
    questionNumber++;

    function runQuestion(){
        // Question Text
    document.getElementById("questionText").innerHTML += 
    `
    <style>
    .centeredEquation{
        width: 100%;
        text-align: center;
        font-family: 'sans-serif';
    }
    .answerLines{
        float: right;
    }
    </style>
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i> <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br>
    ${name1} and ${name2} buy some clothes.<br>
    <br>
    ${name1} buys ${xCoefficentEqn1} shirts and ${yCoefficentEqn1} jumpers. He pays £${eqn1Num}.<br>
    ${name2} buys ${xCoefficentEqn2} shirts and ${yCoefficentEqn2} jumpers. She pays £${eqn2Num}.<br><br>
    Assume that each shirt has the same cost and that each jumper has the same cost.<br>
    <br>
    Work out the cost of one shirt and the cost of one jumper.<br>
    You must show your working.<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="answerLines">
    Cost of one shirt £ ____________<br><br>
    Cost of one jumper £ ____________<br>
    <p id="marksGiven">(5 marks)</p>
    </div><br><br><br><br>
    `

// Solution Text

if(globalDifficultySelection === 2){
    document.getElementById("solutionText").innerHTML += `
    <style>
    #solutionText{
        line-height: 1.5rem;
    }
    </style>`
    if(lcmX <= lcmY){
        document.getElementById("solutionText").innerHTML += 
        `
        <i class="fas fa-calculator"></i>
        <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        We can express this question as the following simultaneous equation.<br>
        Let the cost of a shirt = &#119909 and the cost of a jumper = &#119910.
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
        ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
        <br></div> 
        The lowest common multiple of the &#119909-coefficients is ${lcmX}<br>
        Multiplying the top equation by ${eqn1MultiplierX} and the bottom equation by ${eqn2MultiplierX}, we get:<br>
        <div class="centeredEquation">
        ${lcmX}&#119909 + ${eqn1YCoefficientMult}&#119910 = ${eqn1NumMult}<br>
        ${lcmX}&#119909 + ${eqn2YCoefficientMult}&#119910 = ${eqn2NumMult}
        </div>`
        if(eqn1YCoefficientMult>eqn2YCoefficientMult){
            document.getElementById("solutionText").innerHTML += 
            `We can now subract the bottom equation from the top equation and solve for &#119910, giving:
            <div class="centeredEquation">
            ${subtractedEqnYCoefficient}&#119910 = ${subtractedEqnNum}<br>
            &#119910 = ${yValue}
            </div>
            Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
            &#119909 = ${xValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
            <br><br>
    <div class="borderBottomSolution"></div><br>
            </div>
            `
        } else {
            document.getElementById("solutionText").innerHTML +=
            `We can now subtract the top equation from the bottom equation and solve for &#119910, giving:
            <div class="centeredEquation">
            ${subtractedEqnYCoefficient*-1}&#119910 = ${subtractedEqnNum*-1}<br>
            &#119910 = ${yValue}
            </div>
            Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
            &#119909 = ${xValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
            <div class="borderBottomSolution"></div><br>
            </div>
            `
        }
    } else if(lcmX>lcmY){
        document.getElementById("solutionText").innerHTML +=
        `<i class="fas fa-calculator"></i>
        <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        We can express this question as the following simultaneous equation.<br>
        Let the cost of a shirt = &#119909 and the cost of a jumper = &#119910.
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
        ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
        <br></div>
        The lowest common multiple of the &#119910-coefficients is ${lcmY}<br>
        Multiplying the top equation by ${eqn1MultiplierY} and the bottom equation by ${eqn2MultiplierY}, we get:<br>
        <div class="centeredEquation">
        ${eqn1XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn1NumMultY}<br>
        ${eqn2XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn2NumMultY}
        </div>`
        if(eqn1XCoefficientMult>eqn2XCoefficientMult){
            document.getElementById("solutionText").innerHTML += 
            `We can now subract the bottom equation from the top equation and solve for &#119909, giving:
            <div class="centeredEquation">
            ${subtractedEqnXCoefficient}&#119909 = ${subtractedEqnNumY}<br>
            &#119909 = ${xValue}
            </div>
            Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
            &#119910 = ${yValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
            <div class="borderBottomSolution"></div><br>
            </div>
            `
        } else {
            document.getElementById("solutionText").innerHTML += 
            `We can now subract the top equation from the bottom equation and solve for &#119909, giving:
            <div class="centeredEquation">
            ${subtractedEqnXCoefficient*-1}&#119909 = ${subtractedEqnNumY*-1}<br>
            &#119909 = ${xValue}
            </div>
            Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
            &#119910 = ${yValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
            <div class="borderBottomSolution"></div><br>
            </div>
            `
        }
    }
    
} else if(globalDifficultySelection === 3){
    if(lcmX <= lcmY){
        document.getElementById("solutionText").innerHTML += 
        `
        <i class="fas fa-calculator"></i>
        <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        We can express this question as the following simultaneous equation.<br>
        Let the cost of a shirt = &#119909 and the cost of a jumper = &#119910.
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
        ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
        <br></div> 
        The lowest common multiple of the &#119909-coefficients is ${lcmX}<br>
        Multiplying the top equation by ${eqn1MultiplierX} and the bottom equation by ${eqn2MultiplierX}, we get:<br>
        <div class="centeredEquation">
        ${lcmX}&#119909 + ${eqn1YCoefficientMult}&#119910 = ${eqn1NumMult}<br>
        ${lcmX}&#119909 + ${eqn2YCoefficientMult}&#119910 = ${eqn2NumMult}
        </div>`
        if(eqn1YCoefficientMult>eqn2YCoefficientMult){
            document.getElementById("solutionText").innerHTML += 
            `We can now subract the bottom equation from the top equation and solve for &#119910, giving:
            <div class="centeredEquation">
            ${subtractedEqnYCoefficient}&#119910 = ${subtractedEqnNum}<br>
            &#119910 = ${yValue}
            </div>
            Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
            &#119909 = ${xValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
            <br><br>
    <div class="borderBottomSolution"></div><br>
            </div>
            `
        } else {
            document.getElementById("solutionText").innerHTML +=
            `We can now subtract the top equation from the bottom equation and solve for &#119910, giving:
            <div class="centeredEquation">
            ${subtractedEqnYCoefficient*-1}&#119910 = ${subtractedEqnNum*-1}<br>
            &#119910 = ${yValue}
            </div>
            Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
            ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal} <br>
            &#119909 = ${xValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
            <div class="borderBottomSolution"></div><br>
            </div>
            `
        }
    } else if(lcmX>lcmY){
        document.getElementById("solutionText").innerHTML +=
        `<i class="fas fa-calculator"></i>
        <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        We can express this question as the following simultaneous equation.<br>
        Let the cost of a shirt = &#119909 and the cost of a jumper = &#119910.
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
        ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
        <br></div>
        The lowest common multiple of the &#119910-coefficients is ${lcmY}<br>
        Multiplying the top equation by ${eqn1MultiplierY} and the bottom equation by ${eqn2MultiplierY}, we get:<br>
        <div class="centeredEquation">
        ${eqn1XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn1NumMultY}<br>
        ${eqn2XCoefficientMult}&#119909 + ${lcmY}&#119910 = ${eqn2NumMultY}
        </div>`
        if(eqn1XCoefficientMult>eqn2XCoefficientMult){
            document.getElementById("solutionText").innerHTML += 
            `We can now subract the bottom equation from the top equation and solve for &#119909, giving:
            <div class="centeredEquation">
            ${subtractedEqnXCoefficient}&#119909 = ${subtractedEqnNumY}<br>
            &#119909 = ${xValue}
            </div>
            Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
            &#119910 = ${yValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
            <div class="borderBottomSolution"></div><br>
            </div>
            `
        } else {
            document.getElementById("solutionText").innerHTML += 
            `We can now subract the top equation from the bottom equation and solve for &#119909, giving:
            <div class="centeredEquation">
            ${subtractedEqnXCoefficient*-1}&#119909 = ${subtractedEqnNumY*-1}<br>
            &#119909 = ${xValue}
            </div>
            Substituting our &#119909-value into our original top equation and solving for &#119910, we have:
            <div class="centeredEquation">
            ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${substitutedXVal} + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
            ${yCoefficentEqn1}&#119910 = ${eqn1Num - substitutedXVal} <br>
            &#119910 = ${yValue}
            </div>
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
            <div class="borderBottomSolution"></div><br>
            </div>
            `
        }
    }
} else if(globalDifficultySelection === 1){
    if(yCoefficentEqn1>yCoefficentEqn2){
        document.getElementById("solutionText").innerHTML += 
        `<i class="fas fa-calculator"></i>
        <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        We can express this question as the following simultaneous equation.<br>
        Let the cost of a shirt = &#119909 and the cost of a jumper = &#119910.
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
        ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
        <br></div>
        By subtracting the bottom equation from the top equation and solving for &#119910, we have:
        <div class="centeredEquation">
        ${bronzeSubtractedYval}&#119910 = ${bronzeSubtractedNum}<br>
        &#119910 = ${yValue}
        </div>
        Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
        ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
        ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal}<br>
        &#119909 = ${xValue}
        </div>
        Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
        <div class="borderBottomSolution"></div><br>
            </div>`
    } else{
        document.getElementById("solutionText").innerHTML += 
        `<i class="fas fa-calculator"></i>
        <i id="checkSign" class="fas fa-check"></i><span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        We can express this question as the following simultaneous equation.<br>
        Let the cost of a shirt = &#119909 and the cost of a jumper = &#119910.
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
        ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
        <br></div>
        By subtracting the top equation from the bottom equation and solving for &#119910, we have:
        <div class="centeredEquation">
        ${bronzeSubtractedYval*-1}&#119910 = ${bronzeSubtractedNum*-1}<br>
        &#119910 = ${yValue}
        </div>
        Substituting our &#119910-value into our original top equation and solving for &#119909, we have:
        <div class="centeredEquation">
        ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num}<br>
        ${xCoefficentEqn1}&#119909 + ${substitutedYVal} = ${eqn1Num}<br>
        ${xCoefficentEqn1}&#119909 = ${eqn1Num - substitutedYVal}<br>
        &#119909 = ${xValue}
        </div>
        Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.<br><br>
        <div class="borderBottomSolution"></div><br>
            </div>`
    }
}
        
}

    //Page Breaks

    if (questionNumber === 2){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 4){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 5){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 6){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 7){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 8){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 9){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 10){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 11){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 12){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 13){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 14){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 15){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 16){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 17){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 18){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 19){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 20){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 21){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 22){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 23){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 24){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 25){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 26){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 27){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 28){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 29){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 30){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 31){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    };
    if (questionNumber === 3){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 5){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 7){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 9){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 11){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 13){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 15){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 17){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 19){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 21){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 23){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 25){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 27){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 29){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 31){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 33){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 35){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 37){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 39){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 41){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 43){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 45){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 47){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 49){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 51){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 53){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 55){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 57){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 59){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 61){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 63){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 65){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }

    function reassignValues(){
        name1 =  maleNameArray[Math.floor(Math.random()*maleNameArray.length)];
        name2 = femaleNameArray[Math.floor(Math.random()*femaleNameArray.length)];
        xCoefficentEqn1 = Math.ceil((Math.random()*9)+1);
        

        yCoefficentEqn1
    for(yCoefficentEqn1 = Math.ceil(Math.random()*9)+1 ; yCoefficentEqn1 === xCoefficentEqn1;){
        yCoefficentEqn1 = Math.ceil(Math.random()*9)+1;
    };
    
        xValue
    if(globalDifficultySelection === 2){
        xValue = Math.ceil((Math.random()*9)+1);
    } else if(globalDifficultySelection === 3){
        xValue = Math.ceil((Math.random()*12)+6)
    } else if(globalDifficultySelection === 1){
        xValue = Math.ceil((Math.random()*9)+1);
    }

        yValue
    // This loop makes sure x and y values aren't equal for future ref!!!. Note it is yval = xval, not yval != xval as stopping condition has to evaluate as false to stop.
    if(globalDifficultySelection === 2){
        for(yValue = Math.ceil((Math.random()*9)+1) ; yValue === xValue;){
            yValue = Math.ceil((Math.random()*9)+1);
        };
    } else if(globalDifficultySelection === 3){
        for(yValue = Math.ceil((Math.random()*15)+6); yValue === xValue;){
            yValue = Math.ceil((Math.random()*15)+6);
        };
    } else if(globalDifficultySelection === 1){
        yValue = Math.ceil((Math.random()*9)+1);
    }
     

        eqn1Num = xCoefficentEqn1*xValue + yCoefficentEqn1*yValue

        xCoefficentEqn2
    if(globalDifficultySelection === 2){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 3){
        for(xCoefficentEqn2 = Math.ceil((Math.random()*15)+1) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
        };
    } else if(globalDifficultySelection === 1){
        xCoefficentEqn2 = xCoefficentEqn1;
    }

        yCoefficentEqn2
    for(yCoefficentEqn2 = Math.ceil(Math.random()*9)+1; yCoefficentEqn2 === yCoefficentEqn1;){
        yCoefficentEqn2 = Math.ceil(Math.random()*9)+1;
    };

        eqn2Num = xCoefficentEqn2*xValue + yCoefficentEqn2*yValue;

    function lcm_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
         return false;
       return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
     }
     
     function gcd_two_numbers(x, y) {
       x = Math.abs(x);
       y = Math.abs(y);
       while(y) {
         var t = y;
         y = x % y;
         x = t;
       }
       return x;
     }

        lcmX =lcm_two_numbers(xCoefficentEqn1,xCoefficentEqn2);
        lcmY =lcm_two_numbers(yCoefficentEqn1,yCoefficentEqn2);
     
        eqn1MultiplierX = lcmX/xCoefficentEqn1
        eqn2MultiplierX = lcmX/xCoefficentEqn2
        eqn1YCoefficientMult = yCoefficentEqn1*eqn1MultiplierX
        eqn1NumMult = eqn1Num*eqn1MultiplierX
        eqn2YCoefficientMult = yCoefficentEqn2*eqn2MultiplierX
        eqn2NumMult = eqn2Num*eqn2MultiplierX

        subtractedEqnYCoefficient = eqn1YCoefficientMult - eqn2YCoefficientMult
        subtractedEqnNum = eqn1NumMult - eqn2NumMult

        substitutedYVal = yCoefficentEqn1*yValue

        eqn1MultiplierY = lcmY/yCoefficentEqn1
        eqn2MultiplierY = lcmY/yCoefficentEqn2
        eqn1XCoefficientMult = xCoefficentEqn1*eqn1MultiplierY
        eqn2XCoefficientMult = xCoefficentEqn2*eqn2MultiplierY
        eqn1NumMultY = eqn1Num*eqn1MultiplierY
        eqn2NumMultY = eqn2Num*eqn2MultiplierY

        subtractedEqnXCoefficient = eqn1XCoefficientMult - eqn2XCoefficientMult
        subtractedEqnNumY = eqn1NumMultY - eqn2NumMultY

        substitutedXVal = xCoefficentEqn1*xValue

        bronzeSubtractedYval = yCoefficentEqn1 - yCoefficentEqn2
        bronzeSubtractedNum = eqn1Num - eqn2Num

    }
    

    reassignValues();
    runQuestion();

}

//Area: Triangles and Trapeziums
function triangleAndTrapezium(){
    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2>
    This question was designed based on question 17 on OCR paper 3 November 2020. It is a calculator paper and OCR awarded 5 marks.<br><br>
    Difficulty settings:<br><br>
    Bronze - The height of the trapezium will always equal an integer. <br><br>
    Silver - The height of the trapezium could become a decimal. <br><br>
    Gold - Same as the silver but other dimensions of the trapezium could be higher. `

    let randomLengthArrayTriangle =[4,4.5,5,5.5,6,6.5,7,7.5,8];
    let chosenLengthTriangle = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)]
    let chosenHeightTriangle = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)]
    let lengthSubtractHeight = chosenLengthTriangle - chosenHeightTriangle;

    let randomLengthArrayTrapezoid = [7,8,9,10,11,12];
    let chosenArrayTra = randomLengthArrayTrapezoid[Math.floor(Math.random()*randomLengthArrayTrapezoid.length)]
    
    for(chosenHeightTrapezoid = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)]; chosenHeightTrapezoid===chosenHeightTriangle;){
        chosenHeightTrapezoid = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)];
    }


    triangleBase = Math.ceil(Math.random()*9)+3;

    let triangleHeight
    
    if(lengthSubtractHeight === 0){
        triangleHeight = triangleBase
    } else if(lengthSubtractHeight === 0.5 || lengthSubtractHeight === 1){
        triangleHeight = triangleBase - 1;
    } else if(lengthSubtractHeight === 1.5 || lengthSubtractHeight === 2){
        triangleHeight = triangleBase - 2;
    } else if(lengthSubtractHeight >= 2.5){
        triangleHeight = triangleBase - (Math.ceil(Math.random()*2));
    } else if(lengthSubtractHeight === -0.5 || lengthSubtractHeight === -1){
        triangleHeight = triangleBase + 1;
    } else if(lengthSubtractHeight === -1.5 || lengthSubtractHeight === -2){
        triangleHeight = triangleBase + 2;
    } else if(lengthSubtractHeight <= 2.5){
        triangleHeight = triangleBase + (Math.ceil(Math.random()*2));
    } 

    let triangleArea = 0.5*triangleBase*triangleHeight;
    if(globalDifficultySelection===3){
        arrayHelper = [[0],
        [0.1,0.125,0.15,0.175,0.2,0.3,0.4,0.25,0.5,0.75,1,1.2,1.3,1.4,1.25,1.5,1.75,2,2.2,2.3,2.4,2.25,2.5,2.75,3,3.2,3.3,3.4,3.25,3.5,3.75,4,4.2,4.3,4.4,5,5.25,5.5,5.75,6,6.25,6.5,6.75,7,7.25,7.5,7.75,8,8.25,8.5,8.75,9,9.25,9.5,9.75,10,(2*triangleHeight),0],
        [-0.1,-0.125,-0.15,-0.175,-0.2,-0.3,-0.4,-0.25,-0.5,-0.75,-1,-1.2,-1.3,-1.4,-1.25,-1.5,-1.75,-2,-2.2,-2.3,-2.4,-2.25,-2.5,-2.75,-3,-3.2,-3.3,-3.4,-3.25,-3.5,-3.75,-4,-4.2,-4.3,-4.4,-5,-5.25,-5.5,-5.75,-6,-6.25,-6.5,-6.75,-7,-7.25,-7.5,-7.75,-8,-8.25,-8.5,-8.75,-9,-9.25,-9.5,-9.75,-10,(-2*triangleHeight),0]]
    } else if(globalDifficultySelection===2){
        arrayHelper = [[0],
        [0.1,0.125,0.15,0.175,0.2,0.3,0.4,0.25,0.5,0.75,1,1.2,1.3,1.4,1.25,1.5,1.75,2,2.2,2.3,2.4,2.25,2.5,2.75,3,3.2,3.3,3.4,3.25,3.5,3.75,4,0],
        [-0.1,-0.125,-0.15,-0.175,-0.2,-0.3,-0.4,-0.25,-0.5,-0.75,-1,-1.2,-1.3,-1.4,-1.25,-1.5,-1.75,-2,-2.2,-2.3,-2.4,-2.25,-2.5,-2.75,-3,-3.2,-3.3,-3.4,-3.25,-3.5,-3.75,-4,0]]
    } else if(globalDifficultySelection===1){
        arrayHelper = [[0],
        [1,2,3,4,5,0],
        [-1,-2,-3,-4,-5,0]]
    
    }
    if(chosenHeightTriangle<chosenHeightTrapezoid){
        MiniArrayHelper = arrayHelper[1];
    } else if(chosenHeightTriangle>chosenHeightTrapezoid){
        MiniArrayHelper = arrayHelper[2];
    }

    for(chosenArrayHelp = MiniArrayHelper[Math.floor(Math.random()*MiniArrayHelper.length)]; Number.isInteger((2*triangleArea)/(triangleHeight+chosenArrayHelp))===false ;){
        chosenArrayHelp = MiniArrayHelper[Math.floor(Math.random()*MiniArrayHelper.length)];
        
    }
    let h = Math.abs(triangleHeight + chosenArrayHelp);
    let sumParallelSides = Math.abs((2*triangleArea)/h);   
    
    if(sumParallelSides===1){
        arr=[[0.1,0.9],[0.2,0.8],[0.3,0.7],[0.4,0.6]]
        a=arr[Math.floor(Math.random()*arr.length)][0]
        b=arr[Math.floor(Math.random()*arr.length)][1]
    } else if(sumParallelSides===2){
        a=0.5;
        b=1.5;
    } else if(sumParallelSides===3){
        a = 1;
        b = 2;
    } else if(sumParallelSides===4){
        a=1;
        b=3;
    } else if(sumParallelSides===5){
        arr=[[1,4],[2,3]]
        a=arr[Math.floor(Math.random()*arr.length)][0]
        b=arr[Math.floor(Math.random()*arr.length)][1]
    } else{
        a = Math.round(sumParallelSides/2)-1
        b = sumParallelSides - a
    }

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };
    questionNumber++

    function runQuestion(){
    document.getElementById("questionText").innerHTML +=
    `
    <style>

    .answerLines{
        float: right;
    }


    .shapeContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        
    }

    @media only screen and (max-width: 800px) {
        .shapeContainer{
            display: flex;
            flex-wrap: wrap;
            
        }

        .topTextTrapeziod{
            grid-area: overlap;
            transform: translateY(-1.5em);
            justify-self: center;
            
        }


        .trapezoidContainer{
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr 0.3fr;
            grid-template-areas: "overlap";
            align-self: center;
            justify-self: center;
            margin: 20px;
        }
    }

    .triangleContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 0.3fr;
        grid-template-areas: "overlap";
        width: fit-content;
        align-self: center;
        justify-self: center;
    }


    .triangleBig{
        width: 0;
        height: 0;
        border-bottom: ${chosenHeightTriangle}em solid #009870;
        border-left: ${chosenLengthTriangle}em solid transparent;
        grid-area: overlap;
        
    }

    .triangleSmall{
        width: 0;
        height: 0;
        border-bottom: ${chosenHeightTriangle*0.9}em solid white;
        border-left: ${chosenLengthTriangle*0.9}em solid transparent;
        grid-area: overlap;
        align-self: center;
        justify-self: center;
        transform: translate(2.5%,2%);
        
    }

    .rightAngleBox{
        border: 3px solid #009870;
        grid-area: overlap;
        height: 20%;
        width: 20%;
        align-self: end;
        justify-self: end;
        z-index: 1;
        position: relative;
       
    }

    .trapezoidContainer{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 0.3fr;
        grid-template-areas: "overlap";
        align-self: center;
        justify-self: center;
    }

    .trapezoidBig {
        border-bottom: ${chosenHeightTrapezoid}em solid #009870;
        border-left: ${chosenArrayTra/4}em solid transparent;
        border-right: ${chosenArrayTra/4}em solid transparent;
        height: 0;
        width: ${chosenArrayTra}em;
        grid-area: overlap;
        align-self: center;
        justify-self: center;
    }

    .trapezoidSmall {
        border-bottom: ${chosenHeightTrapezoid*0.9}em solid White;
        border-left: ${chosenArrayTra/4*0.9}em solid transparent;
        border-right: ${chosenArrayTra/4*0.9}em solid transparent;
        height: 0;
        width: ${chosenArrayTra*0.9}em;
        grid-area: overlap;
        align-self: center;
        justify-self: center;
        
    }

    @media only screen and (min-width: 800px) {
        .topTextTrapeziod{
            grid-area: overlap;
            transform: translateY(-1.5em);
            justify-self: center;
            
        }
    }

    .heightText{
        margin: auto 0.5em;
    }

    .heightTextTrapezoid{
        padding: 1em 0.5em;
        border-left: 3px dotted #009870;
        height: 100%;
    }
    
    .baseText{
        text-align: center;
    }

    


    </style>
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i> <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br>
    The area of the triangle is equal to the area of the trapezium.<br><br>
    <span style="font-weight: bold;">Not to scale</span><br>
    <div class="shapeContainer">
        <div class="triangleContainer">
            <div class="triangleBig"></div>
            <div class="triangleSmall"></div>
            <div class="rightAngleBox"></div>
            <p class="heightText">${triangleHeight} cm</p>
            <p class="baseText">${triangleBase} cm</p>
        </div>
        <div class="trapezoidContainer">
            <p class="topTextTrapeziod">${a} cm</p>
            <div class="trapezoidBig"></div>
            <div class="trapezoidSmall"></div>
            <p class="heightTextTrapezoid">h cm</p>
            <p class="baseText">${b} cm</p>
        </div>
    </div><br><br>
    Calculate the height, <span style="font-style: italic;">h</span> cm, of the trapezium.
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="answerLines">
    h =  __________ cm<br><br>
    <p id="marksGiven">(5 marks)</p>
    </div><br><br><br><br>
    `
    
    document.getElementById("solutionText").innerHTML += 
    `
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i> <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br>
    The area of the triangle is 0.5 &times; ${triangleBase} &times; ${triangleHeight} = ${triangleArea}cm<sup>2</sup><br><br>
    Since the area of the trapezium is equal to this, I can form the following equation and solve:<br><br>
    <div class="centeredQuestion">
        0.5 &times; (${a}+${b}) &times; h = ${triangleArea}<br><br>
        ${(a+b)/2}h = ${triangleArea}<br><br>
        h = ${h}
    </div>
    <br>
    <div class="borderBottomSolution"></div><br>
    </div>
    `
    }

    //page breaks

    if (questionNumber === 2){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 4){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 5){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 6){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 7){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 8){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 9){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 10){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 11){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 12){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 13){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 14){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 15){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 16){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 17){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 18){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 19){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 20){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 21){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 22){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 23){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 24){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 25){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 26){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 27){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 28){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 29){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 30){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionNumber === 31){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    };
    if (questionNumber === 4){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    } else if(questionNumber === 33){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } 

    function reassignValues(){
    randomLengthArrayTriangle =[4,4.5,5,5.5,6,6.5,7,7.5,8];
    chosenLengthTriangle = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)]
    chosenHeightTriangle = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)]
    lengthSubtractHeight = chosenLengthTriangle - chosenHeightTriangle;

    randomLengthArrayTrapezoid = [7,8,9,10,11,12];
    chosenArrayTra = randomLengthArrayTrapezoid[Math.floor(Math.random()*randomLengthArrayTrapezoid.length)]
    
    for(chosenHeightTrapezoid = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)]; chosenHeightTrapezoid===chosenHeightTriangle;){
        chosenHeightTrapezoid = randomLengthArrayTriangle[Math.floor(Math.random()*randomLengthArrayTriangle.length)];
    }


    triangleBase = Math.ceil(Math.random()*9)+3;

    triangleHeight
    
    if(lengthSubtractHeight === 0){
        triangleHeight = triangleBase
    } else if(lengthSubtractHeight === 0.5 || lengthSubtractHeight === 1){
        triangleHeight = triangleBase - 1;
    } else if(lengthSubtractHeight === 1.5 || lengthSubtractHeight === 2){
        triangleHeight = triangleBase - 2;
    } else if(lengthSubtractHeight >= 2.5){
        triangleHeight = triangleBase - (Math.ceil(Math.random()*2));
    } else if(lengthSubtractHeight === -0.5 || lengthSubtractHeight === -1){
        triangleHeight = triangleBase + 1;
    } else if(lengthSubtractHeight === -1.5 || lengthSubtractHeight === -2){
        triangleHeight = triangleBase + 2;
    } else if(lengthSubtractHeight <= 2.5){
        triangleHeight = triangleBase + (Math.ceil(Math.random()*2));
    } 

    triangleArea = 0.5*triangleBase*triangleHeight;
    if(globalDifficultySelection===3){
        arrayHelper = [[0],
        [0.1,0.125,0.15,0.175,0.2,0.3,0.4,0.25,0.5,0.75,1,1.2,1.3,1.4,1.25,1.5,1.75,2,2.2,2.3,2.4,2.25,2.5,2.75,3,3.2,3.3,3.4,3.25,3.5,3.75,4,4.2,4.3,4.4,5,5.25,5.5,5.75,6,6.25,6.5,6.75,7,7.25,7.5,7.75,8,8.25,8.5,8.75,9,9.25,9.5,9.75,10,(2*triangleHeight),0],
        [-0.1,-0.125,-0.15,-0.175,-0.2,-0.3,-0.4,-0.25,-0.5,-0.75,-1,-1.2,-1.3,-1.4,-1.25,-1.5,-1.75,-2,-2.2,-2.3,-2.4,-2.25,-2.5,-2.75,-3,-3.2,-3.3,-3.4,-3.25,-3.5,-3.75,-4,-4.2,-4.3,-4.4,-5,-5.25,-5.5,-5.75,-6,-6.25,-6.5,-6.75,-7,-7.25,-7.5,-7.75,-8,-8.25,-8.5,-8.75,-9,-9.25,-9.5,-9.75,-10,(-2*triangleHeight),0]]
    } else if(globalDifficultySelection===2){
        arrayHelper = [[0],
        [0.1,0.125,0.15,0.175,0.2,0.3,0.4,0.25,0.5,0.75,1,1.2,1.3,1.4,1.25,1.5,1.75,2,2.2,2.3,2.4,2.25,2.5,2.75,3,3.2,3.3,3.4,3.25,3.5,3.75,4,0],
        [-0.1,-0.125,-0.15,-0.175,-0.2,-0.3,-0.4,-0.25,-0.5,-0.75,-1,-1.2,-1.3,-1.4,-1.25,-1.5,-1.75,-2,-2.2,-2.3,-2.4,-2.25,-2.5,-2.75,-3,-3.2,-3.3,-3.4,-3.25,-3.5,-3.75,-4,0]]
    } else if(globalDifficultySelection===1){
        arrayHelper = [[0],
        [1,2,3,4,5,0],
        [-1,-2,-3,-4,-5,0]]
    
    }
    if(chosenHeightTriangle<chosenHeightTrapezoid){
        MiniArrayHelper = arrayHelper[1];
    } else if(chosenHeightTriangle>chosenHeightTrapezoid){
        MiniArrayHelper = arrayHelper[2];
    }

    for(chosenArrayHelp = MiniArrayHelper[Math.floor(Math.random()*MiniArrayHelper.length)]; Number.isInteger((2*triangleArea)/(triangleHeight+chosenArrayHelp))===false ;){
        chosenArrayHelp = MiniArrayHelper[Math.floor(Math.random()*MiniArrayHelper.length)];
        
    }
    h = Math.abs(triangleHeight + chosenArrayHelp);
    sumParallelSides = Math.abs((2*triangleArea)/h);   
    
    if(sumParallelSides===1){
        arr=[[0.1,0.9],[0.2,0.8],[0.3,0.7],[0.4,0.6]]
        a=arr[Math.floor(Math.random()*arr.length)][0]
        b=arr[Math.floor(Math.random()*arr.length)][1]
    } else if(sumParallelSides===2){
        a=0.5;
        b=1.5;
    } else if(sumParallelSides===3){
        a = 1;
        b = 2;
    } else if(sumParallelSides===4){
        a=1;
        b=3;
    } else if(sumParallelSides===5){
        arr=[[1,4],[2,3]]
        a=arr[Math.floor(Math.random()*arr.length)][0]
        b=arr[Math.floor(Math.random()*arr.length)][1]
    } else{
        a = Math.round(sumParallelSides/2)-1
        b = sumParallelSides - a
    }
    }   

    reassignValues();
    runQuestion();
}

//Percentage Profit
function percentageProfit(){
    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2>
    This question was designed based on question 11 a) on OCR paper 2 November 2019. It is a non-calculator paper and OCR awarded 3 marks.<br><br>
    Difficulty settings:<br><br>
    Bronze - Numbers are generally smaller and always integers and % increase is a multiple of 10 below 100% <br><br>
    Silver - Numbers get bigger than bronze and are still integers but % increase is still a multiple of 10 below 100% <br><br>
    Gold - Numbers are bigger and can include decimals. % increase is larger than 100%. I have made this difficulty calculator allowed. `

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;

    function reassignValues(){
        chosenMorF = allNamesArray[Math.floor(Math.random()*allNamesArray.length)];
        name1 = chosenMorF[0][Math.floor(Math.random()*chosenMorF[0].length)];
        heOrShe = chosenMorF[1];

        multiplierArray = [/*Bronze*/ [`${Math.ceil(Math.random()*9)}`], /*Silver*/ [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,6,7,8,9], /*Gold*/ [`${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}`]]

        if(globalDifficultySelection===2){
            chosenMultiplier = multiplierArray[1][Math.floor(Math.random()*multiplierArray[1].length)];
            actualMultipler = (chosenMultiplier/10 + 1).toFixed(2);
            x = parseFloat(`${Math.ceil(Math.random()*3)}${Math.ceil(Math.random()*9)}0`)
            y = (x*actualMultipler).toFixed(0);
            profit = y - x;
            calcOrNoCalc = nonCalcSign;
        } else if(globalDifficultySelection===3){
            chosenMultiplier = multiplierArray[2];
            actualMultipler = (chosenMultiplier/100 + Math.ceil(Math.random()*3)+1).toFixed(2);
            x = parseFloat(`${Math.ceil(Math.random()*3)}${Math.ceil(Math.random()*9)}0`)
            y = (x*actualMultipler).toFixed(2);
            profit = (y - x).toFixed(2);
            calcOrNoCalc = calcSign;
        } else if(globalDifficultySelection===1){
            chosenMultiplier = multiplierArray[0];
            actualMultipler = (chosenMultiplier/10 + 1).toFixed(2);
            x = parseFloat(`${Math.ceil(Math.random()*9)}0`)
            y = Math.round(x*actualMultipler);
            profit = y - x;
            calcOrNoCalc = nonCalcSign;
        }

        percentageProfitSol = ((actualMultipler*100) - 100).toFixed(0)
    }

    function runQuestion(){
        questionText.innerHTML += `
        ${calcOrNoCalc} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
        ${name1} buys a concert ticket for £${x} and later sells it for £${y}<br>
        Find the percentage profit that ${heOrShe} made. 
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLine">
        <br>
        <p id="marksGiven">(3 marks)</p>
        </div><br><br><br><br>

        `

        solutionText.innerHTML += `
        ${calcOrNoCalc} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        The profit is £${y} - £${x} = £${profit}<br>
        Now, using percentage profit = (profit &divide cost price) &times 100 <br>
        Percentage profit = (${profit} &divide ${x}) &times 100 = ${percentageProfitSol} <br>
        Therefore percentage profit is ${percentageProfitSol}%
        <br><br>
        <div class="borderBottomSolution"></div><br>
        `
    }

    //Page Breaks
    if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    if (questionNumber === 6){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 11){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 16){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 21){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 26){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 31){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 36){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 41){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 46){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 51){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 56){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 61){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 66){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } 

    reassignValues();
    runQuestion();



    


    
}

//Proportion: rates of work
function proportionRateOfWorkProblem(){
    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2><br><br>
    Difficulty settings:<br><br>
    Bronze - The amount of days it takes will always be an integer <br><br>
    Silver - Same as bronze but the numbers can increase in size <br><br>
    Gold - The amount of days it takes will be non-integer and the question prompts to answer in days plus hours `


    /*x [0builders] can [1build] a [2house] in y days. 
    each of the [0builders] work at the same rate.
    z of the [0builders] stop [3working] after w days.
    The other [0builders] continue [4building the same house] at the same rate until it is finished.
    How long does it take to [1build] the [2house]?  */

    let contextArray = [["builders","build","house","working","building the same house","builder"],["painters","paint","house","working","painting the same house","painter"],
    ["developers","develop","website","working","developing the same website","developer"],["architects","design","building","working","designing the same building","architect"],
    ["manufacturers","make","product","working","making the same product","manufacturer"],["aliens","invade","planet","invading","invading the same planet","alien"],
    ["mathematicians","solve","very difficult equation","working","solving the same problem","mathematician"],["writers","write","feature-article","working","writing the same article","writer"],
    ["film-makers","film","movie","working","filming the same movie","film-maker"],["musicians","create","symphony","working","creating the same symphony","musician"],
    ["beavers","build","dam","working","building the same dam","beaver"],["dancers","choreograph","routine","working","choreographing the same routine","dancer"],
    ["fashion-designers","design","summer-range","working","designing the same range","fashion-designer"],["mechanics","fix","car","working","fixing the same car","mechanic"],
    ["superheroes","save","planet from alien invasion","","saving the same planet","superhero"]];

    let chosenContext = contextArray[Math.floor(Math.random()*contextArray.length)];
    
    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;
   
    function reassignValues(){
        chosenContext = contextArray[Math.floor(Math.random()*contextArray.length)];
    

        if(globalDifficultySelection===3){
            numWorkers = Math.ceil(Math.random()*24)+5; //number of workers for top line of Q
            numDays = Math.ceil(Math.random()*39)+9; //number of days for top line of Q
            workerDaysFor1 = numWorkers*numDays;
            numToBeSubtractedOffWorkers = Math.ceil(Math.random()*3)+1;
            numToBeSubtractedOffDays = Math.ceil(Math.random()*6)+2;
            workersThatStop = numWorkers - numToBeSubtractedOffWorkers;
            daysWorkersStoppedAfter = numDays - numToBeSubtractedOffDays;
            daysDoneWithAllWorkers = numWorkers*daysWorkersStoppedAfter;
            daysLeftOver = workerDaysFor1 - daysDoneWithAllWorkers;
            remainingWorkers = numWorkers-workersThatStop;
            daysDoneWithRemainingWorkers = parseFloat((daysLeftOver/remainingWorkers).toFixed(4));
            if(Number.isInteger(daysDoneWithRemainingWorkers)===true){
                reassignValues();
            }
            totalDaysForJob = parseFloat(daysDoneWithRemainingWorkers + daysWorkersStoppedAfter);
            daysPart = Math.floor(totalDaysForJob);
            decimalPart = totalDaysForJob-daysPart;
            hoursPart = Math.round(12*decimalPart)
        
            
        } else if(globalDifficultySelection===2){
            numWorkers = Math.ceil(Math.random()*14)+5; //number of workers for top line of Q
            numDays = Math.ceil(Math.random()*29)+9; //number of days for top line of Q
            workerDaysFor1 = numWorkers*numDays;
            numToBeSubtractedOffWorkers = Math.ceil(Math.random()*3)+1;
            numToBeSubtractedOffDays = Math.ceil(Math.random()*6)+2;
            workersThatStop = numWorkers - numToBeSubtractedOffWorkers;
            daysWorkersStoppedAfter = numDays - numToBeSubtractedOffDays;
            daysDoneWithAllWorkers = numWorkers*daysWorkersStoppedAfter;
            daysLeftOver = workerDaysFor1 - daysDoneWithAllWorkers;
            remainingWorkers = numWorkers-workersThatStop;
            daysDoneWithRemainingWorkers = daysLeftOver/remainingWorkers;
            if(Number.isInteger(daysDoneWithRemainingWorkers)===false){
                reassignValues();
            }
            totalDaysForJob = daysLeftOver/remainingWorkers + daysWorkersStoppedAfter;
        } else if(globalDifficultySelection===1){
            numWorkers = Math.ceil(Math.random()*8)+5; //number of workers for top line of Q
            numDays = Math.ceil(Math.random()*15)+9; //number of days for top line of Q
            workerDaysFor1 = numWorkers*numDays;
            numToBeSubtractedOffWorkers = Math.ceil(Math.random()*3)+1;
            numToBeSubtractedOffDays = Math.ceil(Math.random()*6)+2;
            workersThatStop = numWorkers - numToBeSubtractedOffWorkers;
            daysWorkersStoppedAfter = numDays - numToBeSubtractedOffDays;
            daysDoneWithAllWorkers = numWorkers*daysWorkersStoppedAfter;
            daysLeftOver = workerDaysFor1 - daysDoneWithAllWorkers;
            remainingWorkers = numWorkers-workersThatStop;
            daysDoneWithRemainingWorkers = daysLeftOver/remainingWorkers;
            if(Number.isInteger(daysDoneWithRemainingWorkers)===false){
                reassignValues();
            }
            totalDaysForJob = daysLeftOver/remainingWorkers + daysWorkersStoppedAfter;
        }
    }

    function runQuestion(){
        
    questionText.innerHTML += `
    <style>
    .answerLines{
        float: right;
    }
    #questionText{
        font-size: 0.9em;
    }
    </style>
    ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br>
    ${numWorkers} ${chosenContext[0]} can ${chosenContext[1]} a ${chosenContext[2]} in ${numDays} days.<br>
    Each of the ${chosenContext[0]} work at the same rate.<br>
    ${workersThatStop} of the ${chosenContext[0]} stop ${chosenContext[3]} after ${daysWorkersStoppedAfter} days.<br>
    The other ${chosenContext[0]} continue ${chosenContext[4]} at the same rate until it is finished.<br>
    How long does it take to ${chosenContext[1]} the ${chosenContext[2]}?
    `

    if(globalDifficultySelection===1 || globalDifficultySelection===2){
        questionText.innerHTML += `<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLines">
    __________ days<br>
    <p id="marksGiven">(5 marks)</p>
    </div><br><br><br><br>`
    }
    else if(globalDifficultySelection===3){
        questionText.innerHTML += `<br>
        Assuming the ${chosenContext[0]} work for 12 hours a day, give your answer in days and hours.
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLines">
      _______ days _______ hours<br>
    <p id="marksGiven">(5 marks)</p>
    </div><br><br><br>`
    }

    solutionText.innerHTML += `
    ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br><br>
    ${numWorkers} &times ${numDays} = ${workerDaysFor1} therefore, it takes ${workerDaysFor1} ${chosenContext[5]}-days to ${chosenContext[1]} the ${chosenContext[2]}.<br>
    ${numWorkers} ${chosenContext[0]} work for <span style="text-decoration: underline">${daysWorkersStoppedAfter} days.</span> ${numWorkers} &times ${daysWorkersStoppedAfter} = ${daysDoneWithAllWorkers} so there are ${daysDoneWithAllWorkers} ${chosenContext[5]}-days accounted for.<br>
    ${workerDaysFor1} - ${daysDoneWithAllWorkers} = ${daysLeftOver} meaning there is ${daysLeftOver} ${chosenContext[5]}-days to be done by the remaining ${chosenContext[0]}.<br>
    Since ${numWorkers} - ${workersThatStop} = ${remainingWorkers}, there are ${remainingWorkers} ${chosenContext[0]} left.<br>
    ${daysLeftOver} &divide ${remainingWorkers} = ${daysDoneWithRemainingWorkers} meaning the remaining ${remainingWorkers} ${chosenContext[0]} will take <span style="text-decoration: underline">${daysDoneWithRemainingWorkers} days</span> to finish it.<br>
    ${daysDoneWithRemainingWorkers} + ${daysWorkersStoppedAfter} = ${totalDaysForJob} so it takes <span style="text-decoration: underline">${totalDaysForJob} days in total.</span>
    `
    if(globalDifficultySelection===1 || globalDifficultySelection===2){
        solutionText.innerHTML += `
        <br><br>
        <div class="borderBottomSolution"></div><br>
        `
    }
    else if(globalDifficultySelection===3){
        solutionText.innerHTML += `<br>
        ${parseFloat(decimalPart.toFixed(3))} &times 12 hours = ${hoursPart} hours <br>
        Therefore, the total time is <span style="text-decoration: underline">${daysPart} days and ${hoursPart} hours</span>
        <br><br>
        <div class="borderBottomSolution"></div><br>`
    }
    }

    //Page Breaks
    if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    if (questionNumber === 4){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    } else if(questionNumber === 34){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 37){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 40){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 43){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 46){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 49){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 52){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 55){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 58){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 61){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 64){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 67){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }
    reassignValues();
    runQuestion();
    
}

//Perimeter of L shape Problem solving
function perimeterProblemSolving(){

    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2><br>
    This question was inspired by a functional skills level 1 question. Since I already made it on the functional skills generators, I thought I would put it here and add some
    different difficulty settings.<br><br>
    Difficulty settings:<br><br>
    Bronze - The side lengths of the L shape are always integers and the total perimeter is a multiple of the strip length.<br><br>
    Silver - The side lengths of the L shape include decimals and the number of packs can be even or odd. <br><br>
    Gold - The numbers can be larger than silver and the number of packs needed is always odd. `

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;

    let heOrSheArray = ["He","She"]
    let chosenHeOrShe = heOrSheArray[Math.floor(Math.random()*heOrSheArray.length)];

    function getNumbers(){
        if(globalDifficultySelection===2){
            bottomWidth = parseFloat(`${Math.ceil(Math.random()*14)+10}.5`);
            oneOrTwoArray = [1.25,2.25];
            topWidth = bottomWidth/2 - oneOrTwoArray[Math.floor(Math.random()*oneOrTwoArray.length)];
            leftArrayAdd = [1.5, 2.5,1,2];
            leftHeight = topWidth + leftArrayAdd[Math.floor(Math.random()*leftArrayAdd.length)];
            rightArrayMinus = [0.5,1];
            rightWidth = Math.ceil(leftHeight/2) - rightArrayMinus[Math.floor(Math.random()*rightArrayMinus.length)];

            stripLengthArray = [3,4,5,6,7,8];
            stripLength = stripLengthArray[Math.floor(Math.random()*stripLengthArray.length)];
            stripCostPounds = stripLengthArray[Math.floor(Math.random()*stripLengthArray.length)];

            missingHorizontalLength = bottomWidth - topWidth;
            missingVerticalLength = leftHeight - rightWidth;

            totalPerimeter = missingVerticalLength+missingHorizontalLength+rightWidth+leftHeight+topWidth+bottomWidth;

            howManyPacksExact = parseFloat((totalPerimeter/stripLength).toFixed(3));
            if(Number.isInteger(howManyPacksExact)===true){
                getNumbers();
            }

            howManyPacksNeeded = Math.ceil(totalPerimeter/stripLength);
            howManyPacksPayingFor = Math.ceil(howManyPacksNeeded/2);
        } else if(globalDifficultySelection===1){
            bottomWidth = parseFloat(`${Math.ceil(Math.random()*14)+10}`);
            oneOrTwoArray = [1,2];
            topWidth = Math.round(bottomWidth/2 - oneOrTwoArray[Math.floor(Math.random()*oneOrTwoArray.length)]);
            leftArrayAdd = [1,2];
            leftHeight = topWidth + leftArrayAdd[Math.floor(Math.random()*leftArrayAdd.length)];
            rightArrayMinus = [1,2];
            rightWidth = Math.ceil(leftHeight/2) - rightArrayMinus[Math.floor(Math.random()*rightArrayMinus.length)];

            stripLengthArray = [4,6,8];
            stripLength = stripLengthArray[Math.floor(Math.random()*stripLengthArray.length)];
            stripCostPounds = stripLengthArray[Math.floor(Math.random()*stripLengthArray.length)];

            missingHorizontalLength = bottomWidth - topWidth;
            missingVerticalLength = leftHeight - rightWidth;

            totalPerimeter = missingVerticalLength+missingHorizontalLength+rightWidth+leftHeight+topWidth+bottomWidth;

            howManyPacksExact = parseFloat((totalPerimeter/stripLength).toFixed(3));
            if(Number.isInteger(howManyPacksExact)===false){
                getNumbers();
            }

            howManyPacksNeeded = Math.ceil(totalPerimeter/stripLength);
            if(Number.isInteger(howManyPacksNeeded/2)===false){
                getNumbers();
            }
            howManyPacksPayingFor = Math.ceil(howManyPacksNeeded/2);
        } else if(globalDifficultySelection === 3){
            bottomWidth = parseFloat(`${Math.ceil(Math.random()*34)+10}.5`);
            oneOrTwoArray = [1.25,2.25];
            topWidth = bottomWidth/2 - oneOrTwoArray[Math.floor(Math.random()*oneOrTwoArray.length)];
            leftArrayAdd = [1.5, 2.5];
            leftHeight = topWidth + leftArrayAdd[Math.floor(Math.random()*leftArrayAdd.length)];
            rightArrayMinus = [0.5,1.5];
            rightWidth = Math.ceil(leftHeight/2) - rightArrayMinus[Math.floor(Math.random()*rightArrayMinus.length)];

            stripLengthArray = [3,4,5,6,7,8];
            stripLength = stripLengthArray[Math.floor(Math.random()*stripLengthArray.length)];
            stripCostPounds = stripLengthArray[Math.floor(Math.random()*stripLengthArray.length)];

            missingHorizontalLength = bottomWidth - topWidth;
            missingVerticalLength = leftHeight - rightWidth;

            totalPerimeter = missingVerticalLength+missingHorizontalLength+rightWidth+leftHeight+topWidth+bottomWidth;

            howManyPacksExact = parseFloat((totalPerimeter/stripLength).toFixed(3));
            if(Number.isInteger(howManyPacksExact)===true){
                getNumbers();
            }

            howManyPacksNeeded = Math.ceil(totalPerimeter/stripLength);
            howManyPacksPayingFor = Math.ceil(howManyPacksNeeded/2);

            if(Number.isInteger(howManyPacksNeeded/2)===true){
                getNumbers();
            }
        }

    }

    function runQuestion(){
        questionText.innerHTML += `
    <style>
    .floorplanContainer{
        display: grid;
        grid-template-columns: 0.4fr 0.6fr;
        grid-template-rows: 0.4fr 0.6fr;
        width: 50%;
        margin: 0 auto;
    }

    .green{
        width: 100%;
        height: 5em;
        background-color: rgba(88, 229, 186, 0.6);
    }

    .notToScale{
        font-weight: bold;
        text-align: center;
    }

    #topText{
        text-align: center;
        transform: translateY(-100%);
    }
    
    #leftText{
        text-align: left;
        transform: translate(-27.5%, -25%);
    }

    #bottomText{
        text-align: left;
        transform: translateY(450%);
    }

    #rightText{
        text-align: center;
        transform: translateX(60%);
    }

    #topBox{
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
    }

    #bottomLeftBox{
        border-bottom: 1px solid black;
        border-left: 1px solid black;
    }

    #bottomRightBox{
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }

    #floorText{
        text-align: center;
        transform: translate(-50%, -120%);
    }

    .offerBox{
        border: 1px solid #009870;
        width: fit-content;
        padding: 1em;
        margin: 0 auto;
    }

    @media only screen and (max-width: 1275px){


        #rightText{
            text-align: right;
            transform: translateX(calc(20% + 15px));
        }
    }


    @media only screen and (max-width:1630px){


        #leftText{
            text-align: left;
            transform: translate(-35%, -25%);
        }
    }

    @media only screen and (max-width: 800px){

        #bottomText{
            text-align: left;
            transform: translateY(calc(250% + 20px));
        }

        #rightText{
            text-align: center;
            transform: translateX(65%);
        }
    }   
    
    @media only screen and (max-width: 730px){
        #leftText{
            text-align: left;
            transform: translate(calc(-35% - 25px), -25%);
        }

    }

    @media only screen and (max-width: 555px){
        #rightText{
            text-align: center;
            transform: translateX(75%);
        }

    }

    </style>
    ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span><br>
    A carpet fitter needs to order some fixing strips to hold the carpet all around the edges of this floor.<br><br><br>
    <div class="floorplanContainer">
        <div id="topBox" class="green"><p id="topText">${topWidth}m</p></div>
        <div class="notToScale">Not to scale</div>
        <div id="bottomLeftBox" class="green"><p id="leftText">${leftHeight}m</p></div>
        <div id="bottomRightBox" class="green">
            <p id="bottomText">${bottomWidth}m</p>
            <p id="rightText">${rightWidth}m</p>
            <p id="floorText">Floor</p>
        </div>
    </div><br><br>
    ${chosenHeOrShe} can cut and join fixing strips.<br>
    An online shop has packs of fixing strips on offer<br><br>
    <div class="centeredQuestion">
        <div class="offerBox">
        <span class="bold">Carpet Supplies Direct</span><br>
        Fixing strips: ${stripLength}-metre packs £${stripCostPounds}.99 per pack<br>
        *** Buy one get one free ***
        </div>
    </div><br>
    Work out the total cost for the packs of fixing strips the carpet fitter needs to order.
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="answerLine">
        <br>
        <p id="marksGiven">(5 marks)</p>
    </div><br><br><br><br>
    ${pagebreak}
    
    `

    solutionText.innerHTML += `
    ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br><br>
    The missing horizontal side is ${bottomWidth}m - ${topWidth}m = ${missingHorizontalLength}m<br>
    The missing vertical side is ${leftHeight}m - ${rightWidth}m = ${missingVerticalLength}m <br>
    The total perimeter is ${totalPerimeter}m<br>
    Since they come in ${stripLength}-metre packs, ${totalPerimeter} &divide ${stripLength} = ${howManyPacksExact} <br>
    This means they will need ${howManyPacksNeeded} packs. Because of the BOGOF offer, they only need to pay for ${howManyPacksPayingFor} packs.<br>
    ${howManyPacksPayingFor} &times £${parseFloat(`${stripCostPounds}.99`)} = £${(howManyPacksPayingFor*parseFloat(`${stripCostPounds}.99`)).toFixed(2)}
    <br><br>
    <div class="borderBottomSolution"></div><br>
    `
    }


    //pagebreaks
    if (questionNumber === 4){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 8){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 12){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 16){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 20){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 24){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 28){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 32){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 36){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 40){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }
    
    getNumbers();
    runQuestion();

    
}

//Using a formlula garden seeds Q. 
function usingAFormula(){


    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2><br>
    This question was inspired by a functional skills level 1 question. Since I already made it on the functional skills generators, I thought I would put it here and add some
    different difficulty settings and change it so that it reflects a GCSE style question.<br><br>
    Difficulty settings:<br><br>
    Bronze - The grams of seeds needed will always be a multiple of 1000. Please note there is only 4 variations on bronze difficulty.<br><br>
    Silver - The grams of seeds needed will not be a multiple of 1000.<br><br>
    Gold -  The conversion to kg is more difficult.`

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;

    function reassignValues(){
        heOrSheArray=["he","she"];
        chosenGender=heOrSheArray[Math.floor(Math.random()*heOrSheArray.length)];
        if(globalDifficultySelection===2){
            mainArray = [[4,[50]],[6,[25,50,75]],[8,[25,50,75]],[10,[25,75]],[12,[25,50]],[14,[25,50]]];
            bagSizes = [1,2,5,10]
        } else if(globalDifficultySelection===1){
            mainArray = [[10,[10]],[20,[10]],[30,[10]],[40,[10]]];
            bagSizes = [1,5,10,20]
        } else if(globalDifficultySelection===3){
            mainArray = [[5,[25,50,75]],[7,[25,50,75]],[9,[25,50,75]],[11,[25,50,75]],[13,[25,50,75]],[15,[25,50,75]],[17,[25,50]],[19,[25,50]],[21,[25]]];
            bagSizes = [2,5,10,20]
        }
        chosenQ = mainArray[Math.floor(Math.random()*mainArray.length)];
        x = chosenQ[0];
        y = chosenQ[1][Math.floor(Math.random()*chosenQ[1].length)];

        solutionGrams = x*x*y;
        solutionKg = solutionGrams/1000
        
        if(solutionKg<=1){
            solutionBag = "1kg bag"
        } else if(solutionKg>1&&solutionKg<2){
            solutionBag = "2kg bag"
        } else if(solutionKg>2&&solutionKg<5){
            solutionBag = "5kg bag"
        } else if(solutionKg>5&&solutionKg<10){
            solutionBag = "10kg bag"
        } else if(solutionKg>10){
            solutionBag = "20kg bag"
        }

        if(solutionKg<=1 && globalDifficultySelection===3){
            solutionBag = "2kg bag"
        }
        
    }
    
    function runQuestion(){
        questionText.innerHTML += `
        <style>
        .formulaBox{
            border: 1px solid #009870;
            text-align: center;
            font-weight: bold;
            padding: 5px;
        }
        .seedPicsContainer{
            
            display: inline-flex;
            width: 100%;
            justify-content: space-evenly;
            align-items: flex-end;
            flex-wrap: wrap;
        }
        .individualSeedBoxes{
            padding: 1em;
        }
        .seed1kg{
            padding: 0.2em;
            border: 3px #009870 solid;
            border-radius: 1em;
            background-color: rgba(88, 229, 186, 0.3);
        }
        .seed2kg{
            padding: 0.4em;
            border: 3px #009870 solid;
            border-radius: 1em;
            background-color: rgba(88, 229, 186, 0.3);
        }
        .seed5kg{
            padding: 0.8em;
            border: 3px #009870 solid;
            border-radius: 1em;
            background-color: rgba(88, 229, 186, 0.3);
        }
        .seed10kg{
            padding: 1.5em;
            border: 3px #009870 solid;
            border-radius: 1em;
            background-color: rgba(88, 229, 186, 0.3);
        }
    
        
        .questionSolutionContainer{
            font-size: 1rem;
            line-height: 2.5rem;
        }
        
    
        </style> ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        A gardener needs to order grass seeds for a garden.<br>
        The garden is a square with sides measuring ${x} metres.<br>
        This formula shows how many <span class="bold">grams</span> of seeds ${chosenGender} needs.<br><br>
        <div class="formulaBox">
            Grams of seeds needed = Area of garden (in square metres) &times ${y}
        </div><br>
        The supplier sells these bags of seeds.<br>
        <div class="seedPicsContainer">
            <div class="individualSeedBoxes">
                <div class="seed1kg">${bagSizes[0]}kg</div>
            </div>
            <div class="individualSeedBoxes">
                <div class="seed2kg">${bagSizes[1]}kg</div>
            </div>
            <div class="individualSeedBoxes">
                <div class="seed5kg">${bagSizes[2]}kg</div>
            </div>
            <div class="individualSeedBoxes">
                <div class="seed10kg">${bagSizes[3]}kg</div>
            </div>
        </div>
        <span class="bold">The gardener only wants to buy one bag</span><br>
        Which bag of seeds should the gardener buy? 
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLine"></div><br>
        <p id="marksGiven">(5 marks)</p>
        ${pagebreak}
    
        `
    
        solutionText.innerHTML += `
        ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br><br>
        Grams of seeds needed is ${x} &times ${x} &times ${y} = ${solutionGrams}g<br>
        ${solutionGrams}g = ${solutionKg}kg<br>
        Therefore, they should buy the ${solutionBag}.
        <br><br>
        <div class="borderBottomSolution"></div><br>
        `
    }

  //pagebreaks
    if (questionNumber === 7){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 13){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 19){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 25){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 31){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } 

        
    reassignValues();
    runQuestion();

    
}

//Percentages Best Buys Problem Solving
function percentagesBestBuyPorblemSolving(){

    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2><br>
    This question was inspired by a functional skills level 1 question. Since I already made it on the functional skills generators, I thought I would put it here and add some
    different difficulty settings and change it so that it reflects a GCSE style question.<br><br>
    Difficulty settings:<br><br>
    Bronze - The percentages that need to be calculated are only 10% and 5%. Tv direct price will be a multiple of 100<br><br>
    Silver - The percentages that need to be calculated are only 15% and 5%. Tv direct price will be a multiple of 10<br><br>
    Gold -  The Tv Direct percentage that needs to be calculated varies and is a little more difficult.<br><br>
    Note that on all difficulties the difference between the two final costs should always be below £10 so the cheapest should not be immediately obvious.`

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;


    let tvPic1 = "../Resources/Images/FS Q's/Level 1/PercentagesBestBuys/tv1.png";
    let tvPic2 = "../Resources/Images/FS Q's/Level 1/PercentagesBestBuys/tv2.png";

    function reassignValues(){
        function getNumbers(){
            multiplierArray = [1.05,1.06,1.07,1.12,1.13,1.14];
            chosenMultiplier = multiplierArray[Math.floor(Math.random()*multiplierArray.length)];
            if(globalDifficultySelection===2){
                tv1Price = parseFloat(`${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}0`);
                multiplerTvDirect = 1.15;
                multiplerTvDirectString = multiplerTvDirect
                interest = 15;
                tv2Price = Math.round((tv1Price*chosenMultiplier)/5) * 5;
            }else if(globalDifficultySelection===1){
                tv1Price = parseFloat(`${Math.ceil(Math.random()*9)}00`);
                multiplerTvDirect = 1.10;
                multiplerTvDirectString = `1.10`
                interest = 10
                increaseDecreaseArray = [20,-20];
                chosenIncreaseDecrease = increaseDecreaseArray[Math.floor(Math.random()*increaseDecreaseArray.length)];
                tv2Price = tv1Price + chosenIncreaseDecrease;
            }else if(globalDifficultySelection===3){
                tv1Price = parseFloat(`${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}0`);
                interestArray = [11,12,13,14,16,17,18,19];
                interest = interestArray[Math.floor(Math.random()*interestArray.length)];
                multiplerTvDirect = (interest/100)+1;
                multiplerTvDirectString = multiplerTvDirect.toFixed(2);
                tv2Price = Math.round((tv1Price*chosenMultiplier)/5) * 5;
            }
            tv1PriceWithIntrest = (tv1Price*multiplerTvDirect).toFixed(2);
            tv2PriceWithInterest = (tv2Price*1.05).toFixed(2);
            if(Number.isInteger(tv2PriceWithInterest/3)===false){
                getNumbers();
            }
            cheapestTV = Math.min(tv1PriceWithIntrest,tv2PriceWithInterest).toFixed(2);
            if(cheapestTV===tv1PriceWithIntrest){
                cheapestShop = "TV Direct";
                payToday = `£${tv1PriceWithIntrest} &divide 10 = £${(tv1PriceWithIntrest/10).toFixed(2)}`
            } else{
                cheapestShop = "Planet TV";
                payToday = `£${tv2PriceWithInterest} &divide 3 = £${(tv2PriceWithInterest/3).toFixed(2)}`
            }
            expensiveTV = Math.max(tv1PriceWithIntrest,tv2PriceWithInterest).toFixed(2);
            differencePrice = (expensiveTV - cheapestTV).toFixed(2);
            differencePriceNum = parseFloat(differencePrice);
            if(differencePriceNum>10 || differencePrice===0){
                getNumbers();
            }
        }
        getNumbers();    
    
        toDataURL(tvPic1, function(dataURL) {
            document.getElementById("tv1").src = dataURL
        })
    
        toDataURL(tvPic2, function(dataURL) {
            document.getElementById("tv2").src = dataURL
        })

    }


    function runQuestion(){
        questionText.innerHTML += `
        <style>
        .tvShopContainer{
            display: inline-flex;
            justify-content: space-evenly;
        }

        .tvShopContainer img{
            width: 30%;
        }

        .tvShop{
            border: 2px solid #009780;
            width: 40%; 
            padding: 0.2em;
            text-align: center;
        }

        </style>
        </style> ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        A customer wants to buy a television. They want to pay monthly.<br>
        Two different shops have the television he wants.<br><br>
        <div class="tvShopContainer">
            <div id="tvDirect" class="tvShop">
            <span class="bold">TV Direct<br>
            <img id="tv1" src="../Resources/Images/FS Q's/Level 1/PercentagesBestBuys/tv1.png"><br>
            Price £${tv1Price}</span><br>
            Pay monthly offer:
            <p>Interest is ${interest}% of the price.
            Pay the total amount in 10 equal monthly instalments. First instalment must be paid today.</p>
            </div>
            <div id="planetTv" class="tvShop">
            <span class="bold">Planet TV<br>
            <img id="tv2" src="../Resources/Images/FS Q's/Level 1/PercentagesBestBuys/tv2.png"><br>
            Price £${tv2Price}</span><br>
            Pay monthly offer:
            <p>Interest is 5% of the price.
            Pay <sup>1</sup>&frasl;<sub>3</sub> today and the rest in 4 equal monthly payments.</p>
            </div>
        </div><br><br>
        Work out which offer is cheaper and by how much. How much would the customer need to pay today? 
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLine"></div><br>
        <p id="marksGiven">(4 marks)</p>
        ${pagebreak}
        
        `

        solutionText.innerHTML += `
        ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br><br>
        £${tv1Price} &times ${multiplerTvDirectString} = £${tv1PriceWithIntrest} therefore the total cost from TV Direct is <span class="bold">£${tv1PriceWithIntrest}</span> (interest is £${(tv1Price*(multiplerTvDirect-1)).toFixed(2)}) <br>
        £${tv2Price} &times 1.05 = £${tv2PriceWithInterest} therefore the total cost from Planet TV is <span class="bold">£${tv2PriceWithInterest}</span> (interest is £${(tv2Price*0.05).toFixed(2)}) <br>
        Therefore, <span class="bold">${cheapestShop} is the cheapest.</span> The difference is £${expensiveTV} &minus; £${cheapestTV} = <span class="bold">£${differencePrice}</span><br>
        The amount to pay today is <span class="bold">${payToday}</span>
        <br><br>
        <div class="borderBottomSolution"></div><br>
        `
    }

    //pagebreaks
    if (questionNumber === 6){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 11){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 17){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 23){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 29){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 34){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } 
    
    reassignValues();
    runQuestion();
    //loseSolutionOnNewQ();
}

//Money skills with mixed numbers and fractions
function moneySkillsWithFractionsAndMixedNumbers(){

    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2>
    This question was designed based on question 14 on OCR paper 1 November 2020. It is a calculator paper and OCR awarded 6 marks.<br><br>
    Difficulty settings:<br><br>
    Bronze - The numbers should be fairly easy to work out.  <br><br>
    Silver - The numbers are a little more difficult to work with. <br><br>
    Gold - The numbers are even harder to work with. `

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;

    function reassignValues(){
        function getNumbers(){
            chosenGender = allNamesArray[Math.floor(Math.random()*allNamesArray.length)];
            name1 = chosenGender[0][Math.floor(Math.random()*chosenGender[0].length)];
            heOrShe = chosenGender[1];
            hisOrHer = chosenGender[3];
            Number.prototype.countDecimals = function () {
                if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
                return this.toString().split(".")[1].length || 0; 
            }
            if(globalDifficultySelection===2){
                payrate1 = `${Math.ceil(Math.random()*5)+4}.${Math.ceil(Math.random()*9)}0`;
                numHours1 = `${Math.ceil(Math.random()*4)}0`;
                numeratorArray = [[1,2,1.5],[1,4,1.25],[3,4,1.75]];
                chosenMixedNum = numeratorArray[Math.floor(Math.random()*numeratorArray.length)];
                mixedNumNum = chosenMixedNum[0];
                mixedNumDenom = chosenMixedNum[1];
                mixedNumAsDec = chosenMixedNum[2];
                payrate2 = payrate1*mixedNumAsDec;
                payrate2DecNum = payrate2.countDecimals();
                
                totalHoursWorked = parseFloat(numHours1) + Math.ceil(Math.random()*10)+10;
                bonusArray = [[1,10],[1,5]];
                chosenBonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
                bonusNum = chosenBonus[0];
                bonusDenom = chosenBonus[1];
    
                pay1 = payrate1*numHours1;
                pay2 = (totalHoursWorked-numHours1)*payrate2;
                pay3 = pay1+pay2;
                bonusAmount = pay3*(bonusNum/bonusDenom);
                bonusAmountDecNum = bonusAmount.countDecimals();
                if(payrate2DecNum!==2 || bonusAmountDecNum!==2){
                    getNumbers();
                }
                
            } else if(globalDifficultySelection===1){
                payrate1 = `${Math.ceil(Math.random()*5)+4}.00`;
                numHours1 = 10;
                mixedNumNum = 1;
                mixedNumDenom = 2;
                payrate2 = (payrate1*1.5).toFixed(2);
                totalHoursWorked = numHours1 + Math.ceil(Math.random()*3)*10;
                bonusNum = 1;
                bonusDenom = 10;
    
                pay1 = payrate1*numHours1;
                pay2 = (totalHoursWorked-numHours1)*payrate2;
                pay3 = pay1+pay2;
                bonusAmount = (pay3*(bonusNum/bonusDenom));
            } else if(globalDifficultySelection===3){
                payrate1 = `${Math.ceil(Math.random()*5)+4}.${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*9)}`;
                numHours1 = `${Math.ceil(Math.random()*4)}${Math.ceil(Math.random()*9)}`;
                numeratorArray = [[1,3,(4/3)],[2,3,(5/3)],[1,5,(6/5)],[2,5,(7/5)]];
                chosenMixedNum = numeratorArray[Math.floor(Math.random()*numeratorArray.length)];
                mixedNumNum = chosenMixedNum[0];
                mixedNumDenom = chosenMixedNum[1];
                mixedNumAsDec = chosenMixedNum[2];
                payrate2 = payrate1*mixedNumAsDec;
                payrate2DecNum = payrate2.countDecimals();
                
                totalHoursWorked = parseFloat(numHours1) + Math.ceil(Math.random()*10)+10;
                bonusArray = [[3,7],[5,8],[1,8],[3,8],[4,7]];
                chosenBonus = bonusArray[Math.floor(Math.random()*bonusArray.length)];
                bonusNum = chosenBonus[0];
                bonusDenom = chosenBonus[1];
    
                pay1 = payrate1*numHours1;
                pay2 = (totalHoursWorked-numHours1)*payrate2;
                pay3 = pay1+pay2;
                bonusAmount = pay3*(bonusNum/bonusDenom);
                bonusAmountDecNum = bonusAmount.countDecimals();
                if(payrate2DecNum!==2 || bonusAmountDecNum!==2){
                    getNumbers();
                }
            }
            
        }
        getNumbers();
    }
    
    function runQuestion(){
        questionText.innerHTML += `
        <style>
            #questionText{
                line-height: 1.5rem;
            }
            #solutionText{
                line-height: 1.5rem;
            }
        </style>
        ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        ${name1} is paid £${payrate1} per hour for the first ${numHours1} hours ${heOrShe} works each week.<br>
        After ${numHours1} hours, ${heOrShe} is paid 1 <sup>${mixedNumNum}</sup>&frasl;<sub>${mixedNumDenom}</sub> times the hourly rate.<br>
        Last week, ${name1} worked for ${totalHoursWorked} hours.<br>
        ${chosenGender[2]} was also paid a bouns of &nbsp;<sup>${bonusNum}</sup>&frasl;<sub>${bonusDenom}</sub>&nbsp; of ${hisOrHer} earnings for that week.<br>
        Calculate how much ${name1} was paid <span class="bold">in total</span> last week. 
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLine"></div><br>
        <p id="marksGiven">(6 marks)</p>
        ${pagebreak}
        `

        solutionText.innerHTML += `<br>
        ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        ${payrate1} &times ${numHours1} = ${(payrate1*numHours1).toFixed(2)} therefore, ${name1} is paid £${(payrate1*numHours1).toFixed(2)} for the first ${numHours1} hours of the week.<br>
        ${payrate1} &times 1 <sup>${mixedNumNum}</sup>&frasl;<sub>${mixedNumDenom}</sub> = ${payrate2} 
        therefore, ${name1}'s hourly rate after ${numHours1} hours is £${payrate2}<br>
        ${totalHoursWorked} &minus; ${numHours1} = ${totalHoursWorked-numHours1} therefore ${name1} works ${totalHoursWorked-numHours1} hours over ${numHours1} hours.<br>
        ${totalHoursWorked-numHours1} &times ${payrate2} = ${((totalHoursWorked-numHours1)*payrate2).toFixed(2)} 
        therefore, ${name1} earns £${((totalHoursWorked-numHours1)*payrate2).toFixed(2)} for the time worked after ${numHours1} hours.<br>
        £${pay1.toFixed(2)} + £${pay2.toFixed(2)} = £${(pay1+pay2).toFixed(2)} therefore, ${name1}'s income for the week is £${(pay1+pay2).toFixed(2)} <br>
        <sup>${bonusNum}</sup>&frasl;<sub>${bonusDenom}</sub> &times £${(pay1+pay2).toFixed(2)} = £${(Math.round((bonusAmount + Number.EPSILON) * 100) / 100).toFixed(2)}
        therefore, ${name1}'s bonus is £${(Math.round((bonusAmount + Number.EPSILON) * 100) / 100).toFixed(2)}<br>
        Therefore the total amount ${name1} earns in the week is £${(Math.round((bonusAmount + Number.EPSILON) * 100) / 100).toFixed(2)} + £${(pay1+pay2).toFixed(2)} = <span class="bold">£${(parseFloat((Math.round((bonusAmount + Number.EPSILON) * 100) / 100).toFixed(2))+pay1+pay2).toFixed(2)}</span>
        <br><br>
        <div class="borderBottomSolution"></div><br>
        `
    }
    
    //pagebreaks
    if (questionNumber === 4){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    } else if(questionNumber === 34){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }

    reassignValues();
    runQuestion();
}

//Area Semi Circles
function areaOfSemiCircles(){
    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2>
    This question was designed based on question 25 on OCR paper 1 November 2020. It is a calculator paper and OCR awarded 6 marks.<br><br>
    Difficulty settings:<br><br>
    Bronze - All numbers are multiples of 10.  <br><br>
    Silver - The square length will be even and bag cost pence will be a multiple of 10. <br><br>
    Gold - The square length is odd and the bag cost will include more difficult numbers. `

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;


    function reassignValues(){
        lawnPic = "../Resources/Images/GCSE/Area semi circles/Pic1.png"
        chosenGender = allNamesArray[Math.floor(Math.random()*allNamesArray.length)];
        name1 = chosenGender[0][Math.floor(Math.random()*chosenGender[0].length)];
        heOrShe = chosenGender[2];

        toDataURL(lawnPic, function(dataURL) {
            document.getElementById("lawnPic").src = dataURL
        })

        function getNumbers(){
            if(globalDifficultySelection===2){
                squareLength = parseFloat(`${Math.ceil(Math.random()*5)}${Math.ceil(Math.random()*4)*2}`);
                rateOfSpread = parseFloat(`${Math.ceil(Math.random()*4)}0`);
                bagSize = 10;
                bagCost = parseFloat(`1${Math.ceil(Math.random()*4)}.${Math.ceil(Math.random()*9)}0`).toFixed(2);
            } else if(globalDifficultySelection===1){
                squareLength = parseFloat(`${Math.ceil(Math.random()*5)}0`);
                rateOfSpread = 10
                bagSize = 10;
                bagCost = parseFloat(`${Math.ceil(Math.random()*3)}0`);
            } else if(globalDifficultySelection===3){
                squareLength = parseFloat(`${Math.ceil(Math.random()*9)}${Math.ceil(Math.random()*4)*2+1}`);
                rateOfSpread = parseFloat(`${Math.ceil(Math.random()*4)}0`);
                bagSize = Math.ceil(Math.random()*5)*5
                bagCost = parseFloat(`1${Math.ceil(Math.random()*4)}.${Math.ceil(Math.random()*9)}9`);
            }
            areaSquare = squareLength*squareLength;
            area1semicircle = ((squareLength/2)*Math.PI*Math.PI)/2;
            area3semiCircles = area1semicircle*3;
            totalAreaLawn = Math.round(area3semiCircles + areaSquare);
            fertiliserNeeded = rateOfSpread/1000 * totalAreaLawn;
            bagsNeeded = Math.ceil(fertiliserNeeded / bagSize) * bagSize;
            bagsNeeded2 = Math.round(bagsNeeded/bagSize);
            totalCost = (bagsNeeded2 * bagCost).toFixed(2);
            if(bagsNeeded2===1){
                getNumbers();
            }
        
        }
        getNumbers();
    }

    function runQuestion(){
        questionText.innerHTML += `
        ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        The diagram shows ${name1}'s lawn.<br>
        It is in the shape of a square of side ${squareLength}m and three semi-circles.<br>
        <img id="lawnPic" class="lawnPic" src="../Resources/Images/GCSE/Area semi circles/Pic1.png"><br>
        ${heOrShe} is going to spread fertiliser on the lawn at a rate of ${rateOfSpread}g per square metre.<br>
        The fertiliser is only sold in ${bagSize}kg bags costing £${bagCost} each.<br>
        Calculate the cost of buying the bags of fertiliser for her lawn.<br>
        You must show all your working.
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="answerLine"></div><br>
        <p id="marksGiven">(6 marks)</p>
        ${pagebreak}
        `
    
        solutionText.innerHTML += `
        ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
        <br>
        The area of the square is ${squareLength} &times ${squareLength} = ${areaSquare}m<sup>2</sup><br>
        The radius of the semi-circle is ${squareLength} &divide 2 = ${squareLength/2} <br>
        The area of one semi circle is ${squareLength/2} &times &#8508;<sup>2</sup> &divide 2 = ${area1semicircle}m<sup>2</sup><br>
        Therefore, the area of three semi-circles is ${area1semicircle} &times 3 = ${area3semiCircles}m<sup>2</sup><br>
        Therefore, the total area of the lawn is ${areaSquare} + ${area3semiCircles} = ${totalAreaLawn}m<sup>2</sup> to the nearest square metre<br>
        ${rateOfSpread}g = ${rateOfSpread/1000}kg. To work out the amount of fertiliser needed, 
        we can do ${rateOfSpread/1000} &times ${totalAreaLawn} = ${fertiliserNeeded.toFixed(2)}kg<br>
        ${fertiliserNeeded.toFixed(2)} &divide ${bagSize} = ${(fertiliserNeeded/bagSize).toFixed(2)} Therefore, this means they need ${bagsNeeded2} bags of fertiliser.<br>
        ${bagsNeeded2} &times £${bagCost} = £${totalCost}
        <br><br>
        <div class="borderBottomSolution"></div><br>
        `
    }

    //pagebreaks
    if (questionNumber === 4){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    } else if(questionNumber === 34){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }

    reassignValues();
    runQuestion();

    

 

}

//Ratio: Converting to fractions
function ratioWithFractions(){

    infoBox.innerHTML = `
    <h2 style="color: #009870;">Question Info</h2>
    This question was designed based on question 19a on OCR paper 1 May 2019. It is a calculator paper and OCR awarded 3 marks.<br><br>
    Difficulty settings:<br><br>
    The only real difference on the difficulty settings here is that the numbers gradually get bigger in the ratio as you increase in difficluty. 
    On gold, the fraction that they give to charity is more difficult. `

    let questionDifficulty
    if(globalDifficultySelection === 1){
        questionDifficulty = "Bronze";
    } else if(globalDifficultySelection === 2){
        questionDifficulty = "Silver";
    } else if(globalDifficultySelection === 3){
        questionDifficulty = "Gold";
    };

    questionNumber++;

    function reassignValues(){
        function getNumbers(){
            chosenGenderA = allNamesStartsWithA[Math.floor(Math.random()*allNamesStartsWithA.length)];
            nameA = chosenGenderA[0][Math.floor(Math.random()*chosenGenderA[0].length)];
            chosenGenderB = allNamesStartsWithB[Math.floor(Math.random()*allNamesStartsWithB.length)];
            nameB = chosenGenderB[0][Math.floor(Math.random()*chosenGenderB[0].length)];
            chosenGenderC = allNamesStartsWithC[Math.floor(Math.random()*allNamesStartsWithC.length)];
            nameC = chosenGenderC[0][Math.floor(Math.random()*chosenGenderC[0].length)];
    
            if(globalDifficultySelection===2){
                ratioA = Math.ceil(Math.random()*9)+1;
                ratioB = Math.ceil(Math.random()*9)+1;
                ratioC = Math.ceil(Math.random()*9)+1;
                fracNum = 1;
                fracDenom = Math.ceil(Math.random()*3)+2;
            } else if(globalDifficultySelection===1){
                ratioA = Math.ceil(Math.random()*5)+1;
                ratioB = Math.ceil(Math.random()*5)+1;
                ratioC = Math.ceil(Math.random()*5)+1;
                fracNum = 1;
                fracDenom = 2;
            } else if(globalDifficultySelection===3){
                ratioA = Math.ceil(Math.random()*15)+1;
                ratioB = Math.ceil(Math.random()*15)+1;
                ratioC = Math.ceil(Math.random()*15)+1;
                fracNumArray = [[3,[7,8,11]],[4,[7,9,11]],[5,[7,8,9,11,12]],[6,[7,11,13]],[7,[8,9,11]]];
                chosenFrac = fracNumArray[Math.floor(Math.random()*fracNumArray.length)];
                fracNum = chosenFrac[0];
                fracDenom = chosenFrac[1][Math.floor(Math.random()*chosenFrac[1].length)];
            }
    
            if(ratioA===ratioB || ratioA===ratioC || ratioB===ratioC){
                getNumbers();
            }
    
            totalRatioParts = ratioA+ratioB+ratioC;
            ratioNumAns = fracNum*ratioC;
            ratioDenomAns = fracDenom*totalRatioParts;
            
            function findHCF(){
                // program to find the HCF or GCD of two integers
    
                // take input
                let number1 = ratioNumAns;
                let number2 = ratioDenomAns;
    
                // looping until both numbers are equal
                while(number1 != number2){
                    if(number1 > number2) {
                        number1 -= number2;
                    }
                    else {
                        number2 -= number1;
                    }
                }
    
                // save the hcf
                hcf = number1
            }
            findHCF();
            simplifiedFracNum = ratioNumAns / hcf;
            simplifiedFracDenom = ratioDenomAns / hcf;
        }
    
        getNumbers();

    }

    function runQuestion(){
    questionText.innerHTML += `
    ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br>
    ${nameA}, ${nameB}, and ${nameC} share a prize in the ratio ${ratioA} : ${ratioB} : ${ratioC}. <br>
    ${nameC} gives <sup>${fracNum}</sup>&frasl;<sub>${fracDenom}</sub> of ${chosenGenderC[3]} share to a charity. <br>
    What fraction of the whole prize does ${nameC} give to the charity?
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="answerLine"></div><br>
    <p id="marksGiven">(3 marks)</p>

    `

    solutionText.innerHTML += `
    ${calcSign} <span class="questionNumber">${questionDifficulty} Q${questionNumber}.</span>
    <br>
    The total ratio parts is ${ratioA} + ${ratioB} + ${ratioC} = ${totalRatioParts} and the ratio part associated with ${nameC} is ${ratioC}<br>
    This means that the fraction of the prize ${nameC} gets is <sup>${ratioC}</sup>&frasl;<sub>${totalRatioParts}</sub> <br>
    ${nameC} gives <sup>${fracNum}</sup>&frasl;<sub>${fracDenom}</sub> of ${chosenGenderC[3]} <sup>${ratioC}</sup>&frasl;<sub>${totalRatioParts}</sub> to charity. 
    So we need to calculate <sup>${fracNum}</sup>&frasl;<sub>${fracDenom}</sub> of <sup>${ratioC}</sup>&frasl;<sub>${totalRatioParts}</sub> <br>
    <sup>${fracNum}</sup>&frasl;<sub>${fracDenom}</sub> &times <sup>${ratioC}</sup>&frasl;<sub>${totalRatioParts}</sub> =
    <sup>${fracNum} &times ${ratioC}</sup>&frasl;<sub>${fracDenom} &times ${totalRatioParts}</sub> = 
    <sup>${ratioNumAns}</sup>&frasl;<sub>${ratioDenomAns}</sub>
    
    `
    if(hcf!==1){
        solutionText.innerHTML += ` which simplifies to <sup>${simplifiedFracNum}</sup>&frasl;<sub>${simplifiedFracDenom}</sub>`
    }

    solutionText.innerHTML += ` which is the fraction of the whole prize that ${nameC} gives to charity.
    <br><br>
    <div class="borderBottomSolution"></div><br>`

    }

    //pagebreaks
    if (questionNumber === 3){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("questionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div><br>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
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
    if (questionNumber === 6){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Silver" && questionNumber === 1 && bronzeNumber>0){
        solutionText.innerHTML += `${pagebreak}`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && bronzeNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if (questionDifficulty === "Gold" && questionNumber === 1 && silverNumber>0){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 11){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 16){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 21){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 26){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 31){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 36){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 41){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 46){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 51){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 56){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    } else if(questionNumber === 61){
        document.getElementById("solutionText").innerHTML += `<div class="html2pdf__page-break"></div><br><div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`;
    }


    reassignValues();
    runQuestion();

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
    }
    switch (globalTopicAreaSelection){
        case "speedDistanceTime":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("questionText").innerHTML += `<h3 id="worksheetTitle">Comparing speeds using speed, distance time</h3>`
            for (let i = 0; i < bronzeNumber; i++){
                Qid0001(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                Qid0001(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                Qid0001(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "estimation":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("questionText").innerHTML += `<h3 id="worksheetTitle">Estimation</h3>`
            for (let i = 0; i < bronzeNumber; i++){
                Qid0002(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                Qid0002(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                Qid0002(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "solveQuadraticByFactorising":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("questionText").innerHTML += `<br><h3 id="worksheetTitle">Solving a quadratic equation by factorising</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                QidSolveQuadraticFactorising001(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0
            for (let i = 0; i < silverNumber; i++){
                QidSolveQuadraticFactorising001(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                QidSolveQuadraticFactorising001(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "simultaneousEquationsNoContext":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("questionText").innerHTML += `<br><h3 id="worksheetTitle">Simultaneous Equations no Context</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                QidSimultaneousEquationsNoContext(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                QidSimultaneousEquationsNoContext(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                QidSimultaneousEquationsNoContext(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "simultaneousEquationsContext":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("questionText").innerHTML += `<br><h3 id="worksheetTitle">Simultaneous Equations with Context</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                QidSimultaneousEquationsContext(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                QidSimultaneousEquationsContext(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                QidSimultaneousEquationsContext(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "triangleAndTrapezium":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            document.getElementById("questionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("solutionText").innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            document.getElementById("questionText").innerHTML += `<br><h3 id="worksheetTitle">Area of triangles and trapeziums - reverse to calculate height</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                triangleAndTrapezium(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                triangleAndTrapezium(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                triangleAndTrapezium(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "proportionRateOfWorkProblem":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Proportion: rates of work problems</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                proportionRateOfWorkProblem(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                proportionRateOfWorkProblem(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                proportionRateOfWorkProblem(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "percentageProfit":

            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Percentage Profit</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                percentageProfit(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                percentageProfit(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                percentageProfit(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "perimeterProblemSolving":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Perimeter of L shape</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                perimeterProblemSolving(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                perimeterProblemSolving(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                perimeterProblemSolving(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "usingAFormula":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Garden Seeds</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                usingAFormula(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                usingAFormula(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                usingAFormula(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "percentagesBestBuyPorblemSolving":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Percentages Best Buys</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                percentagesBestBuyPorblemSolving(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                percentagesBestBuyPorblemSolving(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                percentagesBestBuyPorblemSolving(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "moneySkillsWithFractionsAndMixedNumbers":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Money skills with mixed numbers and fractions</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                moneySkillsWithFractionsAndMixedNumbers(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                moneySkillsWithFractionsAndMixedNumbers(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                moneySkillsWithFractionsAndMixedNumbers(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "areaOfSemiCircles":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Area of semi-circles</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                areaOfSemiCircles(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                areaOfSemiCircles(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                areaOfSemiCircles(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
        case "ratioWithFractions":
            loseInstructions();
            getBronzeNumber();
            globalDifficultySelection = 1;
            questionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            solutionText.innerHTML += `<div class="MathsGizmoLogoWhiteBackgroundBottomRight"></div>`
            questionText.innerHTML += `<br><h3 id="worksheetTitle">Ratio: Converting to fractions</h3><br>`
            for (let i = 0; i < bronzeNumber; i++){
                ratioWithFractions(i)}
            getSilverNumber(); 
            globalDifficultySelection = 2;
            questionNumber = 0;
            for (let i = 0; i < silverNumber; i++){
                ratioWithFractions(i)}
            getGoldNumber();
            globalDifficultySelection = 3;
            questionNumber = 0;
            for (let i = 0; i < goldNumber; i++){
                ratioWithFractions(i)}
            document.getElementById("generateQButton").innerHTML="Reset";
            break;
            

    }
}


//Download Options/////////////////////////////////////////////////////////////////////////////////////////////////////
function generatePDF(){
    window.scrollTo(0,0);
    const element = document.querySelector(".previewBoxQ");
    const options = {
        margin:     [0,0.1],
        filename:     worksheetTitle,
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
        filename:     solutionsTitle,
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

