import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {

  }
  onPremiumPaymentClick(): void {
    console.log('Navigating to Premium Payment...');
    this.router.navigate(['/premium-payment']);
  }

  onViewDetailsClick(): void {
    console.log('Navigating to Insurance Details...');
    this.router.navigate(['/insurance-details']);
  }
}
