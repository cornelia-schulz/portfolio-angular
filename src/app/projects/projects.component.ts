import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsService, Project } from '../shared';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  currentProject: Project;
  title='Some of my projects';
  breakpoint: number;
  constructor(public dialog: MatDialog, private projectsservice: ProjectsService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
    this.projects = this.projectsservice.projects;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
  }

  showText(e){
    let project = <HTMLElement>document.getElementById(e).firstChild.firstChild;
    project.style.display = "block";
  }

  hideText(e) {
    let project = <HTMLElement>document.getElementById(e).firstChild.firstChild;
    project.style.display = "none";
  }

  openDialog(tile): void {
    const project = this.projects[tile-1];
    console.log(project);
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      width: '350px',
      data: project
    })
  }
}
