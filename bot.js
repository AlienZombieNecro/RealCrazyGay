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
client.on('message', flip2 =>{
	let args = flip2.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip':
		flip2.delete (1000);
		var x = Math.floor(Math.random() * 2);
		console.log(x);
		if (x == 0) {
			flip2.channel.send("The coin landed on **HEADS**!");
		}
		else {
			flip2.channel.send("The coin landed on **TAILS**!");
		}


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
