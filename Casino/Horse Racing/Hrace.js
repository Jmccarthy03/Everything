let playermoney = 1000
let bet = document.getElementById('money').value;
document.getElementById('pmoney').innerHTML=playermoney;

function start(){
  if (bet <= playermoney)
    Race();
    checkbet();
  document.getElementById('pmoney').innerHTML=playermoney;
}
function race (){
  let winnum = Math.floor(Math.random() * 6) + 1;
    if (winnum == 1)
     let fplace = "Buttercup";
     let cansec = ['Lighting', 'Slowpoke', 'Pegasus', 'Thunderbolt', 'Barry Allen']
     let secnum = Math.floor(Math.random() * cansec.length);
     let runnerup = cansec[secnum];
    else if (winnum == 2)
      let fplace = "Lightning";
      let cansec = ['Buttercup', 'Slowpoke', 'Pegasus', 'Thunderbolt', 'Barry Allen']
      let secnum = Math.floor(Math.random() * cansec.length);
      let runnerup = cansec[secnum];
    else if (winnum == 3)
      let fplace = "Slowpoke";
      let cansec = ['Lighting', 'Buttercup', 'Pegasus', 'Thunderbolt', 'Barry Allen']
      let secnum = Math.floor(Math.random() * cansec.length);
      let runnerup = cansec[secnum];
    else if (winnum == 4)
      let fplace = "Pegasus";
      let cansec = ['Lighting', 'Slowpoke', 'Buttercup', 'Thunderbolt', 'Barry Allen']
      let secnum = Math.floor(Math.random() * cansec.length);
      let runnerup = cansec[secnum];
    else if (winnum == 5)
      let fplace = "Thunderbolt";
      let cansec = ['Lighting', 'Slowpoke', 'Pegasus', 'Buttercup', 'Barry Allen']
      let secnum = Math.floor(Math.random() * cansec.length);
      let runnerup = cansec[secnum];
    else if (winnum == 6)
      let fplace = "Barry Allen";
      let cansec = ['Lighting', 'Slowpoke', 'Pegasus', 'Thunderbolt', 'Buttercup']
      let secnum = Math.floor(Math.random() * cansec.length);
      let runnerup = cansec[secnum];
}

function checkbet(){
  playermoney -= bet;
  if (bethorse == fplace) 
    let return = bet *= 2; 
  else if (bethorse == runnerup)
    let return = bet *= 1.5;
  playermoney += return
}

