import { Component, OnInit } from '@angular/core';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-custome-card',
  templateUrl: './custome-card.component.html',
  styleUrls: ['./custome-card.component.scss'],
})
export class CustomeCardComponent extends BaseCardComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
