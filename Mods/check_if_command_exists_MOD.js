module.exports = {
  name: 'Check If Command Exists',
  section: 'Conditions',
  meta: {
    version: '2.1.5',
    preciseCheck: false,
    author: 'DBM Mods',
    authorUrl: 'https://github.com/dbm-network/mods',
    downloadURL: 'https://github.com/dbm-network/mods/blob/master/actions/check_if_command_exists_MOD.js',
  },

  subtitle(data) {
    const results = [
      'Continue Actions',
      'Stop Action Sequence',
      'Jump To Action',
      'Jump Forward Actions',
      'Jump to Anchor',
    ];
    return `If True: ${results[parseInt(data.iftrue, 10)]} ~ If False: ${results[parseInt(data.iffalse, 10)]}`;
  },

  fields: ['commandName', 'iftrue', 'iftrueVal', 'iffalse', 'iffalseVal'],

  html(_isEvent, data) {
    return `
<div style="width: 45%">
  Command Name:<br>
  <input id="commandName" type="text" class="round">
</div><br>
<div>
  ${data.conditions[0]}
</div>`;
  },

  init() {
    const { glob, document } = this;

    const option = document.createElement('OPTION');
    option.value = '4';
    option.text = 'Jump to Anchor';
    const iffalse = document.getElementById('iffalse');
    if (iffalse.length === 4) iffalse.add(option);

    const option2 = document.createElement('OPTION');
    option2.value = '4';
    option2.text = 'Jump to Anchor';
    const iftrue = document.getElementById('iftrue');
    if (iftrue.length === 4) iftrue.add(option2);

    glob.onChangeTrue = function onChangeTrue(event) {
      switch (parseInt(event.value, 10)) {
        case 0:
        case 1:
          document.getElementById('iftrueContainer').style.display = 'none';
          break;
        case 2:
          document.getElementById('iftrueName').innerHTML = 'Action Number';
          document.getElementById('iftrueContainer').style.display = null;
          break;
        case 3:
          document.getElementById('iftrueName').innerHTML = 'Number of Actions to Skip';
          document.getElementById('iftrueContainer').style.display = null;
          break;
        case 4:
          document.getElementById('iftrueName').innerHTML = 'Anchor ID';
          document.getElementById('iftrueContainer').style.display = null;
          break;
        default:
          break;
      }
    };
    glob.onChangeFalse = function onChangeFalse(event) {
      switch (parseInt(event.value, 10)) {
        case 0:
        case 1:
          document.getElementById('iffalseContainer').style.display = 'none';
          break;
        case 2:
          document.getElementById('iffalseName').innerHTML = 'Action Number';
          document.getElementById('iffalseContainer').style.display = null;
          break;
        case 3:
          document.getElementById('iffalseName').innerHTML = 'Number of Actions to Skip';
          document.getElementById('iffalseContainer').style.display = null;
          break;
        case 4:
          document.getElementById('iffalseName').innerHTML = 'Anchor ID';
          document.getElementById('iffalseContainer').style.display = null;
          break;
        default:
          break;
      }
    };
    glob.onChangeTrue(document.getElementById('iftrue'));
    glob.onChangeFalse(document.getElementById('iffalse'));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const fs = require('fs');
    const jp = this.getMods().require('jsonpath');

    let commandName = this.evalMessage(data.commandName, cache);

    if (commandName.startsWith(cache.server.tag)) {
      commandName = commandName.slice(cache.server.tag.length).split(/ +/).shift();
    } else if (commandName.startsWith(this.getDBM().Files.data.settings.tag)) {
      commandName = commandName.slice(this.getDBM().Files.data.settings.tag.length).split(/ +/).shift();
    }

    const commandsFile = JSON.parse(fs.readFileSync('./data/commands.json', 'utf-8'));
    const commands = jp.query(commandsFile, '$[*].name');
    const commandsAliases = jp.query(commandsFile, '$[*]._aliases');

    if (commandName === '')
      return console.log("Please put something in 'Command Name' in the 'Check If Command Exists' action...");

    const check = commands.indexOf(commandName);
    const check2 = commandsAliases.indexOf(commandName);
    const result = !check !== -1 || check2 !== -1;

    this.executeResults(result, data, cache);
  },

  mod() {},
};
