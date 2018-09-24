import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public sidenavOpen: boolean;
    public sidenavToggleIcon: string;
    public sidenavLinks: { display: string, route: string }[];


    constructor() { }

    public ngOnInit(): void {
        this.sidenavOpen = false;
        this.sidenavToggleIcon = 'reorder';
        this.sidenavLinks = [
            { display: 'Home', route: 'home' },
            { display: 'Foods Overview', route: 'foods' },
            { display: 'Week Planner', route: 'planner' },
        ];
    }

}
