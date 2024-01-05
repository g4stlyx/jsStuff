function randomAdvanced(start,end,number){
    let selectedNumbers = [];
    for(let i=start;i<end;i++){
        if(i%number==0 && i!=0){
            selectedNumbers.push(i)
        }
    }
    randomIndex = Math.floor(Math.random()*selectedNumbers.length)
    return selectedNumbers[randomIndex]
}

console.log(randomAdvanced(0,11,5))
console.log(randomAdvanced(0,11,2))
console.log(randomAdvanced(0,11,3))