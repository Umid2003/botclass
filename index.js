// const { Telegraf } = require('telegraf')
// const { message } = require('telegraf/filters')
// const token ="8526720364:AAFtOcp-z6KN5ZBODyLBTClCeJK0Q_5mlMU"
// const bot = new Telegraf(token)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.on("message", (ctx) => {
//     ctx.reply(ctx.message.text)
// })
// bot.launch()

const TelegramBot = require('node-telegram-bot-api')
const token = "8002153461:AAEBMMkiJrAx8giTZV6KiveujXgoWQBvB34"
const bot = new TelegramBot(token, { polling: true })
const apiAnimal = "https://api.api-ninjas.com/v1/animals?name=cheetah&x-api-key=fXNA1QELMpyKgetuIVyAgDlr9PUaIkKs0D2BQ8Y6"
bot.setMyCommands([
    { command: '/start', description: "Start Bot" },
    { command: '/info', description: "Info" },
    { command: '/course', description: "Our courses" },
    { command: '/icon', description: "Tom icon" },
    { command: '/home', description: "House" },
    { command: '/game', description: "Game" },
    { command: '/movie', description: "Movie" },
    { command: '/numbers', description: "Numbers" },
    { command: '/animals', description: "Animals" },
    { command: '/car', description: "Car Number" },
    { command: '/password', description: "Password" },
    { command: '/validate', description: "Validate" },
    { command: '/calculator', description: "Calculator" },
    { command: '/courses', description: "Courses" }

])

const numberOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 1, callback_data: 1 },
                { text: 2, callback_data: 2 },
                { text: 3, callback_data: 3 },
            ],
            [
                { text: 4, callback_data: 4 },
                { text: 5, callback_data: 5 },
                { text: 6, callback_data: 6 },
            ],
            [
                { text: 7, callback_data: 7 },
                { text: 8, callback_data: 8 },
                { text: 9, callback_data: 9 },
            ],
            [
                { text: 0, callback_data: 0 },
            ]
        ]
    }
}
const movieOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Avatar", callback_data: "Avatar" },
                { text: "Fast", callback_data: "Fast" },
                { text: "Agent", callback_data: "Agent" },
            ]
        ]
    }
}
const animalOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Bear", callback_data: "Bear" },
                { text: "Fox", callback_data: "Fox" },
                { text: "Lion", callback_data: "Lion" },
            ]
        ]
    }
}
const chooseOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Website", callback_data: "website" },
                { text: "Video", callback_data: "video" },
                { text: "Orqaga", callback_data: "back" },
            ]
        ]
    }
}
const coursesOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Dasturlash asoslari", callback_data: "asos" },
                { text: "Frontend", callback_data: "front" },
                { text: "Backend", callback_data: "backend" }
            ],
            [
                { text: "Mobile", callback_data: "mobile" },
                { text: "Savodxonlik", callback_data: "savod" },
                { text: "AI", callback_data: "ai" }
            ]
        ]
    }
}
const beginnerOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "HTML", callback_data: "html" },
                { text: "CSS", callback_data: "css" },
                { text: "JS", callback_data: "js" }
            ],
            [
                { text: "SASS", callback_data: "sass" },
                { text: "Bootstrap", callback_data: "bootstrap" },
                { text: "SCSS", callback_data: "scss" }
            ],
            [
                { text: "Bosh sahifa", callback_data: "main" },
            ]
        ]
    }
}
const frontOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "React", callback_data: "react" },
                { text: "Vue", callback_data: "vue" },
                { text: "Angular", callback_data: "angular" }
            ],
            [
                { text: "Redux", callback_data: "redux" },
                { text: "Vite", callback_data: "vite" },
                { text: "Tailwind", callback_data: "tailwind" }
            ],
            [
                { text: "Bosh sahifa", callback_data: "main" },
            ]
        ]
    }
}
const randomOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "juft raqam 1", callback_data: "raqam1" },
                { text: "juft raqam 2", callback_data: "raqam2" },
                { text: "juft raqam 3", callback_data: "raqam3" },
                { text: "juft raqam 4", callback_data: "raqam4" },
            ],
            [
                { text: "toq raqam 1", callback_data: "raqamtoq1" },
                { text: "toq raqam 2", callback_data: "raqamtoq2" },
                { text: "toq raqam 3", callback_data: "raqamtoq3" },
                { text: "toq raqam 4", callback_data: "raqamtoq4" },
            ]
        ]
    }
}
const carOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Random Gold", callback_data: "gold" },
                { text: "Random Simple", callback_data: "simple" },
            ]
        ]
    }
}
const passwordOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Generate Password 6", callback_data: "password6" },
            ],
            [
                { text: "Generate Password 7", callback_data: "password7" },
            ],
            [
                { text: "Generate Password 8", callback_data: "password8" },
            ]
        ]
    }
}
const badWords=["to'nka","cho'chka",'it',"mol","qo'y","yalqov","dangasa"]
let randomNumber
bot.on('message', (msg) => {
    const id = msg.chat.id
    const firstName = msg.chat.first_name
    const userName = msg.chat.username
    const text = msg.text
    // bot.sendMessage(id,`Your id is ${id}, name is ${firstName}, username is ${userName}, your message is ${text}`)
    // if (text === '/start') {
    //     bot.sendMessage(id, 'Welcome to my bot')
    //     return

    // }
    // if (text === '/info') {
    //     bot.sendMessage(id, 'You can get info about us')
    //     return

    // }
    // if (text === '/course') {
    //     bot.sendMessage(id, 'You can learn our online course')
    //     return

    // }
    // if (text === '/game') {
    //     randomNumber = Math.floor(Math.random() * 10)
    //     bot.sendMessage(id, 'Try to find random number', numberOptions)
    //     return
    // }
    // if (text === '/numbers') {
    //     // randomNumber=Math.floor(Math.random()*10)
    //     bot.sendMessage(id, 'Select Number', randomOptions)
    //     return
    // }
    if(text==='/courses'){
        bot.sendMessage(id,"Select Course",coursesOptions)
    
        return
    }
  
    // if (text === '/car') {
    //     bot.sendMessage(id, 'Select Option', carOptions)
    //     return
    // }
    // if (text === '/password') {
    //     bot.sendMessage(id, 'Select Option', passwordOptions)
    //     return
    // }
    // if (text === '/validate') {
    //     bot.sendMessage(id, 'Text your message')
    //     return
    // }
    // if (text === '/calculator') {
    //     bot.sendMessage(id, 'Input Your numbers')     
    // }
    // if(text.includes("+")){
    //     let textArr=text.split('')
    //     let plusIndex=textArr.indexOf('+')
    //     let beforePlusArr=textArr.slice(0,plusIndex)
    //     let afterPlusArr=textArr.slice(plusIndex+1)
    //     let beforeNum=beforePlusArr.join('')
    //     let afterNum=afterPlusArr.join('')
    //     let result=beforeNum*1+afterNum*1
    //     bot.sendMessage(id, result)
    // }
    
    // if(text.includes("-")){
    //     let textArr=text.split('')
    //     let plusIndex=textArr.indexOf('-')
    //     let beforePlusArr=textArr.slice(0,plusIndex)
    //     let afterPlusArr=textArr.slice(plusIndex+1)
    //     let beforeNum=beforePlusArr.join('')
    //     let afterNum=afterPlusArr.join('')
    //     let result=beforeNum*1-afterNum*1
    //     bot.sendMessage(id, result)
    // }
    

    // for(let word of badWords){
    //     if(text.includes(word)){
    //         bot.sendMessage(id, 'Bad text')
    //         return
    //     }else{
    //         bot.sendMessage(id, 'Good text')
    //         return
    //     }
    // }
    // if (text === '/animals') {
    //     bot.sendMessage(id, 'Select an animal', animalOptions)
    //     return
    // }
    // if (text === '/movie') {
    //     bot.sendMessage(id, 'Search movie', movieOptions)
    //     // fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad4632a6&s=${text}`).then(res => res.json()).then(data => {
    //     //     bot.sendPhoto(id, data.Search[0].Poster)
    //     //     bot.sendMessage(id, `${data.Search[0].Title} - ${data.Search[0].Year}`)
    //     // }).catch(err => console.log(err))
    //     return
    // } else {
    //     fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad4632a6&s=${text}`).then(res => res.json()).then(data => {
    //         bot.sendPhoto(id, data.Search[0].Poster)
    //         bot.sendMessage(id, `${data.Search[0].Title} - ${data.Search[0].Year}`)
    //     }).catch(err => console.log(err))
    //     return
    // }

    // if(text==randomNumber){
    //     bot.sendMessage(id, 'Congrats')
    //     return
    // }else{
    //     bot.sendMessage(id, 'Error number')
    //     return
    // }
    // if (text === '/icon') {
    //     bot.sendSticker(id, "https://tlgrm.eu/_/stickers/22c/b26/22cb267f-a2ab-41e4-8360-fe35ac048c3b/3.webp")
    //     return
    // }
    // if (text === '/home') {
    //     bot.sendPhoto(id, "https://t3.ftcdn.net/jpg/03/22/06/68/360_F_322066808_CANrp7u5Cdiz7700TJReqKD299d2AZtD.jpg")
    //     return

    // }
    // else {
    //     bot.sendMessage(id, 'Not found')
    // }
})
// bot.on('callback_query',msg=>{
//     const id = msg.message.chat.id
//     let num=msg.data
//     if (num == randomNumber) {
//         bot.sendMessage(id, 'Congrats')
//     } else {
//         bot.sendMessage(id, 'Error number')
//     }
// })
// bot.on('callback_query', msg => {
//     const id = msg.message.chat.id
//     let data = msg.data
//    if(data=='raqam1'){
//     bot.sendMessage(id,Math.floor(Math.random()*10))
//    }
//    if(data=='raqam2'){
//     bot.sendMessage(id,Math.floor(Math.random()*100))
//    }
//    if(data=='raqam3'){
//     bot.sendMessage(id,Math.floor(Math.random()*1000))
//    }
//    if(data=='raqam4'){
//     bot.sendMessage(id,Math.floor(Math.random()*10000))
//    }
// })
// const regions=['01',10,20,25,30,40,50,60,70,80,85]
// const goldNumbers=['001','002','003','010','020','030',100,200,300,101,202,303,111,222,333]
// const letters='abcdefghjklmnopqrstuvwxyz'
// const lettersArr=letters.toUpperCase().split('')

