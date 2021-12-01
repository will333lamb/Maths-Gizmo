
let nameArray = ["Alex", "Anelia", "Ava", "Abigail", "Anthony", "Andrew", "Aaron", "Adam", "Anna", "Amy", "Andy", "Alan", "Alicia",
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

let questionNumber = 0

let globalDifficultySelection = 2;


function getSelectedDifficultyValue(){
    globalDifficultySelection = parseInt(document.getElementById("difficultyDropDown").value);
};


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

    //Difficulty Silver
    if (globalDifficultySelection === 2){
    document.getElementById("questionText").innerHTML = 
    `Question ${questionNumber}. <br>
    ${name1} drives a distance of ${name1Distance}km in ${name1Time} hours. <br>
    ${name2} drives a distance of ${name2Distance}km in ${name2Time} hours ${name2TimeMins} minutes. <br>
    Who has the highest average speed? <br>
    Show how you decide.`

    document.getElementById("solutionText").innerHTML = 
    `Solution ${questionNumber}. <br>
    ${name1Distance} ÷ ${name1Time} = ${name1Speed}. Therefore, ${name1}'s speed is ${name1Speed} km/h <br>
    ${name2Time} hours ${name2TimeMins} minutes can be written as ${name2TimeDecimal}. <br>
    ${name2Distance} ÷ ${name2TimeDecimal} = ${name2SpeedSol}. Therefore, ${name2}'s speed is ${name2SpeedSol} km/h <br>
    Hence, ${fastestName} is the fastest.`
    } 

    //Difficulty Gold
    else if (globalDifficultySelection === 3){
    document.getElementById("questionText").innerHTML = 
    `Question ${questionNumber}. <br>
    ${name1} drives a distance of ${name1Distance}km in ${name1Time} hours. <br>
    ${name2} drives a distance of ${name2Distance2}km in ${name2Time} hours ${name2TimeMins2} minutes. <br>
    Who has the highest average speed? <br>
    Show how you decide.`

    document.getElementById("solutionText").innerHTML = 
    `Solution ${questionNumber}. <br>
    ${name1Distance} ÷ ${name1Time} = ${name1Speed}. Therefore, ${name1}'s speed is ${name1Speed} km/h <br>
    ${name2Time} hours ${name2TimeMins2} minutes can be written as ${name2TimeDecimal2}. <br>
    ${name2Distance2} ÷ ${name2TimeDecimal2} = ${name2SpeedSol2}. Therefore, ${name2}'s speed is ${name2SpeedSol2} km/h <br>
    Hence, ${fastestName} is the fastest.`
    }

    //Difficulty Bronze
    else if (globalDifficultySelection === 1){
    document.getElementById("questionText").innerHTML = 
    `Question ${questionNumber}. <br>
    ${name1} drives a distance of ${name1DistanceBronze}km in ${BronzeName1Time} hours. <br>
    ${name2} drives a distance of ${name2DistanceBronze}km in ${name2TimeBronze} hours. <br>
    Who has the highest average speed? <br>
    Show how you decide.`

    document.getElementById("solutionText").innerHTML = 
    `Solution ${questionNumber}. <br>
    ${name1DistanceBronze} ÷ ${BronzeName1Time} = ${name1SpeedBronze}. Therefore, ${name1}'s speed is ${name1SpeedBronze} km/h <br>
    ${name2DistanceBronze} ÷ ${name2TimeBronze} = ${name2SpeedBronze}. Therefore, ${name2}'s speed is ${name2SpeedBronze} km/h <br>
    Hence, ${fastestNameBronze} is the fastest.`
    }
};

let generateQButton = document.getElementById("generateQButton");

generateQButton.onclick = Qid0001;
    
let generateQButtonDiff3 = document.getElementById("generateQButtonDiff3");

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
