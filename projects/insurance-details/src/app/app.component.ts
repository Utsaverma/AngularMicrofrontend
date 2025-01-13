import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyDetailsComponent } from '../../policy-details/policy-details.component';
import { policyDS } from '../../../common/policyDetails';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PolicyDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insurance-details';

  insuranceList = policyDS;

  selectedPolicy: any = null;

  openPremiumPayment(policyNumber: string) {
    this.selectedPolicy = this.insuranceList.find(
      (insurance) => insurance.policyNumber === policyNumber
    );
    console.log(`Selected policy for payment:`, this.selectedPolicy);
  }
}
