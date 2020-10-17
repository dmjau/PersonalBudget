import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  readonly URL_API = 'http://localhost:3000/api/register';

  selectedRegister: Register;
  registers: Register[];  

  constructor(public http: HttpClient) {
    this.selectedRegister = new Register();
  }

  //Method to get a register from server/DB
  getRegister(){
    return this.http.get(this.URL_API);
  }

  //Method to add register on the DB
  postRegister(addRegister: Register){
    return this.http.post(this.URL_API, addRegister);
  }

  //Method to update register on the DB
  putRegister(updateRegister: Register){
    return this.http.put(this.URL_API + `/${updateRegister._id}`, updateRegister);
  }
  
  //Method to delete register on the DB
  deleteRegister(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
