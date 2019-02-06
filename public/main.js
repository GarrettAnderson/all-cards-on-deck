let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ]
let suits = [ 'H', 'D', 'C', 'S' ]
let deck = []

const buildDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits[i])

    for (let j = 0; j < faces.length; j++) {
      console.log(suits[i] + faces[j])
      deck.push(suits[i] + faces[j])
    }
  }
  console.log(deck)
}

const shuffleDeck = () => {
  // for i from 53 - 1 down to 1 do:
  // j = random integer (where 0 <= j <= i)
  // swap items[i] with items[j]
  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    let cardAtPositionI = deck[i]
    let cardAtPositionJ = deck[j]

    // swap items[i] with items[j]
    deck[j] = cardAtPositionI
    deck[i] = cardAtPositionJ

    // shuffledDeck.push(unshuffledDeck[j])
    // unshuffledDeck.splice(j, 1)
  }
  console.log(deck)
}

const dealCard = () => {
  // click on card to display a single value of shuffleDeck array
}

const main = () => {
  // call buildDeck function
  buildDeck()
  // call shuffleDeck function
  shuffleDeck()
}

document.addEventListener('DOMContentLoaded', main)

// add Event Listener to deal a card on button click
document.querySelector('.deal-card').addEventListener('click', dealCard)
