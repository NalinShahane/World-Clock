class Clock {
    constructor(hr, min, sec) {
        this.hr = hr;
        this.min = min;
        this.sec = sec;
        this.endSec = map(this.sec, 0, 60, 0, 360);
        this.endMin = map(this.min, 0, 60, 0, 360);
        this.endHrs = map(this.hr % 12, 0, 12, 0, 360);
    }

    display() {
        //maping seconds
        strokeWeight(5)
        stroke('purple');
        noFill();
        arc(0, 0, 200, 200, 0, this.endSec);

        //maping mins
        strokeWeight(5)
        stroke('Yellow');
        noFill();
        arc(0, 0, 150, 150, 0, this.endMin);

        //maping Hrs
        strokeWeight(5)
        stroke('blue');
        noFill();
        arc(0, 0, 100, 100, 0, this.endHrs);

        //hands Of clock
        push()
        rotate(this.endSec);
        stroke('purple');
        strokeWeight(3);
        line(0, 0, 60, 0);
        pop();


        push()
        rotate(this.endMin);
        stroke('Yellow');
        strokeWeight(6);
        line(0, 0, 50, 0);
        pop();

        push()
        rotate(this.endHrs);
        stroke('blue');
        strokeWeight(6);
        line(0, 0, 30, 0);
        pop();

        stroke('red');
        strokeWeight(5)
        point(0, 0);
    }
}