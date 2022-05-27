input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
    `)
    basic.pause(200)
    basic.showLeds(`
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    `)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    while (true) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
        `)
        basic.pause(200)
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
    `)
})
