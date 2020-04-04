function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
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
  ["Sorceress",0,0,0,0],
  ["Lord",0,0,0,0],
  ["White Mage of Lapis",0,0,0,0]
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
  ["Thancred","Light"],
  ["Gilgamesh","Ice"],
  ["Macherie","Light"],
  ["Engelbert","Light"],
  ["Mediena","Ice"],
  ["Rob","Light"],
  ["Ayaka","Wind"],
  ["Oelde","Fire"],
  ["Aileen","Earth"],
  ["Xiza","Dark"],
  ["Sterne","Dark"],
  ["Frederika","Thunder"],
  ["Mont","Earth"],
  ["Helena","Wind"],
  ["Lilyth","Fire"],
  ["Ramada","Water"],
  ["Grace","Light"],
  ["Khury","Ice"],
  ["Rairyuu","Dark"],
  ["Owe","Thunder"],
  ["Lorenzo","Earth"],
  ["Schuzelt","Thunder"],
  ["Y'Shtola","Fire"],
  ["Margritte","Fire"],
  ["Meriluke","Thunder"],
  ["Cadia","Wind"],
  ["Fina","Light"],
  ["Vistralle","Light"],
  ["Shadowlynx","Dark"],
  ["Vallaide","Ice"],
  ["Severo","Water"],
  ["Naiah","Fire"],
  ["Sosha","Wind"],
  ["Serjes","Ice"],
  ["Phoebe","Light"],
  ["Murmur","Earth"],
  ["Baelo","Earth"],
  ["Vadim","Thunder"],
  ["Yuni","Water"],
  ["Mia","Wind"],
  ["Miche","Fire"],
  ["Learte","Thunder"],
  ["Zazan","Water"]
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

// let totalWeaponZero = totalWeapon.slice();
// let totalJobMemoryZero = totalJobMemory.slice();
// let totalElementZero = totalElement.slice();
// let totalMemoryZero = totalMemory.slice();
// let totalStatuesZero = totalStatues.slice();

function getJobMaterials(jobname, a, b){
  if (jobname == "Warrior"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Warrior's Memory";
  }
  if (jobname == "Knight"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Knight's Memory";
  }
  if (jobname == "Soldier"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Greatsword";
    jobOrbs[a][b] ="Soldier's Memory";
  }
  if (jobname == "Ranger"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Bow";
    jobOrbs[a][b] ="Ranger's Memory";
  }
  if (jobname == "Monk"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Fists";
    jobOrbs[a][b] ="Monk's Memory";
  }
  if (jobname == "Lancer"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Spear";
    jobOrbs[a][b] ="Lancer's Memory";
  }
  if (jobname == "Gunner"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Gun";
    jobOrbs[a][b] ="Gunner's Memory";
  }
  if (jobname == "Thief"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Dagger";
    jobOrbs[a][b] ="Thief's Memory";
  }
  if (jobname == "White Mage"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="White Mage's Memory";
  }
  if (jobname == "Black Mage"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Black Mage's Memory";
  }
    if (jobname == "Red Mage"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Red Mage's Memory";
  }
   if (jobname == "Green Mage"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Green Mage's Memory";
  }
   if (jobname == "Samurai"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Katana";
    jobOrbs[a][b] ="Samurai's Memory";
  }
  if (jobname == "Paladin"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Paladin's Memory";
  }
  if (jobname == "Time Mage"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Time Mage's Memory";
  }
  if (jobname == "Spellblade"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Spellblade's Memory";
  }
  if (jobname == "Cleric"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Mace";
    jobOrbs[a][b] ="Cleric's Memory";
  }
  if (jobname == "Ninja"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Ninja Blade";
    jobOrbs[a][b] ="Ninja's Memory";
  }
  if (jobname == "Dragoon"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Spear";
    jobOrbs[a][b] ="Dragoon's Memory";
  }
  if (jobname == "Winged One"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Winged One's Memory";
  }
  if (jobname == "Gunbreaker"){
    statues[a][b] = "Dragon";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Gunbreaker's Memory";
  }
  if (jobname == "Sorceress"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Staff";
    jobOrbs[a][b] ="Sorceress's Memory";
  }
  if (jobname == "Lord"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Sword";
    jobOrbs[a][b] ="Warrior's Memory";
  }
  if (jobname == "White Mage of Lapis"){
    statues[a][b] = "Angel";
    weapons[a][b] = "Bow";
    jobOrbs[a][b] ="White Mage's Memory";
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
  if (name == `Y'Shtola`){
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
  console.log(element)
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
        if (unitx4[a][i] == totalJobMemory[y][0]){
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
  ["Sorceress",0,0,0,0],
  ["Lord",0,0,0,0],
  ["White Mage of Lapis",0,0,0,0]
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

function checkIfEmpty(array){
  let x = 0;
  for (i = 0; i<array.length;i++){
    for (x = 1; x <array[0].length; x++){
      if (array[i][x] != 0){
        return 1;
        {break;}
      }
    }
  }
  return 0;
}

function present(){
  if (checkIfEmpty(totalMemory)==1){
    console.log("hahaha")
  }
}

function calculate(){
  cleanup();
  countMat()
  present()
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
