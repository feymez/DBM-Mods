module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Giveaway START",

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
    return `Umożliwiam utworzenie konkursu!`;
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

  meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/gstart.js', downloadUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/gstart.js' },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: ["time", "winners", "prize", "msgid"],

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
        Zmienne: endtime, hoster, winners, prize
    </p>
</div><br>

<div style="float: left; width: calc(50% - 12px);">
  <span class="dbminputlabel">Czas <span style="color:red">*</span></span>
  <input id="time" class="round" placeholder="Type: np 1d/1m/1s" type="text">

  <br>

  <span class="dbminputlabel">Wygrani <span style="color:red">*</span></span>
  <input id="winners" class="round" type="text">
  
  <br>

  <span class="dbminputlabel">Prize <span style="color:red">*</span></span>
  <input id="prize" class="round" type="text">
  
  <br>

  <span class="dbminputlabel">Msg ID <span style="color:red">*</span></span>
  <input id="msgid" class="round" type="text">
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
    const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
    const { interaction } = cache;
    const giveaways = require('../data/giveaways.json')
    const fs = require('fs')
    const data = cache.actions[cache.index];

    giveaways[interaction.guildId] = [];


  

  let duration = this.evalMessage(data.time, cache)

  if (duration.includes("s")) {
      duration = duration.split("s")[0] * 1000;
  } else if (duration.includes("m")) {
      duration = duration.split("m")[0] * 60000;
  } else if (duration.includes("h")) {
      duration = duration.split("h")[0] * 3600000;
  } else if (duration.includes("d")) {
      duration = duration.split("d")[0] * 86400000;
  } else {
      duration = duration * 1000;
  };
  const endtime2 = new Date().getTime() + duration;
  const endtime = Date.parse(new Date(new Date().getTime() + duration)) / 1000;

  giveaways[interaction.guildId].push({
    "guild": interaction.guild.id,
    "channel": interaction.channel.id,
    "hoster": interaction.member.user.tag,
    "winners": this.evalMessage(data.winners, cache),
    "prize": this.evalMessage(data.prize, cache),
    "end": endtime2,
    "msg": this.evalMessage(data.msgid, cache),
    "members": [],
    "ended": false,
});

this.storeValue(`<t:${endtime}:R>`, 1, 'endtime', cache)
this.storeValue(this.evalMessage(data.winners, cache), 1, 'winners', cache)
this.storeValue(this.evalMessage(data.prize, cache), 1, 'prize', cache)
this.storeValue(interaction.member.user.tag, 1, 'hoster', cache)
  fs.writeFileSync("./data/giveaways.json", JSON.stringify(giveaways));
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
