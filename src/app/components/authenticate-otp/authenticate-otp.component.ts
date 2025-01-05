import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authenticate-otp',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule, CardModule, ButtonModule, InputOtpModule, FormsModule],
  templateUrl: './authenticate-otp.component.html',
  styleUrl: './authenticate-otp.component.scss'
})
export class AuthenticateOtpComponent implements OnInit {
  items: MenuItem[] | undefined;
  value: any

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'AuthenticateOtp' },

    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
