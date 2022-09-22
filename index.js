// task1
const prepareTea = () => 'greenTea'

const getTea = (numOfCups) => {
  const teaCups = []

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea()
    teaCups.push(teaCup)
  }
  return teaCups
}

const tea4TeamFCC = getTea(40)
console.log(tea4TeamFCC.length)

// task2

const prepareGreenTea = () => 'greenTea'
const prepareBlackTea = () => 'blackTea'

const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = []

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea()
    teaCups.push(teaCup)
  }
  return teaCups
}

const tea4GreenTeamFCC = getTea2(prepareGreenTea , 27)
const tea4BlackTeamFCC = getTea2(prepareBlackTea , 13)
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
)

// task3

const Window = function(tabs) {
    this.tabs = tabs
  };
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs)
    return this
  }
  
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab')
    return this
  }
  
  Window.prototype.tabClose = function(index) {
  
    const tabsBeforeIndex = this.tabs.slice(0, index)
    const tabsAfterIndex = this.tabs.slice(index + 1)
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex)
    return this
   }
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'])
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium'])
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine'])
  const finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen())
  console.log(finalTabs.tabs)

//   task4

let fixedValue = 4

function incrementer() {
 return fixedValue +1
}
console.log(incrementer)

// task5

function incrementer2(value) {
  return value + 1
}
console.log(incrementer2(fixedValue))

// task6

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(booklistArr, bookName) {
  const newArr = [...booklistArr]
  newArr.push(bookName)
  return newArr
}

function remove(booklistArr, bookName) {
  const newArr = booklistArr.filter(book => book !== bookName)
  return newArr
}
// task7
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
]
const ratings = watchList.map(item => {
  return {
      title:item.Title,
      rating:item.imdbRating
    }
  })
  console.log(ratings)

// task8
const s = [23, 65, 98, 5]

Array.prototype.myMap = function(callback) {
  const newArray = []
  for(let i = 0 ; i < this.length ; i++){
    newArray.push(callback(this[i]))
  }
  return newArray
}

const new_s = s.myMap(item => item * 2)
console.log(new_s)

// task9

const filteredList = watchList.filter(item => +item.imdbRating >= 8).map(item => {
  return {
    title:item.Title,
    rating:item.imdbRating
  }
})
console.log(filteredList)

// task10
Array.prototype.myFilter = function(callback) {
  const newArray = []
  for(let i = 0 ; i < this.length ; i ++){
    if(callback(this[i])== true){
      newArray.push(this[i])
    } 
  }
  return newArray
}

const new_s2= s.myFilter((item) => item % 2 ===1)
console.log(new_s2)

// task11

function sliceArray(anim, beginSlice, endSlice) {
  
  return anim.slice(beginSlice , endSlice)
 
 }
 const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
 const new_anim = sliceArray(inputAnim, 1, 3)
 console.log(new_anim)

// task12

function nonMutatingSplice(cities) {
  return cities.slice(0 , 3)
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities))

// task13 , task14

function nonMutatingConcat(original, attach) {
  return original.concat(attach)
}
const first = [1, 2, 3]
const second = [4, 5]
console.log(nonMutatingConcat(first, second))

// task15

function getRating(watchList) {
  const newArr = watchList.filter(item => item.Director === "Christopher Nolan").map(item => {
    return {
      rating:item.imdbRating
    }
  })
  const averageRating = newArr.reduce((sum,item) => sum + +item.rating , 0)/newArr.length
    return averageRating
  }
  console.log(getRating(watchList))

//task16

const squareList = arr => {
    return arr.filter(number => number > 0 && Number.isInteger(number)).map(number => Math.pow(number , 2))
  }
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
  console.log(squaredIntegers) 

//task 17

function alphabeticalOrder(arr) {
    return arr.sort((a , b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    })
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))