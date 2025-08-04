import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: any[] = [];

  constructor() {}
  ngOnInit(): void {
    this.users = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      email: 'johndoe@gmail.com',
      phone: '9890989098',
      birthDate: new Date(1999, 6, 7), // July 7, 1999
    }));
  }
}
