import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MailService, Mail } from '../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  currentMail: Mail;
  constructor(public snackBar: MatSnackBar, private mailservice: MailService) { }

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
    this.currentMail = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    console.log(this.currentMail);
    this.mailservice.sendMail(this.currentMail)
  }

  clearForm() {}
}
