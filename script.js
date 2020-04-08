let tablebody = ""

function myFunction() {
  var input, filter, ul1, ul2, ul3, li1, li2, li3, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul1 = document.getElementById("myUL");
  ul2 = document.getElementById("myULMR");
  ul3 = document.getElementById("myULSR");
  li1 = ul1.getElementsByTagName("li");
  li2 = ul2.getElementsByTagName("li");
  li3 = ul3.getElementsByTagName("li");
  for (i = 0; i < li1.length; i++) {
    a = li1[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li1[i].style.display = "";
    } else {
      li1[i].style.display = "none";
    }
  }
  for (i = 0; i < li2.length; i++) {
    a = li2[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li2[i].style.display = "";
    } else {
      li2[i].style.display = "none";
    }
  }
  for (i = 0; i < li3.length; i++) {
    a = li3[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li3[i].style.display = "";
    } else {
      li3[i].style.display = "none";
    }
  }
}
let joblist;
const weaponstring = [
  ["Jadeite", "Azurite", "Charoite", "Citrine"],
  ["Axe", "Sword", "Greatsword", "Fists", "Spear", "Ninja Blade", "Bow", "Gun", "Staff", "Mace", "Dagger", "Katana"]
]
// let weaponnum = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]
let faintmemory = [0, 0, 0, 0]
const statue = [
  ["Praying Angel Statue", "Prowling Wyvern Statue"],
  ["Green", "Blue", "Purple", "Yellow"]
]
let statuenum = [
  [0, 0, 0, 0],
  [0, 0]
]

let materialNeed = [];

let locationResults = [
  ["111", 0],
  ["112", 0],
  ["113", 0],
  ["114", 0],
  ["115", 0],
  ["116", 0],
  ["117", 0],
  ["118", 0],
  ["119", 0],
  ["1110", 0],
  ["121", 0],
  ["122", 0],
  ["123", 0],
  ["124", 0],
  ["125", 0],
  ["126", 0],
  ["127", 0],
  ["128", 0],
  ["129", 0],
  ["1210", 0],
  ["131", 0],
  ["132", 0],
  ["133", 0],
  ["134", 0],
  ["135", 0],
  ["136", 0],
  ["137", 0],
  ["138", 0],
  ["139", 0],
  ["1310", 0],
  ["211", 0],
  ["212", 0],
  ["213", 0],
  ["214", 0],
  ["215", 0],
  ["216", 0],
  ["217", 0],
  ["218", 0],
  ["219", 0],
  ["2110", 0],
  ["221", 0],
  ["222", 0],
  ["223", 0],
  ["224", 0],
  ["225", 0],
  ["226", 0],
  ["227", 0],
  ["228", 0],
  ["229", 0],
  ["2210", 0],
  ["231", 0],
  ["232", 0],
  ["233", 0],
  ["234", 0],
  ["235", 0],
  ["236", 0],
  ["237", 0],
  ["238", 0],
  ["239", 0],
  ["2310", 0],
  ["311", 0],
  ["312", 0],
  ["313", 0],
  ["314", 0],
  ["315", 0],
  ["316", 0],
  ["317", 0],
  ["318", 0],
  ["319", 0],
  ["3110", 0],
  ["321", 0],
  ["322", 0],
  ["323", 0],
  ["324", 0],
  ["325", 0],
  ["326", 0],
  ["327", 0],
  ["328", 0],
  ["329", 0],
  ["3210", 0],
  ["331", 0],
  ["332", 0],
  ["333", 0],
  ["334", 0],
  ["335", 0],
  ["336", 0],
  ["337", 0],
  ["338", 0],
  ["339", 0],
  ["3310", 0],
  ["411", 0],
  ["412", 0],
  ["413", 0],
  ["414", 0],
  ["415", 0],
  ["416", 0],
  ["417", 0],
  ["418", 0],
  ["419", 0],
  ["4110", 0],
  ["421", 0],
  ["422", 0],
  ["423", 0],
  ["424", 0],
  ["425", 0],
  ["426", 0],
  ["427", 0],
  ["428", 0],
  ["429", 0],
  ["4210", 0],
  ["431", 0],
  ["432", 0],
  ["433", 0],
  ["434", 0],
  ["435", 0],
  ["436", 0],
  ["437", 0],
  ["438", 0],
  ["439", 0],
  ["4310", 0],
  ["511", 0],
  ["512", 0],
  ["513", 0],
  ["514", 0],
  ["515", 0],
  ["516", 0],
  ["517", 0],
  ["518", 0],
  ["519", 0],
  ["5110", 0]
]

