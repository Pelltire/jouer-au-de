input.onGesture(Gesture.Shake, function () {
	
})
function affichédé () {
    for (let index = 0; index < 3; index++) {
        let nombre = 0
        if (nombre == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            if (nombre == 2) {
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    `)
            } else {
                if (nombre == 3) {
                    basic.showLeds(`
                        . . . . .
                        . # . . .
                        . . # . .
                        . . . # .
                        . . . . .
                        `)
                } else {
                    if (nombre == 4) {
                        basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            `)
                    } else {
                        if (nombre == 5) {
                            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                `)
                        } else {
                            if (nombre == 6) {
                                basic.showLeds(`
                                    . . . . .
                                    . # . # .
                                    . # . # .
                                    . # . # .
                                    . . . . .
                                    `)
                            }
                        }
                    }
                }
            }
        }
    }
}
basic.forever(function () {
	
})
