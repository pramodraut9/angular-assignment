import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userName = 'Test Name';
  teamName = '6666666666';
  email = 'Test@gmail.com';
  salesPerson = 'Sales person name';
  contactNumber = '0000000000';
  avatarUrl = 'assets/avatar.jpg';
}
