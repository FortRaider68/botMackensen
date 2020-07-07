module.exports = function ExplosiveRadiusDamage(IndexCoordinate) {
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

    return CoordinatesRadius
}