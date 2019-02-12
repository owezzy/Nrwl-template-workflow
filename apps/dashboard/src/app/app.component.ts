import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/', title: 'Home', icon: 'home'},
    { path: '/customers', icon: 'face' , title: 'Customers' },
    { path: '/projects', icon: 'event', title: 'Projects' },
  ]
}
