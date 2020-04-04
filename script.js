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
        ["Jadeite", "Azurite", "Charoite","Citrine"],
        ["Sword","Greatsword", "Fists","Spear","Ninja Blade","Bow","Gun","Staff","Mace","Dagger","Katana"]
    ]
let weaponnum = [
  [0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0]
]
let faintmemory = [0,0,0,0]
const statue = [
  ["Praying Angel Statue", "Prowling Wyvern Statue"],
  ["Green","Blue","Purple","Yellow"]
]
let statuenum = [
  [0,0,0,0],
  [0,0]
]

let materialNeed = [];

let locationResults = [ ["111",0], ["112",0], ["113",0], ["114",0], ["115",0], ["116",0], ["117",0], ["118",0], ["119",0], ["1110",0], ["121",0], ["122",0], ["123",0], ["124",0], ["125",0], ["126",0], ["127",0], ["128",0], ["129",0], ["1210",0], ["131",0], ["132",0], ["133",0], ["134",0], ["135",0], ["136",0], ["137",0], ["138",0], ["139",0], ["1310",0], ["211",0], ["212",0], ["213",0], ["214",0], ["215",0], ["216",0], ["217",0], ["218",0], ["219",0], ["2110",0], ["221",0], ["222",0], ["223",0], ["224",0], ["225",0], ["226",0], ["227",0], ["228",0], ["229",0], ["2210",0], ["231",0], ["232",0], ["233",0], ["234",0], ["235",0], ["236",0], ["237",0], ["238",0], ["239",0], ["2310",0], ["311",0], ["312",0], ["313",0], ["314",0], ["315",0], ["316",0], ["317",0], ["318",0], ["319",0], ["3110",0], ["321",0], ["322",0], ["323",0], ["324",0], ["325",0], ["326",0], ["327",0], ["328",0], ["329",0], ["3210",0], ["331",0], ["332",0], ["333",0], ["334",0], ["335",0], ["336",0], ["337",0], ["338",0], ["339",0], ["3310",0], ["411",0], ["412",0], ["413",0], ["414",0], ["415",0], ["416",0], ["417",0], ["418",0], ["419",0], ["4110",0], ["421",0], ["422",0], ["423",0], ["424",0], ["425",0], ["426",0], ["427",0], ["428",0], ["429",0], ["4210",0], ["431",0], ["432",0], ["433",0], ["434",0], ["435",0], ["436",0], ["437",0], ["438",0], ["439",0], ["4310",0], ["511",0], ["512",0], ["513",0], ["514",0], ["515",0], ["516",0], ["517",0], ["518",0], ["519",0], ["5110",0] ]

const materialLocation = [
  //Alcryst
  ["Dark Alcryst (Green)","118","126"],
  ["Dark Alcryst (Blue)","134","213","221","229"],
  ["Dark Alcryst (Purple)","237","315","323","331","339","417","422"],
  ["Dark Alcryst (Yellow)","433","4310","512","510"]
]
const jobnames = ["Warrior","Knight","Soldier","Ranger","Monk","Lancer","Gunner","Thief","White Mage", "Black Mage","Red Mage","Green Mage", "Samurai","Paladin","Time Mage","Spellblade","Cleric","Ninja","Dragoon","Winged One","Gunbreaker","Sorceress","Lord","White Mage of Lapis","Holy Swordsman (unreleased)","Viking (unreleased)","Apprentice Warrior (unrelease)","Dark Knight (unreleased)","Double Gunner (unreleased)","Assassin (unreleased)","Grandshelt Knight (unreleased)","Light Warrior (unreleased)","Magician (unreleased)"]

let totalJobMemory = [
  ["Warrior", 0,0,0,0],
  ["Knight", 0,0,0,0],
  ["Soldier",0,0,0,0],
  ["Ranger",0,0,0,0],
  ["Monk",0,0,0,0],
  ["Lancer",0,0,0,0],
  ["Gunner",0,0,0,0],
  ["Thief",0,0,0,0],
  ["White Mage",0,0,0,0],
  ["Black Mage",0,0,0,0],
  ["Red Mage",0,0,0,0],
  ["Green Mage",0,0,0,0],
  ["Samurai",0,0,0,0],
  ["Paladin",0,0,0,0],
  ["Time Mage",0,0,0,0],
  ["Spellblade",0,0,0,0],
  ["Cleric",0,0,0,0],
  ["Ninja",0,0,0,0],
  ["Dragoon",0,0,0,0],
  ["Winged One",0,0,0,0],
  ["Gunbreaker",0,0,0,0],
  ["Sorceress",0,0,0,0]
]

