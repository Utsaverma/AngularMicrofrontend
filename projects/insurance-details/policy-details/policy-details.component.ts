import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { setPolicyNumber } from '../../common/policyDetails';
import { SharedServiceService } from 'host/SharedService';

@Component({
  selector: 'app-policy-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  @Input() insuranceList: any[] = [];
  @Output() onPayPremium = new EventEmitter<string>();
  selectedPolicy: any = null;
  searchPolicyNumber: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.sharedService.getSharedData());
  }

  formatDate(date: string): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  handlePayPremium(policyNumber: string) {
    this.onPayPremium.emit(policyNumber);
  }

  fetchPolicyDetails(): void {
    if (this.searchPolicyNumber) {
      console.log("policy number input from user " + this.searchPolicyNumber)
      this.searchPolicyNumber = this.sanitizeInput(this.searchPolicyNumber);
      console.log("sanitized policy number " + this.searchPolicyNumber)
      if (this.isValidPolicyNumber(this.searchPolicyNumber)) {
        this.selectedPolicy = this.insuranceList.find(policy => policy.policyNumber === this.searchPolicyNumber);
      }
      if (!this.selectedPolicy) {
        console.log('Policy not found');
        this.selectedPolicy = null;
      }
    }
  }
  sanitizeInput(input: string): string {
    return input.replace(/[^a-zA-Z0-9]/g, '');
  }

  isValidPolicyNumber(input: string): boolean {
    return input.length > 0 && input.length <= 20;
  }

  onClickPayPremium(policyNumber: string) {
    console.log("set policy_number to localstorage")
    setPolicyNumber(policyNumber);
    console.log('Navigating to PreimumPayment app...');
    this.router.navigate([`/premium-payment/${policyNumber}`]);
  }
}
