import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';

import { NgaModule } from '../../../../nga/nga.module';
// import { GkTcdFormModule } from './components/gktcdForm/gktcdForm.module';

import { GkTcdComponent } from './gktcd.component';
import { GkTcdRoutingModule } from './gktcd-routing.module';

import { GkTcd00Component } from './components/gktcd00';
/*
import { GkTcd01Component } from './components/gktcd01';
*/

import { GkTcd10Component } from './components/gktcd10';
/*
import { GkTcd11Component } from './components/gktcd11';
import { GkTcd12Component } from './components/gktcd12';
*/
import { GkTcd20Component } from './components/gktcd20';
/*
import { GkTcd30Component } from './components/gktcd30';
import { GkTcd40Component } from './components/gktcd40';
*/
import { GkTcd50Component } from './components/gktcd50';
import { GkTcd60Component } from './components/gktcd60';
/*
import { GkTcd80Component } from './components/gktcd80';
import { GkTcd90Component } from './components/gktcd90';
*/

import { GkClientService } from '../../../../services/gkClient.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GkTcdRoutingModule,

    DataTableModule,
    SharedModule,
    GrowlModule,
    ButtonModule,
    MultiSelectModule,
    ContextMenuModule,

    NgaModule,
    // GkTcdFormModule,
  ],
  declarations: [
    GkTcdComponent,
    GkTcd00Component,
    /*
    GkTcd01Component,
    */
    GkTcd10Component,
    /*
    GkTcd11Component,
    GkTcd12Component,
    */
    GkTcd20Component,
    /*
    GkTcd30Component,

    GkTcd40Component,
    */
    GkTcd50Component,

    GkTcd60Component,
    /*
    GkTcd80Component,

    GkTcd90Component,
    */
  ],
  providers: [
    GkClientService,
  ],
})
export class GkTcdModule { }
