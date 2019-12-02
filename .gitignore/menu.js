const Discord = require('discord.js');


const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'test');

  if (!channel) return;

  channel.send(`Bienvenue ${member}, puis-je vous ajouter dans une catégorie ? homme femme ou couple ?`);
});


client.login(process.env.TOKEN);
