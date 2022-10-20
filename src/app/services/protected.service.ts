import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {
  private baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }
  
  getUserData(){
    return this.http.get<Status>(this.baseUrl+'/protected/getdata');
  }

  getAdminData(){
    return this.http.get<Status>(this.baseUrl+'/admin/getdata');
  }

}
