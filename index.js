const fs = require('fs')

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');


const dmBot = new Discord.Client({
    cacheGuilds: true,
    cacheChannels: false,
    cacheOverwrites: false,
    cacheRoles: false,
    cacheEmojis: false,
    cachePresences: false
});


const config = require("./config.json");
const token = process.env.DISCORD_BOT_SECRET;







dmBot.on("ready", async () => {
    

    console.log(config.READY_MESSAGE);
    dmBot.user.setActivity(config.ACTIVITY_STATUS, {
        type: "WATCHING"
    });

});

dmBot.on('guildMemberAdd', (member) => {
  
  member.send("<a:hibye:843937537043333180> _Welcome our Server!_ <a:hibye:843937537043333180>\n" +"\n<a:gifdancepika:843937760636960818> Hey! Glad you chose us! We are safe, fast and legit! We sell all kinds of Poke2 related stuff and here are the items we sell: <a:gifdancepika:843937760636960818>" +"\n\n**<a:gif:843929186699313202> 1.PC (Price- $23/Million)**\n**<a:gif:843929186699313202> 2.Shinies (any random shinies) $20/50**\n**<a:gif:843929186699313202> 3.Shiny Rares (Price depends on the pokemon)**\n**<a:gif:843929186699313202> 4.Nitro classic(450k)\n boost(900k) 1 month**\nNewly added owo cash 1m owo 10$ \n<:Happy_customer:843928436401242212> _If intrested in buying anything send message in bot dms we will try to respond Asap_ <:Happy_customer:843928436401242212>");
});



