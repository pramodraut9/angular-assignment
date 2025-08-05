import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: any[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.users = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      email: 'johndoe@gmail.com',
      phone: '9890989098',
      birthDate: new Date(1999, 6, 7),
    }));
    this.getUsersData();
  }

  private getUsersData() {
    try {
      this._apiService.getAllUsers().subscribe((res) => {
        console.log(res, 'ress');
      });
    } catch (error) {
      console.error(error);
    }
  }
}
