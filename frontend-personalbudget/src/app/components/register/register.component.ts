import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { RegisterService } from '../../services/register.service';

//Use this constant for use toast message
declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(public registerService: RegisterService) { }

  ngOnInit(): void {
    this.getRegisters();
  }

  addRegister(form: NgForm){
    if (form.value._id){
      this.registerService.putRegister(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Registry Update Successfully!'});
        this.getRegisters();
      });
    } else {
      this.registerService.postRegister(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Registry Save Successfully!'});
        this.getRegisters();
      });
    }
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.registerService.selectedRegister = new Register();
    }
  }

  getRegisters(){
    this.registerService.getRegister()
      .subscribe(res =>{
        this.registerService.registers = res as Register[];
        console.log(res);
      });
  }

  editRegister(register: Register){
    this.registerService.selectedRegister = register;
  }


  deleteRegister(_id: string){
    if (confirm('Are you sure you want delete it?')){
      this.registerService.deleteRegister(_id)
      .subscribe(res =>{
        this.getRegisters();
        M.toast({html: 'Delete Successfully!'});
      });
    }
  }

}
