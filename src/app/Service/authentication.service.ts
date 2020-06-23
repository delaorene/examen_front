import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authentication } from '../Modelo/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  UrlToken = 'http://localhost:8899/micro_app_rest_full/oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username=app&password=pruebas';

  getToken() {
    return this.http.get<authentication>(this.UrlToken);
  }

 }
