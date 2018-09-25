import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail (mail) {
    return this.http.post('./api/nodemailer/send', mail )
  }
}