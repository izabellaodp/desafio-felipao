let nickName = "bella08"
let rankXp = 1009

if (rankXp < 1000) {
    console.log(`${nickName} é Ferro`)
} else if (rankXp >= 1001 && rankXp <= 2000){
    console.log ( `${nickName} é Bronze`)
} else if (rankXp >= 2201 && rankXp <= 5000){
    console.log( `${nickName} é Prata`)
} else if (rankXp >= 5001 && rankXp <= 7000){
    console.log (`${nickName} é Ouro`)
} else if (rankXp >= 7001 && rankXp <= 8000) {
    console.log (`${nickName} é Platina`)
} else if (rankXp >= 8001 && rankXp <= 9000) {
    console.log (`${nickName} é Ascendente`)
} else if (rankXp >= 9001 && rankXp <= 10000) {
    console.log(`${nickName} é Imortal`)
} else {
    console.log(`${nickName} é Radiante `)
}