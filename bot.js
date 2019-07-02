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

//coinflip2 command
client.on('message', flip2 =>{
	let args = flip2.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip2':
		flip2.delete (1000);
		var x =Math.floor(Math.random()*2);
		if ( x==0){
		flip2.channel.send("Heads")
		}
		else{
		flip2.channel.send("Tails")
		}}


	}
});



//monkey command
client.on('message', monkey =>{
	if (monkey.content === "@monkey") {
		monkey.delete (1000);
		for (let i = 0; i < 10	; i++) {
			monkey.channel.send('<@244645880446189568>').then(d_msg => {d_msg.delete(3000); });
		}
	}
});








//turn bot online
client.login(process.env.BOT_TOKEN);
