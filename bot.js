const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('By:7assawi.SA v0.3.9','https://www.twitch.tv/TEST-Broadcast');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === "9876=034928373672") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
client.on('message', msg => {
  if (msg.content === '98765') {
    msg.reply('4567890');
  }
});
	client.on('message', message => {
    if (message.content === ('.bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@!7assawi.SA#9999>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});
if (message.content === '.help') {
              var embed  = new Discord.RichEmbed()
                .addField("**.help**" ,"يعلمك اوامر البوت")
				.addField("**.ping**" ,"يعلمك بنقك")
				.addField("**.id**" ,"يرسل رسالة فيها معلوماتك")
				.addField("**.about**" ,"يرسل معلومات السيرفر")
				.addField("**.avatar**" ,"يرسل رابط فيه صورت بروفايلك")
	      .addField("**.bot**" ,"يرسل معلومات البوت")
	      .addField("**.ip**" ,"MegaMc يعطيك اي بي سيرفر الماينكرافت")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
    return message.reply(`** ممنوع نشر السيرفرات :angry: ! **`)
            message.delete()
	return message.reply(`** ممنوع نشر السيرفرات :angry: ! **`)
      .then(msg => {msg.delete(3000)});
	}
});
client.on('message', msg => {
  if (msg.content === '.ip') {
    msg.reply('**JoinMegaMc.tk**');
  }
});
client.on('message', msg => {
  if (msg.content === '.help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on('message', msg => {
  if (msg.content === '.support') {
    msg.reply('قريبا..');
  }
});
client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
		
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on("message", message => {
      if (message.content === ".ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL) 
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome✨');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to MegaMc!, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});
client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined " + `${member.guild.name}`)

});
client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined the server!')
	var role = member.guild.roles.find('name', '-Member');
	member.addRole(role)
});
var prefix = ".";
client.on('message', message => {
    if(message.content == prefix + 'about') {
		var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('صاحب السيرفر', اونر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
client.on("message", (message) => {
    if (message.content.startsWith(".ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " لقد تم طرده بنجاح :wave: ");
        }).catch(() => {
            message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");
        });
    }
});
client.on('message', message => {
    if (message.content === ".avatar") {
    message.reply(message.author.avatarURL); 
    }
});
var prefix = ".";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
	  var embed = new Discord.RichEmbed()
   message.channel.sendMessage(args.join("  "))
  }
});
client.on('message', message => {
if (message.content.split(' ')[0] == '.bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ` + "**" + `MegaMcBroadcast v0.3.9` + " : ** " + message.content.substr(3));
                                                            message.delete();
															
});
});
client.login(process.env.BOT_TOKEN);
