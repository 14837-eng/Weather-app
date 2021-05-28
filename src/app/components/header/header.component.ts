import { Component, OnInit } from '@angular/core';

interface Menu 
{
  name: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit 
{
  menu: Menu[] =
  [
    {
      name: "Время",
      link: "time"
    },    
    {
      name: "Погода",
      link: "weather"
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
