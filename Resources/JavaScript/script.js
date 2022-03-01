
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

let questionNumber = 0

let globalDifficultySelection = 2;

/***Other functions*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

function getSelectedTopicArea(){
    globalTopicAreaSelection = document.getElementById("topicAreaSelect").value;
};

function getSelectedTopic(){globalSelectedTopic = document.getElementById("topicSelect").value}

function getSelectedDifficultyValue(){globalDifficultySelection = parseInt(document.getElementById("difficultyDropDown").value)};


//Question ID Functions/////////////////////////////////////////////////////////////////////////////////////////////////////

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
    `<i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i><br>
    ${name1} drives a distance of ${name1Distance}km in ${name1Time} hours. <br>
    ${name2} drives a distance of ${name2Distance}km in ${name2Time} hours ${name2TimeMins} minutes. <br>
    Who has the highest average speed? <br>
    Show how you decide.`

    document.getElementById("solutionText").innerHTML = 
    `
    ${name1Distance} ÷ ${name1Time} = ${name1Speed}. Therefore, ${name1}'s speed is ${name1Speed} km/h <br>
    ${name2Time} hours ${name2TimeMins} minutes can be written as ${name2TimeDecimal}. <br>
    ${name2Distance} ÷ ${name2TimeDecimal} = ${name2SpeedSol}. Therefore, ${name2}'s speed is ${name2SpeedSol} km/h <br>
    Hence, ${fastestName} is the fastest.`
    } 

    //Difficulty Gold
    else if (globalDifficultySelection === 3){
    document.getElementById("questionText").innerHTML = 
    `<i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i><br>
    ${name1} drives a distance of ${name1Distance}km in ${name1Time} hours. <br>
    ${name2} drives a distance of ${name2Distance2}km in ${name2Time} hours ${name2TimeMins2} minutes. <br>
    Who has the highest average speed? <br>
    Show how you decide.`

    document.getElementById("solutionText").innerHTML = 
    `
    ${name1Distance} ÷ ${name1Time} = ${name1Speed}. Therefore, ${name1}'s speed is ${name1Speed} km/h <br>
    ${name2Time} hours ${name2TimeMins2} minutes can be written as ${name2TimeDecimal2}. <br>
    ${name2Distance2} ÷ ${name2TimeDecimal2} = ${name2SpeedSol2}. Therefore, ${name2}'s speed is ${name2SpeedSol2} km/h <br>
    Hence, ${fastestName} is the fastest.`
    }

    //Difficulty Bronze
    else if (globalDifficultySelection === 1){
    document.getElementById("questionText").innerHTML = 
    `<i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i><br>
    ${name1} drives a distance of ${name1DistanceBronze}km in ${BronzeName1Time} hours. <br>
    ${name2} drives a distance of ${name2DistanceBronze}km in ${name2TimeBronze} hours. <br>
    Who has the highest average speed? <br>
    Show how you decide.`

    document.getElementById("solutionText").innerHTML = 
    `
    ${name1DistanceBronze} ÷ ${BronzeName1Time} = ${name1SpeedBronze}. Therefore, ${name1}'s speed is ${name1SpeedBronze} km/h <br>
    ${name2DistanceBronze} ÷ ${name2TimeBronze} = ${name2SpeedBronze}. Therefore, ${name2}'s speed is ${name2SpeedBronze} km/h <br>
    Hence, ${fastestNameBronze} is the fastest.`
    }
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

    questionNumber++;

    document.getElementById("questionText").innerHTML =
    `<span class="fa-stack fa-2x" style="font-size: 1rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span><br>
    ${name1} is planning a presentation evening. <br>
    ${name1} writes down ${hisOrHer} costs and income. <br>
    <style>
    .questionSolutionContainer{
        font-size: 0.97rem;
        line-height: 2;
        width: 100%;
    }
    table {
        border: 1px solid black;
        border-collapse: collapse;
        font-size: 1em;
        width: 100%;
        white-space: pre-line;
        line-height: 1.5;
    }
    td {
        padding: 0 1%;
        border-right: 1px solid black;
        width: fit-content;
    }
    th {
        padding: 0 1%;
        border-right: 1px solid black;
        width: fit-content;
        text-align: left;
    }
    .tableHeadings{
        text-align: center;
        border-bottom: 1px solid black;
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
    Show all of your working.`


    
    document.getElementById("solutionText").innerHTML = 
    `<span class="underline">Costs:</span> <br>
    Staff costs:   ${staffNum} staff &#215 ${staffHoursNum} hours &#215 £${staffPay} means ${staffNum} &#215 ${staffHoursNum} &#215 £${staffPay} = <span class="underline">£${staffTotalCost}</span><br>
    Food costs: Rounding £${mealsCost} gives £${mealsCostSigFig2} and ${numMeals} meals at £${mealsCostSigFig2} means ${numMeals} &#215 £${mealsCostSigFig2} = <span class="underline">£${totalMealsCost}</span> <br>
    Prize costs: Rounding £${prizesCost} gives £${prizesCostsSigFig2} and ${numPrizes} prizes at £${prizesCostsSigFig2} means ${numPrizes} &#215 £${prizesCostsSigFig2} = <span class="underline">£${totalPrizesCost}</span> <br>
    Therefore total costs are £${staffTotalCost} + £${totalMealsCost} + £${totalPrizesCost} = <span class="totalCostIncome">£${totalCosts}</span> <br> 
    <span class="underline">Income:</span> <br>
    Guests income: ${numGuests} guests each paying £${guestsCost} means ${numGuests} &#215 £${guestsCost} = <span class="underline">£${guestTotalIncome}</span> <br>
    Sponsorship: Rounding £${Sponsorship} gives <span class="underline">£${sponsorshipSigFig}.</span> <br>
    Therefore the total income is £${guestTotalIncome} + £${sponsorshipSigFig} = <span class="totalCostIncome">£${totalIncome}</span> <br>
    ${conclusionStatement}` 

};

function QidSolveQuadraticFactorising001(){

    let signArray = ["+","-"];
    let signOne
    if(globalDifficultySelection === 1){
        signOne = signArray[0];
    } else if(globalDifficultySelection === 2){
        signOne = signArray[Math.floor(Math.random()*signArray.length)];
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

// Question Text
    document.getElementById("questionText").innerHTML =
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

    </style>
    
    <span class="fa-stack fa-2x" style="font-size: 1rem;">
    <i class="fas fa-calculator fa-stack-1x"></i>
    <i id="banSign" class="fas fa-ban fa-stack-2x"></i>
    </span><br>
    Solve by factorising.<br>
    <span class="centeredQuadratic"> &#119909<sup class="superscripts">2</sup> ${signOne} ${bValue}&#119909 ${signTwo} ${cValue} = 0 <br>
    </span>`

// Solution Text
    document.getElementById("solutionText").innerHTML =
    `
    To factorise, I need to think of two numbers that multiply together to give ${signTwo}${cValue} and sum together to give ${signOne}${bValueSol}.<br>
    ${solSignFinal1}${cValueHelp1} &#215 ${solSignFinal2}${cValueHelp2} = ${signTwo}${cValue}<br>
    ${solSignFinal1}${cValueHelp1} + ${solSignFinal2}${cValueHelp2} = ${signOne}${bValueSol} <br>
    Thus, the two numbers that satisfy these conditions are ${solSignFinal1}${cValueHelp1} and ${solSignFinal2}${cValueHelp2}.<br>
    Therefore, factorising gives:<br> (&#119909 ${solSignOne} ${cValueHelp1})(&#119909 ${solSignTwo} ${cValueHelp2}) = 0 <br>
    Therefore &#119909 = ${solSignFinalFinal1}${cValueHelp1} or  &#119909 = ${solSignFinalFinal2}${cValueHelp2}.

    `

}

function QidSimultaneousEquationsNoContext(){

    
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

// Question Text
    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .centeredEquation{
        width: 100%;
        text-align: center;
        font-family: 'sans-serif';
    }
    </style>
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i><br>
    Solve the simultaneous equations.<br><br><div class="centeredEquation">
    ${xCoefficentEqn1}&#119909 + ${yCoefficentEqn1}&#119910 = ${eqn1Num} <br>
    ${xCoefficentEqn2}&#119909 + ${yCoefficentEqn2}&#119910 = ${eqn2Num}
    <br></div>
    
    `

// Solution Text

    if(globalDifficultySelection === 2){
        if(lcmX <= lcmY){
            document.getElementById("solutionText").innerHTML = 
            ` 
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
                `
            }
        } else if(lcmX>lcmY){
            document.getElementById("solutionText").innerHTML =
            `The lowest common multiple of the &#119910-coefficients is ${lcmY}<br>
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
                `
            }
        }
        
    } else if(globalDifficultySelection === 3){
        if(lcmX <= lcmY){
            document.getElementById("solutionText").innerHTML = 
            ` 
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
                </div>
                `
            }
        } else if(lcmX>lcmY){
            document.getElementById("solutionText").innerHTML =
            `The lowest common multiple of the &#119910-coefficients is ${lcmY}<br>
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
                `
            }
        }
    } else if(globalDifficultySelection === 1){
        if(yCoefficentEqn1>yCoefficentEqn2){
            document.getElementById("solutionText").innerHTML = 
            `By subtracting the bottom equation from the top equation and solving for &#119910, we have:
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
            </div>`
        } else{
            document.getElementById("solutionText").innerHTML = 
            `By subtracting the top equation from the bottom equation and solving for &#119910, we have:
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
            </div>`
        }
    }
    

}

function QidSimultaneousEquationsContext(){

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
        xValue = Math.ceil((Math.random()*12)+10)
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
        for(yValue = Math.ceil((Math.random()*12)+10); yValue === xValue;){
            yValue = Math.ceil((Math.random()*12)+10);
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
        for(xCoefficentEqn2 = Math.ceil((Math.random()*9)+10) ; xCoefficentEqn2 === xCoefficentEqn1;){
            xCoefficentEqn2 = Math.ceil(Math.random()*9)+10;
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

// Question Text
    document.getElementById("questionText").innerHTML = 
    `
    <style>
    .centeredEquation{
        width: 100%;
        text-align: center;
        font-family: 'sans-serif';
    }
    #questionText{
        line-height: 2rem;
    }
    </style>
    <i class="fas fa-calculator"></i>
    <i id="checkSign" class="fas fa-check"></i><br>
    
    ${name1} and ${name2} buy some clothes.<br>
    <br>
    ${name1} buys ${xCoefficentEqn1} shirts and ${yCoefficentEqn1} jumpers. He pays £${eqn1Num}.<br>
    ${name2} buys ${xCoefficentEqn2} shirts and ${yCoefficentEqn2} jumpers. She pays £${eqn2Num}.<br><br>
    Assume that each shirt has the same cost and that each jumper has the same cost.<br>
    <br>
    Work out the cost of one shirt and the cost of one jumper.<br>
    `

// Solution Text

    if(globalDifficultySelection === 2){
        if(lcmX <= lcmY){
            document.getElementById("solutionText").innerHTML = 
            `We can express this question as the following simultaneous equation.<br>
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
                Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
                `
            }
        } else if(lcmX>lcmY){
            document.getElementById("solutionText").innerHTML =
            `We can express this question as the following simultaneous equation.<br>
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
                Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
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
                Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
                `
            }
        }
        
    } else if(globalDifficultySelection === 3){
        if(lcmX <= lcmY){
            document.getElementById("solutionText").innerHTML = 
            `We can express this question as the following simultaneous equation.<br>
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
                Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
                `
            }
        } else if(lcmX>lcmY){
            document.getElementById("solutionText").innerHTML =
            `We can express this question as the following simultaneous equation.<br>
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
                Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
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
                Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.
                `
            }
        }
    } else if(globalDifficultySelection === 1){
        if(yCoefficentEqn1>yCoefficentEqn2){
            document.getElementById("solutionText").innerHTML = 
            `We can express this question as the following simultaneous equation.<br>
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
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.`
        } else{
            document.getElementById("solutionText").innerHTML = 
            `We can express this question as the following simultaneous equation.<br>
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
            Therefore, the cost of one shirt is £${xValue} and the cost of one jumper is £${yValue}.`
        }
    }
    

}

/**********************************************
 * Button functions *
 *******************************************/

let generateQButton = document.getElementById("generateQButton");

generateQButton.onclick = function(){
    if(globalTopicAreaSelection ==="speedDistanceTime"){
    Qid0001();
} else if(globalTopicAreaSelection ==="estimation"){
    Qid0002();
} else if(globalTopicAreaSelection ==="solveQuadraticByFactorising"){
    QidSolveQuadraticFactorising001();
} else if(globalTopicAreaSelection ==="simultaneousEquationsNoContext"){
    QidSimultaneousEquationsNoContext();
} else if(globalTopicAreaSelection ==="simultaneousEquationsContext"){
    QidSimultaneousEquationsContext();
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

function generatePDF(){
    const element = document.querySelector(".questionSolutionContainer");
    const options = {
        margin:       0.1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    html2pdf()
    .from(element)
    .set(options)
    .save()
}

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

    