// External
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Internal
import { AppTranslationModule } from '../../../app.translation.module';

import { P403RoutingModule } from './403-routing.module';
import { P403Component } from './403.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    AppTranslationModule,
    P403RoutingModule,
  ],
  declarations: [
    P403Component,
  ],
  providers: [
  ],
})
export class P403Module {}
