function Forward () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, Speed)
}
function TurnLeft () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, Speed)
    basic.pause(400)
}
function Backwards () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, Speed)
}
function TurnRight () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, Speed)
    basic.pause(400)
}
function Stop () {
    motor.motorStopAll()
}
let SonarDistance_Right = 0
let SonarDistance_Left = 0
let SonarDistance_Forward = 0
let Speed = 0
Speed = 80
let DistanceMax = 10
basic.forever(function () {
    SonarDistance_Forward = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    SonarDistance_Left = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    SonarDistance_Right = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    if (SonarDistance_Left > DistanceMax) {
        Stop()
        TurnLeft()
        Forward()
    } else if (SonarDistance_Forward > DistanceMax) {
        Forward()
    } else if (SonarDistance_Right > DistanceMax) {
        Stop()
        TurnRight()
        Forward()
    } else {
        Stop()
        Backwards()
        basic.pause(500)
        Stop()
        TurnRight()
    }
})
