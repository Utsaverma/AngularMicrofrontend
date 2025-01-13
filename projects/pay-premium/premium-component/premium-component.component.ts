import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { getPolicyNumber } from '../../common/policyDetails';
import { SharedServiceService } from '../../insurance-app/shared/shared-service.service';

@Component({
  selector: 'app-premium-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './premium-component.component.html',
  styleUrls: ['./premium-component.component.scss']
})
export class PremiumComponentComponent {
  @Input() policyNumber: string = '';
  @Output() paymentSuccess = new EventEmitter<string>();

  policies: { [key: string]: number } = {};

  premiumAmount: number | null = null;

  paymentDetails = {
    paymentMethod: 'Credit Card',
    amount: 0,
    referenceNumber: ''
  };

  constructor(private route: ActivatedRoute, private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.policyNumber = this.route.snapshot.paramMap.get('policyNumber')!;
    console.log('policyNumber from localstorage ', getPolicyNumber());
    this.policies = this.sharedService.getPolicyDetails().reduce((acc, policy) => {
      acc[policy.policyNumber] = policy.premium;
      return acc;
    }, {} as { [key: string]: number });
    this.fetchPremium(true);
  }

  sanitizeInput(input: string): string {
    return input.replace(/[^a-zA-Z0-9]/g, '');
  }

  isValidPolicyNumber(input: string): boolean {
    return input.length > 0 && input.length <= 20;
  }

  fetchPremium(init: boolean = false) {
    if (this.policyNumber) {

      this.policyNumber = this.sanitizeInput(this.policyNumber);
      if (this.isValidPolicyNumber(this.policyNumber) && this.policyNumber in this.policies) {
        this.premiumAmount = this.policies[this.policyNumber];
        this.paymentDetails.amount = this.premiumAmount;
      } else {
        alert('Policy number not found!');
        this.premiumAmount = null;
        this.paymentDetails.amount = 0;
      }
    }
  }

  processPayment() {
    if (!this.premiumAmount) {
      alert('Please fetch the premium for a valid policy number first.');
      return;
    }

    console.log(`Processing payment for policy: ${this.policyNumber}`);
    console.log('Payment details:', this.paymentDetails);

    this.paymentSuccess.emit(`Payment successful for policy ${this.policyNumber}`);
  }

  recalculatePremium() {
    console.log("recalculating premium");
    let premiumAmount = this.premiumAmount;
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('../src/app/assets/premium.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`Received response from worker`);
        this.premiumAmount = data.premiumAmount;
        alert(`premium updated to ${this.premiumAmount}`)
      };
      worker.postMessage({ policyNumber: this.policyNumber, premiumAmount: premiumAmount });
    } else {
      console.log("Something with the worker logic broke");
    }
  }
}
