import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RefreshTokenRequest } from '../models/refresh-token-reqest';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  private baseUrl:string=environment.baseUrl+'/token';
  
  generateRefreshToken(data:RefreshTokenRequest){
    const url= this.baseUrl+'/refresh';
    return this.http.post<RefreshTokenRequest>(url,data);
  }

  revokeRefreshToken(){
   const url=this.baseUrl+'/revoke';
   return this.http.post(url,null);
  }
}
