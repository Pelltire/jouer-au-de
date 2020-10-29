let Chiffre = 0
let sprite: game.LedSprite = null
function Affichédé (num: number) {
    for (let index = 0; index < 3; index++) {
        if (Chiffre == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            if (Chiffre == 2) {
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    `)
            } else {
                if (Chiffre == 3) {
                    basic.showLeds(`
                        . . . . .
                        . # . . .
                        . . # . .
                        . . . # .
                        . . . . .
                        `)
                } else {
                    if (Chiffre == 4) {
                        basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            . # . # .
                            . . . . .
                            `)
                    } else {
                        if (Chiffre == 5) {
                            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . # . .
                                . # . # .
                                . . . . .
                                `)
                        } else {
                            if (Chiffre == 6) {
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
function animation () {
    sprite = game.createSprite(0, 0)
    for (let index = 0; index < randint(30, 60); index++) {
        if (sprite.isTouchingEdge()) {
            sprite.turn(Direction.Right, 45)
        }
        sprite.move(1)
        basic.pause(100)
    }
    sprite.delete()
}
input.onGesture(Gesture.Shake, function () {
    animation()
    Chiffre = randint(1, 6)
    Affichédé(Chiffre)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Affichédé(Chiffre)
    }
})
