import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ICustomer } from './ICustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 constructor(private httpClient: HttpClient) { }

 getCustomers1(){
  return this.httpClient.get<ICustomer>(`${API_PATH}v1/customers/0/25`);
}

getCustomers(){
  return this.httpClient.get<ICustomer>(`${API_PATH}v1/customers/0/25`).toPromise();
}

postCustomer(customer: ICustomer){
    return this.httpClient.post<void>(`${API_PATH}v1/customer`, customer).toPromise();
  }

updateCustomer(customer: ICustomer){
    return this.httpClient.put<void>(`${API_PATH}v1/customer/update/${customer.id}`, customer).toPromise();
  }

  deleteCustomer(customerId: string){
    return this.httpClient.delete<void>(`${API_PATH}v1/customer/${customerId}`).toPromise();
  }
}
