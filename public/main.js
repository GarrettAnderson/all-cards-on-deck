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

let suits = [ 'hearts', 'diamonds', 'clubs', 'spades' ]
let deck = []
let dealerHand = []
let playerHand = []
let playerScore = []
let dealerScore = []
let players = new Array()
let currentPlayer = 0

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

// const createPlayers = (num) => {
//   players = new Array()
//   for (let i = 0; i <= num; i++) {
//     let hand = new Array()
//     let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
//     players.push(player)
//   }
//   console.log(players)
// }

// deal card to player
const dealPlayerHand = () => {
  // click on card to display a single value of shuffleDeck array
  // for (let i = 0; i < 2; i++) {
  // for (let j = 0; j < players.length; j++) {
  let dealtCard = deck.shift()
  playerHand.push(dealtCard)
  console.log(playerHand)
  let targetPlayerHand = document.querySelector('.card-dealt-list')
  let image = document.createElement('img')
  image.src = '/images/' + dealtCard.rank + '_of_' + dealtCard.suit + '.svg'
  // }
  targetPlayerHand.appendChild(image)
}
//   let targetPlayerHand = document.querySelector('.card-dealt-list')
//   let image = document.createElement('img')
//   image.src = '/images/' + playerHand[i].rank + '_of_' + playerHand[i].suit + '.svg'
// }

// Deal Card to dealer
const dealDealerHand = () => {
  let nextDealtCard = deck.shift()
  dealerHand.push(nextDealtCard)
  let targetDealerHand = document.querySelector('.card-2-dealt-list')
  let image = document.createElement('img')
  image.src = '/images/' + nextDealtCard.rank + '_of_' + nextDealtCard.suit + '.svg'
  targetDealerHand.appendChild(image)
}

const countPlayerScore = () => {
  if (playerHand.length === 2) {
    playerScore = playerHand[0].rank + playerHand[1].rank
    document.querySelector('.player-1-score').textContent = playerScore
  } else if (playerHand.length === 3) {
    playerScore = playerHand[0].rank + playerHand[1].rank + playerHand[2]
    document.querySelector('.player-1-score').textContent = playerScore
  } else if (playerHand.length === 3) {
    playerScore = playerHand[0].rank + playerHand[1].rank + playerHand[2] + playerHand[3]
    document.querySelector('.player-1-score').textContent = playerScore
  }
}

const countDealerScore = () => {
  if (dealerHand.length === 2) {
    dealerScore = dealerHand[0].rank + dealer[1].rank
    document.querySelector('.player-2-score').textContent = playerScore
  } else if (dealerHand.length === 3) {
    playerScore = dealerHand[0].rank + dealerHand[1].rank + dealerHand[2]
    document.querySelector('.player-1-score').textContent = playerScore
  } else if (dealerHand.length === 3) {
    playerScore = dealerHand[0].rank + dealerHand[1].rank + dealerHand[2] + dealerHand[3]
    document.querySelector('.player-1-score').textContent = playerScore
  }
}

// function for the stay button or end the game
const endPlay = () => {
  console.log('stya button was pushed')
  dealDealerHand()
  countDealerScore()
  if (dealerScore < 17) {
    endPlay()
  } else if (dealerScore >= 17 && dealerScore <= 21) {
    determineWinner()
  } else if (dealerScore > 21) {
    console.log('Dealer has busted')
  }
}

// add card to deck when hit me button is pressed
const hitMe = () => {
  console.log('Hit Me')
  dealPlayerHand()
  countPlayerScore()
  if (playerScore <= 21) {
    console.log('Hit or Stay')
  } else if (playerScore >= 21) {
    console.log('you busted')
  }
}

const renderCard = (card, player) => {
  let hand
}

// check who is the winner of the round
const determineWinner = () => {
  if (playerScore > dealerScore) {
    console.log('Player has won the game.')
  } else if (playerScore === dealerScore) {
    console.log('There is a tie. No one has won.')
  } else if (playerScore < dealerScore) {
    console.log('Dealer has won the game.')
  }
}
// console.log(suits)
// let dealtCard = deck.shift()
// playerHand.push(dealtCard)
// let nextDealtCard = deck.shift()
// dealerHand.push(nextDealtCard)
// console.log(dealtCard)
// console.log(nextDealtCard)
// console.log(playerHand)
// console.log(dealerHand)

// const hitMeDeal = () => {
//   console.log(suits)
//   let dealtCard = deck.shift()
//   playerHand.push(dealtCard)
//   let nextDealtCard = deck.shift()
//   dealerHand.push(nextDealtCard)
//   console.log(dealtCard)
//   console.log(nextDealtCard)
//   console.log(playerHand)
//   console.log(dealerHand)
// }

// create players function

const main = () => {
  // call buildDeck function
  buildDeck()
  // call shuffleDeck function
  shuffleDeck()
  // create players on page load
  // createPlayers()
}

const dealBothPlayers = () => {
  dealPlayerHand()
  dealDealerHand()
}

document.addEventListener('DOMContentLoaded', main)

// add Event Listener to deal a card on button click
document.querySelector('.deck-of-cards-facedown').addEventListener('click', dealBothPlayers)

document.querySelector('.hit-me-button').addEventListener('click', hitMe)