// bot.on('callback_query',msg=>{
//         const id = msg.message.chat.id
//         let data = msg.data
//         if(data==='gold'){
//             let randomRegion=Math.floor(Math.random()*11)
//             let randomNumber=Math.floor(Math.random()*15)
//             let randomLetter=Math.floor(Math.random()*25)
//             bot.sendMessage(id, `${regions[randomRegion]} ${lettersArr[randomLetter]} ${goldNumbers[randomNumber]} ${lettersArr[randomLetter]}${lettersArr[randomLetter]}`)
//         }
//         if(data==='simple'){
//             let randomRegion = Math.floor(Math.random() * 11)
//             let randomNumber1 = Math.floor(Math.random() * 10)
//             let randomNumber2 = Math.floor(Math.random() * 10)
//             let randomNumber3 = Math.floor(Math.random() * 10)
//             let randomLetter1 = Math.floor(Math.random() * 25)
//             let randomLetter2 = Math.floor(Math.random() * 25)
//             let randomLetter3 = Math.floor(Math.random() * 25)
//             bot.sendMessage(id, `${regions[randomRegion]} ${lettersArr[randomLetter1]} ${randomNumber1}${randomNumber2}${randomNumber3} ${lettersArr[randomLetter2]}${lettersArr[randomLetter3]}`) 
//         }
// })


