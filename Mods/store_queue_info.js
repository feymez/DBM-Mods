module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------
  
    name: "Queue",
  
    //---------------------------------------------------------------------
    // Action Section
    //
    // This is the section the action will fall into.
    //---------------------------------------------------------------------
  
    section: "Audio Control",
  
    //---------------------------------------------------------------------
    // Action Subtitle
    //
    // This function generates the subtitle displayed next to the name.
    //---------------------------------------------------------------------
  
    subtitle(data, presets) {
      return `${data.slash}`;
    },
  
    //---------------------------------------------------------------------
    // Action Meta Data
    //
    // Helps check for updates and provides info if a custom mod.
    // If this is a third-party mod, please set "author" and "authorUrl".
    //
    // It's highly recommended "preciseCheck" is set to false for third-party mods.
    // This will make it so the patch version (0.0.X) is not checked.
    //---------------------------------------------------------------------
  
    meta: { version: "2.1.5", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/play_all.js', downloadUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/play_all.js' },
  
    //---------------------------------------------------------------------
    // Action Fields
    //
    // These are the fields for the action. These fields are customized
    // by creating elements with corresponding IDs in the HTML. These
    // are also the names of the fields stored in the action's JSON data.
    //---------------------------------------------------------------------
  
    fields: ["slash"],
  
    //---------------------------------------------------------------------
    // Command HTML
    //
    // This function returns a string containing the HTML used for
    // editing actions.
    //
    // The "isEvent" parameter will be true if this action is being used
    // for an event. Due to their nature, events lack certain information,
    // so edit the HTML to reflect this.
    //---------------------------------------------------------------------
  
    html(isEvent, data) {
      return `
      <div>
      <p>
          <u>Mod Info:</u><br>
          Created by money#6283
      </p>
  </div><br>
  <div>
      <span class="dbminputlabel">Slash</span><br>
      <input id="slash" class="round" type="text" placeholder="Podaj nazwe parametru slash (type: number)">
  </div>`;
    },
  
    //---------------------------------------------------------------------
    // Action Editor Init Code
    //
    // When the HTML is first applied to the action editor, this code
    // is also run. This helps add modifications or setup reactionary
    // functions for the DOM elements.
    //---------------------------------------------------------------------
  
    init() {},
  
    //---------------------------------------------------------------------
    // Action Bot Function
    //
    // This is the function for the action within the Bot's Action class.
    // Keep in mind event calls won't have access to the "msg" parameter,
    // so be sure to provide checks for variable existence.
    //---------------------------------------------------------------------
  
    async action(cache) {
      const data = cache.actions[cache.index];
      const { QueryType } = require("discord-player")
      const { Player } = require('discord-player')
      const { Client, Intents } = require('discord.js')
      const type = data.type
      const client = new Client({ intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
      ], partials: [
        "MESSAGE",
        "CHANNEL",
        "GUILD_MEMBER",
        "REACTION"
      ]});
      client.player = new Player(client, {
      ytdlOptions: {
          quality: "highestaudio",
          highWaterMark: 1 << 25
      }
      })
      const { interaction } = cache
      const queue = client.player.getQueue(interaction.guild.id)
      if (!queue || !queue.playing){
          return await interaction.reply("Błąd: Nie ma piosenek w kolejce")
      }

      const totalPages = Math.ceil(queue.tracks.length / 10) || 1
      const page = (interaction.options.getNumber(slash) || 1) - 1

      if (page > totalPages) 
          return await interaction.reply(`Błąd: Istnieją tylko ${totalPages} strony`)
      
      const queueString = queue.tracks.slice(page * 10, page * 10 + 10).map((song, i) => {
          return `**${page * 10 + i + 1}.** \`[${song.duration}]\` ${song.title} -- <@${song.requestedBy.id}>`
      }).join("\n")

      const currentSong = queue.current

      await interaction.reply({
          embeds: [
              new MessageEmbed()
                  .setDescription(`**Aktualnie gram**\n` + 
                  (currentSong ? `\`[${currentSong.duration}]\` ${currentSong.title} - ${currentSong.requestedBy.tag}` : "None") +
                  `\n\n**Queue**\n${queueString}`
                  )
                  .setFooter({
                      text: `Strona ${page + 1}/${totalPages}`
                  })
                  .setThumbnail(currentSong.setThumbnail)
          ]
      })
    this.callNextAction(cache);
    },
  
    //---------------------------------------------------------------------
    // Action Bot Mod
    //
    // Upon initialization of the bot, this code is run. Using the bot's
    // DBM namespace, one can add/modify existing functions if necessary.
    // In order to reduce conflicts between mods, be sure to alias
    // functions you wish to overwrite.
    //---------------------------------------------------------------------
  
    mod() {},
};