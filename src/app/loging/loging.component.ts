import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent {

  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/nav']);
  }
}
