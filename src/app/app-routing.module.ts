import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent, 
         NotfoundpageComponent, 
         TimepageComponent, 
         WeatherpageComponent } from './pages';

const routes: Routes = 
[
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomepageComponent
  },
  {
    path: "time",
    component: TimepageComponent
  },
  {
    path: "weather",
    component: WeatherpageComponent
  },
  {
    path: "**",
    component: NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
