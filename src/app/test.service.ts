import { Injectable } from '@angular/core';

@Injectable({ // This annotation tells angular that this is a service
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printToconsole(arg: any) {
    console.log(arg)
  }
  
}
