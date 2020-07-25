const readline = require('readline-sync')
let isRunning = true;
console.log("Hello, your assets are a critical part of your business. Don't let them break! You must choose the best software on the market. You're already running on core Maximo, but you should upgrade to OpenShift. Upgrading to OpenShift will increase your profits, but beware...other software options will slow you down.. ")

const username = readline.question("What is your name? ")
console.log("Hi " + username + " !")

//the hero
function Ibm (name, hp) {
    this.name = name;
    this.hp = hp;
    this.capabilities = ['monitor', ' vi' , ' assist']
}

const maximoOpenShift = new Ibm ("Maximo", 100)

//the enemy 
function Competitor (name, hp) {
    this.name = name;
    this.hp = hp;
}

let infor = new Competitor ("Infor", 75)
let sap = new Competitor ("SAP", 50)
let oracle = new Competitor ("Oracle", 50)

let competitors = [infor, sap, oracle]


while(isRunning) {
    const action = readline.keyIn(` ${username}, would you like to to [c] Search the internet for EAM software, [p] Print Capabilities, or [q] Quit? You can also check your progress by typing [i]  `, {limit: 'cqpi'})
    if ( action === 'c') {
        walk();

    } else if (action === 'p') {
        printCapabilities();
    } else if (action === 'q') {
        isRunning = false 
        console.log("You didn't care enough about your assets... ");
    } else if (action === 'i') {
        console.log (`Player: ${username} | IBM Power: ${maximoOpenShift.name} | Health Score: ${maximoOpenShift.hp}  | Superpowers: ${maximoOpenShift.capabilities}`)
    }
}


function walk() {

    const random = Math.floor(Math.random()* 3 )
    if (random === 0) {
        console.log("Your searching for the best product via google...")
    } else if (random === 1) {
        console.log("Ah subpar software is coming to break your assets!")
        competitorEncounter()
        
    
    } 

}

// function fight


function printCapabilities() {
    console.log(`Here are your super capabilities: ${maximoOpenShift.capabilities}`)
}

function competitorEncounter() {
    let random = Math.floor(Math.random() * competitors.length);
    let competition = competitors[random];
    console.log("Oh no you ran into "  + competition.name + "!!!!")
    const choices = readline.keyIn(`What would you like to do? would you like to to [a] find another software, [b] run away?`, {limit: 'ab'})
    
    if (choices === 'a') {
        // competition.hp -= 100
        console.log(`Great Job! ${competition.name} has been dogded. You also gained HP and a new capability. `)
        if (competition.hp =- 0) {
            console.log(`You dodged this faulty software entirely, now ${competition.name} hp is ${competition.hp} and they are out of the market..you also gained HP and a new capability.`)
            //delete that competitor
            delete competition
            // console.log("Victory!!")
            // maximoOnOpenShift()
        }
        // fight(competition)
        gainHpAndCapability()
        
        // while(maximoOpenShift.hp ==+ 1 && competition.hp ==+ 1) {
            marketBattle()
            // }
            maximoOnOpenShift()
            
        } else if ( choices === 'b') {
            maximoOpenShift.hp -= 10
            console.log("Your asset leaked oil as you ran...your HP is now " + maximoOpenShift.hp)
            marketBattle()
            if (maximoOpenShift.hp === 0) {
                isRunning = false
                console.log("You have been shutdown!")
            }
        }
        
        
        
    }
    
    
    function gainHpAndCapability() {
        maximoOpenShift.hp += 100
        maximoOpenShift.capabilities.push(" predict")
    }
    
    function marketBattle() {
        let random = Math.floor(Math.random() * competitors.length);
        let competition = competitors[random];
        fightCompetition(competition)

    }
    
    
function fightCompetition(competitor) {
    console.log(`${competitor.name} is coming to attack now`)
    const choices = readline.keyIn(`What would you like to do? would you like to to [a] attack, [b] start browsing in microsoft edge?`, {limit: 'ab'})
    // console.log(maximoOpenShift.hp, competitor.hp)i
    while(competitor.hp > 0 && maximoOpenShift.hp > 0) {
        if (choices === 'a') {
            competitor.hp -= 15
            console.log(`You attack ${competitor.name} and they lose 15 hp!`)
            // maximoOnOpenShift()
        } else if (choices === 'b') {
            maximoOpenShift.hp -= 15
        console.log("Really? Who browses in Microsoft Edge...you lose 15 hp...")
        }

    }

}

// function fightSap() { 
//     const choices = readline.keyIn(`What would you like to do? would you like to to [a] attack, [b] start browsing in microsoft edge?`, {limit: 'ab'})
//     if (choices === 'a') {
//         competition.hp -= 15
//         console.log(`You attack ${competition.name} and they lose 15 hp!`)
//     } else if (choices === 'b') {
//         maximoOpenShift.hp -= 15
//         console.log("Really? Who browses in Microsoft Edge...you lose 15 hp...")
//     }
    
// }

// function fightOracle() {
//     const choices = readline.keyIn(`What would you like to do? would you like to to [a] attack, [b] start browsing in microsoft edge?`, {limit: 'ab'})
//     if (choices === 'a') {
//         competition.hp -= 15
//         console.log(`You attack ${competition.name} and they lose 15 hp!`)
//     } else if (choices === 'b') {
//         maximoOpenShift.hp -= 15
//     console.log("Really? Who browses in Microsoft Edge...you lose 15 hp...")
//     }
    
// }

//trying to push openshift into capabilities maybe?

function maximoOnOpenShift() {
    isRunning = false
    console.log(`Congrats ${username} you are now running on OpenShift!`)
}