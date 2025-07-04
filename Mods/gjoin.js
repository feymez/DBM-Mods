module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Giveaway JOIN",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Discord Bots Poland",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    return `Umożliwiam dołączenie do konkursu!`;
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

  meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/gjoin.js', downloadUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/gjoin.js' },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: [],

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
        Created by money#6283<br>
    </p>
</div>
`;
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
    const { interaction } = cache;
    const giveaways = require('../data/giveaways.json')
    const fs = require('fs')
    const data = cache.actions[cache.index];

    let gg;
            
    for (i in giveaways[interaction.guildId]) {
      if (giveaways[interaction.guildId][i].msg == interaction.message.id) {
        gg = giveaways[interaction.guildId][i];

        break;
      };
    };

    if (gg.members.includes(interaction.user.id)) {
      for (i in gg.members) {
        if (gg.members[i] == interaction.user.id) {
          gg.members.splice(i, 1);

          break;
        };
      };

      interaction.reply({ content: "\`✅\` Już nie bierzesz udziału w konkursie!", ephemeral: true });
    } else {
      gg.members.push(interaction.user.id);

      interaction.reply({ content: "\`✅\` Bierzesz udział w konkursie!", ephemeral: true });
    };

    let msg = await interaction.guild.channels.cache.get(gg.channel).messages.fetch(gg.msg);

    let embed = msg.embeds[0];
    embed.footer.text = "Udział bierze " + gg.members.length + " użytkowników!";

    msg.edit({ embeds: [ embed ] });
    
    fs.writeFileSync('./data/giveaways.json', JSON.stringify(giveaways))

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
