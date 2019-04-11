import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    collapsed: boolean;
    up:string="up";
    down:string="down";
    pushRightClass: string;
    isActive: boolean;
    showMenu: string;
    @Output() collapsedEvent = new EventEmitter<boolean>();
    
    constructor(private translate: TranslateService, public router: Router) {
        // this.sliders.push(
        //     {
        //         imagePath: 'assets/images/slider1.jpg',
        //         label: 'First slide label',
        //         text:
        //             'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider2.jpg',
        //         label: 'Second slide label',
        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider3.jpg',
        //         label: 'Third slide label',
        //         text:
        //             'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        //     }
        // );

        // this.alerts.push(
        //     {
        //         id: 1,
        //         type: 'success',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     },
        //     {
        //         id: 2,
        //         type: 'warning',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     }
        // );

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 1 && this.isToggled()
            ) {
                this.toggleSetting();
            }
        });
    }

    ngOnInit() {
        this.collapsed = false;
        this.pushRightClass = 'push-right';
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public toggleCollapsed(){
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
        this.showForm();
    }

    public isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    public toggleSetting() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    
    public showForm(){
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }

        
    }
}
