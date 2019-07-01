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


//Grant is a...
client.on('message', grant => {
    if (grant.content === 'Grant') {
    	let results = ["is a **Pig**!", "is a **Cow**!","is a **Monkey**!","is a **Bot**!", "is a **Clown**!","is an **Alpha**!"];
	let resultsIndex = Math.round(Math.random() * outcomes.length);
	grant.channel.send(results[resultsIndex]);
  	}
});




//turn bot online
client.login(process.env.BOT_TOKEN);
