function betbutter(){
  Race()
}
function race (){
  let winnum = Math.floor(Math.random() * 6) + 1;
    if (winnum == 1)
     let fplace = "Buttercup";
    cansec = ['Lighting', 'Slowpoke', 'Pegasus', 'Thunderbolt', 'Barry Allen']
     let secnum = Math.floor(Math.random() * cansec.length);
    runnerup = cansec[secnum];
    else if (winnum == 2)
      let fplace = "Lightning";
    else if (winnum == 3)
      let fplace = "Slowpoke";
    else if (winnum == 4)
      let fplace = "Pegasus";
    else if (winnum == 5)
      let fplace = "Thunderbolt";
    else if (winnum == 6)
      let fplace = "Barry Allen";
}
