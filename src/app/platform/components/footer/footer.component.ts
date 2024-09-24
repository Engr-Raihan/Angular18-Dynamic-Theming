import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  abouts = [
    'About SimplyCodes',
    'Communities',
    'Blog',
    'Careers',
    'Press kit'
  ]

  supports = [
    'Help Center',
    'Privacy Policy',
    'Terms'
  ]

  resources = [
    'SimplyCodes vs Honey',
    'SimplyCodes vs RetailMeNot',
    'How to find promo codes',
    'Most common coupon phrases',
    'How to save with Autoship'
  ]

  pages = [
    `Mother's Day Deals`,
    `Father's Day Deals`,
    ' Memorial Day Deals',
    'Halloween Deals',
    'Black Friday Deals',
    'Cyber Monday Deals',
    'Christmas Deals'
  ]

  contacts = [
    `Engr. Md. Raihan Mahamud`,
    `engr.raihan.buet@gmail.com`,
    `+880 1771 442 552`
  ]
}
