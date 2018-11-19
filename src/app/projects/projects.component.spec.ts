import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsService } from '../shared/projects.service';
import { ProjectsComponent } from './projects.component';
import { MatGridListModule,
         MatIconModule,
         MatDialogModule } from '@angular/material';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        MatIconModule,
        MatDialogModule
      ],
      declarations: [ ProjectsComponent ],
      providers: [
        ProjectsService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