dmBot.on("message", (message) => {
    

     if (message.channel.type === "dm") {
        var args = message.content.split(" ").slice(0)
        var args = args.slice(0).join(" ")
        var BOT_ID = dmBot.user.id
        var userID = message.author.id
        if (message.content.startsWith(config.PREFIX)) return message.channel.send(":x: Please use commands in real server! :x:") 
        if (message.author.bot) return;
        message.channel.send("This message has been send to the staff! :incoming_envelope:").then(msg => msg.delete(3000))
        if (message.content.startsWith(config.PREFIX)) return
        if (args.length > 1024) return message.reply("Your message content too many characters (1024 Limit) :/") 
        var embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("New Message", "https://cdn.discordapp.com/attachments/502649544622735362/520740243133956138/receive.png")
            .addBlankField(true)
            .addField(`Sent by: ${message.author.username}`, 
            args)
            .setFooter("This Message Was Sent By: " + message.author.username + " ", message.author.avatarURL)
            .setTimestamp()
        dmBot.guilds.get(config.SERVER_ID).channels.get(config.CHANNEL_ID).send(embed).catch(console.log(`Message recieved from ${userID}!(${message.author.username})`))
        dmBot.guilds.get(config.SERVER_ID).channels.get(config.CHANNEL_ID).send({embed: {
            "description": `${config.PREFIX}reply ${message.author.id} <message>`,
        }
    })
    }else
    
     if (message.content.startsWith(config.PREFIX + "reply")) { 
        if (message.author.id !== config.YOUR_ID && message.author.id !== config.YOUR_ID1) return message.reply('ok')
        var args = message.content.split(" ").slice(0)
        var Rargs = message.content.split(" ").slice(2).join(" ")
        var userID = args[1]
        if (isNaN(args[1])) return message.reply("This is not an ID! Make sure to you the user's ID!")
        var embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("New Message", "https://cdn.discordapp.com/emojis/843940057761054762.gif?v=1")
            .setDescription(Rargs)
            .setTitle("<a:nekodance:843942045935599636> __Hello:__ <a:nekodance:843942045935599636>")
            .setTimestamp()
            .setFooter('?? Pok??vil', 'https://cdn.discordapp.com/attachments/827130387825295381/827558248102101012/image0.png');
        dmBot.users.get(userID).send(embed).catch(console.log(`Message was sent to ${userID}!`))
        if (message.author.bot) return;
        message.channel.send("Your Message was Sent!").then(msg => msg.delete(3000)).catch(console.error)

    }

    if (message.content.startsWith(config.PREFIX + "r")) {
        if (message.author.id !== config.YOUR_ID1) return message.reply('ok')
        var args = message.content.split(" ").slice(0)
        var Rargs = message.content.split(" ").slice(2).join(" ")
        var userID = args[1]
        if (isNaN(args[1])) return message.reply("This is not an ID! Make sure to you the user's ID!")
        var embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("New Message", "https://cdn.discordapp.com/emojis/843940057761054762.gif?v=1")
            .setDescription(Rargs)
            .setTitle("<a:nekodance:843942045935599636>__Hello:__ <a:nekodance:843942045935599636>")
            .setTimestamp()
            .setFooter('?? Pok??vil', 'https://cdn.discordapp.com/attachments/827130387825295381/827558248102101012/image0.png');
        dmBot.users.get(userID).send(embed).catch(console.log(`Message was sent to ${userID}!`))
        if (message.author.bot) return;
        message.channel.send("Your Message was Sent!").then(msg => msg.delete(3000)).catch(console.error)

    }
    if (message.content.startsWith(config.PREFIX + "ping")) {
      message.channel.send('Loading data').then (async (msg) =>{
    msg.delete()
    message.channel.send(`**<a:bonkcat:843929001675980842>Latency is ${Date.now() - message.createdTimestamp}ms.<a:bonkcat:843929001675980842>**`);
  })
    }
   
   if (message.content.startsWith(config.PREFIX + "botnick")) {
     const botnickname = message.content.split(' ').slice(1).join(' ');

        if (message.author.id == '443031944406630404' || message.author.id == '783580267301699615') {
            message.guild.members.get(dmBot.user.id).setNickname(botnickname);
            message.channel.send('Done. :ok_hand:');
        } else {
            message.react('???');
            message.channel.send(`\`????\` You don't have permissions to execute that command.`);
        }
   }
   if (message.content.startsWith(config.PREFIX + "botav")) {
     const botavatar = message.content.split(' ').slice(1).join(' ');
        var request = require("request").defaults({
            "encoding": null
        });

        if (message.author.id == '443031944406630404' || message.author.id == '783580267301699615') {
            request(botavatar, function (err, res, body) {
                if (!err && res.statusCode === 200) {
                    var data = "data:" + res.headers["content-type"] + ";base64," + new Buffer(body).toString("base64");
                    dmBot.user.setAvatar(botavatar).catch((error) => {
                        message.channel.send('Beep boop, something went wrong. Check the console to see the error.');
                        console.log('Error on setavatar command:', error);
                    });

                    message.channel.send('Done. :ok_hand:');
                }
            });
        } else {
            message.react('???');
            message.channel.send(`\`????\` You don't have permissions to execute that command.`);
        }
   }
   if (message.content.startsWith(config.PREFIX + "uptime")) {
     let days = Math.floor(dmBot.uptime / 86400000);
      let hours = Math.floor(dmBot.uptime / 3600000) % 24;
      let minutes = Math.floor(dmBot.uptime / 60000) % 60;
      let seconds = Math.floor(dmBot.uptime / 1000) % 60;

      message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);
      
   }
   if (message.content.startsWith(config.PREFIX + "anime")) {
     var search = message.content.split(/\s+/g).slice(1).join(" ");
        if (!search) {
            kitsu.searchAnime(aq().quoteanime).then(result => {
                var anime = result[0]
                let embed = new Discord.RichEmbed()
                    .setColor('#A65EA5')
                    .setAuthor(`${anime.titles.english} | ${anime.showType}`, anime.posterImage.original)
                    .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                    .addField('???\u2000\Information', `???\u2000\**Japanese Name:** ${anime.titles.romaji}\n\???\u2000\**Age Rating:** ${anime.ageRating}\n\???\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`, true)
                    .addField('???\u2000\Stats', `???\u2000\**Average Rating:** ${anime.averageRating}\n\???\u2000\**Rating Rank:** ${anime.ratingRank}\n\???\u2000\**Popularity Rank:** ${anime.popularityRank}`, true)
                    .addField('???\u2000\Status', `???\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\???\u2000\**Start Date:** ${anime.startDate}\n\???\u2000\**End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
                    .setImage(anime.posterImage.original);
                return message.channel.send(`Try watching **${anime.titles.english}**!`, {
                    embed: embed
                });
            })
        }

   }

   if (message.content.startsWith(config.PREFIX + "whois")) {
     let user = message.mentions.users.first() || message.author;
        if (!user) {
            return message.reply('You must mention someone!');
        }
        const mentioneduser = message.mentions.users.first() || message.author;
        const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
        let game;
        if (user.presence.game === null) {
            game = 'Not currently Playing.';
        } else {
            game = user.presence.game.name;
        }
        let messag;
        if (user.lastMessage === null) {
            messag = 'He didnt sent a message.';
        } else {
            messag = user.lastMessage;
        }
        let status;
        if (user.presence.status === 'online') {
            status = ':green_heart:';
        } else if (user.presence.status === 'dnd') {
            status = ':heart:';
        } else if (user.presence.status === 'idle') {
            status = ':yellow_heart:';
        } else if (user.presence.status === 'offline') {
            status = ':black_heart:';
        }
        // Let afk;
        // if (user.presence.data.afk === true) {
        //   afk = "???"
        // } else {
        //   afk = "???"
        // }
        let stat;
        if (user.presence.status === 'offline') {
            stat = 0x000000;
        } else if (user.presence.status === 'online') {
            stat = 0x00AA4C;
        } else if (user.presence.status === 'dnd') {
            stat = 0x9C0000;
        } else if (user.presence.status === 'idle') {
            stat = 0xF7C035;
        }
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: `Got some info about ${user.username}`,
                    icon_url: "https://cdn.discordapp.com/emojis/843940057761054762.gif?v=1"
                },
                thumbnail: {
		url: user.displayAvatarURL,
	},
                fields: [{
                        name: '**UserInfo:**',
                        value: `**Username:** ${user.tag}\n**Joined Discord:** ${joineddiscord}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`
                    },
                    {
                        name: 'DiscordInfo:',
                        value: `**Discriminator:** ${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: dmBot.user.avatarURL,
                    text: "?? pokevil"
                }
            }
        });
   }
    
});


dmBot.login(token);
