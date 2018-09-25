import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlurbComponent } from './blurb/blurb.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectsService, MailService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ProjectsComponent,
    ContactComponent,
    BlurbComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  entryComponents: [ProjectDetailsComponent],
  providers: [ProjectsService, MailService],
  bootstrap: [AppComponent, ProjectDetailsComponent]
})
export class AppModule { }
