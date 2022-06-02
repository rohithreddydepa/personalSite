import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  data: any;
  chartOptions: any;
  constructor(public theme: ThemeService) {}

  ngOnInit() {
    this.data = {
      labels: ['DataBase', 'Backend', 'Java', 'cpp', 'Android', 'FrontEnd'],
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
    this.updateChartOptions();
  }
  updateChartOptions() {
    this.chartOptions = this.theme.dark
      ? this.getDarkTheme()
      : this.getLightTheme();
  }

  getLightTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        r: {
          pointLabels: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
          angleLines: {
            color: '#ebedef',
          },
        },
      },
    };
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
      scales: {
        r: {
          pointLabels: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
          angleLines: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };
  }
}
