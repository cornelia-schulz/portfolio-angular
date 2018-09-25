import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from './mail.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class MailService {
  url = 'api/v1/nodemailer/send'
  constructor(private http: HttpClient) {}

  sendMail(mail: Mail): Observable<Mail> {
    console.log("sending mail")
    return this.http.post<Mail>(this.url, mail, httpOptions)
  }

}