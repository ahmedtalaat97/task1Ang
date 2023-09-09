import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartFrameWorkComponent } from './start-frame-work/start-frame-work.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",redirectTo:"startFrameWork",pathMatch:'full'},
  {path:"startFrameWork",component:StartFrameWorkComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
