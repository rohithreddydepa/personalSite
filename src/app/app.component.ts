import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Rohith Reddy Depa';
  themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  dTheme = false;
  toggleAnimation = false;
  constructor(
    public themeSevice: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    this.themeSevice.setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    this.themeSevice.getTheme().subscribe((data) => {
      this.dTheme = data;
    });
    this.setTheme();
  }
  changeTheme() {
    this.toggleAnimation = true;
    setTimeout(() => {
      this.toggleAnimation = false;
      this.themeSevice.setTheme(!this.dTheme);
      this.setTheme();
    }, 1400);
  }
  setTheme() {
    if (this.dTheme) {
      this.themeLink.href = 'dark.css';
    } else {
      this.themeLink.href = 'light.css';
    }
  }
}
