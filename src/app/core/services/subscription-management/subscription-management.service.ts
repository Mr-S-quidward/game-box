import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable()
export class SubscriptionManagementService implements OnDestroy {
  subscriptions: Subscription[] = [];

  constructor() {
    console.log('instance');
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  registerSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  private unsubscribe(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
