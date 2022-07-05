import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data: any;
  constructor(public themeService: ThemeService) {}
  dTheme: boolean = false;
  ngOnInit() {
    this.themeService.getTheme().subscribe((data) => {
      this.dTheme = data;
    });
  }
}
