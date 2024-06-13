import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo')?.getElementsByTagName('img')[0]; // Get the image inside the logo
    const links = document.querySelectorAll('#navbar a'); // Get all nav links

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (navbar) navbar.style.padding = '20px 10px';
      if (logo) {
        logo.style.height = '60px'; // Height after scroll
        logo.style.width = '138px'; // Width after scroll
      }
      links.forEach(link => {
        (link as HTMLElement).style.fontSize = '20px'; // Font size after scroll
      });
    } else {
      if (navbar) navbar.style.padding = '30px 10px';
      if (logo) {
        logo.style.height = '100px'; // Initial height
        logo.style.width = '230px'; // Initial width
      }
      links.forEach(link => {
        (link as HTMLElement).style.fontSize = '25px'; // Initial font size
      });
    }
  }
}

