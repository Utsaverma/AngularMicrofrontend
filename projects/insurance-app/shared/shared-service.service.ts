import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  public getSharedData() {
    return 'Shared data from the host!';
  }
}
