import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new Subject<boolean>();
  getTheme(): Observable<boolean> {
    return this.theme.asObservable();
  }
  setTheme(data: boolean) {
    this.theme.next(data);
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme.next(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
}
