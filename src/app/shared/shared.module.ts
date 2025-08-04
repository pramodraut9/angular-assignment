import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MainLandingComponent } from './components/main-landing/main-landing.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MainLandingComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {}