let totalElement = [
  ["Fire",0,0,0,0],
  ["Ice",0,0,0,0],
  ["Wind",0,0,0,0],
  ["Earth",0,0,0,0],
  ["Thunder",0,0,0,0],
  ["Water",0,0,0,0],
  ["Light",0,0,0,0],
  ["Dark",0,0,0,0]
]
let elementalUnit = [
  ["Thancred","Light"], ["Gilgamesh","Ice"], ["Macherie","Light"], ["Engelbert","Light"], ["Mediena","Ice"], ["Rob","Light"], ["Ayaka","Wind"], ["Oelde","Fire"], ["Aileen","Earth"], ["Xiza","Dark"], ["Sterne","Dark"], ["Frederika","Thunder"], ["Mont","Earth"], ["Helena","Wind"], ["Lilyth","Fire"], ["Ramada","Water"], ["Grace","Light"], ["Khury","Ice"], ["Rairyuu","Dark"], ["Owe","Thunder"], ["Lorenzo","Earth"], ["Schuzelt","Thunder"], ["YShtola","Fire"], ["Margritte","Fire"], ["Meriluke","Thunder"], ["Cadia","Wind"], ["Fina","Light"], ["Vistralle","Light"], ["Shadowlynx","Dark"], ["Vallaide","Ice"], ["Severo","Water"], ["Naiah","Fire"], ["Sosha","Wind"], ["Serjes","Ice"], ["Phoebe","Light"], ["Murmur","Earth"], ["Baelo","Earth"], ["Vadim","Thunder"], ["Yuni","Water"], ["Mia","Wind"], ["Miche","Fire"], ["Learte","Thunder"], ["Zazan","Water"]
]

let char = []
let oldchar = []
let i;

let unitx4 =[
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""]
]

let totalMemory = [0,0,0,0]

let totalWeapon = [
  ["Sword",0,0,0,0],
  ["Greatsword",0,0,0,0],
  ["Bow",0,0,0,0],
  ["Fists",0,0,0,0],
  ["Spear",0,0,0,0],
  ["Gun",0,0,0,0],
  ["Dagger",0,0,0,0],
  ["Staff",0,0,0,0],
  ["Katana",0,0,0,0],
  ["Mace",0,0,0,0],
  ["Ninja Blade",0,0,0,0]
]

let totalStatues = [
  [0,0,0,0],
  [0,0,0,0]
]
let weapons = [
["","",""],
["","",""],
["","",""],
["","",""]
]
let statues = [
["","",""],
["","",""],
["","",""],
["","",""]
]
let jobOrbs = [
["","",""],
["","",""],
["","",""],
["","",""]
]

function arrayPush(array,string){ // push locationResults[] to add materials to locations when a match is found
  array.indexOf(string) === -1 ? array.push(string) : console.log("This item already exists");
}

function getJobMaterials(jobname, a, b){
  if (jobname == "Warrior"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Warrior";
  }
  if (jobname == "Knight"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Knight";
  }
  if (jobname == "Soldier"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Greatsword";
    jobOrbs[a][b] ="Soldier";
  }
  if (jobname == "Ranger"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Bow";
    jobOrbs[a][b] ="Ranger";
  }
  if (jobname == "Monk"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Fists";
    jobOrbs[a][b] ="Monk";
  }
  if (jobname == "Lancer"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Spear";
    jobOrbs[a][b] ="Lancer";
  }
  if (jobname == "Gunner"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Gun";
    jobOrbs[a][b] ="Gunner";
  }
  if (jobname == "Thief"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Dagger";
    jobOrbs[a][b] ="Thief";
  }
  if (jobname == "White Mage"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="White Mage";
  }
  if (jobname == "Black Mage"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Black Mage";
  }
    if (jobname == "Red Mage"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Red Mage";
  }
   if (jobname == "Green Mage"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Green Mage";
  }
   if (jobname == "Samurai"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Katana";
    jobOrbs[a][b] ="Samurai";
  }
  if (jobname == "Paladin"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Paladin";
  }
  if (jobname == "Time Mage"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Time Mage";
  }
  if (jobname == "Spellblade"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Spellblade";
  }
  if (jobname == "Cleric"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Mace";
    jobOrbs[a][b] ="Cleric";
  }
  if (jobname == "Ninja"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Ninja Blade";
    jobOrbs[a][b] ="Ninja";
  }
  if (jobname == "Dragoon"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Spear";
    jobOrbs[a][b] ="Dragoon";
  }
  if (jobname == "Winged One"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Winged One";
  }
  if (jobname == "Gunbreaker"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Gunbreaker";
  }
  if (jobname == "Sorceress"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Sorceress";
  }
  if (jobname == "Lord"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Warrior";
  }
  if (jobname == "White Mage of Lapis"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Bow";
    jobOrbs[a][b] ="White Mage";
  }


  // add more jobs here
}

