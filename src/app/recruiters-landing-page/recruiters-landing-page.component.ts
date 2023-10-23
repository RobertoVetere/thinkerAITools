import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiters-landing-page',
  templateUrl: './recruiters-landing-page.component.html',
  styleUrls: ['./recruiters-landing-page.component.scss']
})
export class RecruitersLandingPageComponent {
  constructor(private router: Router) {
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Reemplaza 'dashboard' con la ruta de destino real
  }
}