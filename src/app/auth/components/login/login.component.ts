import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this._intializeForm();
  }

  onLogin(formdata: any) {
    this._authService.login(formdata.username, formdata.password).subscribe({
      next: (res: any) => {
        this._toastrService.success('Login Successfully');
        if (res.accessToken) {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          this._router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        this._toastrService.error('Invalid credentials');
        this.loginForm.reset();
        console.error('Login error:', err);
      },
    });
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
