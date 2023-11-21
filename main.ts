input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (on == true) {
        on = false
    } else {
        on = true
    }
})
function flame () {
    light.setPixelColor(randint(0, 10), light.hsv(randint(60, 70), 255, randint(200, 255)))
    pause(100)
    light.setPixelColor(randint(0, 10), light.hsv(randint(60, 70), 255, randint(200, 255)))
    light.setPixelColor(randint(0, 10), 0x000000)
    pause(100)
    light.setPixelColor(randint(0, 10), light.hsv(randint(60, 70), 255, randint(200, 255)))
    light.setPixelColor(randint(0, 10), 0x000000)
}
input.onGesture(Gesture.Shake, function () {
    bright = 255
    light.setAll(0xffff00)
    light.setBrightness(bright)
    for (let index = 0; index < 255; index++) {
        bright += -1
        light.setBrightness(bright)
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (on == true) {
        on = false
    } else {
        on = true
    }
})
let on = false
let bright = 0
bright = 255
light.setBrightness(bright)
on = true
forever(function () {
    bright = 255
    if (on == true) {
        flame()
    } else {
        light.setAll(0x000000)
    }
})