function getJobs(name, array){
  if (name == "Thancred"){
     array[0] = "Gunbreaker";
     array[1] = "Dragoon";
     array[2] = "Red Mage";
  }
  if (name == "Gilgamesh"){
     array[0] = "Winged One";
     array[1] = "Time Mage";
     array[2] = "Soldier";
  }
  if (name == "Macherie"){
     array[0] = "Cleric";
     array[1] = "Monk";
     array[2] = "Black Mage";
  }
  if (name == "Engelbert"){
     array[0] = "Paladin";
     array[1] = "Knight";
     array[2] = "Monk";
  }
  if (name == "Engelbert"){
     array[0] = "Lord";
     array[1] = "Paladin";
     array[2] = "Knight";
  }
  if (name == "Mediena"){
     array[0] = "Black Mage";
     array[1] = "Green Mage";
     array[2] = "Ninja";
  }
  if (name == "Rob"){
     array[0] = "Samurai";
     array[1] = "Soldier";
     array[2] = "Lancer";
  }
  if (name == "Ayaka"){
     array[0] = "White Mage";
     array[1] = "Time Mage";
     array[2] = "Green Mage";
  }
  if (name == "Oelde"){
     array[0] = "Lancer";
     array[1] = "Monk";
     array[2] = "Samurai";
  }
  if (name == "Aileen"){
     array[0] = "Lancer";
     array[1] = "Warrior";
     array[2] = "Soldier";
  }
  if (name == "Xiza"){
     array[0] = "Monk";
     array[1] = "Thief";
     array[2] = "Lancer";
  }
  if (name == "Sterne"){
     array[0] = "Soldier";
     array[1] = "Dragoon";
     array[2] = "Ninja";
  }
  if (name == "Frederika"){
     array[0] = "Gunner";
     array[1] = "Ninja";
     array[2] = "Ranger";
  }
  if (name == "Mont"){
     array[0] = "Lord";
     array[1] = "Paladin";
     array[2] = "Knight";
  }
  if (name == "Helena"){
     array[0] = "Green Mage";
     array[1] = "Time Mage";
     array[2] = "White Mage";
  }
  if (name == "Lilyth"){
     array[0] = "Knight";
     array[1] = "Soldier";
     array[2] = "Ranger";
  }
  if (name == "Ramada"){
     array[0] = "Lancer";
     array[1] = "Spellblade";
     array[2] = "Thief";
  }
  if (name == "Grace"){
     array[0] = "White Mage";
     array[1] = "Green Mage";
     array[2] = "Lancer";
  }
  if (name == "Khury"){
     array[0] = "Ranger";
     array[1] = "Dragoon";
     array[2] = "Green Mage";
  }
  if (name == "Rairyuu"){
     array[0] = "Gunner";
     array[1] = "Thief";
     array[2] = "Red Mage";
  }
  if (name == "Owe"){
     array[0] = "Samurai";
     array[1] = "Warrior";
     array[2] = "Ninja";
  }
  if (name == "Lorenzo"){
     array[0] = "Dragoon";
     array[1] = "Lancer";
     array[2] = "Time Mage";
  }
  if (name == "Schuzelt"){
     array[0] = "Soldier";
     array[1] = "Knight";
     array[2] = "Ranger";
  }
  if (name == `YShtola`){
     array[0] = "Sorceress";
     array[1] = "White Mage";
     array[2] = "Green Mage";
  }
  if (name == "Margritte"){
     array[0] = "Time Mage";
     array[1] = "Black Mage";
     array[2] = "Red Mage";
  }
  if (name == "Meriluke"){
     array[0] = "Monk";
     array[1] = "Knight";
     array[2] = "Green Mage";
  }
  if (name == "Cadia"){
     array[0] = "Cleric";
     array[1] = "White Mage";
     array[2] = "Spellblade";
  }
  if (name == "Fina"){
     array[0] = "White Mage of Lapis";
     array[1] = "Gunner";
     array[2] = "Cleric";
  }
  if (name == "Vistralle"){
     array[0] = "Thief";
     array[1] = "Red Mage";
     array[2] = "Soldier";
  }
  if (name == "Shadowlynx"){
     array[0] = "Ninja";
     array[1] = "Dragoon";
     array[2] = "Samurai";
  }
  if (name == "Vallaide"){
     array[0] = "Green Mage";
     array[1] = "White Mage";
     array[2] = "Red Mage";
  }
  if (name == "Severo"){
     array[0] = "Black Mage";
     array[1] = "Red Mage";
     array[2] = "Monk";
  }
  if (name == "Naiah"){
     array[0] = "White Mage";
     array[1] = "Cleric";
     array[2] = "Red Mage";
  }
  if (name == "Sosha"){
     array[0] = "Dragoon";
     array[1] = "Warrior";
     array[2] = "Ranger";
  }
  if (name == "Serjes"){
     array[0] = "Lancer";
     array[1] = "Paladin";
     array[2] = "Cleric";
  }
  if (name == "Phoebe"){
     array[0] = "Time Mage";
     array[1] = "Dragoon";
     array[2] = "White Mage";
  }
  if (name == "Murmur"){
     array[0] = "Red Mage";
     array[1] = "Black Mage";
     array[2] = "Lancer";
  }
  if (name == "Baelo"){
     array[0] = "Knight";
     array[1] = "Warrior";
     array[2] = "Paladin";
  }
  if (name == "Vadim"){
     array[0] = "Thief";
     array[1] = "Warrior";
     array[2] = "Samurai";
  }
  if (name == "Yuni"){
     array[0] = "Ranger";
     array[1] = "Black Mage";
     array[2] = "Spellblade";
  }
  if (name == "Mia"){
     array[0] = "Thief";
     array[1] = "Cleric";
     array[2] = "Spellblade";
  }
  if (name == "Miche"){
     array[0] = "Black Mage";
     array[1] = "Thief";
     array[2] = "Ranger";
  }
  if (name == "Learte"){
     array[0] = "Ranger";
     array[1] = "Lancer";
     array[2] = "White Mage";
  }
  if (name == "Zazan"){
     array[0] = "Warrior";
     array[1] = "Knight";
     array[2] = "Thief";
  }
  // add more jobs here
}

