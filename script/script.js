"use strict"
let numberOfNews 
function startProject() {
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
}

startProject()



const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberNews() {
    for (let i=1; i<3; i++){
        let a = prompt(i+"- ko`rgan yangiligingiz qaysi?"),
        b = prompt(i+"- yangilikga qancha baho bergan bo`lardingiz?")
        if(a != null && b != null && a != "" && b != "" && a.length<50 && !isNaN(b)){
            personalNewsDB.news[a] = b
            alert(i+"- yangilik tayyor")
            console.log(i+"- yangilik tayyor");
        } else{
            alert(i+"- yangilikni kiritmadiz yoki ball kiritadigan joyga harf ishlatdiz qaytadan "+i+"-savol beriladi")
            console.log(i+"- yangilikni kiritmadiz yoki ball kiritadigan joyga harf ishlatdiz qaytadan "+i+"-savol beriladi");
            i--
        }
    }
}
rememberNews()

function showMyDB(hidden){
    if(!hidden){
        console.log(personalNewsDB)
    }

}
showMyDB(personalNewsDB.privat)

function showAlert(){
    alert("Hurmatli foydalanuvchi siz hozir 3 ta yoqadigan janr kiritishiz kerak")
}
showAlert()

function writeYourGenres(){
    for (let i = 1; i<4; i++){
        personalNewsDB.genres[i - 1]=prompt(`${i} -yoqadigan janriz`)
    }
}
writeYourGenres()
