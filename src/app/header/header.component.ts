import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  options = {
    strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
    typeSpeed: 100,
    backSpeed: 35,
    loop: true,
  };
}
