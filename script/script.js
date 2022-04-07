"use strict"
let numberOfNews = prompt("Siz qancha yangilik ko`rdingiz?")

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
}

let a = prompt("Oxirgi ko`rgan yangiliklarizdan biri?"),
    b = prompt("Unga qancha baho bergan bo`lardingiz?")

personalNewsDB.news[a] = b
console.log(personalNewsDB)