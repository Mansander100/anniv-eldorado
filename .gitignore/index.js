const Discord = require("discord.js");

const client = new Discord.Client;


let Anniversaire = [  
    ["Hercule", 8, 1],
    ["Foldo", 1, 2],
    ["Suffixe", 3, 2],
    ["Grandgobelin", 11, 2],
    ["Miredia", 18, 2],
    ["Kaedei", 1, 3],
    ["Gisèle", 1, 3],
    ["Petdenonne", 1, 4],
    ["Smøøthisha", 16, 4],
    ["Cobra", 17, 4],
    ["Gaetci", 3, 5],
    ["Cheese", 22, 5],
    ["Airmure", 28, 5],
    ["Sanchodecuba", 6, 6],
    ["Yaci", 17, 6],
    ["Waikiky", 5, 7],
    ["Laga", 3, 8],
    ["Aruariang", 3, 8],
    ["Doroff", 15, 8],
    ["Cørn", 21, 8],
    ["Mørtuary", 27, 8],
    ["Rhapsodiie", 7, 9],
    ["Deathstrokie", 10, 9],
    ["Evarwen", 18, 9],
    ["Azubal", 4, 10],
    ["Drazz", 21, 10],
    ["Sïgh", 10, 11],
    ["Promethïa", 17, 11],
    ["Buldozerk", 24, 11],
    ["Antikas", 30, 11],
    ["Blethron", 8, 12]
    //********Pour chaque nouvelle anniversaire rentrer une nouvelle********//
    //*******ligne juste au dessus sous le forme ["Pseudo",jour,mois]*******//
    //*******puis rajouter une virgule a la fin de la ligne precedente******//
   ];


//********************  PROGRAMME  ************************//
client.on("ready", ()=>{
    console.log("bot operationelle");
})
client.on("ready", () => {
    function anniv() { 
        //Declaration des variables
        let date = new Date();
        let jj = date.getDate();
        let mm = date.getMonth() + 1;
        let aa = date.getFullYear();
        //Balaye tous le tableau
        for (let i = 0; i < Anniversaire.length; i++) {

            //verifie le jour
            if (Anniversaire[i][1] == jj) {

                //verifie le mois
                if (Anniversaire[i][2] == mm) {
                    switch(i){
                        case 7 : 
                            client.channels.fetch('677646742841196567').then(channel => {channel.send("@here Joyeux anniversaire au plus sexy des gros pandas : KUNGFOUF alias notre @Petdenonne :partying_face: !!!");})
                            client.channels.fetch('677646742841196567').then(channel => {channel.send("Passes une excellente journée et fêtes ça bien :kissing_heart:  !!!");})   
                            break;
                        default : 
                            client.channels.fetch('677646742841196567').then(channel => {channel.send("@here Joyeux anniversaire à "+Anniversaire[i][0]+" :partying_face: !!!");})
                            client.channels.fetch('677646742841196567').then(channel => {channel.send("Passes une excellente journée et fêtes ça bien :kissing_heart:  !!!");})     
                    }
                    
                }
            }
        }
        setTimeout(anniv,86400000);  
    }
    anniv();
})

client.login(process.env.TOKEN);
