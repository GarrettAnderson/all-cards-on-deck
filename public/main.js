let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace' ]
let suits = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ]
let deck = []

const buildDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits[i])
    for (let j = 0; j < faces.length; j++) {
      // console.log(suits[i] + faces[j])
      // let cardDealt = document.createElement('li')
      deck.push(faces[j] + ' of ' + suits[i])
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
  // for (let i = 0; i < suits.length; i++) {
  //   // console.log(suits[i])
  //   for (let j = 0; j < faces.length; j++) {
  //     // console.log(faces[1])
  //   }
  // }
  dealtCard = deck.shift()
  console.log(deck)
  // let cardDealt = document.createElement('li')
  document.querySelector('.card-dealt-value').textContent = dealtCard
  // if (dealtCard.includes('Spades')) {
  //   console.log(5)
  //   document.querySelector('.card-suit-icon').classList.add('spades-card-image')
  }
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