const materialLocation = [
  //Alcryst
  ["Dark Alcryst (Green)", "118", "126"],
  ["Dark Alcryst (Blue)", "134", "213", "221", "229"],
  ["Dark Alcryst (Purple)", "237", "315", "323", "331", "339", "417", "422"],
  ["Dark Alcryst (Yellow)", "433", "4310", "512", "510"],

  ["Wind Alcryst (Green)", "113", "121", "129"],
  ["Wind Alcryst (Blue)", "137", "216", "224"],
  ["Wind Alcryst (Purple)", "232", "2310", "318", "331", "326", "334", "412", "423", "428"],
  ["Wind Alcryst (Yellow)", "435", "515"],

  ["Ice Alcryst (Green)", "112", "1110", "128"],
  ["Ice Alcryst (Blue)", "136", "215", "223"],
  ["Ice Alcryst (Purple)", "231", "239", "317", "325", "333", "3310", "419", "427"],
  ["Ice Alcryst (Yellow)", "433", "4310", "512", "510"],

  ["Fire Alcryst (Green)", "114", "122", "1210"],
  ["Fire Alcryst (Blue)", "138", "217", "225"],
  ["Fire Alcryst (Purple)", "233", "311", "319", "327", "411", "415", "4110", "429"],
  ["Fire Alcryst (Yellow)", "437", "516"],

  ["Water Alcryst (Green)", "118", "126"],
  ["Water Alcryst (Blue)", "132", "211", "219", "227"],
  ["Water Alcryst (Purple)", "235", "313", "321", "329", "337", "413", "421"],
  ["Water Alcryst (Yellow)", "431", "439", "518"],

  ["Lightning Alcryst (Green)", "115", "123"],
  ["Lightning Alcryst (Blue)", "131", "1310", "218", "226"],
  ["Lightning Alcryst (Purple)", "234", "312", "3110", "328", "336", "414", "425", "4210"],
  ["Lightning Alcryst (Yellow)", "438", "517"],

  ["Earth Alcryst (Green)", "111", "119", "127"],
  ["Earth Alcryst (Blue)", "135", "214", "222", "2210"],
  ["Earth Alcryst (Purple)", "238", "316", "324", "332", "335", "418", "426"],
  ["Earth Alcryst (Yellow)", "434", "513"],

  ["Light Alcryst (Green)", "117", "125"],
  ["Light Alcryst (Blue)", "133", "212", "2110", "228"],
  ["Light Alcryst (Purple)", "236", "314", "322", "3210", "338", "416", "424"],
  ["Light Alcryst (Yellow)", "432", "511", "519"],

  // Weapon
  ["Axe Jadeite", "114", "118", "125", "128" ],
  ["Axe Azurite", "138", "1310", "213", "210", "227"],
  ["Axe Charoite",  "234", "2310", "313", "3110", "327", "333", "3310", "415", "419", "427"],
  ["Axe Citrine", "434", "439", "514"],

  ["Sword Jadeite", "111", "115", "122", "126"],
  ["Sword Azurite", "131", "135", "212", "217", "223", "228"],
  ["Sword Charoite", "231", "239", "312", "3110", "323", "331", "334", "412", "415", "423", "426"],
  ["Sword Citrine", "431", "438", "512", "519"],

  ["Greatsword Jadeite", "112", "116", "123", "127"],
  ["Greatsword Azurite", "132", "136", "213", "218", "224", "229"],
  ["Greatsword Charoite", "232", "2310", "313", "321", "324", "332", "335", "413", "416", "424", "427"],
  ["Greatsword Citrine", "432", "439", "513", "5110"],

  ["Bow Jadeite", "111", "118", "122", "129"],
  ["Bow Azurite", "131", "135", "212", "217", "223", "228"],
  ["Bow Charoite", "235", "238", "316", "319", "327", "3210", "338", "411", "419", "422", "4210"],
  ["Bow Citrine", "434", "438", "515", "519"],

  ["Fists Jadeite", "114", "118", "125", "129"],
  ["Fists Azurite", "134", "138", "215", "2110", "226"],
  ["Fists Charoite", "231", "234", "312", "315", "323", "326", "334", "415", "418", "426", "429"],
  ["Fists Citrine", "434", "511", "515"],

  ["Spear Jadeite", "115", "119", "126", "1210"],
  ["Spear Azurite", "135", "1310", "216", "221", "227"],
  ["Spear Charoite", "232", "235", "313", "316", "324", "327", "335", "338", "416", "419", "427", "4210"],
  ["Spear Citrine", "431", "435", "512", "516"],

  ["Gun Jadeite", "112", "119", "123", "1210"],
  ["Gun Azurite", "132", "1310", "214", "2110", "225"],
  ["Gun Charoite", "236", "239", "317", "3110", "328", "331", "339", "412", "4110", "412"],
  ["Gun Citrine", "435", "439", "516", "5110"],

  ["Dagger Jadeite", "116", "1110", "127"],
  ["Dagger Azurite", "136", "211", "217", "222", "228"],
  ["Dagger Charoite", "233", "236", "314", "325", "328", "336", "338", "339", "417", "4110", "428"],
  ["Dagger Citrine", "432", "436", "4310", "513", "517"],

  ["Staff Jadeite", "113", "1110", "124"],
  ["Staff Azurite", "133", "211", "215", "221", "226"],
  ["Staff Charoite", "237", "2310", "318", "321", "329", "332", "3310", "413", "421", "424"],
  ["Staff Citrine", "436", "4310", "517"],

  ["Katana Jadeite", "113", "117", "124", "128"],
  ["Katana Azurite", "133", "137", "214", "219", "225", "2210"],
  ["Katana Charoite", "233", "311", "314", "322", "325", "333", "336", "414", "417", "425", "428"],
  ["Katana Citrine", "433", "514"],

  ["Mace Jadeite", "114", "121", "125"],
  ["Mace Azurite", "134", "216", "222", "227"],
  ["Mace Charoite", "238", "311", "319", "322", "3210", "333", "411", "414", "422", "425"],
  ["Mace Citrine", "437", "511", "518"],

  ["Ninja Blade Jadeite", "117", "121", "128"],
  ["Ninja Blade Azurite", "137", "212", "218", "223", "229"],
  ["Ninja Blade Charoite", "234", "237", "315", "318", "329", "337", "3310", "418", "421", "429"],
  ["Ninja Blade Citrine", "433", "437", "514", "518"],

  // job
  ["Viking's Memory (Green)", "116", "125"],
  ["Viking's Memory (Blue)", "135", "215", "225"],
  ["Viking's Memory (Purple)",  "235", "315", "325", "335", "415", "425"],
  ["Viking's Memory (Yellow)", "435",  "515"],

  ["Knight's Memory (Green)", "112", "121"],
  ["Knight's Memory (Blue)", "132", "212", "221"],
  ["Knight's Memory (Purple)", "231", "312", "3110", "332", "339", "422", "428"],
  ["Knight's Memory (Yellow)", "431", "511"],

  ["Warrior's Memory (Green)", "111", "1110", "1210"],
  ["Warrior's Memory (Blue)", "131", "211", "2110", "2210"],
  ["Warrior's Memory (Purple)", "311", "319", "331", "338", "421", "427", "4210"],
  ["Warrior's Memory (Yellow)", "4310", "5110"],

  ["Soldier's Memory (Green)", "114", "123"],
  ["Soldier's Memory (Blue)", "134", "212", "224"],
  ["Soldier's Memory (Purple)", "233", "314", "322", "334", "411", "424"],
  ["Soldier's Memory (Yellow)", "433", "513"],

  ["Ranger's Memory (Green)", "111", "121", "1210"],
  ["Ranger's Memory (Blue)", "131", "221", "222"],
  ["Ranger's Memory (Purple)", "231", "2310", "321", "329", "411", "418"],
  ["Ranger's Memory (Yellow)", "431", "4310", "511", "5110"],

  ["Monk's Memory (Green)", "115", "124"],
  ["Monk's Memory (Blue)", "135", "215", "225"],
  ["Monk's Memory (Purple)", "234", "2310", "315", "323", "335", "412", "425"],
  ["Monk's Memory (Yellow)", "434", "514"],

  ["Gunner's Memory (Green)", "112", "122"],
  ["Gunner's Memory (Blue)", "132", "212", "222"],
  ["Gunner's Memory (Purple)", "232", "311", "322", "3210", "412", "419"],
  ["Gunner's Memory (Yellow)", "432", "512"],

  ["Lancer's Memory (Green)", "117", "126"],
  ["Lancer's Memory (Blue)", "137", "217", "227"],
  ["Lancer's Memory (Purple)", "236", "317", "325", "337", "414", "427"],
  ["Lancer's Memory (Yellow)", "436", "516"],

  ["Thief's Memory (Green)", "119", "128"],
  ["Thief's Memory (Blue)", "1310", "219", "229"],
  ["Thief's Memory (Purple)", "238", "319", "327", "339", "416", "429"],
  ["Thief's Memory (Yellow)", "438", "518"],

  ["White Mage's Memory (Green)", "113", "123"],
  ["White Mage's Memory (Blue)", "133", "213", "223"],
  ["White Mage's Memory (Purple)", "233", "312", "323", "331", "413", "4110"],
  ["White Mage's Memory (Yellow)", "433", "513"],

  ["Black Mage's Memory (Green)", "114", "124"],
  ["Black Mage's Memory (Blue)", "134", "214", "224"],
  ["Black Mage's Memory (Purple)", "234", "313", "324", "332", "414", "421"],
  ["Black Mage's Memory (Yellow)", "434", "514"],

  ["Red Mage's Memory (Green)", "115", "125"],
  ["Red Mage's Memory (Blue)", "135", "215", "225"],
  ["Red Mage's Memory (Purple)", "235", "314", "325", "333", "415", "422"],
  ["Red Mage's Memory (Yellow)", "435", "515"],

  ["Green Mage's Memory (Green)", "116", "126"],
  ["Green Mage's Memory (Blue)", "136", "216", "226"],
  ["Green Mage's Memory (Purple)", "236", "315", "326", "334", "416", "423"],
  ["Green Mage's Memory (Yellow)", "436", "516"],

  ["Time Mage's Memory (Green)", "117", "127"],
  ["Time Mage's Memory (Blue)", "137", "217", "227"],
  ["Time Mage's Memory (Purple)", "237", "316", "327", "335", "417", "424"],
  ["Time Mage's Memory (Yellow)", "437", "517"],

  ["Samurai's Memory (Green)", "116", "125"],
  ["Samurai's Memory (Blue)", "136", "216", "226"],
  ["Samurai's Memory (Purple)", "235", "316", "324", "336", "413", "4110", "426"],
  ["Samurai's Memory (Yellow)", "435", "515"],

  ["Paladin's Memory (Green)", "113", "122"],
  ["Paladin's Memory (Blue)", "133", "213", "223"],
  ["Paladin's Memory (Purple)", "232", "313", "321", "333", "3310", "423", "429"],
  ["Paladin's Memory (Yellow)", "432", "512"],

  ["Spellblade's Memory (Green)", "118", "128"],
  ["Spellblade's Memory (Blue)", "138", "218", "228"],
  ["Spellblade's Memory (Purple)", "238", "317", "328", "336", "418", "425"],
  ["Spellblade's Memory (Yellow)", "438", "518"],

  ["Cleric's Memory (Green)", "119", "129"],
  ["Cleric's Memory (Blue)", "1310", "219", "229"],
  ["Cleric's Memory (Purple)", "239", "318", "329", "337", "419", "426"],
  ["Cleric's Memory (Yellow)", "439", "519"],

  ["Ninja's Memory (Green)", "1110", "129"],
  ["Ninja's Memory (Blue)", "211", "2110", "2210"],
  ["Ninja's Memory (Purple)", "239", "3110", "328", "3310", "417", "4210"],
  ["Ninja's Memory (Yellow)", "439", "519"],

  ["Dragoon's Memory (Green)", "118", "127"],
  ["Dragoon's Memory (Blue)", "138", "218", "228"],
  ["Dragoon's Memory (Purple)", "237", "318", "326", "3210", "338", "415", "428"],
  ["Dragoon's Memory (Yellow)", "437", "517"],

  ["Winged One's Memory (Green)", "1110", "1210"],
  ["Winged One's Memory (Blue)", "211", "2110", "2210"],
  ["Winged One's Memory (Purple)", "2310", "3110", "3210", "3310", "4110", "4210"],
  ["Winged One's Memory (Yellow)", "4310", "5110"],

  ["Praying Angel Statue (Green)", "111", "113", "115", "117", "119", "121", "123", "125", "127", "129"],
  ["Praying Angel Statue (Blue)", "131", "133", "135", "137", "211", "213", "215", "217", "219", "221", "223", "225", "227", "229"],
  ["Praying Angel Statue (Purple)", "231", "233", "235", "237", "239", "311", "313", "315", "317", "319", "321", "323", "325", "327", "329", "331", "333", "335", "337", "339", "411", "413", "415", "417", "419", "421", "423", "425", "427", "429"],
  ["Praying Angel Statue (Yellow)", "431", "433", "435", "437", "439", "511", "513", "515", "517", "519"],

  ["Prowling Wyvern Statue (Green)", "112", "114", "116", "118", "1110", "122", "124", "126", "128", "1210"],
  ["Prowling Wyvern Statue (Blue)", "132", "134", "136", "138", "1310", "212", "214", "216", "218", "2110", "222", "224", "226", "228", "2210"],
  ["Prowling Wyvern Statue (Purple)", "232", "234", "236", "238", "2310", "312", "314", "316", "318", "3110", "322", "324", "326", "328", "3210", "332", "334", "336", "338", "3310", "412", "414", "416", "418", "4110", "422", "424", "426", "428", "4210"],
  ["Prowling Wyvern Statue (Yellow)", "432", "434", "436", "438", "4310", "512", "514", "516", "518", "5110"]

]
const jobnames = ["Warrior", "Knight", "Soldier", "Ranger", "Monk", "Lancer", "Gunner", "Thief", "White Mage", "Black Mage", "Red Mage", "Green Mage", "Samurai", "Paladin", "Time Mage", "Spellblade", "Cleric", "Ninja", "Dragoon", "Winged One", "Gunbreaker", "Sorceress", "Lord", "White Mage of Lapis", "Holy Swordsman (unreleased)", "Viking", "Apprentice Warrior (unrelease)", "Dark Knight (unreleased)", "Double Gunner (unreleased)", "Assassin (unreleased)", "Grandshelt Knight (unreleased)", "Light Warrior (unreleased)", "Magician (unreleased)"]

