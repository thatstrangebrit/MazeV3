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
    basic.pause(250)
    Stop()
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
    basic.pause(250)
    Stop()
}
function Stop () {
	
}
let SonarDistance_Right = 0
let SonarDistance_Left = 0
let SonarDistance_Forward = 0
let Speed = 0
Speed = 75
let MinDistance = 13
basic.forever(function () {
    SonarDistance_Forward = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.pause(30)
    SonarDistance_Left = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    basic.pause(30)
    SonarDistance_Right = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    basic.pause(30)
    // Left-hand rule maze solving
    if (SonarDistance_Left > MinDistance) {
        TurnLeft()
        Forward()
    } else if (SonarDistance_Forward > MinDistance) {
        Forward()
    } else if (SonarDistance_Right > MinDistance) {
        TurnRight()
        Forward()
    } else {
        Backwards()
        basic.pause(300)
        TurnRight()
    }
})
