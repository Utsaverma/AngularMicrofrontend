import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance-app';
  premiumComponent: any
  ngOnInit() {
    import('premiumPayment/PremiumComponent').then(m => this.premiumComponent = m.PremiumComponentComponent)
  }

  recalculatePremium() {
    if (this.premiumComponent && typeof this.premiumComponent.prototype.recalculatePremium === 'function') {
      const componentInstance = new this.premiumComponent();
      componentInstance.recalculatePremium(); // Calling the method from the remote component
    } else {
      console.error('PremiumComponent is not loaded or method is not available');
    }
  }
}
