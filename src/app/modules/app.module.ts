//? Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//? Modules
import { AppRoutingModule } from './app-routing.module';
//? Components
import { AppComponent } from '../app-root/app.component';
import { HomeComponent } from '../pages/home/home.component';
import { AppHeaderComponent } from '../cmps/app/app-header/app-header.component';
import { AppFooterComponent } from '../cmps/app/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
