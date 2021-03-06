// External
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Internal
import { AppTranslationModule } from '../../../app.translation.module';

import { P404RoutingModule } from './404-routing.module';
import { P404Component } from './404.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    AppTranslationModule,
    P404RoutingModule,
  ],
  declarations: [
    P404Component,
  ],
  providers: [
  ],
})
export class P404Module {}
