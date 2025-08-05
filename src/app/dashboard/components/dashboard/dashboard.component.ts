import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName = 'Test Name';
  teamName = '6666666666';
  email = 'Test@gmail.com';
  salesPerson = 'Sales person name';
  contactNumber = '0000000000';
  avatarUrl = '/assets/avatar.jpg';

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.getProfileData();
  }

  private getProfileData() {
    try {
      this._authService.getProfileDetails().subscribe((res) => {
        console.log(res, 'ress');
      });
    } catch (error) {
      console.error(error);
    }
  }
}