let totalJobMemory = [
  ["Viking", 0, 0, 0, 0],
  ["Warrior", 0, 0, 0, 0],
  ["Knight", 0, 0, 0, 0],
  ["Soldier", 0, 0, 0, 0],
  ["Ranger", 0, 0, 0, 0],
  ["Monk", 0, 0, 0, 0],
  ["Lancer", 0, 0, 0, 0],
  ["Gunner", 0, 0, 0, 0],
  ["Thief", 0, 0, 0, 0],
  ["White Mage", 0, 0, 0, 0],
  ["Black Mage", 0, 0, 0, 0],
  ["Red Mage", 0, 0, 0, 0],
  ["Green Mage", 0, 0, 0, 0],
  ["Samurai", 0, 0, 0, 0],
  ["Paladin", 0, 0, 0, 0],
  ["Time Mage", 0, 0, 0, 0],
  ["Spellblade", 0, 0, 0, 0],
  ["Cleric", 0, 0, 0, 0],
  ["Ninja", 0, 0, 0, 0],
  ["Dragoon", 0, 0, 0, 0],
  ["Winged One", 0, 0, 0, 0],
  ["Gunbreaker", 0, 0, 0, 0],
  ["Sorceress", 0, 0, 0, 0]
]

let totalElement = [
  ["Fire", 0, 0, 0, 0],
  ["Ice", 0, 0, 0, 0],
  ["Wind", 0, 0, 0, 0],
  ["Earth", 0, 0, 0, 0],
  ["Lightning", 0, 0, 0, 0],
  ["Water", 0, 0, 0, 0],
  ["Light", 0, 0, 0, 0],
  ["Dark", 0, 0, 0, 0]
]
let elementalUnit = [
  ["Etre","Earth"],
  ["Yerma","Wind"],
  ["Nasha","Ice"],
  ["Thancred", "Light"],
  ["Gilgamesh", "Ice"],
  ["Macherie", "Light"],
  ["Engelbert", "Light"],
  ["Mediena", "Ice"],
  ["Rob", "Light"],
  ["Ayaka", "Wind"],
  ["Oelde", "Fire"],
  ["Aileen", "Earth"],
  ["Xiza", "Dark"],
  ["Sterne", "Dark"],
  ["Frederika", "Lightning"],
  ["Mont", "Earth"],
  ["Helena", "Wind"],
  ["Lilyth", "Fire"],
  ["Ramada", "Water"],
  ["Grace", "Light"],
  ["Khury", "Ice"],
  ["Rairyuu", "Dark"],
  ["Owe", "Lightning"],
  ["Lorenzo", "Earth"],
  ["Schuzelt", "Lightning"],
  ["YShtola", "Fire"],
  ["Margritte", "Fire"],
  ["Meriluke", "Lightning"],
  ["Cadia", "Wind"],
  ["Fina", "Light"],
  ["Vistralle", "Light"],
  ["Shadowlynx", "Dark"],
  ["Vallaide", "Ice"],
  ["Severo", "Water"],
  ["Naiah", "Fire"],
  ["Sosha", "Wind"],
  ["Serjes", "Ice"],
  ["Phoebe", "Light"],
  ["Murmur", "Earth"],
  ["Baelo", "Earth"],
  ["Vadim", "Lightning"],
  ["Yuni", "Water"],
  ["Mia", "Wind"],
  ["Miche", "Fire"],
  ["Learte", "Lightning"],
  ["Zazan", "Water"]
]

let char = []
let oldchar = []
let i;

let unitx5 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

let totalMemory = [0, 0, 0, 0]

let totalWeapon = [
  ["Axe", 0, 0, 0, 0],
  ["Sword", 0, 0, 0, 0],
  ["Greatsword", 0, 0, 0, 0],
  ["Bow", 0, 0, 0, 0],
  ["Fists", 0, 0, 0, 0],
  ["Spear", 0, 0, 0, 0],
  ["Gun", 0, 0, 0, 0],
  ["Dagger", 0, 0, 0, 0],
  ["Staff", 0, 0, 0, 0],
  ["Katana", 0, 0, 0, 0],
  ["Mace", 0, 0, 0, 0],
  ["Ninja Blade", 0, 0, 0, 0]
]

let totalStatues = [
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
let weapons = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
let statues = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
let jobOrbs = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

function arrayPush(array, string) { // push locationResults[] to add materials to locations when a match is found
  array.indexOf(string) === -1 ? array.push(string) : console.log("This item already exists");
}

function getJobMaterials(jobname, a, b) {
  if (jobname == "Viking") {
    statues[a][b] = "Wyvern";
    weapons[a][b] = "Axe";
    jobOrbs[a][b] = "Viking";
  }
  if (jobname == "Warrior") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Warrior";
  }
  if (jobname == "Knight") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Knight";
  }
  if (jobname == "Soldier") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Greatsword";
    jobOrbs[a][b] = "Soldier";
  }
  if (jobname == "Ranger") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Bow";
    jobOrbs[a][b] = "Ranger";
  }
  if (jobname == "Monk") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Fists";
    jobOrbs[a][b] = "Monk";
  }
  if (jobname == "Lancer") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Spear";
    jobOrbs[a][b] = "Lancer";
  }
  if (jobname == "Gunner") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Gun";
    jobOrbs[a][b] = "Gunner";
  }
  if (jobname == "Thief") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Dagger";
    jobOrbs[a][b] = "Thief";
  }
  if (jobname == "White Mage") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] = "White Mage";
  }
  if (jobname == "Black Mage") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] = "Black Mage";
  }
  if (jobname == "Red Mage") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Red Mage";
  }
  if (jobname == "Green Mage") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] = "Green Mage";
  }
  if (jobname == "Samurai") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Katana";
    jobOrbs[a][b] = "Samurai";
  }
  if (jobname == "Paladin") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Paladin";
  }
  if (jobname == "Time Mage") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] = "Time Mage";
  }
  if (jobname == "Spellblade") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Spellblade";
  }
  if (jobname == "Cleric") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Mace";
    jobOrbs[a][b] = "Cleric";
  }
  if (jobname == "Ninja") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Ninja Blade";
    jobOrbs[a][b] = "Ninja";
  }
  if (jobname == "Dragoon") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Spear";
    jobOrbs[a][b] = "Dragoon";
  }
  if (jobname == "Winged One") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Winged One";
  }
  if (jobname == "Gunbreaker") {
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Gunbreaker";
  }
  if (jobname == "Sorceress") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] = "Sorceress";
  }
  if (jobname == "Lord") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] = "Warrior";
  }
  if (jobname == "White Mage of Lapis") {
    statues[a][b] = "Angel";
    weapons[a][b] = "Bow";
    jobOrbs[a][b] = "White Mage";
  }


  // add more jobs here
}