function calculateWeapon(array,n){
  let x = 0;
  let y = 0;
  for (i = 0; i <3; i++){
    for ( x = array[i][0]; x < array[i][1]; x++){
      for (y = 0; y<totalWeapon.length;y++){
        if (weapons[n][i] == totalWeapon[y][0]){
          weaponPerLevel(x+1,y)
        }


      }

    }
  }
}

function weaponPerLevel(level,n){ // n = type of element
  if (level == 2){
     totalWeapon[n][1]+=5;
  }
  if (level == 3){
    totalWeapon[n][1]+=10;
  }
  if (level == 4){
    totalWeapon[n][2]+= 5;
  }
  if (level == 5){
    totalWeapon[n][2]+=10;
  }
  if (level == 6){
    totalWeapon[n][2]+=15;
  }
 if (level == 7){
    totalWeapon[n][3]+=5;
  }
  if (level == 8){
    totalWeapon[n][3]+=10;
  }
  if (level == 9){
    totalWeapon[n][3]+=15;
  }
  if (level == 10){
    totalWeapon[n][4]+=5;
  }
  if (level == 11){
    totalWeapon[n][4]+=10;
  }
  if (level == 12){
    totalWeapon[n][4]+=15;
  }
}

function getElement(name){
  for (i = 0; i < elementalUnit.length; i++){
    if (name == elementalUnit[i][0]){
      return elementalUnit[i][1];

    }
  }
}

