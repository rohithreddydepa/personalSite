import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { ChartModule } from 'primeng/chart';
import { TimelineModule } from 'primeng/timeline';
import { ProjectsComponent } from './projects/projects.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SkillsComponent } from './skills/skills.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    TimelineModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
