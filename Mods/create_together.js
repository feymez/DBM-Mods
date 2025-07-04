module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Create Together",

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

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Together Code';
    const together = parseInt(data.together, 10);
    switch (together) {
      case 0:
        dataType = 'Youtube';
        break;
    }
    return [data.varName2, dataType];
  },

  subtitle(data, presets) {
    return `Akcja stworzona przez money#6283`;
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

  meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/create_together.js', downloadUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/create_together.js' },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: ["together", "storage", "varName2"],

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
</div><br>
    <div>
<div style="padding-top: 8px; width: 100%;">
  <span class="dbminputlabel">Source Together</span><br>
  <select id="together" class="round">
    <option value="youtube">Youtube</options>
    <option value="spellcast">Spellcast</options>
    <option value="poker">Poker</options>
    <option value="fishing">Fishing</options>
    <option value="chess">Szachy</options>
    <option value="checkers">Warcaby</options>
    <option value="sketchheads">Sketchheads</options>
    <option value="doodlecrew">Doodlecrew</options>
    <option value="wordsnack">Wordsnack</options>
    <option value="awkword">Awkword</options>
    <option value="lettertile">Letter League</options>
    <option value="puttparty">Putt Party</options>
    <option value="bobble">Bobble League</options>
    <option value="landio">Landio.io</options>
    <option value="meme">Know What I Meme</options>
    <option value="away">Ask Away</options>
  </select>
</div>
</div>
<br>
<div>
<div style="float: left; width: 35%;">
  Store In:<br>
  <select id="storage" class="round">
    ${data.variables[1]}
  </select>
</div>
<div id="varNameContainer2" style="float: right; width: 60%;">
  Variable Name:<br>
  <input id="varName2" class="round" type="text"><br>
</div>
</div><br><br>
    `;
  },

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
const { MessageEmbed } = require('discord.js')
const client = this.getDBM().Bot.bot
const { interaction } = cache;
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

if(interaction.member.voice.channel) {
client.discordTogether.createTogetherCode(interaction.member.voice.channelId, data.together).then(invite => {
const result = invite.code
if (result) {
const storage = parseInt(data.storage, 10);
const varName2 = this.evalMessage(data.varName2, cache);
this.storeValue(result, storage, varName2, cache);
}
this.callNextAction(cache);
});
} else {
      const embederror = new MessageEmbed()
              .setTitle(`Błąd!`)
              .setColor('RED')
              .setTimestamp()
              .setDescription(`
                  
              > **Dołącz na kanał głosowy**
  
              `)
              .setFooter({ text: `${interaction.member.user.username} (${interaction.member.user.id})`, iconURL: `${interaction.member.user.displayAvatarURL({ dynamic: true })}`})
          interaction.reply({ embeds: [embederror], ephemeral: true });
}

  },

  mod() {},
};
