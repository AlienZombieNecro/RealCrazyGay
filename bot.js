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
client.on('message', msg1 =>{
	let args = msg1.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip':
		var sides = [0,1];
		var number = Math.floor(Math.random() * 2);
		if (side == number) {
			msg1.channel.send("The coin landed on **HEADS**!")
		}
		else {
			msg1.channel.send("The coin landed on **TAILS**!")
		}

})
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
