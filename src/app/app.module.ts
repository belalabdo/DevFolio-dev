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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientSpeakComponent } from './client-speak/client-speak.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    CountersComponent,
    PortfolioComponent,
    ClientSpeakComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule, CountUpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
