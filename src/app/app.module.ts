import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    IntroductionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
