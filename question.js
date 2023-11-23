//creating an array and passing the number

let questions=[
    //Information questions
    {
        numb:1,
        question:"_________ do you usually meet your friends? At night or on the weekends?",
        answer:"When",
        options:[
            "When",
            "How",
            "Where",
            "Who's"
        ]
    },
    {
        numb:2,
        question:"_________ do you greet new people? With a smile? ",
        answer:"How",
        options:[
            "Why",
            "When",
            "How",
            "Whose"
        ]
    },
    {
        numb:3,
        question:"_________ do you go with your friends to have fun?",
        answer:"Where",
        options:[
            "Who's",
            "When",
            "Why",
            "Where"
        ]
    },
    {
        numb:4,
        question:"_________ 's the most sociable person you know?",
        answer:"Who",
        options:[
            "Whose ",
            "How ",
            "Who",
            "Why"
        ]
    },
    {
        numb:5,
        question:"_________ are you learning English? For work?",
        answer:"Why",
        options:[
            "Who's",
            "Why",
            "Whose",
            "When"
        ]
    },
    {
        numb:6,
        question:"Do you ever use someone else's computer? ________ computer do you use?",
        answer:"Whose",
        options:[
            "Whose",
            "How",
            "Who's",
            "When"
        ]
    },
        //Indirect questions

    {
        numb:7,
        question:"Where were you raised --> Can you tell me _______________?",
        answer:"Where you were raised",
        options:[
            "Where you are raise",
            "Where you were raise",
            "Where you were raised",
            "Where you raised"
        ]
    },
    {
        numb:8,
        question:"When does your teacher want to retire? --> Do you have any idea ____________?",
        answer:"When your teacher wants to retire",
        options:[
            "When your teacher wants to retire",
            "When your teacher want to retire",
            "When your teacher wants retire",
            "When your teacher want retire"
        ]
    },
    {
        numb:9,
        question:"Are your friends into sports? --> I wonder ______________.",
        answer:"if your friends are into sports",
        options:[
            "your friends is into sports",
            "if your friends is into sports",
            "your friends are into sports",
            "if your friends are into sports"
        ]
    },
    {
        numb:10,
        question:"When do your parents celebrate their anniversary? --> Do you know ____________?",
        answer:"When your parents celebrate their annirveresary",
        options:[
            "When your parents celebrate annirveresary",
            "When your parents celebrate their annirveresary",
            "When your parents celebrates their annirveresary",
            "When your parents celebrate their anirveresary"
        ]
    },
    {
        numb:11,
        question:"Were your brothers and sisters born in this city? --> I'd like to know _______________.",
        answer:"If your brothers and sisters were born in this city",
        options:[
            "If your brothers and sisters was born in this city",
            "If your brothers and sisters were born in these city",
            "If your brothers and sisters were born in this city",
            "If you brothers and sisters were born in this city"
        ]
    },
        //Simple Past

    {
        numb:12,
        question:"She______her new coffee cup on the floor",
        answer:"Dropped",
        options:[
            "Dropped",
            "Returned",
            "Made",
            "Discorverd"
        ]
    },
    {
        numb:13,
        question:"Didn't you_____Mariana´s books to her?",
        answer:"Tell",
        options:[
            "Returned",
            "Made",
            "Tell",
            "Dropped"
        ]
    },
    {
        numb:14,
        question:"I________my favorite jacket in the back of my closet.",
        answer:"Returned",
        options:[
            "Made",
            "Dropped",
            "Told",
            "Returned"
        ]
    },
    {
        numb:15,
        question:"He_______a wonderful dinner for us when he got home.",
        answer:"Made",
        options:[
            "Thought",
            "Told",
            "Made",
            "Discoverd"
        ]
    },
    {
        numb:16,
        question:"Did they_______you about their trip to Bolivia?",
        answer:"Discover",
        options:[
            "Discover",
            "Tell",
            "Dropped",
            "Made"
        ]
    },
    {
        numb:17,
        question:"I_________him for his email address.",
        answer:"Didn´t ask",
        options:[
            "ask",
            "Didn´t asked",
            "Dind´t ask",
            "Dind´t"
        ]
    },
        //Simple Present and Present Continuous.

    {
        numb:18,
        question:"She ____________ (watch) TV every evening.",
        answer:"Watches",
        options:[
            "Watch",
            "Watching",
            "Watchs",
            "Watches"
        ]
    },
    {
        numb:19,
        question:"They __________ (play) soccer in the park right now.",
        answer:"Playing",
        options:[
            "Play",
            "Plays",
            "Playing",
            "Played"
        ]
    },
    {
        numb:20,
        question:"I usually __________ (read) a book before bed.",
        answer:"Read",
        options:[
            "Read",
            "Reads",
            "Reading",
            "Readed"
        ]
    },
    {
        numb:21,
        question:"He __________ (study) for his exam at the moment.",
        answer:"Stuying",
        options:[
            "Study",
            "Studies",
            "Stuying",
            "Studied"
        ]
    },
    {
        numb:22,
        question:"We ___________ (go) to the beach on weekends.",
        answer:"Go",
        options:[
            "Go",
            "Goes",
            "Going",
            "Went"
        ]
    },
    //Present Perfect with ever, never, for, and since.

    {
        numb:23,
        question:"Have you __________ been to Paris?",
        answer:"Ever",
        options:[
            "Have",
            "Are",
            "Were",
            "Ever"
        ]
    },
    {
        numb:24,
        question:"She has lived in New York __________ 2010.",
        answer:"Since",
        options:[
            "For",
            "Since",
            "That",
            "Ever"
        ]
    },

    {
        numb:25,
        question:"__________ you finished your homework yet",
        answer:"Have",
        options:[
            "Do",
            "Are",
            "Have",
            "Were"
        ]
    },
    {
        numb:26,
        question:"They have known each other __________ a long time.",
        answer:"For",
        options:[
            "For",
            "Since",
            "Never",
            "Ever"
        ]
    },
    {
        numb:27,
        question:"I've __________ been to a concert with such an amazing atmosphere.",
        answer:"Never",
        options:[
            "For",
            "Since",
            "Never",
            "Have"
        ]
    },
    //Present Perfect with already and yet.

    {
        numb:28,
        question:"Have you seen that movie __________?",
        answer:"Already",
        options:[
            "Already",
            "Yet",
            "Have",
            "For"
        ]
    },
    {
        numb:29,
        question:"She hasn't finished her book __________.",
        answer:"Yet",
        options:[
            "Already",
            "Yet",
            "Have",
            "For"
        ]
    },
    {
        numb:30,
        question:"__________ you visited the new art exhibition?",
        answer:"Have",
        options:[
            "Already",
            "Yet",
            "Have",
            "For"
        ]
    },
    {
        numb:31,
        question:"They've __________ eaten at that restaurant.",
        answer:"Already",
        options:[
            "Already",
            "Yet",
            "Have",
            "For"
        ]
    },
    {
        numb:32,
        question:"__________ finished your coffee?",
        answer:"Already",
        options:[
            "Already",
            "Yet",
            "Have",
            "For"
        ]
    }

]

