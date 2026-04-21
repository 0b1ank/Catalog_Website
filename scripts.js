/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


const ZONAI_FAN_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/4/47/ZonaiFan_100Thumb.jpg?width=113&dpr=2&format=jpg&auto=webp&quality=80";
const ZONAI_WING_DEVICE_URL =  
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/7/75/ZonaiWing_100Thumb.jpg?width=132&dpr=2&format=jpg&auto=webp&quality=80";
const ZONAI_CART_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/0/07/ZonaiCart_100Thumb.jpg?width=140&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_BALLOON_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/9/9b/ZonaiBalloon_100Thumb.jpg?width=129&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_ROCKET_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/5/50/ZonaiRocketThumb.jpg?width=139&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_TIMEBOMB_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/e/eb/ZonaiTimeBomb_100Thumb.jpg?width=133&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_PORTYPOT_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/d/da/ZonaiPot_100Thumb.jpg?width=156&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_FLAME_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/e/e8/ZonaiFlame_100Thumb.jpg?width=119&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_FROST_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/b/b1/ZonaiFrost_100Thumb.jpg?width=129&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_SHOCK_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/8/8c/ZonaiShock_100Thumb.jpg?width=139&dpr=2&format=jpg&auto=webp&quality=80";
const ZONAI_BEAM_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/c/c8/ZonaiBeam_100Thumb.jpg?width=133&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_HYDRANT_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/f/f3/ZonaiHydrant_Thumb100.jpg?width=156&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_STEERING_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/2/23/ZonaiSteering_Thumb100.jpg?width=140&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_BIGWHEEL_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/a/aa/ZonaiBigWheel_100Thumb.jpg?width=129&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_SMALLWHEEL_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/6/6b/ZonaiSmallWheel_100Thumb.jpg?width=139&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_SLED_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/7/7c/ZonaiSled_100Thumb.jpg?width=133&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_BAT_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/b/b6/ZonaiSmallBatt_100Thumb.jpg?width=156&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_BIGBAT_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/5/56/ZonaiBigBatt_100Thumb.jpg?width=140&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_SPRING_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/b/bc/ZonaiSpring_100Thumb.jpg?width=129&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_CANNON_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/8/8d/ZonaiCannon_100Thumb.jpg?width=139&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_STABILIZER_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/c/cc/ZonaiStabil_100Thumb.jpg?width=133&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_HOVER_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/0/0d/ZonaiFloat_100Thumb.jpg?width=156&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_LIGHT_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/5/54/ZonaiLight_100Thumb.jpg?width=140&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_STAKE_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/c/cb/ZonaiStake_100Thumb.jpg?width=129&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_MIRROR_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/2/2a/ZonaiMirror_100Thumb.jpg?width=139&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_HOMINGCART_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/4/46/ZonaiHoming_100Thumb.jpg?width=133&dpr=2&format=jpg&auto=webp&quality=80"; 
const ZONAI_CONSTRUCTHEAD_DEVICE_URL = 
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/d/d0/ZonaiConstruct_100Thumb.jpg?width=156&dpr=2&format=jpg&auto=webp&quality=80"; 
  

