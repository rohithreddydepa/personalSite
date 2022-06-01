import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  data: any;
  chartOptions: any;
  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ['DataBase', 'Backend', 'Java', 'cpp', 'Android', 'Angular'],
      datasets: [
        {
          label: 'My Confidence',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [70, 85, 90, 65, 70, 90],
        },
      ],
    };
  }
}
