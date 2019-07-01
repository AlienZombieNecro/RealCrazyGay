const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "NTk1MTcwOTIwNTA3NzY4ODMz.XRnMoA.uYY_zm7T1zaItZS1Ztz_hoc-tyI";

const PREFIX = '/';
//checking if bot is on
bot.on('ready', () =>{
	console.log('This bot is online!');
})
//nite nite command
bot.on('message', msg =>{
	if(msg.content === "NITE NITE"){
		msg.reply('NITE NITE');
	}
})
//monkey command
bot.on('message', message1 =>{
	
	let args = message1.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'monkey':
		message1.delete (1000);
		for (let i = 0; i < 4; i++) {
			message1.channel.send('<@244645880446189568> is a monkey').then(d_msg => {d_msg.delete(3000); });
		}
		break;
	}
})
//coinflip command
bot.on('message', coinflip =>{
	let args = coinflip.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip':
		coinflip.delete (3000);
		let outcomes = ["The coin landed on **HEADS**!", "The coin landed on **TAILS**!"];
		let outcomesIndex = Math.round(Math.random() * outcomes.length);
		coinflip.channel.send(outcomes[outcomesIndex]);
	}
})
//pig command
bot.on('message', coinflip =>{
	let args = message1.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
	case 'who':
	}
	switch(args[0]){
	case 'who':
	}
	
})
//turn bot online
bot.login(process.env.Bot_TOKEN);