function getJobs(name, array) {
  if (name == "Etre") {
    array[0] = "Monk";
    array[1] = "Cleric";
    array[2] = "Knight";
  }
  if (name == "Yerma") {
    array[0] = "Viking";
    array[1] = "Knight";
    array[2] = "Thief";
  }
  if (name == "Nasha") {
    array[0] = "Paladin";
    array[1] = "White Mage";
    array[2] = "Dragoon";
  }
  if (name == "Thancred") {
    array[0] = "Gunbreaker";
    array[1] = "Dragoon";
    array[2] = "Red Mage";
  }
  if (name == "Gilgamesh") {
    array[0] = "Winged One";
    array[1] = "Time Mage";
    array[2] = "Soldier";
  }
  if (name == "Macherie") {
    array[0] = "Cleric";
    array[1] = "Monk";
    array[2] = "Black Mage";
  }
  if (name == "Engelbert") {
    array[0] = "Paladin";
    array[1] = "Knight";
    array[2] = "Monk";
  }
  if (name == "Mediena") {
    array[0] = "Black Mage";
    array[1] = "Green Mage";
    array[2] = "Ninja";
  }
  if (name == "Rob") {
    array[0] = "Samurai";
    array[1] = "Soldier";
    array[2] = "Lancer";
  }
  if (name == "Ayaka") {
    array[0] = "White Mage";
    array[1] = "Time Mage";
    array[2] = "Green Mage";
  }
  if (name == "Oelde") {
    array[0] = "Lancer";
    array[1] = "Monk";
    array[2] = "Samurai";
  }
  if (name == "Aileen") {
    array[0] = "Lancer";
    array[1] = "Warrior";
    array[2] = "Soldier";
  }
  if (name == "Xiza") {
    array[0] = "Monk";
    array[1] = "Thief";
    array[2] = "Lancer";
  }
  if (name == "Sterne") {
    array[0] = "Soldier";
    array[1] = "Dragoon";
    array[2] = "Ninja";
  }
  if (name == "Frederika") {
    array[0] = "Gunner";
    array[1] = "Ninja";
    array[2] = "Ranger";
  }
  if (name == "Mont") {
    array[0] = "Lord";
    array[1] = "Paladin";
    array[2] = "Knight";
  }
  if (name == "Helena") {
    array[0] = "Green Mage";
    array[1] = "Time Mage";
    array[2] = "White Mage";
  }
  if (name == "Lilyth") {
    array[0] = "Knight";
    array[1] = "Soldier";
    array[2] = "Ranger";
  }
  if (name == "Ramada") {
    array[0] = "Lancer";
    array[1] = "Spellblade";
    array[2] = "Thief";
  }
  if (name == "Grace") {
    array[0] = "White Mage";
    array[1] = "Green Mage";
    array[2] = "Lancer";
  }
  if (name == "Khury") {
    array[0] = "Ranger";
    array[1] = "Dragoon";
    array[2] = "Green Mage";
  }
  if (name == "Rairyuu") {
    array[0] = "Gunner";
    array[1] = "Thief";
    array[2] = "Red Mage";
  }
  if (name == "Owe") {
    array[0] = "Samurai";
    array[1] = "Warrior";
    array[2] = "Ninja";
  }
  if (name == "Lorenzo") {
    array[0] = "Dragoon";
    array[1] = "Lancer";
    array[2] = "Time Mage";
  }
  if (name == "Schuzelt") {
    array[0] = "Soldier";
    array[1] = "Knight";
    array[2] = "Ranger";
  }
  if (name == `YShtola`) {
    array[0] = "Sorceress";
    array[1] = "White Mage";
    array[2] = "Green Mage";
  }
  if (name == "Margritte") {
    array[0] = "Time Mage";
    array[1] = "Black Mage";
    array[2] = "Red Mage";
  }
  if (name == "Meriluke") {
    array[0] = "Monk";
    array[1] = "Knight";
    array[2] = "Green Mage";
  }
  if (name == "Cadia") {
    array[0] = "Cleric";
    array[1] = "White Mage";
    array[2] = "Spellblade";
  }
  if (name == "Fina") {
    array[0] = "White Mage of Lapis";
    array[1] = "Gunner";
    array[2] = "Cleric";
  }
  if (name == "Vistralle") {
    array[0] = "Thief";
    array[1] = "Red Mage";
    array[2] = "Soldier";
  }
  if (name == "Shadowlynx") {
    array[0] = "Ninja";
    array[1] = "Dragoon";
    array[2] = "Samurai";
  }
  if (name == "Vallaide") {
    array[0] = "Green Mage";
    array[1] = "White Mage";
    array[2] = "Red Mage";
  }
  if (name == "Severo") {
    array[0] = "Black Mage";
    array[1] = "Red Mage";
    array[2] = "Monk";
  }
  if (name == "Naiah") {
    array[0] = "White Mage";
    array[1] = "Cleric";
    array[2] = "Red Mage";
  }
  if (name == "Sosha") {
    array[0] = "Dragoon";
    array[1] = "Warrior";
    array[2] = "Ranger";
  }
  if (name == "Serjes") {
    array[0] = "Lancer";
    array[1] = "Paladin";
    array[2] = "Cleric";
  }
  if (name == "Phoebe") {
    array[0] = "Time Mage";
    array[1] = "Dragoon";
    array[2] = "White Mage";
  }
  if (name == "Murmur") {
    array[0] = "Red Mage";
    array[1] = "Black Mage";
    array[2] = "Lancer";
  }
  if (name == "Baelo") {
    array[0] = "Knight";
    array[1] = "Warrior";
    array[2] = "Paladin";
  }
  if (name == "Vadim") {
    array[0] = "Thief";
    array[1] = "Warrior";
    array[2] = "Samurai";
  }
  if (name == "Yuni") {
    array[0] = "Ranger";
    array[1] = "Black Mage";
    array[2] = "Spellblade";
  }
  if (name == "Mia") {
    array[0] = "Thief";
    array[1] = "Cleric";
    array[2] = "Spellblade";
  }
  if (name == "Miche") {
    array[0] = "Black Mage";
    array[1] = "Thief";
    array[2] = "Ranger";
  }
  if (name == "Learte") {
    array[0] = "Ranger";
    array[1] = "Lancer";
    array[2] = "White Mage";
  }
  if (name == "Zazan") {
    array[0] = "Warrior";
    array[1] = "Knight";
    array[2] = "Thief";
  }
  // add more jobs here
}

function calculateWeapon(array, n) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 3; i++) {
    for (x = array[i][0]; x < array[i][1]; x++) {
      for (y = 0; y < totalWeapon.length; y++) {
        if (weapons[n][i] == totalWeapon[y][0]) {
          weaponPerLevel(x + 1, y)
        }


      }

    }
  }
}

function weaponPerLevel(level, n) { // n = type of element
  if (level == 2) {
    totalWeapon[n][1] += 5;
  }
  if (level == 3) {
    totalWeapon[n][1] += 10;
  }
  if (level == 4) {
    totalWeapon[n][2] += 5;
  }
  if (level == 5) {
    totalWeapon[n][2] += 10;
  }
  if (level == 6) {
    totalWeapon[n][2] += 15;
  }
  if (level == 7) {
    totalWeapon[n][3] += 5;
  }
  if (level == 8) {
    totalWeapon[n][3] += 10;
  }
  if (level == 9) {
    totalWeapon[n][3] += 15;
  }
  if (level == 10) {
    totalWeapon[n][4] += 5;
  }
  if (level == 11) {
    totalWeapon[n][4] += 10;
  }
  if (level == 12) {
    totalWeapon[n][4] += 15;
  }
}

function getElement(name) {
  for (i = 0; i < elementalUnit.length; i++) {
    if (name == elementalUnit[i][0]) {
      return elementalUnit[i][1];

    }
  }
}

function elementPerLevel(level, n) { // n = type of element
  if (level == 2) {
    totalElement[n][1] += 10;
  }
  if (level == 3) {
    totalElement[n][1] += 20;
  }
  if (level == 4) {
    totalElement[n][2] += 10;
  }
  if (level == 5) {
    totalElement[n][2] += 20;
  }
  if (level == 6) {
    totalElement[n][2] += 40;
  }
  if (level == 7) {
    totalElement[n][3] += 10;
  }
  if (level == 8) {
    totalElement[n][3] += 20;
  }
  if (level == 9) {
    totalElement[n][3] += 40;
  }
  if (level == 10) {
    totalElement[n][4] += 10;
  }
  if (level == 11) {
    totalElement[n][4] += 20;
  }
  if (level == 12) {
    totalElement[n][4] += 40;
  }
}

function calculateElement(array, a) {
  let x = 0;
  let y = 0;
  let element = getElement(char[a]);
  for (i = 0; i < 3; i++) {
    for (x = array[i][0]; x < array[i][1]; x++) {
      for (y = 0; y < 8; y++) {
        if (element == totalElement[y][0]) {
          elementPerLevel(x + 1, y)
        }

      }

    }
  }
}

function calculateMemory(array) { //unit 1 array = u1Job
  let x = 0;
  for (i = 0; i < 3; i++) {
    for (x = array[i][0]; x < array[i][1]; x++) {
      memoryPerLevel(x + 1);
    }
  }
}


function calculateJobMemory(array, a) {
  let x = 0;
  let y = 0;
  for (i = 0; i < 3; i++) {
    for (x = array[i][0]; x < array[i][1]; x++) {
      for (y = 0; y < totalJobMemory.length; y++) {
        if (jobOrbs[a][i] == totalJobMemory[y][0]) {
          if (x + 1 == 3) {
            totalJobMemory[y][1] += 1;
          }
          if (x + 1 == 6) {
            totalJobMemory[y][2] += 2;
          }
          if (x + 1 == 9) {
            totalJobMemory[y][3] += 3;
          }
          if (x + 1 == 12) {
            totalJobMemory[y][4] += 4;
          }
        }
      }

    }
  }
}

function calculateStatues(array, a) { //unit 1 array = u1Job, a = unit, to be used with another array
  let x = 0;
  let number = 0;
  for (i = 0; i < 3; i++) {
    for (x = array[i][0]; x < array[i][1]; x++) {
      if (statues[a][i] == "Angel") {
        number = 0;
      } else {
        number = 1;
      }
      statuePerLevel(x + 1, number);
    }
  }
}

function statuePerLevel(level, number) { //first is level, 0 = angel, 1 = dragon
  let n = 0;
  if (number == 1) {
    n = 1
  }
  if (level == 2) {
    totalStatues[n][0] += 1;
  }
  if (level == 3) {
    totalStatues[n][0] += 2;
  }
  if (level == 4) {
    totalStatues[n][1] += 1;
  }
  if (level == 5) {
    totalStatues[n][1] += 2;
  }
  if (level == 6) {
    totalStatues[n][1] += 3;
  }
  if (level == 7) {
    totalStatues[n][2] += 1;
  }
  if (level == 8) {
    totalStatues[n][2] += 2;
  }
  if (level == 9) {
    totalStatues[n][2] += 3;
  }
  if (level == 10) {
    totalStatues[n][3] += 1;
  }
  if (level == 11) {
    totalStatues[n][3] += 2;
  }
  if (level == 12) {
    totalStatues[n][3] += 3;
  }
}