// This is an array of strings (TV show titles)
const devices = [
  {name: "Fan",
   category: "Propulsion",
   image: ZONAI_FAN_DEVICE_URL, 
   MaxLife: 54000, 
   Locations: ["Courage Island", "East Hebra Sky Archipelago","Great Sky Island","Lanayru Sky Archipelago", "South Eldin Sky Archipelago", "Thunderhead Isles", "Wellspring Island", "Kakariko Village", "Tarrey Town"]
  },
  {name: "Wing",
    category: "Propulsion",
    image: ZONAI_WING_DEVICE_URL,
    MaxLife: 2250,
    Locations: ["Left Leg Depot", "East Hebra Sky Archipelago", "Great Sky Island", "Lanayru Sky Archipelago", "Lightcast Island", "North Necluda Sky Archipelago", "South Lanayru Sky Archipelago", "Tabantha Sky Archipelago", "Wellspring Island"]
  },
  {name: "Cart",
    category: "Utility",
    image: ZONAI_CART_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["East Hebra Sky Archipelago", "Lanayru Sky Archipelago", "Sokkala Sky Archipelago", "West Necluda Sky Archipelago"]
  },
  {name: "Balloon",
    category: "Utility",
    image: ZONAI_BALLOON_DEVICE_URL ,
    MaxLife: 3600, 
    Locations:["Courage Island", "Lightcast Island", "West Necluda Sky Archipelago", "Kakariko Village", "Tarrey Town"]
  },
  {name: "Rocket",
    category: "Propulsion",
    image: ZONAI_ROCKET_DEVICE_URL,
    MaxLife: 90, 
    Locations:["Left Leg Depot", "South Hyrule Sky Archipelago", "West Hebra Sky Archipelago", "Tarrey Town"]
  },
  {name: "Time Bomb",
    category: "Weapon",
    image: ZONAI_TIMEBOMB_DEVICE_URL,
    MaxLife: 240,
    Locations:["Courage Island", "North Necluda Sky Archipelago", "Sky Mine", "South Hyrule Sky Archipelago", "West Hebra Sky Archipelago", "Zonaite Forge Island"]
  },
  {name: "Portable Pot",
    category: "Utility",
    image: ZONAI_PORTYPOT_DEVICE_URL, 
    MaxLife: 0,
    Locations:["Death Mountain Depths", "Courage Island", "Great Sky Island", "Thunderhead Isles", "West Hebra Sky Archipelago", "Digdogg Suspension Bridge"]
  },
  {name: "Flame Emitter",
    category: "Weapon",
    image: ZONAI_FLAME_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Bravery Island", "Great Sky Island", "Zonaite Forge Island", "West Hebra Sky Archipelago"]

  },
  {name: "Frost Emitter",
    category: "Weapon",
    image: ZONAI_FROST_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["South Lanayru Sky Archipelago", "Starview Island", "Tabantha Sky Archipelago", "Zonaite Forge Island"]
  },
  {name: "Shock Emitter",
    category: "Weapon",
    image: ZONAI_SHOCK_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["North Hyrule Sky Archipelago", "Starview Island", "Thunderhead Isles"]
  },
  {name: "Beam Emitter",
    category: "Weapon",
    image: ZONAI_BEAM_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["East Gerudo Sky Archipelago", "Lanayru Sky Archipelago", "Valor Island", "Zonaite Forge Island"]
  },
  {name: "Hydrant",
    category: "Utility",
    image: ZONAI_HYDRANT_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Sky Mine", "South Eldin Sky Archipelago", "Valor Island", "West Necluda Sky Archipelago"]
  },
  {name: "Steering Stick",
    category: "Propulsion",
    image: ZONAI_STEERING_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Depth Mountain Depths", "East Gerudo Sky Archipelago", "Left Leg Depot", "Neculda Sky Archipelago", "North Hyrule Sky Archipelago", "Valor Island", "Tarrey Town"]
  },
  {name: "Big Wheel",
    category: "Propulsion",
    image: ZONAI_BIGWHEEL_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Depth Mountain Depths", "Left Leg Depot", "South Eldin Sky Archipelago", "Digdogg Suspension Bridge", "Kakariko Village", "Tarrey Town"]
  },
  {name: "Small Wheel",
    category: "Propulsion",
    image: ZONAI_SMALLWHEEL_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Left Leg Depot", "Necluda Sky Archipelago", "South Hyrule Sky Archipelago", "Tabantha Sky Archipelago", "Tarrey Town"]
  },
  {name: "Sled",
    category: "Utility",
    image: ZONAI_SLED_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["East Gerudo Sky Archipelago", "East Hebra Sky Archipelago", "Starview Island"]
  },
  {name: "Battery",
    category: "Energy",
    image: ZONAI_BAT_DEVICE_URL,
    MaxLife: 4500, 
    Locations:["South Eldin Sky Archipelago", "South Lanayru Sky Archipelago", "Thunderhead Isles", "Wellspring Island", "Digdogg Suspension Bridge"]
  },
  {name: "Big Battery",
    category: "Energy",
    image: ZONAI_BIGBAT_DEVICE_URL,
    MaxLife: 63000, 
    Locations:[]
  },
  {name: "Spring",
    category: "Propulsion",
    image: ZONAI_SPRING_DEVICE_URL,
    MaxLife: 500, 
    Locations:["Lightcast Island", "North Necluda Sky Archipelago", "Valor Island", "Digdogg Suspension Bridge"]
  },
  {name: "Cannon",
    category: "Weapon",
    image: ZONAI_CANNON_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Necluda Sky Archipelago", "Sokkala Sky Archipelago", "North Necluda Sky Archipelago"]
  },
  {name: "Stabilizer",
    category: "Utility",
    image: ZONAI_STABILIZER_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Starview Island"]
  },
  {name: "Hover Stone",
    category: "Utility",
    image: ZONAI_HOVER_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Lightcast Island", "Sky Mine", "Wellspring Island"]
  },
  {name: "Light",
    category: "Utility",
    image: ZONAI_LIGHT_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Bravery Island", "East Hebra Sky Archipelago", "Necluda Sky Archipelago", "North Hyrule Sky Archipelago", "South Hyrule Sky Archipelago"]
  },
  {name: "Stake",
    category: "Utility",
    image: ZONAI_STAKE_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["East Gerudo Sky Archipelago", "Sokkala Sky Archipelago", "Starview Island", "Digdogg Suspension Bridge"]
  },
  {name: "Mirror",
    category: "Utility",
    image: ZONAI_MIRROR_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["East Gerudo Sky Archipelago", "Lightcast Island", "South Lanayru Sky Archipelago", "Tabantha Sky Archipelago"]
  },
  {name: "Homing Cart",
    category: "Propulsion",
    image: ZONAI_HOMINGCART_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["North Hyrule Sky Archipelago", "Sky Mine", "Sokkala Sky Archipelago", "Zonaite Forge Island"]
  },
  {name: "Construct Head",
    category: "Utility",
    image: ZONAI_CONSTRUCTHEAD_DEVICE_URL,
    MaxLife: 54000, 
    Locations:["Sokkala Sky Archipelago", "West Necluda Sky Archipelago", "Bravery Island", "Left Leg Depot"]
  }
];

