let _1 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || (input.buttonIsPressed(Button.A) || input.isGesture(Gesture.Shake)))) {
        _1 = randint(1, 3)
    }
    if (_1 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
    if (_1 == 2) {
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    if (_1 == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
