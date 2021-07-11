import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-customers', pathMatch: 'full' },
  { path: 'view-customers', component: CustomerListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
