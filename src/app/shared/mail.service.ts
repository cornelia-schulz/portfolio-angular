<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail (mail) {
    return this.http.post('./api/nodemailer/send', mail )
  }
=======
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from './mail.module'

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
    return this.http.post<Mail>(this.url, mail, httpOptions)
  }

>>>>>>> 0cb320e621959661013bfdd2b129cd19740bd6aa
}