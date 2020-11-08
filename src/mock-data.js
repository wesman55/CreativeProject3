let mock = [{
    id: 1,
    name: "Gloomhaven",
    price: "$106.99",
    category: "Fantasy",
    image: 'gloomhaven.jpg',
    quantity: 0,
    rating: 8.81,
    numvoters: 38970
  },
  {
    id: 2,
    name: "Chess",
    price: "$19.99",
    category: "Classic",
    image: "chess.jpg",
    quantity: 0,
    rating: 7.11,
    numvoters: 27578
  },
  {
    id: 3,
    name: "Scythe",
    price: "$51.99",
    category: "Fantasy",
    image: 'scythe.jpg',
    quantity: 0,
    rating: 8.25,
    numvoters: 54538
  },
  {
    id: 4,
    name: "Brass: Birmingham",
    price: "$69.99",
    category: "Strategy",
    image: 'brass.jpg',
    quantity: 0,
    rating: 8.65,
    numvoters: 16446
  },
  {
    id: 5,
    name: "Scrabble",
    price: "$25.99",
    category: "Classic",
    image: 'scrabble.jpg',
    quantity: 0,
    rating: 6.28,
    numvoters: 25881
  },
  {
    id: 6,
    name: "Monopoly",
    price: "$29.99",
    category: "Classic",
    image: 'monopoly.jpg',
    quantity: 0,
    rating: 4.36,
    numvoters: 27208
  },
  {
    id: 7,
    name: "The Settlers of Catan",
    price: "$32.99",
    category: "Strategy",
    image: 'catan.jpg',
    quantity: 0,
    rating: 7.16,
    numvoters: 97942
  },
  {
    id: 8,
    name: "Clue",
    price: "$21.99",
    category: "Strategy",
    image: 'clue.jpg',
    quantity: 0,
    rating: 5.67,
    numvoters: 17012
  },
  {
    id: 9,
    name: "Codenames",
    price: "$19.99",
    category: "Cards",
    image: 'codenames.jpg',
    quantity: 0,
    rating: 7.63,
    numvoters: 64329
  },
  {
    id: 10,
    name: "Risk",
    price: "$23.99",
    category: "Strategy",
    image: 'risk.jpg',
    quantity: 0,
    rating: 5.59,
    numvoters: 29392
  },
  {
    id: 11,
    name: "Pandemic",
    price: "$59.99",
    category: "Strategy",
    image: "pandemic.jpg",
    quantity: 0,
    rating: 7.61,
    numvoters: 98226
  },
  {
    id: 12,
    name: "Connect Four",
    price: "$10.99",
    category: "Classic",
    image: "connectfour.jpg",
    quantity: 0,
    rating: 4.87,
    numvoters: 6599
  },
  {
    id: 13,
    name: "Trivial Pursuit",
    price: "$34.99",
    category: "Trivia",
    image: "trivial.jpg",
    quantity: 0,
    rating: 5.23,
    numvoters: 7334
  },
  {
    id: 14,
    name: "Candy Land",
    price: "$24.99",
    category: "Adventure",
    image: "candyland.jpg",
    quantity: 0,
    rating: 3.18,
    numvoters: 3840
  },
  {
    id: 15,
    name: "Battleship",
    price: "$24.99",
    category: "Strategy",
    image: "battleship.jpg",
    quantity: 0,
    rating: 4.63,
    numvoters: 8209
  },
  {
    id: 16,
    name: "Pictionary",
    price: "$19.99",
    category: "Drawing",
    image: "pictionary.jpg",
    quantity: 0,
    rating: 5.82,
    numvoters: 6722
  },
  {
    id: 17,
    name: "The Game of Life",
    price: "$30.99",
    category: "Classic",
    image: "life.jpeg",
    quantity: 0,
    rating: 4.3,
    numvoters: 10244
  },
  {
    id: 18,
    name: "Jenga",
    price: "$9.99",
    category: "Classic",
    image: "jenga.jpg",
    quantity: 0,
    rating: 5.60,
    numvoters: 11177
  },
  {
    id: 19,
    name: "Betrayal at House on the Hill",
    price: "$49.99",
    category: "Adventure",
    image: "betrayal.jpg",
    quantity: 0,
    rating: 7.06,
    numvoters: 35803
  },
  {
    id: 20,
    name: "Chutes and Ladders",
    price: "$19.99",
    category: "Classic",
    image: "chutes.jpg",
    quantity: 0,
    rating: 2.85,
    numvoters: 3609
  },
  {
    id: 21,
    name: "Guess Who?",
    price: "$24.99",
    category: "Classic",
    image: "guess.jpg",
    quantity: 0,
    rating: 4.79,
    numvoters: 4433
  },
  {
    id: 22,
    name: "Apples to Apples",
    price: "$9.99",
    category: "Cards",
    image: "apples.jpg",
    quantity: 0,
    rating: 5.82,
    numvoters: 17302
  },
  {
    id: 23,
    name: "Exploding Kittens",
    price: "$10.99",
    category: "Cards",
    image: "kitten.jpg",
    quantity: 0,
    rating: 6.02,
    numvoters: 19849
  },
  {
    id: 24,
    name: "Terraforming Mars",
    price: "$100.99",
    category: "Adventure",
    image: "mars.jpg",
    quantity: 0,
    rating: 8.43,
    numvoters: 60106
  },
  {
    id: 25,
    name: "Twister",
    price: "$24.99",
    category: "Classic",
    image: "twister.jpg",
    quantity: 0,
    rating: 4.54,
    numvoters: 3758
  },
  {
    id: 26,
    name: "Stratego",
    price: "$24.99",
    category: "Strategy",
    image: "stratego.jpg",
    quantity: 0,
    rating: 6.09,
    numvoters: 13456
  },
  {
    id: 27,
    name: "Sorry!",
    price: "$24.99",
    category: "Classic",
    image: "sorry.jpeg",
    quantity: 0,
    rating: 4.51,
    numvoters: 5650
  },
  {
    id: 28,
    name: "Scattergories",
    price: "$20.99",
    category: "Trivia",
    image: "scatter.jpg",
    quantity: 0,
    rating: 6.19,
    numvoters: 8224
  },
  {
    id: 29,
    name: "Yahtzee",
    price: "$14.99",
    category: "Classic",
    image: "yahtzee.jpg",
    quantity: 0,
    rating: 5.38,
    numvoters: 11346
  },
  {
    id: 30,
    name: "Blokus",
    price: "$29.99",
    category: "Strategy",
    image: "blockus.jpg",
    quantity: 0,
    rating: 6.89,
    numvoters: 22248

  },
  {
    id: 31,
    name: "Cranium",
    price: "$34.99",
    category: "Trivia",
    image: "cranium.jpg",
    quantity: 0,
    rating: 5.68,
    numvoters: 8402
  },
  {
    id: 32,
    name: "Mansions of Madness",
    price: "$99.99",
    category: "Fantasy",
    image: "mansion.png",
    quantity: 0,
    rating: 7.30,
    numvoters: 12603
  },
  {
    id: 33,
    name: "Dungeons and Dragons",
    price: "$34.99",
    category: "Fantasy",
    image: "dragon.jpg",
    quantity: 0,
    rating: 6.54,
    numvoters: 1710
  },
  {
    id: 34,
    name: "Telestrations",
    price: "$19.99",
    category: "Drawing",
    image: "tele.jpg",
    quantity: 0,
    rating: 7.40,
    numvoters: 12219

  },
  {
    id: 35,
    name: "Operation",
    price: "$29.99",
    category: "Classic",
    image: "operation.jpg",
    quantity: 0,
    rating: 4.09,
    numvoters: 3455
  },
  {
    id: 36,
    name: "Lord of The Rings",
    price: "$99.99",
    category: "Fantasy",
    image: "lord.png",
    quantity: 0,
    rating: 6.75,
    numvoters: 14032
  },
  {
    id: 37,
    name: "Uno",
    price: "$19.99",
    category: "Cards",
    image: "uno.jpg",
    quantity: 0,
    rating: 5.39,
    numvoters: 20224
  },
  {
    id: 38,
    name: "Scrawl",
    price: "$19.99",
    category: "Drawing",
    image: "scrawl.jpg",
    quantity: 0,
    rating: 7.13,
    numvoters: 382
  },
  {
    id: 39,
    name: "Mysterium",
    price: "$89.99",
    category: "Adventure",
    image: "mysteryium.jpg",
    quantity: 0,
    rating: 7.32,
    numvoters: 30390
  },
  {
    id: 40,
    name: "Checkers",
    price: "$19.99",
    category: "Classic",
    image: "checkers.jpg",
    quantity: 0,
    rating: 4.88,
    numvoters: 6938
  },
  {
    id: 41,
    name: "Civilization",
    price: "$74.99",
    category: "Strategy",
    image: 'civilization.jpg',
    quantity: 0,
    rating: 7.50,
    numvoters: 7050
  },
  {
    id: 42,
    name: "Ticket To Ride",
    price: "$49.99",
    category: "Strategy",
    image: 'ticket.jpg',
    quantity: 0,
    rating: 7.43,
    numvoters: 69190
  },
  {
    id: 43,
    name: "7 Wonders",
    price: "$54.99",
    category: "Adventure",
    image: 'wonders.jpg',
    quantity: 0,
    rating: 7.76,
    numvoters: 81566
  },
  {
    id: 44,
    name: "Quelf",
    price: "$49.99",
    category: "Party",
    image: 'quelf.jpg',
    quantity: 0,
    rating: 5.28,
    numvoters: 2484
  },
  {
    id: 45,
    name: "Secret Hitler",
    price: "$34.99",
    category: "Party",
    image: 'hitler.jpg',
    quantity: 0,
    rating: 7.57,
    numvoters: 17025
  },
  {
    id: 46,
    name: "Forbidden Island",
    price: "$34.99",
    category: "Adventure",
    image: 'island.jpg',
    quantity: 0,
    rating: 6.80,
    numvoters: 40601
  },
  {
    id: 47,
    name: "Backgammon",
    price: "$24.99",
    category: "Classic",
    image: 'back.jpg',
    quantity: 0,
    rating: 6.53,
    numvoters: 11358
  },
  {
    id: 48,
    name: "Mouse Trap",
    price: "$24.99",
    category: "Classic",
    image: 'mouse.jpg',
    quantity: 0,
    rating: 4.11,
    numvoters: 2580
  },
  {
    id: 49,
    name: "Gloomhaven: Jaws of the Lion",
    price: "$89.99",
    category: "Fantasy",
    image: 'lion.jpg',
    quantity: 0,
    rating: 9.02,
    numvoters: 4262
  },
  {
    id: 50,
    name: "Scene It",
    price: "$29.99",
    category: "Trivia",
    image: 'scene.jpg',
    quantity: 0,
    rating: 5.51,
    numvoters: 1420
  }
]

export default mock;
