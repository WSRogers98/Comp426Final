
//Add in a configuration with the deck that You can have at least 3 TA type cards in your deck (maximum of 3)
//This will allow us to fluff up the deck numbers without being a little extreme on anything else
/*
    id: the id of the card
    name: the name of the card
    cardimg: the display image for the card
    visualeffect: the visual affect that is made when the card is played
    attack: how much damage the card does
    defense: the health points of the card before the card is destroyed
    cost: how much mana the card costs
    abilityName: the name of the ability of the card
    ability: the generic typing of an ability
    abilityDescription: the special ability a card has if it has one
    abilityNumber: the ID of the given ability
        ability number may be useless if everyone has a unique ability and there aren't many repeats
    type: the type of the card, creature or spell.
    author: who created the card

 {
        id:0,
        name:"temp",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"temp",
        abilityName:"temp",
          abilityDescription:"temp"
        abilityNumber:0,
        type:"temp",
        author:"temp",
    },
 */
//Add in a configuration with the deck that You can have at least 3 TA type cards in your deck (maximum of 3)
//This will allow us to fluff up the deck numbers without being a little extreme on anything else

export const cardData= [{
    id:0,
    name:"Kris Jordan",
    cardimg: "link here",
    visualeffect:"link here",
    attack:3,
    defense:15,
    cost:10,
    abilityName:"First Year Hope",
    abilityDescription:"Heals 2 per turn",
    ability:"Heal All allies including yourself",
    abilityNumber:0,
    type:"legendary creature",
    author:"Molly",
},
    {
        id:1,
        name:"Departmental King, KMP",
        cardimg: "link here",
        visualeffect:"link here",
        attack:4,
        defense:5,
        cost:10,
        ability:"reflect",
        abilityDescription:"Reflects damage back",
        abilityName:"Reflect",
        abilityNumber:1,
        type:"legendary creature",
        author:"Molly",
    },
    {
        id:2,
        name:"The Eternal One: David Plaisted",
        cardimg: "link here",
        visualeffect:"link here",
        attack:1,
        defense:20,
        cost:14,
        ability:"onedmg",
        abilityName:"One year at a time",
        abilityDescription:"Can only take 1 damage from any damage source.",
        abilityNumber:3,
        type:"legendary creature",
        author:"Molly",
    },
    {
        id:3,
        name:"COMP110 TA",
        cardimg: "link here",
        visualeffect:"link here",
        attack:1,
        defense:2,
        cost:1,
        ability:"none",
        abilityName:"none",
        abilityDescription:"",
        abilityNumber:0,
        type:"creature",
        author:"Molly",
    },
    {
        id:4,
        name:"Office Hours",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"heal",
        abilityDescription:"Heals 5 hp",
        abilityNumber:0,
        type:"heal",
        author:"Molly",
    },
    {
        id:5,
        name:"Curve",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"heal",
        abilityDescription:"Heals 10hp",
        abilityNumber:0,
        type:"heal",
        author:"Molly",
    },
    {
        id:6,
        name:"Stack Overflow",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"coinfliphealhurt",
        abilityName:"stack overflow",
        abilityDescription:"50% chance of healing 5, 50% chance of dealing 5 damage",
        abilityNumber:0,
        type:"hurt",
        author:"Molly",
    },
    {
        id:7,
        name:"Exam",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:5,
        ability:"hurt",
        abilityName:"hurt",
        abilityDescription:"Deal 10 damage",
        abilityNumber:0,
        type:"hurt",
        author:"Billy",
    },
    {
        id:8,
        name:"Snoeyink the Origami Lord",
        cardimg: "link here",
        visualeffect:"link here",
        attack:5,
        defense:1,
        cost:1,
        ability:"Prof of Origami",
        abilityName:"Prof of Origami",
        abilityDescription:"Spawns two 2 attack, 2 defense origami cranes",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:9,
        name:"Anish, the Prankster",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:2,
        cost:5,
        ability:"hide",
        abilityName:"Hidden",
        abilityDescription:"Can't be targeted for one turn",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:10,
        name:"Comp Sci Overcrowding!",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"hurtall",
        abilityName:"GIVE ME MY CLASSES",
        abilityDescription:"Neither you nor your opponent can get into any fucking classes, both of you take 10 damage and a extra semester.",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    //alan go up from here and finish writing the specifics of the card.
    {
        id:11,
        name:"Sitterson Pizza Event",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"Free Za Dude",
        abilityDescription:"Heal both players by 10",
        abilityNumber:0,
        type:"heal",
        author:"Alan",
    },
    {
        id:12,
        name:"Legendary TA Rosh",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:10,
        cost:10,
        ability:"Tireless",
        abilityName:"Tireless",
        abilityDescription:"Never faltering, always there to help. Rosh deals double damage and takes half damage from creatures.",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        //DO THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
        id:13,
        name:"Robotics Lord Ron Alterovitz",
        cardimg: "link here",
        visualeffect:"link here",
        attack:3,
        defense:4,
        cost:7,
        ability:"robot",
        abilityName:"Build Robot",
        abilityDescription:"Build two 2/2 robots",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:14,
        name:"Legendary Professor Bishop: Destroyer of Worlds",
        cardimg: "link here",
        visualeffect:"link here",
        attack:3,
        defense:3,
        cost:12,
        ability:"Destroy Board",
        abilityName:"Destroy Students",
        abilityDescription:"Destroy all creatures on the board, rip the 411 homies last semester.",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:15,
        name:"WeedOut Classes",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"hurtplayers",
        abilityName:"We all have to take them",
        abilityDescription:"Both Players take 5 Damage",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        //
        id:16,
        name:"BS to BA",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:1,
        ability:"",
        abilityName:"",
        abilityDescription:"Gain 5 health. Do 5 damage to your opponent.  Yea get outta here man, you have to take physics nerd.",
        abilityNumber:0,
        type:"spell",
        author:"Alan",
    },
    {
        id:17,
        name:"Caffeine Addiction",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"Heal 2",
        abilityDescription:"You heal 2 hp",
        abilityNumber:0,
        type:"heal",
        author:"Alan",
    },
    {
        id:18,
        name:"Mips Rush",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:4,
        ability:"AOE Hurt",
        abilityName:"AOE Hurt",
        abilityDescription:"Deal 2 damage to every creature on the board (and your opponent)",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        id:19,
        name:"Sitterson: Departmental Home",
        cardimg: "link here",
        visualeffect:"link here",
        attack:1,
        defense:3,
        cost:2,
        ability:"Sanctuary",
        abilityName:"Heal over time",
        abilityDescription:"Heal the player1 hp every turn",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:20,
        name:"Procrastinate",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:2,
        ability:"stun",
        abilityName:"stun",
        abilityDescription:"Cast on an enemy creature, It does not attack next turn.",
        abilityNumber:0,
        type:"stun",
        author:"Alan",
    },
    {
        id:21,
        name:"Coding Passion",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"Enjoying What You're Coding",
        abilityName:"temp",
        abilityDescription:"You're doing a project you're having fun with, Gain 10 hp",
        abilityNumber:0,
        type:"heal",
        author:"Alan",
    },
    {
        id:21,
        name:"Djisktras Algorithm",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:3,
        ability:"hurt",
        abilityName:"Graph Theory Incoming",
        abilityDescription:"Deals 5 damage to the opponent",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        //////////////////////////////////////////////fuckkkkkkkkkkkkkk
        //Talk to someone who has taken a class with Montek
        id:22,
        name:"Legendary Professor: Montek",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:5,
        cost:5,
        ability:"",
        abilityName:"411 Knowledge",
        abilityDescription:"He holds forbidden knowledge, deal 5 damage to your opponent",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:23,
        name:"Legendary Professor: McMillan the Villain",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:2,
        cost:10,
        ability:"summon",
        abilityName:"Bioalgorithm Mastery",
        abilityDescription:"Create 4 1/1 living computers as allies.",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:24,
        name:"Echoes of the Past: Pozefsky",
        cardimg: "link here",
        visualeffect:"link here",
        attack:3,
        defense:4,
        cost:13,
        ability:"sanctuary",
        abilityName:"Never Retired",
        abilityDescription:"Other Creatures can't die while shes on the field alive.",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:25,
        name:"Classmates in Genome 100",
        cardimg: "link here",
        visualeffect:"link here",
        attack:5,
        defense:5,
        cost:3,
        ability:"none",
        abilityName:"You see them every Semester",
        abilityDescription:"",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:26,
        name:"Internship",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:2,
        ability:"heal",
        abilityName:"Heal",
        abilityDescription:"Gain 10hp",
        abilityNumber:0,
        type:"heal",
        author:"Alan",
    },
    {
        id:27,
        name:"BA to BS",
        cardimg: "link here",
        visualeffect:"link here",
        attack:5,
        defense:0,
        cost:1,
        ability:"hurt",
        abilityName:"",
        abilityDescription:"Lose 5 Health, Draw 2",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        //Higher health, lower attack monster
        id:28,
        name:"Computer Science Friends",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:6,
        cost:4,
        ability:"",
        abilityName:"",
        abilityDescription:"Great to have them, keep you alive and sustain your boardstate right now.",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        //Higher attack, lower health monster
        id: 29,
        name:"Computer Science Enemies",
        cardimg: "link here",
        visualeffect:"link here",
        attack:6,
        defense:2,
        cost:4,
        ability:"none",
        abilityName:"none",
        abilityDescription:"Eh, you don't always have pals I suppose.",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:30,
        name:"Good Study Group",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:4,
        cost:2,
        ability:"heal",
        abilityName:"Keeps my GPA alive",
        abilityDescription:"These students motivate and help you study, heal 2 hp every turn this is on the board",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:31,
        name:"Bad Study Group",
        cardimg: "link here",
        visualeffect:"link here",
        attack:5,
        defense:2,
        cost:2,
        ability:"none",
        abilityName:"Distracting Friends",
        abilityDescription:"Having a good time, but way too distracting for anything productive, take 2 damage every turn this is on the board.",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:32,
        name:"Code Leech",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:5,
        cost:2,
        ability:"hurt",
        abilityName:"Leech",
        abilityDescription:"This classmate repeatedly asks everyone for code, Wow it's annoying.  Everyone takes 1 damage at the end of each turn.",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:33,
        name:"Honour Court",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:3,
        ability:"destroy",
        abilityName:"Destroy Cheaters",
        abilityDescription:"Randomly chooses two creatures on the board and destroy them.  The honour does not descriminate.",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:34,
        name:"Switch to Comp Minor",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:10,
        ability:"healthcap",
        abilityName:"Weaker but still here",
        abilityDescription:"You are weak, you can't handle the stress of the super humans that exist within the comp department.  " +
            "Your health can never go above 50, but you heal 30.",
        abilityNumber:0,
        type:"spell",
        author:"Alan",
    },
    {
        id:35,
        name:"Hackathon",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:3,
        ability:"hurt",
        abilityName:"Resume Boost",
        abilityDescription:"Draw 2 cards take 2 damage.  Your github and resume look good but at what cost?  The answer is sleep.",
        abilityNumber:0,
        type:"spell",
        author:"Alan",
    },
    //Go to do more down below
    {
        id:36,
        name:"Tech Job Fair",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:4,
        ability:"draw",
        abilityName:"Card Swap",
        abilityDescription:"Discard 2 cards Draw 2 cards.  You've gained some business cards, thrown around a few resumes.  All in all a successful day.",
        abilityNumber:0,
        type:"spell",
        author:"Alan",
    },
    {
        id:37,
        name:"Fred Brooks",
        cardimg: "link here",
        visualeffect:"link here",
        attack:2,
        defense:4,
        cost:7,
        ability:"draw",
        abilityName:"Foundations of UNC Comp Sci",
        abilityDescription:"This man founded our comp sci department, is one of the first founder of virtual reality."+
            "Without him we wouldn't be here.",
        abilityNumber:0,
        type:"legendary creature",
        author:"Alan",
    },
    {
        id:38,
        name:"Pearl Hacks",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"Inclusive Department",
        abilityDescription:"Inclusiveness is helpful to everyone." +
            "Everyone heals 5",
        abilityNumber:0,
        type:"heal",
        author:"Alan",
    },
    {
        id:39,
        name:"Obscure Youtube Coding Tutorial Channel",
        cardimg: "link here",
        visualeffect:"link here",
        attack:3,
        defense:3,
        cost:1,
        ability:"none",
        abilityName:"None",
        abilityDescription:"We love obscure youtube coding vids, bless them.",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        id:40,
        name:"Comp 426 Selfie",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"426 Curve",
        abilityDescription:"Gain 10hp if you're here.  Show up to class if you want the 10hp.  OR if you went to class you might know what's really up homie.",
        abilityNumber:0,
        type:"heal",
        author:"Alan",
    },
    {
        id:41,
        name:"Crying in the Sitterson Bathroom",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"heal",
        abilityName:"Catharsis",
        abilityDescription:"Crying is good for you.  Gain 3 hp and get back to work homesizzle.",
        abilityNumber:0,
        type:"temp",
        author:"Alan",
    },
    {
        id:42,
        name:"Kurama",
        cardimg: "link here",
        visualeffect:"link here",
        attack:1,
        defense:1,
        cost:2,
        ability:"kmpgain",
        abilityName:"Sushi",
        abilityDescription:"Gain a kmp roll",
        abilityNumber:0,
        type:"creature",
        author:"Alan",
    },
    {
        //Maybe Change
        id:43,
        name:"Rate my Professor",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:3,
        ability:"draw",
        abilityName:"SPICY",
        abilityDescription:"KMP = Chili Pepper x10, draw as many cards as possible ",
        abilityNumber:0,
        type:"temp",
        author:"Alan",
    },
    {
        id:45,
        name:"Skipping Class",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"hurt",
        abilityName:"Slippery Slope",
        abilityDescription:"Deal damage equal to the number of turns taken.  Skipping class once is fine but it's one hell of a slippery slope",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        id:46,
        name:"Bug",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"hurt",
        abilityName:"Deal Damage",
        abilityDescription:"Damage type: emotional.  7 damage to be precise.",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        id:47,
        name:"The Meme Shit Post Groupme",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"hurt",
        abilityName:"Distracting memes",
        abilityDescription:"The memes are funny but they sure don't help your GPA. Deal 3 damage",
        abilityNumber:0,
        type:"hurt",
        author:"Alan",
    },
    {
        id:48,
        name:"CPU Hat",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"steal",
        abilityName:"CPU Possession",
        abilityDescription:"CPU Hat will possess an enemy creature on the board and it shall be yours.  CPU hat is the first AI in the machine uprising.",
        abilityNumber:0,
        type:"steal",
        author:"Alan",
    },
    {
        id:49,
        name:"Graduation",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"Graduate",
        abilityName:"You're done.  You made it.  Your time at UNC is over and you are free.  Win the game.",
        abilityDescription:"Now get a job.",

        abilityNumber:0,
        type:"win",
        author:"Alan",
    },
    //null card for not having a card
    /*
    {
        id:50,
        name:"null",
        cardimg: "link here",
        visualeffect:"link here",
        attack:0,
        defense:0,
        cost:0,
        ability:"null",
        abilityName:"null",
        abilityNumber:0,
        type:"null",
        author:"Alan",
    }

     */
];