const construct = []; 
const redo = []; 


// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

function addDeviceIntoConstruct(device){
  construct.push(device); 
  showConstructCards(); 
}

function removeDeviceFromConstruct(){
  redo.push(construct[construct.length - 1])
  construct.pop();
  showConstructCards(); 

}

function redoDevice(){
  if(redo.length === 0){
    alert("No more devices to redo!"); 
  }
  else{
    construct.push(redo[redo.length-1]); 
  redo.pop(); 
  }
  showConstructCards(); 
}


function showConstructCards(){
  const cardContainer = document.getElementById("construct-container");
  cardContainer.innerHTML = "";
  let no_button = false; 
  const templateCard = document.querySelector(".card");
  for (let i = 0; i < construct.length; i++) {
    let device_name = construct[i].name;
    let device_image = construct[i].image; 

  
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editConstructCardContent(nextCard, device_name, device_image);// Edit title and image
    cardContainer.appendChild(nextCard);
}

}

function editConstructCardContent(card, newDeviceName, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newDeviceName;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newDeviceName + " Poster";

  const listContainer = card.querySelector(".description");
  listContainer.innerHTML = ""; 
  

}

function numOfDevicesInConstruct(){
  const map = new Map(); 
  for(let i = 0; i < construct.length; i++){
    let name = construct[i].name; 
    if(map.has(name)){
      map.set(name, map.get(name) + 1); 
    }
    else {
      map.set(name, 1); 
    }
  }

  return map; 
}

