import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  messageSentSnackBar() {
    const message = 'Your email has been sent.';
    const action = 'OK';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  processForm() {
    const contactInfo = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    console.log(contactInfo);
  }

  clearForm() {}
}
