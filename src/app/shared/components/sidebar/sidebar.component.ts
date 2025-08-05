import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  _modalRef?: BsModalRef;

  constructor(private _modalService: BsModalService, private _router: Router) { }

  openLogoutModal(template: TemplateRef<any>) {
    this._modalRef = this._modalService.show(template, { class: 'modal-dialog-centered' });
  }

  logout() {
    this._modalRef?.hide();
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
