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

//monkey command
client.on('message', message1 =>{
	
	let args = message1.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'monkey':
		message1.delete (1000);
		for (let i = 0; i < 4; i++) {
			message1.channel.send('<@244645880446189568> is a monkey').then(d_msg => {d_msg.delete(3000); });
		}
		break;
	}
});

//coinflip command
client.on('message', coinflip =>{
	let args = coinflip.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip':
		coinflip.delete (3000);
		let outcomes = ["The coin landed on **HEADS**!", "The coin landed on **TAILS**!"];
		let outcomesIndex = Math.round(Math.random() * outcomes.length);
		coinflip.channel.send(outcomes[outcomesIndex]);
	}
});

//test
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

//turn bot online
client.login(process.env.BOT_TOKEN);
