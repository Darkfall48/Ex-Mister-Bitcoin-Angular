//? Libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//? Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//? Components
import { AppComponent } from '../app-root/app.component';
import { HomeComponent } from '../pages/home/home.component';
import { AppHeaderComponent } from '../cmps/app/app-header/app-header.component';
import { AppFooterComponent } from '../cmps/app/app-footer/app-footer.component';
import { ContactIndexComponent } from '../pages/contact-index/contact-index.component';
import { ContactFilterComponent } from '../cmps/contact/contact-filter/contact-filter.component';
import { ContactListComponent } from '../cmps/contact/contact-list/contact-list.component';
import { ContactPreviewComponent } from '../cmps/contact/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from '../pages/contact-details/contact-details.component';
import { ContactEditComponent } from '../pages/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ContactIndexComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
})
export class AppModule {}
