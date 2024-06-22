import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './menu-navbar.component.html',
  styleUrl: './menu-navbar.component.scss'
})
export class MenuNavbarComponent {

}
