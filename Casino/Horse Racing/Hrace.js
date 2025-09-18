let fplace = "none";
let runnerup = "none";
let bethorse = "none";
let playermoney = 1000;

document.getElementById('pmoney').innerHTML = playermoney;

function placeBet(horse) {
  bethorse = horse;
  let bet = parseInt(document.getElementById('money').value);

  if (isNaN(bet) || bet <= 0) {
    alert("Please enter a valid bet.");
    return;
  }

  if (bet > playermoney) {
    alert("You don’t have enough money to place that bet!");
    return;
  }

  Race();
  checkbet(bet);
  document.getElementById('pmoney').innerHTML = playermoney;
}

// horse button functions
function betbutter() { placeBet("Buttercup"); }
function betlight() { placeBet("Lightning"); }
function betslow() { placeBet("Slowpoke"); }
function betpeg() { placeBet("Pegasus"); }
function betbolt() { placeBet("Thunderbolt"); }
function betba() { placeBet("Barry Allen"); }

function Race() {
  let horses = ["Buttercup", "Lightning", "Slowpoke", "Pegasus", "Thunderbolt", "Barry Allen"];
  let winnum = Math.floor(Math.random() * horses.length);
  fplace = horses[winnum];

  // remove winner from array for runner-up selection
  let others = horses.filter(h => h !== fplace);
  runnerup = others[Math.floor(Math.random() * others.length)];

  document.getElementById('winner').innerHTML = `Winner: ${fplace}, Runner-up: ${runnerup}`;
}

function checkbet(bet) {
  playermoney -= bet; // subtract the bet

  let winnings = 0;
  if (bethorse === fplace) {
    winnings = bet * 2;
  } else if (bethorse === runnerup) {
    winnings = Math.floor(bet * 1.5);
  }

  playermoney += winnings;
}
