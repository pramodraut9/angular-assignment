import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._intializeForm();
  }

  onLogin(formdata: any) {
    try {
      this._authService
        .login(formdata.username, formdata.password)
        .subscribe((res: any) => {
          console.log(res);
          if (res.accessToken) {
            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('refreshToken', res.refreshToken);
            this._router.navigate(['/dashboard']);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  private _intializeForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
