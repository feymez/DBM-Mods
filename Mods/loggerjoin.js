module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------
  
    name: "InviteLogger JOIN",
  
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
      return `Invite Logger`;
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
  
    meta: { version: "2.1.6", preciseCheck: false, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/loggerjoin.js', downloadUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/loggerjoin.js' },
  
    //---------------------------------------------------------------------
    // Action Fields
    //
    // These are the fields for the action. These fields are customized
    // by creating elements with corresponding IDs in the HTML. These
    // are also the names of the fields stored in the action's JSON data.
    //---------------------------------------------------------------------
  
    fields: ["call"],
  
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
          Zmienne: server, member, code, inviter, usses
      </p>
  </div><br>
  <div id="varNameContainer" style="float: left; width: 40%;">
  Jump to Action:<br>
  <input id="call" class="round" type="number">
</div>`;
    },
  
    //---------------------------------------------------------------------
    // Action Editor Init Code
    //
    // When the HTML is first applied to the action editor, this code
    // is also run. This helps add modifications or setup reactionary
    // functions for the DOM elements.
    //---------------------------------------------------------------------
  
    init() {
    },
  
    //---------------------------------------------------------------------
    // Action Bot Function
    //
    // This is the function for the action within the Bot's Action class.
    // Keep in mind event calls won't have access to the "msg" parameter,
    // so be sure to provide checks for variable existence.
    //---------------------------------------------------------------------
  
    async action(cache) {
      const { dbp } = require('../bot')
      const cc = this.getDBM().Bot.bot
      const Discord = require('discord.js')
      const xd = new Discord.Collection()
      cc.guilds.cache.forEach(async (guild) => {
       const firstInvites = await guild.invites.fetch()
       xd.set(guild.id, new Discord.Collection(firstInvites.map((invite) => [invite.code, invite.uses])))
     })
     module.exports.invites = xd
     let invites = xd
      if (!dbp) return console.log(`BŁĄD - Zaaktualizuj plik bot.js, https://github.com/Gotowka/autorskieakcje/blob/main/bot/bot.js`);
      const data = cache.actions[cache.index];
      cc.on('guildMemberAdd', async (member) => {
        const newInvites = await member.guild.invites.fetch()
        const oldInvites = invites.get(member.guild.id);
        const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
        const inviter = await cc.users.fetch(invite.inviter.id);
        this.storeValue(member.guild, 1, 'server', cache)
        this.storeValue(member, 1, 'member', cache)
        this.storeValue(invite.code, 1, 'code', cache)
        this.storeValue(inviter.tag, 1, 'inviter', cache)
        this.storeValue(invite.uses, 1, 'usses', cache)
        const val = parseInt(this.evalMessage(data.call, cache), 10);
        const index = Math.max(val - 1, 0);
        if (cache.actions[index]) {
          cache.index = index - 1;
          this.callNextAction(cache);
        }
      })
    },

  mod() {},

  
}