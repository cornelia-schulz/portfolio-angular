import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title='Some of my projects'
  breakpoint: number
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
  }

  showText(e){
    let project = <HTMLElement>document.getElementById(e).firstChild.firstChild;
    project.style.display = "block"
  }

  hideText(e) {
    let project = <HTMLElement>document.getElementById(e).firstChild.firstChild;
    project.style.display = "none"
  }
}
