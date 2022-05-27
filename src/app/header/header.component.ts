import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: any;
  constructor(private http: AppServiceService) {}
  ngOnInit(): void {
    this.http.get('/data').subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
