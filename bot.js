const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '/';

//check if bot is online
client.on('ready', () => {
    console.log('This bot is online!');
});

//nite nite command
client.on('message', msg =>{
	if(msg.content === "NITE NITE"){
		msg.reply('NITE NITE');
	}
});


//coinflip command
client.on('message', coinflip =>{
	let args = coinflip.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip':
		coinflip.delete (1000);
		let outcomes = ["The coin landed on **HEADS**!", "The coin landed on **TAILS**!"];
		let outcomesIndex = Math.round(Math.random() * outcomes.length);
		coinflip.channel.send(outcomes[outcomesIndex]);
	}
});

//monkey command
client.on('message', message1 =>{
	if (message1.content === "@monkey") {
		message1.delete (1000);
		for (let i = 0; i < 10	; i++) {
			message1.channel.send('<@244645880446189568>').then(d_msg => {d_msg.delete(3000); });
		}
	}
});

//spam grant
client.on('message', dmgrant => {
    if (dmgrant.content.startsWith('/dm ') && dmgrant.mentions.users.size) {
        for (let i = 0; i < 10	; i++) {
	var v=dmgrant.toString().split(' ').shift().shift().join(' ') // Takes the DM content from the message
        var member=dmgrant.mentions.users[0] // The mentioned user
	member.send(v) // send that user a DM
	}
    }


//turn bot online
client.login(process.env.BOT_TOKEN);
