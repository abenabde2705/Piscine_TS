function creerScore() : [string , number] {
    return ["joueuramrou", 5]
    
}
function afficherScore(score: [string, number]) {
    
    console.log(`"Le joueur ${score[0]} a un score de  ${score[1]}."`)
}
afficherScore(creerScore());