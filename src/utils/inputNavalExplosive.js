module.exports = function InputNavalExplosive(coordinate) {

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

    return QuadrantIndex
}