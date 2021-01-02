var EuropeTZ, AsiaTZ, AfricaTZ, AmericaTZ, AnatarcticaTZ, AtlanticTZ, AusTZ, PacficTZ;
var c1, c2, c3, c4, c5, c6, c7, c8;
var hr, mn, sec

function setup() {
    createCanvas(1800, 1000);
}

function draw() {
    translate(150, 150);
    rotate(-90);
    background('black');
    hr = hour()
    mn = minute()
    sec = second()

    //IST
    c1 = new Clock(hr, mn, sec);
    c1.display();
    push()
    rotate(90)
    textSize(20)
    text("I S T", -20, 130)
    pop()

    //europe
    translate(0, 250)
    c2 = new Clock(hr - 4, mn - 30, sec);
    c2.display();
    push()
    rotate(90)
    textSize(20)
    text("E S T", -20, 130)
    pop()

    //africa
    translate(0, 280)
    c3 = new Clock(hr - 2, mn - 30, sec);
    c3.display();
    push()
    rotate(90)
    textSize(20)
    text("E A T", -20, 130)
    pop()

    //USA
    translate(0, 300)
    c4 = new Clock(hr - 5, mn, sec);
    c4.display();
    push()
    rotate(90)
    textSize(20)
    text("E S T", -20, 130)
    pop()

    //Anatarctica
    translate(-300, -820)
    c5 = new Clock(hr + 13, mn, sec);
    c5.display();
    push()
    rotate(90)
    textSize(20)
    text("N S T", -20, 130)
    pop()

    //Atlantic
    translate(0, 250)
    c6 = new Clock(hr - 9, mn - 30, sec);
    c6.display();
    push()
    rotate(90)
    textSize(20)
    text("A S T", -20, 130)
    pop()

    //ausCentralTime
    translate(0, 300)
    c7 = new Clock(hr + 4, mn, sec);
    c7.display();
    push()
    rotate(90)
    textSize(20)
    text("A C T", -20, 130)
    pop()

    //pacific
    translate(0, 300)
    c8 = new Clock(hr - 13, mn - 30, sec);
    c8.display();
    push()
    rotate(90)
    textSize(20)
    text("P S T", -20, 130)
    pop()



    // line(0, 0, 0, 250)


    // EuropeTZ = "http://worldtimeapi.org/api/timezone/Europe/London";
    // AsiaTZ = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
    // AfricaTZ = "http://worldtimeapi.org/api/timezone/Africa/Nairobi"
    // AmericaTZ = "http://worldtimeapi.org/api/timezone/America/New_York"
    // AnatarcticaTZ = "http://worldtimeapi.org/api/timezone/Antarctica/Palmer"
    // AtlanticTZ = "http://worldtimeapi.org/api/timezone/Atlantic/Canary"
    // AusTZ = "http://worldtimeapi.org/api/timezone/Australia/Sydney"
    // PacficTZ = "http://worldtimeapi.org/api/timezone/Pacific/Wake"

    // TimeZone(EuropeTZ);
    // TimeZone(AsiaTZ);
    // TimeZone(AfricaTZ);
    // TimeZone(AmericaTZ);
    // TimeZone(AnatarcticaTZ);
    // TimeZone(AtlanticTZ);
    // TimeZone(AusTZ);
    // TimeZone(PacficTZ);


}
// async function TimeZone(TZ) {
//     // var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
//     var response = await fetch(TZ);
//     var responseJSON = await response.json();
//     var datetime = responseJSON.datetime;
//     console.log(datetime);
//     var hour = datetime.slice(11, 13);
//     console.log(hour);
//     var minute = datetime.slice(14, 16);
//     console.log(minute);
//     var seconds = datetime.slice(17, 19);
//     console.log(seconds);
// }