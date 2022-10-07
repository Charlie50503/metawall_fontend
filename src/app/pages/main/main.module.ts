import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainResolver } from 'src/app/router-resolve/main.resolver.service';
import { AllPostResolver } from 'src/app/router-resolve/all-post.resolver.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [
    MainResolver,
    AllPostResolver
  ],
})
export class MainModule { }
