function RollDice(){

    const numofDice = document.getElementById("NumOfDice").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; ++i){
        let value = Math.round(Math.random() * 6) + 1;
        if(value > 6){
            value = value - 1;
        }
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join('');
}