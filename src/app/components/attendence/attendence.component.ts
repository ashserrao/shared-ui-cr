import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.scss',
})
export class AttendenceComponent {
  Timer: any[] = [];
  log: any[] = [];
  buttonName: string = "Tap-in";
  TimeStamp: any = this._datepipe.transform(Date.now(), 'medium');

  constructor(private _datepipe: DatePipe) {}

  logger() {
    if (this.Timer.length === 0) {
      this.Timer.push(Date.now());
      this.log.push('Timer Started')
      this.buttonName = "Tap-out";
    } else {
      const startTime = new Date(this.Timer[0]);
      const endTime = new Date(Date.now());

      let duration = endTime.getTime() - startTime.getTime();

      console.log(endTime.getUTCDate());

      const hours = Math.floor(duration / (1000 * 60 * 60));
      duration = duration % (1000 * 60 * 60);
      const minutes = Math.floor(duration / (1000 * 60));
      duration = duration % (1000 * 60);
      const seconds = Math.floor(duration / 1000);

      const formattedDuration =
        this.padZero(hours) +
        ':' +
        this.padZero(minutes) +
        ':' +
        this.padZero(seconds);

      this.log.push(`checked out with | ${formattedDuration} at`);

      this.Timer = [];
      this.buttonName = "Tap-in";
    }
  }

  padZero(num: number) {
    return num < 10 ? '0' + num : '' + num;
  }
}
