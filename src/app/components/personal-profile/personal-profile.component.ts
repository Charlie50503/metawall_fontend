import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  isDisplayTab:{ [key: string]: boolean } = {
    personalProfileEdit:true,
    personalProfileChangePassword:false
  }
  constructor() { }

  ngOnInit(): void {
  }

  toggleIsDisplayTab(targetKey:string){
    this.isDisplayTab['isPersonalProfileChangePassword'] = true
    this.isDisplayTab['isPersonalProfileEdit'] = false
    for (const [key, value] of Object.entries(this.isDisplayTab)) {
      if(key===targetKey){
        this.isDisplayTab[key]=true
      }else{
        this.isDisplayTab[key]=false
      }
    }
  }
}
