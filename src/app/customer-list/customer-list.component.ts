import { Component, OnInit, ViewChild } from '@angular/core';

import { CustomerInfoModel } from '../models/customerInfoModel';
import { CustomerService } from '../services/customer.service';
import { CustomerSearchCriteriaModel } from '../models/CustomerSearchCriteriaModel';
import { CustomerMobileStateEnum } from '../models/CustomerMobileStateEnum';
import { Observable, Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

 constructor(private customerService: CustomerService) { }

  customersArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  statuses: String[] = [];
  @ViewChild(DataTableDirective) datatableElement?: DataTableDirective;
  customerInfoModels = Array<CustomerInfoModel>();
  customerSearchCriteria : CustomerSearchCriteriaModel = new CustomerSearchCriteriaModel();
  
 
  

  ngOnInit() {

    Object.keys(CustomerMobileStateEnum).forEach(key => {this.statuses.push(key)});
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true,
      searching: false,
    };   
    this.customerService.getCustomerInfotList(this.customerSearchCriteria).subscribe(data =>{
      this.customerInfoModels =data;
      this.dtTrigger.next();
      }) 

  }

  searchCustomers(customerSearchCriteria:any){
    this.customerService.getCustomerInfotList(customerSearchCriteria).subscribe(data =>{
      this.customerInfoModels =data;
         this.rerender();
      })  }

 resetInCaseAllSelected(event:any){
    if(event == 'All') 
    this.customerSearchCriteria.customerMobileState = undefined;
 }

 rerender(): void {
  this.datatableElement && this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  // Destroy the table first
  dtInstance.destroy();
  // Call the dtTrigger to rerender again
  this.dtTrigger.next();
  });}


}
