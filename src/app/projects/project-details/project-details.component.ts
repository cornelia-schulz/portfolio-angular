import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../../shared';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
