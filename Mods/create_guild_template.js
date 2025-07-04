module.exports = {
  
  name: "Create Guild Template",

  section: "Discord Bots Poland",

  subtitle(data, presets) {
    return `Akcja stworzona przez money#6283`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    let dataType = "Template URL";
    return [data.varName2, dataType];
  },

  meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/dbmmody/blob/main/beta/create_guild_template.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/create_guild_template.js' },

  fields: ["server", "varName", "name2", "description", "storage", "varName2"],

  html(isEvent, data) {
    return `
    <div>
    <p>
        <u>Mod Info:</u><br>
        Created by money#6283<br>
        Zmienne: endtime
    </p>
</div><br>
<server-input dropdownLabel="Source Server" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>

<br><br><br><br>
<div style="float: left; width: 50%;">
<span class="dbminputlabel">Name</span><br>
<input id="name2" class="round" type="text">
</div>
<br><br><br><br>
<div style="float: left; width: 50%;">
<span class="dbminputlabel">Description</span><br>
<input id="description" class="round" type="text">
</div><br><br><br>

<div style="padding-top: 16px;">
<store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
</div>`;
  },

  init() {},


  async action(cache) {
    const data = cache.actions[cache.index];
    const targetServer = await this.getServerFromData(data.server, data.varName, cache);
    const name = this.evalMessage(data.name2, cache);
    const description = this.evalMessage(data.description, cache);
  targetServer.createTemplate(name, description)
  .then((template) => {
    const storage = parseInt(data.storage, 10);
    const varName2 = this.evalMessage(data.varName2, cache);
    this.storeValue(template.url, storage, varName2, cache);
    this.callNextAction(cache)
  })
  .catch((err) => this.displayError(data, cache, err));
  },

  mod() {},
};