function locationsConstruct(){
  const myHashSet = new Set(); 
  for(let i = 0; i < construct.length; i++){
    for(let j = 0; j < construct[i].Locations.length; j++){
      myHashSet.add(construct[i].Locations[j]); 
    }
  }

  return myHashSet; 
}






// This function adds cards the page to display the data in the array
function showDeviceCards(zonaiList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < zonaiList.length; i++) {
    let device_name = zonaiList[i].name;
    let device_image = zonaiList[i].image; 


    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    imageURL = device_image; 
  
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editZonaiCardContent(nextCard, zonaiList[i], zonaiList[i].name, zonaiList[i].image, zonaiList[i].MaxLife, zonaiList[i].category, zonaiList[i].Locations); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}



function editZonaiCardContent(card, newDevice, newDeviceName, newImageURL, maxLife, zonaiCategory, locations) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newDeviceName;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newDeviceName + " Poster";

  const listContainer = card.querySelector(".description"); 
  listContainer.innerHTML = "";

 
  const catLi = document.createElement("li");
  catLi.innerHTML = `<small class="label">Category</small><span class="value-text">${zonaiCategory}</span>`;
  listContainer.appendChild(catLi);
  
 
  const lifeLi = document.createElement("li");
  lifeLi.innerHTML = `<small class="label">Max Life</small><span class="value-text">${maxLife}</span>`;
  listContainer.appendChild(lifeLi);
  
  const locHeaderLi = document.createElement("li");
  locHeaderLi.innerHTML = `<small class="label">Some Locations</small>`;
  listContainer.appendChild(locHeaderLi);

  let maxBullets = Math.min(3, locations.length);
  for(let i = 0; i < maxBullets; i++){
    const li = document.createElement("li"); 
    li.textContent = locations[i]; 
    li.style.listStyle = "disc"; 
    li.style.marginLeft = "15px"; 
    listContainer.appendChild(li);
  }

  const button = document.createElement("button"); 
  button.type = "button"
  button.className = "add-btn";
  button.textContent = "Add me"; 
  listContainer.appendChild(button)
  button.addEventListener("click", () => addDeviceIntoConstruct(newDevice)); 

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newDevice, "- html: ", card);
}

function showLogisticsReport() {
  let message = "--- SHOPPING LIST ---\n";

  let deviceMap = numOfDevicesInConstruct();
  for (let [name, count] of deviceMap) {
    message += name + ": " + count + "\n";
  }

  message += "\n--- FARMING GUIDE (ALL LOCATIONS) ---\n";

  let locationSet = locationsConstruct();
  for (let place of locationSet) {
    message += "- " + place + "\n";
  }

  alert(message);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => showDeviceCards(devices));




//Finding different typees of devices 

function findWeaponDevices() {  
  let weapons = []; 
  for(let i = 0; i < devices.length; i++){
    if (devices[i].category == "Weapon"){
      weapons.push(devices[i]); 
    }
  }
  return weapons; 
}

function findPropulsionDevices() {  
  let propulsions = []; 
  for(let i = 0; i < devices.length; i++){
    if (devices[i].category == "Propulsion"){
      propulsions.push(devices[i]); 
    }
  }
  return propulsions; 
}

function findUtilityDevices() {  
  let utilities = []; 
  for(let i = 0; i < devices.length; i++){
    if (devices[i].category == "Utility"){
      utilities.push(devices[i]); 
    }
  }

  return utilities; 
}

// Display Functions

function displayWeaponDevices() {
  showDeviceCards(findWeaponDevices());
}

function displayAllDevices(){
  showDeviceCards(devices); 
}

function displayUtilityDevices() {
  showDeviceCards(findUtilityDevices());
}

function displayPropulsionDevices() {
  showDeviceCards(findPropulsionDevices());
}

function displaylstgrtstMaxLife(){
  let sortedCopy = [...devices]; 
  let maxLife = sortedCopy.sort((a, b) => b.MaxLife - a.MaxLife); 
  showDeviceCards(sortedCopy); 
}