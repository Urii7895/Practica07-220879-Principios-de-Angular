import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,ContentComponent,BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-07-220879';
}