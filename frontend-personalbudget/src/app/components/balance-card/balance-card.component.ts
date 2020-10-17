import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.css'],
  providers: [RegisterService]
})
export class BalanceCardComponent implements OnInit {

  registries: Register[];
  balance: number = 0;

  constructor(public registerService: RegisterService) {
    
  }

  ngOnInit(): void {
    this.getBalance();
  }

  
  getBalance(){
    this.registerService.getRegister()
      .subscribe(res =>{
        this.registries = res as Register[];
        for (let number of this.registries){
          this.balance = this.balance + number.amount
        }
        console.log('Balance:' + this.balance)
      });
  }

}
