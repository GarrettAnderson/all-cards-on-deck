let faces = [
  { value: 2, face: 2 },
  { value: 3, face: 3 },
  { value: 4, face: 4 },
  { value: 5, face: 5 },
  { value: 6, face: 6 },
  { value: 7, face: 7 },
  { value: 8, face: 8 },
  { value: 9, face: 9 },
  { value: 10, face: 10 },
  { value: 10, face: 'Jack' },
  { value: 10, face: 'Queen' },
  { value: 10, face: 'King' },
  { value: 11, face: 'Ace' }
]

let suits = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ]
let deck = []
let dealerHand = []
let playerHand = []

const buildDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits[i])
    for (let j = 0; j < faces.length; j++) {
      // console.log(suits[i] + faces[j])
      // let cardDealt = document.createElement('li')
      // deck.push(faces[j] + ' of ' + suits[i])
      const card = {
        suit: suits[i],
        rank: faces[j].value,
        face: faces[j].face
      }
      deck.push(card)
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
  }
  console.log(deck)
}

const dealCard = () => {
  // click on card to display a single value of shuffleDeck array
  console.log(suits)
  let dealtCard = deck.shift()
  playerHand.push(dealtCard)
  let nextDealtCard = deck.shift()
  dealerHand.push(nextDealtCard)
  console.log(dealtCard)
  console.log(nextDealtCard)
  console.log(playerHand)
  console.log(dealerHand)
}

const hitMeDeal = () => {
  console.log(suits)
  let dealtCard = deck.shift()
  playerHand.push(dealtCard)
  let nextDealtCard = deck.shift()
  dealerHand.push(nextDealtCard)
  console.log(dealtCard)
  console.log(nextDealtCard)
  console.log(playerHand)
  console.log(dealerHand)
}

const main = () => {
  // call buildDeck function
  buildDeck()
  // call shuffleDeck function
  shuffleDeck()
}

document.addEventListener('DOMContentLoaded', main)

// add Event Listener to deal a card on button click
document.querySelector('.deck-of-cards-facedown').addEventListener('click', dealCard)

document.querySelector('.hit-me-button').addEventListener('click', hitMeDeal)
