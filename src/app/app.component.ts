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
  dTheme: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
  constructor(
    public themeSevice: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
    this.themeSevice.getTheme().subscribe((data) => {
      this.dTheme = data;
    });
    this.setTheme();
  }
  changeTheme() {
    this.themeSevice.setTheme(!this.dTheme);
    this.setTheme();
  }
  themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  setTheme() {
    if (this.dTheme) {
      this.themeLink.href = 'dark.css';
    } else {
      this.themeLink.href = 'light.css';
    }
  }
}
