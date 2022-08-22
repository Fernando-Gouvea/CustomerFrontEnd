import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { ICustomer } from './ICustomer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer';
  
  constructor(private customerservice: CustomerService)
  {} 
  
  get(){
   this.customerservice.getCustomers()
   .then(customers => console.log(customers))
   .catch(error => console.error(error))
    .then((customer: any) => console.log(customer))
    .catch(error => console.error(error));
  }

  post(){
    const customer: ICustomer = {
      id: "",
      name: "Jãozin",
      old: "10",
      civilStatus: "Solteir0",
      document: "35755452145",
      city: "Santagertrudes",
      state: "SP"
    };
    this.customerservice.postCustomer(customer)
    .then(customer => console.log('🟢 Adicionado'))
    .catch(error => console.error(error));
  }

  update(){
    const customer: ICustomer = {
      id: "1d2c56f2-01e1-446e-86ba-210cf6c15ac9",
      name: "Jãozin",
      old: "10",
      civilStatus: "Solteir0",
      document: "35755452145",
      city: "Santagertrudes",
      state: "SP"
    };
    this.customerservice.updateCustomer(customer)
      .then(customer => console.log('🔵 Att', customer))
      .catch(error => console.error(error));
  }

  delete(){
    this.customerservice.deleteCustomer("1d2c56f2-01e1-446e-86ba-210cf6c15ac9")
      .then(response => console.log('🔴 Removido', response))
      .catch(error => console.error(error));
  }
}

