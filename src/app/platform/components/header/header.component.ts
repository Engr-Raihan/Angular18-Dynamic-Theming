import { Component } from '@angular/core';
import {HeaderNavigation} from "../../interfaces/platform.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  Navigations: HeaderNavigation[] = [
    {
      Icon: '',
      Link: '/',
      Name: 'The Planet Deals'
    },
    {
      Icon: '',
      Link: 'store/software',
      Name: 'Top Stores'
    },
    {
      Icon: '',
      Link: '/',
      Name: 'Hot Coupons'
    },
    {
      Icon: '',
      Link: '/about',
      Name: 'About Us',
      Frag: 'about-us'
    },
    {
      Icon: '',
      Link: '/contact',
      Name: 'More Info',
      Frag: 'contact-us'
    }
  ]
}
