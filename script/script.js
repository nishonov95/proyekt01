"use strict"

const personalNewsDB = {
    count: 0,
    news: {},
    actors: {},
    genres: [],
    privat: false,
    startProject: function(){
        for (let j=1; j<2; j++){
            personalNewsDB.count = prompt("Siz qancha yangilik ko`rdingiz?")
        
            if (personalNewsDB.count < 10 && personalNewsDB.count != null && personalNewsDB.count != ""){
                alert("Siz yangilik ishqibozi emassiz ekan")
                console.log("Siz yangilik ishqibozi emassiz ekan")
            } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30 && personalNewsDB.count != null && personalNewsDB.count != ""){
                alert("Siz klassik tomoshabinsz")
                console.log("Siz klassik tomoshabinsz")
            } else if(personalNewsDB.count>=30 && personalNewsDB.count != null && personalNewsDB.count != "") {
                alert("Siz yangiliklar ishqibozisiz")
                console.log("Siz yangiliklar ishqibozisiz")
            } else{
                alert("siz harf kiritib qo`ydiz yoki hech narsa kiritmadiz qayta urinib ko`ring!!!")
                console.log("siz harf kiritib qo`ydiz yoki hech narsa kiritmadiz qayta urinib ko`ring!!!")
                j--
            }
        } 
    },
    rememberNews: function(){
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
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalNewsDB)
        }
    },
    showAlert: function(){
        alert("Hurmatli foydalanuvchi siz hozir 3 ta yoqadigan janr kiritishiz kerak")
    },
    toggleVisibleMyDB: function(){
        if(personalNewsDB.privat = true){
            personalNewsDB.privat = false
        } else{
            personalNewsDB.privat = true
        }
    },
    writeYourGenres:function(){
        for (let i = 1; i<4; i++){
            let genre = prompt(`${i} -yoqadigan janriz`)
                if(genre === "" || genre === null){
                    alert(`siz ${i} chi janrni kiritishda xatoga yo'l qo'ydiz qayta urining`)
                    console.log(`siz ${i} chi janrni kiritishda xatoga yo'l qo'ydiz qayta urining`)
                    i--
                } else {
                    personalNewsDB.genres[i-1] = genre
                    alert(`siz ${i} chi sevimli janrizni kiritib bo'ldiz`)
                    console.log(`siz ${i} chi sevimli janrizni kiritib bo'ldiz`)
                }
        }

    },
}

personalNewsDB.startProject()
personalNewsDB.rememberNews()
personalNewsDB.showAlert()
personalNewsDB.writeYourGenres()
personalNewsDB.showMyDB()








