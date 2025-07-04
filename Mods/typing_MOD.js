  module.exports = {
    name: 'Bot Typing',
    section: 'Bot Client Control',
    meta: {
      version: '2.1.3',
      preciseCheck: false,
      author: 'DBM Mods',
      authorUrl: 'https://github.com/dbm-network/mods',
      downloadURL: 'https://github.com/dbm-network/mods/blob/master/actions/typing_MOD.js',
    },

    subtitle(data) {
      const names = [
        'Same Channel',
        'Mentioned Channel',
        'Default Channel',
        'Temp Variable',
        'Server Variable',
        'Global Variable',
      ];
      const names2 = ['Starts Typing', 'Stops Typing'];
      const index2 = parseInt(data.typing, 10);
      const index = parseInt(data.storage, 10);
      return index < 3 ? `${names[index]} - ${names2[index2]}` : `${names[index]} - ${data.varName} - ${names2[index2]}`;
    },

    fields: ['storage', 'time', 'varName', 'typing'],

    html(isEvent, data) {
      return `
  <div>
    <div style=width: 35%;">
      Typing:<br>
      <select id="typing" class="round">
        <option value="0" selected>Start</option>
        <option value="1">Stop</option>
      </select>
    </div><br>
    <div style=width: 45%;">
		<span class="dbminputlabel">Time</span><br>
		<select id="measurement" class="round">
			<option value="0">Milliseconds</option>
		</select>
	</div>
  <br>
	<div style=width: 50%;">
		<span class="dbminputlabel">Amount</span><br>
		<input id="time" class="round" type="text">
	</div>

  </div>
  <br>
  <div>
    <div style=width: 35%;">
    <span class="dbminputlabel">Channel</span><br>
      <select id="storage" class="round" onchange="glob.channelChange(this, 'varNameContainer')">
        ${data.channels[isEvent ? 1 : 0]}
      </select>
    </div>
    <div id="varNameContainer" style="display: none; float: right; width: 60%;">
      Variable Name:<br>
      <input id="varName" class="round" type="text" list="variableList"><br>
    </div>
  </div><br><br><br>
  <div>`;
    },

    init() {
      const { glob, document } = this;
      glob.channelChange(document.getElementById('storage'), 'varNameContainer');
    },

    async action(cache) {
      const data = cache.actions[cache.index];
      let time = parseInt(this.evalMessage(data.time, cache), 10);
      const storage = parseInt(data.storage, 10);
      const varName = this.evalMessage(data.VarName, cache);
      const channel = await this.getChannel(storage, varName, cache);

      try {
        data.typing === '0' ? channel.sendTyping(time) : channel.stopTyping();
      } catch (e) {
        console.error(`ERROR! ${e}${e.stack}`);
      }

      this.callNextAction(cache);
    },

    mod() {},
  };
