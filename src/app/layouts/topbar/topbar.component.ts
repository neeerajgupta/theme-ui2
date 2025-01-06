import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule,AvatarModule,OverlayPanelModule,FormsModule,ReactiveFormsModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  providers:[]
})
export class TopbarComponent {

  constructor(private router: Router) {}

  navigateToRecharge() {
    this.router.navigate(['/rechargeWallet']);
  }

 


  

}
