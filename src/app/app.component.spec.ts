import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlurbComponent } from './blurb/blurb.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsService } from './shared/projects.service';
import { MailService } from './shared/mail.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSnackBar,
        MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent,
        ProjectsComponent,
        BlurbComponent,
        ContactComponent,
        FooterComponent
      ],
      providers: [
        ProjectsService,
        MailService,
        {
          provide: MatSnackBar, useValue: {}
        }],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'portfolio-angular'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Portfolio');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Web Developer');
  }));
});
