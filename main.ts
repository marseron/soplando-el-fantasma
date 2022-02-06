let Col = 0
let Row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            Row = randint(0, 4)
            Col = randint(0, 4)
        }
        if (led.point(Col, Row)) {
            led.unplot(Col, Row)
            led.plot(Col + 1, Row)
        }
    }
})
