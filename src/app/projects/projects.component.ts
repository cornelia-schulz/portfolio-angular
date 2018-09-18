import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  animal: string;
  name: string;
  title='Some of my projects';
  breakpoint: number;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
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
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      width: '250px',
      data: {}
    })
  }
}
