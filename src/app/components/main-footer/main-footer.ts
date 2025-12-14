import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'main-footer',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.scss',
})
export class MainFooter {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
}
