import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  constructor(public theme: ThemeService) {}

  ngOnInit() {}
}
