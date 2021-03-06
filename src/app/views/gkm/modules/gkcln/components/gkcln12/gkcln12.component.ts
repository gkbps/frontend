import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NavigationService } from '../../../../../../nga/services';

@Component({
  templateUrl: 'gkcln12.component.html'
})
export class GkCln12Component implements OnInit {

  tcode = 'gkcln12';
  id: string;

  constructor (
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
      });

    this.navigationService.trackHistory();
  }

}
