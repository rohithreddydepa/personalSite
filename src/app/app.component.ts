import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rohith Reddy Depa';
  dark: boolean;
  constructor(public theme: ThemeService) {
    this.dark = theme.dark;
    console.log(this.dark);
  }
}
