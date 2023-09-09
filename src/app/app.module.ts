import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { StartFrameWorkComponent } from './start-frame-work/start-frame-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    StartFrameWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
