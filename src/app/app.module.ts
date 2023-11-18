import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxTypedJsModule } from 'ngx-typed-js';

// Components
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
