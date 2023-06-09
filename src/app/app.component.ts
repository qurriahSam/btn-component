import { Component } from '@angular/core';
import { Icon } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  button = ['outline', 'primary', ''];
  icons: Icon[] = [
    'bi-brightness-high',
    'bi-alarm',
    'bi-browser-chrome',
    'bi-broadcast-pin',
    'bi-reddit',
    '',
  ];
}