// bot.on('callback_query',msg=>{
//     const id = msg.message.chat.id
//     let data = msg.data
//     if(data==='gold'){
//         let randomRegion=Math.floor(Math.random()*11)    
//         let randomLetter=Math.floor(Math.random()*25)    
//         let randomNumber=Math.floor(Math.random()*15)    
//         bot.sendMessage(id, `${regions[randomRegion]} ${lettersArr[randomLetter]} ${goldNumbers[randomNumber]} ${lettersArr[randomLetter]}${lettersArr[randomLetter]}`)
//     }
//     if(data==='simple'){
//         let randomRegion=Math.floor(Math.random()*11)    
//         let randomLetter1=Math.floor(Math.random()*25)    
//         let randomLetter2=Math.floor(Math.random()*25)    
//         let randomLetter3=Math.floor(Math.random()*25)    
//         let randomNumber1=Math.floor(Math.random()*10)    
//         let randomNumber2=Math.floor(Math.random()*10)    
//         let randomNumber3=Math.floor(Math.random()*10)    
//         bot.sendMessage(id, `${regions[randomRegion]} ${lettersArr[randomLetter1]} ${randomNumber1}${randomNumber2}${randomNumber3} ${lettersArr[randomLetter2]}${lettersArr[randomLetter3]}`)
//     }
// })
// bot.on('callback_query', msg => {
//     const id = msg.message.chat.id
//     let data = msg.data
//     if (data === 'Bear'){
//         fetch("https://api.api-ninjas.com/v1/animals?name=bear&x-api-key=fXNA1QELMpyKgetuIVyAgDlr9PUaIkKs0D2BQ8Y6").then(res => res.json()).then(data => data.map((item,index)=>{
//             bot.sendMessage(id,`
//                 title: ${item.name}
//                 title: ${item.taxonomy.family}
//                 `)
//         }))
//     }
//     if (data === 'Fox'){
//         fetch("https://api.api-ninjas.com/v1/animals?name=fox&x-api-key=fXNA1QELMpyKgetuIVyAgDlr9PUaIkKs0D2BQ8Y6").then(res => res.json()).then(data => {
//             bot.sendMessage(id, `
//             title: ${data[0].name}
//             family: ${data[0].taxonomy.family}
//             `)
//         })
//     }
//     if (data === 'Lion'){
//         fetch("https://api.api-ninjas.com/v1/animals?name=lion&x-api-key=fXNA1QELMpyKgetuIVyAgDlr9PUaIkKs0D2BQ8Y6").then(res => res.json()).then(data => {
//             bot.sendMessage(id, `
//             title: ${data[0].name}
//             family: ${data[0].taxonomy.family}
//             `)
//         })
//     }
// })


// bot.on('callback_query', msg => {
//     const id = msg.message.chat.id
//     let data = msg.data
    
//     // S2g)Rx
//     let letters="abcdefghijklmnopqrstuvwxyz"
//     let symbols="!@#$%^&*()_+=-|}{\][;:,<.>/?"
//     let lowerArr=letters.split('') 
//     let upperArr=letters.toUpperCase().split('') 
//     let symbolsArr=symbols.split('') 
    
//     if (data === 'password') {
//         let randomLowercase1 = Math.floor(Math.random() * 26)
//         let randomLowercase2 = Math.floor(Math.random() * 26)
//         let randomUppercase1 = Math.floor(Math.random() * 26)
//         let randomUppercase2 = Math.floor(Math.random() * 26)
//         let randomSymbol = Math.floor(Math.random() * 27)
//         let randomNumber = Math.floor(Math.random() * 10)
//         bot.sendMessage(id, `${upperArr[randomUppercase1]}${randomNumber}${lowerArr[randomLowercase1]}${symbolsArr[randomSymbol]}${upperArr[randomUppercase2]}${lowerArr[randomLowercase2]}`)
//     }

// })

// bot.on('callback_query',msg=>{
//         const id = msg.message.chat.id
//         let data = msg.data
//         if(data==='html'){
//             bot.sendMessage(id,'https://html.com/')
//         }
//         if(data==='css'){
//             bot.sendMessage(id, 'https://www.w3schools.com/css/default.asp')
//         }
// })
let lesson=""
bot.on('callback_query',msg=>{
        const id = msg.message.chat.id
        let data = msg.data
        if(data==='asos'){
            bot.sendMessage(id,"Kursni tanlang",beginnerOptions)
        }
        if(data==='html'){
            lesson='html'
            bot.sendMessage(id,"Choose Option", chooseOptions)
        }
        if(data==='front'){
            bot.sendMessage(id, "Kursni tanlang", frontOptions)
            
        }        
        if (data === 'react') {
            lesson='react'
            bot.sendMessage(id,"Choose option", chooseOptions)

        }   
          if(data==='website'&&lesson=='react'){
                bot.sendMessage(id,'https://react.dev/')
            }
    if (data === 'video' && lesson == 'react'){
                bot.sendMessage(id,'https://www.youtube.com/watch?v=SqcY0GlETPk')
            }
          if(data==='website'&&lesson=='html'){
              bot.sendMessage(id,'https://html.com/')
                console.log(lesson)
            }
    if (data === 'video' && lesson == 'html'){
        bot.sendMessage(id,'https://www.youtube.com/watch?v=qz0aGYrrlhU')
            }
        if (data === 'main') {
            bot.sendMessage(id, "Select Course", coursesOptions)
        }
    })