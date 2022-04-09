"use strict"
let numberOfNews 
for (let j=1; j<2; j++){
    numberOfNews = prompt("Siz qancha yangilik ko`rdingiz?")

    if (numberOfNews < 10 && numberOfNews != null && numberOfNews != ""){
        alert("Siz yangilik ishqibozi emassiz ekan")
        console.log("Siz yangilik ishqibozi emassiz ekan")
    } else if (numberOfNews >= 10 && numberOfNews < 30 && numberOfNews != null && numberOfNews != ""){
        alert("Siz klassik tomoshabinsz")
        console.log("Siz klassik tomoshabinsz")
    } else if(numberOfNews>=30 && numberOfNews != null && numberOfNews != "") {
        alert("Siz yangiliklar ishqibozisiz")
        console.log("Siz yangiliklar ishqibozisiz")
    } else{
        alert("siz harf kiritib qo`ydiz yoki hech narsa kiritmadiz qayta urinib ko`ring!!!")
        console.log("siz harf kiritib qo`ydiz yoki hech narsa kiritmadiz qayta urinib ko`ring!!!")
        j--
    }
}


const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i=1; i<3; i++){
    let a = prompt(i+"- ko`rgan yangiligingiz qaysi?"),
    b = prompt(i+"- yangilikga qancha baho bergan bo`lardingiz?")
    if(a != null && b != null && a != "" && b != "" && a.length<50){
        personalNewsDB.news[a] = b
        alert(i+"- yangilik tayyor")
        console.log(i+"- yangilik tayyor");
    } else{
        alert(i+"- yangilikga javob bermadiz qaytadan savol beramiz")
        console.log(i+"- yangilikga javob bermadiz qaytadan savol beramiz");
        i--
    }
}



console.log(personalNewsDB)