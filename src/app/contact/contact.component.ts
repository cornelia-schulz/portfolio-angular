import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mail, MailService } from '../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  mail: Mail;
  constructor(public snackBar: MatSnackBar, public mailservice: MailService) { }

  ngOnInit() {
  }

  messageSentSnackBar() {
    const message = 'Your email has been sent.';
    const action = 'OK';
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  processForm() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.mailservice.sendMail(data).subscribe((response) => {
      console.log('response from post data is ', response);
    }, (error) => {
      console.log('error during post is ', error);
    });
    console.log(data);
    this.clearForm();
  }

  clearForm() {
      this.name = '',
      this.email = '',
      this.message = '';
  }

}
