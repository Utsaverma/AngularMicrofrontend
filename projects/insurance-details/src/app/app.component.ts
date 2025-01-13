import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyDetailsComponent } from '../../policy-details/policy-details.component';
import { policyDS } from '../../../common/policyDetails';
import { SharedServiceService } from '../../../insurance-app/shared/shared-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PolicyDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'insurance-details';
  insuranceList: any[] = [];
  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.insuranceList = this.sharedService.getPolicyDetails()
  }

  selectedPolicy: any = null;

  openPremiumPayment(policyNumber: string) {
    this.selectedPolicy = this.insuranceList.find(
      (insurance) => insurance.policyNumber === policyNumber
    );
    console.log(`Selected policy for payment:`, this.selectedPolicy);
  }
}