function memoryPerLevel(number) {
  if (number == 2) {
    totalMemory[0] += 10;
  }
  if (number == 4) {
    totalMemory[1] += 25;
  }
  if (number == 5) {
    totalMemory[1] += 50;
  }
  if (number == 7) {
    totalMemory[2] += 25;
  }
  if (number == 8) {
    totalMemory[2] += 50;
  }
  if (number == 10) {
    totalMemory[3] += 25;
  }
  if (number == 11) {
    totalMemory[3] += 50;
  }
}

function gotop() {
  let elmnt = document.getElementById("top");
  elmnt.scrollIntoView();
}

function changeCard(val) {


  oldchar = char.slice();
  if (!char.includes(val)) {
    char.push(val);
  }
  if (char.length > 5) {
    char.shift();
  }
  if (oldchar != char) {
    showPic()
  }



  let id = "";
  if (char.length == 0) {
    id = "customize1";
  }
  if (char.length == 1) {
    id = "customize1";
  }
  if (char.length == 2) {
    id = "myUL2";
  }
  if (char.length == 3) {
    id = "myUL3";
  }
  if (char.length == 4) {
    id = "myUL4";
  }
  if (char.length == 5) {
    id = "myUL5";
  }

  let elmnt = document.getElementById(id);
  elmnt.scrollIntoView();

}

function removeCard(val) {
  let modChar = []
  if (val == "unit1") {
    modChar[0] = char[1];
    modChar[1] = char[2];
    modChar[2] = char[3];
    modChar[3] = char[4];
    modChar = modChar.filter(item => item);
    char = modChar.slice();
  }
  if (val == "unit2") {
    modChar[0] = char[0];
    modChar[1] = char[2];
    modChar[2] = char[3];
    modChar[3] = char[4];
    modChar = modChar.filter(item => item);
    char = modChar.slice();
  }
  if (val == "unit3") {
    modChar[0] = char[0];
    modChar[1] = char[1];
    modChar[2] = char[3];
    modChar[3] = char[4];
    modChar = modChar.filter(item => item);
    char = modChar.slice();
  }
  if (val == "unit4") {
    modChar[0] = char[0];
    modChar[1] = char[1];
    modChar[2] = char[2];
    modChar[3] = char[4];
    modChar = modChar.filter(item => item);
    char = modChar.slice();
  }
  if (val == "unit5") {
    modChar[0] = char[0];
    modChar[1] = char[1];
    modChar[2] = char[2];
    modChar[3] = char[3];
    modChar = modChar.filter(item => item);
    char = modChar.slice();
  }

  console.log(char);
  showPic()
}

function getText(i) {

  let extraOption = `
<ul class="grid list" id="myUL${i}">
	<li>
		<a href="javascript:void(0)" onclick='removeCard("unit${i}")'>
			<img id="u${i}" src='images/questionmark.png' alt=''/>
			<div id="customize${i}">Unit ${i}</div>
		</a>
			<a href="javascript:void(0)" onclick='gotop()'>
			<div>Go to top</div>
		</a>
	</li>
	<li>
		<a href="javascript:void(0)">
			<img id="u${i}j1" src='images/questionmark.png' alt='' />
			<div>${unitx5[i-1][0]}</div>
		</a>
		<input type="number" required pattern="\d+" id="u${i}job1startinglevel"  placeholder="Starting lvl (1-12)" title="Type in a number">
		 <input type="number" required pattern="\d+" class="inputbox" id="u${i}job1goallevel"  placeholder="Goal lvl (2-12)" title="Type in a number">
	</li>
	<li>
		<a href="javascript:void(0)">
			<img id="u${i}j2" src='images/questionmark.png' alt=''/>
			<div>${unitx5[i-1][1]}</div>
		</a>
		<input type="number" required pattern="\d+" id="u${i}job2startinglevel"  placeholder="Starting lvl (1-12)" title="Type in a number">
		 <input type="number" required pattern="\d+" class="inputbox" id="u${i}job2goallevel"  placeholder="Goal lvl (2-12)" title="Type in a number">
	</li>
	<li>
		<a href="javascript:void(0)">
			<img id ="u${i}j3" src='images/questionmark.png' alt=''/>
			<div>${unitx5[i-1][2]}</div>
		</a>
		<input type="number" required pattern="\d+" id="u${i}job3startinglevel"  placeholder="Starting lvl (1-12)" title="Type in a number">
		 <input type="number" required pattern="\d+" class="inputbox" id="u${i}job3goallevel"  placeholder="Goal lvl (2-12)" title="Type in a number">
	</li>
</ul>`;
  return extraOption;
}

function getDisabledText(i) { // i = nth number of unit, e.g.
  let disabledOption = `
<ul class="grid list">
	<li>
		<a>
			<img src='images/questionmark.png' id ="unknown" alt=''/>
			<div>Unit ${i}</div>
		</a>
		<a href="javascript:void(0)" onclick='gotop()'>
			<div>Go to top</div>
		</a>
	</li>
	<li>
		<a>
			<img src='images/questionmark.png' alt='' />
			<div>Job 1</div>
		</a>
		<input type="number" required pattern="\d+"  placeholder="Starting lvl (1-12)" title="Type in a number" disabled>
		 <input type="number" required pattern="\d+" class="inputbox"  placeholder="Goal lvl (2-12)" title="Type in a number" disabled>
	</li>
	<li>
		<a>
			<img src='images/questionmark.png' alt=''/>
			<div>Job 2</div>
		</a>
		<input type="number" required pattern="\d+"   placeholder="Starting lvl (1-12)" title="Type in a number" disabled>
		 <input type="number" required pattern="\d+" class="inputbox"   placeholder="Goal lvl (2-12)" title="Type in a number" disabled>
	</li>
	<li>
		<a>
			<img src='images/questionmark.png' alt=''/>
			<div>Job 3</div>
		</a>
		<input type="number" required pattern="\d+"  placeholder="Starting lvl (1-12)" title="Type in a number" disabled>
		 <input type="number" required pattern="\d+" class="inputbox" placeholder="Goal lvl (2-12)" title="Type in a number" disabled>
	</li>
</ul>
`
  return disabledOption;
}

function showPic() {
  let inUse = "";
  let notInUse = "";
  let x = 0;
  for (x = 0; x < char.length; x++) {
    getJobs(char[x], unitx5[x]);
  }
  document.getElementById("autoadd").innerHTML = "";
  for (i = 1; i < 6; i++) {
    if (char[i - 1] != undefined) {
      // console.log(char[i - 1])
      document.getElementById("autoadd").innerHTML += getText(i);
      document.getElementById(`u${i}`).src = `images/${char[i-1]}.png`;
      //     document.getElementById(`u${i}j1startinglevel`).disabled = false;
      //     document.getElementById(`u${i}j1goallevel`).disabled = false;
      //     document.getElementById(`u${i}j2startinglevel`).disabled = false;
      //     document.getElementById(`u${i}j2goallevel`).disabled = false;
      //     document.getElementById(`u${i}j3startinglevel`).disabled = false;
      //     document.getElementById(`u${i}j3goallevel`).disabled = false;
    } else {
      notInUse = getDisabledText(i);
      document.getElementById("disabled").innerHTML = notInUse;
      break;
      // document.getElementById(`u${i}j1startinglevel`).disabled = true;
      //   document.getElementById(`u${i}j1goallevel`).disabled = true;
      //   document.getElementById(`u${i}j2startinglevel`).disabled = true;
      //   document.getElementById(`u${i}j2goallevel`).disabled = true;
      //   document.getElementById(`u${i}j3startinglevel`).disabled = true;
      //   document.getElementById(`u${i}j3goallevel`).disabled = true;
    }
  }
  if (char[4] != undefined) {
    document.getElementById("disabled").innerHTML = "";
  }
}

function calForEachUnit() {
  for (i = 0; i < char.length; i++) {
    getJobs(char[i], unitx5[i]); // => assign jobs to array u1 (u1.[0]=job1, u1[1]=job2,...) based on char's name

    getJobMaterials(unitx5[i][0], i, 0);
    getJobMaterials(unitx5[i][1], i, 1);
    getJobMaterials(unitx5[i][2], i, 2); // => assign job materials (dragon or angel and type of weapon) to jobMat [jobname,0-3 for units chosen]
    // (jobMat[0-3 for units chosen][type of Statue, type of Weapon])
  }
}

