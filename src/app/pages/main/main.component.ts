import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userProfile:user = this.configService.userProfile
  constructor(
    private configService:ConfigService
  ) { }
  ngOnInit(): void {
    console.log(this.userProfile);
  }

}
