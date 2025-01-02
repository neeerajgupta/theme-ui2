import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';

import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TieredMenuModule,CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  items: any;

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              icon: 'pi pi-home',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-plus',
                      items: [
                          {
                              label: 'Document',
                              icon: 'pi pi-file'
                          },
                          {
                              label: 'Image',
                              icon: 'pi pi-image'
                          },
                          {
                              label: 'Video',
                              icon: 'pi pi-video'
                          }
                      ]
                  },
                  {
                      label: 'Open',
                      icon: 'pi pi-folder-open'
                  },
                  {
                      label: 'Print',
                      icon: 'pi pi-print'
                  }
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-star',
              items: [
                  {
                      label: 'Copy',
                      icon: 'pi pi-copy'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times'
                  }
              ]
          },
          {
              label: 'Search',
              icon: 'pi pi-th-large'
          },
          {
              label: 'Share',
              icon: 'pi pi-share-alt',
              items: [
                  {
                      label: 'Slack',
                      icon: 'pi pi-slack'
                  },
                  {
                      label: 'Whatsapp',
                      icon: 'pi pi-whatsapp'
                  }
              ]
          }
      ]
  }
}
