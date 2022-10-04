import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainResolver } from 'src/app/router-resolve/main.resolver.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [
    MainResolver
  ],
})
export class MainModule { }
