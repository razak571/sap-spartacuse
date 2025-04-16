import { Component, OnInit, Input } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-my-first-cms',
  templateUrl: './my-first-cms.component.html',
  styleUrls: ['./my-first-cms.component.scss'],
})
export class MyFirstCmsComponent implements OnInit {
  constructor(public component: CmsComponentData<any>) {}

  ngOnInit(): void {}
}
