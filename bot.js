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

//prefix commands
client.on('message', message =>{
	let args = message.content.substring(PREFIX.length).split(" ");
	switch(args[0]){
		case 'coinflip': //coinflip command
			message.delete (1000);
			var x = Math.floor(Math.random() * 2);
			console.log(x);
			if (x == 0) {
				message.channel.send("The coin landed on **HEADS**!");
			}
			else {
				message.channel.send("The coin landed on **TAILS**!");
			}
		case 'profile'
			const embed = new Discord.RichEmbed()
			.addField('Player Name', message.author.username);
			message.channel.sendEmbed(embed);
		break;
//dont touch under
	}
});
//dont touch above


//monkey command
client.on('message', monkey =>{
	if (monkey.content === "@monkey") {
		monkey.delete (1000);
		for (let i = 0; i < 5	; i++) {
			monkey.channel.send('<@244645880446189568>').then(d_msg => {d_msg.delete(10000); });
		}
	}
});








//turn bot online
client.login(process.env.BOT_TOKEN);
