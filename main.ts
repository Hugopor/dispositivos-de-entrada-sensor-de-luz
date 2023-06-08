basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    128
    )
    if (input.lightLevel() < 128) {
        basic.showString("nivel de luz bajo")
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else {
        basic.showString("suficiente luz")
    }
})
