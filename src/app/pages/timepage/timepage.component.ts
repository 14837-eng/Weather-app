import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timepage',
  templateUrl: './timepage.component.html',
  styleUrls: ['./timepage.component.scss']
})
export class TimepageComponent implements OnInit, OnDestroy
{
  time: string = "";
  sub: Subscription;

  constructor() { }

  ngOnInit(): void 
  {
    this.updateTime();
    this.sub = interval(1000)
    .subscribe(() => this.updateTime());
  }

  updateTime()
  {
    const date = new Date();
    this.time = date.toLocaleTimeString();
  }

  ngOnDestroy()
  {
    if(this.sub) this.sub.unsubscribe();
  }

}
