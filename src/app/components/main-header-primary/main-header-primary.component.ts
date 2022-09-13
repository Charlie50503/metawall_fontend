import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-header-primary',
  templateUrl: './main-header-primary.component.html',
  styleUrls: ['./main-header-primary.component.scss']
})
export class MainHeaderPrimaryComponent implements OnInit {
  @Input() title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
