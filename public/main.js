let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace' ]
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
        rank: faces[j]
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
  let player1
  let player2
  for (let i = 0; i < 4; i++) {
    let dealtCard = deck.shift()
    console.log(dealtCard)
    if (i % 2 === 0) {
      // if (deck.length > 0) {
      console.log(i)
      document.querySelector('.player-1-rank').textContent = dealtCard.rank + ' of ' + dealtCard.suit
      playerHand.push(dealtCard)
    } else if (i % 2) {
      console.log(i)
      dealtCard = deck.shift()
      document.querySelector('.player-2-rank').textContent = dealtCard.rank + ' of '
      document.querySelector('.player-2-suit').textContent = dealtCard.suit
      dealerHand.push(dealtCard)
    }
  }
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
