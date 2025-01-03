import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: any;
  home: any;

  ngOnInit(): void {

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
