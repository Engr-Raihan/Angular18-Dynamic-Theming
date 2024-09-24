import { NgModule } from '@angular/core';

import { AdministrationRoutingModule } from './administration-routing.module';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PlatformModule} from "../platform/platform.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    PlatformModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