function elementPerLevel(level,n){ // n = type of element
  if (level == 2){
     totalElement[n][1]+=10;
  }
  if (level == 3){
    totalElement[n][1]+=20;
  }
  if (level == 4){
    totalElement[n][2]+=10;
  }
  if (level == 5){
    totalElement[n][2]+=20;
  }
  if (level == 6){
    totalElement[n][2]+=40;
  }
 if (level == 7){
    totalElement[n][3]+=10;
  }
  if (level == 8){
    totalElement[n][3]+=20;
  }
  if (level == 9){
    totalElement[n][3]+=40;
  }
  if (level == 10){
    totalElement[n][4]+=10;
  }
  if (level == 11){
    totalElement[n][4]+=20;
  }
  if (level == 12){
    totalElement[n][4]+=40;
  }
}

function calculateElement(array,a){
  let x = 0;
  let y = 0;
  let element = getElement(char[a]);
  for (i = 0; i <3; i++){
    for ( x = array[i][0]; x < array[i][1]; x++){
      for (y = 0; y<8;y++){
        if (element == totalElement[y][0]){
          elementPerLevel(x+1,y)
        }

      }

    }
  }
}

function calculateMemory(array){ //unit 1 array = u1Job
  let x = 0;
  for (i = 0; i <3; i++){
    for ( x = array[i][0]; x < array[i][1]; x++){
        memoryPerLevel(x+1);
    }
  }
}


function calculateJobMemory(array,a){
  let x = 0;
  let y = 0;
  for (i = 0; i <3; i++){
    for ( x = array[i][0]; x < array[i][1]; x++){
      for (y = 0; y< totalJobMemory.length;y++){
        if (jobOrbs[a][i] == totalJobMemory[y][0]){
          if (x+1 == 3){
            totalJobMemory[y][1]+=1;
          }
          if (x+1 == 6){
            totalJobMemory[y][2]+=2;
          }
          if (x+1 == 9){
            totalJobMemory[y][3]+=3;
          }
          if (x+1 == 12){
            totalJobMemory[y][4]+=4;
          }
        }
      }

    }
  }
}
function calculateStatues(array,a){ //unit 1 array = u1Job, a = unit, to be used with another array
  let x = 0;
  let number = 0;
  for (i = 0; i <3; i++){
    for ( x = array[i][0]; x < array[i][1]; x++){
        if (statues[a][i] == "Angel"){
          number = 0;
        }
        else {
          number = 1;
        }
        statuePerLevel(x+1,number);
    }
  }
}
function statuePerLevel(level, number){ //first is level, 0 = angel, 1 = dragon
  let n = 0;
  if (number == 1){n=1}
  if (level == 2){
     totalStatues[n][0]+=1;
  }
  if (level == 3){
    totalStatues[n][0]+=2;
  }
  if (level == 4){
    totalStatues[n][1]+=1;
  }
  if (level == 5){
    totalStatues[n][1]+=2;
  }
  if (level == 6){
    totalStatues[n][1]+=3;
  }
 if (level == 7){
    totalStatues[n][2]+=1;
  }
  if (level == 8){
    totalStatues[n][2]+=2;
  }
  if (level == 9){
    totalStatues[n][2]+=3;
  }
  if (level == 10){
    totalStatues[n][3]+=1;
  }
  if (level == 11){
    totalStatues[n][3]+=2;
  }
  if (level == 12){
    totalStatues[n][3]+=3;
  }
}
function memoryPerLevel(number){
  if (number == 2){
    totalMemory[0]+=10;
  }
  if (number == 4){
    totalMemory[1]+=25;
  }
  if (number == 5){
    totalMemory[1]+=50;
  }
 if (number == 7){
    totalMemory[2]+=25;
  }
  if (number == 8){
    totalMemory[2]+=50;
  }
  if (number == 10){
    totalMemory[3]+=25;
  }
  if (number == 11){
    totalMemory[3]+=50;
  }
}

function changeCard(val) {
    oldchar = char.slice();
    if (!char.includes(val)) {
        char.push(val);
    }
    if (char.length > 1) {
        char.shift();
    }
    if (oldchar != char) {
        showPic()
    }
}

