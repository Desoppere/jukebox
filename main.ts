input.onGesture(Gesture.ScreenDown, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
})
input.onGesture(Gesture.LogoDown, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onGesture(Gesture.TiltRight, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
input.onGesture(Gesture.LogoUp, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
music.setVolume(127)
basic.showLeds(`
    . # . . .
    . # . . .
    # # . . .
    # # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
basic.showLeds(`
    . . . # .
    . . . # .
    . . # # .
    . . # # .
    . . . . .
    `)
basic.forever(function () {
	
})
