import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title='Some of my projects'
  constructor() { }

  ngOnInit() {
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
