import { Injectable } from '@angular/core';
import { policyDS } from '../../common/policyDetails';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  getData() {
    return 'Shared Data';
  }

  getPolicyDetails() {
    return policyDS;
  }
}
