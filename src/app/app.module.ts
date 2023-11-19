import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CountUpModule } from 'ngx-countup';

// Components
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    CountersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule, CountUpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
