import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.setTheme();
  }
  setTheme() {
    if (this.dark) {
      this.themeLink.href = 'dark.css';
    } else {
      this.themeLink.href = 'light.css';
    }
  }
  switchTheme() {
    this.dark = !this.dark;
  }
}
