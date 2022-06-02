import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rohith Reddy Depa';
  dark = environment.dark;
  constructor(private titleService: Title) {
    titleService.setTitle(this.title);
    console.log(this.dark);
  }
}
