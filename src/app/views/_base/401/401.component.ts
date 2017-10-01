import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TcodeService } from '../../../nga/services';

@Component({
  templateUrl: '401.component.html'
})
export class P401Component {
  public tcodeExecution: string = '';

  constructor(
    private tcodeService: TcodeService,
    private router: Router,
  ) { }

  public keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.executeTcode()
    }
  }

  public executeTcode() {
    const url: string = this.tcodeService.urlLead(this.tcodeExecution);
    console.log(url);
    this.tcodeExecution = '';
    this.router.navigate([url]);
  }

}
