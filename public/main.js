let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ]
let suits = [ 'H', 'D', 'C', 'S' ]
let unshuffledDeck = []
let shuffledDeck = []

const buildDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits[i])

    for (let j = 0; j < faces.length; j++) {
      console.log(suits[i] + faces[j])
      unshuffledDeck.push(suits[i] + faces[j])
    }
  }
  console.log(unshuffledDeck)
}

const main = () => {
  // call buildDeck function
  buildDeck()
  // call shuffleDeck function
  shuffleDeck()
  // add Event Listener to deal a card on button click
}

const shuffleDeck = () => {
  // for i from 53 - 1 down to 1 do:
  // j = random integer (where 0 <= j <= i)
  // swap items[i] with items[j]
  for (i = unshuffledDeck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    shuffledDeck.push(unshuffledDeck[j])
    unshuffledDeck.splice(j, 1)
  }
  console.log(shuffledDeck)
}

document.addEventListener('DOMContentLoaded', main)
