// Task 1 Learn About Functional Programming
const prepareTea = () => 'greenTea'
const getTea = (numOfCups) => {
    const teaCups = []

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea()
        teaCups.push(teaCup)
    }
    return teaCups
}
const tea4TeamFCC = getTea(40)
console.log(tea4TeamFCC.length)

// Task 2 Understand Functional Programming Terminology
const prepareGreenTea = () => 'greenTea'
const prepareBlackTea = () => 'blackTea'
const getTea2 = (prepareTea, numOfCups) => {
    const teaCups = []

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea()
        teaCups.push(teaCup)
    }
    return teaCups
}
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27)
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13)
console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
)

// Task 3 Understand the Hazards of Using Imperative Code
const Window = function (tabs) {
    this.tabs = tabs
}
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs)
    return this
}
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab')
    return this
}
Window.prototype.tabClose = function (index) {

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

// Task 4 Avoid Mutations and Side Effects Using Functional Programming
let fixedValue = 4
function incrementer() {
    return fixedValue + 1
}
console.log(incrementer)

// Task 5 Pass Arguments to Avoid External Dependence in a Function
function incrementer2(value) {
    return value + 1
}
console.log(incrementer2(fixedValue))

// Task 6 Refactor Global Variables Out of Functions
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
function add(booklistArr, bookName) {
    const newArr = [...booklistArr]
    newArr.push(bookName)
    return newArr
}
function remove(booklistArr, bookName) {
    const newArr = booklistArr.filter(book => book !== bookName)
    return newArr
}
// Task 7 Use the map Method to Extract Data from an Array
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
        title: item.Title,
        rating: item.imdbRating
    }
})
console.log(ratings)

// Task 8 Implement map on a Prototype
const s = [23, 65, 98, 5]
Array.prototype.myMap = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray
}
const new_s = s.myMap(item => item * 2)
console.log(new_s)

// Task 9 Use the filter Method to Extract Data from an Array
const filteredList = watchList.filter(item => +item.imdbRating >= 8).map(item => {
    return {
        title: item.Title,
        rating: item.imdbRating
    }
})
console.log(filteredList)

// Task 10 Implement the filter Method on a Prototype
Array.prototype.myFilter = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) == true) {
            newArray.push(this[i])
        }
    }
    return newArray
}
const new_s2 = s.myFilter((item) => item % 2 === 1)
console.log(new_s2)

// Task 11 Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice)
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
const new_anim = sliceArray(inputAnim, 1, 3)
console.log(new_anim)

// Task 12 Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
    return cities.slice(0, 3)
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities))

// Task 13 Combine Two Arrays Using the concat Metho
// Task 14 Add Elements to the End of an Array Using concat Instead of push
function nonMutatingConcat(original, attach) {
    return original.concat(attach)
}
const first = [1, 2, 3]
const second = [4, 5]
console.log(nonMutatingConcat(first, second))

// Task 15 Use the reduce Method to Analyze Data
function getRating(watchList) {
    const newArr = watchList.filter(item => item.Director === "Christopher Nolan").map(item => {
        return {
            rating: item.imdbRating
        }
    })
    const averageRating = newArr.reduce((sum, item) => sum + +item.rating, 0) / newArr.length
    return averageRating
}
console.log(getRating(watchList))

// Task 16 Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
    return arr.filter(number => number > 0 && Number.isInteger(number)).map(number => Math.pow(number, 2))
}
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)

// Task 17 Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
    return arr.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    })
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))

// Task 18 Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    const newArr = [...arr].sort((a, b) => a - b)
    return newArr
}
console.log(nonMutatingSort(globalArray))

// Task 19 Split a String into an Array Using the split Method
function splitify(str) {
    const newArr = str.split(/[\s,\-,\.]/)
    return newArr
    }
    console.log(splitify("Hello World,I-am code"))

//Task 20 Combine an Array into a String Using the join Method
function sentensify(str) {
    const newStr = str.split(/[\-,\, ,\.]/).join(' ')
    return newStr
   }
   console.log(sentensify("May-the-force-be-with-you"))

// Task 21 Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
    const url = title.toLowerCase().split(' ').filter(item => item !== '').join('-')
    return url
    }
    console.log(urlSlug(" Winter Is  Coming"))

// Task 22 Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    return arr.every(number => number > 0)
   }
   console.log(checkPositive([1, 2, 3, -4, 5]))

// Task 23 Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive2(arr) {
    return arr.some(number => number > 0)
  }
  console.log(checkPositive2([1, 2, 3, -4, 5]))

// Task 24 Introduction to Currying and Partial Application
function add2(x) {
    return y => z => x + y + z
   }
   console.log(add2(10)(20)(30))