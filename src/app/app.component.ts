import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleMinutesRowService} from './services/single-minutes-row.service';
import {FiveMinutesRowService} from './services/five-minutes-row.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/takeWhile';
import {OneSecondRowService} from './services/one-second-row.service';
import {SingleHoursRowService} from './services/single-hours-row.service';
import {FiveHoursRowService} from './services/five-hours-row.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'berlin clock';
  active = false;

  second: string;
  singleHours: string;
  fiveHours: string;
  singleMinutes: string;
  fiveMinutes: string;
  date: Date;

  constructor(private secondService: OneSecondRowService,
              private singleHoursRowService: SingleHoursRowService,
              private fiveHoursRowService: FiveHoursRowService,
              private singleMinutesRowService: SingleMinutesRowService,
              private fiveMinutesRowService: FiveMinutesRowService) {
  }

  ngOnInit(): void {
    this.active = true;
    this.giveRows();
    Observable.timer(1000, 1000)
      .takeWhile(() => this.active)
      .subscribe(() => this.giveRows());
  }

  ngOnDestroy(): void {
    this.active = false;
  }

  giveRows(): void {
    this.date = new Date();
    this.second = this.secondService.giveRow(this.date);
    this.fiveHours = this.fiveHoursRowService.giveRow(this.date);
    this.singleHours = this.singleHoursRowService.giveRow(this.date);
    this.singleMinutes = this.singleMinutesRowService.giveRow(this.date);
    this.fiveMinutes = this.fiveMinutesRowService.giveRow(this.date);
  }
}
