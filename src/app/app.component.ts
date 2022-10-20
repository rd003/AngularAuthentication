import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAuthentication';
  roles="";
  isLoggedIn!:boolean;

  checkLoggedInUser(){
    this.isLoggedIn= this.authService.isLoggedIn();
    this.roles=this.authService.getUserRole();
  }
  logout(){
    this.authService.logout();
  }
  constructor(private authService:AuthService){
  }
}
