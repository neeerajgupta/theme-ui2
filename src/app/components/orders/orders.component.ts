import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../services/product/product.service';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { Breadcrumb, BreadcrumbModule } from 'primeng/breadcrumb';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [AvatarModule, CardModule, BreadcrumbModule, TabViewModule, TabMenuModule, ButtonModule, TableModule, FormsModule, InputNumberModule, RatingModule, ToolbarModule, TagModule, FileUploadModule, ConfirmDialogModule, InputTextModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  providers: [ProductService, MessageService, ConfirmationService]
})
export class OrdersComponent {
  tabmenuitems: MenuItem[] | undefined;
  activeItem : MenuItem | undefined  
  items: MenuItem[] | undefined;
      
  home: MenuItem | undefined;
  products: any
  selectedProducts: any
  submitted: boolean = false;

  statuses!: any[];
  product: any
  productDialog: boolean = false;



  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [
      { label: 'order' },

    ];
      this.home = { icon: 'pi pi-home', routerLink: '/' };


    this.tabmenuitems = [
      {
        label: 'Domestic',
        icon: 'pi pi-home',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
        }
      },
      {
        label: 'International',
        icon: 'pi pi-chart-line',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
        }
      }
    ]
    this.activeItem = this.tabmenuitems[0]


    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }


  openNew() {
    this.product = {};
    this.submitted = false;

  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val: any) => !this.selectedProducts?.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: any) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val: any) => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }


  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }

}
