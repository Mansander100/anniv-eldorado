const Discord = require("discord.js");

const client = new Discord.Client;


let Anniversaire = [
    ["@Mansander", 22, 3],
    ["JPP", 23, 3]
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
        for (let i = 0; i < 2; i++) {

            //verifie le jour
            if (Anniversaire[i][1] == jj) {

                //verifie le mois
                if (Anniversaire[i][2] == mm) {

                    //TODO envoyer le  message
                    client.channels.fetch('823370727952613387').then(channel => {channel.send("@everyone");})
                    client.channels.fetch('823370727952613387').then(channel => {channel.send("Aujourd'hui c'est l'anniverssaire de **"+Anniversaire[i][0]+"**");})
                }
            }
        }
        setTimeout(anniv,86400000);  
    }
    anniv();
})

client.login(process.env.TOKEN);
