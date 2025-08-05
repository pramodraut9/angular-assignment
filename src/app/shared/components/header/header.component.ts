import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';
import { filter, map, distinctUntilChanged, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  pageTitle = '';
  profileImage = '';
  private sub!: Subscription;

  constructor(private _authService: AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd),
        map(() => this.findDeepestRoute(this._route)),
        map(r => r.snapshot.data['title'] as string || ''),
        distinctUntilChanged()
      )
      .subscribe(title => {
        this.pageTitle = title;
      });
    this.getProfileData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private findDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private getProfileData() {
    try {
      this._authService.getProfileDetails().subscribe((res: any) => {
        this.profileImage = res.image;
      })
    } catch (error) {
      console.error(error);
    }

  }
}
