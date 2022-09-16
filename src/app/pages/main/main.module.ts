import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ConfigService } from 'src/app/services/config.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers:[
    ConfigService,
    {
      provide:APP_INITIALIZER,
      useFactory:(configService:ConfigService) => function() { return configService.load()},
      deps:[ConfigService],
      multi:true,
    },
  ]
})
export class MainModule { }
