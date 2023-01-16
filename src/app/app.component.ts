import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor(private svc: TestService) { // Pass an instance of TestService upon creation
    this.user = new User();
    this.user.name = 'Julius Thomsen';
    this.user.designation = 'Chief god-emperor';
    this.user.address = 'tuff-gatan 10';
    this.user.phone[0] = '072-335 16 82';
    this.user.phone[1] = '070-534 23 62';

    svc.printToconsole("Got the service, it works!")
  }

}
