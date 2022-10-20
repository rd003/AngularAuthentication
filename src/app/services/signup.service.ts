import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChangePasswrd } from '../models/change-password';
import { LoginResponseModel } from '../models/login-response';
import { LoginRequestModel } from '../models/loginRequestModel';
import { SignupRequestModel } from '../models/signupReqModel';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = environment.baseUrl+'/authorization';
  constructor(private http:HttpClient) { 

  }

  login(model:LoginRequestModel){
  return this.http.post<LoginResponseModel>(this.baseUrl+'/login',model);
  }

  signup(model:SignupRequestModel){
     return this.http.post<Status>(this.baseUrl+'/registration',model);
  }

  chagePassword(model:ChangePasswrd){
    return this.http.post<Status>(this.baseUrl+'/chagepassword',model);
    }

}
