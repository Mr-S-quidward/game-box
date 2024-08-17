import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {
  private readonly TOKEN: string = "fake-jwt-token";

  constructor() {
  }

}