function clearall() {
  materialNeed = [];
  whatEachHas = [
    ["111", ""],
    ["112", ""],
    ["113", ""],
    ["114", ""],
    ["115", ""],
    ["116", ""],
    ["117", ""],
    ["118", ""],
    ["119", ""],
    ["1110", ""],
    ["121", ""],
    ["122", ""],
    ["123", ""],
    ["124", ""],
    ["125", ""],
    ["126", ""],
    ["127", ""],
    ["128", ""],
    ["129", ""],
    ["1210", ""],
    ["131", ""],
    ["132", ""],
    ["133", ""],
    ["134", ""],
    ["135", ""],
    ["136", ""],
    ["137", ""],
    ["138", ""],
    ["139", ""],
    ["1310", ""],
    ["211", ""],
    ["212", ""],
    ["213", ""],
    ["214", ""],
    ["215", ""],
    ["216", ""],
    ["217", ""],
    ["218", ""],
    ["219", ""],
    ["2110", ""],
    ["221", ""],
    ["222", ""],
    ["223", ""],
    ["224", ""],
    ["225", ""],
    ["226", ""],
    ["227", ""],
    ["228", ""],
    ["229", ""],
    ["2210", ""],
    ["231", ""],
    ["232", ""],
    ["233", ""],
    ["234", ""],
    ["235", ""],
    ["236", ""],
    ["237", ""],
    ["238", ""],
    ["239", ""],
    ["2310", ""],
    ["311", ""],
    ["312", ""],
    ["313", ""],
    ["314", ""],
    ["315", ""],
    ["316", ""],
    ["317", ""],
    ["318", ""],
    ["319", ""],
    ["3110", ""],
    ["321", ""],
    ["322", ""],
    ["323", ""],
    ["324", ""],
    ["325", ""],
    ["326", ""],
    ["327", ""],
    ["328", ""],
    ["329", ""],
    ["3210", ""],
    ["331", ""],
    ["332", ""],
    ["333", ""],
    ["334", ""],
    ["335", ""],
    ["336", ""],
    ["337", ""],
    ["338", ""],
    ["339", ""],
    ["3310", ""],
    ["411", ""],
    ["412", ""],
    ["413", ""],
    ["414", ""],
    ["415", ""],
    ["416", ""],
    ["417", ""],
    ["418", ""],
    ["419", ""],
    ["4110", ""],
    ["421", ""],
    ["422", ""],
    ["423", ""],
    ["424", ""],
    ["425", ""],
    ["426", ""],
    ["427", ""],
    ["428", ""],
    ["429", ""],
    ["4210", ""],
    ["431", ""],
    ["432", ""],
    ["433", ""],
    ["434", ""],
    ["435", ""],
    ["436", ""],
    ["437", ""],
    ["438", ""],
    ["439", ""],
    ["4310", ""],
    ["511", ""],
    ["512", ""],
    ["513", ""],
    ["514", ""],
    ["515", ""],
    ["516", ""],
    ["517", ""],
    ["518", ""],
    ["519", ""],
    ["5110", ""]
  ];
  totalWeapon = [
    ["Axe", 0, 0, 0, 0],
    ["Sword", 0, 0, 0, 0],
    ["Greatsword", 0, 0, 0, 0],
    ["Bow", 0, 0, 0, 0],
    ["Fists", 0, 0, 0, 0],
    ["Spear", 0, 0, 0, 0],
    ["Gun", 0, 0, 0, 0],
    ["Dagger", 0, 0, 0, 0],
    ["Staff", 0, 0, 0, 0],
    ["Katana", 0, 0, 0, 0],
    ["Mace", 0, 0, 0, 0],
    ["Ninja Blade", 0, 0, 0, 0]
  ]

  locationResults = [
    ["111", 0],
    ["112", 0],
    ["113", 0],
    ["114", 0],
    ["115", 0],
    ["116", 0],
    ["117", 0],
    ["118", 0],
    ["119", 0],
    ["1110", 0],
    ["121", 0],
    ["122", 0],
    ["123", 0],
    ["124", 0],
    ["125", 0],
    ["126", 0],
    ["127", 0],
    ["128", 0],
    ["129", 0],
    ["1210", 0],
    ["131", 0],
    ["132", 0],
    ["133", 0],
    ["134", 0],
    ["135", 0],
    ["136", 0],
    ["137", 0],
    ["138", 0],
    ["139", 0],
    ["1310", 0],
    ["211", 0],
    ["212", 0],
    ["213", 0],
    ["214", 0],
    ["215", 0],
    ["216", 0],
    ["217", 0],
    ["218", 0],
    ["219", 0],
    ["2110", 0],
    ["221", 0],
    ["222", 0],
    ["223", 0],
    ["224", 0],
    ["225", 0],
    ["226", 0],
    ["227", 0],
    ["228", 0],
    ["229", 0],
    ["2210", 0],
    ["231", 0],
    ["232", 0],
    ["233", 0],
    ["234", 0],
    ["235", 0],
    ["236", 0],
    ["237", 0],
    ["238", 0],
    ["239", 0],
    ["2310", 0],
    ["311", 0],
    ["312", 0],
    ["313", 0],
    ["314", 0],
    ["315", 0],
    ["316", 0],
    ["317", 0],
    ["318", 0],
    ["319", 0],
    ["3110", 0],
    ["321", 0],
    ["322", 0],
    ["323", 0],
    ["324", 0],
    ["325", 0],
    ["326", 0],
    ["327", 0],
    ["328", 0],
    ["329", 0],
    ["3210", 0],
    ["331", 0],
    ["332", 0],
    ["333", 0],
    ["334", 0],
    ["335", 0],
    ["336", 0],
    ["337", 0],
    ["338", 0],
    ["339", 0],
    ["3310", 0],
    ["411", 0],
    ["412", 0],
    ["413", 0],
    ["414", 0],
    ["415", 0],
    ["416", 0],
    ["417", 0],
    ["418", 0],
    ["419", 0],
    ["4110", 0],
    ["421", 0],
    ["422", 0],
    ["423", 0],
    ["424", 0],
    ["425", 0],
    ["426", 0],
    ["427", 0],
    ["428", 0],
    ["429", 0],
    ["4210", 0],
    ["431", 0],
    ["432", 0],
    ["433", 0],
    ["434", 0],
    ["435", 0],
    ["436", 0],
    ["437", 0],
    ["438", 0],
    ["439", 0],
    ["4310", 0],
    ["511", 0],
    ["512", 0],
    ["513", 0],
    ["514", 0],
    ["515", 0],
    ["516", 0],
    ["517", 0],
    ["518", 0],
    ["519", 0],
    ["5110", 0]
  ]

  totalJobMemory = [
    ["Viking", 0, 0, 0, 0],
    ["Warrior", 0, 0, 0, 0],
    ["Knight", 0, 0, 0, 0],
    ["Soldier", 0, 0, 0, 0],
    ["Ranger", 0, 0, 0, 0],
    ["Monk", 0, 0, 0, 0],
    ["Lancer", 0, 0, 0, 0],
    ["Gunner", 0, 0, 0, 0],
    ["Thief", 0, 0, 0, 0],
    ["White Mage", 0, 0, 0, 0],
    ["Black Mage", 0, 0, 0, 0],
    ["Red Mage", 0, 0, 0, 0],
    ["Green Mage", 0, 0, 0, 0],
    ["Samurai", 0, 0, 0, 0],
    ["Paladin", 0, 0, 0, 0],
    ["Time Mage", 0, 0, 0, 0],
    ["Spellblade", 0, 0, 0, 0],
    ["Cleric", 0, 0, 0, 0],
    ["Ninja", 0, 0, 0, 0],
    ["Dragoon", 0, 0, 0, 0],
    ["Winged One", 0, 0, 0, 0],
    ["Gunbreaker", 0, 0, 0, 0],
    ["Sorceress", 0, 0, 0, 0]
  ];

  totalElement = [
    ["Fire", 0, 0, 0, 0],
    ["Ice", 0, 0, 0, 0],
    ["Wind", 0, 0, 0, 0],
    ["Earth", 0, 0, 0, 0],
    ["Lightning", 0, 0, 0, 0],
    ["Water", 0, 0, 0, 0],
    ["Light", 0, 0, 0, 0],
    ["Dark", 0, 0, 0, 0]
  ];

  totalMemory = [0, 0, 0, 0];

  totalStatues = [
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

}

function countMat() {
  clearall();
  calForEachUnit();

  calculateMemory(u1Job); //totalMemory
  calculateElement(u1Job, 0) //totalElement
  calculateWeapon(u1Job, 0) //totalWeapon
  calculateStatues(u1Job, 0) // totalStatues
  calculateJobMemory(u1Job, 0) //totalJobMemory
  if (char.length > 1) {
    calculateMemory(u2Job); //totalMemory
    calculateElement(u2Job, 1) //totalElement
    calculateWeapon(u2Job, 1) //totalWeapon
    calculateStatues(u2Job, 1) // totalStatues
    calculateJobMemory(u2Job, 1) //totalJobMemory
  }
  if (char.length > 2) {
    calculateMemory(u3Job); //totalMemory
    calculateElement(u3Job, 2) //totalElement
    calculateWeapon(u3Job, 2) //totalWeapon
    calculateStatues(u3Job, 2) // totalStatues
    calculateJobMemory(u3Job, 2) //totalJobMemory
  }
  if (char.length > 3) {
    calculateMemory(u4Job); //totalMemory
    calculateElement(u4Job, 3) //totalElement
    calculateWeapon(u4Job, 3) //totalWeapon
    calculateStatues(u4Job, 3) // totalStatues
    calculateJobMemory(u4Job, 3) //totalJobMemory
  }
  if (char.length > 4) {
    calculateMemory(u5Job); //totalMemory
    calculateElement(u5Job, 4) //totalElement
    calculateWeapon(u5Job, 4) //totalWeapon
    calculateStatues(u5Job, 4) // totalStatues
    calculateJobMemory(u5Job, 4) //totalJobMemory
  }

}

// function checkIfEmpty(array){                              <---- Doesn't work for some reason
//   let x = 0;
//   for (i = 0; i < array.length; i++){
//     for (x = 0; x < array[0].length; x++){
//       if (array[i][x] != 0){
//         return 1;
//          {break;}
//       }
//     }
//   }
//   return 0;
// }

// function present(){
//   if (checkIfEmpty(totalMemory)==0){
//     console.log(totalMemory)
//   }
// }
function presentElement() {
  let text = "";
  let drop = "";
  let farm = "";
  let x = 0;
  for (i = 0; i < 8; i++) {
    for (x = 1; x < 5; x++) {
      if (totalElement[i][x] != 0) {
        if (x == 1) {
          drop = `${totalElement[i][0]} Alcryst (Green)`;
        }
        if (x == 2) {
          drop = `${totalElement[i][0]} Alcryst (Blue)`;
        }
        if (x == 3) {
          drop = `${totalElement[i][0]} Alcryst (Purple)`;

        }
        if (x == 4) {
          drop = `${totalElement[i][0]} Alcryst (Purple)`;
        }
        arrayPush(materialNeed, drop);
        farm = findLocation(drop);
        text += `       <tr style="background-color:#EAF2F8">
                        <td>${drop}</td>
                        <td>${totalElement[i][x]}</td>
                        <td class="text-left">${farm}</td>
                      </tr>`
      }

    }

  }
  tablebody += text;
}

function presentJobMemory() {
  let text = "";
  let drop = "";
  let farm = "";

  let x = 0;
  for (i = 0; i < totalJobMemory.length; i++) {
    for (x = 1; x < 5; x++) {
      if (totalJobMemory[i][x] != 0) {
        if (x == 1) {
          drop = `${totalJobMemory[i][0]}'s Memory (Green)`;
        }
        if (x == 2) {
          drop = `${totalJobMemory[i][0]}'s Memory (Blue)`;
        }
        if (x == 3) {
          drop = `${totalJobMemory[i][0]}'s Memory (Purple)`;
        }
        if (x == 4) {
          drop = `${totalJobMemory[i][0]}'s Memory (Yellow)`;
        }
        arrayPush(materialNeed, drop);
        farm = findLocation(drop);
        text += `       <tr style="background-color:#EAF2F8">
                        <td>${drop}</td>
                        <td>${totalJobMemory[i][x]}</td>
                        <td class="text-left">${farm}</td>`

      }
    }
  }
  tablebody += text;
}

function findLocation(drop) {
  let x = 0;
  let y = 0;
  let farmlocation = "";
  for (x == 0; x < materialLocation.length; x++) {
    if (drop == materialLocation[x][0]) {
      for (y = 1; y < materialLocation[x].length; y++) {
        if (y == (materialLocation[x].length - 1)) {
          farmlocation += `${materialLocation[x][y]}`;
        } else {
          farmlocation += `${materialLocation[x][y]}, `;

        }
      }
    }
  }


  return farmlocation;
}

function presentMemory() {
  let text = "";
  let drop = "";

  for (i = 0; i < 4; i++) {
    if (totalMemory[i] != 0) {
      if (i == 0) {
        drop = "Faint Memory (Green)";
      }
      if (i == 1) {
        drop = "Faint Memory (Blue)";
      }
      if (i == 2) {
        drop = "Faint Memory (Purple)";
      }
      if (i == 3) {
        drop = "Faint Memory (Yellow)";
      }
      text += `       <tr>
                        <td>${drop}</td>
                        <td>${totalMemory[i]}</td>
                        <td></td>
                      </tr>`
    }

  }
  tablebody += text;
}

function presentWeapon() {
  let text = "";
  let farm = "";
  let x = 0;
  for (i = 0; i < totalWeapon.length; i++) {
    for (x = 1; x < 5; x++) {
      if (totalWeapon[i][x] != 0) {
        if (x == 1) {
          drop = `${totalWeapon[i][0]} Jadeite`;
        }
        if (x == 2) {
          drop = `${totalWeapon[i][0]} Azurite`;
        }
        if (x == 3) {
          drop = `${totalWeapon[i][0]} Charoite`;
        }
        if (x == 4) {
          drop = `${totalWeapon[i][0]} Citrine`;
        }
        arrayPush(materialNeed, drop);
        farm = findLocation(drop);
        text += `       <tr>
                        <td>${drop}</td>
                        <td>${totalWeapon[i][x]}</td>
                        <td class="text-left">${farm}</td>
                      </tr>`
      }
    }
  }
  tablebody += text;
}

function presentStatue() {
  let text = ""
  let x = 0;
  let drop = "";
  let farm = "";
  let w_or_a = "";
  for (i = 0; i < 2; i++) {
    if (i == 0) {
      w_or_a = "Praying Angel Statue";
    } else {
      w_or_a = "Prowling Wyvern Statue";
    }
    for (x = 0; x < 4; x++) {
      if (totalStatues[i][x] != 0) {
        if (x == 0) {
          drop = `${w_or_a} (Green)`;
        }
        if (x == 1) {
          drop = `${w_or_a} (Blue)`;
        }
        if (x == 2) {
          drop = `${w_or_a} (Purple)`;
        }
        if (x == 3) {
          drop = `${w_or_a} (Yellow)`;
        }
        arrayPush(materialNeed, drop);
        farm = findLocation(drop);
        text += `       <tr>
                        <td>${drop}</td>
                        <td>${totalStatues[i][x]}</td>
                        <td class="text-left">${farm}</td>
                      </tr>`
      }
    }
  }
  tablebody += text;
}

let whatEachHas = [
  ["111", ""],
  ["112", ""],
  ["113", ""],
  ["114", ""],
  ["115", ""],
  ["116", ""],
  ["117", ""],
  ["118", ""],
  ["119", ""],
  ["1110", ""],
  ["121", ""],
  ["122", ""],
  ["123", ""],
  ["124", ""],
  ["125", ""],
  ["126", ""],
  ["127", ""],
  ["128", ""],
  ["129", ""],
  ["1210", ""],
  ["131", ""],
  ["132", ""],
  ["133", ""],
  ["134", ""],
  ["135", ""],
  ["136", ""],
  ["137", ""],
  ["138", ""],
  ["139", ""],
  ["1310", ""],
  ["211", ""],
  ["212", ""],
  ["213", ""],
  ["214", ""],
  ["215", ""],
  ["216", ""],
  ["217", ""],
  ["218", ""],
  ["219", ""],
  ["2110", ""],
  ["221", ""],
  ["222", ""],
  ["223", ""],
  ["224", ""],
  ["225", ""],
  ["226", ""],
  ["227", ""],
  ["228", ""],
  ["229", ""],
  ["2210", ""],
  ["231", ""],
  ["232", ""],
  ["233", ""],
  ["234", ""],
  ["235", ""],
  ["236", ""],
  ["237", ""],
  ["238", ""],
  ["239", ""],
  ["2310", ""],
  ["311", ""],
  ["312", ""],
  ["313", ""],
  ["314", ""],
  ["315", ""],
  ["316", ""],
  ["317", ""],
  ["318", ""],
  ["319", ""],
  ["3110", ""],
  ["321", ""],
  ["322", ""],
  ["323", ""],
  ["324", ""],
  ["325", ""],
  ["326", ""],
  ["327", ""],
  ["328", ""],
  ["329", ""],
  ["3210", ""],
  ["331", ""],
  ["332", ""],
  ["333", ""],
  ["334", ""],
  ["335", ""],
  ["336", ""],
  ["337", ""],
  ["338", ""],
  ["339", ""],
  ["3310", ""],
  ["411", ""],
  ["412", ""],
  ["413", ""],
  ["414", ""],
  ["415", ""],
  ["416", ""],
  ["417", ""],
  ["418", ""],
  ["419", ""],
  ["4110", ""],
  ["421", ""],
  ["422", ""],
  ["423", ""],
  ["424", ""],
  ["425", ""],
  ["426", ""],
  ["427", ""],
  ["428", ""],
  ["429", ""],
  ["4210", ""],
  ["431", ""],
  ["432", ""],
  ["433", ""],
  ["434", ""],
  ["435", ""],
  ["436", ""],
  ["437", ""],
  ["438", ""],
  ["439", ""],
  ["4310", ""],
  ["511", ""],
  ["512", ""],
  ["513", ""],
  ["514", ""],
  ["515", ""],
  ["516", ""],
  ["517", ""],
  ["518", ""],
  ["519", ""],
  ["5110", ""]
]

function lookUpLocation() {
  let x = 0;
  let y = 0;
  let z = 0;
  for (i = 0; i < materialNeed.length; i++) { //materialNeed is a 1D array of unique materials needed
    for (x = 0; x < materialLocation.length; x++) { // check each material for its locations
      if (materialNeed[i] == materialLocation[x][0]) { // if the names of the materials match
        for (y = 1; y < materialLocation[x].length; y++) {
          for (z = 0; z < locationResults.length; z++) {
            if (materialLocation[x][y] == locationResults[z][0]) {
              locationResults[z][1] += 1; //add to the location every time a material is needed there
              arrayPush(whatEachHas[z], materialNeed[i]);
            }
          }
        }
      }
    }
  }
}
let fulltable2 = ""

function bestLocation() {
  let text = "";
  let x = 0;
  let y = 0;
  let check = 0;
  let textbody = "";
  let locationResultsOld = locationResults.slice()
  locationResults.sort(function(a, b) {
    return b[1] - a[1]
  });

  for (i = 0; i < 20; i++) {
    if (locationResults[i][1] > 1) {
      textbody = "";
      for (x = 0; x < locationResults.length; x++) {
        if (locationResultsOld[x][0] == locationResults[i][0]) {
          for (y = 2; y < whatEachHas[x].length; y++) {
            textbody += ` ${whatEachHas[x][y]}`;
            if (y != (whatEachHas[x].length - 1)) {
              textbody += `,`;
            }
          }
          check = 1;
        }
      }
      text += `       <tr>
                        <td>${locationResults[i][0]}</td>
                        <td>${locationResults[i][1]}</td>
                        <td class="text-left">${textbody}</td>
                      </tr>`
    }
    if (check == 0) {
      fulltable2 = "No best location found. All locations have 1 or fewer material per map.";
    } else {
      fulltable2 = `
      <table class="table tableFixHead">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Location</th>
          <th scope="col">Number of items</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
       ${text}
      </tbody>
      </table>`
    }


  }


}

function calculate() {
  if (char.length != 0) {
    tablebody = "";
    fulltable2 = "";
    clearall();
    cleanup();
    countMat();
    presentMemory();
    presentElement();
    presentWeapon();
    presentJobMemory();
    presentStatue();
    let elmnt = document.getElementById("lookhere");
    elmnt.scrollIntoView();
    lookUpLocation();
    document.getElementById("mattable").innerHTML = tablebody;
    bestLocation();
    document.getElementById("table2").innerHTML = fulltable2;
  } else {
    document.getElementById("mattable").innerHTML = "";
    document.getElementById("table2").innerHTML = "Please select a unit."
  }
  // outpuTotalStatues()

}

function outpuTotalStatues() {
  let x = 0;

  for (i = 0; i < 2; i++) {
    for (x = 0; x < 4; x++) {
      if (totalStatues[i][x] != 0) {
        console.log(`You need ${totalStatues[i][x]} x ${statue[0][i]} (${statue[1][x]}) `);

      }
    }
  }
}

let u1Job = [
  [0, 0],
  [0, 0],
  [0, 0]
];

let u3Job = [
  [0, 0],
  [0, 0],
  [0, 0]
];

let u2Job = [
  [0, 0],
  [0, 0],
  [0, 0]

];

let u4Job = [
  [0, 0],
  [0, 0],
  [0, 0]

];

let u5Job = [
  [0, 0],
  [0, 0],
  [0, 0]

];

function cleanup() {
  // for unit 1
  if (char.length > 0) {
    u1Job[0][0] = +document.getElementById(`u1job1startinglevel`).value;
    u1Job[0][1] = +document.getElementById(`u1job1goallevel`).value;
    removeNumbers(u1Job[0]);
    document.getElementById('u1job1startinglevel').value = u1Job[0][0];
    document.getElementById('u1job1goallevel').value = u1Job[0][1];
    u1Job[1][0] = +document.getElementById(`u1job2startinglevel`).value;
    u1Job[1][1] = +document.getElementById(`u1job2goallevel`).value;
    removeNumbers(u1Job[1]);
    document.getElementById('u1job2startinglevel').value = u1Job[1][0];
    document.getElementById('u1job2goallevel').value = u1Job[1][1];
    u1Job[2][0] = +document.getElementById(`u1job3startinglevel`).value;
    u1Job[2][1] = +document.getElementById(`u1job3goallevel`).value;
    removeNumbers(u1Job[2]);

    document.getElementById('u1job3startinglevel').value = u1Job[2][0];
    document.getElementById('u1job3goallevel').value = u1Job[2][1];
  }
  if (char.length > 1) {
    u2Job[0][0] = +document.getElementById(`u2job1startinglevel`).value;
    u2Job[0][1] = +document.getElementById(`u2job1goallevel`).value;
    removeNumbers(u2Job[0]);
    document.getElementById('u2job1startinglevel').value = u2Job[0][0];
    document.getElementById('u2job1goallevel').value = u2Job[0][1];
    u2Job[1][0] = +document.getElementById(`u2job2startinglevel`).value;
    u2Job[1][1] = +document.getElementById(`u2job2goallevel`).value;
    removeNumbers(u2Job[1]);
    document.getElementById('u2job2startinglevel').value = u2Job[1][0];
    document.getElementById('u2job2goallevel').value = u2Job[1][1];
    u2Job[2][0] = +document.getElementById(`u2job3startinglevel`).value;
    u2Job[2][1] = +document.getElementById(`u2job3goallevel`).value;
    removeNumbers(u2Job[2]);
    document.getElementById('u2job3startinglevel').value = u2Job[2][0];
    document.getElementById('u2job3goallevel').value = u2Job[2][1];
  }
  if (char.length > 2) {
    u3Job[0][0] = +document.getElementById(`u3job1startinglevel`).value;
    u3Job[0][1] = +document.getElementById(`u3job1goallevel`).value;
    removeNumbers(u3Job[0]);
    document.getElementById('u3job1startinglevel').value = u3Job[0][0];
    document.getElementById('u3job1goallevel').value = u3Job[0][1];
    u3Job[1][0] = +document.getElementById(`u3job2startinglevel`).value;
    u3Job[1][1] = +document.getElementById(`u3job2goallevel`).value;
    removeNumbers(u3Job[1]);
    document.getElementById('u3job2startinglevel').value = u3Job[1][0];
    document.getElementById('u3job2goallevel').value = u3Job[1][1];
    u3Job[2][0] = +document.getElementById(`u3job3startinglevel`).value;
    u3Job[2][1] = +document.getElementById(`u3job3goallevel`).value;
    removeNumbers(u3Job[2]);
    document.getElementById('u3job3startinglevel').value = u3Job[2][0];
    document.getElementById('u3job3goallevel').value = u3Job[2][1];
  }
  if (char.length > 3) {
    u4Job[0][0] = +document.getElementById(`u4job1startinglevel`).value;
    u4Job[0][1] = +document.getElementById(`u4job1goallevel`).value;
    removeNumbers(u4Job[0]);
    document.getElementById('u4job1startinglevel').value = u4Job[0][0];
    document.getElementById('u4job1goallevel').value = u4Job[0][1];
    u4Job[1][0] = +document.getElementById(`u4job2startinglevel`).value;
    u4Job[1][1] = +document.getElementById(`u4job2goallevel`).value;
    removeNumbers(u4Job[1]);
    document.getElementById('u4job2startinglevel').value = u4Job[1][0];
    document.getElementById('u4job2goallevel').value = u4Job[1][1];
    u4Job[2][0] = +document.getElementById(`u4job3startinglevel`).value;
    u4Job[2][1] = +document.getElementById(`u4job3goallevel`).value;
    removeNumbers(u4Job[2]);
    document.getElementById('u4job3startinglevel').value = u4Job[2][0];
    document.getElementById('u4job3goallevel').value = u4Job[2][1];
  }
  if (char.length > 4) {
    u5Job[0][0] = +document.getElementById(`u5job1startinglevel`).value;
    u5Job[0][1] = +document.getElementById(`u5job1goallevel`).value;
    removeNumbers(u5Job[0]);
    document.getElementById('u5job1startinglevel').value = u5Job[0][0];
    document.getElementById('u5job1goallevel').value = u5Job[0][1];
    u5Job[1][0] = +document.getElementById(`u5job2startinglevel`).value;
    u5Job[1][1] = +document.getElementById(`u5job2goallevel`).value;
    removeNumbers(u5Job[1]);
    document.getElementById('u5job2startinglevel').value = u5Job[1][0];
    document.getElementById('u5job2goallevel').value = u5Job[1][1];
    u5Job[2][0] = +document.getElementById(`u5job3startinglevel`).value;
    u5Job[2][1] = +document.getElementById(`u5job3goallevel`).value;
    removeNumbers(u5Job[2]);
    document.getElementById('u5job3startinglevel').value = u5Job[2][0];
    document.getElementById('u5job3goallevel').value = u5Job[2][1];
  }
}

function removeNumbers(array) {
  if (array[1] > 12) {
    array[1] = 12;
  }
  if (array[1] < 1) {
    array[1] = 1;
  }
  if (array[0] < 1) {
    array[0] = 1;
  }
  if (array[0] > 12) {
    array[0] = 12;
  }
  if (array[1] < array[0]) {
    array[1] = array[0];
  }
}
// function outputmaterials(){
//   let size = Object.keys(myObj).length;
//   let name1 = char[0];
//   for (i = 1; i < size; i++) {

//   }

// }
