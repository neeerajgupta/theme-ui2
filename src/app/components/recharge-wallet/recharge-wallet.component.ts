import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recharge-wallet',
  standalone: true,
  imports: [CardModule,ButtonModule,InputTextModule,TableModule,FormsModule],
  templateUrl: './recharge-wallet.component.html',
  styleUrl: './recharge-wallet.component.scss'
})
export class RechargeWalletComponent implements OnInit{
  value:number=0;
  
  products:any;
  ngOnInit(): void {
  
  }
  addValue(values: number) {
    this.value = values; 
    console.log('Current value:', this.value); 
  }

}
