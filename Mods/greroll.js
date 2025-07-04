module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Giveaway REROLL",

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
    return `Umożliwiam zrerolowanie konkursu!`;
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

  meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/greroll.js', downloadUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/greroll.js' },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: ["msgid"],

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
        Zmienne: winner
    </p>
</div>
<div style="float: left; width: calc(50% - 12px);">
<span class="dbminputlabel">Msg ID <span style="color:red">*</span></span>
<input id="msgid" class="round" placeholder="Id wiadomosci konkursu" type="text">

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
    const data = cache.actions[cache.index];
    const givid = this.evalMessage(data.msgid, cache)

    if (!giveaways[interaction.guildId]) return interaction.reply({ content: "`[ ❌ ]` Nie ma aktywnych konkursów, w których można wylosować zwyciężcę!", ephemeral: true });

    if (giveaways[interaction.guildId].length < 1) return interaction.reply({ content: "`[ ❌ ]` Nie ma aktywnych konkursów, które można zakończyć.", ephemeral: true });

    let giveaway;
    let winner
    for (i = 0; i < giveaways[interaction.guildId].length; i++) {
        if (giveaways[interaction.guildId][i].msg == givid) {
            giveaway = giveaways[interaction.guildId][i];

            if (giveaways[interaction.guildId][i].ended == false) return interaction.reply({ content: "`[ ⚠️ ]` Konkurs jeszcze się nie zakończył!", ephemeral: true });
            if (giveaways[interaction.guildId][i].members.length < 2) return interaction.reply({ content: "`[ ✔️ ]` Pomyślnie wylosowano nowego zwyciężcę konkursu!.", ephemeral: true });

            winner = giveaways[interaction.guild.id][i].members[Math.floor(Math.random() * giveaways[interaction.guild.id][i].members.length)]

            break;
        };
      };

    if (!giveaway) return interaction.reply({ content: "`[ ❌ ]` Wprowadzony konkurs nie istnieje!", ephemeral: true });

    interaction.reply({ content: "`[ ✔️ ]` Pomyślnie wylosowano nowego zwyciężcę konkursu!", ephemeral: true });

    this.storeValue(winner, 1, 'winner', cache)
  this.callNextAction(cache)

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