// function removeCard(val) {
//     let modChar = []
//     if (val == "unit1") {
//         modChar[0] = char[1];
//         modChar[1] = char[2];
//         modChar[2] = char[3];
//         char = modChar.slice();
//     }
//     if (val == "unit2") {
//         modChar[0] = char[0];
//         modChar[1] = char[2];
//         modChar[2] = char[3];
//         char = modChar.slice();
//     }
//     if (val == "unit3") {
//         modChar[0] = char[0];
//         modChar[1] = char[1];
//         modChar[2] = char[3];
//         char = modChar.slice();
//     }
//     if (val == "unit1") {
//         modChar[0] = char[0];
//         modChar[1] = char[1];
//         modChar[2] = char[2];
//         char = modChar.slice();
//     }
//     showPic()
// }

function showPic() {

    for (i = 1; i < 5; i++) {
        if (char[i - 1] != undefined) {
            // console.log(char[i - 1])
            document.getElementById(`u${i}`).src = `/images/${char[i-1]}.png`;
            // document.getElementById(`u${i}startinglevel`).disabled = false;
            // document.getElementById(`u${i}goallevel`).disabled = false;
        }
        // else {
        //   document.getElementById(`u${i}startinglevel`).disabled = true;
        //   document.getElementById(`u${i}goallevel`).disabled = true;
        // }
    }
}

function calForEachUnit(){
  for (i = 0; i < char.length; i++){
   getJobs(char[i],unitx4[i]);  // => assign jobs to object u1 (u1.job1, u1.job2, u1.job3) based on char's name

  getJobMaterials(unitx4[i][0], i, 0);
  getJobMaterials(unitx4[i][1], i, 1);
  getJobMaterials(unitx4[i][2], i, 2); // => assign job materials (dragon or angel and type of weapon) to jobMat [jobname,0-3 for units chosen]
  // (jobMat[0-3 for units chosen][type of Statue, type of Weapon])
  }
}

function clearall(){
  totalWeapon = [
  ["Sword",0,0,0,0],
  ["Greatsword",0,0,0,0],
  ["Bow",0,0,0,0],
  ["Fists",0,0,0,0],
  ["Spear",0,0,0,0],
  ["Gun",0,0,0,0],
  ["Dagger",0,0,0,0],
  ["Staff",0,0,0,0],
  ["Katana",0,0,0,0],
  ["Mace",0,0,0,0],
  ["Ninja Blade",0,0,0,0]
]


totalJobMemory = [
  ["Warrior", 0,0,0,0],
  ["Knight", 0,0,0,0],
  ["Soldier",0,0,0,0],
  ["Ranger",0,0,0,0],
  ["Monk",0,0,0,0],
  ["Lancer",0,0,0,0],
  ["Gunner",0,0,0,0],
  ["Thief",0,0,0,0],
  ["White Mage",0,0,0,0],
  ["Black Mage",0,0,0,0],
  ["Red Mage",0,0,0,0],
  ["Green Mage",0,0,0,0],
  ["Samurai",0,0,0,0],
  ["Paladin",0,0,0,0],
  ["Time Mage",0,0,0,0],
  ["Spellblade",0,0,0,0],
  ["Cleric",0,0,0,0],
  ["Ninja",0,0,0,0],
  ["Dragoon",0,0,0,0],
  ["Winged One",0,0,0,0],
  ["Gunbreaker",0,0,0,0],
  ["Sorceress",0,0,0,0]
];

totalElement = [
  ["Fire",0,0,0,0],
  ["Ice",0,0,0,0],
  ["Wind",0,0,0,0],
  ["Earth",0,0,0,0],
  ["Thunder",0,0,0,0],
  ["Water",0,0,0,0],
  ["Light",0,0,0,0],
  ["Dark",0,0,0,0]
];

totalMemory = [0,0,0,0];

totalStatues = [
  [0,0,0,0],
  [0,0,0,0]
];

}

