import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsService, Project } from '../shared';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  currentProject: Project;
  title = 'Some of my projects';
  breakpoint: number;
  constructor(public dialog: MatDialog, private projectsservice: ProjectsService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
    this.projects = this.projectsservice.projects;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
  }

  showText(e) {
    const project = <HTMLElement>document.getElementById(e).firstChild.firstChild;
    project.style.display = 'block';
  }

  hideText(e) {
    const project = <HTMLElement>document.getElementById(e).firstChild.firstChild;
    project.style.display = 'none';
  }

  openDialog(tile): void {
    const project = this.projects[tile - 1];
    let size: string;
    if (window.innerWidth <= 400) {
      size = '100%';
    } else if (window.innerWidth <= 700) {
      size = '380px';
    } else {
      size = '50%';
    }
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      width: size,
      data: project,
      panelClass: 'projects-modalbox'
    });
  }
}

