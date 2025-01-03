import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
// import { BreadcrumbComponent } from '../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    InputGroupAddonModule,
    // BreadcrumbComponent, 
    InputGroupModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    DividerModule,
    CardModule
  ],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {
  orderForm: FormGroup | any;
  // breadCrumbData : any;
  restrictedDate: Date | undefined;
  countries = [
    { label: 'Saudi Arabia', value: 'SA' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.breadCrumbData = [
    //   { label: 'Order' },

    // ];
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  cities() {
    return [
      { name: 'Prepaid', code: 'RM' },
      { name: 'COD', code: 'NY' },
      { name: 'ToPay', code: 'LDN' }
  ];
  }

  submitForm() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
    } else {
      this.orderForm.markAllAsTouched();
    }
  }
}
