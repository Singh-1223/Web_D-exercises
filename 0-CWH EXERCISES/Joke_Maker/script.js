const show= document.querySelector("#show");
const butt= document.querySelector("#butt");



butt.addEventListener("click",async()=>{
    const joketext= await getjoke();
    show.innerHTML= `<h2> ${joketext} </h>` 
  
})

const getjoke= async()=>{
    let index= Math.floor(Math.random()*jokes.length-1);
    try{


        let joke_que=jokes[index].setup;
        let joke_ans=jokes[index].delivery;
        return joke_que+ "<br>" +joke_ans;

    }catch(e){
        return "OH HO.... JOKES ON THE REST....."
    }
}

let jokes = [
    {
        "category": "Programming",
        "type": "twopart",
        "setup": "What is the most used language in programming?",
        "delivery": "Profanity.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 193,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "What do you call a Jewish Pokemon Trainer?",
        "delivery": "Ash.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "safe": false,
        "id": 291,
        "lang": "en"
    },
    {
        "category": "Christmas",
        "type": "twopart",
        "setup": "Whats the Grinchs least favorite band?",
        "delivery": "The Who.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 293,
        "lang": "en"
    },
    {
        "category": "Christmas",
        "type": "twopart",
        "setup": "What do elves post on Social Media?",
        "delivery": "Elf-ies!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 249,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "My mother said, \"You won't amount to anything because you always procrastinate.\"",
        "delivery": "I said, \"Oh yeah... Just you wait.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 94,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Spooky",
        "type": "twopart",
        "setup": "Why did the ghost go inside the bar?",
        "delivery": "For the boos.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 299,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "My girlfriend left me because I have a fetish for touching pasta.",
        "delivery": "I'm feeling cannelloni now. :'(",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 75,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Spooky",
        "type": "twopart",
        "setup": "Why do ghosts go on diets?",
        "delivery": "So they can keep their ghoulish figures.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 295,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "I'm sure good looking lesbians look at fat lesbians and give them no chance.",
        "delivery": "Until they see their fingers.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 164,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "How does a black woman fight crime?",
        "delivery": "She has an abortion.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "id": 227,
        "safe": false,
        "lang": "en"
    },{
        "category": "Christmas",
        "type": "twopart",
        "setup": "Who is Santa's favourite singer?",
        "delivery": "Elf-is Presley!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 246,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "What kind of bees produce milk?",
        "delivery": "Boo-Bees.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 170,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "My mother said, \"You won't amount to anything because you always procrastinate.\"",
        "delivery": "I said, \"Oh yeah... Just you wait.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 94,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Spooky",
        "type": "twopart",
        "setup": "What does a turkey dress up as for Halloween?",
        "delivery": "A gobblin'!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 298,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "My grandma was recently diagnosed with Alzheimer's, and she keeps calling me by the wrong name.",
        "delivery": "Other than that, the sex is great.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 111,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "setup": "Why was the river rich?",
        "delivery": "Because it had two banks.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 182,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "What time did the man go to the dentist?",
        "delivery": "Tooth hurt-y.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 125,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "setup": "Which is faster, Hot or cold?",
        "delivery": "Hot, because you can catch a cold",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 279,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "My wife divorced me so I stole her wheelchair.",
        "delivery": "Guess who came crawling back.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 85,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "setup": "Why do Africans have dark skin?",
        "delivery": "It's easier to commit crimes at night.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "safe": false,
        "id": 262,
        "lang": "en"
    }

]
