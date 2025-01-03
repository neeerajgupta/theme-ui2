import { Component, OnInit } from '@angular/core';
// import { BreadcrumbComponent } from '../../layouts/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent implements OnInit {
  breadCrumbData: any;
  ngOnInit(): void {
    // this.breadCrumbData = [
    //   { label: 'Dashboard' },
  
    // ];
  }
 
}
