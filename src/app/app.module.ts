import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { summayPipe } from 'src/summay.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, summayPipe, VideoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
