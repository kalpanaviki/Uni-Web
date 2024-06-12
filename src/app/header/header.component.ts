import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (navbar) navbar.style.padding = '30px 10px';
      if (logo) logo.style.fontSize = '25px';
    } else {
      if (navbar) navbar.style.padding = '90px 10px';
      if (logo) logo.style.fontSize = '35px';
    }
  }
} {

}
