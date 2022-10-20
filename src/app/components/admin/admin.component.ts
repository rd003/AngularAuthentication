import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';
import { ProtectedService } from 'src/app/services/protected.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  status!:Status;
  constructor(private protectedService:ProtectedService) { }

  ngOnInit(): void {
    this.protectedService.getAdminData().subscribe({
      next: (res)=>{
       this.status=res;
      },
      error: (err)=>{
        console.log(err);      }
    })
  }

}
