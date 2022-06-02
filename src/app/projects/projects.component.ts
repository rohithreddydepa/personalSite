import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { iTimeLine } from '../modals/timeLine';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  events1: iTimeLine[];
  events2: any[];

  constructor() {
    this.events1 = [
      {
        status: "Android App'S",
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: 'I have build some Android namely Brain trainer, Tic-tac toe, Location copier, Currency converter, Clone text .In brain trainer app user have to answer the the math questions as many as he can in 30s for each question and time gradually decreases for next question, Currency converter is an basic app which is used to convert the American dollars to Indian rupees.You can know the functionality of the other apps by visiting the github',
      },
      {
        status: 'Full Stack',
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: "Every Business starting from startup's to multi national companies they need a website to show case there products or services to the customer so bulding website should be very essential . As a full stack Web developer i can build a website from scratch and and deploye it on servers like aws or custom server using nodejs and mongodb.",
      },
      {
        status: 'Shipped',
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: '',
      },

      {
        status: 'Delivered',
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: '',
      },
    ];

    this.events2 = ['2020', '2021', '2022', '2023'];
  }
  readData(data: any) {
    this.events1.forEach((e) => {
      if (e?.status == data) e.readMore = !e.readMore;
    });
  }
  ngOnInit(): void {}
}