function countMat(){
  clearall();
  calForEachUnit();
  calculateMemory(u1Job); //totalMemory
  calculateElement(u1Job,0) //totalElement
    calculateWeapon(u1Job,0) //totalWeapon
  calculateStatues(u1Job,0) // totalStatues
  calculateJobMemory(u1Job,0) //totalJobMemory

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
function presentElement(){
  let text = ""
  let x = 0;
  for (i = 0; i<8;i++){
    for (x = 1; x<5; x++){
      if (totalElement[i][x] != 0){
        if (x == 1){
          arrayPush(materialNeed,`${totalElement[i][0]} Alcryst (Green)`);
        text += `<b>${totalElement[i][0]} Alcryst (Green)</b> x ${totalElement[i][x]} <br>`
        }
        if (x == 2){
          arrayPush(materialNeed,`${totalElement[i][0]} Alcryst (Blue)`);
        text += `<b>${totalElement[i][0]} Alcryst (Blue)</b> x ${totalElement[i][x]} <br>`
        }
        if (x == 3){
          arrayPush(materialNeed,`${totalElement[i][0]} Alcryst (Purple)`);
        text += `<b>${totalElement[i][0]} Alcryst (Purple)</b> x ${totalElement[i][x]} <br>`
        }
        if (x == 4){
          arrayPush(materialNeed,`${totalElement[i][0]} Alcryst (Yellow)`);
        text += `<b>${totalElement[i][0]} Alcryst (Yellow)</b> x ${totalElement[i][x]} <br>`
        }
      }

    }
    document.getElementById("Alcryst").innerHTML = text;
  }
}

  function presentJobMemory(){
  let text = ""

  let x = 0;
  for (i = 0; i<totalJobMemory.length;i++){
    for (x = 1; x<5; x++){
      if (totalJobMemory[i][x] != 0){
        if (x == 1){
          arrayPush(materialNeed,`${totalJobMemory[i][0]}'s Memory (Green)`);
          text += `<b>${totalJobMemory[i][0]}'s Memory (Green)</b> x ${totalJobMemory[i][x]} <br>`
        }
        if (x == 2){
          arrayPush(materialNeed,`${totalJobMemory[i][0]}'s Memory (Blue)`);
        text += `<b>${totalJobMemory[i][0]}'s Memory (Blue)</b> x ${totalJobMemory[i][x]} <br>`
        }
        if (x == 3){
          arrayPush(materialNeed,`${totalJobMemory[i][0]}'s Memory (Purple)`);
        text += `<b>${totalJobMemory[i][0]}'s Memory (Purple)</b> x ${totalJobMemory[i][x]} <br>`
        }
        if (x == 4){
          arrayPush(materialNeed,`${totalJobMemory[i][0]}'s Memory (Yellow)`);
        text += `<b>${totalJobMemory[i][0]}'s Memory (Yellow)</b> x ${totalJobMemory[i][x]} <br>`
        }
      }
    }
    document.getElementById("JobMemory").innerHTML = text;
  }
}

function presentMemory(){
  let text = ""
  for (i = 0; i<4;i++){
      if (totalMemory[i] != 0){
        if (i == 0){
          // arrayPush(meterialNeed,"Azure Memory")  no need as they can be farmed everywhere
        text += `<b>Faint Memory (Azure)</b> x ${totalMemory[i]} <br>`
        }
        if (i == 1){
          // arrayPush(meterialNeed,"Azure Memory")  no need as they can be farmed everywhere
        text += `<b>Faint Memory (Blue)</b> x ${totalMemory[i]} <br>`
        }
        if (i == 2){
          // arrayPush(meterialNeed,"Azure Memory")  no need as they can be farmed everywhere
        text += `<b>Faint Memory (Purple)</b> x ${totalMemory[i]} <br>`
        }
        if (i == 3){
          // arrayPush(meterialNeed,"Azure Memory")  no need as they can be farmed everywhere
        text += `<b>Faint Memory (Yellow)</b> x ${totalMemory[i]} <br>`
        }
      }

    }
    document.getElementById("FaintMemory").innerHTML = text;
  }

 function presentWeapon(){
  let text = ""
  let x = 0;
  for (i = 0; i<totalWeapon.length;i++){
    for (x = 1; x<5; x++){
      if (totalWeapon[i][x] != 0){
        if (x == 1){
          arrayPush(materialNeed,`${totalWeapon[i][0]} Jadeite`);
          text += `<b>${totalWeapon[i][0]} Jadeite</b> x ${totalWeapon[i][x]} <br>`
        }
        if (x == 2){
          arrayPush(materialNeed,`${totalWeapon[i][0]} Azurite`);
        text += `<b>${totalWeapon[i][0]} Azurite</b> x ${totalWeapon[i][x]} <br>`
        }
        if (x == 3){
          arrayPush(materialNeed,`${totalWeapon[i][0]} Charoite`);
        text += `<b>${totalWeapon[i][0]} Charoite</b> x ${totalWeapon[i][x]} <br>`
        }
        if (x == 4){
          arrayPush(materialNeed,`${totalJobMemory[i][0]} Citrine`);
        text += `<b>${totalWeapon[i][0]} Citrine</b> x ${totalWeapon[i][x]} <br>`
        }
      }
    }
    document.getElementById("Weapon").innerHTML = text;
  }
}

function presentStatue(){
   let text = ""
  let x = 0;
  let w_or_a = "";
  for (i = 0; i<2;i++){
    if (i == 0){
      w_or_a = "Praying Angel Statue";
    }
    else {
      w_or_a = "Prowling Wyvern Statue";
    }
    for (x = 0; x<4; x++){
      if (totalStatues[i][x] != 0){
        if (x == 0){
          arrayPush(materialNeed,`${w_or_a} (Green)`);
          text += `<b>${w_or_a} (Green)</b> x ${totalStatues[i][x]} <br>`
        }
        if (x == 1){
          arrayPush(materialNeed,`${w_or_a} (Blue)`);
        text += `<b>${w_or_a} (Blue)</b> x ${totalStatues[i][x]} <br>`
        }
        if (x == 2){
          arrayPush(materialNeed,`${w_or_a} (Purple)`);
        text += `<b>${w_or_a} (Purple)</b> x ${totalStatues[i][x]} <br>`
        }
        if (x == 3){
          arrayPush(materialNeed,`${w_or_a} (Yellow)`);
        text += `<b>${w_or_a} (Yellow)</b> x ${totalStatues[i][x]} <br>`
        }
      }
    }
    document.getElementById("Statue").innerHTML = text;
  }
}
function calculate(){
  cleanup();
  countMat();
  presentMemory();
  presentElement();
  presentWeapon();
  presentJobMemory();
  presentStatue();
  // outpuTotalStatues()

}

function outpuTotalStatues(){
  let x = 0;

  for (i = 0; i<2; i++){
    for (x = 0; x<4; x++){
      if (totalStatues[i][x] != 0){
          console.log(`You need ${totalStatues[i][x]} x ${statue[0][i]} (${statue[1][x]}) `);

        }
      }
    }
  }

let u1Job =[
  [0,0],
  [0,0],
  [0,0]
]

let u3Job =[
  [0,0],
  [0,0],
  [0,0]
]

let u2Job =[
  [0,0],
  [0,0],
  [0,0]

]
function cleanup(){
  // for unit 1
  u1Job[0][0] = +document.getElementById(`u1job1startinglevel`).value;
  u1Job[0][1] = +document.getElementById(`u1job1goallevel`).value;
  removeNumbers(u1Job[0]);
  document.getElementById('u1job1startinglevel').value=u1Job[0][0];
  document.getElementById('u1job1goallevel').value=u1Job[0][1];
  u1Job[1][0] = +document.getElementById(`u1job2startinglevel`).value;
  u1Job[1][1] = +document.getElementById(`u1job2goallevel`).value;
  removeNumbers(u1Job[1]);
  document.getElementById('u1job2startinglevel').value=u1Job[1][0];
  document.getElementById('u1job2goallevel').value=u1Job[1][1];
  u1Job[2][0] = +document.getElementById(`u1job3startinglevel`).value;
  u1Job[2][1] = +document.getElementById(`u1job3goallevel`).value;
  removeNumbers(u1Job[2]);
  document.getElementById('u1job3startinglevel').value=u1Job[2][0];
  document.getElementById('u1job3goallevel').value=u1Job[2][1];
}

function removeNumbers(array){
  if (array[1]>12){
  array[1]=12;
}
if (array[1]<1){
  array[1]=1;
}
if (array[0]<1){
  array[0]=1;
}
if (array[0]>12){
  array[0]=12;
}
if (array[1]<array[0]){
  array[1]=array[0];
}
}
// function outputmaterials(){
//   let size = Object.keys(myObj).length;
//   let name1 = char[0];
//   for (i = 1; i < size; i++) {

//   }

// }
