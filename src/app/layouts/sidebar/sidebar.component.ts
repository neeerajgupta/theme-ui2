import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [TieredMenuModule, CommonModule, FormsModule,TooltipModule,OverlayPanelModule,DialogModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
    @ViewChild('op') overlayPanel!: OverlayPanel;
    items: any;
body: any;
    constructor(private router: Router) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                route : '/dashboard',
                tooltipOption:{
                    tooltipLabel:"Dashboard",
                    tooltipPosition:"right"

                },
                items: [
                    {
                        label: 'Invoice',
                        icon: 'pi pi-file-pdf',
                        route : '/invoice',
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
                route : '/new-order',
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
                label: 'Orders',
                icon: 'pi pi-th-large',
                route : '/order',
                
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
            },



            {
                label: 'User',
                icon: 'pi pi-user',
                tooltipOption:{
                    tooltipLabel:"User",
                    tooltipPosition:"right"

                },
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-user',
                        route : '/login',
                       
                    },
                    {
                        label: 'Forgot Password',
                        icon: 'pi pi-user',
                        route : '/forgotpassword',
                       
                    },
                    {
                        label: 'Register',
                        icon: 'pi pi-user',
                        route : '/register',
                       
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-user',
                        route : '/auth',
                       
                    }
                ]
            },
            
        ]
    }

    routeMenu(route : any) {
        this.router.navigate([`${route}`])
       
    }



    displayOverlay: boolean = false;
    selectedItem: any;

    openOverlay(event: MouseEvent, item: any) {
        this.selectedItem = item;
        this.overlayPanel.toggle(event);
        this.routeMenu(item.route); 
    }


}
