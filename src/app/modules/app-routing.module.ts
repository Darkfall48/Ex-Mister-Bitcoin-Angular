import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from '../pages/contact-details/contact-details.component';
import { ContactEditComponent } from '../pages/contact-edit/contact-edit.component';
import { ContactIndexComponent } from '../pages/contact-index/contact-index.component';
import { HomeComponent } from '../pages/home/home.component';
import { StatsComponent } from '../pages/stats/stats.component';

const routes: Routes = [
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
  },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactIndexComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
