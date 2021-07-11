import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerSearchCriteriaModel } from '../models/CustomerSearchCriteriaModel';
import { CustomHttpUrlEncodingCodec } from '../encoder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private baseUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getCustomerInfotList(customerSearchCriteria : CustomerSearchCriteriaModel): Observable<any> {

    let params: HttpParams = new HttpParams({encoder:new CustomHttpUrlEncodingCodec()})

    customerSearchCriteria.country && customerSearchCriteria.country !== undefined ? params = params.set('country', String(customerSearchCriteria.country)):null;
    customerSearchCriteria.customerMobileState && customerSearchCriteria.customerMobileState !== undefined ? params = params.set('customerMobileState', String(customerSearchCriteria.customerMobileState)):null;

    return this.http.get(`${this.baseUrl}`+'customers/info',{params});
  }


}
