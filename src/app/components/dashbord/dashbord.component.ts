import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../layouts/breadcrumb/breadcrumb.component';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../services/product/product.service';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [AvatarModule, CardModule, ButtonModule, TableModule, FormsModule, InputNumberModule, TagModule,InputTextModule,TabViewModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss',
  providers: [ProductService]
})
export class DashbordComponent implements OnInit {
  breadCrumbData: any;
  products: any
  selectedProducts: any
 

  



  constructor(private productService: ProductService, ) { }

  ngOnInit() {
    // this.breadCrumbData = [
    //   { label: 'Dashboard' },

    // ];
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

   
  }


  
}
