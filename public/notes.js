const rank = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace' ]
const suit = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ]
const deck = []

// Problem?

// - shuffle cards
// - create a deck
const main = () => {
  console.log('starting shuffle')
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      // create card object
      const card = {
        suit: suit[i],
        rank: rank[j]
      }
      deck.push(card)
    }
  }
  console.log(deck)

  // shuffle the deck - implement the fisher-yates algorithm
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

// Example Data

// – ace of hearts, jack of clubs, seven of diamonds

// Data Structures

// - deck is going to be an array
// - card is going to be an object that has two values, suit and rank

// Algorithms

// - create a deck

// Code with Intent

document.addEventListener('DOMContentLoaded', main)
