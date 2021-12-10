
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

let globalTopicAreaSelection = 1;

function getSelectedTopicArea(){globalTopicAreaSelection = parseInt(document.getElementById("topicAreaSelect").value)};

let globalSelectedTopic = 1;

function getSelectedTopic(){globalSelectedTopic = parseInt(document.getElementById("topicSelect").value)}

function getSelectedDifficultyValue(){globalDifficultySelection = parseInt(document.getElementById("difficultyDropDown").value)};

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

    //Difficulty Silver
    if (globalDifficultySelection === 2){
    document.getElementById("questionText").innerHTML = 
    `
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
    `
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
    `
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
    let name1 = nameArray[Math.floor(Math.random()*nameArray.length)];
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

    //Question info.

    document.getElementById("questionInfoText").innerHTML = 
    `<h3>Question Information</h3><br>
    This question was inspired by the following: <br><br>
    <style>
        .tableinfo{
            border: none;
            border-collapse: none;
        }
        .tableinfo th{
            border: none;
            text-align: right;
        }
        .tableinfo td{
            border: none;
            text-align: left;
        }
    </style>

    <table class="tableinfo">
        <tr>
            <th>Exam Board</th>
            <td>OCR</td>
        </tr>
        <tr>
            <th>Tier</th>
            <td>Foundation</td>
        </tr>
        <tr>
            <th>Paper</th>
            <td>2 (Non-calculator)</td>
        </tr>
        <tr>
            <th>Month</th>
            <td>November</td>
        </tr>
        <tr>
            <th>Year</th>
            <td>2019</td>
        </tr>
        <tr>
            <th>Question</th>
            <td>15</td>
        </tr>
    </table>`
    

    questionNumber++;

    document.getElementById("questionText").innerHTML =
    `${name1} is planning a presentation evening. <br>
    ${name1} writes down their costs and income. <br>
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
    ${name1} thinks they will make a profit. <br>
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

}

let generateQButton = document.getElementById("generateQButton");

generateQButton.onclick = function(){
    if(globalTopicAreaSelection === 4 && globalSelectedTopic === 1){
    Qid0001();
} else if(globalTopicAreaSelection === 1 && globalSelectedTopic === 2){
    Qid0002();
  };

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


/*
let fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.onclick = function(){
    document.querySelector('.question-box').css({
        width: '100%'
        

    }) 
}
*/
    