import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: any[] = [];
  searchText: string = '';
  isLoading: boolean = false;
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  private getUsersData() {
    try {
      this.isLoading = true;
      this._apiService.getAllUsers().subscribe((res: any) => {
        this.users = res.users;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
      console.error(error);
    }
  }
}
