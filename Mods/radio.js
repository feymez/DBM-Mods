module.exports = {

       name: "Radio",
       section: "Audio Control",
       requiresAudioLibraries: true,
   
        meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka, Hit Stary', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js' },
        fields: ["channel", "varName", "source", "rmf", "type", "eska", "type2", "openfm", "type3", "xdopenfm", "type4"],
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
        subtitle(data, presets) {
             const r1 = data.source
             const r2 = r1.replace('1', 'RMF')
             const r3 = r2.replace('2', 'ESKA')
             const r4 = r3.replace('3', 'OPEN FM')
             const radio = r4.replace('4', 'Stacje Inne')
           return `Posłuchaj radia ${radio}`;
         },
        html(isEvent, data) {
          return `
          <div>
          <p>
              <u>Mod Info:</u><br>
              Created by money#6283
          </p>
      </div><br>
      <div>
      <voice-channel-input dropdownLabel="Voice Channel" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName" selectWidth="45%" variableInputWidth="50%"></voice-channel-input>
          
          <br><br><br>
      
          <span class="dbminputlabel">Radio</span><br>
            <select id="source" class="round" style="width: 45%" onchange="glob.onChange1(this)">
                    <option value="1">RMF</option>
                    <option value="2">ESKA</opion>
                    <option value="3">OPEN FM</option>
                    <option value="4">INNE STACJE</option>
            </select>
    
          <br>
          <span id="rmf" style="display: none" class="dbminputlabel">Stacja RMF</span><br>
          <select id="type" class="round" style="display: none">
          <option value="1">RMF 2</option>
          <option value="2">RMF 3</option>
          <option value="3">RMF 4</option>
          <option value="4">RMF 5</option>
          <option value="5">RMF 50s</option>
          <option value="6">RMF 60s</option>
          <option value="7">RMF 70s</option>
          <option value="8">RMF 80s</option>
          <option value="9">RMF 90s</option>
          <option value="10">RMF 2000</option>
          <option value="11">RMF alternatywa</option>
          <option value="12">RMF baby</option>
          <option value="13">RMF beatlemania</option>
          <option value="14">RMF blues</option>
          <option value="15">RMF bravo</option>
          <option value="16">RMF celtic</option>
          <option value="17">RMF chillout</option>
          <option value="18">RMF classic rock</option>
          <option value="19">RMF classic</option>
          <option value="20">RMF club</option>
          <option value="21">RMF dance</option>
          <option value="22">RMF depeche mode</option>
          <option value="23">RMF filmowa</option>
          <option value="24">RMF FM</option>
          <option value="25">RMF hiphop</option>
          <option value="26">RMF hopbec</option>
          <option value="27">RMF hotnew</option>
          <option value="28">RMF love</option>
          <option value="29">RMF maxxx</option>
          <option value="30">RMF party</option>
          <option value="31">RMF polski rock</option>
          <option value="32">RMF polskie przeboje</option>
          <option value="33">RMF poplista</option>
          <option value="34">RMF sloneczne przeboje</option>
   
          </select>
          <span id="eska" class="dbminputlabel">Stacja ESKA</span><br>
          <select id="type2" class="round" style="display: none">
          <option value="35">Eska Grudziadz</option>
          <option value="36">Vox Fm</option>
          <option value="37">Eska Warszawa</option>
          <option value="38">Eska Rock</option>
          <option value="39">Eska Malopolska Zakopane</option>
          <option value="40">Eska Wroclaw</option>
          <option value="41">Eska Poznan</option>
          <option value="42">Eska Impreska</option>
          <option value="43">Eska Rzeszow</option>
          <option value="44">Eska Kraków</option>
          <option value="45">Eska Goraca 20</option>
          <option value="46">Radio Plus</option>
          <option value="47">Radio Plus Krakow</option>
          <option value="48">Eska Białystok</option>
          <option value="49">Eska Trojmiasto</option>
          <option value="50">Eska Slask</option>
          <option value="51">Eska Do Pracy</option>
          <option value="52">Eska Rock Polska</option>
          <option value="53">Eska Lodz</option>
          <option value="54">Disco Polo Top40</option>
          <option value="55">Supernova Warszawa</option>
          <option value="56">Eska Szczecin</option>
          <option value="57">Eska Bydgoszcz</option>
          <option value="58">Radio Plus Lublin</option>
          <option value="59">Vox Impreza W Rytmie Hitow</option>
          <option value="60">Vox 90</option>
          <option value="61">Eska Opole</option>
          <option value="62">Vox Bestlista</option>
          <option value="63">Eska Torun</option>
          <option value="64">Eska Lublin</option>
          <option value="65">Eska Olsztyn</option>
          <option value="66">Top Disco Polo</option>
          <option value="67">Eska Kalisz Ostrow</option>
          <option value="68">Eska Tarnow</option>
          <option value="69">Eska Gorzow</option>
          <option value="70">Eska Zamosc</option>
          <option value="71">Eska Radom</option>
          <option value="72">Eska Koszalin</option>
          <option value="73">Eska Pila</option>
          <option value="74">Eska Elblag</option>
          <option value="75">Eska Beskidy</option>
          <option value="76">Radio Plus Koszalin</option>
          <option value="77">Eska Belchatow</option>
          <option value="78">Radio Plus Lodz</option>
          <option value="79">Eska Zielona Gora</option>
          <option value="80">Eska Siedlce</option>
          <option value="81">Eska Kielce</option>
          <option value="82">Eska Starachowice</option>
          <option value="83">Eska Leszno</option>
          <option value="84">Eska Plock</option>
          <option value="85">Radio Plus Szczecin</option>
          <option value="86">Eska Przemysl</option>
          <option value="87">Eska Zary</option>
          <option value="88">Eska Ilawa</option>
          <option value="89">Radio Plus Olsztyn</option>
          <option value="90">Eska Ostrzeszow</option>
          <option value="91">Disco Party</option>
          <option value="92">Eska Szczecinek</option>
          <option value="93">Radio Plus Podhale</option>
          <option value="94">Eska Lomza</option>
          <option value="95">New Pop</option>
          <option value="96">Disco Polo Top</option>
          <option value="97">Eska Krasnik</option>
          <option value="98">Vox Fm Poznan</option>
          <option value="99">Gwiazdy Dance</option>
          <option value="100">Rock Relaks</option>
          <option value="101">New Dance</option>
          <option value="102">Eska Rap 20</option>
          <option value="103">Pop Top 40</option>
          <option value="104">Rock Do Pracy</option>
          <option value="105">Eska Braniewo</option>
          <option value="106">Dance Top 40</option>
          <option value="107">Muzyka Do Pracy</option>
          <option value="108">Special Set</option>
          <option value="109">Milosc W Rytmie Rock</option>
          <option value="110">Supernova Rzeszow</option>
          <option value="111">Supernova Gdansk</option>
          <option value="112">Supernova Opole</option>
          <option value="113">Vox Fm Radom</option>
          <option value="114">Radio Go</option>
          <option value="115">Vox Fm Gorzow</option>
          <option value="116">Supernova Krakow</option>
          <option value="117">Supernova Lodz</option>
          <option value="118">Z Wami Fm</option>
          <option value="119">Supernova Wroclaw</option>
          <option value="120">Supernova Torun</option>
          <option value="121">Supernova Trzebnica</option>
          <option value="122">Supernova Konin</option>
    
          </select>
          <span id="openfm" class="dbminputlabel">Stacja Open Fm</span><br>
          <select id="type3" class="round" style="display: none">
          <option value="123">Open Fm Summer Freszzz</option>
          <option value="124">Open Fm Summer Party</option>
          <option value="125">Open Fm Summer Chill</option>
          <option value="126">Open Fm Summer Classic</option>
          <option value="127">Open Fm Summer Polo</option>
          <option value="128">Open Fm Impreza</option>
          <option value="129">Open Fm Top 20 Impreza</option>
          <option value="130">Open Fm 500 Party Hits</option>
          <option value="131">Open Fm Lejdis Party</option>
          <option value="132">Open Fm Classic Party</option>
          <option value="133">Open Fm Dance</option>
          <option value="134">Open Fm Trance</option>
          <option value="135">Open Fm House</option>
          <option value="136">Open Fm Wesele</option>
          <option value="137">Open Fm Klub 90</option>
          <option value="138">Open Fm Italo Disco</option>
          <option value="139">Open Fm Disco Polo</option>
          <option value="140">Open Fm Top 20 Disco Polo</option>
          <option value="141">Open Fm Impreza PL</option>
          <option value="142">Open Fm Disco Polo Freszzz</option>
          <option value="143">Open Fm Disco Polo Classi</option>
          <option value="144">Open Fm 100% Hits</option>
          <option value="145">Open Fm Praca</option>
          <option value="146">Open Fm #Popularne</option>
          <option value="147">Open Fm Dzień Dobry</option>
          <option value="148">Open Fm Dobranoc</option>
          <option value="149">Open Fm Fun!</option>
          <option value="150">Open Fm Happy</option>
          <option value="151">Open Fm Sad</option>
          <option value="152">Open Fm Hot 20 Najnowsze</option>
          <option value="153">Open Fm Top 20 Pop</option>
          <option value="154">Open Fm Top 20 PL</option>
          <option value="155">Open Fm Top 40 UK</option>
          <option value="156">Open Fm Top 40 USA</option>
          <option value="157">Open Fm Love</option>
          <option value="158">Open Fm Sexy</option>
          <option value="159">Open Fm Cool</option>
          <option value="160">Open Fm Nauka</option>
          <option value="161">Open Fm Relaks</option>
          <option value="162">Open Fm 500 Największych Hitów</option>
          <option value="163">Open Fm Gwiazdy</option>
          <option value="164">Open Fm Freszzz</option>
          <option value="165">Open Fm Polskie Hity</option>
          <option value="166">Open Fm Po Polsku</option>
          <option value="167">Open Fm Po Polsku Classic</option>
          <option value="168">Open Fm Po Polsku Classic 2</option>
          <option value="169">Open Fm Lejdis Cade</option>
          <option value="170">Open Fm Crema Cafe</option>
          <option value="171">Open Fm We Dwoje</option>
          <option value="172">Open Fm Ballady Wszech Czasów</option>
          <option value="173">Open Fm Latino</option>
          <option value="174">Open Fm 100% Justin Biber</option>
          <option value="175">Open Fm 100% One Direction</option>
          <option value="176">Open Fm 00s Hits</option>
          <option value="177">Open Fm 90s Hits</option>
          <option value="178">Open Fm 80s Hits</option>
          <option value="179">Open Fm Classic Hits</option>
          <option value="180">Open Fm Hip-Hop PL</option>
          <option value="181">Open Fm 500 Hip-Hop Hits</option>
          <option value="182">Open Fm Hip-Hop Stacja</option>
          <option value="183">Open Fm Hip-Hop Freszzz</option>
          <option value="184">Open Fm Hip-Hop Klasyka</option>
          <option value="185">Open Fm Hip-Hop Ulica</option>
          <option value="186">Open Fm 100% O.S.T.R</option>
          <option value="187">Open Fm 500 R'n'B Hit</option>
          <option value="188">Open Fm Top 20 Rock</option>
          <option value="189">Open Fm 500 Rock Hits</option>
          <option value="190">Open Fm Praca Rock</option>
          <option value="191">Open Fm Rocks</option>
          <option value="192">Open Fm Polski Rock</option>
          <option value="193">Open Fm Polski Rock Classic</option>
          <option value="194">Open Fm Rock Ballady</option>
          <option value="195">Open Fm Giganci Rocka</option>
          <option value="196">Open Fm Classic Rock</option>
          <option value="197">Open Fm American Rock</option>
          <option value="198">Open Fm Punk Rock</option>
          <option value="199">Open Fm 500 Heavy Hits</option>
          <option value="200">Open Fm Classic Metal</option>
          <option value="201">Open Fm Ciężkie Brzmienia</option>
          <option value="202">Open Fm 100% Dżem</option>
          <option value="203">Open Fm 100% Grabaż</option>
          <option value="204">Open Fm 100% Kazik</option>
          <option value="205">Open Fm 100% Metallica</option>
          <option value="206">Open Fm 100% Linkin Park</option>
          <option value="207">Open Fm Top 20 Alt</option>
          <option value="208">Open Fm 500 Alternative Hits</option>
          <option value="209">Open Fm ALT Freszzz</option>
          <option value="210">Open Fm ALT Club</option>
          <option value="211">Open Fm ALT Cafe</option>
          <option value="212">Open Fm ALT PL</option>
          <option value="213">Open Fm ALT Classic</option>
          <option value="214">Open Fm 500 Electronic Hits</option>
          <option value="215">Open Fm Miejska Stacja</option>
          <option value="216">Open Fm Dubstep</option>
          <option value="217">Open Fm Drum'n'Bass</option>
          <option value="218">Open Fm Chillout</option>
          <option value="219">Open Fm Bieganie</option>
          <option value="220">Open Fm Fitness</option>
          <option value="221">Open Fm Trenicg</option>
          <option value="222">Open Fm 500 Reggae Hits</option>
          <option value="223">Open Fm Polish Reggae Stylee</option>
          <option value="224">Open Fm Retro Cafe</option>
          <option value="225">Open Fm Smooth Jazz</option>
          <option value="226">Open Fm Muzyka Klasyczna</option>
          <option value="227">Open Fm Muzyka Filmowa</option>
          <option value="228">Open Fm Kraina Łagodności</option>
          <option value="229">Open Fm Szanty</option>
          <option value="230">Open Fm Biesiada</option>
          <option value="231">Open Fm Biesiada Śląska</option>
          <option value="232">Open Fm Kids</option>
          <option value="233">Open Fm Odgłosy Natury</option>
          <option value="234">Open Fm Suumer Hits</option>
          </select>
          <span id="xdopenfm" class="dbminputlabel">Stacje Inne</span><br>
          <select id="type4" class="round" style="display: none">
          <option value="235">Radio Zlote Przeboje</option>
           <option value="236">Radio Zet</option>
           <option value="237">RadioParty.pl</option>
           <option value="238">Radio Park</option>
           <option value="239">Radio Piekary</option>
           <option value="240">Radio Jard</option>
           <option value="241">Radio Freee</option>
           <option value="242">Radio Fama</option>
           <option value="243">Radio Nuta</option>
           <option value="244">Radio Kampus</option>
           <option value="245">Radio Max Hit Polska 1</option>
           <option value="246">Radio Muzo FM</option>       
           </select>
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
            const { document, glob } = this;
            glob.onChange1 = function onChange1(event) {
            const value = parseInt(event.value, 10);
            const eska = document.getElementById('type2');
            const rmf = document.getElementById('type')
            const rmf1 = document.getElementById('rmf')
            const eska1 = document.getElementById('eska')
            const openfm1 = document.getElementById('openfm')
            const openfm = document.getElementById('type3')
            const xdopenfm = document.getElementById('type4')
            const xdopenfm1 = document.getElementById('xdopenfm')
        
            if (value === 1) {
                rmf.style.display = null
                rmf.style.width = '45%'
                rmf1.style.display = null
                eska.style.display = 'none'
                eska1.style.display = 'none'
                openfm1.style.display = 'none'
                openfm.style.display = 'none'
                xdopenfm.style.display = 'none'
                xdopenfm1.style.display = 'none'
            } else if (value === 2) {
                eska.style.display = null
                eska.style.width = '45%'
                eska1.style.display = null
                rmf1.style.display = 'none'
                rmf.style.display = 'none'
                openfm1.style.display = 'none'
                openfm.style.display = 'none'
                xdopenfm.style.display = 'none'
                xdopenfm1.style.display = 'none'
            } else if (value === 3) {
                eska.style.display = 'none'
                eska1.style.display = 'none'
                openfm.style.width = '45%'
                rmf1.style.display = 'none'
                rmf.style.display = 'none'
                openfm1.style.display = null
                openfm.style.display = null
                xdopenfm.style.display = 'none'
                xdopenfm1.style.display = 'none'
          } else if (value === 4) {
                 eska.style.display = 'none'
                eska1.style.display = 'none'
                xdopenfm.style.width = '45%'
                rmf1.style.display = 'none'
                rmf.style.display = 'none'
                xdopenfm.style.display = null
                xdopenfm1.style.display = null
                openfm.style.display = 'none'
                openfm1.style.display = 'none'
   
   
            }
            };
            glob.onChange1(document.getElementById('source'));
        },
    
      
        //---------------------------------------------------------------------
        // Action Bot Function
        //
        // This is the function for the action within the Bot's Action class.
        // Keep in mind event calls won't have access to the "msg" parameter,
        // so be sure to provide checks for variable existence.
        //---------------------------------------------------------------------
      
        async action(cache) {
            const { interaction } = cache
            const data = cache.actions[cache.index];
            const Audio = this.getDBM().Audio;
            const { MessageEmbed } = require('discord.js')
            const channel = await this.getVoiceChannelFromData(data.channel, data.varName, cache);
            if (!interaction.member.voice.channel) return interaction.reply("Błąd: Musisz być na kanale by użyć tej komendy!")
            let url
            const check = data.source
            const type = parseInt(data.type)
            const type2 = parseInt(data.type2)
            const type3 = parseInt(data.type3)
            const type4 = parseInt(data.type4)
            if (check === '1') { 
                switch(type) {
                  case 1:
                       url = 'http://195.150.20.244:8000/rmf_2'
                       radio = 'RMF 2'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,94'
                       break;
                  case 2:
                       url = 'http://195.150.20.246:8000/rmf_3'
                       radio = 'RMF 3'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,95'
                       break;
                  case 3:
                       url = 'http://195.150.20.244:8000/rmf_4'
                       radio = 'RMF 4'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,96'
                       break;
                  case 4:
                       url = 'http://195.150.20.243:8000/rmf_5'
                       radio = 'RMF 5'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,97'
                       break;
                  case 5:
                       url = 'http://195.150.20.243:8000/rmf_50s'
                       radio = 'RMF 50s'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,48'
                       break;
                  case 6:
                       url = 'http://217.74.72.11:8000/rmf_60s'
                       radio = 'RMF 60s'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,44'
                       break;
                  case 7:
                       url = 'http://217.74.72.10:8000/rmf_70s'
                       radio = 'RMF 70s'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,45'
                       break;
                  case 8:
                       url = 'http://217.74.72.12:8000/rmf_80s'
                       radio = 'RMF 80s'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,25'
                       break;
                  case 9:
                       url = 'http://217.74.72.11:8000/rmf_90s'
                       radio = 'RMF 90s'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,46'
                       break;
                  case 10:
                       url = 'http://217.74.72.12:8000/rmf_2000'
                       radio = 'RMF 2000'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,81'
                       break;
                  case 11:
                       url = 'http://217.74.72.10:8000/rmf_alternatywa'
                       radio = 'RMF alternatywa'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,28'
                       break;
                  case 12:
                       url = 'http://217.74.72.11:8000/rmf_baby'
                       radio = 'RMF baby'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,43'
                       break;
                  case 13:
                       url = 'http://217.74.72.12:8000/rmf_beatlemania'
                       radio = 'RMF beatlemania'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,77'
                       break;
                  case 14:
                       url = 'http://195.150.20.4:8000/rmf_blues'
                       radio = 'RMF blues'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,39'
                       break;
                  case 15:
                       url = 'http://31.192.216.4:8000/rmf_bravo'
                       radio = 'RMF bravo'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,12'
                       break;
                  case 16:
                       url = 'http://217.74.72.12:8000/rmf_celtic'
                       radio = 'RMF celtic'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,67'
                       break;
                  case 17:
                       url = 'http://217.74.72.10:8000/rmf_chillout'
                       radio = 'RMF chillout'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,11'
                       break;
                  case 18:
                       url = 'http://195.150.20.246:8000/rmf_classic_rock'
                       radio = 'RMF classic rock'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,2'
                       break;
                  case 19:
                       url = 'http://217.74.72.12:8000/rmf_classic'
                       radio = 'RMF classic'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,7'
                       break;
                  case 20:
                       url = 'http://217.74.72.11:8000/rmf_club'
                       radio = 'RMF club'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,29'
                       break;
                  case 21:
                       url = 'http://217.74.72.11:8000/rmf_dance'
                       radio = 'RMF dance'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,3'
                       break;
                  case 22:
                       url = 'http://195.150.20.243:8000/rmf_depeche_mode'
                       radio = 'RMF depeche mode'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,31'
                       break;
                  case 23:
                       url = 'http://195.150.20.246:8000/rmf_muzyka_filmowa'
                       radio = 'RMF filmowa'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,33'
                       break;
                  case 24:
                       url = 'http://217.74.72.12:8000/rmf_fm'
                       radio = 'RMF FM'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,5'
                       break;
                  case 25:
                       url = 'http://217.74.72.11:8000/rmf_hip_hop'
                       radio = 'RMF hiphop'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,37#p'
                       break;
                  case 26:
                       url = 'http://217.74.72.11:8000/rmf_hop_bec'
                       radio = 'RMF hopbec'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,22'
                       break;
                  case 27:
                       url = 'http://195.150.20.4:8000/rmf_hot_new'
                       radio = 'RMF hotnew'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,27'
                       break;
                  case 28:
                       url = 'http://31.192.216.4:8000/rmf_love'
                       radio = 'RMF love'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,14'
                       break;
                  case 29:
                       url = 'http://31.192.216.4:8000/rmf_maxxx'
                       radio = 'RMF maxxx'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,6'
                       break;
                  case 30:
                       url = 'http://217.74.72.12:8000/rmf_party'
                       radio = 'RMF party'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,23'
                       break;
                  case 31:
                       url = 'http://217.74.72.10:8000/rmf_polski_rock'
                       radio = 'RMF polski rock'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,36'
                       break;
                  case 32:
                       url = 'http://217.74.72.12:8000/rmf_polskie_przeboje'
                       radio = 'RMF polskie przeboje'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,9'
                       break;
                  case 33:
                       url = 'http://31.192.216.4:8000/rmf_poplista'
                       radio = 'RMF poplista'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,8'
                       break;
                  case 34:
                       url = 'http://31.192.216.4:8000/rmf_sloneczne_przeboje'
                       radio = 'RMF sloneczne przeboje'
                       img = 'https://i.imgur.com/LqyrhDv.png'
                       strona = 'https://www.rmfon.pl/play,10'
                       break;
                       default:
           break;
            }
        }
        if (check === '2') {
            switch(type2) {
             case 35:
                  url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-grudziadz'
                  radio = 'Eska Grudziadz'
                  img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                  strona = 'https://www.eska.pl/grudziadz/'
                      break;
              case 36:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm'
                   radio = 'Vox Fm'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/'
                      break;
              case 37:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-warszawa'
                      radio = 'Eska Warszawa'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/warszawa/'
                      break;
              case 38:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock'
                      radio = 'Eska Rock'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1398.v16.png'
                      strona = 'https://www.eskarock.pl/'
                      break;
              case 39:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-malopolska-zakopane'
                      radio = 'Eska Malopolska Zakopane'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.radio.pl/s/eskamalopolska'
                      break;
              case 40:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-wroclaw'
                      radio = 'Eska Wroclaw'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/wroclaw/'
                      break;
              case 41:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-poznan'
                      radio = 'Eska Poznan'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/poznan/'
                      break;
               case 42:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-impreska'
                      radio = 'Eska Impreska'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tag/impreska,tg-mLBP-HmQv-oX7G/'
                      break;
               case 43:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rzeszow'
                      radio = 'Eska Rzeszow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/rzeszow/'
                      break;
              case 44:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krakow'
                      radio = 'Eska Kraków'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/krakow/'
                      break;
              case 45:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-goraca-20'
                      radio = 'Eska Goraca 20'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/goraca20/'
                      break;
               
              case 46:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus'
                      radio = 'Radio Plus'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/'
                      break;
               case 47:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-krakow'
                      radio = 'Radio Plus Krakow'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/'
                      break;
              case 48:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bialystok'
                      radio = 'Eska Białystok'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/bialystok/'
                      break;
              case 49:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-trojmiasto'
                      radio = 'Eska Trojmiasto'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/trojmiasto/'
                      break;
               
            case 50:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-slask'
                      radio = 'Eska Slask'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/slaskie/'
                      break;
               case 51:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-do-pracy'
                      radio = 'Eska Do Pracy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://onlineradiobox.com/pl/eskadopracy/'
                      break;
              case 52:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock-polska'
                      radio = 'Eska Rock Polska'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eskarock.pl/'
                      break;
              case 53:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lodz'
                      radio = 'Eska Lodz'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/lodz/'
                      break;
               
              case 54:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top40'
                      radio = 'Disco Polo Top40'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.radio.pl/s/discopolotop40'
                      break;
               case 55:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-warszawa'
                      radio = 'Supernova Warszawa'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
              case 56:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecin'
                      radio = 'Eska Szczecin'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/szczecin/'
                      break;
              case 57:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bydgoszcz'
                      radio = 'Eska Bydgoszcz'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/bydgoszcz/'
                      break;
               
              case 58:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lublin'
                      radio = 'Radio Plus Lublin'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/'
                      break;
               case 59:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-impreza-w-rytmie-hitow'
                      radio = 'Vox Impreza W Rytmie Hitow'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/'
                      break;
              case 60:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-90'
                      radio = 'Vox 90'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/'
                      break;
              case 61:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-opole'
                      radio = 'Eska Opole'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/opole/'
                      break;
              case 62:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-bestlista'
                      radio = 'Vox Bestlista'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/bestlista/'
                      break;
               case 63:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-torun'
                      radio = 'Eska Torun'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/torun/'
                      break;
              case 64:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lublin'
                      radio = 'Eska Lublin'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/lublin/'
                      break;
              case 65:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-olsztyn'
                      radio = 'Eska Olsztyn'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/olsztyn/'
                      break;
               case 66:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/top-disco-polo'
                      radio = 'Top Disco Polo'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tag/hity-disco-polo,tg-QHc2-djkL-78Nh/'
                      break;     
              case 67:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kalisz-ostrow'
                      radio = 'Eska Kalisz Ostrow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/ostrow/'
                      break;
              case 68:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-tarnow'
                      radio = 'Eska Tarnow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tarnow/'
                      break;
              case 69:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-gorzow'
                      radio = 'Eska Gorzow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/gorzow/'
                      break;
              case 70:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zamosc'
                      radio = 'Eska Zamosc'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/zamosc/'
                      break;
              case 71:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-radom'
                      radio = 'Eska Radom'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/radom/'
                      break;   
              case 72:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-koszalin'
                      radio = 'Eska Koszalin'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/koszalin/'
                      break;
              case 73:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-pila'
                      radio = 'Eska Pila'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/pila/'
                      break;
              case 74:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-elblag'
                      radio = 'Eska Elblag'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/elblag/'
                      break;
               case 75:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-beskidy'
                      radio = 'Eska Beskidy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/beskidy/'
                      break;
               case 76:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-koszalin'
                      radio = 'Radio Plus Koszalin'
                      img = "https://cdn.onlineradiobox.com/img/l/1/1361.v10.png"
                      strona = 'https://www.radioplus.pl/koszalin/'
                      break;
               case 77:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-belchatow'
                      radio = 'Eska Belchatow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/belchatow/'
                      break;
               case 78:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lodz'
                      radio = 'Radio Plus Lodz'
                      img = "https://cdn.onlineradiobox.com/img/l/1/1361.v10.png"
                      strona = 'https://www.radioplus.pl/'
                      break;
               case 79:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zielona-gora'
                      radio = 'Eska Zielona Gora'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/zielona-gora/'
                      break;
               case 80:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-siedlce'
                      radio = 'Eska Siedlce'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/siedlce/'
                      break;
               case 81:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kielce'
                      radio = 'Eska Kielce'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/kielce/'
                      break;
               case 82:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-starachowice'
                      radio = 'Eska Starachowice'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/starachowice/'
                      break;
               case 83:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-leszno'
                      radio = 'Eska Leszno'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/leszno/'
                      break;
               case 84:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-plock'
                      radio = 'Eska Plock'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/plock/'
                      break;
               case 85:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-szczecin'
                      radio = 'Radio Plus Szczecin'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/szczecin/'
                      break;
               case 86:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-przemysl'
                      radio = 'Eska Przemysl'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/przemysl/'
                      break;
               case 87:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zary'
                      radio = 'Eska Zary'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/zary/'
                      break;
               case 88:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ilawa'
                      radio = 'Eska Ilawa'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/ilawa'
                      break;
               case 89:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-olsztyn'
                      radio = 'Radio Plus Olsztyn'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/olsztyn/'
                      break;
               case 90:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ostrzeszow'
                      radio = 'Eska Ostrzeszow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/ostrzeszow/'
                      break;
               case 91:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-party'
                      radio = 'Disco Party'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://discoparty.pl/'
                      break;
               case 92:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecinek'
                      radio = 'Eska Szczecinek'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/szczecinek/'
                      break;
               case 93:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-podhale'
                      radio = 'Radio Plus Podhale'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/podhale/'
                      break;
               case 94:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lomza'
                      radio = 'Eska lomza'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/lomza/'
                      break;
               case 95:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-pop'
                      radio = 'New Pop'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/hity/'
                      break;
               case 96:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top'
                      radio = 'Disco Polo Top'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tag/hity-disco-polo,tg-QHc2-djkL-78Nh/'
                      break;
               case 97:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krasnik'
                      radio = 'Eska Krasnik'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/krasnik/'
                      break;
              case 98:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-poznan'
                      radio = 'Vox Fm Poznan'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/poznan/'
                      break;
               case 99:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/gwiazdy-dance'
                      radio = 'Gwiazdy Dance'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 100:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-relaks'
                      radio = 'Rock Relaks'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 101:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-dance'
                      radio = 'New Dance'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 102:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rap-20'
                      radio = 'Eska Rap 20'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 103:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/pop-top-40'
                      radio = 'Pop Top 40'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 104:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-do-pracy'
                      radio = 'Rock Do Pracy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 105:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-braniewo'
                      radio = 'Eska Braniewo'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/braniewo/'
                      break;
               case 106:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/dance-top-40'
                      radio = 'Dance Top 40'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 107:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/muzyka-do-pracy'
                      radio = 'Muzyka Do Pracy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 108:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/special-set'
                      radio = 'Special Set'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 109:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/milosc-w-rytmie-rock'
                      radio = 'Milosc W Rytmie Rock'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 110:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-rzeszow'
                      radio = 'Supernova Rzeszow'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
               case 111:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-gdansk'
                      radio = 'Supernova Gdansk'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = ''
                      break;
               case 112:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-opole'
                      radio = 'Supernova Opole'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
               case 113:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-radom'
                      radio = 'Vox Fm Radom'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/radom-grojec/'
                      break;
               case 114:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-go'
                      radio = 'Radio Go'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl'
                      break;
               case 115:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-gorzow'
                      radio = 'Vox Fm Gorzow'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/gorzow-wlkp/'
                      break;
               case 116:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-krakow'
                      radio = 'Supernova Krakow'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/krakow/'
                      break;
               case 117:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-lodz'
                      radio = 'Supernova Lodz'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/lodz/'
                      break;
               case 118:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/z-wami-fm'
                      radio = 'Z Wami Fm'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
               case 119:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-wroclaw'
                      radio = 'Supernova Wroclaw'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/wroclaw/'
                      break;
               case 120:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-torun'
                      radio = 'Supernova Torun'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/torun/'
                      break;
               case 121:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-trzebnica'
                      radio = 'Supernova Trzebnica'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/trzebnica/'
                      break;
                case 122:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-konin'
                      radio = 'Supernova Konin'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/konin/'
                      break;
                      default:
                        break;
            }
        }        
        if (check === '3') {
            switch(type3) {
             
             
         case 123:
                  url = 'https://stream.open.fm/86'
                  radio = 'Open Fm Summer Freszzz'
                  img = 'https://open.fm/logo/125x125/86'
                  strona = 'https://open.fm/play/86'
                  break;
         case 124:
                  url = 'https://stream.open.fm/100'
                  radio = 'Open Fm Summer Party'
                  img = 'https://open.fm/logo/125x125/100'
                  strona = 'https://open.fm/play/100'
                  break;
         case 125:
                  url = 'https://stream.open.fm/119'
                  radio = 'Open Fm Summer Chill'
                  img = 'https://open.fm/logo/125x125/119'
                  strona = 'https://open.fm/play/119'
                  break;
         case 126:
                  url = 'https://stream.open.fm/125'
                  radio = 'Open Fm Summer Classic'
                  img = 'https://open.fm/logo/125x125/125'
                  strona = 'https://open.fm/play/125'
                  break;
         case 127:
                  url = 'https://stream.open.fm/122'
                  radio = 'Open Fm Summer Polo'
                  img = 'https://open.fm/logo/125x125/122'
                  strona = 'https://open.fm/play/122'
                  break;
         case 128:
                  url = 'https://stream.open.fm/2'
                  radio = 'Open Fm Impreza'
                  img = 'https://open.fm/logo/125x125/2'
                  strona = 'https://open.fm/play/2'
                  break;
         case 129:
                  url = 'https://stream.open.fm/95'
                  radio = 'Open Fm Top 20 Impreza'
                  img = 'https://open.fm/logo/125x125/95'
                  strona = 'https://open.fm/play/95'
                  break;
         case 130:
                  url = 'https://stream.open.fm/81'
                  radio = 'Open Fm 500 Party Hits'
                  img = 'https://open.fm/logo/125x125/81'
                  strona = 'https://open.fm/play/81'
                  break;
         case 131:
                  url = 'https://stream.open.fm/102'
                  radio = 'Open Fm Lejdis Party'
                  img = 'https://open.fm/logo/125x125/102'
                  strona = 'https://open.fm/play/102'
                  break;
         case 132:
                  url = 'https://stream.open.fm/50'
                  radio = 'Open Fm Classic Party'
                  img = 'https://open.fm/logo/125x125/50'
                  strona = 'https://open.fm/play/50'
                  break;
         case 133:
                  url = 'https://stream.open.fm/31'
                  radio = 'Open Fm Dance'
                  img = 'https://open.fm/logo/125x125/31'
                  strona = 'https://open.fm/play/31'
                  break;
         case 134:
                  url = 'https://stream.open.fm/7'
                  radio = 'Open Fm Trance'
                  img = 'https://open.fm/logo/125x125/7'
                  strona = 'https://open.fm/play/7'
                  break;
         case 135:
                  url = 'https://stream.open.fm/5'
                  radio = 'Open Fm House'
                  img = 'https://open.fm/logo/125x125/5'
                  strona = 'https://open.fm/play/5'
                  break;
         case 136:
                  url = 'https://stream.open.fm/110'
                  radio = 'Open Fm Wesele'
                  img = 'https://open.fm/logo/125x125/110'
                  strona = 'https://open.fm/play/110'
                  break;
         case 137:
                  url = 'https://stream.open.fm/8'
                  radio = 'Open Fm Klub 90'
                  img = 'https://open.fm/logo/125x125/8'
                  strona = 'https://open.fm/play/8'
                  break;
         case 138:
                  url = 'https://stream.open.fm/27'
                  radio = 'Open Fm Italo Disco'
                  img = 'https://open.fm/logo/125x125/27'
                  strona = 'https://open.fm/play/27'
                  break;
         case 139:
                  url = 'https://stream.open.fm/21'
                  radio = 'Open Fm Disco Polo'
                  img = 'https://open.fm/logo/125x125/21'
                  strona = 'https://open.fm/play/21'
                  break;
         case 140:
                  url = 'https://stream.open.fm/53'
                  radio = 'Open Fm Top 20 Disco Polo'
                  img = 'https://open.fm/logo/125x125/53'
                  strona = 'https://open.fm/play/53'
                  break;
         case 141:
                  url = 'https://stream.open.fm/12'
                  radio = 'Open Fm Impreza PL'
                  img = 'https://open.fm/logo/125x125/12'
                  strona = 'https://open.fm/play/12'
                  break;
         case 142:
                  url = 'https://stream.open.fm/57'
                  radio = 'Open Fm Disco Polo Freszzz'
                  img = 'https://open.fm/logo/125x125/57'
                  strona = 'https://open.fm/play/57'
                  break;
         case 143:
                  url = 'https://stream.open.fm/49'
                  radio = 'Open Fm Disco Polo Classic'
                  img = 'https://open.fm/logo/125x125/49'
                  strona = 'https://open.fm/play/49'
                  break;
         case 144:
                  url = 'https://stream.open.fm/64'
                  radio = 'Open Fm 100% Hits'
                  img = 'https://open.fm/logo/125x125/64'
                  strona = 'https://open.fm/play/64'
                  break;
         case 145:
                  url = 'https://stream.open.fm/109'
                  radio = 'Open Fm Praca'
                  img = 'https://open.fm/logo/125x125/109'
                  strona = 'https://open.fm/play/109'
                  break;
         case 146:
                  url = 'https://stream.open.fm/10'
                  radio = 'Open Fm #Popularne'
                  img = 'https://open.fm/logo/125x125/10'
                  strona = 'https://open.fm/play/10'
                  break;
         case 147:
                  url = 'https://stream.open.fm/69'
                  radio = 'Open Fm Dzień Dobry'
                  img = 'https://open.fm/logo/125x125/69'
                  strona = 'https://open.fm/play/69'
                  break;
         case 148:
                  url = 'https://stream.open.fm/74'
                  radio = 'Open Fm Dobranoc'
                  img = 'https://open.fm/logo/125x125/74'
                  strona = 'https://open.fm/play/74'
                  break;
         case 149:
                  url = 'https://stream.open.fm/51'
                  radio = 'Open Fm Fun'
                  img = 'https://open.fm/logo/125x125/51'
                  strona = 'https://open.fm/play/51'
                  break;
         case 150:
                  url = 'https://stream.open.fm/120'
                  radio = 'Open Fm Happy'
                  img = 'https://open.fm/logo/125x125/120'
                  strona = 'https://open.fm/play/120'
                  break;
         case 151:
                  url = 'https://stream.open.fm/103'
                  radio = 'Open Fm Sad'
                  img = 'https://open.fm/logo/125x125/103'
                  strona = 'https://open.fm/play/103'
                  break;
         case 152:
                  url = 'https://stream.open.fm/115'
                  radio = 'Open Fm Hot 20 Najnowsze'
                  img = 'https://open.fm/logo/125x125/115'
                  strona = 'https://open.fm/play/115'
                  break;
         case 153:
                  url = 'https://stream.open.fm/96'
                  radio = 'Open Fm Top 20 Pop'
                  img = 'https://open.fm/logo/125x125/96'
                  strona = 'https://open.fm/play/96'
                  break;
         case 154:
                  url = 'http://stream.open.fm/97'
                  radio = 'Open Fm Top 20 PL'
                  img = 'https://open.fm/logo/125x125/97'
                  strona = ''
                  break;
         case 155:
                  url = 'https://stream.open.fm/70'
                  radio = 'Open Fm Top 40 UK'
                  img = 'https://open.fm/logo/125x125/70'
                  strona = 'https://open.fm/play/70'
                  break;
         case 156:
                  url = 'https://stream.open.fm/105'
                  radio = 'Open Fm Top 40 USA'
                  img = 'https://open.fm/logo/125x125/105'
                  strona = 'https://open.fm/play/105'
                  break;
         case 157:
                  url = 'https://stream.open.fm/121'
                  radio = 'Open Fm Love'
                  img = 'https://open.fm/logo/125x125/121'
                  strona = '121'
                  break;
         case 158:
                  url = 'https://stream.open.fm/18'
                  radio = 'Open Fm Sexy'
                  img = 'https://open.fm/logo/125x125/18'
                  strona = 'https://open.fm/play/18'
                  break;
         case 159:
                  url = 'https://stream.open.fm/123'
                  radio = 'Open Fm Cool'
                  img = 'https://open.fm/logo/125x125/123'
                  strona = 'https://open.fm/play/123'
                  break;
         case 160:
                  url = 'https://stream.open.fm/117'
                  radio = 'Open Fm Nauka'
                  img = 'https://open.fm/logo/125x125/117'
                  strona = 'https://open.fm/play/117'
                  break;
         case 161:
                  url = 'https://stream.open.fm/112'
                  radio = 'Open Fm Relaks'
                  img = 'https://open.fm/logo/125x125/112'
                  strona = 'https://open.fm/play/112'
                  break;
         case 162:
                  url = 'https://stream.open.fm/11'
                  radio = 'Open Fm 500 Największych Hitów'
                  img = 'https://open.fm/logo/125x125/11'
                  strona = 'https://open.fm/play/11'
                  break;
         case 163:
                  url = 'https://stream.open.fm/58'
                  radio = 'Open Fm Gwiazdy'
                  img = 'https://open.fm/logo/125x125/58'
                  strona = 'https://open.fm/play/58'
                  break;
         case 164:
                  url = 'https://stream.open.fm/39'
                  radio = 'Open Fm Freszzz'
                  img = 'https://open.fm/logo/125x125/39'
                  strona = 'https://open.fm/play/39'
                  break;
         case 165:
                  url = 'https://stream.open.fm/111'
                  radio = 'Open Fm Polskie Hity'
                  img = 'https://open.fm/logo/125x125/111'
                  strona = 'https://open.fm/play/111'
                  break;
         case 166:
                  url = 'https://stream.open.fm/1'
                  radio = 'Open Fm Po Polsku'
                  img = 'https://open.fm/logo/125x125/1'
                  strona = 'https://open.fm/play/1'
                  break;
         case 167:
                  url = 'https://stream.open.fm/79'
                  radio = 'Open Fm Po Polsku Classic'
                  img = 'https://open.fm/logo/125x125/79'
                  strona = 'https://open.fm/play/79'
                  break;
         case 168:
                  url = 'https://stream.open.fm/17'
                  radio = 'Open Fm Po Polsku Classic 2'
                  img = 'https://open.fm/logo/125x125/17'
                  strona = 'https://open.fm/play/17'
                  break;
         case 169:
                  url = 'https://stream.open.fm/48'
                  radio = 'Open Fm Lejdis Cade'
                  img = 'https://open.fm/logo/125x125/48'
                  strona = 'https://open.fm/play/48'
                  break;
         case 170:
                  url = 'https://stream.open.fm/76'
                  radio = 'Open Fm Crema Cafe'
                  img = 'https://open.fm/logo/125x125/76'
                  strona = 'https://open.fm/play/76'
                  break;
         case 171:
                  url = 'https://stream.open.fm/4'
                  radio = 'Open Fm We Dwoje'
                  img = 'https://open.fm/logo/125x125/4'
                  strona = 'https://open.fm/play/4'
                  break;
         case 172:
                  url = 'https://stream.open.fm/20'
                  radio = 'Open Fm Ballady Wszech Czasów'
                  img = 'https://open.fm/logo/125x125/20'
                  strona = 'https://open.fm/play/20'
                  break;
         case 173:
                  url = 'https://stream.open.fm/19'
                  radio = 'Open Fm Latino'
                  img = 'https://open.fm/logo/125x125/19'
                  strona = 'https://open.fm/play/19'
                  break;
         case 174:
                  url = 'https://stream.open.fm/63'
                  radio = 'Open Fm 100% Justin Biber'
                  img = 'https://open.fm/logo/125x125/63'
                  strona = 'https://open.fm/play/63'
                  break;
         case 175:
                  url = 'https://stream.open.fm/80'
                  radio = 'Open Fm 100% One Direction'
                  img = 'https://open.fm/logo/125x125/80'
                  strona = 'https://open.fm/play/80'
                  break;
         case 176:
                  url = 'https://stream.open.fm/72'
                  radio = 'Open Fm 00s Hits'
                  img = 'https://open.fm/logo/125x125/72'
                  strona = 'https://open.fm/play/72'
                  break;
         case 177:
                  url = 'https://stream.open.fm/14'
                  radio = 'Open Fm 90s Hits'
                  img = 'https://open.fm/logo/125x125/14'
                  strona = 'https://open.fm/play/14'
                  break;
         case 178:
                  url = 'https://stream.open.fm/3'
                  radio = 'Open Fm 80s Hits'
                  img = 'https://open.fm/logo/125x125/3'
                  strona = 'https://open.fm/play/3'
                  break;
         case 179:
                  url = 'https://stream.open.fm/46'
                  radio = 'Open Fm Classic Hits'
                  img = 'https://open.fm/logo/125x125/46'
                  strona = 'https://open.fm/play/46'
                  break;
         case 180:
                  url = 'https://stream.open.fm/24'
                  radio = 'Open Fm Hip-Hop PL'
                  img = 'https://open.fm/logo/125x125/24'
                  strona = 'https://open.fm/play/24'
                  break;
         case 181:
                  url = 'https://stream.open.fm/98'
                  radio = 'Open Fm 500 Hip-Hop Hits'
                  img = 'https://open.fm/logo/125x125/98'
                  strona = 'https://open.fm/play/98'
                  break;
         case 182:
                  url = 'https://stream.open.fm/23'
                  radio = 'Open Fm Hip-Hop Stacja'
                  img = 'https://open.fm/logo/125x125/23'
                  strona = 'https://open.fm/play/23'
                  break;
         case 183:
                  url = 'https://stream.open.fm/93'
                  radio = 'Open Fm Hip-Hop Freszzz'
                  img = 'https://open.fm/logo/125x125/93'
                  strona = 'https://open.fm/play/93'
                  break;
         case 184:
                  url = 'https://stream.open.fm/107'
                  radio = 'Open Fm Hip-Hop Klasyka'
                  img = 'https://open.fm/logo/125x125/107'
                  strona = 'https://open.fm/play/107'
                  break;
         case 185:
                  url = 'https://stream.open.fm/92'
                  radio = 'Open Fm Hip-Hop Ulica'
                  img = 'https://open.fm/logo/125x125/92'
                  strona = 'https://open.fm/play/92'
                  break;
         case 186:
                  url = 'https://stream.open.fm/47'
                  radio = 'Open Fm 100% O.S.T.R'
                  img = 'https://open.fm/logo/125x125/47'
                  strona = 'https://open.fm/play/47'
                  break;
         case 187:
                  url = 'https://stream.open.fm/26'
                  radio = 'Open Fm 500 RnB Hit'
                  img = 'https://open.fm/logo/125x125/26'
                  strona = 'https://open.fm/play/26'
                  break;
         case 188:
                  url = 'https://stream.open.fm/99'
                  radio = 'Open Fm Top 20 Rock'
                  img = 'https://open.fm/logo/125x125/99'
                  strona = 'https://open.fm/play/99'
                  break;
         case 189:
                  url = 'https://stream.open.fm/82'
                  radio = 'Open Fm 500 Rock Hits'
                  img = 'https://open.fm/logo/125x125/82'
                  strona = 'https://open.fm/play/82'
                  break;
         case 190:
                  url = 'https://stream.open.fm/104'
                  radio = 'Open Fm Praca Rock'
                  img = 'https://open.fm/logo/125x125/104'
                  strona = 'https://open.fm/play/104'
                  break;
         case 191:
                  url = 'https://stream.open.fm/77'
                  radio = 'Open Fm Rocks'
                  img = 'https://open.fm/logo/125x125/77'
                  strona = 'https://open.fm/play/77'
                  break;
         case 192:
                  url = 'https://stream.open.fm/29'
                  radio = 'Open Fm Polski Rock'
                  img = 'https://open.fm/logo/125x125/29'
                  strona = 'https://open.fm/play/29'
                  break;
         case 193:
                  url = 'https://stream.open.fm/45'
                  radio = 'Open Fm Polski Rock Classic'
                  img = 'https://open.fm/logo/125x125/45'
                  strona = 'https://open.fm/play/45'
                  break;
         case 194:
                  url = 'https://stream.open.fm/61'
                  radio = 'Open Fm Rock Ballady'
                  img = 'https://open.fm/logo/125x125/61'
                  strona = 'https://open.fm/play/61'
                  break;
         case 195:
                  url = 'https://stream.open.fm/118'
                  radio = 'Open Fm Giganci Rocka'
                  img = 'https://open.fm/logo/125x125/118'
                  strona = 'https://open.fm/play/118'
                  break;
         case 196:
                  url = 'https://stream.open.fm/32'
                  radio = 'Open Fm Classic Rock'
                  img = 'https://open.fm/logo/125x125/32'
                  strona = 'https://open.fm/play/32'
                  break;
         case 197:
                  url = 'https://stream.open.fm/40'
                  radio = 'Open Fm American Rock'
                  img = 'https://open.fm/logo/125x125/40'
                  strona = 'https://open.fm/play/40'
                  break;
         case 198:
                  url = 'https://stream.open.fm/78'
                  radio = 'Open Fm Punk Rock'
                  img = 'https://open.fm/logo/125x125/78'
                  strona = 'https://open.fm/play/78'
                  break;
         case 199:
                  url = 'https://stream.open.fm/54'
                  radio = 'Open Fm 500 Heavy Hits'
                  img = 'https://open.fm/logo/125x125/54'
                  strona = 'https://open.fm/play/54'
                  break;
         case 200:
                  url = 'https://stream.open.fm/108'
                  radio = 'Open Fm Classic Metal'
                  img = 'https://open.fm/logo/125x125/108'
                  strona = 'https://open.fm/play/108'
                  break;
         case 201:
                  url = 'https://stream.open.fm/13'
                  radio = 'Open Fm Ciężkie Brzmienia'
                  img = 'https://open.fm/logo/125x125/13'
                  strona = 'https://open.fm/play/13'
                  break;
         case 202:
                  url = 'https://stream.open.fm/15'
                  radio = 'Open Fm 100% Dżem'
                  img = 'https://open.fm/logo/125x125/15'
                  strona = 'https://open.fm/play/15'
                  break;
         case 203:
                  url = 'https://stream.open.fm/73'
                  radio = 'Open Fm 100% Grabaż'
                  img = 'https://open.fm/logo/125x125/73'
                  strona = 'https://open.fm/play/73'
                  break;
         case 204:
                  url = 'https://stream.open.fm/35'
                  radio = 'Open Fm 100% Kazik'
                  img = 'https://open.fm/logo/125x125/35'
                  strona = 'https://open.fm/play/35'
                  break;
         case 205:
                  url = 'https://stream.open.fm/62'
                  radio = 'Open Fm 100% Metallica'
                  img = 'https://open.fm/logo/125x125/62'
                  strona = 'https://open.fm/play/62'
                  break;
         case 206:
                  url = 'https://stream.open.fm/42'
                  radio = 'Open Fm 100% Linkin Park'
                  img = 'https://open.fm/logo/125x125/42'
                  strona = 'https://open.fm/play/42'
                  break;
         case 207:
                  url = 'https://stream.open.fm/83'
                  radio = 'Open Fm Top 20 Alt'
                  img = 'https://open.fm/logo/125x125/83'
                  strona = 'https://open.fm/play/83'
                  break;
         case 208:
                  url = 'https://stream.open.fm/55'
                  radio = 'Open Fm 500 Alternative Hits'
                  img = 'https://open.fm/logo/125x125/55'
                  strona = 'https://open.fm/play/55'
                  break;
         case 209:
                  url = 'https://stream.open.fm/6'
                  radio = 'Open Fm ALT Freszzz'
                  img = 'https://open.fm/logo/125x125/6'
                  strona = 'https://open.fm/play/6'
                  break;
         case 210:
                  url = 'https://stream.open.fm/9'
                  radio = 'Open Fm ALT Club'
                  img = 'https://open.fm/logo/125x125/9'
                  strona = 'https://open.fm/play/9'
                  break;
         case 211:
                  url = 'https://stream.open.fm/34'
                  radio = 'Open Fm ALT Cafe'
                  img = 'https://open.fm/logo/125x125/34'
                  strona = 'https://open.fm/play/34'
                  break;
         case 212:
                  url = 'https://stream.open.fm/36'
                  radio = 'Open Fm ALT PL'
                  img = 'https://open.fm/logo/125x125/36'
                  strona = 'https://open.fm/play/36'
                  break;
         case 213:
                  url = 'https://stream.open.fm/43'
                  radio = 'Open Fm ALT Classic'
                  img = 'https://open.fm/logo/125x125/43'
                  strona = 'https://open.fm/play/43'
                  break;
         case 214:
                  url = 'https://stream.open.fm/94'
                  radio = 'Open Fm 500 Electronic Hits'
                  img = 'https://open.fm/logo/125x125/94'
                  strona = 'https://open.fm/play/94'
                  break;
         case 215:
                  url = 'https://stream.open.fm/106'
                  radio = 'Open Fm Miejska Stacja'
                  img = 'https://open.fm/logo/125x125/106'
                  strona = 'https://open.fm/play/106'
                  break;
         case 216:
                  url = 'https://stream.open.fm/68'
                  radio = 'Open Fm Dubstep'
                  img = 'https://open.fm/logo/125x125/68'
                  strona = 'https://open.fm/play/68'
                  break;
         case 217:
                  url = 'https://stream.open.fm/41'
                  radio = 'Open Fm Drumn Bass'
                  img = 'https://open.fm/logo/125x125/41'
                  strona = 'https://open.fm/play/41'
                  break;
         case 218:
                  url = 'https://stream.open.fm/33'
                  radio = 'Open Fm Chillout'
                  img = 'https://open.fm/logo/125x125/33'
                  strona = 'https://open.fm/play/33'
                  break;
        case 219:
                  url = 'https://stream.open.fm/116'
                  radio = 'Open Fm Bieganie'
                  img = 'https://open.fm/logo/125x125/116'
                  strona = 'https://open.fm/play/116'
                  break;
        case 220:
                  url = 'https://stream.open.fm/65'
                  radio = 'Open Fm Fitness'
                  img = 'https://open.fm/logo/125x125/65'
                  strona = 'https://open.fm/play/65'
                  break;
        case 221:
                  url = 'https://stream.open.fm/101'
                  radio = 'Open Fm Trenicg'
                  img = 'https://open.fm/logo/125x125/101'
                  strona = 'https://open.fm/play/101'
                  break;
        case 222:
                  url = 'http://stream.open.fm/30'
                  radio = 'Open Fm 500 Reggae Hits'
                  img = 'https://open.fm/logo/125x125/30'
                  strona = '30'
                  break;
        case 223:
                  url = 'https://stream.open.fm/22'
                  radio = 'Open Fm Polish Reggae Stylee'
                  img = 'https://open.fm/logo/125x125/22'
                  strona = 'https://open.fm/play/22'
                  break;
        case 224:
                  url = 'https://stream.open.fm/25'
                  radio = 'Open Fm Retro Cafe'
                  img = 'https://open.fm/logo/125x125/25'
                  strona = 'https://open.fm/play/25'
                  break;
        case 225:
                  url = 'https://stream.open.fm/60'
                  radio = 'Open Fm Smooth Jazz'
                  img = 'https://open.fm/logo/125x125/60'
                  strona = 'https://open.fm/play/60'
                  break;
        case 226:
                  url = 'https://stream.open.fm/67'
                  radio = 'Open Fm Muzyka Klasyczna'
                  img = 'https://open.fm/logo/125x125/67'
                  strona = 'https://open.fm/play/67'
                  break;
        case 227:
                  url = 'https://stream.open.fm/38'
                  radio = 'Open Fm Muzyka Filmowa'
                  img = 'https://open.fm/logo/125x125/38'
                  strona = 'https://open.fm/play/38'
                  break;
        case 228:
                  url = 'https://stream.open.fm/37'
                  radio = 'Open Fm Kraina Łagodności'
                  img = 'https://open.fm/logo/125x125/37'
                  strona = 'https://open.fm/play/37'
                  break;
        case 229:
                  url = 'https://stream.open.fm/28'
                  radio = 'Open Fm Szanty'
                  img = 'https://open.fm/logo/125x125/28'
                  strona = 'https://open.fm/play/28'
                  break;
        case 230:
                  url = 'https://stream.open.fm/59'
                  radio = 'Open Fm Biesiada'
                  img = 'https://open.fm/logo/125x125/59'
                  strona = 'https://open.fm/play/59'
                  break;
        case 231:
                  url = 'https://stream.open.fm/66'
                  radio = 'Open Fm Biesiada Śląska'
                  img = 'https://open.fm/logo/125x125/66'
                  strona = 'https://open.fm/play/66'
                  break;
        case 232:
                  url = 'https://stream.open.fm/16'
                  radio = 'Open Fm Kids'
                  img = 'https://open.fm/logo/125x125/16'
                  strona = 'https://open.fm/play/16'
                  break;
        case 233:
                  url = 'https://stream.open.fm/52'
                  radio = 'Open Fm Odgłosy Natury'
                  img = 'https://open.fm/logo/125x125/52'
                  strona = 'https://open.fm/play/52'
                  break;
        case 234:
                  url = 'https://stream.open.fm/75'
                  radio = 'Open Fm Suumer Hits'
                  img = 'https://open.fm/logo/125x125/75'
                  strona = 'https://open.fm/play/75'
                  break;
                  default:
                  break;
            }
           
             }        
        if (check === '4') { 
                  switch(type4) {
                       case 235:
                            url = 'https://pl2-play.adtonos.com/zote-przeboje'
                            radio = 'Radio Zlote Przeboje'
                            img = 'https://cdn.onlineradiobox.com/img/l/0/1300.v5.png'
                            strona = 'https://zloteprzeboje.pl/'
                            break;
                   case 236:
                            url = 'https://n-15-13.dcs.redcdn.pl/sc/o2/Eurozet/live/audio.livx?audio=5'
                            radio = 'Radio Zet'
                            img = 'https://cdn.onlineradiobox.com/img/l/2/1312.v8.png'
                            strona = 'https://www.radiozet.pl/'
                            break;
                   case 237:
                            url = 'https://s2.radioparty.pl:8015/stream'
                            radio = 'RadioParty.pl'
                            img = "https://cdn.onlineradiobox.com/img/l/7/1797.v6.png"
                            strona = 'https://radioparty.pl/'
                            break; 
                   case 238:
                            url = 'https://sluchaj2.radiopark.biz.pl:8443/stream'
                            radio = 'Radio Park'
                            img = "https://cdn.onlineradiobox.com/img/l/7/1367.v3.png"
                            strona = 'https://radiopark.fm/'
                            break;  
                   case 239:
                            url = 'https://stream.radiopiekary.pl/'
                            radio = 'Radio Piekary'
                            img = 'https://cdn.onlineradiobox.com/img/l/1/1421.v6.png'
                            strona = 'https://radiopiekary.pl/'
            
                            break;      
                   case 240:
                            url = 'https://stream4.nadaje.com:8745/jard1'
                            radio = 'Radio Jard'
                            img = 'https://cdn.onlineradiobox.com/img/l/8/1768.v10.png'
                            strona = 'https://radio.jard.pl/'
                            break;
                   case 241:
                            url = 'https://streaming.radio.lublin.pl:8843/radiofreee'
                            radio = 'Radio Freee'
                            img = "https://cdn.onlineradiobox.com/img/l/7/1397.v2.png"
                            strona = 'https://radiofreee.pl/'
            
                            break;  
                   case 242:
                            url = 'http://stream2.nadaje.com:8076/;stream'
                            radio = 'Radio Fama'
                            img = 'https://cdn.onlineradiobox.com/img/l/5/46245.v3.png'
                            strona = 'https://radiofama.com.pl/'
                            break; 
                   case 243:
                            url = 'https://n23a-eu.rcs.revma.com/0004tehdxzzuv?rj-ttl=5&rj-tok=AAABgivw7PIAZhEDxPMf9wHwOg'
                            radio = 'Radio Nuta'
                            img = 'https://cdn.onlineradiobox.com/img/l/2/79762.v6.png'
                            strona = 'https://www.radionuta.pl/'
                            break;
                   case 244:
                            url = 'http://193.0.98.66:8005/;'
                            radio = 'Radio Kampus'
                            img = 'https://cdn.onlineradiobox.com/img/l/9/1399.v1.png'
                            strona = 'https://radiokampus.fm/'
                            break;
                   case 245:
                            url = 'https://stream10.hosterion.pl/8016/stream'
                            radio = 'Radio Max Hit Polska 1'
                            img = 'https://cdn.onlineradiobox.com/img/l/5/75735.v18.png'
                            strona = 'https://onlineradiobox.com/pl/marekg/'
                            break;
                   case 246:
                            url = 'https://n16a-eu.rcs.revma.com/1nnezw8qz7zuv?rj-ttl=5&rj-tok=AAABgiwAOeIAzkVhl1f3oG7tlQ'
                            radio = 'Radio Muzo FM'
                            img = 'https://cdn.onlineradiobox.com/img/l/8/1788.v3.png'
                            strona = 'https://www.muzo.fm/'
                            break;
                    default:
                    break;
                  }}
           Audio.connectToVoice(channel);
           const options = {};
           options.seek = '0'
           options.volume = parseInt('100') / 100
           options.bitrate = '1000'
             const info = ["url", options, url];
             if (interaction) Audio.addAudio(info, interaction.guild, false);
             
             const embed = new MessageEmbed()
                .setTitle('Radio')
                .setColor('RANDOM')
                .setDescription(`Słuchasz aktualnie stacji [${radio}](${strona})`)
                .setThumbnail(img)
                if (interaction) interaction.reply({ embeds: [embed] }) 
        
            this.callNextAction(cache);
            },
        
          mod() {},
      
        };