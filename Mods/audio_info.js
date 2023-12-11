module.exports = {
	//---------------------------------------------------------------------
	// Action Name
	//
	// This is the name of the action displayed in the editor.
	//---------------------------------------------------------------------
  
	name: "Audio Info",
  
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
	  return `Poznaj informacje o audio`;
	},
  
    variableStorage(data, varType) {
        const type = parseInt(data.storage, 10);
        if (type !== varType) return;
        const info = parseInt(data.info, 10);
        let dataType = "Unknown Type";
        switch (info) {
          case 0:
            dataType = "Current (Title)";
            break;
          case 1:
            result = "Current (Url)"
            break;
          case 2:
            result = "Current (Author)"
            break;
          case 3:
            result = "Current (Views)"
            break;
          case 4:
            result = "Current (Thumbnail)"
            break;
          case 5:
            result = "Volume"
            break;
          case 6:
            result = "Loop?"
            break;
          case 7:
            result = "Total Time"
            break;
        }
        return [data.varName2, dataType];
      },
  
	meta: { version: "2.1.6", preciseCheck: false, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/audio_info.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/audio_info.js' },
  
	//---------------------------------------------------------------------
	// Action Fields
	//
	// These are the fields for the action. These fields are customized
	// by creating elements with corresponding IDs in the HTML. These
	// are also the names of the fields stored in the action's JSON data.
	//---------------------------------------------------------------------
  
	fields: ["info", "storage", "varName2"],
  
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
	  <span class="dbminputlabel">Source</span><br>
	  <select id="info" class="round">
			<option value="0">Current (title)</option>
			<option value="1">Current (url)</option>
            <option value="2">Current (author)</option>
            <option value="3">Current (views)</option>
            <option value="4">Current (thumbnail)</option>
            <option value="5">Volume</option>
            <option value="6">Loop</option>
            <option value="7">Total Time</option>
	  </select>
  </div><br><br>
  <store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
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
	    const source = parseInt(data.info)
        const { interaction } = cache
	    const { musicplayer } = require('../bot.js')
	    if (!musicplayer) return console.log(`BŁĄD - Zaaktualizuj plik bot.js, https://github.com/Gotowka/autorskieakcje/blob/main/bot/bot.js`)
	    const queue = musicplayer.getQueue(interaction.guild)
        let result
	    if (!queue) return interaction.reply("Błąd: Aktualnie nie gra żadna piosenka!");
    
	  switch(source) {
		case 0:
			result = queue.current.title
			break;
		case 1:
			result = queue.current.url
			break;
        case 2:
            result = queue.current.author
			break;
        case 3:
            result = queue.current.views
			break;
        case 4:
            result = queue.current.thumbnail
			break;
        case 5:
            result = queue.volume
			break;
        case 6:
            result = queue.repeatMode
			break;
        case 7:
            result = queue.totalTime
			break;
		default:
			break;
	    }
        const storage = parseInt(data.storage, 10);
        const varName2 = this.evalMessage(data.varName2, cache);
        this.storeValue(result, storage, varName2, cache);
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