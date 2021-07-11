import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customer-list/customer-list.component';

import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
