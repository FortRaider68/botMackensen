const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

const InitialBattleDraw =
    '================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n================================================================\n';

const FinalBattleDraw = '=================================================================\n=============================0000000000000000000000000==========\n===========================00000000000000000000000000000========\n===========================00000000000000000000000000000========\n====0=======================000000000000000000000000000=========\n===000==========================================================\n==00000========0================================================\n==00000=======000=========================00====================\n==00000=======000=========================00====================\n==00000=======000=========================00====================\n==00000=======000===============================================\n==00000=======000==========0000000000===========================\n==00000========0===========0000000000===========================\n===000==========================================================\n====0==========================================================='

client.on("ready", () => {
    console.log(`Logado Com ${client.user.tag}`)
    client.user.setActivity('On Fort Vaux')

})

client.on("message", (message) => {
    if (!message.author.bot) {
        message.channel.send(FinalBattleDraw)
        console.log((FinalBattleDraw.split('\n')).join(''))

    }
})
client.login(process.env.TOKEN)

function InputNavalExplosive(coordinate) {

    const HorizontalIndex = coordinate.slice(1, 3)
    const VerticalIndex = coordinate[0]
    if (coordinate === '' || coordinate === null) {
        return console.log('Input Não Encontrado')
    }

    if (!/^[0-9]+$/i.test(coordinate[1])) {
        return console.log('Input Invalido1')
    }

    if (!/^[A-O]+$/i.test(VerticalIndex)) {
        return console.log('Input Invalido2')
    }

    const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']

    const IndexLetter = Letters.indexOf(VerticalIndex)

    const QuadrantIndex = IndexLetter * 64 + parseInt(HorizontalIndex)

    ExplosiveRadiusDamage(QuadrantIndex)
    return QuadrantIndex
}

function ExplosiveRadiusDamage(IndexCoordinate) {
    const CoordinatesRadius = [
        (IndexCoordinate - 65),
        (IndexCoordinate - 64),
        (IndexCoordinate - 63),
        (IndexCoordinate - 1),
        IndexCoordinate,
        (IndexCoordinate + 1),
        (IndexCoordinate + 63),
        (IndexCoordinate + 64),
        (IndexCoordinate + 65)
    ]
    UpdateBattledraw({
        battleDraw: FinalBattleDraw,
        currentBattleDraw: InitialBattleDraw,
        coordinates: CoordinatesRadius
    })
    return CoordinatesRadius
}


function PointsPerDamage(params) {
    const battleDraw = (params.battleDraw.split('\n')).join('')
    const currentBattleDraw = (params.currentBattleDraw.split('\n')).join('')
    let points = 0
    for (coordinate in params.coordinates) {
        const coordinateSelected = params.coordinates[coordinate]
        if (battleDraw[coordinateSelected] !== currentBattleDraw[coordinateSelected]) {
            points++;
        }

    }
    console.log(`Vc fez ${points} Pontos`)
    return points
}



