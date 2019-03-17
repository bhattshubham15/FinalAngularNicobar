import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercompoComponent } from './headercompo/headercompo.component';
import { FootercompoComponent } from './footercompo/footercompo.component';
import { SidenavcompoComponent } from './sidenavcompo/sidenavcompo.component';
import { HerocompoComponent } from './herocompo/herocompo.component';
import { NicoserviceService } from './nicoservice.service';
import { DashboardcompoComponent } from './dashboardcompo/dashboardcompo.component';
import { Da2Component } from './da2/da2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercompoComponent,
    FootercompoComponent,
    SidenavcompoComponent,
    HerocompoComponent,
    routingComponents,
    DashboardcompoComponent,
    Da2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NicoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
