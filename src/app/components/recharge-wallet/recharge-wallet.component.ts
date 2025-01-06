import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-recharge-wallet',
  standalone: true,
  imports: [CardModule,ButtonModule,InputTextModule,TableModule],
  templateUrl: './recharge-wallet.component.html',
  styleUrl: './recharge-wallet.component.scss'
})
export class RechargeWalletComponent implements OnInit{
 
  
  products:any;
  ngOnInit(): void {
  
  }

}
