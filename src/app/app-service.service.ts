import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;
  public get(url: string, options?: any) {
    return this.http.get(`${this.baseUrl}${url}`, options);
  }
  public post(url: string, data: any, options?: any) {}
  public put(url: string, data: any, options?: any) {}
}
