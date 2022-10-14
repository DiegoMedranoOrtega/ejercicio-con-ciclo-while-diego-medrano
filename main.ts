let heroe = game.createSprite(0, 2)
let villano = game.createSprite(4, randint(0, 4))
villano.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        heroe.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        heroe.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        heroe.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        heroe.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (heroe.isTouching(villano)) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        game.gameOver()
    }
})
