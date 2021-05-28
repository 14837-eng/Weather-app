import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Weather 
{
  city: string;
  cloud: string;
  windSpeed: number;
}

@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherpage.component.html',
  styleUrls: ['./weatherpage.component.scss']
})
export class WeatherpageComponent implements OnInit 
{
  formGroup: FormGroup;
  weatherResult: Weather = 
  {
    city: "",
    cloud: "",
    windSpeed: -1
  };
  error: string;

  constructor(private fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.formGroup = this.fb.group(
    {
      "city": ["", [Validators.required, Validators.minLength(3)]]
    })
  }

  getTime()
  {
    if(this.formGroup.invalid) return;
    const city = this.formGroup.get("city").value;
    const key: string = "f078be57f322fe24acd401ff8db4868e";
    const lang: string = "ru";

    this.weatherResult.city = "";

    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}`)
    .subscribe((res: any) =>
    {
      console.log(res);
      this.error = null;
      this.weatherResult.cloud = res.weather[0].description;
      this.weatherResult.city = res.name;
      this.weatherResult.windSpeed = res.wind.speed;
    },
    (err) =>
    {
      this.error = err;
    })
  }
}
