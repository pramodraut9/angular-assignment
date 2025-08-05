import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IProfile } from '../../Interfaces/Iprofile.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  profile: IProfile | null = null;
  isLoading: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.getProfileData();
  }

  private getProfileData() {
    try {
      this.isLoading = true;
      this._authService.getProfileDetails().subscribe((res: any) => {
        this.profile = {
          firstName: res.firstName ?? 'N/A',
          lastName: res.lastName ?? '',
          teamName: res.teamName ?? '',
          email: res.email ?? '',
          salesPerson: res.company.name ?? '',
          contactNumber: res.phone ?? '',
          avatarUrl: res.image ?? '',
        }
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
      console.error(error);
    }
  }
}
