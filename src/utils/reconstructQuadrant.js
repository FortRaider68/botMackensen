module.exports = function reconstructQuadrant(Quadrant){
    const currentQuadrant = Quadrant
    for (let index = 0; index < currentQuadrant.length; index++) {
        if(index % 64 === 0){
            currentQuadrant.splice(index,1,'\n')
        }
        
    }
    return ((currentQuadrant.toString()).split(',')).join('')
}

