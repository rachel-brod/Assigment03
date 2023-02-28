let coinFlip

let flips = parseInt(prompt('How many times do you want to flip the coin?'))

for (let i = 0; i < flips; i++) {
    coinFlip = Math.round(Math.random());
    (coinFlip===0) ? console.log('Heads') : console.log('Tails')
}